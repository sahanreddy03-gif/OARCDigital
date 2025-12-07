import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Globe } from 'lucide-react';
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';

const landingPages = [
  { id: 1, title: "E-Commerce", subtitle: "Automated Sales", icon: TrendingUp },
  { id: 2, title: "SaaS Platform", subtitle: "User Dashboard", icon: Globe },
  { id: 3, title: "AI Solutions", subtitle: "24/7 Support", icon: Sparkles },
  { id: 4, title: "Growth Engine", subtitle: "High Engagement", icon: Zap },
];

function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const clientX = useRef(0);
  const clientY = useRef(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      x.set(normalizedX);
      y.set(normalizedY);
      clientX.current = e.clientX;
      clientY.current = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);
  
  return { x, y, clientX, clientY };
}

// Green Grid + Snow + Cursor Glow Canvas
const AtmosphereCanvas = ({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>, mouseY: React.MutableRefObject<number> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let time = 0;

    // Snow flakes
    const flakes = Array.from({ length: 100 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: 0.3 + Math.random() * 0.8,
      vx: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.2
    }));

    // Glowing grid lines (horizontal and vertical)
    const gridLines: { x1: number; y1: number; x2: number; y2: number; speed: number; offset: number; vertical: boolean }[] = [];
    
    // Horizontal moving lines
    for (let i = 0; i < 8; i++) {
      gridLines.push({
        x1: 0, y1: 0, x2: w, y2: 0,
        speed: 0.3 + Math.random() * 0.5,
        offset: Math.random() * h,
        vertical: false
      });
    }
    
    // Vertical moving lines  
    for (let i = 0; i < 6; i++) {
      gridLines.push({
        x1: 0, y1: 0, x2: 0, y2: h,
        speed: 0.2 + Math.random() * 0.4,
        offset: Math.random() * w,
        vertical: true
      });
    }

    // Cursor particles
    const cursorParticles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.01;

      // Draw animated grid lines (LIME GREEN)
      ctx.globalCompositeOperation = 'lighter';
      gridLines.forEach(line => {
        if (line.vertical) {
          // Vertical line moving horizontally
          const x = (line.offset + time * line.speed * 100) % (w + 200) - 100;
          const gradient = ctx.createLinearGradient(x, 0, x, h);
          gradient.addColorStop(0, 'rgba(196, 255, 77, 0)');
          gradient.addColorStop(0.3, 'rgba(196, 255, 77, 0.15)');
          gradient.addColorStop(0.5, 'rgba(196, 255, 77, 0.25)');
          gradient.addColorStop(0.7, 'rgba(196, 255, 77, 0.15)');
          gradient.addColorStop(1, 'rgba(196, 255, 77, 0)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        } else {
          // Horizontal line moving vertically
          const y = (line.offset + time * line.speed * 80) % (h + 200) - 100;
          const gradient = ctx.createLinearGradient(0, y, w, y);
          gradient.addColorStop(0, 'rgba(196, 255, 77, 0)');
          gradient.addColorStop(0.2, 'rgba(196, 255, 77, 0.12)');
          gradient.addColorStop(0.5, 'rgba(196, 255, 77, 0.2)');
          gradient.addColorStop(0.8, 'rgba(196, 255, 77, 0.12)');
          gradient.addColorStop(1, 'rgba(196, 255, 77, 0)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      });

      // Draw diagonal grid pattern
      ctx.strokeStyle = 'rgba(196, 255, 77, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = -h; x < w + h; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + h, h);
        ctx.stroke();
      }
      for (let x = w + h; x > -h; x -= gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x - h, h);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = 'source-over';

      // Draw snow
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

      // Cursor glow effect (LIME GREEN)
      const mx = mouseX.current;
      const my = mouseY.current;
      
      if (mx > 0 && my > 0) {
        // Spawn particles
        if (Math.random() > 0.7) {
          cursorParticles.push({
            x: mx + (Math.random() - 0.5) * 30,
            y: my + (Math.random() - 0.5) * 30,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5 - 0.5,
            life: 1,
            size: Math.random() * 3 + 1
          });
        }

        // Draw cursor glow
        ctx.globalAlpha = 1;
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 120);
        gradient.addColorStop(0, 'rgba(196, 255, 77, 0.12)');
        gradient.addColorStop(0.5, 'rgba(196, 255, 77, 0.04)');
        gradient.addColorStop(1, 'rgba(196, 255, 77, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mx, my, 120, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw cursor particles
      ctx.globalCompositeOperation = 'lighter';
      for (let i = cursorParticles.length - 1; i >= 0; i--) {
        const p = cursorParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.025;

        if (p.life <= 0) {
          cursorParticles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.life * 0.5;
        const particleGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        particleGrad.addColorStop(0, 'rgba(196, 255, 77, 0.9)');
        particleGrad.addColorStop(1, 'rgba(196, 255, 77, 0)');
        ctx.fillStyle = particleGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';

      while (cursorParticles.length > 25) cursorParticles.shift();

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mouseX, mouseY]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />;
};


// Glass showcase with lime accents
const GlassShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % landingPages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[4/3]">
      {/* Outer glow - LIME */}
      <div className="absolute -inset-8 bg-[#c4ff4d]/15 blur-3xl rounded-full opacity-50" />
      
      <AnimatePresence mode="popLayout">
        {landingPages.map((page, i) => {
          if (i !== index) return null;
          const IconComponent = page.icon;

          return (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute inset-0 rounded-[24px] overflow-hidden"
            >
              {/* Glass container */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(196,255,77,0.08)]">
                {/* Subtle lime gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4ff4d]/5 via-transparent to-[#c4ff4d]/3 rounded-[24px]" />
                
                {/* Light sweep */}
                <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent rotate-12 animate-[lightSweep_10s_ease-in-out_infinite]" />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#c4ff4d]/10 backdrop-blur-sm border border-[#c4ff4d]/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#c4ff4d]" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs">
                      Live
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{page.title}</h3>
                    <p className="text-white/50 text-sm sm:text-base mb-4">{page.subtitle}</p>
                    
                    {/* Progress dots */}
                    <div className="flex gap-2">
                      {landingPages.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            idx === index 
                              ? 'w-8 bg-[#c4ff4d]' 
                              : 'w-1.5 bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}


export default function HeroSection() {
  const { x, y, clientX, clientY } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-20, 20]);
  const moveContent = useTransform(x, [-1, 1], [12, -12]);

  return (
    <section className="relative h-[100dvh] bg-black overflow-hidden flex flex-col justify-between selection:bg-[#c4ff4d] selection:text-black">

      {/* Background image */}
      <motion.div
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          x: moveBackground,
          y: useTransform(y, [-1, 1], [-20, 20]),
          filter: "brightness(0.5) saturate(1.2)"
        }}
      />

      {/* Grid + Snow + Cursor effects */}
      <AtmosphereCanvas mouseX={clientX} mouseY={clientY} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none z-[2]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col pt-20 sm:pt-24 lg:pt-0">

        <div className="flex-grow flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 justify-center">

          <motion.div
            style={{ x: moveContent, y: useTransform(y, [-1, 1], [12, -12]) }}
            className="lg:w-1/2 w-full text-center lg:text-left pt-4 sm:pt-8 lg:pt-0"
          >
            {/* Creative × Intelligence - White serif italic, smaller */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 sm:mb-5"
            >
              <span className="font-serif italic text-white/70 text-sm sm:text-base tracking-wider">
                Creative <span className="text-[#c4ff4d] not-italic font-sans font-light">&times;</span> Intelligence
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-2 sm:mb-3"
            >
              AI-Powered Marketing,
            </motion.h1>

            {/* Agency That Drives Revenue - Premium outlined style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 sm:mb-8 relative"
            >
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] text-white relative"
                style={{
                  textShadow: '0 0 40px rgba(196, 255, 77, 0.3), 0 0 80px rgba(196, 255, 77, 0.15)',
                  WebkitTextStroke: '1px rgba(196, 255, 77, 0.4)'
                }}
              >
                Agency That Drives Revenue
              </h2>
            </motion.div>

            {/* Description - Larger */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
            >
              We create world-class experiences for ambitious brands and build AI solutions for your growth.
            </motion.p>

            {/* CTA Buttons - LIME GREEN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button 
                className="h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-[#c4ff4d] text-black font-bold text-sm sm:text-base hover:bg-[#d4ff6d] hover:scale-105 transition-all shadow-[0_0_30px_-5px_rgba(196,255,77,0.5)]"
                data-testid="button-start-talking"
              >
                Start Talking
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  className="h-12 sm:h-14 px-6 sm:px-8 rounded-full text-[#c4ff4d] border-[#c4ff4d]/40 hover:border-[#c4ff4d] hover:bg-[#c4ff4d]/10 font-medium text-sm sm:text-base backdrop-blur-sm"
                  data-testid="button-view-services"
                >
                  View Services
                </Button>
              </Link>
            </motion.div>

          </motion.div>

          {/* Glass showcase */}
          <div className="lg:w-1/2 w-full flex justify-center items-center py-4 sm:py-6 lg:py-0">
            <motion.div
              style={{ x: useTransform(x, [-1, 1], [-12, 12]) }}
            >
              <GlassShowcase />
            </motion.div>
          </div>

        </div>

      </div>

      <div className="relative z-20 w-full flex-none pb-6 sm:pb-8">
        <FloatingChipCarousel />
      </div>

      <style>{`
        @keyframes lightSweep {
          0%, 100% { transform: translateX(-100%) rotate(12deg); }
          50% { transform: translateX(100%) rotate(12deg); }
        }
      `}</style>

    </section>
  );
}
