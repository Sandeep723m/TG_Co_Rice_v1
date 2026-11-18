import { describe, expect, it } from "vitest";
import { priceOrder } from "@/lib/pricing";

describe("order pricing", () => {
  it("charges the list price for a one-time purchase", () => {
    expect(priceOrder([{ slug: "daily", qty: 2, plan: "one-time" }]).totalCents).toBe(9800);
  });

  it("takes 20% off when subscribing", () => {
    const order = priceOrder([{ slug: "daily", qty: 1, plan: "subscribe" }]);
    expect(order.totalCents).toBe(3920);
    expect(order.subscribeSavingsCents).toBe(980);
  });

  it("applies the OneThing code for 10% off, case-insensitive", () => {
    const order = priceOrder([{ slug: "deep-sleep", qty: 1, plan: "one-time" }], " onething ");
    expect(order.discountCents).toBe(390);
    expect(order.totalCents).toBe(3510);
  });

  it("rejects unknown promo codes without discount", () => {
    const order = priceOrder([{ slug: "glow", qty: 1, plan: "one-time" }], "FREE50");
    expect(order.discountCents).toBe(0);
    expect(order.promoError).not.toBeNull();
  });

  it("ships free", () => {
    expect(priceOrder([{ slug: "immunity", qty: 1, plan: "one-time" }]).shippingCents).toBe(0);
  });

  it("caps quantity at 10 per line", () => {
    expect(priceOrder([{ slug: "immunity", qty: 50, plan: "one-time" }]).lines[0]?.qty).toBe(10);
  });

  it("refuses products that are not in the catalog", () => {
    expect(() => priceOrder([{ slug: "fake", qty: 1, plan: "one-time" }])).toThrow();
  });
});
