import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const oarcColors: Record<string, string> = {
  O: "#ff914d",
  A: "#00d1c1",
  R: "#f5e1a4",
  C: "#c4ff4d",
};

const oarcShadows: Record<string, string> = {
  O: "1px 1px 0 rgba(255,145,77,0.95), 2px 2px 0 rgba(210,100,45,0.8), 3px 3px 0 rgba(165,65,15,0.6), 4px 4px 0 rgba(120,40,5,0.45), 5px 5px 14px rgba(0,0,0,0.75)",
  A: "1px 1px 0 rgba(0,209,193,0.95), 2px 2px 0 rgba(0,165,152,0.8), 3px 3px 0 rgba(0,120,110,0.6), 4px 4px 0 rgba(0,80,72,0.45), 5px 5px 14px rgba(0,0,0,0.75)",
  R: "1px 1px 0 rgba(245,225,164,0.95), 2px 2px 0 rgba(205,185,124,0.8), 3px 3px 0 rgba(160,140,85,0.6), 4px 4px 0 rgba(115,95,50,0.45), 5px 5px 14px rgba(0,0,0,0.75)",
  C: "1px 1px 0 rgba(196,255,77,0.95), 2px 2px 0 rgba(156,210,52,0.8), 3px 3px 0 rgba(112,162,24,0.6), 4px 4px 0 rgba(70,115,8,0.45), 5px 5px 14px rgba(0,0,0,0.75)",
};

function StyledChar({ ch, italic }: { ch: string; italic?: boolean }) {
  const upper = ch.toUpperCase();
  const is3d = upper in oarcColors;

  const base: Record<string, string | number> = {
    display: "inline",
    fontStyle: italic ? "italic" : "normal",
    ...(italic ? { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 600 } : {}),
  };

  if (is3d) {
    return (
      <span
        style={{
          ...base,
          color: oarcColors[upper],
          textShadow: oarcShadows[upper],
        }}
      >
        {ch}
      </span>
    );
  }

  return <span style={base}>{ch}</span>;
}

export default function ShiftHappensSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    animate: isVisible ? { opacity: 1, y: 0 } : {},
    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  const tagline = "Optimised AI Revenue Creative";
  const splitAt = "Optimised AI Revenue ".length;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#000000" }}
      data-testid="shift-happens-section"
    >
      <div
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center"
        style={{ paddingLeft: "1vw", paddingRight: "1vw" }}
      >

        {/* SHIFT HAPPENS — Anton ultra-bold condensed, solid + stroke duo */}
        <motion.div {...fadeUp(0)} className="w-full overflow-hidden" data-testid="shift-happens-headline">
          <div
            className="w-full text-center leading-none whitespace-nowrap select-none"
            style={{
              fontFamily: "'Anton', Impact, 'Arial Narrow', sans-serif",
              fontSize: "clamp(2.8rem, 12.5vw, 14rem)",
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            {/* SHIFT — solid white */}
            <span style={{ color: "#ffffff" }}>SHIFT</span>
            {/* thin space */}
            <span style={{ color: "#ffffff", fontSize: "0.5em" }}>&nbsp;&nbsp;</span>
            {/* HAPPENS — outline stroke only, no fill */}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "3px #ffffff",
              } as Record<string, string>}
            >
              HAPPENS
            </span>
          </div>
        </motion.div>

        {/* Full-width horizontal rule */}
        <motion.div {...fadeUp(0.18)} className="w-full mt-5 sm:mt-6 md:mt-8">
          <div
            style={{
              height: "2px",
              width: "100%",
              background: "rgba(255,255,255,0.45)",
            }}
          />
        </motion.div>

        {/* Tagline — Optimised AI Revenue + Creative (Georgia italic), O/A/R/C in 3D */}
        <motion.div
          {...fadeUp(0.34)}
          className="w-full mt-5 sm:mt-6 md:mt-8 overflow-hidden"
          data-testid="shift-tagline"
        >
          <p
            className="w-full text-center whitespace-nowrap leading-tight"
            style={{
              fontFamily: "'Montserrat', 'Arial', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1rem, 5.1vw, 5.8rem)",
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            {tagline.split("").map((ch, i) => (
              <StyledChar
                key={i}
                ch={ch}
                italic={i >= splitAt}
              />
            ))}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
