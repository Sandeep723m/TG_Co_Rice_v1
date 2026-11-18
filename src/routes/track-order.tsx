import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { requestTrackingCode, verifyTrackingCode } from "../lib/orders.functions";
import type { OrderView } from "../lib/order-types";
import { OrderProgress, StoreFrame } from "../components/storefront";

export const Route = createFileRoute("/track-order")({ component: TrackOrderPage });
function TrackOrderPage() {
  const search = useSearch({ strict: false }) as { order?: string };
  const [orderCode, setOrderCode] = useState(search.order ?? "");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [masked, setMasked] = useState("");
  const [testCode, setTestCode] = useState<string | null>(null);
  const [order, setOrder] = useState<OrderView | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function requestCode(event: FormEvent) { event.preventDefault(); setError(""); setBusy(true); try { const result = await requestTrackingCode({ data: { orderCode, phone } }); if (!result.ok) { setError(result.error); return; } setMasked(result.data.maskedPhone); setTestCode(result.data.testCode); } catch { setError("We couldn't request a code right now. Please try again."); } finally { setBusy(false); } }
  async function verifyCode(event: FormEvent) { event.preventDefault(); setError(""); setBusy(true); try { const result = await verifyTrackingCode({ data: { orderCode, phone, code } }); if (!result.ok) { setError(result.error); return; } setOrder(result.data); } catch { setError("We couldn't verify that code. Please try again."); } finally { setBusy(false); } }
  return <StoreFrame hideShop homepageFooter><main className="store-main track-layout"><div className="track-heading"><span className="store-eyebrow">Here for the updates</span><h1>Track your order.</h1><p>Enter your order ID and phone number to see the latest.</p></div>{order ? <OrderProgress order={order} /> : <section className="track-card">{!masked ? <form className="track-fields" onSubmit={requestCode}><Field name="order" label="Order ID" value={orderCode} onChange={(e) => setOrderCode(e.target.value.toUpperCase())} placeholder="OT-7K3F9Q" required /><Field name="phone" label="Phone number used at checkout" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+14155550123" required type="tel" /><button className="store-primary" disabled={busy}>{busy ? "Checking details…" : "Send verification code"}</button><p className="secure-note">We’ll send a one-time code to the phone number on your order.</p></form> : <form className="track-fields" onSubmit={verifyCode}><p className="secure-note">Enter the 6-digit code sent to {masked}. It expires in 10 minutes.</p>{testCode && <div className="test-code">Test mode code <strong>{testCode}</strong></div>}<Field name="code" label="6-digit verification code" value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" required /><button className="store-primary" disabled={busy}>{busy ? "Verifying…" : "View tracking updates"}</button><button type="button" className="confirm-link" onClick={() => { setMasked(""); setCode(""); setTestCode(null); }}>Use a different order</button></form>}{error && <p className="form-error" role="alert">{error}</p>}</section>}</main></StoreFrame>;
}
function Field(props: InputHTMLAttributes<HTMLInputElement> & { label: string }) { const { label, ...input } = props; return <div className="form-field"><label htmlFor={input.name}>{label}</label><input {...input} id={input.name} /></div>; }
