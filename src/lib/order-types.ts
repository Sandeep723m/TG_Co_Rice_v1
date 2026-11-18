import type { PlanType } from "./catalog";

export const ORDER_STEPS = [
  { key: "confirmed", label: "Order confirmed" },
  { key: "packed", label: "Packed" },
  { key: "shipped", label: "Shipped" },
  { key: "out_for_delivery", label: "Out for delivery" },
  { key: "delivered", label: "Delivered" },
] as const;

export interface OrderItemView {
  slug: string;
  name: string;
  qty: number;
  plan: PlanType;
  unitCents: number;
  lineCents: number;
}

export interface OrderView {
  orderCode: string;
  createdAt: string;
  status: string;
  fullName: string;
  email: string;
  phone: string;
  address: { line1: string; line2: string | null; city: string; state: string; postalCode: string; country: string };
  items: OrderItemView[];
  subtotalCents: number;
  discountCents: number;
  shippingCents: number;
  totalCents: number;
  promoCode: string | null;
  paymentMethod: string;
  paymentLast4: string | null;
}

export type Result<T> = { ok: true; data: T } | { ok: false; error: string };

export function estimatedDelivery(createdAt: string): { from: Date; to: Date } {
  const base = new Date(createdAt);
  const from = new Date(base);
  from.setDate(base.getDate() + 4);
  const to = new Date(base);
  to.setDate(base.getDate() + 7);
  return { from, to };
}

export function maskPhone(phone: string): string {
  return phone.length > 4 ? `${phone.slice(0, 3)} ••••• ${phone.slice(-3)}` : phone;
}
