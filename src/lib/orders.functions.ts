import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { priceOrder } from "./pricing";
import { maskPhone, type OrderItemView, type OrderView, type Result } from "./order-types";

// SMS is not connected yet, so the one-time code is returned to the page and shown on screen.
// Set to false once an SMS provider sends the code instead.
const OTP_TEST_MODE = true;
const OTP_TTL_MINUTES = 10;
const OTP_MAX_ATTEMPTS = 5;
const OTP_MAX_PER_HOUR = 5;

const phoneSchema = z.string().trim().regex(/^\+\d{8,15}$/, "Enter a valid phone number");
const orderCodeSchema = z
  .string()
  .trim()
  .toUpperCase()
  .regex(/^OT-?[A-Z0-9]{6}$/, "Enter a valid order ID")
  .transform((c) => (c.includes("-") ? c : `OT-${c.slice(2)}`));

const createOrderSchema = z.object({
  contact: z.object({
    fullName: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(255),
    phone: phoneSchema,
  }),
  address: z.object({
    line1: z.string().trim().min(3).max(200),
    line2: z.string().trim().max(200).optional(),
    city: z.string().trim().min(2).max(100),
    state: z.string().trim().min(2).max(100),
    postalCode: z.string().trim().regex(/^[A-Za-z0-9 -]{3,10}$/),
    country: z.string().trim().min(2).max(60),
  }),
  lines: z
    .array(z.object({ slug: z.string().max(40), qty: z.number().int().min(1).max(10), plan: z.enum(["one-time", "subscribe"]) }))
    .min(1)
    .max(20),
  promoCode: z.string().trim().max(30).optional(),
  payment: z.discriminatedUnion("method", [
    z.object({ method: z.literal("card"), last4: z.string().regex(/^\d{4}$/) }),
    z.object({ method: z.literal("upi") }),
  ]),
});

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function randomOrderCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return "OT-" + Array.from(bytes, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join("");
}

function randomOtp(): string {
  const n = crypto.getRandomValues(new Uint32Array(1))[0]! % 1_000_000;
  return n.toString().padStart(6, "0");
}

async function sha256(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

type OrderRow = {
  id: string;
  order_code: string;
  created_at: string;
  status: string;
  full_name: string;
  email: string;
  phone: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  items: unknown;
  subtotal_cents: number;
  discount_cents: number;
  shipping_cents: number;
  total_cents: number;
  promo_code: string | null;
  payment_method: string;
  payment_last4: string | null;
};

function toView(row: OrderRow): OrderView {
  return {
    orderCode: row.order_code,
    createdAt: row.created_at,
    status: row.status,
    fullName: row.full_name,
    email: row.email,
    phone: row.phone,
    address: {
      line1: row.address_line1,
      line2: row.address_line2,
      city: row.city,
      state: row.state,
      postalCode: row.postal_code,
      country: row.country,
    },
    items: (Array.isArray(row.items) ? row.items : []) as OrderItemView[],
    subtotalCents: row.subtotal_cents,
    discountCents: row.discount_cents,
    shippingCents: row.shipping_cents,
    totalCents: row.total_cents,
    promoCode: row.promo_code,
    paymentMethod: row.payment_method,
    paymentLast4: row.payment_last4,
  };
}

export const createOrder = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => createOrderSchema.parse(input))
  .handler(async ({ data }): Promise<Result<OrderView>> => {
    let priced;
    try {
      priced = priceOrder(data.lines, data.promoCode);
    } catch {
      return { ok: false, error: "One of the items in your bag is no longer available." };
    }
    const items: OrderItemView[] = priced.lines.map((l) => ({
      slug: l.slug,
      name: l.name,
      qty: l.qty,
      plan: l.plan,
      unitCents: l.unitCents,
      lineCents: l.lineCents,
    }));
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    for (let attempt = 0; attempt < 5; attempt++) {
      const { data: row, error } = await supabaseAdmin
        .from("orders")
        .insert({
          order_code: randomOrderCode(),
          full_name: data.contact.fullName,
          email: data.contact.email.toLowerCase(),
          phone: data.contact.phone,
          address_line1: data.address.line1,
          address_line2: data.address.line2 || null,
          city: data.address.city,
          state: data.address.state,
          postal_code: data.address.postalCode.toUpperCase(),
          country: data.address.country,
          items: items as unknown as never,
          subtotal_cents: priced.subtotalCents,
          discount_cents: priced.discountCents,
          shipping_cents: priced.shippingCents,
          total_cents: priced.totalCents,
          promo_code: priced.promoApplied,
          payment_method: data.payment.method,
          payment_status: "test_paid",
          payment_last4: data.payment.method === "card" ? data.payment.last4 : null,
        })
        .select("*")
        .single();
      if (!error && row) return { ok: true, data: toView(row as OrderRow) };
      if (error?.code !== "23505") {
        console.error("createOrder failed", error);
        return { ok: false, error: "We couldn't place your order. Please try again." };
      }
    }
    return { ok: false, error: "We couldn't place your order. Please try again." };
  });

const lookupSchema = z.object({ orderCode: orderCodeSchema, phone: phoneSchema });
const NOT_FOUND = "We couldn't find an order with that order ID and phone number.";

export const requestTrackingCode = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => lookupSchema.parse(input))
  .handler(async ({ data }): Promise<Result<{ maskedPhone: string; testCode: string | null; expiresInMinutes: number }>> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: order } = await supabaseAdmin
      .from("orders")
      .select("id, phone")
      .eq("order_code", data.orderCode)
      .maybeSingle();
    if (!order || order.phone !== data.phone) return { ok: false, error: NOT_FOUND };

    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("order_tracking_codes")
      .select("id", { count: "exact", head: true })
      .eq("order_id", order.id)
      .gte("created_at", since);
    if ((count ?? 0) >= OTP_MAX_PER_HOUR) {
      return { ok: false, error: "Too many codes requested. Please try again in an hour." };
    }

    const code = randomOtp();
    const { error } = await supabaseAdmin.from("order_tracking_codes").insert({
      order_id: order.id,
      code_hash: await sha256(`${order.id}:${code}`),
      expires_at: new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000).toISOString(),
    });
    if (error) {
      console.error("requestTrackingCode failed", error);
      return { ok: false, error: "We couldn't send a code right now. Please try again." };
    }
    return {
      ok: true,
      data: { maskedPhone: maskPhone(order.phone), testCode: OTP_TEST_MODE ? code : null, expiresInMinutes: OTP_TTL_MINUTES },
    };
  });

const verifySchema = lookupSchema.extend({ code: z.string().trim().regex(/^\d{6}$/, "Enter the 6-digit code") });

export const verifyTrackingCode = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => verifySchema.parse(input))
  .handler(async ({ data }): Promise<Result<OrderView>> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: order } = await supabaseAdmin.from("orders").select("*").eq("order_code", data.orderCode).maybeSingle();
    if (!order || order.phone !== data.phone) return { ok: false, error: NOT_FOUND };

    const { data: otp } = await supabaseAdmin
      .from("order_tracking_codes")
      .select("id, code_hash, attempts, expires_at, verified_at")
      .eq("order_id", order.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (!otp || otp.verified_at || new Date(otp.expires_at).getTime() < Date.now()) {
      return { ok: false, error: "This code has expired. Please request a new one." };
    }
    if (otp.attempts >= OTP_MAX_ATTEMPTS) {
      return { ok: false, error: "Too many wrong attempts. Please request a new code." };
    }
    if ((await sha256(`${order.id}:${data.code}`)) !== otp.code_hash) {
      const attempts = otp.attempts + 1;
      await supabaseAdmin.from("order_tracking_codes").update({ attempts }).eq("id", otp.id);
      const left = OTP_MAX_ATTEMPTS - attempts;
      return {
        ok: false,
        error: left > 0 ? `That code isn't right. ${left} ${left === 1 ? "try" : "tries"} left.` : "Too many wrong attempts. Please request a new code.",
      };
    }
    await supabaseAdmin.from("order_tracking_codes").update({ verified_at: new Date().toISOString() }).eq("id", otp.id);
    return { ok: true, data: toView(order as OrderRow) };
  });
