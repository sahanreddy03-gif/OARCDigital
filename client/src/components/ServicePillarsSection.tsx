import { useEffect, useRef, useState } from "react";
import { Palette, Bot, Zap } from "lucide-react";

const pillars = [
  {
    id: "creative",
    icon: Palette,
    title: "Creative Media Studio",
    subtitle: "Brand, social and ad campaigns.",
    accentColor: "#f97316", // Orange
    gradientFrom: "from-orange-500/10",
    gradientTo: "to-orange-600/5",
    borderHover: "hover:border-orange-400/50",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Product Solutions",
    subtitle: "Custom AI assistants, tools and systems.",
    accentColor: "#c4ff4d", // Brand green
    gradientFrom: "from-[#c4ff4d]/10",
    gradientTo: "to-[#c4ff4d]/5",
    borderHover: "hover:border-[#c4ff4d]/50",
    iconBg: "bg-[#c4ff4d]/15",
    iconColor: "text-[#9acc3d]",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Workflow Automation",
    subtitle: "Funnels and journeys that turn attention into revenue.",
    accentColor: "#f97316", // Orange for glow
    gradientFrom: "from-orange-500/5",
    gradientTo: "to-[#c4ff4d]/10",
    borderHover: "hover:border-orange-400/40",
    iconBg: "bg-gradient-to-br from-orange-500/10 to-[#c4ff4d]/15",
    iconColor: "text-orange-500",
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
      className="relative bg-white py-8 md:py-12 overflow-hidden"
      data-testid="service-pillars-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Heading */}
        <h2
          className={`text-center text-lg md:text-xl lg:text-2xl font-medium text-zinc-600 mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
          data-testid="pillars-heading"
        >
          Here's how we help you grow.
        </h2>

        {/* Cards Container */}
        {/* Desktop: 3 cards in a row */}
        {/* Mobile: Horizontal scroll with snap */}
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
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    index === 0 ? "bg-zinc-400" : "bg-zinc-200"
                  }`}
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
      className={`group relative bg-white rounded-2xl p-6 md:p-8 border border-zinc-100 transition-all duration-500 cursor-pointer ${pillar.borderHover} hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
      data-testid={`pillar-card-${pillar.id}`}
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.gradientFrom} ${pillar.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-500`}
        >
          <Icon
            className={`w-6 h-6 md:w-7 md:h-7 ${pillar.iconColor}`}
            strokeWidth={1.5}
          />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-2 md:mb-3 group-hover:text-zinc-950 transition-colors duration-300">
          {pillar.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors duration-300">
          {pillar.subtitle}
        </p>
      </div>

      {/* Subtle glow effect on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${pillar.accentColor}20, transparent 50%)`,
        }}
      />
    </div>
  );
}
