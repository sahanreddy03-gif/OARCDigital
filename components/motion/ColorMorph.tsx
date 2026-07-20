"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll-driven background color-morph ("color grade").
 *
 * Homepage sections own opaque backgrounds, so instead of repainting the
 * body (which would be invisible), a fixed, pointer-events-none veil sits
 * above the page and shifts its tint as marker elements
 * (`<div data-morph-bg="rgba(...)"/>`) scroll through the viewport —
 * cooling the room in the dark AI zones, warming it in the creative zones.
 * Alpha stays ≤ ~0.12 so contrast is never at risk.
 *
 * Disabled entirely for prefers-reduced-motion.
 */
export default function ColorMorph() {
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const veil = veilRef.current;
    if (!veil || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const CLEAR = "rgba(10, 10, 12, 0)";
    const markers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-morph-bg]"),
    );
    if (markers.length === 0) return;

    const morphTo = (color: string) => {
      gsap.to(veil, {
        backgroundColor: color,
        duration: 0.9,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const triggers = markers.map((marker, i) => {
      const color = marker.dataset.morphBg || CLEAR;
      // The color that applies when scrolling back above this marker
      const prev = i > 0 ? markers[i - 1].dataset.morphBg || CLEAR : CLEAR;
      return ScrollTrigger.create({
        trigger: marker,
        start: "top 65%",
        onEnter: () => morphTo(color),
        onLeaveBack: () => morphTo(prev),
      });
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={veilRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30"
      style={{ backgroundColor: "rgba(10, 10, 12, 0)" }}
      data-testid="overlay-color-morph"
    />
  );
}
