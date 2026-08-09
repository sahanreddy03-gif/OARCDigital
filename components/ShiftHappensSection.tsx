"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// SHIFT HAPPENS — per-letter GSAP roll-up animation
// Each letter clips from below its baseline and rolls up into place.
// GPU-only transforms (y, opacity) — zero layout cost.
// Fires once on first scroll-into-view; respects prefers-reduced-motion.

const SHIFT   = ["S","H","I","F","T"];
const HAPPENS = ["H","A","P","P","E","N","S"];

function LetterGroup({
  letters,
  style,
  groupRef,
}: {
  letters: string[];
  style: React.CSSProperties;
  groupRef: React.RefObject<HTMLSpanElement[]>;
}) {
  return (
    <>
      {letters.map((l, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", lineHeight: 1 }}
        >
          <span
            ref={(el) => {
              if (el && groupRef.current) groupRef.current[i] = el;
            }}
            style={{ display: "inline-block", ...style }}
          >
            {l}
          </span>
        </span>
      ))}
    </>
  );
}

export default function ShiftHappensSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const shiftRefs   = useRef<HTMLSpanElement[]>([]);
  const happensRefs = useRef<HTMLSpanElement[]>([]);
  const ruleRef     = useRef<HTMLDivElement>(null);
  const animated    = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        observer.disconnect();

        if (reduced) {
          // Instant reveal — no animation
          [...shiftRefs.current, ...happensRefs.current].forEach((el) => {
            if (el) { el.style.transform = "translateY(0)"; el.style.opacity = "1"; }
          });
          if (ruleRef.current) { ruleRef.current.style.opacity = "1"; ruleRef.current.style.transform = "scaleX(1)"; }
          return;
        }

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // SHIFT — letters roll up from below, stagger 0.055s
        tl.from(shiftRefs.current, {
          y: "110%",
          opacity: 0,
          duration: 0.72,
          stagger: 0.055,
        });

        // HAPPENS — starts 0.1s after SHIFT begins, same motion
        tl.from(
          happensRefs.current,
          {
            y: "110%",
            opacity: 0,
            duration: 0.72,
            stagger: 0.055,
          },
          0.10  // offset from start of timeline
        );

        // Rule wipes left-to-right after letters land
        tl.from(
          ruleRef.current,
          { scaleX: 0, transformOrigin: "left center", duration: 0.9, ease: "power2.inOut" },
          "-=0.2"
        );
      },
      { threshold: 0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const textBase: React.CSSProperties = {
    fontFamily: "'Anton', Impact, 'Arial Narrow', sans-serif",
    fontSize: "clamp(2.8rem, 12.5vw, 14rem)",
    lineHeight: 1,
    letterSpacing: "0.02em",
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#F2EFE9" }}
      data-testid="shift-happens-section"
    >
      <div
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center"
        style={{ paddingLeft: "1vw", paddingRight: "1vw" }}
      >
        {/* Headline */}
        <div
          className="w-full text-center select-none whitespace-nowrap"
          style={textBase}
          data-testid="shift-happens-headline"
        >
          {/* SHIFT — solid ink */}
          <LetterGroup
            letters={SHIFT}
            style={{ color: "#0E0D0C" }}
            groupRef={shiftRefs}
          />

          {/* Gap */}
          <span style={{ display: "inline-block", width: "0.45em" }} aria-hidden="true" />

          {/* HAPPENS — outline only */}
          <LetterGroup
            letters={HAPPENS}
            style={{
              color: "transparent",
              WebkitTextStroke: "2.5px #0E0D0C",
            } as React.CSSProperties}
            groupRef={happensRefs}
          />
        </div>

        {/* Full-width rule */}
        <div className="w-full mt-5 sm:mt-6 md:mt-8">
          <div
            ref={ruleRef}
            style={{ height: "1px", width: "100%", background: "rgba(14,13,12,0.16)" }}
          />
        </div>
      </div>
    </section>
  );
}
