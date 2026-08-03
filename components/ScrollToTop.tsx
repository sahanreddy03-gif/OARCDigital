"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLenis } from "lenis/react";
import { scrollToPageTop } from "@/lib/scrollToPageTop";

export default function ScrollToTop() {
  const pathname = usePathname();
  const search = useSearchParams();
  const lenis = useLenis();
  const isPopRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const onPop = () => {
      isPopRef.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    if (isPopRef.current) {
      isPopRef.current = false;
      return;
    }

    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === 'back_forward') return;

    scrollToPageTop(lenis);
    lenis?.resize();
  }, [pathname, search, lenis]);

  return null;
}
