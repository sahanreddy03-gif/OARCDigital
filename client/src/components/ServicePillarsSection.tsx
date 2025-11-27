import { useEffect, useRef, useState } from "react";
import { Palette, Bot, Zap } from "lucide-react";

const pillars = [
  {
    id: "creative",
    icon: Palette,
    title: "Creative Media Studio",
    subtitle: "Brand, social and ad campaigns.",
    accentColor: "#f97316",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Product Solutions",
    subtitle: "Custom AI assistants, tools and systems.",
    accentColor: "#3d5a3d",
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
      className="relative py-10 md:py-14 overflow-hidden"
      style={{ backgroundColor: "#A3B896" }}
      data-testid="service-pillars-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Heading */}
        <h2
          className={`text-center text-lg md:text-xl lg:text-2xl font-medium mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms", color: "#2d4a2d" }}
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
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500`}
                  style={{ 
                    backgroundColor: index === 0 ? "#3d5a3d" : "rgba(255,255,255,0.5)" 
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
      className={`group relative rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ 
        transitionDelay: `${200 + index * 150}ms`,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.3)"
      }}
      data-testid={`pillar-card-${pillar.id}`}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        >
          <Icon
            className="w-6 h-6 md:w-7 md:h-7"
            style={{ color: "#2d4a2d" }}
            strokeWidth={1.5}
          />
        </div>

        {/* Title */}
        <h3 
          className="text-lg md:text-xl font-semibold mb-2 md:mb-3 transition-colors duration-300"
          style={{ color: "#1a2e1a" }}
        >
          {pillar.title}
        </h3>

        {/* Subtitle */}
        <p 
          className="text-sm md:text-base leading-relaxed transition-colors duration-300"
          style={{ color: "#3d5a3d" }}
        >
          {pillar.subtitle}
        </p>
      </div>
    </div>
  );
}
