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
      className="relative bg-white py-6 md:py-10 overflow-hidden"
      data-testid="oarc-strip-section"
    >
      <div className="container mx-auto px-1.5 md:px-6 max-w-5xl">
        {/* Tagline */}
        <p
          className={`text-center text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-4 md:mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          The OARC way
        </p>

        {/* OARC Pills Row - fits all 4 in one row on mobile */}
        <div className="flex justify-center items-center gap-1 md:gap-8 lg:gap-10">
          {oarcItems.map((item, index) => (
            <div
              key={item.letter}
              className={`flex items-center gap-0.5 md:gap-2.5 px-2 md:px-6 py-2 md:py-3 rounded-full bg-zinc-50 border border-zinc-100 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
              data-testid={`oarc-pill-${item.letter}`}
            >
              {/* Letter - Orange accent, thicker font */}
              <span className="text-base md:text-2xl lg:text-3xl font-extrabold text-orange-500">
                {item.letter}
              </span>
              {/* Word - slightly bolder */}
              <span className="text-[11px] md:text-base lg:text-lg font-semibold text-zinc-700 whitespace-nowrap">
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
