import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { createOrder } from "../lib/orders.functions";
import { formatMoney, priceOrder } from "../lib/pricing";
import { cart, useCart } from "../lib/cart";
import { EmptyCart, OrderSummary, StoreFrame } from "../components/storefront";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

function CheckoutPage() {
  const { items } = useCart();
  const [promo, setPromo] = useState("");
  const [payment, setPayment] = useState<"card" | "upi">("card");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    if (!items.length) return;
    if (promo.trim() && priceOrder(items, promo).promoError) { setError("That discount code isn't valid. Check it and try again."); return; }
    const form = new FormData(event.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "").trim();
    setBusy(true);
    try {
      const result = await createOrder({ data: {
        contact: { fullName: get("fullName"), email: get("email"), phone: get("phone") },
        address: { line1: get("line1"), line2: get("line2"), city: get("city"), state: get("state"), postalCode: get("postalCode"), country: get("country") },
        lines: items, promoCode: promo, payment: payment === "card" ? { method: "card", last4: get("cardNumber").replace(/\D/g, "").slice(-4) } : { method: "upi" },
      } });
      if (!result.ok) { setError(result.error); return; }
      sessionStorage.setItem("onething-last-order", JSON.stringify(result.data));
      cart.clear();
      window.location.assign(`/confirmation?order=${encodeURIComponent(result.data.orderCode)}`);
    } catch { setError("We couldn't place your order. Please try again."); }
    finally { setBusy(false); }
  }
  const total = priceOrder(items, promo).totalCents;
  return <StoreFrame><main className="store-main"><div className="checkout-heading"><span className="store-eyebrow">Almost yours</span><h1>Checkout</h1><p>Complimentary shipping · protected checkout</p></div>{!items.length ? <div className="checkout-layout"><EmptyCart /></div> : <div className="checkout-layout"><form className="checkout-form" onSubmit={submit}>
    <section className="form-section"><h2>Contact details</h2><div className="form-grid"><Field name="fullName" label="Full name" required autoComplete="name" /><Field name="email" label="Email address" required type="email" autoComplete="email" /><Field name="phone" label="Phone number (include country code)" required type="tel" placeholder="+14155550123" autoComplete="tel" /><p className="secure-note">We’ll use your phone number to securely verify order tracking.</p></div></section>
    <section className="form-section"><h2>Delivery address</h2><div className="form-grid"><Field name="line1" label="Street address" required autoComplete="address-line1" full /><Field name="line2" label="Apartment, suite (optional)" autoComplete="address-line2" full /><Field name="city" label="City" required autoComplete="address-level2" /><Field name="state" label="State / region" required autoComplete="address-level1" /><Field name="postalCode" label="ZIP / postal code" required autoComplete="postal-code" /><Field name="country" label="Country" required autoComplete="country-name" /></div></section>
    <section className="form-section"><h2>Test payment</h2><div className="payment-choice"><label><input type="radio" checked={payment === "card"} onChange={() => setPayment("card")} /> Test card</label><label><input type="radio" checked={payment === "upi"} onChange={() => setPayment("upi")} /> Test UPI</label></div>{payment === "card" ? <div className="form-grid" style={{ marginTop: 14 }}><Field name="cardNumber" label="Card number" required inputMode="numeric" placeholder="4242 4242 4242 4242" /><Field name="expiry" label="Expiry" required placeholder="MM / YY" /><Field name="cvv" label="Security code" required inputMode="numeric" placeholder="123" /></div> : <p className="secure-note">This test payment will be marked as paid without contacting a payment provider.</p>}<p className="secure-note">Demo checkout: no real payment will be taken. This test checkout stores the order as paid.</p></section>
    {error && <p className="form-error" role="alert">{error}</p>}<button className="store-primary checkout-submit" type="submit" disabled={busy}>{busy ? "Placing your test order…" : `Place test order · ${formatMoney(total)}`}</button>
  </form><div className="checkout-aside"><OrderSummary lines={items} promo={promo} setPromo={setPromo} onPromo={setPromo} /><p className="store-checkout-note">Your final total is calculated securely when the order is placed.</p></div></div>}</main></StoreFrame>;
}

function Field({ name, label, full, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; full?: boolean }) {
  return <div className={`form-field${full ? " full" : ""}`}><label htmlFor={name}>{label}</label><input id={name} name={name} {...props} /></div>;
}
