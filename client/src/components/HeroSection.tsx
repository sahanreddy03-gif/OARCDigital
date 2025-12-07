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

// Snow particles canvas
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


export default function HeroSection() {
  const { x, y } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-10, 10]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col selection:bg-[#c4ff4d] selection:text-black">

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

      {/* Subtle left gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-[2]" />

      {/* Main content */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-6 pt-32 pb-12">
          
          {/* Left aligned content */}
          <div className="max-w-2xl">
            
            {/* WHERE CREATIVITY MEETS REVENUE */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 sm:mb-6"
            >
              Where Creativity Meets Revenue
            </motion.p>

            {/* AI-Powered Marketing, */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-1 sm:mb-2"
            >
              AI-Powered Marketing,
            </motion.h1>

            {/* Agency That Drives Revenue - Italic */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white leading-tight mb-6 sm:mb-8"
            >
              Agency That Drives Revenue
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              Certified AI talent + Tailored Workflows + Measurable Growth = Less Cost. More Reach. More Sales.
            </motion.p>

            {/* Start Talking Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact">
                <Button 
                  className="h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-[#c4ff4d] text-black font-bold text-sm sm:text-base hover:bg-[#d4ff6d] hover:scale-105 transition-all shadow-lg"
                  data-testid="button-start-talking"
                >
                  Start Talking
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Floating Chip Carousel */}
      <div className="relative z-20 w-full pb-4">
        <FloatingChipCarousel />
      </div>

      {/* Curved green wave */}
      <div className="relative z-10 w-full">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" 
            fill="#c4ff4d"
          />
        </svg>
      </div>

    </section>
  );
}
