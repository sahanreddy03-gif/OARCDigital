"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Palette, Bot, Rocket } from "lucide-react";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';

const HERO_PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAANACgDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERAgMSIv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/EABcRAQEBAQAAAAAAAAAAAAAAAAARAQL/2gAMAwEAAhEDEQA/AOUODgIwlnPNZsz85MnNwu9uB2nnUQ7ugLToEq//2Q==';

function useImagePreload(src: string) {
  // Check if image is already cached IMMEDIATELY (synchronously)
  const checkCached = () => {
    if (typeof window === 'undefined') return false;
    const img = new Image();
    img.src = src;
    return img.complete && img.naturalWidth > 0;
  };
  
  const [loaded, setLoaded] = useState(() => checkCached());
  
  useEffect(() => {
    if (loaded) return; // Already loaded, skip
    const img = new Image();
    img.src = src;
    if (img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    } else {
      img.onload = () => setLoaded(true);
    }
  }, [src, loaded]);
  
  return loaded;
}

function SnowfallEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Snowflake {
      x: number;
      y: number;
      radius: number;
      speed: number;
      baseOpacity: number;
      wobbleOffset: number;
      wobbleSpeed: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      layer: number;
    }

    const snowflakes: Snowflake[] = [];
    const snowflakeCount = 80;

    for (let i = 0; i < snowflakeCount; i++) {
      const layer = Math.random();
      const isFar = layer < 0.4;
      const isMid = layer >= 0.4 && layer < 0.75;
      
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: isFar ? Math.random() * 1 + 0.5 : isMid ? Math.random() * 1.5 + 1 : Math.random() * 2 + 1.5,
        speed: isFar ? Math.random() * 0.4 + 0.2 : isMid ? Math.random() * 0.6 + 0.4 : Math.random() * 0.8 + 0.6,
        baseOpacity: isFar ? Math.random() * 0.2 + 0.3 : isMid ? Math.random() * 0.25 + 0.5 : Math.random() * 0.2 + 0.7,
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        twinkleSpeed: Math.random() * 0.03 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        layer: layer,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        
        const wobble = Math.sin(time * flake.wobbleSpeed + flake.wobbleOffset) * 0.4;
        let displayX = flake.x + wobble;
        
        displayX = Math.max(0, Math.min(canvas.width, displayX));
        
        const twinkle = Math.sin(time * flake.twinkleSpeed + flake.twinkleOffset) * 0.12 + 1;
        const currentOpacity = Math.min(flake.baseOpacity * twinkle, 1);

        if (flake.y > canvas.height + 10) {
          flake.y = -10 - Math.random() * 20;
          flake.x = Math.random() * canvas.width;
          flake.wobbleOffset = Math.random() * Math.PI * 2;
          flake.twinkleOffset = Math.random() * Math.PI * 2;
        }

        ctx.beginPath();
        ctx.arc(displayX, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();

        const glowSize = flake.radius * 2.5;
        const gradient = ctx.createRadialGradient(displayX, flake.y, 0, displayX, flake.y, glowSize);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.35})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${currentOpacity * 0.1})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.beginPath();
        ctx.arc(displayX, flake.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20 motion-reduce:hidden"
      style={{ opacity: 0.9 }}
    />
  );
}

const MobileGlassCard = ({ icon: Icon, label, href, testId }: { icon: typeof Palette; label: string; href: string; testId: string }) => (
  <Link href={href}>
    <div 
      className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10"
      data-testid={testId}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      <span className="text-sm md:text-base font-bold text-white tracking-wide">{label}</span>
    </div>
  </Link>
);

export default function HeroSection() {
  const imageLoaded = useImagePreload(heroBackground);
  
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
      0%, 100% { opacity: 0.25; }
      50% { opacity: 0.45; }
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
      <section className="relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden bg-black">
        
        {/* ========== MOBILE LAYOUT ========== */}
        <div className="md:hidden absolute inset-0">
          {/* Instant placeholder - blurred, loads immediately */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ 
              backgroundImage: `url(${HERO_PLACEHOLDER})`,
              backgroundPosition: '60% center',
              filter: 'blur(20px)',
              transform: 'scale(1.1)'
            }}
          />
          {/* Real background - fades in over placeholder */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-700"
            style={{ 
              backgroundImage: `url(${heroBackground})`,
              backgroundPosition: '60% center',
              opacity: imageLoaded ? 1 : 0
            }}
          />
          {/* Gradient overlay - always visible for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-zinc-950/60 via-50% to-zinc-950/85 to-95%" />
          
        </div>

        {/* ========== DESKTOP LAYOUT ========== */}
        {/* Desktop instant placeholder - blurred, loads immediately */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url(${HERO_PLACEHOLDER})`,
            backgroundPosition: '35% center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)'
          }}
        />
        {/* Desktop real background - fades in over placeholder */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat bg-fixed transition-opacity duration-700"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: '35% center',
            opacity: imageLoaded ? 1 : 0
          }}
        />
        {/* Desktop gradient overlays - always visible for text readability */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60" />
        
        {/* Desktop animations - always show immediately */}
        <>
          {/* Christmas Snowfall Effect */}
          <SnowfallEffect />
          {/* Light Sweep Effect */}
          <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute w-1/3 h-[200%] -top-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[lightSweep_15s_ease-in-out_infinite]" 
              style={{ animationDelay: '2s' }} 
            />
          </div>
        </>
        
        {/* ========== CONTENT ========== */}
        <div className="relative flex-1 flex flex-col justify-end pt-14 md:pt-16 lg:pt-20 pb-6 -mt-8 md:mt-0">
          <div className="w-full">
            {/* Mobile: centered with px-3, Desktop: left-aligned with minimal left padding */}
            <div className="w-full px-3 md:pl-8 lg:pl-12 md:pr-0">
              <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-center md:text-left">
                {/* Mobile glassmorphism panel */}
                <div className="relative md:before:content-none before:absolute before:inset-0 before:-z-10 before:bg-black/50 before:blur-xl before:rounded-[32px] before:-m-4">
                  
                  {/* Headline - Viewport-based on mobile for all screen sizes, bigger on desktop */}
                  {/* lg: breakpoint uses slightly smaller max to keep "Revenue" on same line as "Drives" */}
                  <h1 
                    className="mb-3 md:mb-6 lg:mb-8 text-white" 
                    data-testid="text-hero-headline"
                    data-speakable
                  >
                    {/* Mobile: 8.5vw scales from ~27px on iPhone SE to ~36px on iPhone 16 Pro Max */}
                    <span 
                      className="block tracking-tight leading-[1.05] text-[8.5vw] md:text-[clamp(2.5rem,5.5vw,4.5rem)] lg:text-[clamp(2.5rem,4.8vw,4rem)]"
                      style={{ fontFamily: 'var(--font-swarsh)' }}
                    >
                      AI-Native Marketing Agency
                    </span>
                    <span 
                      className="block font-extralight italic font-serif tracking-tight leading-[1.05] mt-0.5 md:mt-2 text-[8.5vw] md:text-[clamp(2.5rem,5.5vw,4.5rem)] lg:text-[clamp(2.5rem,4.8vw,4rem)] lg:ml-[12rem]"
                    >
                      That Drives <span className="text-[#e8ffb0] font-semibold not-italic">Revenue</span>
                    </span>
                  </h1>

                  {/* Subheading - emphasized with glass strip and underline */}
                  <div className="flex justify-center md:justify-start mb-4 md:mb-6">
                    <div 
                      className="relative inline-block px-2 py-1 md:px-4 md:py-2 rounded-lg"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <p 
                        className="text-white tracking-wide whitespace-nowrap text-[2.8vw] md:text-[clamp(0.9rem,1.5vw,1.25rem)] lg:text-[clamp(1rem,1.6vw,1.35rem)]"
                        style={{
                          fontFamily: 'var(--font-halfre)',
                          textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)'
                        }}
                        data-testid="text-hero-subheadline"
                      >
                        For Brands That Compete on Value, Not Price
                      </p>
                      {/* Subtle white underline */}
                      <div 
                        className="absolute bottom-1 md:bottom-2 left-3 md:left-6 right-3 md:right-6 h-[1px] md:h-[2px]"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Value proposition - readable with better contrast */}
                  <p 
                    className="max-w-none md:max-w-2xl mx-auto md:mx-0 leading-snug mb-2 md:mb-4 font-normal tracking-[0.08em] text-[2.8vw] md:text-[clamp(0.9rem,1.5vw,1.2rem)]"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    data-testid="text-value-proposition"
                  >
                    Creative AI Talent + Social-Led Marketing + Custom Workflows
                  </p>
                  {/* Result line - white only with typography variation */}
                  <p 
                    className="max-w-none md:max-w-2xl mx-auto md:mx-0 leading-tight mb-5 md:mb-7 lg:mb-9 text-[4.2vw] md:text-[clamp(1.2rem,2.2vw,1.8rem)]"
                    data-testid="text-result-line"
                  >
                    <span className="text-white/70 font-light">=</span>{' '}
                    <span className="text-white font-bold italic">Less Waste</span>
                    <span className="text-white/50 font-light"> + </span>
                    <span className="text-white font-semibold">More Reach</span>
                    <span className="text-white/50 font-light"> + </span>
                    <span className="text-white font-bold tracking-wide">More Sales</span>
                  </p>

                  {/* Premium Service Navigation Cards */}
                  <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                    <MobileGlassCard icon={Palette} label="Creative" href="/creative" testId="button-nav-creative" />
                    <MobileGlassCard icon={Bot} label="AI" href="/ai-agents" testId="button-nav-ai" />
                    <MobileGlassCard icon={Rocket} label="Growth" href="/solutions" testId="button-nav-growth" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel with green wave */}
          <div className="w-full mt-8 md:mt-5 relative">
            <FloatingChipCarousel />
            {/* Subtle green curved wave below carousel - barely visible */}
            <div className="absolute -bottom-8 md:-bottom-16 left-0 right-0 pointer-events-none">
              <svg 
                viewBox="0 0 1440 120" 
                className="w-full h-auto lg:scale-y-75"
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" 
                  fill="#c4ff4d"
                  opacity="0.08"
                />
                <path 
                  d="M0,80 C320,40 640,100 960,60 C1200,30 1360,70 1440,50 L1440,120 L0,120 Z" 
                  fill="#c4ff4d"
                  opacity="0.05"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
