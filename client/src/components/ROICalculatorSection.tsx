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

function AnimatedNumber({ value, prefix = "", suffix = "", duration = 600 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    const startValue = previousValue.current;
    const endValue = value;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
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
    <span className="tabular-nums">
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

  const efficiencyGain = 45;
  const monthlySavings = Math.round(monthlyBudget * (efficiencyGain / 100));
  const annualSavings = monthlySavings * 12;

  return (
    <section 
      ref={sectionRef}
      className="relative py-14 md:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
      data-testid="section-roi-calculator"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c4ff4d]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        
        {/* Section Header - Compact */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c4ff4d]/70 font-medium mb-3">
            Why OARC Digital
          </p>
          <h2 
            className="text-white font-bold mb-3"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: '1.15' }}
          >
            AI solutions or traditional outsourcing?{" "}
            <span className="italic font-medium text-[#c4ff4d]">Neither.</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            See why innovative brands choose OARC for AI software, solutions & workflow automation.
          </p>
        </div>

        {/* Comparison Table - Compact */}
        <div className="mb-10 md:mb-14">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-3 mb-3 px-4">
            <div className="col-span-6"></div>
            {columns.map((col) => (
              <div key={col.key} className="col-span-2 text-center">
                <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  {col.label}
                </span>
              </div>
            ))}
          </div>

          {/* Table Rows - Compact */}
          <div className="space-y-2">
            {comparisonData.map((row, index) => (
              <div 
                key={row.name}
                className={`
                  relative rounded-xl transition-all duration-300
                  ${row.isHighlighted 
                    ? 'bg-[#c4ff4d]' 
                    : 'bg-white/[0.03] border border-white/[0.08]'
                  }
                `}
                data-testid={`comparison-row-${index}`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      row.isHighlighted ? 'bg-black/10' : 'bg-white/10'
                    }`}>
                      <row.icon className={`w-4 h-4 ${row.isHighlighted ? 'text-black' : 'text-white'}`} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-sm ${row.isHighlighted ? 'text-black' : 'text-white'}`}>
                        {row.name}
                      </h4>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {columns.map((col) => {
                      const value = row[col.key as keyof ComparisonRow] as boolean;
                      return (
                        <div key={col.key} className="text-center">
                          <span className={`text-[9px] font-medium uppercase tracking-wider block mb-0.5 ${
                            row.isHighlighted ? 'text-black/50' : 'text-white/40'
                          }`}>
                            {col.label}
                          </span>
                          {value ? (
                            <Check className={`w-4 h-4 mx-auto ${row.isHighlighted ? 'text-black' : 'text-[#c4ff4d]'}`} strokeWidth={2.5} />
                          ) : (
                            <X className={`w-4 h-4 mx-auto ${row.isHighlighted ? 'text-black/40' : 'text-white/30'}`} strokeWidth={2} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Desktop Layout - Compact */}
                <div className="hidden md:grid grid-cols-12 gap-3 items-center p-4">
                  <div className="col-span-6 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      row.isHighlighted ? 'bg-black/10' : 'bg-white/10'
                    }`}>
                      <row.icon className={`w-5 h-5 ${row.isHighlighted ? 'text-black' : 'text-white'}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className={`font-semibold text-sm ${row.isHighlighted ? 'text-black' : 'text-white'}`}>
                        {row.name}
                      </h4>
                      <p className={`text-xs ${row.isHighlighted ? 'text-black/70' : 'text-white/50'}`}>
                        {row.description}
                      </p>
                    </div>
                  </div>
                  {columns.map((col) => {
                    const value = row[col.key as keyof ComparisonRow] as boolean;
                    return (
                      <div key={col.key} className="col-span-2 flex justify-center">
                        {value ? (
                          <Check className={`w-5 h-5 ${row.isHighlighted ? 'text-black' : 'text-[#c4ff4d]'}`} strokeWidth={2.5} />
                        ) : (
                          <X className={`w-5 h-5 ${row.isHighlighted ? 'text-black/40' : 'text-white/30'}`} strokeWidth={2} />
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
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-medium">
            Calculate Savings
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {/* ROI Calculator - Compact Single Row */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          
          {/* Left: Slider */}
          <div className="space-y-4 p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-white flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#c4ff4d]" />
                Monthly Operations Budget
              </label>
              <span className="text-sm font-bold text-[#c4ff4d] bg-[#c4ff4d]/10 px-3 py-1 rounded-full" data-testid="value-budget">
                ${monthlyBudget.toLocaleString()}
              </span>
            </div>
            <Slider
              value={[monthlyBudget]}
              onValueChange={(value) => setMonthlyBudget(value[0])}
              min={5000}
              max={100000}
              step={5000}
              className="[&_[role=slider]]:bg-[#c4ff4d] [&_[role=slider]]:border-[#c4ff4d] [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-[#c4ff4d]/30 [&_.bg-primary]:bg-[#c4ff4d]"
              data-testid="slider-budget"
            />
            <div className="flex justify-between text-xs text-white/40">
              <span>$5K</span>
              <span>$100K</span>
            </div>
          </div>

          {/* Right: Results */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4ff4d]/15 to-[#c4ff4d]/5 border border-[#c4ff4d]/20">
              <p className="text-xs text-white/50 mb-1">Monthly Savings</p>
              <p className="text-2xl md:text-3xl font-bold text-[#c4ff4d]" data-testid="monthly-savings">
                <AnimatedNumber value={monthlySavings} prefix="$" />
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/50 mb-1">Annual Savings</p>
              <p className="text-2xl md:text-3xl font-bold text-white" data-testid="annual-savings">
                <AnimatedNumber value={annualSavings} prefix="$" />
              </p>
            </div>
          </div>
        </div>

        {/* CTA + Differentiators - Compact */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 md:gap-8 text-center md:text-left">
              {[
                { icon: Zap, label: "48h Turnaround" },
                { icon: Sparkles, label: "AI + Human Expert" },
                { icon: TrendingUp, label: "30% ROI Guarantee" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#c4ff4d]/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#c4ff4d]" />
                  </div>
                  <span className="text-xs font-medium text-white/70">{item.label}</span>
                </div>
              ))}
            </div>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#c4ff4d] hover:bg-[#b5ef3d] text-[#0a0a0a] font-bold rounded-full px-6 py-5 text-sm shadow-lg shadow-[#c4ff4d]/20"
                data-testid="button-get-analysis"
              >
                Get Free Growth Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
