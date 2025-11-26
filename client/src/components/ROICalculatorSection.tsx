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
  Sparkles
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
  quality: boolean;
  scalability: boolean;
  cost: boolean;
  isHighlighted?: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    name: "OARC Digital",
    description: "AI-powered creative talent delivering speed, quality, and scalability at unmatched value.",
    icon: Sparkles,
    speed: true,
    quality: true,
    scalability: true,
    cost: true,
    isHighlighted: true,
  },
  {
    name: "In-house team",
    description: "Limited skill mix and bandwidth to handle every request your business needs.",
    icon: Users,
    speed: false,
    quality: true,
    scalability: false,
    cost: false,
  },
  {
    name: "Creative agencies",
    description: "Full-scale agencies can be slow, costly, and inflexible for fast-moving brands.",
    icon: Building2,
    speed: false,
    quality: true,
    scalability: true,
    cost: false,
  },
  {
    name: "Freelancers",
    description: "Can be unreliable and hard to scale, with inconsistent quality.",
    icon: UserCircle,
    speed: true,
    quality: false,
    scalability: false,
    cost: true,
  },
  {
    name: "DIY tools",
    description: "Incremental improvements but work mostly for simpler, repetitive tasks.",
    icon: Wrench,
    speed: true,
    quality: false,
    scalability: false,
    cost: true,
  },
];

const columns = [
  { key: "speed", label: "Speed" },
  { key: "quality", label: "Quality" },
  { key: "scalability", label: "Scalability" },
  { key: "cost", label: "Value" },
];

export default function ROICalculatorSection() {
  const [marketingSpend, setMarketingSpend] = useState(10000);
  const [teamSize, setTeamSize] = useState(3);
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

  const costSavingsPercent = 40;
  const monthlySavings = Math.round(marketingSpend * (costSavingsPercent / 100));
  const annualSavings = monthlySavings * 12;
  const productivityMultiplier = 3;
  const projectsDelivered = teamSize * productivityMultiplier * 4;

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 bg-[#1a2e29] overflow-hidden"
      data-testid="section-roi-calculator"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c4ff4d]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#c4ff4d]/3 rounded-full blur-[150px] pointer-events-none" />
      
      <div className={`container mx-auto px-4 md:px-6 lg:px-10 max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#c4ff4d]/80 font-medium mb-4 md:mb-6">
            OARC Digital vs. Traditional Alternatives
          </p>
          <h2 
            className="text-white font-bold mb-4 md:mb-6"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              letterSpacing: '-0.03em', 
              lineHeight: '1.1' 
            }}
          >
            Hiring or traditional outsourcing?{" "}
            <span className="italic font-medium text-[#c4ff4d]">Neither.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            See why ambitious brands choose OARC Digital over traditional alternatives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 mb-4 px-6">
            <div className="col-span-4"></div>
            {columns.map((col) => (
              <div key={col.key} className="col-span-2 text-center">
                <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
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
                className={`
                  relative rounded-2xl transition-all duration-300
                  ${row.isHighlighted 
                    ? 'bg-[#c4ff4d] shadow-lg shadow-[#c4ff4d]/20' 
                    : 'bg-white/5 hover:bg-white/8 border border-white/10'
                  }
                `}
                data-testid={`comparison-row-${index}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      row.isHighlighted ? 'bg-[#1a2e29]/10' : 'bg-white/10'
                    }`}>
                      <row.icon className={`w-5 h-5 ${row.isHighlighted ? 'text-[#1a2e29]' : 'text-white'}`} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg ${row.isHighlighted ? 'text-[#1a2e29]' : 'text-white'}`}>
                        {row.name}
                      </h4>
                      <p className={`text-sm mt-1 ${row.isHighlighted ? 'text-[#1a2e29]/70' : 'text-white/50'}`}>
                        {row.description}
                      </p>
                    </div>
                  </div>
                  {/* Mobile metrics grid */}
                  <div className="grid grid-cols-4 gap-2">
                    {columns.map((col) => {
                      const value = row[col.key as keyof ComparisonRow] as boolean;
                      return (
                        <div key={col.key} className="text-center">
                          <span className={`text-[10px] font-medium uppercase tracking-wider block mb-1 ${
                            row.isHighlighted ? 'text-[#1a2e29]/50' : 'text-white/40'
                          }`}>
                            {col.label}
                          </span>
                          {value ? (
                            <Check className={`w-5 h-5 mx-auto ${row.isHighlighted ? 'text-[#1a2e29]' : 'text-[#c4ff4d]'}`} strokeWidth={2.5} />
                          ) : (
                            <X className={`w-5 h-5 mx-auto ${row.isHighlighted ? 'text-[#1a2e29]/40' : 'text-white/30'}`} strokeWidth={2} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 gap-4 items-center p-6">
                  <div className="col-span-4 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      row.isHighlighted ? 'bg-[#1a2e29]/10' : 'bg-white/10'
                    }`}>
                      <row.icon className={`w-6 h-6 ${row.isHighlighted ? 'text-[#1a2e29]' : 'text-white'}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className={`font-semibold text-lg ${row.isHighlighted ? 'text-[#1a2e29]' : 'text-white'}`}>
                        {row.name}
                      </h4>
                      <p className={`text-sm mt-0.5 ${row.isHighlighted ? 'text-[#1a2e29]/70' : 'text-white/50'}`}>
                        {row.description}
                      </p>
                    </div>
                  </div>
                  {columns.map((col) => {
                    const value = row[col.key as keyof ComparisonRow] as boolean;
                    return (
                      <div key={col.key} className="col-span-2 flex justify-center">
                        {value ? (
                          <Check className={`w-6 h-6 ${row.isHighlighted ? 'text-[#1a2e29]' : 'text-[#c4ff4d]'}`} strokeWidth={2.5} />
                        ) : (
                          <X className={`w-6 h-6 ${row.isHighlighted ? 'text-[#1a2e29]/40' : 'text-white/30'}`} strokeWidth={2} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider with text */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
            Calculate Your Savings
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* ROI Calculator - Simplified */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Sliders */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
                Calculate your <span className="text-[#c4ff4d]">growth potential</span>
              </h3>
              <p className="text-white/50 text-sm md:text-base">
                Adjust the sliders to see how much you could save with OARC Digital.
              </p>
            </div>

            {/* Marketing Spend Slider */}
            <div className="space-y-4 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#c4ff4d]" />
                  Current Monthly Marketing Spend
                </label>
                <span className="text-sm font-bold text-[#c4ff4d] bg-[#c4ff4d]/10 px-3 py-1.5 rounded-full" data-testid="value-marketing-spend">
                  ${marketingSpend.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[marketingSpend]}
                onValueChange={(value) => setMarketingSpend(value[0])}
                min={5000}
                max={100000}
                step={5000}
                className="[&_[role=slider]]:bg-[#c4ff4d] [&_[role=slider]]:border-[#c4ff4d] [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-[#c4ff4d]/30 [&_.bg-primary]:bg-[#c4ff4d]"
                data-testid="slider-marketing-spend"
              />
              <div className="flex justify-between text-xs text-white/40">
                <span>$5K</span>
                <span>$100K</span>
              </div>
            </div>

            {/* Team Size Slider */}
            <div className="space-y-4 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#c4ff4d]" />
                  Your In-house Team Size
                </label>
                <span className="text-sm font-bold text-[#c4ff4d] bg-[#c4ff4d]/10 px-3 py-1.5 rounded-full" data-testid="value-team-size">
                  {teamSize} people
                </span>
              </div>
              <Slider
                value={[teamSize]}
                onValueChange={(value) => setTeamSize(value[0])}
                min={1}
                max={20}
                step={1}
                className="[&_[role=slider]]:bg-[#c4ff4d] [&_[role=slider]]:border-[#c4ff4d] [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-[#c4ff4d]/30 [&_.bg-primary]:bg-[#c4ff4d]"
                data-testid="slider-team-size"
              />
              <div className="flex justify-between text-xs text-white/40">
                <span>1 person</span>
                <span>20 people</span>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#c4ff4d]/5 rounded-3xl blur-xl pointer-events-none" />
            
            <div className="relative space-y-4">
              {/* Monthly Savings */}
              <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-[#c4ff4d]/15 to-[#c4ff4d]/5 border border-[#c4ff4d]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60 mb-1">Estimated Monthly Savings</p>
                    <p className="text-3xl md:text-4xl font-bold text-[#c4ff4d]" data-testid="monthly-savings">
                      <AnimatedNumber value={monthlySavings} prefix="$" />
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#c4ff4d]/20 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-[#c4ff4d]" />
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white/50 mb-1">Annual Savings</p>
                  <p className="text-2xl font-bold text-white" data-testid="annual-savings">
                    <AnimatedNumber value={annualSavings} prefix="$" />
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white/50 mb-1">Projects/Month</p>
                  <p className="text-2xl font-bold text-white" data-testid="projects-delivered">
                    <AnimatedNumber value={projectsDelivered} suffix="+" />
                  </p>
                  <p className="text-xs text-white/40 mt-1">3x productivity boost</p>
                </div>
              </div>

              {/* CTA */}
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="w-full bg-[#c4ff4d] hover:bg-[#b5ef3d] text-[#1a2e29] font-bold rounded-full py-6 text-base shadow-lg shadow-[#c4ff4d]/20 hover:shadow-[#c4ff4d]/30 transition-all"
                  data-testid="button-get-analysis"
                >
                  Get Your Free Growth Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <p className="text-center text-xs text-white/40">
                Results based on average client performance. Individual results may vary.
              </p>
            </div>
          </div>
        </div>

        {/* OARC Differentiators - Bottom */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Zap, label: "48h Turnaround", desc: "Most projects" },
              { icon: Users, label: "AI + Human", desc: "Best of both" },
              { icon: TrendingUp, label: "30% ROI", desc: "Guaranteed" },
              { icon: Sparkles, label: "Unlimited Revisions", desc: "Until perfect" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#c4ff4d]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-[#c4ff4d]" />
                </div>
                <p className="text-sm md:text-base font-semibold text-white">{item.label}</p>
                <p className="text-xs text-white/50 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
