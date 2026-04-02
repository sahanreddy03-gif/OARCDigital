import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
            {/* gap between words */}
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

        {/* Tagline — EB Garamond, pure white, no colours */}
        <motion.div
          {...fadeUp(0.34)}
          className="w-full mt-5 sm:mt-6 md:mt-8 overflow-hidden"
          data-testid="shift-tagline"
        >
          <p
            className="w-full text-center whitespace-nowrap"
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(1.1rem, 5vw, 5.5rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            <span style={{ fontWeight: 400 }}>Optimised AI Revenue&nbsp;</span>
            <span style={{ fontWeight: 700, fontStyle: "italic" }}>Creative</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
