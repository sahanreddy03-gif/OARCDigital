import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';
import companyLogo from "@assets/final 2_1762907995368.png";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add CSS animations
  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      50% { transform: translateY(-60px) translateX(30px); opacity: 0.8; }
    }
    @keyframes lightSweep {
      0% { transform: translateX(-100%) rotate(-15deg); }
      100% { transform: translateX(200%) rotate(-15deg); }
    }
    @keyframes scanHorizontal1 {
      0% { transform: translateX(-100%); opacity: 0; }
      10% { opacity: 0.4; }
      90% { opacity: 0.4; }
      100% { transform: translateX(100vw); opacity: 0; }
    }
    @keyframes scanHorizontal2 {
      0% { transform: translateX(-100%); opacity: 0; }
      10% { opacity: 0.3; }
      90% { opacity: 0.3; }
      100% { transform: translateX(100vw); opacity: 0; }
    }
    @keyframes gridPulse {
      0%, 100% { opacity: 0.06; }
      50% { opacity: 0.12; }
    }
    @keyframes particleFloat {
      0%, 100% { transform: translate(0, 0); opacity: 0.4; }
      33% { transform: translate(20px, -30px); opacity: 0.8; }
      66% { transform: translate(-15px, -50px); opacity: 0.6; }
    }
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      @keyframes fadeSlideUp {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    }
  `;
  
  return (
    <>
      <style>{styles}</style>
      <section className="relative h-screen flex flex-col overflow-hidden bg-black">
      {/* Mobile Layout - Clean bottom-aligned layout */}
      <div className="md:hidden absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: '60% center'
          }}
        />
        {/* AI Grid Overlay - Mobile with pulse */}
        <div className="absolute inset-0 animate-[gridPulse_8s_ease-in-out_infinite]" 
             style={{
               backgroundImage: 'linear-gradient(rgba(196, 255, 77, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 255, 77, 0.3) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} 
        />
        {/* Horizontal data streams - Mobile */}
        <div className="absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/50 to-transparent animate-[scanHorizontal1_8s_linear_infinite]" 
             style={{ top: '25%', boxShadow: '0 0 8px rgba(196, 255, 77, 0.4)' }} 
        />
        <div className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/40 to-transparent animate-[scanHorizontal2_10s_linear_infinite]" 
             style={{ top: '45%', boxShadow: '0 0 6px rgba(196, 255, 77, 0.3)', animationDelay: '3s' }} 
        />
        <div className="absolute w-[180px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/35 to-transparent animate-[scanHorizontal1_12s_linear_infinite]" 
             style={{ top: '65%', boxShadow: '0 0 7px rgba(196, 255, 77, 0.3)', animationDelay: '5s' }} 
        />
        {/* Lighter gradient to show more color */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-zinc-950/60 via-50% to-zinc-950/85 to-95%"></div>
      </div>

      {/* Desktop Layout - Horizontal with side fade - Shifted right to show more color */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: '35% center',
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      {/* AI Grid Overlay - Desktop with pulse */}
      <div className="hidden md:block absolute inset-0 animate-[gridPulse_10s_ease-in-out_infinite]" 
           style={{
             backgroundImage: 'linear-gradient(rgba(196, 255, 77, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 255, 77, 0.3) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }} 
      />
      {/* Floating light particles - Desktop with varied animation */}
      <div className="hidden md:block absolute w-1.5 h-1.5 rounded-full bg-[#c4ff4d] animate-[particleFloat_8s_ease-in-out_infinite]" 
           style={{ top: '20%', left: '15%', boxShadow: '0 0 20px #c4ff4d' }} 
      />
      <div className="hidden md:block absolute w-1 h-1 rounded-full bg-[#c4ff4d] animate-[particleFloat_10s_ease-in-out_infinite]" 
           style={{ top: '60%', left: '25%', boxShadow: '0 0 15px #c4ff4d', animationDelay: '2s' }} 
      />
      <div className="hidden md:block absolute w-1.5 h-1.5 rounded-full bg-[#c4ff4d] animate-[particleFloat_9s_ease-in-out_infinite]" 
           style={{ top: '40%', left: '35%', boxShadow: '0 0 18px #c4ff4d', animationDelay: '4s' }} 
      />
      <div className="hidden md:block absolute w-1 h-1 rounded-full bg-[#c4ff4d] animate-[particleFloat_11s_ease-in-out_infinite]" 
           style={{ top: '30%', left: '45%', boxShadow: '0 0 16px #c4ff4d', animationDelay: '6s' }} 
      />
      {/* Horizontal data streams - Desktop */}
      <div className="hidden md:block absolute w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/40 to-transparent animate-[scanHorizontal1_10s_linear_infinite]" 
           style={{ top: '28%', left: 0, boxShadow: '0 0 10px rgba(196, 255, 77, 0.4)' }} 
      />
      <div className="hidden md:block absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/35 to-transparent animate-[scanHorizontal2_12s_linear_infinite]" 
           style={{ top: '48%', left: 0, boxShadow: '0 0 8px rgba(196, 255, 77, 0.3)', animationDelay: '4s' }} 
      />
      <div className="hidden md:block absolute w-[280px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/30 to-transparent animate-[scanHorizontal1_14s_linear_infinite]" 
           style={{ top: '68%', left: 0, boxShadow: '0 0 9px rgba(196, 255, 77, 0.3)', animationDelay: '7s' }} 
      />
      <div className="hidden md:block absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/25 to-transparent animate-[scanHorizontal2_16s_linear_infinite]" 
           style={{ top: '82%', left: 0, boxShadow: '0 0 7px rgba(196, 255, 77, 0.2)', animationDelay: '10s' }} 
      />
      {/* Light Sweep Effect */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1/3 h-[200%] -top-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[lightSweep_15s_ease-in-out_infinite]" 
             style={{ animationDelay: '2s' }} 
        />
      </div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60"></div>
      
      {/* Mobile: Bottom-aligned flex column | Desktop: Also bottom-aligned with more space for carousel */}
      <div className="relative flex-1 flex flex-col justify-end pt-14 md:pt-32 lg:pt-36 pb-6 md:pb-8">
        {/* Content wrapper */}
        <div className="md:flex-1 md:flex md:items-end md:pb-8">
          <div className="max-w-7xl w-full mx-auto px-5 md:px-8 lg:px-16 xl:px-24">
            <div className="w-full md:max-w-2xl lg:max-w-3xl text-center md:text-left">
              {/* Elite glassmorphism panel behind content - lighter on desktop */}
              <div className="relative md:before:content-none before:absolute before:inset-0 before:-z-10 before:bg-black/50 before:blur-xl before:rounded-[32px] before:-m-4 md:before:m-0 md:backdrop-blur-sm md:bg-black/30 md:rounded-[48px] md:p-10 lg:p-12 md:border md:border-white/10 md:shadow-2xl">
                {/* OARC Digital Logo Symbol Only */}
                <div className="flex justify-center md:justify-start mb-4 md:mb-4">
                  <img 
                    src={companyLogo} 
                    alt="OARC Digital" 
                    className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
                    data-testid="img-hero-logo"
                  />
                </div>
                
                <div className="mb-4 md:mb-5">
                  <span className="text-[10px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.25em] font-light text-white/90 leading-none" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
                    WHERE CREATIVITY MEETS REVENUE
                  </span>
                </div>

                <h1 className="mb-5 md:mb-6 text-white animate-[fadeSlideUp_0.8s_ease-out]" style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}>
                  <span className="block font-bold tracking-tight leading-[0.95] md:leading-[0.9]">
                    AI-Powered Marketing,
                  </span>
                  <span className="block font-extralight italic font-serif tracking-tight leading-[0.95] md:leading-[0.9] mt-2 md:mt-1">
                    Agency That Drives Revenue
                  </span>
                </h1>

                <p className="text-[15px] md:text-sm lg:text-base text-white/95 max-w-xl mx-auto md:mx-0 leading-relaxed mb-6 md:mb-5 font-light tracking-wide">
                  Certified AI talent + Tailored Workflows + Measurable Growth = Less Cost. More Reach. More Sales
                </p>

                <div className="flex flex-col items-center md:items-start gap-4 md:gap-2">
                  <Button 
                    size="lg" 
                    className="rounded-full text-[15px] md:text-sm px-10 md:px-8 py-6 md:py-5 h-auto font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-2xl hover:shadow-2xl transition-all border-0 hover-elevate"
                    data-testid="button-start-talking"
                  >
                    Start Talking
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel - always visible at bottom */}
        <div className="w-full mt-8 md:mt-6">
          <FloatingChipCarousel />
        </div>
      </div>
    </section>
    </>
  );
}
