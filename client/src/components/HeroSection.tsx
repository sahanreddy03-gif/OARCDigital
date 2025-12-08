import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue } from "framer-motion";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';
import oarcLogo from "@assets/IMG_8813_(1)_1764796694787.png";
import { Palette, Bot, Rocket } from 'lucide-react';

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

const AIGridCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let animationId: number;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: Math.random() * 0.5 + 0.5,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2
    }));

    const flowLines = Array.from({ length: 5 }, (_, i) => ({
      y: (h / 5) * i + 100,
      offset: Math.random() * 100,
      speed: 0.5 + Math.random() * 1,
      opacity: 0.1
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // Grid
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Flow Lines
      flowLines.forEach(line => {
        line.offset += line.speed;
        if (line.offset > w + 200) line.offset = -200;
        const g = ctx.createLinearGradient(line.offset - 100, 0, line.offset + 200, 0);
        g.addColorStop(0, 'rgba(0, 217, 255, 0)');
        g.addColorStop(0.5, `rgba(0, 217, 255, ${line.opacity})`);
        g.addColorStop(1, 'rgba(0, 217, 255, 0)');
        ctx.strokeStyle = g;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(line.offset - 100, line.y);
        ctx.lineTo(line.offset + 200, line.y);
        ctx.stroke();
      });

      // Particles
      particles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        if (p.y > h) {
          p.y = -10;
          p.x = Math.random() * w;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none opacity-40 mix-blend-screen" />;
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
  testId?: string;
}) => (
  <Link href={href}>
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all group"
      data-testid={testId}
    >
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
        <Icon className="w-4 h-4 text-white group-hover:text-[#0A0E27] transition-colors" />
      </div>
      <span className="text-sm font-bold text-white/80 group-hover:text-white">{label}</span>
    </motion.button>
  </Link>
);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-10, 10]);
  const moveContent = useTransform(x, [-1, 1], [-5, 5]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#0A0E27] selection:bg-cyan-400 selection:text-[#0A0E27]"
    >
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        {/* Base Image */}
        <motion.img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60 grayscale-[20%] contrast-125 transition-transform duration-700 ease-out"
          style={{
            x: moveBackground,
            y: useTransform(y, [-1, 1], [-20, 20]),
            scale: 1.05
          }}
        />
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-[#0A0E27] opacity-60 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0E27]/40 to-[#0A0E27] pointer-events-none" />
      </div>

      {/* 2. CANVAS EFFECTS (AI Grid + Particles) */}
      <AIGridCanvas />

      {/* ========== MOBILE LAYOUT (Center Aligned) ========== */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-5 pt-20 pb-6 lg:hidden">
        
        {/* OARC Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 }}
          className="mb-5"
        >
          <img 
            src={oarcLogo} 
            alt="OARC Digital" 
            className="w-[60px] h-[60px] object-contain"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))' }}
            data-testid="img-hero-logo-mobile"
          />
        </motion.div>

        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-5 flex items-center gap-3"
        >
          <p 
            className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-center"
            style={{ fontSize: '12px', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}
          >
            Where Creativity Meets Revenue
          </p>
        </motion.div>

        {/* Tagline 1 */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-bold text-white text-center mb-3 drop-shadow-xl"
          style={{ fontSize: '24px', lineHeight: '1.2' }}
        >
          Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Brand</span> You've Always Imagined.
        </motion.h2>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5"
        >
          <h1 
            className="font-black text-white leading-[1.05] drop-shadow-2xl"
            style={{ fontSize: '28px', letterSpacing: '-0.01em' }}
          >
            AI-Native Marketing
          </h1>
          <p 
            className="font-serif italic font-medium text-white/90 mt-1"
            style={{ fontSize: '24px', lineHeight: '1.15' }}
          >
            Agency that drives <span className="text-[#ff914d] not-italic font-bold">Revenue</span>
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/70 text-center font-medium mb-6"
          style={{ fontSize: '16px', lineHeight: '1.5' }}
        >
          Less Cost. More Reach. More Sales.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-6"
        >
          <Link href="/contact">
            <Button 
              className="h-12 px-10 rounded-full bg-white text-[#0A0E27] font-bold text-base hover:bg-cyan-50 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              data-testid="button-start-talking"
            >
              Start Talking
            </Button>
          </Link>
        </motion.div>

        {/* Glass Service Buttons - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <GlassServiceButton icon={Palette} label="Creative" href="/services" testId="button-creative-mobile" />
          <GlassServiceButton icon={Bot} label="AI Ops" href="/services" testId="button-ai-ops-mobile" />
          <GlassServiceButton icon={Rocket} label="Solutions" href="/services" testId="button-solutions-mobile" />
        </motion.div>
      </div>

      {/* ========== DESKTOP LAYOUT (Left Aligned) ========== */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 hidden lg:flex flex-row items-center h-full pt-20 pb-8">

        {/* LEFT COLUMN: Text Content */}
        <div className="flex-1 w-full flex flex-col items-start text-left">

          <motion.div
            style={{ x: moveContent }}
            className="w-full max-w-5xl flex flex-col items-start text-left"
          >

            {/* KICKER */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-[2px] w-16 bg-cyan-400" />
              <p 
                className="text-cyan-400 font-bold tracking-[0.2em] uppercase"
                style={{ fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' }}
              >
                Where Creativity Meets Revenue
              </p>
            </motion.div>

            {/* HEADLINE BLOCK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              {/* Line 1: Build the Brand */}
              <h2 
                className="font-bold text-white mb-2 leading-[1.1] drop-shadow-xl"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}
              >
                Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 inline-block">Brand</span> You've Always Imagined.
              </h2>

              {/* MAIN HERO TITLE */}
              <h1 
                className="font-black text-white leading-[1] mb-6 drop-shadow-2xl"
                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
              >
                AI-Native Marketing <br />
                <span className="font-serif italic font-medium text-white/90">
                  Agency that drives <span className="text-[#ff914d] not-italic font-bold">Revenue</span>
                </span>
              </h1>
            </motion.div>

            {/* FORMULA / SUBTITLE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 font-medium mb-10 max-w-3xl leading-relaxed"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
            >
              Certified AI Talent + Tailored Workflows + Measurable Growth = <br className="hidden" />
              <span className="text-white font-bold inline-block border-b-2 border-cyan-400">Less Cost. More Reach. More Sales.</span>
            </motion.p>

            {/* CTA SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-row items-center gap-6"
            >
              <Link href="/contact">
                <Button 
                  className="h-14 px-10 rounded-full bg-white text-[#0A0E27] font-bold text-lg hover:bg-cyan-50 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  data-testid="button-start-talking-desktop"
                >
                  Start Talking
                </Button>
              </Link>

              {/* Glass Service Buttons */}
              <div className="flex flex-wrap gap-3">
                <GlassServiceButton icon={Palette} label="Creative" href="/services" testId="button-creative-desktop" />
                <GlassServiceButton icon={Bot} label="AI Ops" href="/services" testId="button-ai-ops-desktop" />
                <GlassServiceButton icon={Rocket} label="Solutions" href="/services" testId="button-solutions-desktop" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Floating Chip Carousel (Desktop Only) */}
        <div className="flex-1 h-full flex items-center justify-center relative z-10 pointer-events-none">
          <div className="w-[120%] h-full absolute right-[-10%] top-0 flex items-center justify-center opacity-80">
            <FloatingChipCarousel />
          </div>
        </div>
      </div>

      {/* Mobile Floating Chip Carousel */}
      <div className="relative z-20 w-full pb-4 lg:hidden">
        <FloatingChipCarousel />
      </div>

      {/* Subtle curved wave transition */}
      <div className="relative z-10 w-full -mt-2">
        <svg 
          viewBox="0 0 1440 50" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,25 C360,45 1080,5 1440,25 L1440,50 L0,50 Z" 
            fill="#0A0E27"
            fillOpacity="0.3"
          />
        </svg>
      </div>

    </section>
  );
}
