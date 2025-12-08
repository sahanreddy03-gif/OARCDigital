import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue } from "framer-motion";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';
import { Palette, Bot, Code } from 'lucide-react';

function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      x.set(normalizedX);
      y.set(normalizedY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);
  
  return { x, y };
}

const SnowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const flakes = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: 0.3 + Math.random() * 0.8,
      vx: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.2
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "white";
      flakes.forEach(f => {
        f.y += f.vy;
        f.x += f.vx;
        if (f.y > h) { f.y = -10; f.x = Math.random() * w; }
        if (f.x < 0) f.x = w;
        if (f.x > w) f.x = 0;

        ctx.globalAlpha = f.opacity;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />;
};

const GlassServiceButton = ({ 
  icon: Icon, 
  label, 
  href,
  testId
}: { 
  icon: typeof Palette; 
  label: string; 
  href: string;
  testId: string;
}) => (
  <Link href={href}>
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      data-testid={testId}
    >
      <div className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <span className="text-white/90 text-sm font-semibold group-hover:text-white transition-colors">
          {label}
        </span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c4ff4d]/0 via-[#c4ff4d]/5 to-[#c4ff4d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  </Link>
);

export default function HeroSection() {
  const { x, y } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-10, 10]);

  return (
    <section className="relative min-h-[100svh] bg-black overflow-hidden flex flex-col selection:bg-[#c4ff4d] selection:text-black">

      {/* Background image - Bright and visible */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          x: moveBackground,
          y: useTransform(y, [-1, 1], [-10, 10]),
        }}
      />

      {/* Snow particles */}
      <SnowCanvas />

      {/* Strong dark gradient overlay on left for text readability */}
      <div 
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 60%, transparent 80%)'
        }}
      />
      {/* Bottom vignette for depth */}
      <div 
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)'
        }}
      />

      {/* Main content - Centered vertically, flush left on desktop */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="w-full pl-3 pr-4 sm:pl-6 sm:pr-8 lg:pl-6 xl:pl-8 pt-4 sm:pt-16 md:pt-20 lg:pt-24 pb-0 sm:pb-6">
          
          {/* Left aligned content - Flush to edge on desktop */}
          <div className="w-full sm:max-w-4xl lg:max-w-5xl">
            
            {/* WHERE CREATIVITY MEETS REVENUE */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-white/90 tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-2 sm:mb-5 font-medium"
              style={{ 
                fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
                textShadow: '0 2px 10px rgba(0,0,0,0.9)' 
              }}
            >
              Where <span className="text-[#c4ff4d]">Creativity</span> Meets Revenue
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-bold text-white mb-3 sm:mb-6"
              style={{ 
                fontSize: 'clamp(1.8rem, 6vw, 4.25rem)',
                lineHeight: '1.08',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)'
              }}
            >
              <span className="block whitespace-nowrap">AI-Native Marketing</span>
              <span className="block font-serif italic font-semibold whitespace-nowrap">
                Agency that drives <span className="text-[#ff914d]">Revenue</span>
              </span>
            </motion.h1>

            {/* Taglines with Color Accents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-3 sm:mb-6 space-y-1"
            >
              <p 
                className="font-semibold text-white/90"
                style={{ 
                  fontSize: 'clamp(1.05rem, 3.2vw, 1.65rem)',
                  lineHeight: '1.35',
                  textShadow: '0 2px 12px rgba(0,0,0,0.9)'
                }}
              >
                Build the <span className="text-[#c4ff4d]">Brand</span> You've Always Imagined.
              </p>
              <p 
                className="font-medium text-white/70 italic"
                style={{ 
                  fontSize: 'clamp(1.05rem, 3.2vw, 1.65rem)',
                  lineHeight: '1.35',
                  textShadow: '0 2px 12px rgba(0,0,0,0.9)'
                }}
              >
                With the <span className="text-[#ff914d] not-italic font-semibold">Growth</span> You Actually Need.
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/75 max-w-2xl font-medium mb-4 sm:mb-8"
              style={{ 
                fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
                lineHeight: '1.45',
                textShadow: '0 2px 8px rgba(0,0,0,0.9)'
              }}
            >
              Certified AI talent + Tailored Workflows + Measurable Growth = <span className="text-white font-bold">Less Cost. More Reach. More Sales.</span>
            </motion.p>

            {/* CTA Section with Glass Service Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              {/* Start Talking Button */}
              <Link href="/contact">
                <Button 
                  className="h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-[#c4ff4d] text-black font-bold text-base sm:text-lg hover:bg-[#d4ff6d] hover:scale-105 transition-all shadow-xl"
                  data-testid="button-start-talking"
                >
                  Start Talking
                </Button>
              </Link>

              {/* Glass 3D Service Buttons - Hidden on mobile */}
              <div className="hidden sm:flex flex-wrap gap-3">
                <GlassServiceButton 
                  icon={Palette} 
                  label="Creative Services" 
                  href="/services/social-media-creative-management"
                  testId="button-creative-services"
                />
                <GlassServiceButton 
                  icon={Bot} 
                  label="AI Consulting" 
                  href="/services/ai-consulting"
                  testId="button-ai-consulting"
                />
                <GlassServiceButton 
                  icon={Code} 
                  label="Custom AI Softwares" 
                  href="/services/custom-software-development"
                  testId="button-custom-ai-softwares"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Floating Chip Carousel - Tight to content on mobile */}
      <div className="relative z-20 w-full -mt-32 sm:-mt-8 pb-1 sm:pb-3">
        <FloatingChipCarousel />
      </div>

      {/* Curved green wave */}
      <div className="relative z-10 w-full -mt-10 sm:-mt-10 md:-mt-12">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" 
            fill="#9acc3d"
          />
        </svg>
      </div>

    </section>
  );
}
