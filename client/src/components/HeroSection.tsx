import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Bot, Video, Code2 } from 'lucide-react';
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';

const services = [
  { id: 1, label: "Social Media", icon: Instagram, delay: 0 },
  { id: 2, label: "AI Consulting", icon: Bot, delay: 0.1 },
  { id: 3, label: "Video Production", icon: Video, delay: 0.2 },
  { id: 4, label: "AI Software", icon: Code2, delay: 0.3 },
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

// Green Grid + Snow + Cursor Canvas
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

    // More snow flakes
    const flakes = Array.from({ length: 180 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: 0.4 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3
    }));

    // Grid lines
    const hLines: { offset: number; speed: number }[] = [];
    const vLines: { offset: number; speed: number }[] = [];
    
    for (let i = 0; i < 10; i++) {
      hLines.push({ offset: Math.random() * h, speed: 0.2 + Math.random() * 0.4 });
    }
    for (let i = 0; i < 8; i++) {
      vLines.push({ offset: Math.random() * w, speed: 0.15 + Math.random() * 0.3 });
    }

    // Cursor particles
    const cursorParticles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      // Static grid pattern
      ctx.strokeStyle = 'rgba(196, 255, 77, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 60;
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

      // Animated glowing lines
      ctx.globalCompositeOperation = 'lighter';
      
      // Horizontal
      hLines.forEach(line => {
        const y = (line.offset + time * line.speed * 60) % (h + 100) - 50;
        const gradient = ctx.createLinearGradient(0, y, w, y);
        gradient.addColorStop(0, 'rgba(196, 255, 77, 0)');
        gradient.addColorStop(0.3, 'rgba(196, 255, 77, 0.2)');
        gradient.addColorStop(0.5, 'rgba(196, 255, 77, 0.35)');
        gradient.addColorStop(0.7, 'rgba(196, 255, 77, 0.2)');
        gradient.addColorStop(1, 'rgba(196, 255, 77, 0)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      });

      // Vertical
      vLines.forEach(line => {
        const x = (line.offset + time * line.speed * 50) % (w + 100) - 50;
        const gradient = ctx.createLinearGradient(x, 0, x, h);
        gradient.addColorStop(0, 'rgba(196, 255, 77, 0)');
        gradient.addColorStop(0.3, 'rgba(196, 255, 77, 0.15)');
        gradient.addColorStop(0.5, 'rgba(196, 255, 77, 0.25)');
        gradient.addColorStop(0.7, 'rgba(196, 255, 77, 0.15)');
        gradient.addColorStop(1, 'rgba(196, 255, 77, 0)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      });

      ctx.globalCompositeOperation = 'source-over';

      // Snow
      ctx.fillStyle = "white";
      flakes.forEach(f => {
        f.y += f.vy;
        f.x += f.vx + Math.sin(time * 2 + f.x * 0.01) * 0.3;
        if (f.y > h) { f.y = -10; f.x = Math.random() * w; }
        if (f.x < 0) f.x = w;
        if (f.x > w) f.x = 0;

        ctx.globalAlpha = f.opacity;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Cursor glow
      const mx = mouseX.current;
      const my = mouseY.current;
      
      if (mx > 0 && my > 0) {
        if (Math.random() > 0.65) {
          cursorParticles.push({
            x: mx + (Math.random() - 0.5) * 25,
            y: my + (Math.random() - 0.5) * 25,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2 - 0.3,
            life: 1,
            size: Math.random() * 3 + 1.5
          });
        }

        ctx.globalAlpha = 1;
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 100);
        gradient.addColorStop(0, 'rgba(196, 255, 77, 0.15)');
        gradient.addColorStop(0.5, 'rgba(196, 255, 77, 0.05)');
        gradient.addColorStop(1, 'rgba(196, 255, 77, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mx, my, 100, 0, Math.PI * 2);
        ctx.fill();
      }

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
        particleGrad.addColorStop(0, 'rgba(196, 255, 77, 0.9)');
        particleGrad.addColorStop(1, 'rgba(196, 255, 77, 0)');
        ctx.fillStyle = particleGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';

      while (cursorParticles.length > 20) cursorParticles.shift();

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


// Minimal orbiting service icons
const ServiceOrbit = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px]">
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-[#c4ff4d]/10 blur-2xl" />
        <div className="absolute w-16 h-16 rounded-full border border-[#c4ff4d]/20" />
      </div>

      {/* Orbit ring */}
      <div className="absolute inset-4 rounded-full border border-white/10" />
      <div className="absolute inset-12 rounded-full border border-[#c4ff4d]/10" />

      {/* Orbiting service pills */}
      {services.map((service, i) => {
        const angle = (i * 90 - 45) * (Math.PI / 180);
        const radius = 42;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        const Icon = service.icon;
        const isHovered = hoveredId === service.id;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: service.delay + 0.3, type: "spring" }}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link href={
              service.id === 1 ? "/services/social-media-creative-management" :
              service.id === 2 ? "/services/ai-consulting" :
              service.id === 3 ? "/services/video-production" :
              "/services/custom-software-development"
            }>
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  boxShadow: isHovered ? '0 0 30px rgba(196, 255, 77, 0.4)' : '0 0 20px rgba(0,0,0,0.3)'
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 cursor-pointer transition-colors hover:border-[#c4ff4d]/50"
              >
                <Icon className="w-4 h-4 text-[#c4ff4d]" />
                <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">{service.label}</span>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="text-[#c4ff4d] text-2xl sm:text-3xl font-black">4</div>
          <div className="text-white/60 text-xs uppercase tracking-wider">Core Services</div>
        </motion.div>
      </div>
    </div>
  );
};


export default function HeroSection() {
  const { x, y, clientX, clientY } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-15, 15]);
  const moveContent = useTransform(x, [-1, 1], [10, -10]);

  return (
    <section className="relative h-[100dvh] bg-black overflow-hidden flex flex-col justify-between selection:bg-[#c4ff4d] selection:text-black">

      {/* Background image - BRIGHTER */}
      <motion.div
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          x: moveBackground,
          y: useTransform(y, [-1, 1], [-15, 15]),
          filter: "brightness(0.75) saturate(1.15) contrast(1.05)"
        }}
      />

      {/* Grid + Snow + Cursor */}
      <AtmosphereCanvas mouseX={clientX} mouseY={clientY} />

      {/* Dark overlay for text - LEFT SIDE */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none z-[2]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col pt-20 sm:pt-24 lg:pt-0">

        <div className="flex-grow flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center">

          {/* LEFT: Text Content */}
          <motion.div
            style={{ x: moveContent, y: useTransform(y, [-1, 1], [10, -10]) }}
            className="lg:w-[55%] w-full text-center lg:text-left pt-4 sm:pt-6 lg:pt-0"
          >
            {/* Where Creativity Meets Revenue */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-5 sm:mb-6 border border-white/20 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#c4ff4d] animate-pulse" />
              <span className="text-[#c4ff4d] font-mono text-xs tracking-widest uppercase">
                Where Creativity Meets Revenue
              </span>
            </motion.div>

            {/* Main Headline - Pure white, elite */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-3 sm:mb-4"
            >
              AI-Powered Marketing,
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 sm:mb-8"
            >
              Agency That Drives{" "}
              <span className="text-[#c4ff4d]">Revenue</span>
            </motion.h2>

            {/* Description - Larger */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed"
            >
              We create world-class experiences for ambitious brands and build AI solutions for your growth.
            </motion.p>

            {/* CTA Buttons - LIME GREEN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <Button 
                  className="h-13 sm:h-14 px-8 sm:px-10 rounded-full bg-[#c4ff4d] text-black font-bold text-sm sm:text-base hover:bg-[#d4ff6d] hover:scale-105 transition-all shadow-[0_0_30px_-5px_rgba(196,255,77,0.5)]"
                  data-testid="button-start-talking"
                >
                  Start Talking
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  className="h-13 sm:h-14 px-6 sm:px-8 rounded-full text-[#c4ff4d] border-[#c4ff4d]/40 hover:border-[#c4ff4d] hover:bg-[#c4ff4d]/10 font-medium text-sm sm:text-base backdrop-blur-sm"
                  data-testid="button-view-services"
                >
                  View Services
                </Button>
              </Link>
            </motion.div>

          </motion.div>

          {/* RIGHT: Minimal Service Orbit */}
          <div className="lg:w-[45%] w-full flex justify-center items-center py-2 lg:py-0">
            <motion.div
              style={{ x: useTransform(x, [-1, 1], [-10, 10]) }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <ServiceOrbit />
            </motion.div>
          </div>

        </div>

      </div>

      {/* Floating Chip Carousel */}
      <div className="relative z-20 w-full flex-none pb-6 sm:pb-8">
        <FloatingChipCarousel />
      </div>

    </section>
  );
}
