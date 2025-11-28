import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
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
    "Dedicated account manager",
    "Full refund if targets aren't met",
    "No hidden fees"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
      data-testid="section-money-back-guarantee"
    >
      {/* Subtle lime glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c4ff4d]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c4ff4d]/20 to-transparent" />
      
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        
        <div className="flex flex-col items-center text-center">
          {/* Shield Icon */}
          <div 
            className={`relative mb-5 md:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          >
            <div className="absolute inset-0 bg-[#c4ff4d]/20 rounded-full blur-2xl" />
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#c4ff4d]/20 to-[#c4ff4d]/5 border border-[#c4ff4d]/30 flex items-center justify-center">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-[#c4ff4d]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Heading */}
          <h2 
            className={`font-bold mb-3 text-white transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', lineHeight: '1.15' }}
            data-testid="heading-guarantee"
          >
            <span className="text-[#c4ff4d]">30% ROI</span> in 90 Days
            <br />
            <span className="text-white/90">or Your Money Back</span>
          </h2>

          <p 
            className={`text-white/50 text-sm md:text-base max-w-lg mb-6 md:mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            data-testid="text-guarantee-description"
          >
            We guarantee measurable results. If you don't see at least 30% improvement in your marketing ROI within 90 days, we'll refund your investment.
          </p>

          {/* Guarantee Points - Compact Grid */}
          <div 
            className={`grid grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8 w-full max-w-lg transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {guaranteePoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                data-testid={`guarantee-point-${index}`}
              >
                <CheckCircle2 className="w-4 h-4 text-[#c4ff4d] flex-shrink-0" />
                <span className="text-xs text-white/70">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-[#c4ff4d] hover:bg-[#b5ef3d] text-[#0a0a0a] font-bold rounded-full px-6 py-5 text-sm shadow-lg shadow-[#c4ff4d]/20"
              data-testid="button-schedule-guarantee"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          <p className="mt-4 text-[10px] text-white/30 max-w-sm">
            Terms apply. Guarantee valid for new clients with minimum 3-month engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
