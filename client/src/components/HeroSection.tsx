import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Globe } from 'lucide-react';
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';

const landingPages = [
  { id: 1, title: "E-Commerce", subtitle: "Automated Sales", icon: TrendingUp, accent: "from-emerald-400/20 to-teal-500/10" },
  { id: 2, title: "SaaS Platform", subtitle: "User Dashboard", icon: Globe, accent: "from-blue-400/20 to-cyan-500/10" },
  { id: 3, title: "AI Solutions", subtitle: "24/7 Support", icon: Sparkles, accent: "from-purple-400/20 to-violet-500/10" },
  { id: 4, title: "Growth Engine", subtitle: "High Engagement", icon: Zap, accent: "from-pink-400/20 to-rose-500/10" },
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

// Combined atmosphere + cursor glow canvas
const AtmosphereCanvas = ({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>, mouseY: React.MutableRefObject<number> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    // Snow flakes
    const flakes = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: 0.3 + Math.random() * 1,
      vx: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.2
    }));

    // Tech nodes
    const nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    // Cursor glow particles
    const cursorParticles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

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

      // Draw tech lines with teal color
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "rgba(88, 244, 212, 0.12)";
      ctx.fillStyle = "rgba(88, 244, 212, 0.35)";

      nodes.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Cursor glow effect
      const mx = mouseX.current;
      const my = mouseY.current;
      
      if (mx > 0 && my > 0) {
        // Spawn new particles
        if (Math.random() > 0.6) {
          cursorParticles.push({
            x: mx + (Math.random() - 0.5) * 40,
            y: my + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 1,
            life: 1,
            size: Math.random() * 4 + 2
          });
        }

        // Draw cursor glow
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 150);
        gradient.addColorStop(0, 'rgba(88, 244, 212, 0.15)');
        gradient.addColorStop(0.5, 'rgba(88, 244, 212, 0.05)');
        gradient.addColorStop(1, 'rgba(88, 244, 212, 0)');
        ctx.globalAlpha = 1;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mx, my, 150, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw cursor particles
      ctx.globalCompositeOperation = 'lighter';
      for (let i = cursorParticles.length - 1; i >= 0; i--) {
        const p = cursorParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;

        if (p.life <= 0) {
          cursorParticles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.life * 0.6;
        const particleGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        particleGrad.addColorStop(0, 'rgba(88, 244, 212, 0.8)');
        particleGrad.addColorStop(1, 'rgba(88, 244, 212, 0)');
        ctx.fillStyle = particleGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';

      // Limit particles
      while (cursorParticles.length > 30) cursorParticles.shift();

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

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};


// Premium glassmorphism showcase
const GlassShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % landingPages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[440px] aspect-[3/2]">
      {/* Outer glow */}
      <div className="absolute -inset-8 bg-gradient-to-br from-[#58f4d4]/20 via-transparent to-[#7cf0ff]/10 blur-3xl rounded-full opacity-60" />
      
      <AnimatePresence mode="popLayout">
        {landingPages.map((page, i) => {
          if (i !== index) return null;
          const IconComponent = page.icon;

          return (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, scale: 0.9, y: 40, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute inset-0 rounded-[28px] overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass container */}
              <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(88,244,212,0.1)]">
                {/* Inner gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${page.accent} rounded-[28px]`} />
                
                {/* Light sweep animation */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent rotate-12 animate-[lightSweep_8s_ease-in-out_infinite]" />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#58f4d4]" />
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-[#58f4d4]/60" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{page.title}</h3>
                    <p className="text-white/60 text-sm sm:text-base">{page.subtitle}</p>
                    
                    {/* Progress indicator */}
                    <div className="mt-4 flex gap-2">
                      {landingPages.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1 rounded-full transition-all duration-500 ${
                            idx === index 
                              ? 'w-8 bg-[#58f4d4]' 
                              : 'w-2 bg-white/20'
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
  const moveBackground = useTransform(x, [-1, 1], [-25, 25]);
  const moveContent = useTransform(x, [-1, 1], [15, -15]);

  return (
    <section className="relative h-[100dvh] bg-black overflow-hidden flex flex-col justify-between selection:bg-[#58f4d4] selection:text-black">

      <motion.div
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          x: moveBackground,
          y: useTransform(y, [-1, 1], [-25, 25]),
          filter: "brightness(0.6) saturate(1.1)"
        }}
      />

      <AtmosphereCanvas mouseX={clientX} mouseY={clientY} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col pt-20 sm:pt-24 lg:pt-0">

        <div className="flex-grow flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 justify-center">

          <motion.div
            style={{ x: moveContent, y: useTransform(y, [-1, 1], [15, -15]) }}
            className="lg:w-1/2 w-full text-center lg:text-left pt-4 sm:pt-8 lg:pt-0"
          >
            {/* Creative × Intelligence - Elegant serif */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-5 sm:mb-6"
            >
              <span className="font-serif italic text-white/50 text-base sm:text-lg md:text-xl tracking-wide">
                Creative <span className="text-[#58f4d4] not-italic font-sans">&times;</span> Intelligence
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

            {/* Highlighted Line - Premium teal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] text-[#58f4d4] drop-shadow-[0_0_20px_rgba(88,244,212,0.25)]">
                Agency That Drives Revenue
              </h2>
            </motion.div>

            {/* Description - Larger size */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
            >
              We create world-class experiences for ambitious brands and build AI solutions for your growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button 
                className="h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-[#58f4d4] text-black font-bold text-sm sm:text-base hover:bg-[#7cf0ff] hover:scale-105 transition-all shadow-[0_0_30px_-5px_rgba(88,244,212,0.5)]"
                data-testid="button-start-talking"
              >
                Start Talking
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  className="h-12 sm:h-14 px-6 sm:px-8 rounded-full text-white border-white/30 hover:border-[#58f4d4]/50 hover:bg-[#58f4d4]/10 font-medium text-sm sm:text-base backdrop-blur-sm"
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
              style={{ x: useTransform(x, [-1, 1], [-15, 15]) }}
            >
              <GlassShowcase />
            </motion.div>
          </div>

        </div>

      </div>

      <div className="relative z-20 w-full flex-none pb-6 sm:pb-8">
        <FloatingChipCarousel />
      </div>

      {/* Light sweep keyframes */}
      <style>{`
        @keyframes lightSweep {
          0%, 100% { transform: translateX(-100%) rotate(12deg); }
          50% { transform: translateX(100%) rotate(12deg); }
        }
      `}</style>

    </section>
  );
}
