import { findCatalogProduct, type PlanType } from "./catalog";

export const SUBSCRIBE_DISCOUNT = 0.2; // Subscribe & save 20%
export const PROMO_CODES: Record<string, number> = { ONETHING: 0.1 }; // "Save 10% with code OneThing"
export const SHIPPING_CENTS = 0; // Free international shipping
export const MAX_QTY = 10;

export interface CartLine {
  slug: string;
  qty: number;
  plan: PlanType;
}

export interface PricedLine extends CartLine {
  name: string;
  unitCents: number;
  regularUnitCents: number;
  lineCents: number;
}

export interface PricedOrder {
  lines: PricedLine[];
  subtotalCents: number;
  subscribeSavingsCents: number;
  discountCents: number;
  shippingCents: number;
  totalCents: number;
  promoApplied: string | null;
  promoError: string | null;
}

export function unitPrice(priceCents: number, plan: PlanType): number {
  return plan === "subscribe" ? Math.round(priceCents * (1 - SUBSCRIBE_DISCOUNT)) : priceCents;
}

export function normalizePromo(code: string | undefined | null): string {
  return (code ?? "").trim().toUpperCase();
}

export function priceOrder(lines: CartLine[], promoCode?: string | null): PricedOrder {
  const priced: PricedLine[] = lines.map((line) => {
    const product = findCatalogProduct(line.slug);
    if (!product) throw new Error(`Unknown product: ${line.slug}`);
    const qty = Math.min(MAX_QTY, Math.max(1, Math.floor(line.qty)));
    const unitCents = unitPrice(product.priceCents, line.plan);
    return { ...line, qty, name: product.name, unitCents, regularUnitCents: product.priceCents, lineCents: unitCents * qty };
  });
  const subtotalCents = priced.reduce((sum, l) => sum + l.lineCents, 0);
  const subscribeSavingsCents = priced.reduce((sum, l) => sum + (l.regularUnitCents - l.unitCents) * l.qty, 0);
  const code = normalizePromo(promoCode);
  const rate = code ? PROMO_CODES[code] : undefined;
  const discountCents = rate ? Math.round(subtotalCents * rate) : 0;
  const shippingCents = priced.length ? SHIPPING_CENTS : 0;
  return {
    lines: priced,
    subtotalCents,
    subscribeSavingsCents,
    discountCents,
    shippingCents,
    totalCents: subtotalCents - discountCents + shippingCents,
    promoApplied: rate ? code : null,
    promoError: code && !rate ? "That code isn't valid" : null,
  };
}

export function formatMoney(cents: number): string {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(cents / 100);
}
