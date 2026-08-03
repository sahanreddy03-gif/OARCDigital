"use client";
/**
 * OARC Motion System
 * GSAP ScrollTrigger + custom easing curves inspired by DEPT Agency.
 * Every named ease has a personality — use the right one for the right moment.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

export function registerGSAP() {
  if (registered || typeof window === "undefined") return;
  registered = true;
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  // ── Custom easing curves ───────────────────────────────────────────
  // oarcOut   — fast start, graceful landing. Use for most entrances.
  CustomEase.create("oarcOut",    "M0,0 C0.16,1 0.3,1 1,1");
  // oarcSoft  — gentle, calm. Use for subtle fades and descriptions.
  CustomEase.create("oarcSoft",   "M0,0 C0.25,0.1 0.25,1 1,1");
  // oarcHard  — explosive exit, instant stop. Use for hero moments.
  CustomEase.create("oarcHard",   "M0,0 C0.7,0 0.84,1 1,1");
  // oarcBack  — slight overshoot. Use for cards and badges.
  CustomEase.create("oarcBack",   "M0,0 C0.34,1.3 0.64,1 1,1");
  // oarcInOut — symmetric. Use for transitions between states.
  CustomEase.create("oarcInOut",  "M0,0 C0.5,0 0.5,1 1,1");

  // ── ScrollTrigger global defaults ─────────────────────────────────
  ScrollTrigger.defaults({
    toggleActions: "play none none none",
    once: true,
  });

  // Respect reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.globalTimeline.timeScale(10);
  }
}

// ── Duration constants ─────────────────────────────────────────────────
export const DUR = {
  fast:   0.45,
  normal: 0.75,
  slow:   1.1,
  xslow:  1.6,
} as const;

// ── Stagger constants ──────────────────────────────────────────────────
export const STAG = {
  tight:  0.05,
  normal: 0.10,
  loose:  0.18,
} as const;

// ── Ease aliases ───────────────────────────────────────────────────────
export const EASE = {
  out:    "oarcOut",
  soft:   "oarcSoft",
  hard:   "oarcHard",
  back:   "oarcBack",
  inOut:  "oarcInOut",
  // fallbacks before CustomEase is registered
  p3:     "power3.out",
  p2:     "power2.out",
} as const;

// ── Utility: fade-up a set of elements with stagger ───────────────────
export function fadeUpStagger(
  targets: gsap.TweenTarget,
  trigger: Element,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    start?: string;
  }
) {
  const {
    y = 36,
    duration = DUR.normal,
    stagger = STAG.normal,
    delay = 0,
    ease = EASE.out,
    start = "top 88%",
  } = options ?? {};

  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease,
      scrollTrigger: { trigger, start },
    }
  );
}

// ── Utility: count-up a number element ────────────────────────────────
export function countUp(
  el: Element,
  target: number,
  suffix: string,
  trigger: Element,
  duration = DUR.xslow
) {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: target,
    duration,
    ease: EASE.out,
    scrollTrigger: { trigger, start: "top 85%" },
    onUpdate() {
      el.textContent =
        Number.isInteger(target)
          ? Math.round(obj.val) + suffix
          : obj.val.toFixed(1) + suffix;
    },
  });
}

export { gsap, ScrollTrigger };
