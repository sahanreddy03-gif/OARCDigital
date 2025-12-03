import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube, SiSpotify } from "react-icons/si";
import companyLogo from "@assets/IMG_8775_1764722473830.png";

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
      className="absolute inset-0 opacity-[0.04]"
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

function DiagonalLines() {
  return (
    <div 
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 60px,
          rgba(196,255,77,0.4) 60px,
          rgba(196,255,77,0.4) 61px
        )`
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
        style={{ background: 'radial-gradient(circle, rgba(196,255,77,0.15) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(35,170,202,0.12) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(196,255,77,0.08) 0%, transparent 60%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </>
  );
}

function ScanLine() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <motion.div
      className="absolute left-0 right-0 h-[1px] pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(196,255,77,0.4), transparent)',
        boxShadow: '0 0 20px rgba(196,255,77,0.3)',
      }}
      animate={{ top: ['0%', '100%'] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
    />
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
    <>
      {/* SECTION A: Ultra-compact Brand Statement - 25-30vh */}
      <section 
        className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: '25vh', maxHeight: '35vh', height: '30vh' }}
        data-testid="section-brand-statement"
      >
        {/* Premium Dark Base */}
        <div className="absolute inset-0 bg-[#030306]" />
        
        {/* Sophisticated Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(196,255,77,0.06) 0%, transparent 50%)'
          }}
        />
        
        {/* Animated Grid */}
        <AnimatedGrid />
        
        {/* Diagonal Lines */}
        <DiagonalLines />
        
        {/* Glow Orbs */}
        <GlowOrbs />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <FloatingParticle key={i} {...p} />
          ))}
        </div>
        
        {/* Scan Line Effect */}
        <ScanLine />
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-4 left-4 w-12 h-[1px] bg-gradient-to-r from-[#c4ff4d]/50 to-transparent" />
          <div className="absolute top-4 left-4 w-[1px] h-12 bg-gradient-to-b from-[#c4ff4d]/50 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-4 right-4 w-12 h-[1px] bg-gradient-to-l from-[#23AACA]/40 to-transparent" />
          <div className="absolute top-4 right-4 w-[1px] h-12 bg-gradient-to-b from-[#23AACA]/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24">
          <div className="absolute bottom-4 left-4 w-12 h-[1px] bg-gradient-to-r from-[#23AACA]/40 to-transparent" />
          <div className="absolute bottom-4 left-4 w-[1px] h-12 bg-gradient-to-t from-[#23AACA]/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-4 right-4 w-12 h-[1px] bg-gradient-to-l from-[#c4ff4d]/50 to-transparent" />
          <div className="absolute bottom-4 right-4 w-[1px] h-12 bg-gradient-to-t from-[#c4ff4d]/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h2 
            className="font-bold text-white mb-5 uppercase tracking-[0.15em]"
            style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="text-brand-statement"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">Optimised</span>
            <span className="mx-2 bg-gradient-to-r from-[#c4ff4d] to-[#4ade80] bg-clip-text text-transparent">AI</span>
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">Revenue</span>
            <span className="mx-2 bg-gradient-to-r from-[#23AACA] to-[#4ade80] bg-clip-text text-transparent">Creative</span>
          </motion.h2>
          
          {/* 3 Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-[#c4ff4d]/20 rounded-full text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
              Creative
            </span>
            <span className="px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-[#23AACA]/20 rounded-full text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
              AI Employees
            </span>
            <span className="px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-[#4ade80]/20 rounded-full text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
              Revenue
            </span>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: Phone Animation + "We Grow Ambitious Brands" */}
      <section className="relative bg-white py-12 md:py-16 lg:py-20" data-testid="section-phone-brands">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col items-center gap-8 md:gap-10">
            
            {/* Phone Mockup - NOW FIRST */}
            <motion.div 
              className="relative w-full max-w-[200px] sm:max-w-[260px] md:max-w-[320px]" 
              style={{ aspectRatio: '9/16' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
                      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden transition-opacity duration-500">
                        <img 
                          src={companyLogo} 
                          alt="Oarc Digital logo" 
                          className="w-full h-full object-cover scale-[1.15]"
                          data-testid="phone-logo-content"
                        />
                      </div>
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
                  stroke="#1a1a1a" 
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path 
                  d="M 13 32 Q 11 28 13 25 L 14 18 Q 16 13 20 10 L 29 6 Q 36 3 47 2 L 153 2 Q 164 3 171 6 L 180 10 Q 184 13 186 18 L 187 25 Q 189 28 187 32 L 187 323 Q 189 327 187 331 L 186 338 Q 184 343 180 346 L 171 350 Q 164 353 153 354 L 47 354 Q 36 353 29 350 L 20 346 Q 16 343 14 338 L 13 331 Q 11 327 13 323 Z" 
                  stroke="#1a1a1a" 
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

            {/* "We Grow Ambitious Brands" - NOW BELOW PHONE */}
            <motion.div 
              className="text-center max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 
                className="font-bold text-zinc-900 mb-4"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
                data-testid="text-grow-brands"
              >
                <span className="block">We grow</span>
                <span className="text-primary block italic">ambitious brands</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                The results-driven, social-first agency you've been looking for. We blend creative excellence with AI-powered performance.
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
}
