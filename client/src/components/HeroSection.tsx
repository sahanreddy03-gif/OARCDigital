import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Palette, Bot, Rocket } from "lucide-react";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';

const MobileGlassCard = ({ icon: Icon, label, href }: { icon: typeof Palette; label: string; href: string }) => (
  <Link href={href}>
    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
      <Icon className="w-3.5 h-3.5 text-white" />
      <span className="text-[11px] font-semibold text-white/90">{label}</span>
    </div>
  </Link>
);

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
        
        {/* ========== MOBILE LAYOUT ========== */}
        <div className="md:hidden absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroBackground})`,
              backgroundPosition: '60% center'
            }}
          />
          {/* AI Grid Overlay with pulse */}
          <div 
            className="absolute inset-0 animate-[gridPulse_8s_ease-in-out_infinite]" 
            style={{
              backgroundImage: 'linear-gradient(rgba(196, 255, 77, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 255, 77, 0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} 
          />
          {/* Horizontal data streams */}
          <div 
            className="absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/50 to-transparent animate-[scanHorizontal1_8s_linear_infinite]" 
            style={{ top: '25%', boxShadow: '0 0 8px rgba(196, 255, 77, 0.4)' }} 
          />
          <div 
            className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/40 to-transparent animate-[scanHorizontal2_10s_linear_infinite]" 
            style={{ top: '45%', boxShadow: '0 0 6px rgba(196, 255, 77, 0.3)', animationDelay: '3s' }} 
          />
          <div 
            className="absolute w-[180px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/35 to-transparent animate-[scanHorizontal1_12s_linear_infinite]" 
            style={{ top: '65%', boxShadow: '0 0 7px rgba(196, 255, 77, 0.3)', animationDelay: '5s' }} 
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-zinc-950/60 via-50% to-zinc-950/85 to-95%" />
        </div>

        {/* ========== DESKTOP LAYOUT ========== */}
        {/* Background with parallax */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: '35% center',
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* AI Grid Overlay with pulse */}
        <div 
          className="hidden md:block absolute inset-0 animate-[gridPulse_10s_ease-in-out_infinite]" 
          style={{
            backgroundImage: 'linear-gradient(rgba(196, 255, 77, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 255, 77, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
        {/* Floating green particles */}
        <div 
          className="hidden md:block absolute w-1.5 h-1.5 rounded-full bg-[#c4ff4d] animate-[particleFloat_8s_ease-in-out_infinite]" 
          style={{ top: '20%', left: '15%', boxShadow: '0 0 20px #c4ff4d' }} 
        />
        <div 
          className="hidden md:block absolute w-1 h-1 rounded-full bg-[#c4ff4d] animate-[particleFloat_10s_ease-in-out_infinite]" 
          style={{ top: '60%', left: '25%', boxShadow: '0 0 15px #c4ff4d', animationDelay: '2s' }} 
        />
        <div 
          className="hidden md:block absolute w-1.5 h-1.5 rounded-full bg-[#c4ff4d] animate-[particleFloat_9s_ease-in-out_infinite]" 
          style={{ top: '40%', left: '35%', boxShadow: '0 0 18px #c4ff4d', animationDelay: '4s' }} 
        />
        <div 
          className="hidden md:block absolute w-1 h-1 rounded-full bg-[#c4ff4d] animate-[particleFloat_11s_ease-in-out_infinite]" 
          style={{ top: '30%', left: '45%', boxShadow: '0 0 16px #c4ff4d', animationDelay: '6s' }} 
        />
        {/* Horizontal data streams - Desktop */}
        <div 
          className="hidden md:block absolute w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/40 to-transparent animate-[scanHorizontal1_10s_linear_infinite]" 
          style={{ top: '28%', left: 0, boxShadow: '0 0 10px rgba(196, 255, 77, 0.4)' }} 
        />
        <div 
          className="hidden md:block absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/35 to-transparent animate-[scanHorizontal2_12s_linear_infinite]" 
          style={{ top: '48%', left: 0, boxShadow: '0 0 8px rgba(196, 255, 77, 0.3)', animationDelay: '4s' }} 
        />
        <div 
          className="hidden md:block absolute w-[280px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/30 to-transparent animate-[scanHorizontal1_14s_linear_infinite]" 
          style={{ top: '68%', left: 0, boxShadow: '0 0 9px rgba(196, 255, 77, 0.3)', animationDelay: '7s' }} 
        />
        <div 
          className="hidden md:block absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#c4ff4d]/25 to-transparent animate-[scanHorizontal2_16s_linear_infinite]" 
          style={{ top: '82%', left: 0, boxShadow: '0 0 7px rgba(196, 255, 77, 0.2)', animationDelay: '10s' }} 
        />
        {/* Light Sweep Effect */}
        <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-1/3 h-[200%] -top-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[lightSweep_15s_ease-in-out_infinite]" 
            style={{ animationDelay: '2s' }} 
          />
        </div>
        {/* Desktop gradient overlays */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60" />
        
        {/* ========== CONTENT ========== */}
        <div className="relative flex-1 flex flex-col justify-end pt-14 md:pt-16 lg:pt-20 pb-6">
          <div className="w-full">
            {/* Mobile: centered with px-3, Desktop: left-aligned with minimal left padding */}
            <div className="w-full px-3 md:pl-8 lg:pl-12 md:pr-0">
              <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-center md:text-left">
                {/* Mobile glassmorphism panel */}
                <div className="relative md:before:content-none before:absolute before:inset-0 before:-z-10 before:bg-black/50 before:blur-xl before:rounded-[32px] before:-m-4">
                  
                  {/* Kicker - Very light green, bigger on desktop */}
                  <div className="mb-3 md:mb-6 lg:mb-8">
                    <span 
                      className="uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium leading-none text-[10px] md:text-[clamp(0.7rem,1.2vw,1.1rem)]" 
                      style={{ 
                        color: 'rgba(196, 255, 77, 0.7)',
                        textShadow: '0 0 20px rgba(196, 255, 77, 0.25)' 
                      }}
                    >
                      WHERE CREATIVITY MEETS REVENUE
                    </span>
                  </div>

                  {/* Headline - Viewport-based on mobile for all screen sizes, bigger on desktop */}
                  {/* lg: breakpoint uses slightly smaller max to keep "Revenue" on same line as "Drives" */}
                  <h1 
                    className="mb-3 md:mb-6 lg:mb-8 text-white animate-[fadeSlideUp_0.8s_ease-out]" 
                    data-testid="text-hero-headline"
                  >
                    {/* Mobile: 8.5vw scales from ~27px on iPhone SE to ~36px on iPhone 16 Pro Max */}
                    <span 
                      className="block font-bold tracking-tight leading-[1.05] text-[8.5vw] md:text-[clamp(2.5rem,5.5vw,4.5rem)] lg:text-[clamp(2.5rem,4.8vw,4rem)]"
                    >
                      AI-Native Marketing,
                    </span>
                    <span 
                      className="block font-extralight italic font-serif tracking-tight leading-[1.05] mt-0.5 md:mt-2 text-[8.5vw] md:text-[clamp(2.5rem,5.5vw,4.5rem)] lg:text-[clamp(2.5rem,4.8vw,4rem)]"
                    >
                      Agency That Drives <span className="text-[#ff914d] font-semibold not-italic">Revenue</span>
                    </span>
                  </h1>

                  {/* Subtitle - Smaller on mobile to fit one line */}
                  <p 
                    className="text-white/95 max-w-none md:max-w-2xl mx-auto md:mx-0 leading-snug mb-1.5 md:mb-3 font-light tracking-normal text-[3.2vw] md:text-[clamp(1rem,1.8vw,1.5rem)]"
                  >
                    Certified AI talent + Tailored Workflows + Measurable Growth =
                  </p>
                  <p 
                    className="text-white max-w-none md:max-w-2xl mx-auto md:mx-0 leading-tight mb-1 md:mb-2 font-black tracking-wide text-[4.8vw] md:text-[clamp(1.25rem,2.2vw,1.75rem)]"
                  >
                    Less Cost. More Reach. More Sales.
                  </p>
                  <p 
                    className="max-w-none md:max-w-2xl mx-auto md:mx-0 leading-tight mb-4 md:mb-6 lg:mb-8 font-semibold tracking-[0.08em] uppercase text-[3.8vw] md:text-[clamp(0.95rem,1.6vw,1.3rem)]"
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.95)',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    That's The OARC Advantage.
                  </p>

                  {/* CTA Section - Button + Glass Cards on Mobile */}
                  <div className="flex flex-col items-center md:items-start gap-4">
                    {/* Mobile: Button + Glass Cards in row */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <Link href="/contact">
                        <Button 
                          size="lg" 
                          className="rounded-full px-8 md:px-12 lg:px-14 py-5 md:py-5 lg:py-6 h-auto font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-2xl hover:shadow-2xl transition-all border-0 hover:scale-105 text-[15px] md:text-[clamp(0.95rem,1.4vw,1.35rem)]"
                          data-testid="button-start-talking"
                        >
                          Start Talking
                        </Button>
                      </Link>
                      
                      {/* Glass Cards - All screen sizes */}
                      <div className="flex gap-2">
                        <MobileGlassCard icon={Palette} label="Creative" href="/services" />
                        <MobileGlassCard icon={Bot} label="AI" href="/services" />
                        <MobileGlassCard icon={Rocket} label="Growth" href="/services" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel with green wave */}
          <div className="w-full mt-8 md:mt-5 relative">
            <FloatingChipCarousel />
            {/* Green curved wave below carousel */}
            <div className="absolute -bottom-8 md:-bottom-12 left-0 right-0 pointer-events-none">
              <svg 
                viewBox="0 0 1440 120" 
                className="w-full h-auto"
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" 
                  fill="#c4ff4d"
                  opacity="0.4"
                />
                <path 
                  d="M0,80 C320,40 640,100 960,60 C1200,30 1360,70 1440,50 L1440,120 L0,120 Z" 
                  fill="#c4ff4d"
                  opacity="0.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
