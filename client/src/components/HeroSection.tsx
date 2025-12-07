import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue } from "framer-motion";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';
import { Sparkles, Bot, TrendingUp } from 'lucide-react';

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

// Snow + Tech Lines Canvas
const AtmosphereCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let animationId: number;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: Math.random() * 1 + 0.5,
      size: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.1
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

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
  const moveBackground = useTransform(x, [-1, 1], [-15, 15]);
  const moveContent = useTransform(x, [-1, 1], [5, -5]);

  return (
    <section className="relative h-[100dvh] bg-black overflow-hidden flex flex-col justify-between selection:bg-[#c4ff4d] selection:text-black">

      {/* --- BACKGROUND LAYER --- */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-110"
        style={{
          backgroundImage: `url(${heroBackground})`,
          x: moveBackground,
          y: useTransform(y, [-1, 1], [-15, 15]),
        }}
      />

      {/* --- ATMOSPHERE LAYERS --- */}
      <AtmosphereCanvas />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-[2]" />

      {/* --- MAIN CONTENT (Centered Vertical) --- */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32">
        <motion.div
          style={{ x: moveContent }}
          className="max-w-4xl"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#c4ff4d]" />
            <span className="text-[#c4ff4d] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
              Where Creativity Meets Revenue
            </span>
          </motion.div>

          {/* Headline Block (Tight Spacing) */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight drop-shadow-2xl"
            >
              AI-Powered <br /> Marketing.
            </motion.h1>
          </div>

          {/* The Math Equation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10 pl-1 border-l-2 border-[#c4ff4d]/30"
          >
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed pl-6">
              Certified AI Talent + Tailored Workflows + Measurable Growth = <br />
              <span className="text-white font-bold not-italic">Less Cost. More Reach. More Sales.</span>
            </p>
          </motion.div>

          {/* CTA + Service Graphics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            {/* Main Button */}
            <Link href="/contact">
              <Button
                className="h-14 px-10 rounded-full bg-[#c4ff4d] text-black font-bold text-lg hover:bg-[#b5f03a] hover:scale-105 transition-all shadow-[0_0_20px_rgba(196,255,77,0.3)]"
                data-testid="button-start-talking"
              >
                Start Talking
              </Button>
            </Link>

            {/* Graphics Leading to Services */}
            <div className="flex items-center gap-6">
              <Link href="/services/social-media-creative-management">
                <div className="group flex flex-col items-center gap-1 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-[#c4ff4d] group-hover:bg-[#c4ff4d]/10 transition-all">
                    <Sparkles className="w-5 h-5 text-white group-hover:text-[#c4ff4d]" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-white/60 group-hover:text-white">Creative</span>
                </div>
              </Link>

              <div className="w-[1px] h-8 bg-white/10" />

              <Link href="/services/ai-consulting">
                <div className="group flex flex-col items-center gap-1 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-[#c4ff4d] group-hover:bg-[#c4ff4d]/10 transition-all">
                    <Bot className="w-5 h-5 text-white group-hover:text-[#c4ff4d]" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-white/60 group-hover:text-white">AI Ops</span>
                </div>
              </Link>

              <div className="w-[1px] h-8 bg-white/10" />

              <Link href="/services/lead-generation">
                <div className="group flex flex-col items-center gap-1 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-[#c4ff4d] group-hover:bg-[#c4ff4d]/10 transition-all">
                    <TrendingUp className="w-5 h-5 text-white group-hover:text-[#c4ff4d]" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-white/60 group-hover:text-white">Growth</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- FOOTER SECTION: Green Wave + Carousel --- */}
      <div className="relative z-10 w-full">
        {/* Green Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,40 C320,80 1120,0 1440,40 L1440,120 L0,120 Z"
              fill="#c4ff4d"
            />
            <path
              d="M0,45 C320,85 1120,5 1440,45 L1440,120 L0,120 Z"
              fill="#000"
              opacity="0.1"
            />
          </svg>
        </div>

        {/* Carousel Overlaying the Green Block */}
        <div className="relative z-20 pb-4 pt-10">
          <FloatingChipCarousel />
        </div>
      </div>

    </section>
  );
}
