import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from "framer-motion";
import { Instagram, Bot, Code2, Video, Globe, ArrowRight } from 'lucide-react';
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif';

const landingPages = [
  { id: 1, title: "E-Commerce Scale", app: "Shopify+", color: "bg-emerald-500", desc: "Automated Sales" },
  { id: 2, title: "SaaS Platform", app: "Next.js", color: "bg-blue-600", desc: "User Dashboard" },
  { id: 3, title: "AI Consultant", app: "Bot Interface", color: "bg-purple-600", desc: "24/7 Support" },
  { id: 4, title: "Viral Campaign", app: "Social", color: "bg-pink-600", desc: "High Engagement" },
];

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

    const flakes = Array.from({ length: 150 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: 0.5 + Math.random() * 1.5,
      size: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.3
    }));

    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "white";
      flakes.forEach(f => {
        f.y += f.vy;
        if (f.y > h) f.y = -10;

        ctx.globalAlpha = f.opacity;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.strokeStyle = "rgba(196, 255, 77, 0.15)";
      ctx.fillStyle = "rgba(196, 255, 77, 0.4)";

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
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
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

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};


const LandingPageRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % landingPages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] sm:w-[340px] md:w-[420px] lg:w-[480px] aspect-[4/3]" style={{ perspective: '1200px' }}>
      <AnimatePresence mode="popLayout">
        {landingPages.map((page, i) => {
          if (i !== index) return null;

          return (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -50, rotateX: -10 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#0a0a0a]"
            >
              <div className="h-7 sm:h-8 bg-black/50 flex items-center px-3 gap-2 border-b border-white/10">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80" />
                <div className="ml-3 sm:ml-4 h-3 sm:h-4 w-24 sm:w-32 bg-white/10 rounded-full" />
              </div>

              <div className="p-4 sm:p-6 h-full flex flex-col relative">
                <div className={`absolute top-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] blur-[60px] sm:blur-[80px] opacity-30 ${page.color}`} />

                <span className="inline-block px-2 sm:px-3 py-1 rounded-full border border-white/20 text-white/60 text-[10px] sm:text-xs w-max mb-3 sm:mb-4">{page.app} // v2.0</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 leading-tight">{page.title}</h2>
                <p className="text-white/60 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">{page.desc}</p>

                <div className="flex gap-3 sm:gap-4 mt-auto">
                  <div className="h-16 sm:h-20 md:h-24 w-1/2 bg-white/5 rounded-lg border border-white/10 p-2 sm:p-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/10 mb-1 sm:mb-2" />
                    <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-white/10 rounded" />
                  </div>
                  <div className="h-16 sm:h-20 md:h-24 w-1/2 bg-white/5 rounded-lg border border-white/10 p-2 sm:p-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/10 mb-1 sm:mb-2" />
                    <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-white/10 rounded" />
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
      
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {landingPages.map((page, i) => (
          <button
            key={page.id}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === i ? 'bg-[#c4ff4d] scale-125' : 'bg-white/30 hover:bg-white/50'
            }`}
            style={{
              boxShadow: index === i ? '0 0 10px rgba(196, 255, 77, 0.6)' : undefined
            }}
          />
        ))}
      </div>
    </div>
  )
}


export default function HeroSection() {
  const { x, y } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-25, 25]);
  const moveContent = useTransform(x, [-1, 1], [15, -15]);

  return (
    <section className="relative h-[100dvh] bg-black overflow-hidden flex flex-col justify-between selection:bg-[#c4ff4d] selection:text-black">

      <motion.div
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          x: moveBackground,
          y: useTransform(y, [-1, 1], [-25, 25]),
          filter: "brightness(0.65)"
        }}
      />

      <AtmosphereCanvas />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col pt-20 sm:pt-24 lg:pt-0">

        <div className="flex-grow flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 justify-center">

          <motion.div
            style={{ x: moveContent, y: useTransform(y, [-1, 1], [15, -15]) }}
            className="lg:w-1/2 w-full text-center lg:text-left pt-4 sm:pt-8 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 border border-white/20 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#c4ff4d] animate-pulse" />
              <span className="text-[#c4ff4d] font-mono text-[10px] sm:text-xs tracking-widest uppercase">
                Where Creativity Meets Revenue
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] 2xl:text-[8rem] font-black text-white tracking-tighter leading-[0.85] mb-4 sm:mb-6 lg:mb-8 drop-shadow-2xl">
              <span className="block">CREATIVE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 font-serif italic font-light">
                &times; INTELLIGENCE
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-medium max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              AI-Powered Marketing Agency That Drives <span className="text-[#c4ff4d] underline decoration-2 underline-offset-4">Revenue</span>.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                className="h-12 sm:h-14 px-6 sm:px-10 rounded-full bg-[#c4ff4d] text-black font-black text-sm sm:text-lg hover:bg-[#b5f03a] hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(196,255,77,0.6)]"
                data-testid="button-start-talking"
              >
                Start Talking
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  className="h-12 sm:h-14 px-6 sm:px-8 rounded-full text-white border-white/30 hover:border-white/50 hover:bg-white/10 font-medium text-sm sm:text-base backdrop-blur-sm"
                  data-testid="button-view-services"
                >
                  View Services
                </Button>
              </Link>
            </div>

          </motion.div>

          <div className="lg:w-1/2 w-full flex justify-center items-center py-4 sm:py-6 lg:py-0">
            <motion.div
              style={{ x: useTransform(x, [-1, 1], [-20, 20]) }}
            >
              <LandingPageRotator />
            </motion.div>
          </div>

        </div>

      </div>

      <div className="relative z-20 w-full flex-none pb-6 sm:pb-8">
        <FloatingChipCarousel />
      </div>

    </section>
  );
}
