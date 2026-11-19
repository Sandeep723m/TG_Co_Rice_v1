import basmati from "@/assets/Forest Green Basmati Rice Packaging.png";
import kolam from "@/assets/Golden Kolam Rice Packaging.png";
import idli from "@/assets/TG.CO Finest Idli Rice Packaging.png";
import sonaMasoori from "@/assets/Premium Sona Masoori Rice Bag.png";
import jeera from "@/assets/Premium Purple Jeera Rice Packaging.png";
import ponni from "@/assets/Premium Orange Ponni Rice Package.png";
import { CATALOG, type CatalogProduct } from "./catalog";

export interface Product extends CatalogProduct {
  image: string;
  imageBackground: string;
  badge?: string;
  flavor: string;
  description: string;
  benefits: string[];
  ingredients: { name: string; amount: string }[];
  howToUse: string;
}

const DETAILS: Record<string, Omit<Product, keyof CatalogProduct>> = {
  daily: {
    image: basmati,
    imageBackground: "#e7f0e9",
    badge: "Bestseller",
    flavor: "Long-grain · aromatic",
    description:
      "Our original formula. One gummy a day covers immunity, digestion, sleep and energy, so you can replace a shelf of supplements with just one thing.",
    benefits: ["Supports immunity & energy", "Gentle on digestion", "Better sleep quality", "Vegan & gluten-free"],
    ingredients: [
      { name: "Vitamin C", amount: "60 mg" },
      { name: "Vitamin D3", amount: "25 mcg" },
      { name: "Zinc", amount: "5 mg" },
      { name: "Ashwagandha", amount: "150 mg" },
      { name: "Prebiotic fibre", amount: "1 g" },
    ],
    howToUse: "Chew one gummy a day, any time. Best with a glass of water.",
  },
  "deep-sleep": {
    image: kolam,
    imageBackground: "#fff3d5",
    flavor: "Soft · fragrant",
    description:
      "A calming blend for a deeper, uninterrupted night. Helps you switch off without the groggy morning.",
    benefits: ["Fall asleep faster", "Fewer night wake-ups", "No morning grogginess", "Non habit-forming"],
    ingredients: [
      { name: "Melatonin", amount: "1 mg" },
      { name: "Magnesium glycinate", amount: "50 mg" },
      { name: "L-theanine", amount: "100 mg" },
      { name: "Chamomile extract", amount: "50 mg" },
    ],
    howToUse: "Chew one gummy 30 minutes before bed.",
  },
  glow: {
    image: idli,
    imageBackground: "#e5f0fa",
    badge: "New",
    flavor: "Parboiled · idli-ready",
    description:
      "Beauty from the inside out. Biotin and collagen support help strengthen hair and nails and keep skin looking clear.",
    benefits: ["Stronger hair & nails", "Clearer, brighter skin", "Antioxidant support", "Vegan collagen booster"],
    ingredients: [
      { name: "Biotin", amount: "2,500 mcg" },
      { name: "Vitamin E", amount: "10 mg" },
      { name: "Zinc", amount: "5 mg" },
      { name: "Silica", amount: "10 mg" },
    ],
    howToUse: "Chew one gummy a day. Visible results usually take 6–8 weeks.",
  },
  "calm-focus": {
    image: sonaMasoori,
    imageBackground: "#f8e8e6",
    flavor: "Light · aromatic",
    description:
      "Stay steady through busy days. Adaptogens and L-theanine take the edge off stress while keeping you sharp.",
    benefits: ["Calm, clear focus", "Less everyday stress", "No caffeine crash", "Supports mood"],
    ingredients: [
      { name: "Ashwagandha KSM-66", amount: "300 mg" },
      { name: "L-theanine", amount: "100 mg" },
      { name: "Vitamin B6", amount: "1.4 mg" },
      { name: "Lemon balm", amount: "80 mg" },
    ],
    howToUse: "Chew one gummy in the morning or whenever you need to reset.",
  },
  immunity: {
    image: jeera,
    imageBackground: "#f0e9f5",
    flavor: "Cumin-scented",
    description:
      "Daily defence for every season. Vitamin C, zinc and elderberry help keep your immune system ready.",
    benefits: ["Year-round immune support", "Rich in antioxidants", "Faster recovery", "Kid-friendly taste"],
    ingredients: [
      { name: "Vitamin C", amount: "250 mg" },
      { name: "Elderberry extract", amount: "100 mg" },
      { name: "Zinc", amount: "8 mg" },
      { name: "Vitamin D3", amount: "25 mcg" },
    ],
    howToUse: "Chew one gummy a day. During travel or busy weeks, take two.",
  },
  "gut-balance": {
    image: ponni,
    imageBackground: "#f9ecdf",
    flavor: "South Indian staple",
    description:
      "Probiotics and prebiotic fibre in one tasty gummy for lighter, more comfortable digestion.",
    benefits: ["Less bloating", "Regular digestion", "Shelf-stable probiotics", "Sugar-free"],
    ingredients: [
      { name: "Bacillus coagulans", amount: "1 billion CFU" },
      { name: "Inulin fibre", amount: "1.5 g" },
      { name: "Apple cider vinegar", amount: "250 mg" },
      { name: "Ginger root", amount: "50 mg" },
    ],
    howToUse: "Chew one gummy a day with a meal.",
  },
};

export const PRODUCTS: Product[] = CATALOG.map((p) => ({ ...p, ...DETAILS[p.slug]! }));

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
