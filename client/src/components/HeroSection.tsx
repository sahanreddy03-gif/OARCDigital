import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import GrainOverlay from "./GrainOverlay";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';
import companyLogo from "@assets/final 2_1762907995368.png";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX / window.innerWidth);
      setMouseY(e.clientY / window.innerHeight);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Layered Parallax Background System */}
      <div className="absolute inset-0">
        {/* Base Layer - Slowest */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          }}
        />
        
        {/* Gradient Wash Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-orange-500/10" />
        
        {/* Animated Grid - Medium Speed */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 156, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 156, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        
        {/* Floating Glow Orbs - Fast Parallax */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-green-500/20 blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mouseX * 50}px, ${mouseY * 50}px) translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-orange-500/20 blur-3xl"
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${-mouseX * 40}px, ${-mouseY * 40}px) translateY(${scrollY * 0.15}px)`,
          }}
        />
        
        {/* Grain Texture Overlay */}
        <GrainOverlay opacity={0.05} />
      </div>

      {/* Content Grid - Split Canvas */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content Panel */}
          <div className="space-y-8" data-testid="hero-content">
            {/* Logo + Eyebrow */}
            <div className="space-y-4">
              <img 
                src={companyLogo} 
                alt="OARC Digital" 
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
                data-testid="img-hero-logo"
              />
              <div className="inline-block px-4 py-2 glass rounded-full">
                <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                  Where Creativity Meets Revenue
                </span>
              </div>
            </div>

            {/* Hero Headline - Massive & Bold */}
            <h1 className="space-y-2">
              <span 
                className="block font-bold text-white leading-none"
                style={{ 
                  fontSize: 'clamp(2.5rem, 10vw, 5rem)',
                  letterSpacing: '-0.04em'
                }}
              >
                AI-Powered
              </span>
              <span 
                className="block font-bold text-glow-green leading-none"
                style={{ 
                  fontSize: 'clamp(2.5rem, 10vw, 5rem)',
                  letterSpacing: '-0.04em'
                }}
              >
                Marketing Agency
              </span>
              <span 
                className="block font-light italic text-white/90 leading-none"
                style={{ 
                  fontSize: 'clamp(1.5rem, 6vw, 3rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                That Drives Revenue
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-normal">
              Certified AI talent + Tailored Workflows + Measurable Growth = <span className="text-glow-green font-bold">Less Cost. More Reach. More Sales</span>
            </p>

            {/* Glass CTA Panels */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="group glass-strong glow-green-hover rounded-xl px-8 py-6 text-base font-bold bg-[#00FF9C] text-black border-2 border-[#00FF9C]/50 hover:bg-[#00FF9C] hover:scale-105 transition-all duration-300"
                data-testid="button-start-talking"
              >
                <span className="flex items-center gap-2">
                  Start Talking
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="glass rounded-xl px-8 py-6 text-base font-bold text-white border-white/30 hover:border-white/60 hover:bg-white/10 transition-all"
                data-testid="button-view-services"
              >
                View Services
              </Button>
            </div>

            {/* Trust Badges - Glass Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2" data-testid="badge-malta">
                <Sparkles className="w-4 h-4 text-[#00FF9C]" />
                <span className="text-sm font-bold text-white">Malta's #1 AI Agency</span>
              </div>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2" data-testid="badge-ai-employees">
                <Zap className="w-4 h-4 text-[#FF5A00]" />
                <span className="text-sm font-bold text-white">AI Employees Available</span>
              </div>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2" data-testid="badge-revenue">
                <TrendingUp className="w-4 h-4 text-[#00FF9C]" />
                <span className="text-sm font-bold text-white">Revenue-Focused</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Collage */}
          <div className="relative hidden md:block h-[600px]">
            {/* Floating Glass Card 1 */}
            <div 
              className="absolute top-0 right-0 glass-strong glow-green rounded-2xl p-6 w-64 magnetic"
              style={{
                transform: `translate(${mouseX * 20}px, ${mouseY * 20}px)`,
              }}
            >
              <div className="text-6xl font-bold text-glow-green mb-2">350%</div>
              <div className="text-white font-bold">Average ROI</div>
              <div className="text-white/60 text-sm mt-1">For our clients in 2024</div>
            </div>

            {/* Floating Glass Card 2 */}
            <div 
              className="absolute top-1/3 left-0 glass-strong glow-orange rounded-2xl p-6 w-72 magnetic"
              style={{
                transform: `translate(${-mouseX * 15}px, ${-mouseY * 15}px)`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#FF5A00]" />
                </div>
                <div>
                  <div className="text-white font-bold">AI Creative Studio</div>
                  <div className="text-white/60 text-sm">24/7 Content Production</div>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            </div>

            {/* Floating Glass Card 3 */}
            <div 
              className="absolute bottom-1/4 right-1/4 glass-strong glow-green rounded-2xl p-6 w-56 magnetic"
              style={{
                transform: `translate(${mouseX * 25}px, ${mouseY * 25}px)`,
              }}
            >
              <div className="text-4xl font-bold text-glow-green mb-2">47+</div>
              <div className="text-white font-bold">AI Employees</div>
              <div className="text-white/60 text-sm mt-1">Ready to deploy</div>
            </div>

            {/* Animated Background Orb */}
            <div 
              className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-green-500/10 to-orange-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="glass px-4 py-2 rounded-full animate-bounce">
          <div className="text-white text-xs font-bold uppercase tracking-wider">Scroll to Explore</div>
        </div>
      </div>
    </section>
  );
}
