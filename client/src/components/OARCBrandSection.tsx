import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function OARCBrandSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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

  // Letter glow colors - subtle and premium
  const letters = [
    { letter: "O", glowColor: "rgba(255,179,102,0.25)", textGlow: "rgba(255,179,102,0.4)" },  // warm orange
    { letter: "A", glowColor: "rgba(0,209,193,0.25)", textGlow: "rgba(0,209,193,0.4)" },      // teal
    { letter: "R", glowColor: "rgba(245,225,164,0.25)", textGlow: "rgba(245,225,164,0.4)" }, // champagne/gold
    { letter: "C", glowColor: "rgba(207,255,102,0.25)", textGlow: "rgba(207,255,102,0.4)" }, // lime
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 20%, #111111 50%, #1a1a1a 80%, #f5f5f5 100%)'
      }}
      data-testid="oarc-brand-section"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-5xl relative z-10">
        
        {/* OARC Letters - Always on one line */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-8 lg:gap-12">
            {letters.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: index * 0.12, 
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Subtle glow behind letter */}
                <motion.div 
                  className="absolute inset-0 rounded-full blur-[40px] md:blur-[60px] -z-10"
                  style={{ 
                    background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`,
                    transform: 'scale(2.5)'
                  }}
                  animate={isVisible && !prefersReducedMotion ? { 
                    opacity: [0.6, 1, 0.6],
                    scale: [2.3, 2.6, 2.3]
                  } : {}}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                    delay: index * 0.3
                  }}
                />
                
                {/* The letter */}
                <span 
                  className="font-bold text-white/95 relative z-10"
                  style={{ 
                    fontSize: 'clamp(2.8rem, 10vw, 6rem)',
                    lineHeight: 1,
                    textShadow: `0 0 30px ${item.textGlow}`,
                    letterSpacing: '-0.02em'
                  }}
                  data-testid={`oarc-letter-${item.letter}`}
                >
                  {item.letter}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subheading - Optimised · AI · Revenue Intelligence · Creativity */}
        <motion.div
          className="text-center mb-5 md:mb-6"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
        >
          <p 
            className="text-[#CCCCCC] tracking-[0.15em] md:tracking-[0.2em] uppercase"
            style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)' }}
          >
            Optimised · AI · Revenue Intelligence · Creativity
          </p>
        </motion.div>

        {/* Main Tagline */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5, ease: 'easeOut' }}
        >
          <p 
            className="text-[#DDDDDD] max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}
            data-testid="oarc-tagline"
          >
            OARC represents our core belief: Optimised AI + Revenue Intelligence + Creativity — engineered together for growth.
          </p>
        </motion.div>

        {/* Thin gold accent line */}
        <motion.div
          className="flex justify-center"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
        >
          <div 
            className="w-10 h-[2px] rounded-full"
            style={{ backgroundColor: '#F5E1A4' }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="oarc-brand-section"] * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
