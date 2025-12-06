import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";

function AnimatedGrid() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(196,255,77,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(196,255,77,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: prefersReducedMotion ? 'none' : 'gridPulse 8s ease-in-out infinite'
      }}
    />
  );
}

function ServicePill({ label, delay }: { label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
      className="px-10 py-5 md:px-14 md:py-6 rounded-full border-2 border-[#c4ff4d]/60 bg-transparent backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-[#c4ff4d] hover:bg-[#c4ff4d]/5"
      data-testid={`pill-${label.toLowerCase().replace(' ', '-')}`}
    >
      <span className="text-base md:text-lg font-semibold tracking-widest text-white/90 uppercase">
        {label}
      </span>
    </motion.div>
  );
}

function HighlightedLetter({ letter, color }: { letter: string; color: string }) {
  return (
    <span 
      className="inline-block font-black"
      style={{ 
        color,
        fontSize: '1.15em',
        textShadow: `0 0 30px ${color}40, 0 0 60px ${color}20`
      }}
    >
      {letter}
    </span>
  );
}

export default function Section2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  const styles = `
    @keyframes gridPulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.7; }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(10px); }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section 
        ref={sectionRef}
        className="relative overflow-hidden py-20 md:py-28 lg:py-36"
        style={{ backgroundColor: '#0a0a0a' }}
        data-testid="section-oarc-brand"
      >
        {/* Animated Grid Background */}
        <AnimatedGrid />
        
        {/* Gradient overlays for depth */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(196,255,77,0.06) 0%, transparent 60%)'
          }}
        />
        
        {/* Floating accent orbs */}
        <motion.div 
          className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-[#c4ff4d]/40 blur-sm"
          style={{ y: prefersReducedMotion ? 0 : y1 }}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-[#23AACA]/50 blur-sm"
          style={{ y: prefersReducedMotion ? 0 : y2 }}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-[#c4ff4d]/30 blur-sm"
          style={{ y: prefersReducedMotion ? 0 : y1 }}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl relative z-10">
          
          {/* Main Heading with OARC Highlighted */}
          <motion.div 
            ref={headingRef}
            className="text-center mb-16 md:mb-20"
            style={{ opacity: prefersReducedMotion ? 1 : opacity }}
          >
            {/* Line 1: OPTIMISED AI */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
              animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2 md:mb-3"
            >
              <h2 
                className="font-black uppercase tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.05 }}
                data-testid="heading-optimised-ai"
              >
                <HighlightedLetter letter="O" color="#c4ff4d" />
                <span className="text-white">PTIMISED</span>
                <span className="ml-4 md:ml-6">
                  <HighlightedLetter letter="A" color="#23AACA" />
                  <span className="text-[#23AACA]">I</span>
                </span>
              </h2>
            </motion.div>
            
            {/* Line 2: REVENUE CREATIVE */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
              animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 
                className="font-black uppercase tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.05 }}
                data-testid="heading-revenue-creative"
              >
                <HighlightedLetter letter="R" color="#c4ff4d" />
                <span className="text-white">EVENUE</span>
                <span className="ml-4 md:ml-6">
                  <HighlightedLetter letter="C" color="#c4ff4d" />
                  <span className="text-[#c4ff4d]">REATIVE</span>
                </span>
              </h2>
            </motion.div>
          </motion.div>

          {/* Service Pills */}
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <ServicePill label="Creative" delay={0.5} />
            <ServicePill label="AI Solutions" delay={0.65} />
            <ServicePill label="Revenue" delay={0.8} />
          </div>
          
          {/* Subtle bottom tagline */}
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center text-zinc-500 text-sm md:text-base mt-12 md:mt-16 tracking-wide"
            data-testid="text-tagline"
          >
            The social-first, AI-powered agency delivering exceptional results
          </motion.p>
          
        </div>
      </section>
    </>
  );
}
