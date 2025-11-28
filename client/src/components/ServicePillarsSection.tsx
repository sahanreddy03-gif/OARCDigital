import { useEffect, useRef, useState, useCallback } from "react";
import { Palette, Bot, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const pillars = [
  {
    id: "creative",
    icon: Palette,
    title: "Creative Media Studio",
    subtitle: "Brand, social and ad campaigns that captivate and convert.",
    stats: "300+ campaigns",
    link: "/services/creative",
    accentColor: "#f97316",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Product Solutions",
    subtitle: "Custom AI assistants, tools and intelligent systems.",
    stats: "50+ AI products",
    link: "/services/ai-solutions",
    accentColor: "#c4ff4d",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Workflow Automation",
    subtitle: "Funnels and journeys that turn attention into revenue.",
    stats: "10M+ automated",
    link: "/services/automation",
    accentColor: "#f97316",
  },
];

interface PillarCardProps {
  pillar: (typeof pillars)[0];
  index: number;
  isVisible: boolean;
}

function PillarCard({ pillar, index, isVisible }: PillarCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = pillar.icon;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <Link href={pillar.link}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
        style={{ 
          transitionDelay: `${300 + index * 200}ms`,
          minHeight: "380px",
          backgroundColor: "#fafafa",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          boxShadow: isHovered 
            ? "0 30px 60px -15px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)" 
            : "0 4px 20px -5px rgba(0, 0, 0, 0.06)",
          transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"
        }}
        data-testid={`pillar-card-${pillar.id}`}
      >
        {/* Spotlight effect following cursor */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${pillar.accentColor}15, transparent 40%)`,
          }}
        />

        {/* Number indicator */}
        <div 
          className="absolute top-6 right-6 text-8xl font-black opacity-[0.04] transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-110"
          style={{ color: pillar.accentColor }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-8 md:p-10">
          {/* Icon with animated ring */}
          <div className="relative mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
              style={{ 
                backgroundColor: isHovered ? pillar.accentColor : `${pillar.accentColor}15`,
                transform: isHovered ? "rotate(-6deg) scale(1.1)" : "rotate(0) scale(1)"
              }}
            >
              <Icon
                className="w-8 h-8 transition-all duration-500"
                style={{ 
                  color: isHovered ? (pillar.accentColor === "#c4ff4d" ? "#0a0a0a" : "#ffffff") : pillar.accentColor
                }}
                strokeWidth={1.5}
              />
            </div>
            
            {/* Animated ring */}
            <div 
              className="absolute inset-0 rounded-2xl transition-all duration-700"
              style={{
                border: `2px solid ${pillar.accentColor}`,
                opacity: isHovered ? 0.3 : 0,
                transform: isHovered ? "scale(1.3)" : "scale(1)",
              }}
            />
          </div>

          {/* Stats badge */}
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 w-fit transition-all duration-500"
            style={{ 
              backgroundColor: isHovered ? `${pillar.accentColor}20` : "rgba(0, 0, 0, 0.04)",
              color: isHovered ? pillar.accentColor : "rgba(0, 0, 0, 0.5)",
              transform: isHovered ? "translateX(4px)" : "translateX(0)"
            }}
          >
            {pillar.stats}
          </div>

          {/* Title */}
          <h3 
            className="text-2xl md:text-3xl font-bold mb-4 transition-all duration-500"
            style={{ 
              color: "#0a0a0a",
              transform: isHovered ? "translateX(4px)" : "translateX(0)"
            }}
          >
            {pillar.title}
          </h3>

          {/* Subtitle */}
          <p 
            className="text-base leading-relaxed mb-auto transition-all duration-500"
            style={{ 
              color: "rgba(0, 0, 0, 0.55)",
              transform: isHovered ? "translateX(4px)" : "translateX(0)"
            }}
          >
            {pillar.subtitle}
          </p>

          {/* CTA */}
          <div 
            className="flex items-center gap-2 mt-6 font-semibold text-sm transition-all duration-500"
            style={{ 
              color: isHovered ? pillar.accentColor : "rgba(0, 0, 0, 0.4)",
              transform: isHovered ? "translateX(8px)" : "translateX(0)"
            }}
          >
            <span>Learn more</span>
            <ArrowUpRight 
              className="w-4 h-4 transition-transform duration-500"
              style={{ transform: isHovered ? "translate(2px, -2px)" : "translate(0, 0)" }}
            />
          </div>
        </div>

        {/* Bottom accent bar */}
        <div 
          className="absolute bottom-0 left-0 h-1 transition-all duration-700"
          style={{
            width: isHovered ? "100%" : "0%",
            backgroundColor: pillar.accentColor,
          }}
        />
      </div>
    </Link>
  );
}

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
      data-testid="service-pillars-section"
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 100%, rgba(249, 115, 22, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 100% 0%, rgba(196, 255, 77, 0.08) 0%, transparent 40%)
          `
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div 
          className={`mb-14 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(0, 0, 0, 0.35)" }}
          >
            What we do
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl"
            style={{ 
              color: "#0a0a0a",
              letterSpacing: "-0.03em",
              lineHeight: 1.15
            }}
          >
            Here's how we{" "}
            <span className="relative inline-block">
              help you grow
              <div 
                className="absolute -bottom-2 left-0 right-0 h-3 -z-10 transition-all duration-1000"
                style={{
                  background: `linear-gradient(90deg, ${pillars[0].accentColor}40, ${pillars[1].accentColor}40)`,
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transitionDelay: "0.4s"
                }}
              />
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
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

          {/* Mobile Layout - Horizontal scroll with snap */}
          <div className="md:hidden">
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.id}
                  className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center"
                >
                  <PillarCard
                    pillar={pillar}
                    index={index}
                    isVisible={isVisible}
                  />
                </div>
              ))}
            </div>
            
            {/* Scroll hint */}
            <div className="flex justify-center items-center gap-1.5 mt-4">
              <span className="text-xs font-medium text-black/30">Swipe to explore</span>
              <ArrowUpRight className="w-3 h-3 text-black/30 rotate-90" />
            </div>
          </div>
        </div>
      </div>

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
