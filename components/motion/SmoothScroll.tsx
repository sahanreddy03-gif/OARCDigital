"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type LenisType from "lenis";

/**
 * Lenis inertia smooth-scrolling, driven by the GSAP ticker and kept in
 * sync with ScrollTrigger. Desktop-only: touch devices keep their native
 * scroll feel, and prefers-reduced-motion disables it entirely.
 */
export default function SmoothScroll() {
  const lenisRef = useRef<LenisType | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reducedMotion || !finePointer) return;

    let destroyed = false;
    let cleanup: (() => void) | null = null;

    // Lenis is dynamically imported so it never lands in the shared
    // first-load bundle for crawlers / mobile.
    void import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
      });
      lenisRef.current = lenis;

      const onScroll = () => ScrollTrigger.update();
      lenis.on("scroll", onScroll);

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        lenisRef.current = null;
      };
    });

    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, []);

  // On route change, cancel any in-flight inertia and jump to the top so
  // Lenis never fights the app's own scroll-to-top behavior.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
