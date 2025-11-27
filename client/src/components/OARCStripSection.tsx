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
      className="relative py-10 md:py-14 overflow-hidden"
      style={{ backgroundColor: "#A3B896" }}
      data-testid="oarc-strip-section"
    >
      <div className="container mx-auto px-3 md:px-6 max-w-5xl">
        {/* Tagline */}
        <p
          className={`text-center text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-5 md:mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ 
            transitionDelay: "0ms",
            color: "#3d5a3d" 
          }}
        >
          The OARC way
        </p>

        {/* OARC Pills Row - adjusted for mobile */}
        <div className="flex justify-center items-center gap-2 md:gap-6 lg:gap-8 flex-wrap md:flex-nowrap">
          {oarcItems.map((item, index) => (
            <div
              key={item.letter}
              className={`flex items-center gap-1 md:gap-2 px-2.5 md:px-5 py-1.5 md:py-2.5 rounded-full transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ 
                transitionDelay: `${150 + index * 100}ms`,
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(8px)"
              }}
              data-testid={`oarc-pill-${item.letter}`}
            >
              {/* Letter - Dark green for contrast on sage */}
              <span 
                className="text-base md:text-xl lg:text-2xl font-bold"
                style={{ color: "#2d4a2d" }}
              >
                {item.letter}
              </span>
              {/* Word */}
              <span 
                className="text-[11px] md:text-sm lg:text-base font-medium whitespace-nowrap"
                style={{ color: "#3d5a3d" }}
              >
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
