import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { name: "Creative Media", delay: 0 },
    { name: "AI Solutions", delay: 150 },
    { name: "Workflow Automation", delay: 300 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-8 md:py-10 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
      data-testid="oarc-strip-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        {/* Single elegant line */}
        <div 
          className={`flex flex-col items-center gap-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* OARC tagline */}
          <p 
            className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-center"
            style={{ color: "rgba(0, 0, 0, 0.35)" }}
          >
            <span style={{ color: "#c4ff4d" }}>O</span>ptimised · 
            <span style={{ color: "#c4ff4d" }}> A</span>I-powered · 
            <span style={{ color: "#c4ff4d" }}> R</span>evenue-focused · 
            <span style={{ color: "#c4ff4d" }}> C</span>reative-led
          </p>

          {/* Three services - single line */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className={`flex items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${200 + service.delay}ms` }}
              >
                <span 
                  className="text-sm sm:text-base md:text-lg font-semibold px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ 
                    color: "#0a0a0a",
                    backgroundColor: "transparent"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = index === 1 ? "rgba(196, 255, 77, 0.15)" : "rgba(249, 115, 22, 0.1)";
                    e.currentTarget.style.color = index === 1 ? "#5a8a00" : "#ea580c";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#0a0a0a";
                  }}
                  data-testid={`service-tag-${index}`}
                >
                  {service.name}
                </span>
                {index < services.length - 1 && (
                  <span 
                    className="text-lg mx-1"
                    style={{ color: "rgba(0, 0, 0, 0.15)" }}
                  >
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Subtle scroll indicator */}
          <div 
            className={`mt-2 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <ChevronDown 
              className="w-5 h-5 animate-bounce"
              style={{ 
                color: "rgba(0, 0, 0, 0.2)",
                animationDuration: "2s"
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="oarc-strip-section"] * {
            transition-duration: 0.01ms !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
