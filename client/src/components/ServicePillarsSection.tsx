import { useEffect, useRef, useState, useCallback } from "react";
import { Palette, Bot, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const pillars = [
  {
    id: "creative",
    icon: Palette,
    title: "Creative Media",
    subtitle: "Brand, social & ad campaigns",
    link: "/services/creative",
    accentColor: "#f97316",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Solutions",
    subtitle: "Custom AI tools & systems",
    link: "/services/ai-solutions",
    accentColor: "#c4ff4d",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Workflow Automation",
    subtitle: "Funnels that convert",
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
        className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ 
          transitionDelay: `${150 + index * 100}ms`,
          backgroundColor: "#fafafa",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          boxShadow: isHovered 
            ? "0 20px 40px -15px rgba(0, 0, 0, 0.12)" 
            : "0 2px 12px -4px rgba(0, 0, 0, 0.05)",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)"
        }}
        data-testid={`pillar-card-${pillar.id}`}
      >
        {/* Spotlight effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${pillar.accentColor}12, transparent 40%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4 p-5 md:p-6">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
            style={{ 
              backgroundColor: isHovered ? pillar.accentColor : `${pillar.accentColor}15`,
              transform: isHovered ? "rotate(-6deg) scale(1.05)" : "rotate(0) scale(1)"
            }}
          >
            <Icon
              className="w-6 h-6 transition-colors duration-500"
              style={{ 
                color: isHovered ? (pillar.accentColor === "#c4ff4d" ? "#0a0a0a" : "#ffffff") : pillar.accentColor
              }}
              strokeWidth={1.5}
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 
              className="text-base md:text-lg font-bold mb-0.5 transition-all duration-300"
              style={{ color: "#0a0a0a" }}
            >
              {pillar.title}
            </h3>
            <p 
              className="text-xs md:text-sm truncate"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              {pillar.subtitle}
            </p>
          </div>

          {/* Arrow */}
          <ArrowUpRight 
            className="w-4 h-4 flex-shrink-0 transition-all duration-500"
            style={{ 
              color: isHovered ? pillar.accentColor : "rgba(0, 0, 0, 0.2)",
              transform: isHovered ? "translate(2px, -2px)" : "translate(0, 0)"
            }}
          />
        </div>

        {/* Bottom accent */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
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
      className="relative py-8 md:py-12 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
      data-testid="service-pillars-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        {/* Compact 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="service-pillars-section"] * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
