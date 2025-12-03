import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube, SiSpotify } from "react-icons/si";
import companyLogo from "@assets/IMG_8813_(1)_1764796694787.png";

function FloatingParticle({ delay, duration, size, left, top, color }: { 
  delay: number; 
  duration: number; 
  size: number;
  left: string;
  top: string;
  color: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: color,
        boxShadow: `0 0 ${size * 4}px ${color}`,
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedGrid() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(196,255,77,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(196,255,77,0.6) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    />
  );
}

function GlowOrbs() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <>
      <motion.div 
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,255,77,0.12) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(35,170,202,0.1) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </>
  );
}

export default function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  const backgrounds = [
    'linear-gradient(135deg, #00FF9C 0%, #00D17D 100%)',
    'linear-gradient(135deg, #FF5A00 0%, #FF7A2E 100%)',
    'linear-gradient(135deg, #00FF9C 0%, #FF5A00 100%)',
    'linear-gradient(135deg, #0A2818 0%, #00FF9C 100%)',
    'linear-gradient(135deg, #FF5A00 0%, #1A1A1A 100%)',
    'linear-gradient(135deg, #00D17D 0%, #FF7A2E 100%)',
  ];
  
  const textContent = [
    { type: 'text', content: "We blend creative and performance" },
    { type: 'text', content: "Mastering the New Rules of Branding" },
    { type: 'logo', content: null }
  ];

  const particles = [
    { delay: 0, duration: 8, size: 4, left: '10%', top: '20%', color: 'rgba(196,255,77,0.5)' },
    { delay: 1, duration: 10, size: 3, left: '85%', top: '30%', color: 'rgba(35,170,202,0.4)' },
    { delay: 2, duration: 7, size: 5, left: '70%', top: '70%', color: 'rgba(196,255,77,0.4)' },
    { delay: 0.5, duration: 9, size: 3, left: '20%', top: '80%', color: 'rgba(35,170,202,0.5)' },
    { delay: 3, duration: 8, size: 4, left: '50%', top: '15%', color: 'rgba(196,255,77,0.3)' },
    { delay: 1.5, duration: 11, size: 3, left: '5%', top: '50%', color: 'rgba(196,255,77,0.4)' },
    { delay: 2.5, duration: 9, size: 4, left: '95%', top: '60%', color: 'rgba(35,170,202,0.3)' },
  ];
  
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgrounds.length);
    }, 2000);
    
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textContent.length);
    }, 3000);
    
    return () => {
      clearInterval(bgInterval);
      clearInterval(textInterval);
    };
  }, []);
  
  return (
    <section 
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#0a0a0a' }}
      data-testid="section-phone-brands"
    >
      {/* Premium Dark Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(196,255,77,0.04) 0%, transparent 60%)'
          }}
        />
        
        {/* Animated Grid */}
        <AnimatedGrid />
        
        {/* Glow Orbs */}
        <GlowOrbs />
        
        {/* Floating Particles */}
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-24 h-24">
        <div className="absolute top-6 left-6 w-12 h-[1px] bg-gradient-to-r from-[#c4ff4d]/40 to-transparent" />
        <div className="absolute top-6 left-6 w-[1px] h-12 bg-gradient-to-b from-[#c4ff4d]/40 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-24 h-24">
        <div className="absolute top-6 right-6 w-12 h-[1px] bg-gradient-to-l from-[#23AACA]/30 to-transparent" />
        <div className="absolute top-6 right-6 w-[1px] h-12 bg-gradient-to-b from-[#23AACA]/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24">
        <div className="absolute bottom-6 left-6 w-12 h-[1px] bg-gradient-to-r from-[#23AACA]/30 to-transparent" />
        <div className="absolute bottom-6 left-6 w-[1px] h-12 bg-gradient-to-t from-[#23AACA]/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24">
        <div className="absolute bottom-6 right-6 w-12 h-[1px] bg-gradient-to-l from-[#c4ff4d]/40 to-transparent" />
        <div className="absolute bottom-6 right-6 w-[1px] h-12 bg-gradient-to-t from-[#c4ff4d]/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left: Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="font-bold mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
              data-testid="text-grow-brands"
            >
              <span className="text-white block">We grow</span>
              <span className="block" style={{ color: '#c4ff4d' }}>ambitious brands</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              The results-driven, social-first agency you've been looking for. We blend creative excellence with AI-powered performance to deliver exceptional results.
            </p>
            
            {/* Feature pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 bg-white/[0.05] backdrop-blur-sm border border-[#c4ff4d]/20 rounded-full text-sm text-white/80 font-medium">
                Social-First
              </span>
              <span className="px-4 py-2 bg-white/[0.05] backdrop-blur-sm border border-[#23AACA]/20 rounded-full text-sm text-white/80 font-medium">
                AI-Powered
              </span>
              <span className="px-4 py-2 bg-white/[0.05] backdrop-blur-sm border border-[#4ade80]/20 rounded-full text-sm text-white/80 font-medium">
                Results-Driven
              </span>
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div 
            className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[340px]" 
            style={{ aspectRatio: '9/16' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Phone glow effect */}
            <div 
              className="absolute -inset-8 rounded-[3rem] blur-[60px] opacity-30"
              style={{ background: 'linear-gradient(135deg, rgba(196,255,77,0.3) 0%, rgba(35,170,202,0.2) 100%)' }}
            />
            
            {/* Phone interior with animated backgrounds */}
            <div className="absolute inset-4 md:inset-5 rounded-[1.5rem] overflow-hidden">
              {backgrounds.map((bg, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: bg,
                    opacity: currentImageIndex === index ? 1 : 0,
                  }}
                  data-testid={`phone-background-${index}`}
                />
              ))}
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-between bg-black/30 p-4 md:p-6">
                <div className="flex gap-3 md:gap-4 items-center animate-[fadeInUp_0.8s_ease-out]" data-testid="social-icons-top">
                  <SiFacebook className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                  <SiInstagram className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                  <SiLinkedin className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                </div>
                
                <div className="text-center flex-1 flex items-center justify-center px-3">
                  {textContent[currentTextIndex]?.type === 'text' ? (
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight transition-opacity duration-500" data-testid="phone-text-content" style={{ letterSpacing: '-0.02em' }}>
                      {textContent[currentTextIndex]?.content || ''}
                    </p>
                  ) : (
                    <img 
                      src={companyLogo} 
                      alt="Oarc Digital logo" 
                      className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-opacity duration-500"
                      style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.4))' }}
                      data-testid="phone-logo-content"
                    />
                  )}
                </div>
                
                <div className="flex gap-3 md:gap-4 items-center animate-[fadeInUp_0.8s_ease-out_0.5s]" data-testid="social-icons-bottom">
                  <SiX className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                  <SiYoutube className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                  <SiSpotify className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                </div>
              </div>
            </div>
            
            {/* Phone outline */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 200 355" fill="none">
              <path 
                d="M 65 2 L 65 6 Q 68 9 72 9 L 128 9 Q 132 9 135 6 L 135 2" 
                stroke="#333" 
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path 
                d="M 13 32 Q 11 28 13 25 L 14 18 Q 16 13 20 10 L 29 6 Q 36 3 47 2 L 153 2 Q 164 3 171 6 L 180 10 Q 184 13 186 18 L 187 25 Q 189 28 187 32 L 187 323 Q 189 327 187 331 L 186 338 Q 184 343 180 346 L 171 350 Q 164 353 153 354 L 47 354 Q 36 353 29 350 L 20 346 Q 16 343 14 338 L 13 331 Q 11 327 13 323 Z" 
                stroke="#333" 
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Turquoise accent swooshes */}
            <div className="absolute -top-3 -left-1 md:-top-4 md:-left-2">
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                <path d="M 5 25 Q 15 20 25 25" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M 25 5 Q 20 15 25 25" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-1 md:-bottom-4 md:-right-2">
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                <path d="M 25 25 Q 35 30 45 25" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M 25 25 Q 30 35 25 45" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
