import { useState, useEffect, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Check, 
  X, 
  Zap,
  Users,
  Building2,
  UserCircle,
  Wrench,
  Sparkles,
  Bot
} from "lucide-react";
import { Link } from "wouter";

function AnimatedNumber({ value, prefix = "", suffix = "", duration = 800 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    const startValue = previousValue.current;
    const endValue = value;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (endValue - startValue) * easeProgress;
      
      setDisplayValue(Math.round(currentValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        previousValue.current = endValue;
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <span className="tabular-nums font-mono">
      {prefix}{formatNumber(displayValue)}{suffix}
    </span>
  );
}

interface ComparisonRow {
  name: string;
  description: string;
  icon: React.ElementType;
  speed: boolean;
  aiPowered: boolean;
  scalability: boolean;
  isHighlighted?: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    name: "OARC Digital",
    description: "AI-first solutions with workflow automation delivering speed, quality, and unlimited scale.",
    icon: Bot,
    speed: true,
    aiPowered: true,
    scalability: true,
    isHighlighted: true,
  },
  {
    name: "In-house team",
    description: "Limited bandwidth and AI expertise for modern automation needs.",
    icon: Users,
    speed: false,
    aiPowered: false,
    scalability: false,
  },
  {
    name: "Traditional agencies",
    description: "Slow turnaround, costly retainers, minimal AI integration.",
    icon: Building2,
    speed: false,
    aiPowered: false,
    scalability: true,
  },
  {
    name: "Freelancers",
    description: "Inconsistent quality and hard to scale for enterprise needs.",
    icon: UserCircle,
    speed: true,
    aiPowered: false,
    scalability: false,
  },
  {
    name: "DIY AI tools",
    description: "Generic outputs, steep learning curve, no strategic guidance.",
    icon: Wrench,
    speed: true,
    aiPowered: true,
    scalability: false,
  },
];

const columns = [
  { key: "speed", label: "Speed" },
  { key: "aiPowered", label: "AI-Native" },
  { key: "scalability", label: "Scale" },
];

export default function ROICalculatorSection() {
  const [monthlyBudget, setMonthlyBudget] = useState(15000);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const efficiencyGain = 28;
  const monthlySavings = Math.round(monthlyBudget * (efficiencyGain / 100));
  const annualSavings = monthlySavings * 12;

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#f0fff4" }}
      data-testid="section-roi-calculator"
    >
      {/* Subtle gradient accents */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 0%, rgba(196, 255, 77, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(249, 115, 22, 0.05) 0%, transparent 50%)
          `
        }}
      />
      
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p
            className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(0, 0, 0, 0.35)" }}
          >
            Why OARC Digital
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ 
              color: "#0a0a0a",
              letterSpacing: "-0.03em",
              lineHeight: 1.15
            }}
          >
            AI solutions or traditional outsourcing?{" "}
            <span className="italic font-medium" style={{ color: "#c4ff4d", textShadow: "0 0 40px rgba(196, 255, 77, 0.3)" }}>Neither.</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
            See why innovative brands choose OARC for AI software, solutions & workflow automation.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 md:mb-20">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 mb-4 px-6">
            <div className="col-span-6"></div>
            {columns.map((col) => (
              <div key={col.key} className="col-span-2 text-center">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(0, 0, 0, 0.35)" }}>
                  {col.label}
                </span>
              </div>
            ))}
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {comparisonData.map((row, index) => (
              <div 
                key={row.name}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                className="relative rounded-2xl transition-all duration-500"
                style={{
                  backgroundColor: row.isHighlighted ? "#c4ff4d" : hoveredRow === index ? "#ffffff" : "#ffffff",
                  border: row.isHighlighted ? "2px solid #c4ff4d" : "1px solid rgba(0, 0, 0, 0.06)",
                  boxShadow: row.isHighlighted 
                    ? "0 20px 40px -15px rgba(196, 255, 77, 0.3)" 
                    : hoveredRow === index 
                      ? "0 10px 30px -10px rgba(0, 0, 0, 0.1)" 
                      : "0 2px 10px -5px rgba(0, 0, 0, 0.05)",
                  transform: hoveredRow === index && !row.isHighlighted ? "translateY(-2px)" : "translateY(0)",
                  transitionDelay: `${index * 80}ms`,
                  opacity: isVisible ? 1 : 0,
                }}
                data-testid={`comparison-row-${index}`}
              >
                {/* Mobile Layout */}
                <div className="md:hidden p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: row.isHighlighted ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.04)"
                      }}
                    >
                      <row.icon 
                        className="w-5 h-5" 
                        style={{ color: row.isHighlighted ? "#0a0a0a" : "rgba(0, 0, 0, 0.6)" }}
                        strokeWidth={1.5} 
                      />
                    </div>
                    <h4 
                      className="font-bold text-base"
                      style={{ color: row.isHighlighted ? "#0a0a0a" : "#0a0a0a" }}
                    >
                      {row.name}
                    </h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {columns.map((col) => {
                      const value = row[col.key as keyof ComparisonRow] as boolean;
                      return (
                        <div key={col.key} className="text-center">
                          <span 
                            className="text-[10px] font-bold uppercase tracking-wider block mb-1"
                            style={{ color: row.isHighlighted ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.35)" }}
                          >
                            {col.label}
                          </span>
                          {value ? (
                            <Check 
                              className="w-5 h-5 mx-auto" 
                              style={{ color: row.isHighlighted ? "#0a0a0a" : "#c4ff4d" }}
                              strokeWidth={3} 
                            />
                          ) : (
                            <X 
                              className="w-5 h-5 mx-auto" 
                              style={{ color: row.isHighlighted ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.2)" }}
                              strokeWidth={2} 
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 gap-4 items-center p-5 md:p-6">
                  <div className="col-span-6 flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                      style={{ 
                        backgroundColor: row.isHighlighted ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.04)",
                        transform: hoveredRow === index ? "scale(1.1) rotate(-6deg)" : "scale(1) rotate(0)"
                      }}
                    >
                      <row.icon 
                        className="w-6 h-6" 
                        style={{ color: row.isHighlighted ? "#0a0a0a" : "rgba(0, 0, 0, 0.6)" }}
                        strokeWidth={1.5} 
                      />
                    </div>
                    <div>
                      <h4 
                        className="font-bold text-base mb-0.5"
                        style={{ color: row.isHighlighted ? "#0a0a0a" : "#0a0a0a" }}
                      >
                        {row.name}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: row.isHighlighted ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.45)" }}
                      >
                        {row.description}
                      </p>
                    </div>
                  </div>
                  {columns.map((col) => {
                    const value = row[col.key as keyof ComparisonRow] as boolean;
                    return (
                      <div key={col.key} className="col-span-2 flex justify-center">
                        {value ? (
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                            style={{
                              backgroundColor: row.isHighlighted ? "rgba(0, 0, 0, 0.15)" : "rgba(196, 255, 77, 0.15)",
                              transform: hoveredRow === index ? "scale(1.2)" : "scale(1)"
                            }}
                          >
                            <Check 
                              className="w-4 h-4" 
                              style={{ color: row.isHighlighted ? "#0a0a0a" : "#7cb518" }}
                              strokeWidth={3} 
                            />
                          </div>
                        ) : (
                          <X 
                            className="w-5 h-5" 
                            style={{ color: row.isHighlighted ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.15)" }}
                            strokeWidth={2} 
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.08), transparent)" }} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(0, 0, 0, 0.3)" }}>
            Calculate Your Savings
          </span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.08), transparent)" }} />
        </div>

        {/* ROI Calculator */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left: Slider */}
          <div 
            className="p-8 rounded-3xl transition-all duration-500"
            style={{ 
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <label className="text-sm font-bold flex items-center gap-2" style={{ color: "#0a0a0a" }}>
                <DollarSign className="w-4 h-4" style={{ color: "#c4ff4d" }} />
                Monthly Operations Budget
              </label>
              <span 
                className="text-sm font-bold px-4 py-2 rounded-full"
                style={{ 
                  backgroundColor: "rgba(196, 255, 77, 0.15)",
                  color: "#6b9b12"
                }}
                data-testid="value-budget"
              >
                ${monthlyBudget.toLocaleString()}
              </span>
            </div>
            <Slider
              value={[monthlyBudget]}
              onValueChange={(value) => setMonthlyBudget(value[0])}
              min={5000}
              max={100000}
              step={5000}
              className="[&_[role=slider]]:bg-[#c4ff4d] [&_[role=slider]]:border-[#c4ff4d] [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-[#c4ff4d]/30 [&_[role=slider]]:w-6 [&_[role=slider]]:h-6 [&_.bg-primary]:bg-[#c4ff4d]"
              data-testid="slider-budget"
            />
            <div className="flex justify-between text-xs font-medium mt-3" style={{ color: "rgba(0, 0, 0, 0.35)" }}>
              <span>$5K</span>
              <span>$100K</span>
            </div>
          </div>

          {/* Right: Results */}
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="p-6 md:p-8 rounded-3xl transition-all duration-500"
              style={{ 
                background: "linear-gradient(135deg, #c4ff4d 0%, #a8e834 100%)",
                boxShadow: "0 20px 40px -15px rgba(196, 255, 77, 0.4)"
              }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "rgba(0, 0, 0, 0.5)" }}>Monthly Savings</p>
              <p className="text-3xl md:text-4xl font-black" style={{ color: "#0a0a0a" }} data-testid="monthly-savings">
                <AnimatedNumber value={monthlySavings} prefix="$" />
              </p>
            </div>
            <div 
              className="p-6 md:p-8 rounded-3xl"
              style={{ 
                backgroundColor: "#0a0a0a",
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)"
              }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Annual Savings</p>
              <p className="text-3xl md:text-4xl font-black text-white" data-testid="annual-savings">
                <AnimatedNumber value={annualSavings} prefix="$" />
              </p>
            </div>
          </div>
        </div>

        {/* CTA + Differentiators */}
        <div className="mt-12 md:mt-16 pt-8 border-t" style={{ borderColor: "rgba(0, 0, 0, 0.06)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8 md:gap-10">
              {[
                { icon: Zap, label: "48h Turnaround", color: "#f97316" },
                { icon: Sparkles, label: "AI + Human Expert", color: "#c4ff4d" },
                { icon: TrendingUp, label: "30% ROI Guarantee", color: "#f97316" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "rgba(0, 0, 0, 0.7)" }}>{item.label}</span>
                </div>
              ))}
            </div>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white font-bold rounded-full px-8 py-6 text-sm shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                data-testid="button-get-analysis"
              >
                Get Free Growth Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="section-roi-calculator"] * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
