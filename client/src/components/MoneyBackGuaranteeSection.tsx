import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function MoneyBackGuaranteeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#f0fff4" }}
      data-testid="section-money-back-guarantee"
    >
      {/* Subtle gradient accents */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 30% 0%, rgba(196, 255, 77, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 100%, rgba(249, 115, 22, 0.06) 0%, transparent 50%)
          `
        }}
      />
      
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        <div className="flex flex-col items-center text-center">
          {/* Shield Icon with glow */}
          <div 
            className={`relative mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div 
              className="absolute inset-0 blur-3xl transition-all duration-500"
              style={{ 
                backgroundColor: "#c4ff4d",
                opacity: isHovered ? 0.5 : 0.3,
                transform: isHovered ? "scale(2)" : "scale(1.5)"
              }}
            />
            <div 
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center transition-all duration-500 cursor-pointer"
              style={{ 
                background: "linear-gradient(135deg, #c4ff4d 0%, #a8e834 100%)",
                boxShadow: isHovered 
                  ? "0 30px 60px -15px rgba(196, 255, 77, 0.5)" 
                  : "0 20px 40px -15px rgba(196, 255, 77, 0.35)",
                transform: isHovered ? "rotate(-6deg) scale(1.1)" : "rotate(0) scale(1)"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Shield className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#0a0a0a" }} strokeWidth={1.5} />
            </div>
          </div>

          {/* Heading with animated underline */}
          <h2 
            className={`font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              letterSpacing: '-0.03em', 
              lineHeight: 1.1,
              color: "#0a0a0a",
              transitionDelay: "300ms"
            }}
            data-testid="heading-guarantee"
          >
            <span>Get </span>
            <span 
              className="relative inline-block"
              style={{ 
                background: "linear-gradient(135deg, #7cb518 0%, #5a9a00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              30% ROI
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                height="12" 
                viewBox="0 0 200 12" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0 8 Q50 0, 100 6 T200 4" 
                  fill="none" 
                  stroke="#c4ff4d" 
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ 
                    strokeDasharray: 250,
                    strokeDashoffset: isVisible ? 0 : 250,
                    transition: 'stroke-dashoffset 1s ease-out 0.8s'
                  }}
                />
              </svg>
            </span>
            <span> in 90 Days</span>
            <br />
            <span className="text-[0.65em] font-medium" style={{ color: "rgba(0, 0, 0, 0.5)" }}>or Your Money Back</span>
          </h2>

          <p 
            className={`max-w-xl mb-10 text-base md:text-lg leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ 
              color: "rgba(0, 0, 0, 0.55)",
              transitionDelay: "400ms"
            }}
            data-testid="text-guarantee-description"
          >
            We guarantee measurable results. If you don't see at least 30% improvement in your marketing ROI within 90 days, we'll refund your investment.
          </p>

          {/* Guarantee Points Grid */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: "500ms" }}
          >
            {guaranteePoints.map((point, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-500 cursor-default"
                style={{ 
                  backgroundColor: "#fafafa",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  boxShadow: "0 2px 10px -5px rgba(0, 0, 0, 0.05)"
                }}
                data-testid={`guarantee-point-${index}`}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
                  style={{ backgroundColor: "rgba(196, 255, 77, 0.2)" }}
                >
                  <CheckCircle2 className="w-4 h-4" style={{ color: "#6b9b12" }} />
                </div>
                <span 
                  className="text-sm font-medium transition-colors duration-300"
                  style={{ color: "rgba(0, 0, 0, 0.7)" }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white font-bold rounded-full px-10 py-7 text-base shadow-xl shadow-black/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                data-testid="button-schedule-guarantee"
              >
                <Sparkles className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" style={{ color: "#c4ff4d" }} />
                Schedule a Call
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <p 
            className={`mt-6 text-xs transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              color: "rgba(0, 0, 0, 0.35)",
              transitionDelay: "700ms"
            }}
          >
            Terms apply. Guarantee valid for new clients with minimum 3-month engagement.
          </p>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="section-money-back-guarantee"] * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
