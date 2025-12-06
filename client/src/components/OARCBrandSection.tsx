import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

export default function OARCBrandSection() {
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

  const pillars = [
    { id: "creative", name: "CREATIVE", link: "/services/creative", delay: 0 },
    { id: "ai", name: "AI SOLUTIONS", link: "/services/ai-solutions", delay: 100 },
    { id: "revenue", name: "REVENUE", link: "/services/automation", delay: 200 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
      data-testid="oarc-brand-section"
    >
      {/* Clean grid background */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196, 255, 77, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 255, 77, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        {/* Main OARC headline */}
        <div 
          className={`text-center mb-10 md:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Line 1: OPTIMISED AI */}
          <h2 
            className="font-black tracking-tight leading-none mb-1"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3.5rem)' }}
            data-testid="heading-optimised-ai"
          >
            <span className="text-white">OPTIMISED </span>
            <span style={{ color: '#23AACA' }}>AI</span>
          </h2>
          
          {/* Line 2: REVENUE CREATIVE */}
          <h2 
            className="font-black tracking-tight leading-none"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3.5rem)' }}
            data-testid="heading-revenue-creative"
          >
            <span className="text-white">REVENUE </span>
            <span style={{ color: '#c4ff4d' }}>CREATIVE</span>
          </h2>
        </div>

        {/* Service Pills - Stacked */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          {pillars.map((pillar) => (
            <Link key={pillar.id} href={pillar.link}>
              <button
                className={`w-full max-w-[240px] md:max-w-[280px] px-8 md:px-10 py-3 md:py-3.5 rounded-full border transition-all duration-300 hover:bg-[#c4ff4d]/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ 
                  borderColor: '#c4ff4d',
                  transitionDelay: `${200 + pillar.delay}ms`
                }}
                data-testid={`pillar-btn-${pillar.id}`}
              >
                <span 
                  className="text-sm md:text-base font-semibold tracking-[0.15em]"
                  style={{ color: '#c4ff4d' }}
                >
                  {pillar.name}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="oarc-brand-section"] * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
