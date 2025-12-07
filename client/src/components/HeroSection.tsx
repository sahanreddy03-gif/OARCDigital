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

    // Grid settings
    const gridSize = 60;
    
    // Flowing particles (AI data flow effect)
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: Math.random() * 0.5 + 0.2,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      trail: [] as {x: number, y: number}[]
    }));

    // Horizontal flowing lines
    const flowLines = Array.from({ length: 8 }, (_, i) => ({
      y: (h / 8) * i + 50,
      offset: Math.random() * 100,
      speed: 0.3 + Math.random() * 0.5,
      opacity: 0.1 + Math.random() * 0.15
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(196, 255, 77, 0.06)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw flowing horizontal lines (AI data streams)
      flowLines.forEach(line => {
        line.offset += line.speed;
        if (line.offset > w) line.offset = -200;
        
        const gradient = ctx.createLinearGradient(line.offset - 100, 0, line.offset + 200, 0);
        gradient.addColorStop(0, 'rgba(196, 255, 77, 0)');
        gradient.addColorStop(0.5, `rgba(196, 255, 77, ${line.opacity})`);
        gradient.addColorStop(1, 'rgba(196, 255, 77, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.offset - 100, line.y);
        ctx.lineTo(line.offset + 200, line.y);
        ctx.stroke();
      });

      // Draw flowing particles (snow + data dots)
      particles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        
        // Store trail
        p.trail.push({x: p.x, y: p.y});
        if (p.trail.length > 5) p.trail.shift();
        
        if (p.y > h) { 
          p.y = -10; 
          p.x = Math.random() * w;
          p.trail = [];
        }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;

        // Draw trail
        if (p.trail.length > 1) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.3})`;
          ctx.lineWidth = p.size * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let i = 1; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y);
          }
          ctx.stroke();
        }

        // Draw particle
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

      {/* AI Grid and flowing lines */}
      <AIGridCanvas />

      {/* Strong left gradient for text readability - darker near text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-[2]" />

      {/* Main content - positioned lower */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-6 pt-40 sm:pt-44 pb-8">
          
          {/* Left aligned content */}
          <div className="max-w-2xl">
            
            {/* WHERE CREATIVITY MEETS REVENUE */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#c4ff4d] text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 sm:mb-6 font-semibold"
            >
              Where Creativity Meets Revenue
            </motion.p>

            {/* AI-Powered Marketing, */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-1 sm:mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            >
              AI-Powered Marketing,
            </motion.h1>

            {/* Agency That Drives Revenue - Italic */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white leading-tight mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            >
              Agency That Drives Revenue
            </motion.h2>

            {/* Description - Updated text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-medium italic"
            >
              AI-Certified Talent + Custom AI Workflows + Ruthless Automation + Guaranteed Results = More Effective. Lower Cost. More Sales.
            </motion.p>

            {/* Start Talking Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
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

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/10"
            >
              <span className="text-white/80 text-xs sm:text-sm font-medium">Malta's #1</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 text-xs sm:text-sm font-medium">AI Employees Available</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 text-xs sm:text-sm font-medium">Intelligence-Powered Social Media</span>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Floating Chip Carousel - brought up */}
      <div className="relative z-20 w-full pb-2">
        <FloatingChipCarousel />
      </div>

      {/* Curved green wave with black border on top - brought up */}
      <div className="relative z-10 w-full -mt-2">
        <svg 
          viewBox="0 0 1440 100" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Black border/shadow on top of wave */}
          <path 
            d="M0,50 C360,90 1080,10 1440,50 L1440,100 L0,100 Z" 
            fill="rgba(0,0,0,0.3)"
            transform="translate(0, -4)"
          />
          {/* Main green wave */}
          <path 
            d="M0,50 C360,90 1080,10 1440,50 L1440,100 L0,100 Z" 
            fill="#c4ff4d"
          />
        </svg>
      </div>

    </section>
  );
}
