"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const search = useSearchParams();
  const lenis = useLenis();
  const isPopRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
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
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, search, lenis]);

  return null;
}
