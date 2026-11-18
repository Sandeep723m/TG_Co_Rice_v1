import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ChevronRight, PackageCheck, ShoppingBag, Truck } from "lucide-react";
import riceFarmerLogo from "../assets/Finest Rice Farmer Logo.png";
import basmatiRiceBag from "../assets/Forest Green Basmati Rice Packaging.png";
import { PRODUCTS, getProduct, type Product } from "../lib/products";
import { cart, useCart } from "../lib/cart";
import { formatMoney, priceOrder, type CartLine } from "../lib/pricing";
import type { OrderView } from "../lib/order-types";

export function StoreNav({ hideShop = false }: { hideShop?: boolean }) {
  const { count } = useCart();
  return <header className="store-nav"><Link to="/" className="store-wordmark" aria-label="TG.CO Finest Rice home"><img src={riceFarmerLogo} alt="TG.CO Finest Rice" /></Link><nav>{!hideShop && <Link to="/" hash="products">Shop</Link>}<Link to="/track-order" className="store-track-link">Track order</Link><Link to="/checkout" className="store-bag"><ShoppingBag size={17} /> Bag <span>{count}</span></Link></nav></header>;
}

export function StoreFrame({ children, hideShop = false, homepageFooter = false, pageClassName = "" }: { children: ReactNode; hideShop?: boolean; homepageFooter?: boolean; pageClassName?: string }) {
  return <div className={`store-page${homepageFooter ? " tracking-page" : ""}${pageClassName ? ` ${pageClassName}` : ""}`}><StoreNav hideShop={hideShop} />{children}{homepageFooter ? <RiceHomeFooter /> : <footer className="store-footer"><Link to="/" className="store-footer-logo" aria-label="TG.CO Finest Rice home"><img src={riceFarmerLogo} alt="TG.CO Finest Rice" /></Link><span>From Telangana, with care.</span></footer>}</div>;
}

function RiceHomeFooter() {
  return <footer className="rice-home-footer">
    <div className="rice-footer-top">
      <div className="rice-footer-brand"><Link to="/" aria-label="TG.CO Finest Rice home"><img src={riceFarmerLogo} alt="TG.CO Finest Rice" /></Link><p>From Telangana’s fields to tables everywhere.</p></div>
      <Link className="rice-footer-product" to="/" hash="products"><span className="rice-footer-product-mark"><img src={basmatiRiceBag} alt="" /></span><span><strong>TG.CO Finest Rice</strong><small>Explore our rice</small></span><b aria-hidden="true">›</b></Link>
      <div className="rice-footer-trust"><span>Trusted By</span><div><img src="/site-assets/3e86127cbfae5eee.avif" alt="Trusted brand" /><img src="/site-assets/2be8954f60e86e37.avif" alt="Quality mark" /><img src="/site-assets/c3fc84c02217b695.avif" alt="Certification mark" /></div></div>
    </div>
    <div className="rice-footer-bottom">
      <div className="rice-footer-legal"><p>Rice varieties, availability and delivery options vary by location. See product details and policies before ordering.</p><span>© 2026 TG.CO Finest Rice. All rights reserved.</span><a href="https://webanatomy.in/" target="_blank" rel="noopener noreferrer">Designed &amp; Developed by Web Anatomy</a></div>
      <div className="rice-footer-links"><div><span>Explore</span><Link to="/" hash="introduction">Our Story</Link><Link to="/" hash="benefits">Our Farmers</Link><Link to="/" hash="effects-timeline">How We Grow</Link><Link to="/" hash="faq">FAQs</Link></div><div><span>Shop</span><Link to="/" hash="products">All Rice</Link><Link to="/" hash="products">Rice Varieties</Link><Link to="/" hash="products">Bulk Orders</Link><Link to="/" hash="products">Reorder</Link></div><div><span>Support</span><a href="mailto:hello@tgcofinest.com">Contact Us</a><Link to="/track-order">Track Order</Link><Link to="/refund-policy">Returns &amp; Refunds</Link></div><div><span>Legal</span><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-conditions">Terms &amp; Conditions</Link><Link to="/privacy-policy">Cookie Policy</Link><Link to="/terms-conditions">Accessibility</Link></div></div>
    </div>
  </footer>;
}

const PRODUCT_CARD_BACKGROUNDS: Record<string, string> = {
  daily: "#c9ddce",
  "deep-sleep": "#f1dfa9",
  glow: "#c6dced",
  "calm-focus": "#e8c8c4",
  immunity: "#d6c9e1",
  "gut-balance": "#e8cfb5",
};

function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  return <article className="product-card"><Link to="/products/$slug" params={{ slug: product.slug }} className="product-card-image" style={{ backgroundColor: PRODUCT_CARD_BACKGROUNDS[product.slug] ?? product.imageBackground }}><img src={product.image} alt={product.name} />{product.badge && <span className="product-badge">{product.badge}</span>}</Link><div className="product-card-copy"><div><span className="product-flavor">{product.flavor}</span><h3><Link to="/products/$slug" params={{ slug: product.slug }}>{product.name}</Link></h3><p>{product.tagline}</p></div><div className="product-card-bottom"><strong>{formatMoney(product.priceCents)}<small> / month</small></strong><button className="store-icon-button" aria-label={`Add ${product.name} to bag`} onClick={() => { cart.add(product.slug, "one-time"); setAdded(true); window.setTimeout(() => setAdded(false), 1600); }}>{added ? <Check size={18} /> : <ShoppingBag size={18} />}</button></div></div></article>;
}

export function ProductShelf() {
  return <section className="oi-products" id="products"><div className="oi-products-inner"><div className="oi-products-heading"><Link className="store-view-bag" to="/checkout">View Your Bag <ArrowRight size={16} /></Link></div><div className="product-grid">{PRODUCTS.map((product) => <ProductCard key={product.slug} product={product} />)}</div><div className="store-shipping-note"><Truck size={18} /> Complimentary shipping on every order</div></div></section>;
}

export function ProductDetail({ slug }: { slug: string }) {
  const product = getProduct(slug);
  const [plan, setPlan] = useState<"one-time" | "subscribe">("subscribe");
  const [added, setAdded] = useState(false);
  if (!product) return <StoreFrame><main className="store-main store-narrow"><h1>We couldn’t find that product.</h1><Link className="store-primary" to="/">Browse products</Link></main></StoreFrame>;
  return <StoreFrame><main className="store-main"><Link className="store-back" to="/"><ArrowLeft size={16} /> All products</Link><div className="detail-layout"><div className="detail-image" style={{ backgroundColor: product.imageBackground }}><img src={product.image} alt={product.name} /></div><div className="detail-copy"><span className="store-eyebrow">{product.flavor} · daily gummy</span><h1>{product.name}</h1><p className="detail-tagline">{product.tagline}</p><p className="detail-description">{product.description}</p><ul className="benefit-list">{product.benefits.map((benefit) => <li key={benefit}><Check size={17} />{benefit}</li>)}</ul><div className="plan-options"><button className={plan === "subscribe" ? "plan-option selected" : "plan-option"} onClick={() => setPlan("subscribe")}><span><b>Subscribe & save 20%</b><small>Delivered every month · cancel anytime</small></span><strong>{formatMoney(Math.round(product.priceCents * 0.8))}</strong></button><button className={plan === "one-time" ? "plan-option selected" : "plan-option"} onClick={() => setPlan("one-time")}><span><b>One-time purchase</b><small>One month supply</small></span><strong>{formatMoney(product.priceCents)}</strong></button></div><button className="store-primary store-wide" onClick={() => { cart.add(product.slug, plan); setAdded(true); }}>{added ? <><Check size={18} /> Added to your bag</> : <>Add to bag <ArrowRight size={18} /></>}</button><div className="detail-meta"><span><Truck size={16} /> Free shipping</span><span><PackageCheck size={16} /> Secure checkout</span></div></div></div><section className="detail-more"><span className="store-eyebrow">The good stuff</span><h2>Made for your everyday.</h2><p>{product.howToUse}</p><div className="ingredient-list">{product.ingredients.map((item) => <div key={item.name}><span>{item.name}</span><strong>{item.amount}</strong></div>)}</div></section></main></StoreFrame>;
}

export function OrderSummary({ lines, promo, onPromo, setPromo }: { lines: CartLine[]; promo: string; onPromo?: (v: string) => void; setPromo?: (v: string) => void }) {
  const order = priceOrder(lines, promo);
  return <aside className="order-summary"><h2>Your order <span>{order.lines.reduce((n, l) => n + l.qty, 0)} items</span></h2><div className="summary-lines">{order.lines.map((line) => { const product = getProduct(line.slug); return <div className="summary-line" key={`${line.slug}-${line.plan}`}><img src={product?.image} alt="" /><div><strong>{line.name}</strong><span>{line.plan === "subscribe" ? "Subscribe & save" : "One-time"} · Qty {line.qty}</span><button onClick={() => cart.remove(line.slug, line.plan)}>Remove</button></div><b>{formatMoney(line.lineCents)}</b></div>; })}</div>{setPromo && <div className="promo-field"><label htmlFor="promo">Discount code</label><div><input id="promo" value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="OneThing" /><button type="button" onClick={() => onPromo?.(promo)}>Apply</button></div>{order.promoError && <small className="form-error">{order.promoError}</small>}{order.promoApplied && <small className="promo-success">OneThing discount applied</small>}</div>}<div className="summary-totals"><div><span>Subtotal</span><b>{formatMoney(order.subtotalCents)}</b></div>{order.subscribeSavingsCents > 0 && <div><span>Subscription savings</span><b>−{formatMoney(order.subscribeSavingsCents)}</b></div>}{order.discountCents > 0 && <div><span>Discount</span><b>−{formatMoney(order.discountCents)}</b></div>}<div><span>Shipping</span><b>{order.shippingCents === 0 ? "Free" : formatMoney(order.shippingCents)}</b></div><div className="summary-total"><span>Total</span><b>{formatMoney(order.totalCents)}</b></div></div></aside>;
}

export function EmptyCart() { return <div className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={26} /></div><h2>Your bag is taking a little break.</h2><p>Find the daily support that feels right for you.</p><Link className="store-primary" to="/" hash="products">Explore the products <ArrowRight size={16} /></Link></div>; }

export function OrderProgress({ order }: { order: OrderView }) {
  const steps = ["confirmed", "packed", "shipped", "out_for_delivery", "delivered"];
  const labels = ["Order confirmed", "Packed", "On the way", "Out for delivery", "Delivered"];
  const active = Math.max(0, steps.indexOf(order.status));
  return <section className="tracking-card"><div className="tracking-top"><div><span className="store-eyebrow">Order {order.orderCode}</span><h2>{labels[active] ?? "Order confirmed"}</h2></div><span className="tracking-status"><span />{labels[active] ?? order.status}</span></div><p>Thanks, {order.fullName.split(" ")[0]}. Your order is in good hands.</p><div className="tracking-steps">{steps.map((step, i) => <div className={`tracking-step ${i <= active ? "complete" : ""}`} key={step}><span className="tracking-dot">{i < active ? <Check size={14} /> : i + 1}</span><small>{labels[i]}</small></div>)}</div><div className="tracking-items">{order.items.map((item) => <div key={`${item.slug}-${item.plan}`}><span>{item.name} <small>× {item.qty}</small></span><strong>{formatMoney(item.lineCents)}</strong></div>)}</div><div className="tracking-total"><span>Total paid</span><strong>{formatMoney(order.totalCents)}</strong></div></section>;
}

export function StoreCrumb() { return <div className="store-crumb"><Link to="/">Home</Link><ChevronRight size={14} /><span>OneThing</span></div>; }

