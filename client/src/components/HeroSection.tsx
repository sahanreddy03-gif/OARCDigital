import { useEffect, useRef, useState } from "react";
import { Link } from "wouter"; 
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Play, Instagram, Bot, Code2, Video, Globe } from 'lucide-react';
import FloatingChipCarousel from "./FloatingChipCarousel";

// --- ASSETS ---
import socialImg from '@assets/social-media-management-optimized.jpg';
import aiImg from '@assets/stock_images/artificial_intellige_3ed7faa2.jpg';
import videoImg from '@assets/ai-video-production-optimized.jpg';
import softwareImg from '@assets/stock_images/data_analyst_profess_4f5ff172.jpg'; 

const cubeFaces = [
  {
    id: "social",
    title: "Social Media",
    subtitle: "Management",
    icon: Instagram,
    image: socialImg,
    route: "/services/social-media-management",
    color: "#E1306C"
  },
  {
    id: "software",
    title: "Custom AI",
    subtitle: "Software Solutions",
    icon: Code2,
    image: softwareImg,
    route: "/services/custom-ai-software",
    color: "#3B82F6"
  },
  {
    id: "consulting",
    title: "AI Consulting",
    subtitle: "& Strategy",
    icon: Bot,
    image: aiImg,
    route: "/services/ai-consulting",
    color: "#c4ff4d"
  },
  {
    id: "video",
    title: "Video",
    subtitle: "Production",
    icon: Video,
    image: videoImg,
    route: "/services/video-production",
    color: "#F59E0B"
  }
];

function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return { x, y };
}

const HyperCube = () => {
  const [rotation, setRotation] = useState(0);
  const [activeFace, setActiveFace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev - 90);
      setActiveFace(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-[1200px] group">
      <motion.div
        className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] preserve-3d transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ 
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d" 
        }}
      >
        {cubeFaces.map((face, index) => {
          const faceRotation = index * 90;
          const translateZ = 160; 

          return (
            <Link key={face.id} href={face.route}>
              <div 
                className="absolute inset-0 bg-black/80 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#c4ff4d]/50 transition-colors shadow-2xl backface-hidden"
                style={{
                  transform: `rotateY(${faceRotation}deg) translateZ(${translateZ + 40}px)`, 
                }}
              >
                <img src={face.image} alt={face.title} className="w-full h-full object-cover opacity-50 group-hover/card:opacity-70 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                      <face.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#c4ff4d]">Click Review</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-none">{face.title}</h3>
                  <p className="text-lg text-white/60 font-light">{face.subtitle}</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent transition-opacity duration-500 pointer-events-none" />
              </div>
            </Link>
          );
        })}
      </motion.div>
      <div className="absolute bottom-10 w-[300px] h-[300px] bg-[#c4ff4d]/10 rounded-full blur-[100px] transform rotateX(90deg) pointer-events-none" />
    </div>
  );
};


export default function HeroSection() {
  const { scrollY } = useScroll();
  const { x, y } = useMousePosition();
  const mouseMask = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(196, 255, 77, 0.10), transparent 80%)`;

  return (
    <section className="relative h-[100dvh] bg-[#050505] overflow-hidden flex flex-col justify-between selection:bg-[#c4ff4d] selection:text-black">
      
      {/* 1. Base Grid */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      {/* 2. Glow Effects */}
      <motion.div 
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{ background: mouseMask }}
      />
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#c4ff4d]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* --- CONTENT AREA (Takes up remaining space) --- */}
      <div className="relative z-10 container mx-auto px-6 flex-grow flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 h-full justify-center lg:pt-0 pt-10">
          
          {/* LEFT: TEXT */}
          <div className="lg:w-1/2 flex flex-col items-start z-20 justify-center">
             
             {/* Status Badge */}
             <div className="hidden md:flex items-center gap-3 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4ff4d] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c4ff4d]"></span>
               </span>
               <span className="text-xs font-mono tracking-widest text-white/50 uppercase">Operational Status: Online 24/7</span>
             </div>

             {/* Headline */}
             <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4 md:mb-6">
               <span className="block">CREATIVE</span>
               <span className="block text-[#c4ff4d] font-serif italic font-light">&times; INTELLIGENCE</span>
             </h1>

             {/* Subheads */}
             <div className="space-y-1 mb-6 hidden md:block">
                <h2 className="text-sm md:text-lg font-bold tracking-[0.1em] text-white uppercase">
                  WHERE CREATIVITY MEETS REVENUE
                </h2>
                <h3 className="text-xs md:text-base text-white/80 font-mono">
                  AI-Powered Marketing Agency That Drives Revenue
                </h3>
             </div>

             {/* Mission */}
             <p className="text-sm md:text-lg text-white/60 font-light leading-relaxed max-w-xl mb-6 md:mb-8">
               We create <span className="text-white font-medium">world-class brand experiences</span> for the ambitious and build <span className="text-white font-medium">AI systems</span> for your growth.
             </p>

             {/* Buttons */}
             <div className="flex flex-wrap gap-3 md:gap-4 mb-4">
                 <Button className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-[#c4ff4d] hover:bg-[#b5f03a] text-black font-bold text-sm md:text-lg tracking-wide shadow-[0_0_30px_-10px_rgba(196,255,77,0.4)] transition-all hover:scale-105">
                   Start Talking
                 </Button>
               <Link href="/services">
                 <Button variant="ghost" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-white border border-white/20 hover:bg-white/10 font-medium text-sm md:text-base">
                   View Capabilities
                 </Button>
               </Link>
             </div>
          </div>

          {/* RIGHT: CUBE (Desktop Only to save space) */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end hidden lg:flex scale-75 xl:scale-100">
             <HyperCube />
          </div>
        </div>
      </div>

      {/* --- BOTTOM: CAROUSEL (Always visible) --- */}
      <div className="relative z-20 w-full bg-gradient-to-t from-[#050505] via-[#050505] to-transparent pb-6 pt-2 select-none">
          <div className="container mx-auto px-6 flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Active Deployments</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c4ff4d] animate-pulse">Live</span>
          </div>
          <FloatingChipCarousel />
      </div>

    </section>
  );
}
