// Prices and names used by both the browser and the order server function.
// The server always re-prices from this list; it never trusts totals sent by the browser.
export type PlanType = "one-time" | "subscribe";

export interface CatalogProduct {
  slug: string;
  name: string;
  tagline: string;
  priceCents: number;
}

export const CATALOG: CatalogProduct[] = [
  { slug: "daily", name: "OneThing Daily", tagline: "All-in-one daily wellness", priceCents: 4900 },
  { slug: "deep-sleep", name: "Deep Sleep", tagline: "Fall asleep faster, wake up rested", priceCents: 3900 },
  { slug: "glow", name: "Glow Hair & Skin", tagline: "Stronger hair, clearer skin", priceCents: 4400 },
  { slug: "calm-focus", name: "Calm Focus", tagline: "Steady energy, less stress", priceCents: 4200 },
  { slug: "immunity", name: "Immunity Boost", tagline: "Everyday defence, all year", priceCents: 3600 },
  { slug: "gut-balance", name: "Gut Balance", tagline: "Lighter, happier digestion", priceCents: 3800 },
];

export function findCatalogProduct(slug: string): CatalogProduct | undefined {
  return CATALOG.find((p) => p.slug === slug);
}
