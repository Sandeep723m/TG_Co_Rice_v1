import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, PackageCheck } from "lucide-react";
import type { OrderView } from "../lib/order-types";
import { formatMoney } from "../lib/pricing";
import { StoreFrame } from "../components/storefront";

export const Route = createFileRoute("/confirmation")({ component: ConfirmationPage });
function ConfirmationPage() {
  const [order, setOrder] = useState<OrderView | null>(null);
  useEffect(() => { try { setOrder(JSON.parse(sessionStorage.getItem("onething-last-order") ?? "null")); } catch { setOrder(null); } }, []);
  return <StoreFrame><main className="store-main store-narrow"><div className="confirm-card"><div className="confirm-icon"><Check size={27} /></div><span className="store-eyebrow">Test order complete</span><h1>One good thing, on its way.</h1><p>Your test order is confirmed. We’ve saved your order details and tracking ID.</p>{order ? <div className="confirm-number"><span>Order ID</span><strong>{order.orderCode}</strong><small>Keep this ID and your phone number to track your order.</small></div> : <p className="confirm-fallback">Order confirmation details are available in the checkout tab.</p>}<div className="confirm-total"><span>Test payment total</span><strong>{order ? formatMoney(order.totalCents) : "—"}</strong></div><div className="confirm-actions"><Link className="store-primary" to="/track-order" search={{ order: order?.orderCode ?? "" }}>Track your order</Link><Link className="confirm-link" to="/">Back to OneThing</Link></div><div className="confirm-note"><PackageCheck size={17} /> Demo checkout · no real payment was taken</div></div></main></StoreFrame>;
}
