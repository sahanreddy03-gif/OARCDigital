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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      style={{ backgroundColor: "#ffffff" }}
      data-testid="oarc-strip-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        {/* Single row - OARC stays horizontal on all screens */}
        <div 
          className={`flex items-center justify-center gap-1 sm:gap-2 md:gap-3 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {oarcItems.map((item, index) => (
            <div
              key={item.letter}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ 
                transitionDelay: `${index * 80}ms`,
              }}
              data-testid={`oarc-pill-${item.letter}`}
            >
              <div 
                className="relative flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-500"
                style={{ 
                  backgroundColor: hoveredIndex === index ? "#0a0a0a" : "#fafafa",
                  border: `1px solid ${hoveredIndex === index ? "#c4ff4d" : "rgba(0, 0, 0, 0.06)"}`,
                  boxShadow: hoveredIndex === index 
                    ? "0 8px 30px -10px rgba(196, 255, 77, 0.4)" 
                    : "0 2px 8px -4px rgba(0, 0, 0, 0.06)",
                  transform: hoveredIndex === index ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)"
                }}
              >
                {/* Letter */}
                <span 
                  className="text-lg sm:text-xl md:text-2xl font-black transition-all duration-500"
                  style={{ 
                    color: "#c4ff4d",
                    textShadow: hoveredIndex === index ? "0 0 20px rgba(196, 255, 77, 0.6)" : "none"
                  }}
                >
                  {item.letter}
                </span>
                
                {/* Word - visible on sm+ */}
                <span 
                  className="hidden sm:inline text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-500"
                  style={{ 
                    color: hoveredIndex === index ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {item.word}
                </span>
              </div>

              {/* Tooltip for mobile */}
              <div 
                className="sm:hidden absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded text-[9px] font-semibold uppercase tracking-wide whitespace-nowrap transition-all duration-300 pointer-events-none"
                style={{ 
                  backgroundColor: "#0a0a0a",
                  color: "#c4ff4d",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: `translateX(-50%) ${hoveredIndex === index ? "translateY(0)" : "translateY(-4px)"}`
                }}
              >
                {item.word}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="oarc-strip-section"] * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
