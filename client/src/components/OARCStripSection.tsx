import { useEffect, useRef, useState } from "react";

const oarcItems = [
  { letter: "O", word: "Optimised" },
  { letter: "A", word: "AI-powered" },
  { letter: "R", word: "Revenue-focused" },
  { letter: "C", word: "Creative-led" },
];

export default function OARCStripSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
      data-testid="oarc-strip-section"
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(196, 255, 77, 0.08) 0%, transparent 60%)"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        {/* Tagline */}
        <p
          className={`text-center text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-6 md:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ 
            transitionDelay: "0ms",
            color: "rgba(255, 255, 255, 0.5)"
          }}
        >
          The OARC way
        </p>

        {/* OARC Pills Row */}
        <div className="flex justify-center items-center gap-2 md:gap-6 lg:gap-8">
          {oarcItems.map((item, index) => (
            <div
              key={item.letter}
              className={`group flex items-center gap-1.5 md:gap-3 px-3 md:px-6 py-2.5 md:py-3.5 rounded-full border transition-all duration-700 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ 
                transitionDelay: `${150 + index * 100}ms`,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(196, 255, 77, 0.2)",
                backdropFilter: "blur(8px)"
              }}
              data-testid={`oarc-pill-${item.letter}`}
            >
              {/* Letter - Lime accent */}
              <span 
                className="text-lg md:text-2xl lg:text-3xl font-black transition-all duration-300 group-hover:scale-110"
                style={{ color: "#c4ff4d" }}
              >
                {item.letter}
              </span>
              {/* Word */}
              <span className="text-[11px] md:text-base lg:text-lg font-medium text-white/80 whitespace-nowrap group-hover:text-white transition-colors duration-300">
                {item.word}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reduced motion support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="oarc-strip-section"] * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
