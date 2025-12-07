import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue } from "framer-motion";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';

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

// AI Grid and flowing lines canvas
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

    const gridSize = 60;

    // Snow/Particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: Math.random() * 0.5 + 0.5,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      trail: [] as { x: number, y: number }[]
    }));

    // Horizontal Data Lines
    const flowLines = Array.from({ length: 6 }, (_, i) => ({
      y: (h / 6) * i + 100,
      offset: Math.random() * 100,
      speed: 0.5 + Math.random() * 1,
      opacity: 0.1 + Math.random() * 0.2
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // 1. Subtle Grid
      ctx.strokeStyle = 'rgba(196, 255, 77, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // 2. Flowing Data Lines
      flowLines.forEach(line => {
        line.offset += line.speed;
        if (line.offset > w + 200) line.offset = -200;

        const gradient = ctx.createLinearGradient(line.offset - 100, 0, line.offset + 200, 0);
        gradient.addColorStop(0, 'rgba(0, 217, 255, 0)');
        gradient.addColorStop(0.5, `rgba(0, 217, 255, ${line.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(line.offset - 100, line.y);
        ctx.lineTo(line.offset + 200, line.y);
        ctx.stroke();
      });

      // 3. Snow Particles
      particles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;

        if (p.y > h) { p.y = -10; p.x = Math.random() * w; }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;

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

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />;
};

export default function HeroSection() {
  const { x, y } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-20, 20]);
  const moveContent = useTransform(x, [-1, 1], [10, -10]);

  return (
    <section className="relative min-h-[100dvh] bg-[#0A0E27] overflow-hidden flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#0A0E27]">

      {/* BACKGROUND + EFFECTS */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 opacity-50 contrast-125"
        style={{
          backgroundImage: `url(${heroBackground})`,
          x: moveBackground,
          y: useTransform(y, [-1, 1], [-20, 20]),
        }}
      />
      <AIGridCanvas />

      {/* VIGNETTE GRADIENTS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E27] via-[#0A0E27]/80 to-[#0A0E27]/60 pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-[#0A0E27]/50 pointer-events-none z-[2]" />

      {/* --- CENTERED CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center items-center text-center pt-32 pb-10">
        <motion.div style={{ x: moveContent }} className="max-w-[1200px]">

          {/* 1. TAGLINE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs md:text-sm font-medium tracking-[0.2em] text-slate-400 uppercase mb-6"
          >
            Where Creativity Meets Revenue
          </motion.div>

          {/* 2. HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.2] mb-8 max-w-[900px] mx-auto drop-shadow-2xl"
          >
            Build the Brand You've Always Imagined. <br className="hidden md:block" />
            With the Growth You Actually Need.
          </motion.h1>

          {/* 3. OARC PILLARS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            {/* Desktop Version */}
            <div className="hidden md:block text-base font-medium text-slate-400 tracking-wide">
              <span className="text-xl font-bold text-[#00D9FF]">O</span>utcomes-Driven •&nbsp;
              <span className="text-xl font-bold text-[#00D9FF]">A</span>I-Powered •&nbsp;
              <span className="text-xl font-bold text-[#00D9FF]">R</span>evenue-Focused •&nbsp;
              <span className="text-xl font-bold text-[#00D9FF]">C</span>reative-First
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden text-sm font-medium text-slate-400 whitespace-nowrap">
              <span className="text-lg font-bold text-[#00D9FF]">O</span>utcomes •&nbsp;
              <span className="text-lg font-bold text-[#00D9FF]">A</span>I •&nbsp;
              <span className="text-lg font-bold text-[#00D9FF]">R</span>evenue •&nbsp;
              <span className="text-lg font-bold text-[#00D9FF]">C</span>reative
            </div>
          </motion.div>

          {/* 4. DESCRIPTOR */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-slate-300 font-normal mb-10 max-w-[600px] mx-auto"
          >
            AI-native Marketing agency that drives revenue
          </motion.p>

          {/* 5. CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Primary */}
            <Link href="/contact">
              <Button
                className="h-14 px-12 rounded-lg bg-[#00D9FF] text-[#0A0E27] font-semibold text-lg shadow-[0_4px_12px_rgba(0,217,255,0.3)] hover:brightness-110 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                data-testid="button-start-growing"
              >
                Start Growing
              </Button>
            </Link>

            {/* Secondary Group */}
            <div className="flex flex-wrap justify-center gap-4 w-full overflow-x-auto pb-2 sm:pb-0 px-4 scrollbar-hide">
              {[
                { label: "Creative", link: "/services/social-media-creative-management" },
                { label: "AI Ops", link: "/services/ai-consulting" },
                { label: "Growth", link: "/services/lead-generation" }
              ].map((btn) => (
                <Link key={btn.label} href={btn.link}>
                  <button 
                    className="flex-shrink-0 px-6 py-3 rounded-md bg-transparent border border-[#00D9FF]/50 text-white font-medium text-sm hover:bg-[#00D9FF] hover:text-[#0A0E27] transition-all whitespace-nowrap"
                    data-testid={`button-service-${btn.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {btn.label}
                  </button>
                </Link>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* --- FOOTER: CAROUSEL --- */}
      <div className="relative z-20 w-full mb-0 md:mb-4">
        <div className="w-full h-12 bg-gradient-to-b from-transparent to-[#0A0E27] absolute -top-12 pointer-events-none" />
        <FloatingChipCarousel />
      </div>

    </section>
  );
}
