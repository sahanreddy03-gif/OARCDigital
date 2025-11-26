import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Percent, ArrowRight, Calculator, Sparkles } from "lucide-react";
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

export default function ROICalculatorSection() {
  const [marketingSpend, setMarketingSpend] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageOrderValue, setAverageOrderValue] = useState(150);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const improvementMultiplier = 1.4;
  const projectedConversionRate = conversionRate * improvementMultiplier;
  const currentMonthlyVisitors = (marketingSpend / 2);
  const currentOrders = currentMonthlyVisitors * (conversionRate / 100);
  const currentRevenue = currentOrders * averageOrderValue;
  const projectedOrders = currentMonthlyVisitors * (projectedConversionRate / 100);
  const projectedRevenue = projectedOrders * averageOrderValue;
  const additionalRevenue = projectedRevenue - currentRevenue;
  const roiPercentage = Math.round((additionalRevenue / marketingSpend) * 100);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden"
      data-testid="section-roi-calculator"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className={`container mx-auto px-6 md:px-8 lg:px-10 max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">ROI Calculator</span>
          </div>
          <h2 className="font-bold font-display mb-4 text-foreground" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
            Calculate Your <span className="text-emerald-400">Growth Potential</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how OARC Digital can transform your marketing ROI with AI-powered optimization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </span>
              Your Current Metrics
            </h3>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    Monthly Marketing Spend
                  </label>
                  <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full" data-testid="value-marketing-spend">
                    ${marketingSpend.toLocaleString()}
                  </span>
                </div>
                <Slider
                  value={[marketingSpend]}
                  onValueChange={(value) => setMarketingSpend(value[0])}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="[&_[role=slider]]:bg-emerald-400 [&_[role=slider]]:border-emerald-500 [&_.bg-primary]:bg-emerald-400"
                  data-testid="slider-marketing-spend"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$1K</span>
                  <span>$100K</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4 text-muted-foreground" />
                    Current Conversion Rate
                  </label>
                  <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full" data-testid="value-conversion-rate">
                    {conversionRate}%
                  </span>
                </div>
                <Slider
                  value={[conversionRate]}
                  onValueChange={(value) => setConversionRate(value[0])}
                  min={0.5}
                  max={10}
                  step={0.5}
                  className="[&_[role=slider]]:bg-emerald-400 [&_[role=slider]]:border-emerald-500 [&_.bg-primary]:bg-emerald-400"
                  data-testid="slider-conversion-rate"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0.5%</span>
                  <span>10%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    Average Order Value
                  </label>
                  <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full" data-testid="value-order-value">
                    ${averageOrderValue}
                  </span>
                </div>
                <Slider
                  value={[averageOrderValue]}
                  onValueChange={(value) => setAverageOrderValue(value[0])}
                  min={25}
                  max={500}
                  step={25}
                  className="[&_[role=slider]]:bg-emerald-400 [&_[role=slider]]:border-emerald-500 [&_.bg-primary]:bg-emerald-400"
                  data-testid="slider-order-value"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$25</span>
                  <span>$500</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 md:p-8 bg-gradient-to-br from-emerald-950/50 via-emerald-900/30 to-background border-emerald-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/30 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-300" />
                </span>
                With OARC Digital
              </h3>

              <div className="space-y-6 relative">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <p className="text-sm text-emerald-200/70">Projected Conversion Rate</p>
                    <p className="text-xs text-emerald-400/60 mt-1">+40% improvement</p>
                  </div>
                  <div className="text-3xl font-bold text-white" data-testid="projected-conversion-rate">
                    <AnimatedNumber value={projectedConversionRate * 10} suffix="%" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <p className="text-sm text-emerald-200/70">Additional Monthly Revenue</p>
                    <p className="text-xs text-emerald-400/60 mt-1">From optimized campaigns</p>
                  </div>
                  <div className="text-3xl font-bold text-emerald-300" data-testid="additional-revenue">
                    <AnimatedNumber value={Math.round(additionalRevenue)} prefix="$" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                  <div>
                    <p className="text-sm text-emerald-100">Projected ROI</p>
                    <p className="text-xs text-emerald-300/70 mt-1">Return on marketing spend</p>
                  </div>
                  <div className="text-4xl font-bold text-emerald-300" data-testid="projected-roi">
                    <AnimatedNumber value={roiPercentage} suffix="%" />
                  </div>
                </div>
              </div>
            </Card>

            <Link href="/contact">
              <Button 
                size="lg" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600 rounded-full font-semibold text-base py-6"
                data-testid="button-get-analysis"
              >
                Get Your Free Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <p className="text-center text-xs text-muted-foreground">
              Results based on average client performance improvements. Individual results may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
