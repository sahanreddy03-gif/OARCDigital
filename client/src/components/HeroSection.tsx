import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from "framer-motion";
import { Instagram, Bot, Code2, Video } from 'lucide-react';
import FloatingChipCarousel from "./FloatingChipCarousel";
import liquidBg from '@assets/generated_images/liquid_iridescent_hero_background.png'; 

const holoCards = [
  { id: "social", title: "Social Media", subtitle: "Viral Growth", icon: Instagram, color: "#E1306C", route: "/services/social-media-management" },
  { id: "software", title: "Custom AI", subtitle: "Neural Systems", icon: Code2, color: "#3B82F6", route: "/services/custom-ai-software" },
  { id: "consulting", title: "AI Consulting", subtitle: "Strategy", icon: Bot, color: "#c4ff4d", route: "/services/ai-consulting" },
  { id: "video", title: "Video Prod", subtitle: "Cinematic", icon: Video, color: "#F59E0B", route: "/services/video-production" }
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

const HolographicStack = () => {
  return (
    <div className="relative w-[320px] h-[450px] group" style={{ perspective: '1200px' }}>
      {holoCards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute inset-0 border border-white/40 rounded-2xl shadow-2xl cursor-pointer overflow-hidden origin-bottom-left backdrop-blur-md bg-white/10"
            style={{ top: index * 40, left: index * 20, zIndex: 10 - index }}
            whileHover={{ y: -120, x: index * 10, rotateZ: (index - 1.5) * 8, zIndex: 20, scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{ background: `linear-gradient(to top, ${card.color}, transparent)` }} />
            <Link href={card.route}>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm mb-4">
                     <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white leading-none drop-shadow-md">{card.title}</h3>
                  <p className="text-sm text-white/90 font-mono tracking-widest mt-2 uppercase">{card.subtitle}</p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

const ServiceCycler = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => { setIndex((prev) => (prev + 1) % holoCards.length); }, 3000);
    return () => clearInterval(timer);
  }, []);
  const card = holoCards[index];

  return (
    <div className="relative w-full h-[180px] flex items-center justify-center" style={{ perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="absolute w-[260px] h-[160px] border border-white/30 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-xl bg-white/10"
        >
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
           <card.icon className="w-10 h-10 mb-2 text-white drop-shadow-lg" />
           <h3 className="text-xl font-black text-white drop-shadow-md">{card.title}</h3>
           <p className="text-[10px] text-white/80 uppercase tracking-[0.2em] mt-1 font-bold">{card.subtitle}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function HeroSection() {
  const { x, y } = useMousePosition();
  const moveBackground = useTransform(x, [-1, 1], [-30, 30]); 
  const moveContent = useTransform(x, [-1, 1], [15, -15]);

  return (
    <section className="relative h-[100dvh] bg-gray-900 overflow-hidden flex flex-col justify-between selection:bg-pink-500 selection:text-white">
      
      <motion.div 
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center"
        style={{ 
            backgroundImage: `url(${liquidBg})`, 
            x: moveBackground,
            y: useTransform(y, [-1, 1], [-30, 30]),
            filter: "brightness(0.9) contrast(1.1)"
        }}
      />
      
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 flex-grow flex flex-col justify-center min-h-0 pt-20 lg:pt-0 pb-2">
        
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16 w-full h-full justify-center">
          
          <motion.div 
            style={{ x: moveContent, y: useTransform(y, [-1, 1], [15, -15]) }}
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
          >
             <div className="p-5 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl w-full max-w-lg lg:max-w-xl">
                 
                 <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-4 drop-shadow-lg">
                   <span className="block text-white">CREATIVE</span>
                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 font-serif italic font-light">&times; INTELLIGENCE</span>
                 </h1>

                 <h2 className="text-sm md:text-2xl font-bold tracking-wide text-white mb-4 uppercase drop-shadow-md">
                   AI-Powered Mktg <span className="hidden md:inline">Agency That Drives Revenue</span>
                 </h2>

                 <p className="hidden md:block text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-md mb-6">
                   We create <span className="text-white font-bold decoration-pink-500 underline decoration-2 underline-offset-4">world-class brand experiences</span> for the ambitious.
                 </p>

                 <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                     <Button 
                       className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-white text-black font-black text-sm md:text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)]"
                       data-testid="button-start-growing"
                     >
                       Start Growing
                     </Button>
                   <Link href="/services">
                     <Button 
                       variant="ghost" 
                       className="h-12 md:h-14 px-6 md:px-8 rounded-full text-white border border-white/30 hover:bg-white/20 font-bold text-sm md:text-base backdrop-blur-sm"
                       data-testid="button-view-services"
                     >
                       View Services
                     </Button>
                   </Link>
                 </div>
             </div>
          </motion.div>

          <div className="lg:w-1/2 w-full justify-center lg:justify-end hidden lg:flex">
             <HolographicStack />
          </div>

          <div className="w-full flex justify-center lg:hidden mt-2">
             <ServiceCycler />
          </div>

        </div>
      </div>

      <div className="relative z-20 w-full flex-none bg-gradient-to-t from-black/80 to-transparent pb-6 pt-4">
          <FloatingChipCarousel />
      </div>

    </section>
  );
}
