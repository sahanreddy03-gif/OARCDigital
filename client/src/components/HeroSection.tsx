import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue } from "framer-motion";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';
import { ArrowRight } from 'lucide-react';

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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: Math.random() * 0.8 + 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.1
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

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none opacity-60" />;
};


export default function HeroSection() {
  const { x, y } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-10, 10]);
  const moveContent = useTransform(x, [-1, 1], [3, -3]);

  return (
    <section className="relative min-h-[100dvh] bg-black overflow-hidden flex flex-col selection:bg-[#c4ff4d] selection:text-black">

      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105"
        style={{
          backgroundImage: `url(${heroBackground})`,
          x: moveBackground,
          y: useTransform(y, [-1, 1], [-10, 10]),
        }}
      />

      {/* Gradient Overlays for Depth */}
      <AtmosphereCanvas />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 z-[2]" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-20">
          <motion.div
            style={{ x: moveContent }}
            className="max-w-5xl"
          >
            {/* Glass Panel Container for Better Readability */}
            <div className="relative">
              {/* Subtle Glass Background */}
              <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 bg-black/30 backdrop-blur-sm rounded-2xl -z-10" />
              
              {/* Micro Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 text-[#c4ff4d] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                  <span className="w-8 h-[2px] bg-[#c4ff4d]" />
                  Where Creativity Meets Revenue
                </span>
              </motion.div>

              {/* Primary Headline - Two Lines */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                  Build the Brand You've Always Imagined.
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 leading-[1.1] tracking-tight mt-1">
                  With the Growth You Actually Need.
                </h2>
              </motion.div>

              {/* OARC Ribbon - Full Phrasing Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
              >
                {[
                  { letter: 'O', phrase: 'utcomes driven' },
                  { letter: 'A', phrase: 'I powered' },
                  { letter: 'R', phrase: 'evenue focused' },
                  { letter: 'C', phrase: 'reative first' },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-white/80 backdrop-blur-sm"
                  >
                    <span className="text-[#c4ff4d] font-bold mr-0.5">{item.letter}</span>
                    {item.phrase}
                  </span>
                ))}
              </motion.div>

              {/* Agency Tagline - Equal Weight to Headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8"
              >
                AI-native Marketing agency that drives revenue.
              </motion.p>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              >
                <Link href="/contact">
                  <Button
                    className="h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-[#c4ff4d] text-black font-bold text-base sm:text-lg hover:bg-[#d4ff6d] transition-all duration-300 shadow-[0_0_30px_rgba(196,255,77,0.25)] hover:shadow-[0_0_40px_rgba(196,255,77,0.4)] group"
                    data-testid="button-start-talking"
                  >
                    Start a Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/work">
                  <span className="text-white/60 hover:text-white text-sm sm:text-base font-medium transition-colors cursor-pointer flex items-center gap-2 group">
                    View Our Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>

              {/* Trust Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Trusted by innovative brands</p>
                <div className="flex items-center gap-6 opacity-50">
                  <div className="w-16 h-6 bg-white/20 rounded" />
                  <div className="w-20 h-6 bg-white/20 rounded" />
                  <div className="w-14 h-6 bg-white/20 rounded" />
                  <div className="hidden sm:block w-18 h-6 bg-white/20 rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section with Wave */}
      <div className="relative z-10 w-full mt-auto">
        <div className="absolute bottom-0 left-0 right-0 h-[60px] sm:h-[80px] pointer-events-none">
          <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,35 C360,55 1080,15 1440,35 L1440,80 L0,80 Z"
              fill="#c4ff4d"
            />
          </svg>
        </div>

        <div className="relative z-20 pb-4 pt-8">
          <FloatingChipCarousel />
        </div>
      </div>

    </section>
  );
}
