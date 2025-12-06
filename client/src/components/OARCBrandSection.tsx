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

  const oarcWords = [
    { letter: "O", word: "ptimised", color: "#ffffff" },
    { letter: "A", word: "I", color: "#23AACA" },
    { letter: "R", word: "evenue", color: "#ffffff" },
    { letter: "C", word: "reativity", color: "#c4ff4d" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)'
      }}
      data-testid="oarc-brand-section"
    >
      {/* Subtle animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Ambient glow effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(35,170,202,0.08) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,255,77,0.06) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        
        {/* Main OARC Acronym Display */}
        <div className="text-center mb-10 md:mb-14">
          {/* The OARC letters with full words */}
          <div 
            className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {oarcWords.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-baseline"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isVisible && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Large initial letter */}
                <span 
                  className="font-black"
                  style={{ 
                    fontSize: 'clamp(4rem, 12vw, 8rem)',
                    color: item.color,
                    lineHeight: 1,
                    textShadow: item.color === '#c4ff4d' 
                      ? '0 0 40px rgba(196,255,77,0.3)' 
                      : item.color === '#23AACA'
                        ? '0 0 40px rgba(35,170,202,0.3)'
                        : 'none'
                  }}
                  data-testid={`oarc-letter-${item.letter}`}
                >
                  {item.letter}
                </span>
                {/* Rest of the word - smaller */}
                <span 
                  className="font-bold tracking-wide"
                  style={{ 
                    fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
                    color: item.color,
                    opacity: 0.9,
                    letterSpacing: '0.02em'
                  }}
                >
                  {item.word}
                </span>
                
                {/* Separator dot between words (not after last) */}
                {index < oarcWords.length - 1 && (
                  <span 
                    className="hidden md:inline-block mx-3 lg:mx-4"
                    style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      marginBottom: '0.5rem'
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p 
            className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            data-testid="oarc-tagline"
          >
            Where cutting-edge AI meets creative excellence to drive measurable revenue growth.
          </p>
        </motion.div>

        {/* Subtle horizontal line accent */}
        <motion.div
          className={`flex items-center justify-center mt-10 md:mt-14 gap-4 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#23AACA]/40" />
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#c4ff4d', boxShadow: '0 0 10px rgba(196,255,77,0.5)' }}
          />
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#c4ff4d]/40" />
        </motion.div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="oarc-brand-section"] * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
