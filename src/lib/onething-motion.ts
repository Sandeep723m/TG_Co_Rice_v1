/**
 * Framer effect settings for the OneThing pages, copied from the source site's
 * published animation data (appear, parallax, loop, scroll transforms, text reveals, tickers).
 */
import type { FxConfig, FxEffect, FxTransition, FxValues } from "./framer-effects";

const DESKTOP_TABLET = "(min-width: 680px)";
const DESKTOP = "(min-width: 1200px)";
const TABLET = "(min-width: 680px) and (max-width: 1199.98px)";
const PHONE = "(max-width: 679.98px)";

const spring = (duration: number, bounce: number, delay = 0): FxTransition => ({ type: "spring", duration, bounce, delay });
const X = spring(1.5, 0.2);
const Q = spring(1, 0.2);
const YS = spring(1, 0.2, 0.1);
const AS = spring(1.5, 0.2, 0.1);

const Z: FxValues = { opacity: 0, y: 40 };
const RS: FxValues = { opacity: 0, y: -50 };
const SS: FxValues = { opacity: 0, y: 50 };
const FS: FxValues = { opacity: 0, y: -40 };

const inView = (cls: string, from: FxValues, transition: FxTransition, extra: Partial<FxEffect> = {}, threshold = 0): FxEffect => ({
  selector: `.framer-${cls}`,
  appear: { from, transition, trigger: "inView", threshold },
  ...extra,
});

const FLOAT = { to: { y: 50 }, transition: { type: "tween", duration: 6, ease: [0, 0, 1, 1], delay: 0.5 } as FxTransition };
const GUMMY_APPEAR = spring(2, 0.2, 0.5);

function heroGummy(cls: string, speed: number, desktop: { rotate: number; template?: boolean; fromRotate?: number }, phone?: { rotate: number; fromRotate?: number }): FxEffect[] {
  const effects: FxEffect[] = [
    {
      selector: `.framer-${cls}`,
      media: DESKTOP_TABLET,
      base: { rotate: desktop.rotate, template: desktop.template ? "translateY(-50%)" : undefined },
      appear: { from: { opacity: 0.001, y: -80, rotate: desktop.fromRotate ?? desktop.rotate }, transition: GUMMY_APPEAR, trigger: "load" },
      parallax: { speed },
      loop: FLOAT,
    },
  ];
  if (phone)
    effects.push({
      selector: `.framer-${cls}`,
      media: PHONE,
      base: { rotate: phone.rotate },
      appear: { from: { opacity: 0.001, y: -80, rotate: phone.fromRotate ?? phone.rotate }, transition: GUMMY_APPEAR, trigger: "load" },
      parallax: { speed },
      loop: FLOAT,
    });
  return effects;
}

function introGummy(cls: string, rotate: number, template: "all" | "desktop" | "none" = "none"): FxEffect[] {
  if (template === "desktop")
    return [
      { selector: `.framer-${cls}`, media: DESKTOP_TABLET, base: { rotate, template: "translateY(-50%)" }, loop: FLOAT },
      { selector: `.framer-${cls}`, media: PHONE, base: { rotate }, loop: FLOAT },
    ];
  return [{ selector: `.framer-${cls}`, base: { rotate, template: template === "all" ? "translateY(-50%)" : undefined }, loop: FLOAT }];
}

const WORDS = { from: { opacity: 0.001, blur: 10, y: 15 }, transition: spring(1, 0, 0) as FxTransition, stagger: 0.05 };

/** Header + footer effects shared by every page. */
export const SHARED_FX: FxEffect[] = [
  { selector: ".framer-frk7oi", appear: { from: { opacity: 0.001, y: -40 }, transition: spring(1.5, 0), trigger: "load" } },
];

const SHARED_TICKERS = [
  { selector: ".framer-4dylj7", velocity: 50, reverse: true },
  { selector: ".framer-n19f5h", velocity: 50, draggable: true },
];

const NAV_SCROLL = {
  selector: ".framer-mV9bZ",
  trigger: "#title",
  activeClass: "oi-nav-white",
  variants: [
    { selector: '[data-fx-nav="desktop"]', active: "framer-v-115fwyv", inactive: "framer-v-1sgftv0" },
    { selector: '[data-fx-nav="phone"]', active: "framer-v-a3dwaf", inactive: "framer-v-1lacu8" },
  ],
};

export const HOME_FX: FxConfig = {
  effects: [
    ...SHARED_FX,
    // Hero
    { selector: ".framer-w7ue3b-container", media: DESKTOP, base: { template: "translate(-50%, -50%)" }, appear: { from: { opacity: 0.001, y: 50 }, transition: spring(2, 0.2, 0.4), trigger: "load" } },
    { selector: ".framer-w7ue3b-container", media: `${TABLET}, ${PHONE}`, appear: { from: { opacity: 0.001, y: 50 }, transition: spring(2, 0.2, 0.4), trigger: "load" } },
    ...heroGummy("d1too9", 130, { rotate: -59, template: true }, { rotate: -37, fromRotate: -59 }),
    ...heroGummy("1twa8cg", 100, { rotate: 53 }),
    ...heroGummy("lt83ag", 130, { rotate: -32, template: true }, { rotate: -25, fromRotate: -32 }),
    ...heroGummy("86ela9", 180, { rotate: 145 }, { rotate: 145 }),
    ...heroGummy("1xujcsz", 150, { rotate: 285 }, { rotate: 240, fromRotate: 285 }),
    ...heroGummy("1uue3vh", 130, { rotate: -40, template: true, fromRotate: -50 }),
    ...heroGummy("1i2u684", 90, { rotate: 47 }, { rotate: 47 }),
    { selector: ".framer-sd4ed3", appear: { from: { opacity: 0.001, y: 40 }, transition: spring(1.5, 0.2, 0.2), trigger: "load" } },
    { selector: ".framer-1e0rywx", appear: { from: { opacity: 0.001, y: 40 }, transition: spring(1.5, 0.2, 0.3), trigger: "load" } },
    { selector: ".framer-1jdyhh2", words: { ...WORDS, trigger: "load" } },
    { selector: ".framer-1k1cdsc", appear: { from: { scale: 1.2 }, transition: spring(5, 0), trigger: "load" } },
    // Benefits / reviews
    inView("1p9x1rh", Z, X),
    inView("ontxra", { x: -50, scale: 1.1, rotate: -3 }, X),
    inView("1tksyyx", { x: 50, scale: 1.1, rotate: -3 }, X),
    { selector: ".framer-1szvl9b", parallax: { speed: 0, adjustPosition: true, offset: 1 } },
    inView("11rqlki", RS, X),
    inView("2ceimn", RS, AS),
    inView("9x75jg", RS, AS),
    inView("jfluk4", SS, AS),
    inView("oi-rice-difference-title", RS, AS),
    inView("oi-rice-difference-table", SS, AS),
    inView("hs2c7x", SS, X),
    inView("lzivtl-container", Z, X),
    inView("b6y478", Z, X),
    inView("1be8ndy", FS, X, { base: { template: "translate(-50%, -50%)" } }),
    inView("wx5pkl", Z, X),
    inView("ikxl5d-container", Z, X),
    inView("19o8ama", Z, X),
    inView("17192w5-container", Z, X),
    inView("17r1a85-container", Z, X),
    inView("6h0wqm-container", Z, X),
    { selector: ".framer-1vwkisw", media: DESKTOP_TABLET, scrollTransform: { from: { scale: 0.22, x: -100, y: -340 }, to: {}, spring: { type: "spring", stiffness: 500, damping: 60, mass: 1 } } },
    { selector: ".framer-1vwkisw", media: PHONE, scrollTransform: { from: { scale: 0.22, y: -460 }, to: {}, spring: { type: "spring", stiffness: 500, damping: 60, mass: 1 } } },
    inView("h5fqza-container", Z, AS),
    inView("8xmbf5-container", Z, AS),
    inView("1lp7ogs-container", Z, AS),
    inView("1dhwyb7", Z, Q),
    inView("4k6tby", Z, Q),
    inView("gnab8d", Z, Q),
    inView("5siw2a", Z, Q),
    // Features
    inView("1yd27yv", Z, X, { media: DESKTOP_TABLET, base: { template: "translate(-50%, -50%)" } }),
    inView("1yd27yv", Z, X, { media: PHONE, base: { template: "translateY(-50%)" } }),
    inView("sh66ud-container", Z, X),
    inView("xxou2q", Z, Q),
    inView("1bqz7b9", Z, YS),
    inView("1s7d1l1-container", Z, Q),
    inView("632zwq-container", Z, YS),
    inView("qlbbaw", Z, X, { media: DESKTOP_TABLET, base: { template: "translate(-50%, -50%)" } }),
    inView("qlbbaw", Z, X, { media: PHONE, base: { template: "translateY(-50%)" } }),
    // Introduce
    { selector: ".framer-bhp2dn", appear: { from: { opacity: 0.001, y: 50 }, transition: spring(2, 0.2, 0.4), trigger: "load" } },
    ...introGummy("jiq8l1", -59, "all"),
    ...introGummy("x7rgww", 53),
    ...introGummy("8elmzo", -32),
    ...introGummy("9djwlr", 145),
    ...introGummy("1e2ze8m", -120),
    ...introGummy("n1dhl", -40, "desktop"),
    ...introGummy("9o15fu", 47),
    { selector: ".framer-ipe1eq", scrollTransform: { from: {}, to: { y: -100 } } },
    { selector: ".framer-7xe7aq", words: { ...WORDS, trigger: "inView" } },
    { selector: ".framer-1cz438u", words: { ...WORDS, startDelay: 0.05, trigger: "inView" } },
    { selector: ".framer-6izyhc", words: { ...WORDS, startDelay: 0.1, trigger: "inView" } },
    // Buy + FAQ
    inView("wtclw1-container", Z, Q, {}, 0.5),
    inView("cttykf", Z, YS, {}, 0.5),
    inView("6gdc90-container", Z, Q),
    inView("xjn139-container", Z, Q),
    inView("btd0cx-container", Z, Q),
    inView("m31mq9-container", Z, Q),
    inView("1teae2x-container", Z, Q),
    inView("1rvv2kb-container", Z, Q),
  ],
  tickers: [
    ...SHARED_TICKERS,
    { selector: ".framer-1mvdp1s", velocity: 50, draggable: true },
    { selector: ".framer-p63ssa", velocity: 50, draggable: true },
  ],
  scrollClasses: [NAV_SCROLL],
};

export const POLICY_FX: FxConfig = {
  effects: [...SHARED_FX],
  tickers: SHARED_TICKERS,
  scrollClasses: [NAV_SCROLL],
};
