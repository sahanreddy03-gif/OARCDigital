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
    { 
      id: "creative", 
      name: "CREATIVE", 
      link: "/services/creative",
      delay: 0 
    },
    { 
      id: "ai", 
      name: "AI SOLUTIONS", 
      link: "/services/ai-solutions",
      delay: 150 
    },
    { 
      id: "revenue", 
      name: "REVENUE", 
      link: "/services/automation",
      delay: 300 
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
      data-testid="oarc-brand-section"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196, 255, 77, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 255, 77, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Corner accents - top left */}
      <div className="absolute top-8 left-8 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L0 40 M0 0 L40 0" stroke="#c4ff4d" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Corner accents - top right */}
      <div className="absolute top-8 right-8 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 0 L60 40 M60 0 L20 0" stroke="#23AACA" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Corner accents - bottom left */}
      <div className="absolute bottom-8 left-8 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 60 L0 20 M0 60 L40 60" stroke="#23AACA" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Corner accents - bottom right */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 60 L60 20 M60 60 L20 60" stroke="#c4ff4d" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl relative z-10">
        {/* Main OARC headline */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 
            className="font-black tracking-tight leading-none"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              letterSpacing: '-0.02em'
            }}
          >
            <span className="text-white">OPTIMISED </span>
            <span style={{ color: '#23AACA' }}>AI </span>
            <span className="text-white">REVENUE </span>
            <span style={{ color: '#c4ff4d' }}>CREATIVE</span>
          </h2>
        </div>

        {/* Three pillars */}
        <div 
          className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Connecting line - left */}
          <div className="hidden md:block w-12 lg:w-20 h-px bg-gradient-to-r from-transparent to-[#c4ff4d]/40" />
          
          {pillars.map((pillar, index) => (
            <div key={pillar.id} className="flex items-center gap-4 md:gap-6">
              <Link href={pillar.link}>
                <button
                  className={`group relative px-8 md:px-10 lg:px-12 py-3.5 md:py-4 rounded-full border-2 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ 
                    borderColor: '#c4ff4d',
                    backgroundColor: 'transparent',
                    transitionDelay: `${300 + pillar.delay}ms`
                  }}
                  data-testid={`pillar-btn-${pillar.id}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c4ff4d';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span 
                    className="text-sm md:text-base lg:text-lg font-bold tracking-[0.15em] transition-colors duration-300 group-hover:text-black"
                    style={{ color: '#c4ff4d' }}
                  >
                    {pillar.name}
                  </span>
                </button>
              </Link>
              
              {/* Connecting line between pills */}
              {index < pillars.length - 1 && (
                <div className="hidden md:flex items-center">
                  <div className="w-4 lg:w-6 h-px" style={{ backgroundColor: 'rgba(196, 255, 77, 0.4)' }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c4ff4d', opacity: 0.6 }} />
                  <div className="w-4 lg:w-6 h-px" style={{ backgroundColor: 'rgba(196, 255, 77, 0.4)' }} />
                </div>
              )}
            </div>
          ))}

          {/* Connecting line - right */}
          <div className="hidden md:block w-12 lg:w-20 h-px bg-gradient-to-l from-transparent to-[#c4ff4d]/40" />
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
