"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * Line-mask headline reveal system.
 *
 * Wrap any server-rendered content: every H1/H2 inside the scope reveals
 * line-by-line (masked, staggered) as it scrolls into view.
 *
 * SEO-safe by construction — the headings ship fully rendered in the HTML;
 * SplitText only re-wraps them on the client *after* fonts are ready.
 * Headings already inside the first viewport are left completely untouched
 * so LCP is never delayed and there is zero flash of hidden text.
 *
 * Opt out any subtree with `data-no-reveal`.
 */
export default function RevealScope({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const splits: SplitText[] = [];
    const triggers: ScrollTrigger[] = [];

    const init = () => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);

      const headings = Array.from(scope.querySelectorAll<HTMLElement>("h1, h2"));
      for (const el of headings) {
        if (el.closest("[data-no-reveal]")) continue;
        if (!el.textContent?.trim()) continue;
        // Skip hidden elements (carousel clones, collapsed accordions…)
        if (el.offsetParent === null) continue;
        const rect = el.getBoundingClientRect();
        // Leave anything already on screen untouched — protects LCP and
        // avoids visibly hiding text the user is reading.
        if (rect.top < window.innerHeight && rect.bottom > 0) continue;

        try {
          const split = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            linesClass: "oarc-reveal-line",
            onSplit(self) {
              const tween = gsap.from(self.lines, {
                yPercent: 115,
                duration: 0.85,
                ease: "power4.out",
                stagger: 0.09,
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  once: true,
                },
              });
              if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
              return tween;
            },
          });
          splits.push(split);
        } catch {
          // A heading with unusual markup shouldn't break the page —
          // it simply stays fully visible.
        }
      }
    };

    // Split only after webfonts settle so line breaks are final.
    void document.fonts.ready.then(() => {
      // Yield a frame so hydration/layout is complete.
      requestAnimationFrame(() => init());
    });

    return () => {
      cancelled = true;
      triggers.forEach((t) => t.kill());
      splits.forEach((s) => s.revert());
    };
  }, []);

  return (
    <div ref={scopeRef} className={className}>
      {children}
    </div>
  );
}
