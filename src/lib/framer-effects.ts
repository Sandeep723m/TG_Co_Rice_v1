/**
 * Small runtime that reproduces the Framer motion effects of the imported OneThing pages:
 * page-load and scroll-into-view "appear" animations, parallax speed, looping float,
 * scroll-linked "layer in view" transforms, per-word text reveals and draggable tickers.
 * Timings use the same spring maths as Framer Motion so curves match the source site.
 */
import { useEffect } from "react";
import { flushSync } from "react-dom";

export type FxValues = { x?: number; y?: number; scale?: number; rotate?: number; opacity?: number; blur?: number };
export type FxTransition =
  | { type: "spring"; duration?: number; bounce?: number; stiffness?: number; damping?: number; mass?: number; delay?: number }
  | { type: "tween"; duration: number; ease?: [number, number, number, number]; delay?: number };

export type FxBase = { template?: string | undefined; x?: number; y?: number; scale?: number; rotate?: number };

export type FxEffect = {
  selector: string;
  media?: string;
  base?: FxBase;
  appear?: { from: FxValues; transition: FxTransition; trigger: "load" | "inView"; threshold?: number };
  parallax?: { speed: number; adjustPosition?: boolean; offset?: number };
  loop?: { to: FxValues; transition: FxTransition };
  scrollTransform?: { from: FxValues; to: FxValues; spring?: FxTransition };
  words?: { from: FxValues; transition: FxTransition; stagger: number; startDelay?: number; trigger: "load" | "inView" };
};

export type FxTicker = { selector: string; velocity: number; reverse?: boolean; draggable?: boolean };
export type FxScrollClass = {
  selector: string;
  trigger: string;
  activeClass: string;
  variants?: { selector: string; active: string; inactive: string }[];
};
export type FxConfig = { effects: FxEffect[]; tickers?: FxTicker[]; scrollClasses?: FxScrollClass[] };

/* ---------------- spring + easing maths (mirrors framer-motion) ---------------- */

const SAFE_MIN = 0.001;
function angularFreq(undamped: number, ratio: number) {
  return undamped * Math.sqrt(1 - ratio * ratio);
}
function findSpring(durationMs: number, bounce: number, mass = 1) {
  let dampingRatio = Math.min(1, Math.max(0.05, 1 - bounce));
  const duration = Math.min(10, Math.max(0.01, durationMs / 1000));
  let envelope: (f: number) => number;
  let derivative: (f: number) => number;
  if (dampingRatio < 1) {
    envelope = (f) => {
      const decay = f * dampingRatio;
      return SAFE_MIN - (decay / angularFreq(f, dampingRatio)) * Math.exp(-decay * duration);
    };
    derivative = (f) => {
      const decay = f * dampingRatio;
      const delta = decay * duration;
      const e = dampingRatio * dampingRatio * f * f * duration;
      const g = angularFreq(f * f, dampingRatio);
      const factor = -envelope(f) + SAFE_MIN > 0 ? -1 : 1;
      return (factor * (-e * Math.exp(-delta))) / g;
    };
  } else {
    envelope = (f) => -SAFE_MIN + Math.exp(-f * duration) * (f * duration + 1);
    derivative = (f) => Math.exp(-f * duration) * (-f * duration * duration);
  }
  let f = 5 / duration;
  for (let i = 1; i < 12; i++) f = f - envelope(f) / derivative(f);
  if (Number.isNaN(f)) return { stiffness: 100, damping: 10, mass };
  const stiffness = f * f * mass;
  dampingRatio = Math.min(1, Math.max(0.05, 1 - bounce));
  return { stiffness, damping: dampingRatio * 2 * Math.sqrt(mass * stiffness), mass };
}

type Curve = { duration: number; at: (ms: number) => number };
const curveCache = new Map<string, Curve>();

function springCurve(stiffness: number, damping: number, mass: number): Curve {
  const ratio = damping / (2 * Math.sqrt(stiffness * mass));
  const w0 = Math.sqrt(stiffness / mass) / 1000;
  let at: (t: number) => number;
  if (ratio < 1) {
    const wd = angularFreq(w0, ratio);
    at = (t) => 1 - Math.exp(-ratio * w0 * t) * (((ratio * w0) / wd) * Math.sin(wd * t) + Math.cos(wd * t));
  } else if (ratio === 1) {
    at = (t) => 1 - Math.exp(-w0 * t) * (1 + w0 * t);
  } else {
    const wd = w0 * Math.sqrt(ratio * ratio - 1);
    at = (t) => {
      const ft = Math.min(wd * t, 300);
      return 1 - (Math.exp(-ratio * w0 * t) * (ratio * w0 * Math.sinh(ft) + wd * Math.cosh(ft))) / wd;
    };
  }
  let duration = 10000;
  for (let t = 0; t < 10000; t += 10) {
    let settled = true;
    for (let k = 0; k < 6; k++) if (Math.abs(1 - at(t + k * 10)) > 0.0015) settled = false;
    if (settled) {
      duration = t;
      break;
    }
  }
  return { duration, at: (t) => (t >= duration ? 1 : at(t)) };
}

function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const sample = (a1: number, a2: number, t: number) => ((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t * t + 3 * a1 * t;
  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let lo = 0;
    let hi = 1;
    let t = x;
    for (let i = 0; i < 24; i++) {
      t = (lo + hi) / 2;
      if (sample(x1, x2, t) < x) lo = t;
      else hi = t;
    }
    return sample(y1, y2, t);
  };
}

export function transitionCurve(tr: FxTransition): Curve {
  const key = JSON.stringify(tr);
  const cached = curveCache.get(key);
  if (cached) return cached;
  let curve: Curve;
  if (tr.type === "tween") {
    const ease = tr.ease ? cubicBezier(...tr.ease) : (x: number) => x;
    const duration = tr.duration * 1000;
    curve = { duration, at: (t) => ease(Math.min(1, Math.max(0, t / duration))) };
  } else if (tr.stiffness !== undefined) {
    curve = springCurve(tr.stiffness, tr.damping ?? 10, tr.mass ?? 1);
  } else {
    const s = findSpring((tr.duration ?? 0.8) * 1000, tr.bounce ?? 0.25, tr.mass ?? 1);
    curve = springCurve(s.stiffness, s.damping, s.mass);
  }
  curveCache.set(key, curve);
  return curve;
}

/** CSS `linear()` easing + duration for a Framer transition, for use in stylesheets. */
export function cssTransitionTiming(tr: FxTransition, points = 40) {
  const curve = transitionCurve(tr);
  const stops: string[] = [];
  for (let i = 0; i <= points; i++) stops.push((Math.round(curve.at((curve.duration * i) / points) * 10000) / 10000).toString());
  return { duration: `${Math.round(curve.duration)}ms`, easing: `linear(${stops.join(", ")})` };
}

/** Animates an element's height between its before/after layout like a Framer variant change. */
export function animateLayoutHeight(el: HTMLElement | null, update: () => void, tr: FxTransition) {
  if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    update();
    return;
  }
  el.getAnimations().forEach((a) => a.cancel());
  const from = el.getBoundingClientRect().height;
  flushSync(update);
  const to = el.getBoundingClientRect().height;
  if (Math.abs(to - from) < 0.5) return;
  const timing = cssTransitionTiming(tr, 60);
  el.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: parseFloat(timing.duration), easing: timing.easing });
}

/* ---------------- runtime ---------------- */

type Channel = { x: number; y: number; scale: number; rotate: number; opacity: number; blur: number };
const identity = (): Channel => ({ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, blur: 0 });

function deltaFrom(from: FxValues, base: FxBase): Channel {
  return {
    x: from.x ?? 0,
    y: from.y ?? 0,
    scale: (from.scale ?? 1) / (base.scale ?? 1),
    rotate: from.rotate === undefined ? 0 : from.rotate - (base.rotate ?? 0),
    opacity: from.opacity ?? 1,
    blur: from.blur ?? 0,
  };
}
function mix(a: Channel, p: number): Channel {
  // a = offset at progress 0, identity at progress 1
  return {
    x: a.x * (1 - p),
    y: a.y * (1 - p),
    scale: a.scale + (1 - a.scale) * p,
    rotate: a.rotate * (1 - p),
    opacity: a.opacity + (1 - a.opacity) * p,
    blur: Math.max(0, a.blur * (1 - p)),
  };
}

export function composeTransform(base: FxBase, c: Channel) {
  const x = (base.x ?? 0) + c.x;
  const y = (base.y ?? 0) + c.y;
  const scale = (base.scale ?? 1) * c.scale;
  const rotate = (base.rotate ?? 0) + c.rotate;
  const parts: string[] = [];
  if (base.template) parts.push(base.template);
  if (x || y) parts.push(`translateX(${round(x)}px) translateY(${round(y)}px)`);
  if (scale !== 1) parts.push(`scale(${round(scale, 5)})`);
  if (rotate) parts.push(`rotate(${round(rotate)}deg)`);
  return parts.length ? parts.join(" ") : "none";
}
const round = (n: number, d = 3) => Math.round(n * 10 ** d) / 10 ** d;

/** Initial (pre-animation) CSS so server-rendered markup starts in the Framer "initial" state. */
export function fxInitialCss(config: FxConfig) {
  const rules: string[] = [];
  for (const fx of config.effects) {
    const base = fx.base ?? {};
    const decl: string[] = [];
    let sel = fx.selector;
    if (fx.appear) {
      const d = deltaFrom(fx.appear.from, base);
      decl.push(`opacity:${d.opacity} !important`, `transform:${composeTransform(base, { ...d, opacity: 1, blur: 0 })} !important`);
    } else if (fx.words) {
      const d = deltaFrom(fx.words.from, {});
      sel = `${fx.selector} [data-fx-word]`;
      decl.push(`opacity:${d.opacity} !important`, `transform:${composeTransform({}, d)} !important`);
      if (d.blur) decl.push(`filter:blur(${d.blur}px) !important`);
    } else if (fx.scrollTransform) {
      const d = deltaFrom(fx.scrollTransform.from, {});
      decl.push(`transform:${composeTransform(base, d)} !important`);
    } else if (fx.base) {
      decl.push(`transform:${composeTransform(base, identity())} !important`);
    }
    if (!decl.length) continue;
    const rule = `${sel}{${decl.join(";")}}`;
    rules.push(fx.media ? `@media ${fx.media}{${rule}}` : rule);
  }
  return `@media (prefers-reduced-motion: no-preference){${rules.join("")}}`;
}

type Live = {
  el: HTMLElement;
  fx: FxEffect;
  base: FxBase;
  appear?: { start: number; delta: Channel; curve: Curve; delay: number; started: boolean; done: boolean };
  loop?: { start: number; curve: Curve; delay: number; active: boolean; to: Channel };
  parallaxY: number;
  st?: { value: number; velocity: number; target: number; from: Channel; to: Channel; spring?: { k: number; c: number; m: number } | undefined };
  words?: { spans: HTMLElement[]; start: number; curve: Curve; delta: Channel; started: boolean; done: boolean };
  layoutTop: number;
  height: number;
  inView: boolean;
};

function layoutTop(el: HTMLElement) {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}
const visible = (el: Element) => el.getClientRects().length > 0;
const setImportant = (el: HTMLElement, prop: string, value: string) => el.style.setProperty(prop, value, "important");

export function useFramerEffects(config: FxConfig) {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lives: Live[] = [];
    let tickers: TickerState[] = [];
    let frame = 0;
    let last = performance.now();
    const t0 = performance.now();
    const observers: IntersectionObserver[] = [];

    function build() {
      observers.splice(0).forEach((o) => o.disconnect());
      const prev = new Map(lives.map((l) => [l.el, l] as const));
      lives = [];
      for (const fx of config.effects) {
        if (fx.media && !matchMedia(fx.media).matches) continue;
        for (const el of Array.from(document.querySelectorAll<HTMLElement>(fx.selector))) {
          if (!visible(el)) continue;
          const old = prev.get(el);
          if (old && old.fx === fx) {
            lives.push(old);
            continue;
          }
          const base = fx.base ?? {};
          const live: Live = { el, fx, base, parallaxY: 0, layoutTop: 0, height: 0, inView: false };
          if (fx.appear) {
            const tr = fx.appear.transition;
            live.appear = {
              start: 0,
              delta: deltaFrom(fx.appear.from, base),
              curve: transitionCurve(tr),
              delay: (tr.delay ?? 0) * 1000,
              started: false,
              done: false,
            };
          }
          if (fx.loop) {
            const tr = fx.loop.transition;
            const to = deltaFrom(fx.loop.to, {});
            live.loop = { start: 0, curve: transitionCurve(tr), delay: (tr.delay ?? 0) * 1000, active: false, to };
          }
          if (fx.scrollTransform) {
            const sp = fx.scrollTransform.spring;
            live.st = {
              value: -1,
              velocity: 0,
              target: 0,
              from: deltaFrom(fx.scrollTransform.from, {}),
              to: deltaFrom(fx.scrollTransform.to, {}),
              spring: sp && sp.type === "spring" && sp.stiffness ? { k: sp.stiffness, c: sp.damping ?? 10, m: sp.mass ?? 1 } : undefined,
            };
          }
          if (fx.words) {
            live.words = {
              spans: Array.from(el.querySelectorAll<HTMLElement>("[data-fx-word]")),
              start: 0,
              curve: transitionCurve(fx.words.transition),
              delta: deltaFrom(fx.words.from, {}),
              started: false,
              done: false,
            };
          }
          lives.push(live);
        }
      }
      measure();
      for (const live of lives) {
        const io = new IntersectionObserver(
          ([entry]) => {
            live.inView = !!entry?.isIntersecting;
            const now = performance.now();
            if (live.inView) {
              if (live.appear && !live.appear.started && live.fx.appear?.trigger === "inView") {
                live.appear.started = true;
                live.appear.start = now;
              }
              if (live.words && !live.words.started && live.fx.words?.trigger === "inView") {
                live.words.started = true;
                live.words.start = now;
              }
              if (live.loop && !live.loop.active) {
                live.loop.active = true;
                live.loop.start = now;
              }
            } else if (live.loop) {
              live.loop.active = false;
            }
            kick();
          },
          { threshold: live.fx.appear?.threshold ?? 0 },
        );
        io.observe(live.el);
        observers.push(io);
        if (live.appear && live.fx.appear?.trigger === "load" && !live.appear.started) {
          live.appear.started = true;
          live.appear.start = t0;
        }
        if (live.words && live.fx.words?.trigger === "load" && !live.words.started) {
          live.words.started = true;
          live.words.start = t0;
        }
      }
      tickers.forEach((t) => t.destroy());
      tickers = (config.tickers ?? []).flatMap((def) =>
        Array.from(document.querySelectorAll<HTMLElement>(def.selector))
          .filter(visible)
          .map((el) => createTicker(el, def, kick)),
      );
      syncScrollClasses();
      kick();
    }

    function measure() {
      for (const live of lives) {
        live.layoutTop = layoutTop(live.el);
        live.height = live.el.offsetHeight;
      }
    }

    function syncScrollClasses() {
      for (const sc of config.scrollClasses ?? []) {
        const trigger = Array.from(document.querySelectorAll<HTMLElement>(sc.trigger)).find(visible);
        if (!trigger) continue;
        const active = scrollY >= layoutTop(trigger) - 0.5;
        for (const el of Array.from(document.querySelectorAll<HTMLElement>(sc.selector))) {
          el.classList.toggle(sc.activeClass, active);
          for (const v of sc.variants ?? []) {
            if (!el.matches(v.selector)) continue;
            el.classList.toggle(v.active, active);
            el.classList.toggle(v.inactive, !active);
          }
        }
      }
    }

    function render(now: number, dt: number) {
      let busy = false;
      const sy = scrollY;
      const vh = innerHeight;
      for (const live of lives) {
        const c = identity();
        if (live.appear) {
          const a = live.appear;
          let p = 0;
          if (reduced) p = 1;
          else if (a.started) {
            const t = now - a.start - a.delay;
            p = t <= 0 ? 0 : a.curve.at(t);
            if (t < a.curve.duration) busy = true;
            else a.done = true;
          }
          const m = mix(a.delta, p);
          c.x += m.x;
          c.y += m.y;
          c.scale *= m.scale;
          c.rotate += m.rotate;
          c.opacity *= m.opacity;
        }
        if (live.fx.parallax && !reduced) {
          const { speed, adjustPosition, offset = 0 } = live.fx.parallax;
          const origin = adjustPosition ? live.layoutTop - offset : 0;
          c.y += (sy - origin) * (1 - speed / 100);
        }
        if (live.loop && !reduced) {
          const l = live.loop;
          if (l.active) {
            const t = now - l.start - l.delay;
            if (t > 0) {
              const cycle = l.curve.duration;
              const n = Math.floor(t / cycle);
              const local = (t % cycle) / cycle;
              const p = l.curve.at((n % 2 === 0 ? local : 1 - local) * cycle);
              c.x += l.to.x * p;
              c.y += l.to.y * p;
            }
            busy = true;
          }
        }
        if (live.st) {
          const s = live.st;
          const raw = (sy + vh - live.layoutTop) / Math.max(1, live.height);
          s.target = reduced ? 1 : Math.min(1, Math.max(0, raw));
          if (s.value < 0 || !s.spring) {
            s.value = s.target;
            s.velocity = 0;
          } else {
            let remaining = Math.min(dt, 64);
            while (remaining > 0) {
              const h = Math.min(2, remaining) / 1000;
              const acc = (-s.spring.k * (s.value - s.target) - s.spring.c * s.velocity) / s.spring.m;
              s.velocity += acc * h;
              s.value += s.velocity * h;
              remaining -= 2;
            }
            if (Math.abs(s.value - s.target) > 0.0005 || Math.abs(s.velocity) > 0.001) busy = true;
            else {
              s.value = s.target;
              s.velocity = 0;
            }
          }
          const p = s.value;
          c.x += s.from.x + (s.to.x - s.from.x) * p;
          c.y += s.from.y + (s.to.y - s.from.y) * p;
          c.scale *= s.from.scale + (s.to.scale - s.from.scale) * p;
          c.rotate += s.from.rotate + (s.to.rotate - s.from.rotate) * p;
        }
        if (live.words) {
          const w = live.words;
          const fxw = live.fx.words!;
          w.spans.forEach((span, i) => {
            let p = 0;
            if (reduced) p = 1;
            else if (w.started) {
              const t = now - w.start - ((fxw.startDelay ?? 0) + i * fxw.stagger) * 1000;
              p = t <= 0 ? 0 : w.curve.at(t);
              if (t < w.curve.duration) busy = true;
            }
            const m = mix(w.delta, p);
            setImportant(span, "opacity", String(round(m.opacity, 4)));
            setImportant(span, "transform", composeTransform({}, { ...m, opacity: 1, blur: 0 }));
            setImportant(span, "filter", m.blur > 0.01 ? `blur(${round(m.blur, 2)}px)` : "none");
          });
        }
        if (live.appear || live.fx.parallax || live.loop || live.st || live.fx.base) {
          setImportant(live.el, "transform", composeTransform(live.base, c));
        }
        if (live.appear) setImportant(live.el, "opacity", String(round(c.opacity, 4)));
      }
      for (const t of tickers) if (t.step(dt, reduced)) busy = true;
      return busy;
    }

    function loop(now: number) {
      const dt = now - last;
      last = now;
      frame = 0;
      if (render(now, dt)) frame = requestAnimationFrame(loop);
    }
    function kick() {
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(loop);
      }
    }
    const onScroll = () => {
      syncScrollClasses();
      kick();
    };
    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 120);
    };
    build();
    const remeasure = window.setTimeout(() => {
      measure();
      kick();
    }, 600);
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    addEventListener("load", onResize);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(remeasure);
      clearTimeout(resizeTimer);
      observers.forEach((o) => o.disconnect());
      tickers.forEach((t) => t.destroy());
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      removeEventListener("load", onResize);
    };
  }, [config]);
}

/* ---------------- ticker (Framer "Ticker" effect) ---------------- */

type TickerState = { step: (dt: number, reduced: boolean) => boolean; destroy: () => void };

function createTicker(container: HTMLElement, def: FxTicker, kick: () => void): TickerState {
  const list = (container.querySelector(":scope > ul") as HTMLElement | null) ?? container;
  const items = Array.from(list.children) as HTMLElement[];
  const gap = parseFloat(getComputedStyle(list).columnGap || getComputedStyle(list).gap) || 0;
  let offset = 0;
  let inView = true;
  let dragging = false;
  let dragVelocity = 0;
  let momentum = 0;
  let lastX = 0;
  let lastT = 0;
  let moved = 0;
  const direction = def.reverse ? -1 : 1;
  items.forEach((li) => li.style.removeProperty("transform"));
  list.style.removeProperty("transform");
  const period = () => items.reduce((sum, li) => sum + li.offsetWidth, 0) + gap * items.length;

  function place() {
    const p = period();
    if (!p) return;
    const mod = (((offset % p) + p) % p) - p;
    list.style.transform = `translateX(${round(mod, 2)}px)`;
    for (const li of items) {
      const right = li.offsetLeft + li.offsetWidth + mod;
      li.style.transform = right < 0 ? `translateX(${round(p, 2)}px)` : "none";
    }
  }
  const io = new IntersectionObserver(([entry]) => {
    inView = !!entry?.isIntersecting;
    if (inView) kick();
  });
  io.observe(container);

  const onDown = (e: PointerEvent) => {
    if (!def.draggable || e.button !== 0) return;
    dragging = true;
    moved = 0;
    momentum = 0;
    lastX = e.clientX;
    lastT = performance.now();
    container.setPointerCapture(e.pointerId);
  };
  const onMove = (e: PointerEvent) => {
    if (!dragging) return;
    const now = performance.now();
    const dx = e.clientX - lastX;
    offset += dx;
    moved += Math.abs(dx);
    dragVelocity = (dx / Math.max(1, now - lastT)) * 1000;
    lastX = e.clientX;
    lastT = now;
    place();
  };
  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    momentum = dragVelocity;
    kick();
  };
  const onClick = (e: MouseEvent) => {
    if (moved > 4) {
      e.preventDefault();
      e.stopPropagation();
      moved = 0;
    }
  };
  const onDragStart = (e: DragEvent) => e.preventDefault();
  container.addEventListener("pointerdown", onDown);
  container.addEventListener("pointermove", onMove);
  container.addEventListener("pointerup", onUp);
  container.addEventListener("pointercancel", onUp);
  container.addEventListener("click", onClick, true);
  container.addEventListener("dragstart", onDragStart);
  place();

  return {
    step(dt, reduced) {
      if (reduced || !inView || dragging) return false;
      const auto = def.velocity * direction;
      if (Math.abs(momentum) > Math.abs(auto)) {
        offset += (momentum * dt) / 1000;
        momentum *= Math.exp(-dt / 325);
      } else {
        momentum = 0;
        offset -= (auto * dt) / 1000;
      }
      place();
      return true;
    },
    destroy() {
      io.disconnect();
      container.removeEventListener("pointerdown", onDown);
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerup", onUp);
      container.removeEventListener("pointercancel", onUp);
      container.removeEventListener("click", onClick, true);
      container.removeEventListener("dragstart", onDragStart);
    },
  };
}
