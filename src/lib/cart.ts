import { useSyncExternalStore } from "react";
import type { PlanType } from "./catalog";
import { MAX_QTY, type CartLine } from "./pricing";

const KEY = "onething-cart-v1";
const EMPTY: CartLine[] = [];
let lines: CartLine[] | null = null;
const listeners = new Set<() => void>();

function read(): CartLine[] {
  if (lines) return lines;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(KEY) ?? "[]");
    lines = Array.isArray(parsed) ? parsed.filter((l) => l && typeof l.slug === "string") : [];
  } catch {
    lines = [];
  }
  return lines;
}

function write(next: CartLine[]) {
  lines = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage full or blocked: keep in memory */
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      lines = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export const cart = {
  add(slug: string, plan: PlanType, qty = 1) {
    const current = read();
    const existing = current.find((l) => l.slug === slug && l.plan === plan);
    write(
      existing
        ? current.map((l) => (l === existing ? { ...l, qty: Math.min(MAX_QTY, l.qty + qty) } : l))
        : [...current, { slug, plan, qty: Math.min(MAX_QTY, qty) }],
    );
  },
  setQty(slug: string, plan: PlanType, qty: number) {
    if (qty <= 0) return cart.remove(slug, plan);
    write(read().map((l) => (l.slug === slug && l.plan === plan ? { ...l, qty: Math.min(MAX_QTY, qty) } : l)));
  },
  remove(slug: string, plan: PlanType) {
    write(read().filter((l) => !(l.slug === slug && l.plan === plan)));
  },
  clear() {
    write([]);
  },
};

export function useCart() {
  const items = useSyncExternalStore(subscribe, read, () => EMPTY);
  const count = items.reduce((sum, l) => sum + l.qty, 0);
  return { items, count };
}
