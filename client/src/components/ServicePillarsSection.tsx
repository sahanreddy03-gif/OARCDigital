import { useEffect, useRef, useState, useCallback } from "react";
import { Palette, Bot, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface GlassGlowCardProps {
  icon: typeof Palette;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
  glowColor: string;
  borderColor: string;
  iconBg: string;
}

function GlassGlowCard({ icon: Icon, title, subtitle, description, features, href, glowColor, borderColor, iconBg }: GlassGlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x, y });
  }, []);

  return (
    <Link href={href}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group cursor-pointer rounded-2xl p-[1px] transition-all duration-500"
        style={{
          background: isHovered
            ? `linear-gradient(135deg, ${borderColor}40, ${borderColor}20, transparent, ${borderColor}20)`
            : `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))`,
        }}
        data-testid={`card-pillar-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div
          className="relative rounded-2xl p-8 lg:p-10 h-full overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(10,15,25,0.92), rgba(8,12,20,0.97))',
            backdropFilter: 'blur(40px)',
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 40%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />

          <div
            className="absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(300px circle at ${glowPosition.x}% ${glowPosition.y}%, ${borderColor}15, transparent 50%)`,
              opacity: isHovered ? 0.8 : 0,
            }}
          />

          <div className="relative z-10">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
              style={{
                background: iconBg,
                boxShadow: isHovered ? `0 0 30px ${borderColor}30` : 'none',
              }}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2 transition-colors duration-300"
              style={{ color: borderColor }}>
              {subtitle}
            </p>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
              {title}
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: borderColor }} />
                  <span className="text-zinc-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
              style={{ color: borderColor }}>
              <span>Explore {title}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

const pillars = [
  {
    icon: Palette,
    title: "Creative",
    subtitle: "Design & Brand",
    description: "World-class creative services powered by AI. From ad creative to full brand identities — designed to convert.",
    features: [
      "Ad creative & social assets",
      "Brand identity & design systems",
      "Video production & motion",
      "Presentation & pitch decks",
    ],
    href: "/creative",
    glowColor: "rgba(59,130,246,0.07)",
    borderColor: "#3b82f6",
    iconBg: "linear-gradient(135deg, #1e40af, #3b82f6)",
  },
  {
    icon: Bot,
    title: "AI Agents",
    subtitle: "Virtual Talent Hub",
    description: "Hire AI employees that work 24/7. Sales reps, support agents, and analysts — ready to scale your operations.",
    features: [
      "AI Sales Development Rep",
      "Customer Support Specialist",
      "Data Insights Analyst",
      "Content & Admin Agents",
    ],
    href: "/ai-agents",
    glowColor: "rgba(34,197,94,0.07)",
    borderColor: "#22c55e",
    iconBg: "linear-gradient(135deg, #166534, #22c55e)",
  },
  {
    icon: TrendingUp,
    title: "Revenue",
    subtitle: "Growth & Automation",
    description: "End-to-end revenue automation. From lead generation to funnel optimisation — engineered for measurable growth.",
    features: [
      "Lead generation engines",
      "Marketing automation suite",
      "Funnel optimisation",
      "Custom software & MVPs",
    ],
    href: "/solutions",
    glowColor: "rgba(147,197,253,0.06)",
    borderColor: "#93c5fd",
    iconBg: "linear-gradient(135deg, #1e3a5f, #60a5fa)",
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
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #0a0f1a 50%, #030712 100%)' }}
      data-testid="service-pillars-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #22c55e, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-4" data-testid="text-pillars-label">
            Three Pillars of Growth
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5" data-testid="text-pillars-headline">
            Everything your brand needs.<br className="hidden sm:block" />
            <span className="text-zinc-400">Under one roof.</span>
          </h2>
          <p className="text-zinc-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Creative excellence, intelligent automation, and revenue engineering — combined into a single platform built for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" data-testid="grid-pillars">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <GlassGlowCard {...pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}