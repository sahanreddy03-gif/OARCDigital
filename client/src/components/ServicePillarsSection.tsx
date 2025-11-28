import { useEffect, useRef, useState } from "react";
import { Palette, Bot, Zap } from "lucide-react";

const pillars = [
  {
    id: "creative",
    icon: Palette,
    title: "Creative Media Studio",
    subtitle: "Brand, social and ad campaigns that captivate and convert.",
    accentColor: "#f97316",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Product Solutions",
    subtitle: "Custom AI assistants, tools and intelligent systems.",
    accentColor: "#c4ff4d",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Workflow Automation",
    subtitle: "Funnels and journeys that turn attention into revenue.",
    accentColor: "#f97316",
  },
];

export default function ServicePillarsSection() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#0f0f0f" }}
      data-testid="service-pillars-section"
    >
      {/* Subtle animated gradient beams */}
      <div 
        className="absolute top-0 left-1/4 w-px h-full opacity-20"
        style={{ 
          background: "linear-gradient(180deg, transparent 0%, #c4ff4d 50%, transparent 100%)"
        }}
      />
      <div 
        className="absolute top-0 right-1/4 w-px h-full opacity-10"
        style={{ 
          background: "linear-gradient(180deg, transparent 20%, #f97316 60%, transparent 100%)"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Heading */}
        <h2
          className={`text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms", color: "rgba(255, 255, 255, 0.9)" }}
          data-testid="pillars-heading"
        >
          Here's how we help you grow.
        </h2>

        {/* Cards Container */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Mobile Layout - Horizontal scroll */}
          <div className="md:hidden">
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.id}
                  className="flex-shrink-0 w-[85vw] max-w-[320px] snap-center"
                >
                  <PillarCard
                    pillar={pillar}
                    index={index}
                    isVisible={isVisible}
                  />
                </div>
              ))}
            </div>
            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-4">
              {pillars.map((pillar, index) => (
                <div
                  key={`dot-${pillar.id}`}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                  style={{ 
                    backgroundColor: index === 0 ? "#c4ff4d" : "rgba(255,255,255,0.3)" 
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-testid="service-pillars-section"] * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

interface PillarCardProps {
  pillar: (typeof pillars)[0];
  index: number;
  isVisible: boolean;
}

function PillarCard({ pillar, index, isVisible }: PillarCardProps) {
  const Icon = pillar.icon;

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ 
        transitionDelay: `${200 + index * 150}ms`,
        minHeight: "240px",
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(8px)"
      }}
      data-testid={`pillar-card-${pillar.id}`}
    >
      {/* Top accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 group-hover:h-[3px]"
        style={{ 
          background: `linear-gradient(90deg, transparent 0%, ${pillar.accentColor} 50%, transparent 100%)`,
          opacity: 0.8
        }}
      />
      
      {/* Subtle corner glow on hover */}
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700"
        style={{ backgroundColor: pillar.accentColor }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        {/* Icon */}
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
          style={{ 
            backgroundColor: `${pillar.accentColor}15`,
            border: `1px solid ${pillar.accentColor}30`
          }}
        >
          <Icon
            className="w-6 h-6 md:w-7 md:h-7"
            style={{ color: pillar.accentColor }}
            strokeWidth={1.5}
          />
        </div>

        {/* Title */}
        <h3 
          className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300"
          style={{ color: "rgba(255, 255, 255, 0.95)" }}
        >
          {pillar.title}
        </h3>

        {/* Subtitle */}
        <p 
          className="text-sm md:text-base leading-relaxed transition-colors duration-300"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          {pillar.subtitle}
        </p>
      </div>
    </div>
  );
}
