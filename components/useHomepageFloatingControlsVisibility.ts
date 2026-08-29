"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HOMEPAGE_TRIGGER_ID = "homepage-floating-controls-trigger";

export function useHomepageFloatingControlsVisibility() {
  const pathname = usePathname() ?? "/";
  const isHomepage = pathname === "/";
  const [isVisible, setIsVisible] = useState(!isHomepage);

  useEffect(() => {
    if (!isHomepage) {
      setIsVisible(true);
      return;
    }

    let animationFrame = 0;

    const updateVisibility = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const trigger = document.getElementById(HOMEPAGE_TRIGGER_ID);
        const revealLine = window.innerHeight * 0.85;
        setIsVisible(Boolean(trigger && trigger.getBoundingClientRect().top <= revealLine));
      });
    };

    setIsVisible(false);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [isHomepage]);

  return isVisible;
}
