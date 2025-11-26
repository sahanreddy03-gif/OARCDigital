import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function MoneyBackGuaranteeSection() {
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

  const guaranteePoints = [
    "Minimum 30% ROI improvement within 90 days",
    "Dedicated account manager and weekly reports",
    "Full refund if targets aren't met",
    "No hidden fees or long-term contracts"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0A1A12] via-[#081410] to-[#050D09] overflow-hidden"
      data-testid="section-money-back-guarantee"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className={`container mx-auto px-6 md:px-8 lg:px-10 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="flex flex-col items-center text-center">
          <div 
            className={`relative mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          >
            <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 border-2 border-emerald-400/40 flex items-center justify-center">
              <Shield className="w-12 h-12 md:w-14 md:h-14 text-emerald-300" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Sparkles className="w-4 h-4 text-emerald-900" />
            </div>
          </div>

          <h2 
            className={`font-bold font-display mb-4 text-white transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: '1.1' }}
            data-testid="heading-guarantee"
          >
            <span className="text-emerald-300">30% ROI</span> in 90 Days
            <br />
            <span className="text-white/90">or Your Money Back</span>
          </h2>

          <p 
            className={`text-white/60 text-base md:text-lg max-w-2xl mb-10 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            data-testid="text-guarantee-description"
          >
            We're so confident in our AI-powered approach that we guarantee measurable results. 
            If you don't see at least 30% improvement in your marketing ROI within 90 days, 
            we'll refund your investment—no questions asked.
          </p>

          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 max-w-2xl w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {guaranteePoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-left"
                data-testid={`guarantee-point-${index}`}
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-white/80">{point}</span>
              </div>
            ))}
          </div>

          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600 rounded-full font-semibold text-base px-8 py-6 shadow-lg shadow-emerald-500/25"
              data-testid="button-schedule-guarantee"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <p className="mt-6 text-xs text-white/40 max-w-md">
            Terms apply. Guarantee valid for new clients with minimum 3-month engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
