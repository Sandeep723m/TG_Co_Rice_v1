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
  { slug: "daily", name: "Premium Basmati Rice", tagline: "Long-grain basmati for biryani and pulao", priceCents: 240000 },
  { slug: "deep-sleep", name: "Golden Kolam Rice", tagline: "A fragrant everyday rice for family meals", priceCents: 180000 },
  { slug: "glow", name: "Finest Idli Rice", tagline: "A classic choice for soft idlis and dosas", priceCents: 160000 },
  { slug: "calm-focus", name: "Premium Sona Masoori Rice", tagline: "Light, aromatic rice for everyday cooking", priceCents: 190000 },
  { slug: "immunity", name: "Premium Jeera Rice", tagline: "Distinctive aroma for pulao and special meals", priceCents: 220000 },
  { slug: "gut-balance", name: "Premium Ponni Rice", tagline: "A versatile South Indian staple", priceCents: 180000 },
];

export function findCatalogProduct(slug: string): CatalogProduct | undefined {
  return CATALOG.find((p) => p.slug === slug);
}
