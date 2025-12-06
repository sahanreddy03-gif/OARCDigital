import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";

function HighlightedLetter({ letter, color }: { letter: string; color: string }) {
  return (
    <span 
      className="inline-block font-black relative"
      style={{ 
        color,
        fontSize: '1.2em',
        textShadow: `0 0 40px ${color}50, 0 0 80px ${color}30`,
        lineHeight: 0.9
      }}
    >
      {letter}
    </span>
  );
}

function ServicePill({ label, link, delay, isVisible }: { 
  label: string; 
  link: string; 
  delay: number; 
  isVisible: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible && !prefersReducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={link}>
        <button
          className="group relative w-full min-w-[280px] md:min-w-[320px] px-12 md:px-16 py-5 md:py-6 rounded-full border-2 transition-all duration-400 hover:scale-[1.02] hover:-translate-y-1"
          style={{ 
            borderColor: '#c4ff4d',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(196, 255, 77, 0.08)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(196, 255, 77, 0.15), inset 0 0 20px rgba(196, 255, 77, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}
          data-testid={`pillar-btn-${label.toLowerCase().replace(' ', '-')}`}
        >
          <span 
            className="text-base md:text-lg font-bold tracking-[0.2em] uppercase"
            style={{ color: '#c4ff4d' }}
          >
            {label}
          </span>
        </button>
      </Link>
    </motion.div>
  );
}

export default function OARCBrandSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.02, 0.06, 0.06, 0.02]);
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    { id: "creative", name: "CREATIVE", link: "/services/creative", delay: 0.5 },
    { id: "ai", name: "AI SOLUTIONS", link: "/services/ai-solutions", delay: 0.65 },
    { id: "revenue", name: "REVENUE", link: "/services/automation", delay: 0.8 },
  ];

  const styles = `
    @keyframes gridPulse {
      0%, 100% { opacity: 0.03; }
      50% { opacity: 0.08; }
    }
    @keyframes subtleFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section
        ref={sectionRef}
        className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
        data-testid="oarc-brand-section"
      >
        {/* Animated grid background */}
        <motion.div 
          className="absolute inset-0"
          style={{
            opacity: prefersReducedMotion ? 0.05 : gridOpacity,
            backgroundImage: `
              linear-gradient(rgba(196, 255, 77, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196, 255, 77, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient glow - top */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(196, 255, 77, 0.03) 0%, transparent 100%)'
          }}
        />

        {/* Radial glow center */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 50% 35%, rgba(196, 255, 77, 0.04) 0%, transparent 70%)'
          }}
        />

        {/* Floating accent particles */}
        <motion.div 
          className="absolute top-24 left-[12%] w-2 h-2 rounded-full bg-[#c4ff4d]/50 blur-[2px]"
          style={{ y: prefersReducedMotion ? 0 : y1 }}
          animate={prefersReducedMotion ? {} : { opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-32 right-[15%] w-1.5 h-1.5 rounded-full bg-[#23AACA]/60 blur-[1px]"
          style={{ y: prefersReducedMotion ? 0 : y2 }}
          animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div 
          className="absolute bottom-28 left-[18%] w-1.5 h-1.5 rounded-full bg-[#c4ff4d]/40 blur-[1px]"
          style={{ y: prefersReducedMotion ? 0 : y1 }}
          animate={prefersReducedMotion ? {} : { opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.div 
          className="absolute bottom-36 right-[20%] w-2 h-2 rounded-full bg-[#23AACA]/40 blur-[2px]"
          style={{ y: prefersReducedMotion ? 0 : y2 }}
          animate={prefersReducedMotion ? {} : { opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Corner accents */}
        <div className="absolute top-8 left-8 hidden md:block opacity-30">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M0 0 L0 30" stroke="#c4ff4d" strokeWidth="1" />
            <path d="M0 0 L30 0" stroke="#c4ff4d" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute top-8 right-8 hidden md:block opacity-30">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M50 0 L50 30" stroke="#23AACA" strokeWidth="1" />
            <path d="M50 0 L20 0" stroke="#23AACA" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-8 left-8 hidden md:block opacity-30">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M0 50 L0 20" stroke="#23AACA" strokeWidth="1" />
            <path d="M0 50 L30 50" stroke="#23AACA" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 hidden md:block opacity-30">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M50 50 L50 20" stroke="#c4ff4d" strokeWidth="1" />
            <path d="M50 50 L20 50" stroke="#c4ff4d" strokeWidth="1" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-5xl relative z-10">
          {/* Main OARC headline with highlighted letters */}
          <div ref={headingRef} className="text-center mb-14 md:mb-20">
            {/* Line 1: OPTIMISED AI */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
              animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-1 md:mb-2"
            >
              <h2 
                className="font-black tracking-tight leading-[0.95]"
                style={{ 
                  fontSize: 'clamp(2.8rem, 10vw, 6.5rem)',
                  letterSpacing: '-0.03em'
                }}
                data-testid="heading-optimised-ai"
              >
                <HighlightedLetter letter="O" color="#c4ff4d" />
                <span className="text-white">PTIMISED</span>
                <span className="ml-3 md:ml-5">
                  <HighlightedLetter letter="A" color="#23AACA" />
                  <span className="text-[#23AACA]">I</span>
                </span>
              </h2>
            </motion.div>
            
            {/* Line 2: REVENUE CREATIVE */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
              animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 
                className="font-black tracking-tight leading-[0.95]"
                style={{ 
                  fontSize: 'clamp(2.8rem, 10vw, 6.5rem)',
                  letterSpacing: '-0.03em'
                }}
                data-testid="heading-revenue-creative"
              >
                <HighlightedLetter letter="R" color="#c4ff4d" />
                <span className="text-white">EVENUE</span>
                <span className="ml-3 md:ml-5">
                  <HighlightedLetter letter="C" color="#c4ff4d" />
                  <span className="text-[#c4ff4d]">REATIVE</span>
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Service Pills - Stacked vertically */}
          <div className="flex flex-col items-center gap-4 md:gap-5">
            {pillars.map((pillar) => (
              <ServicePill 
                key={pillar.id}
                label={pillar.name}
                link={pillar.link}
                delay={pillar.delay}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Bottom gradient fade for smooth transition to next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10, 10, 10, 1) 0%, transparent 100%)'
          }}
        />
      </section>
    </>
  );
}
