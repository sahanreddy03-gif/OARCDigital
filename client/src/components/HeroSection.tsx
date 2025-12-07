import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { Instagram, Bot, Code2, Video } from 'lucide-react';
import FloatingChipCarousel from "./FloatingChipCarousel";

const cubeServices = [
  { id: "social", title: "Social Media", subtitle: "Viral Growth Engine", icon: Instagram, color: "#E1306C", route: "/services/social-media-management" },
  { id: "software", title: "Custom AI", subtitle: "Neural Systems", icon: Code2, color: "#3B82F6", route: "/services/custom-ai-software" },
  { id: "consulting", title: "AI Consulting", subtitle: "Strategic Intelligence", icon: Bot, color: "#c4ff4d", route: "/services/ai-consulting" },
  { id: "video", title: "Video Production", subtitle: "Cinematic Excellence", icon: Video, color: "#F59E0B", route: "/services/video-production" }
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

function SnowfallBackground() {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 8,
    size: 1 + Math.random() * 2,
    opacity: 0.3 + Math.random() * 0.5,
    drift: -20 + Math.random() * 40,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `snowfall ${p.duration}s linear ${p.delay}s infinite`,
            filter: p.size > 2 ? 'blur(0.5px)' : 'none',
          }}
        />
      ))}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-20px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: var(--particle-opacity, 0.5);
          }
          90% {
            opacity: var(--particle-opacity, 0.5);
          }
          100% {
            transform: translateY(100vh) translateX(var(--drift, 20px));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

function RotatingCube() {
  const [currentFace, setCurrentFace] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const rotationY = currentFace * -90;

  return (
    <div 
      className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px]"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotationY}deg)`,
        }}
      >
        {cubeServices.map((service, index) => {
          const faceRotation = index * 90;
          const translateZ = 190;

          return (
            <Link key={service.id} href={service.route}>
              <div
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden cursor-pointer group"
                style={{
                  transform: `rotateY(${faceRotation}deg) translateZ(${translateZ}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-black/95 backdrop-blur-xl"
                />
                
                <div 
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${service.color}40 0%, transparent 50%),
                                 radial-gradient(circle at 70% 80%, ${service.color}20 0%, transparent 40%)`
                  }}
                />

                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `conic-gradient(from 180deg at 50% 50%, transparent 0deg, ${service.color}15 90deg, transparent 180deg, ${service.color}10 270deg, transparent 360deg)`
                  }}
                />

                <div className="absolute inset-[1px] rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
                
                <div 
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />

                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="flex items-start justify-between">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                        boxShadow: `0 0 30px ${service.color}20`
                      }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <div 
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">Active</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-white/50 font-light">{service.subtitle}</p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div 
                        className="flex-1 h-12 rounded-xl flex items-center justify-center font-semibold text-sm tracking-wide transition-all duration-300 group-hover:scale-[1.02]"
                        style={{ 
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                          color: service.color === '#c4ff4d' ? '#000' : '#fff',
                          boxShadow: `0 10px 40px ${service.color}40`
                        }}
                      >
                        Explore Service
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)'
                  }}
                />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {cubeServices.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setCurrentFace(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentFace === index 
                ? 'scale-125' 
                : 'bg-white/20 hover:bg-white/40'
            }`}
            style={{
              backgroundColor: currentFace === index ? service.color : undefined,
              boxShadow: currentFace === index ? `0 0 15px ${service.color}` : undefined
            }}
          />
        ))}
      </div>

      <div 
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[80px] opacity-20 pointer-events-none"
        style={{ backgroundColor: cubeServices[currentFace].color }}
      />
    </div>
  );
}

export default function HeroSection() {
  const { x, y } = useMousePosition();
  
  const moveBackground = useTransform(x, [-1, 1], [-20, 20]);
  const moveText = useTransform(x, [-1, 1], [10, -10]);
  const moveCube = useTransform(x, [-1, 1], [25, -25]);

  return (
    <section className="relative h-[100dvh] bg-[#030308] overflow-hidden flex flex-col justify-between selection:bg-[#c4ff4d] selection:text-black">
      
      <motion.div 
        className="absolute inset-[-10%] w-[120%] h-[120%]"
        style={{ x: moveBackground, y: useTransform(y, [-1, 1], [-20, 20]) }}
      >
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-[#c4ff4d]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[30%] left-[20%] w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px]" />
      </motion.div>

      <SnowfallBackground />

      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }} 
      />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col pt-20 md:pt-0 justify-center">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 h-full justify-center">
          
          <motion.div 
            style={{ x: moveText, y: useTransform(y, [-1, 1], [10, -10]) }}
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
          >
             <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-[#c4ff4d] animate-pulse" />
                  <span className="text-xs font-mono text-white/60 tracking-[0.15em] uppercase">
                    AI-Powered Agency
                  </span>
                </div>
             </div>

             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-3">
               <span className="block">REVENUE</span>
               <span className="block bg-gradient-to-r from-[#c4ff4d] via-[#a8e063] to-[#56ab2f] bg-clip-text text-transparent">
                 ENGINE
               </span>
             </h1>

             <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-white/40 mb-6 tracking-tight">
               The Agency That <span className="text-white font-bold">Scales</span>
             </h2>

             <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 w-full">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent hidden lg:block" />
                <span className="text-lg md:text-xl font-serif italic text-white/80">
                    Creative <span className="text-[#c4ff4d] font-normal not-italic">&times;</span> Intelligence
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent hidden lg:block" />
             </div>

             <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-lg mb-10">
               We build <span className="text-white font-medium">autonomous systems</span> and <span className="text-white font-medium">world-class creative</span> for ambitious brands ready to dominate.
             </p>

             <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                 <Button 
                   className="h-14 px-10 rounded-full bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(196,255,77,0.4)]"
                   data-testid="button-start-growing"
                 >
                   Start Growing
                 </Button>
               <Link href="/services">
                 <Button 
                   variant="outline" 
                   className="h-14 px-8 rounded-full text-white border-white/20 hover:border-white/40 hover:bg-white/5 font-medium text-base backdrop-blur-sm"
                   data-testid="button-view-services"
                 >
                   View Services
                 </Button>
               </Link>
             </div>

             <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10 w-full max-w-md">
               <div className="text-center lg:text-left">
                 <div className="text-2xl font-bold text-white">150+</div>
                 <div className="text-xs text-white/40 uppercase tracking-wider">Brands Scaled</div>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div className="text-center lg:text-left">
                 <div className="text-2xl font-bold text-white">$12M+</div>
                 <div className="text-xs text-white/40 uppercase tracking-wider">Revenue Generated</div>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div className="text-center lg:text-left">
                 <div className="text-2xl font-bold text-[#c4ff4d]">24/7</div>
                 <div className="text-xs text-white/40 uppercase tracking-wider">AI Systems</div>
               </div>
             </div>
          </motion.div>

          <motion.div 
             style={{ x: moveCube, y: useTransform(y, [-1, 1], [20, -20]) }}
             className="lg:w-1/2 w-full flex justify-center lg:justify-center hidden lg:flex"
          >
             <RotatingCube />
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-20 w-full bg-gradient-to-t from-[#030308] via-[#030308]/95 to-transparent pb-6 pt-8"
      >
          <div className="container mx-auto px-6 flex items-center justify-between mb-4 border-b border-white/5 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">Capability Stream</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c4ff4d] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c4ff4d]/80">Live</span>
            </div>
          </div>
          <FloatingChipCarousel />
      </motion.div>

    </section>
  );
}
