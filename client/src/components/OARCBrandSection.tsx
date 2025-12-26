import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface OARCBrandSectionProps {
  videoSrc?: string;
}

export default function OARCBrandSection({ videoSrc }: OARCBrandSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Force video autoplay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, try again with user interaction fallback
        const playOnInteraction = () => {
          video.play();
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('click', playOnInteraction);
        };
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        document.addEventListener('click', playOnInteraction, { once: true });
      });
    }
  }, [videoSrc]);

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
      className="relative overflow-hidden min-h-[320px] md:min-h-[380px]"
      data-testid="oarc-brand-section"
    >
      {/* Video Background Layer - Full coverage, bright, instant autoplay */}
      {videoSrc && (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            {...{ 'webkit-playsinline': 'true' } as any}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Very light overlay just for minimal text contrast */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.15) 100%)' 
            }} 
          />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-6xl lg:max-w-7xl relative z-10 flex flex-col h-full py-10 md:py-14">
        
        {/* OARC Letters - At very top */}
        <div className="text-center mb-auto">
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
                  className="font-bold text-white relative z-10"
                  style={{ 
                    fontSize: 'clamp(2.8rem, 10vw, 6rem)',
                    lineHeight: 1,
                    textShadow: `0 0 40px ${item.textGlow}, 0 0 20px rgba(255,255,255,0.3)`,
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

        {/* Bottom section - 2 lines with bold text and subtle shadow */}
        <div className="mt-auto">
          {/* Line 2: Optimised + AI + Revenue intelligence + Creative - O/A/R/C bigger */}
          <motion.div
            className="text-center mb-4 md:mb-5 px-1 md:px-0"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          >
            <p 
              className="text-white font-bold whitespace-nowrap tracking-[0.04em] sm:tracking-[0.08em] md:tracking-[0.12em] lg:tracking-[0.18em]"
              style={{ 
                fontSize: 'clamp(0.72rem, 3vw, 1.4rem)',
                textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)'
              }}
            >
              <span 
                className="font-black text-white" 
                style={{ 
                  fontSize: '1.5em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(255,179,102,0.4)' 
                }}
              >O</span>ptimised 
              <span className="mx-1.5 sm:mx-2.5 text-white/80 font-bold">+</span> 
              <span 
                className="font-black text-white" 
                style={{ 
                  fontSize: '1.5em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,209,193,0.4)' 
                }}
              >A</span>I 
              <span className="mx-1.5 sm:mx-2.5 text-white/80 font-bold">+</span> 
              <span 
                className="font-black text-white" 
                style={{ 
                  fontSize: '1.5em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(245,225,164,0.4)' 
                }}
              >R</span>evenue intelligence 
              <span className="mx-1.5 sm:mx-2.5 text-white/80 font-bold">+</span> 
              <span 
                className="font-black text-white" 
                style={{ 
                  fontSize: '1.5em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(207,255,102,0.4)' 
                }}
              >C</span>reative
            </p>
          </motion.div>

          {/* Line 3: Main Tagline - Bold with subtle shadow */}
          <motion.div
            className="text-center mb-4 md:mb-6 px-2 md:px-0"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.5, ease: 'easeOut' }}
          >
            <p 
              className="max-w-3xl lg:max-w-5xl mx-auto leading-relaxed font-bold md:whitespace-nowrap"
              style={{ 
                fontSize: 'clamp(0.85rem, 3vw, 1.45rem)', 
                color: '#FFFFFF', 
                textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)'
              }}
              data-testid="oarc-tagline"
            >
              <span className="whitespace-nowrap">OARC represents our core belief: Progress comes from integration,</span>
              <br className="md:hidden" />
              <span className="block md:inline mt-1 md:mt-0"> not separation.</span>
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
