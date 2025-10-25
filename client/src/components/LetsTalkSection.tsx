import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function CinematicScreen({ 
  title, 
  subtitle, 
  index,
  isFirst = false,
  isLast = false 
}: { 
  title: string; 
  subtitle: string | null; 
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.5 // Trigger when 50% of section is in view
  });

  const fadeSlideUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6 md:px-12 lg:px-16"
      data-testid={`oarc-screen-${index}`}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeSlideUpVariants}
        className="text-center max-w-5xl"
      >
        {/* Title */}
        <h2 
          className={`font-black text-white tracking-tight leading-[0.95] mb-6 md:mb-8 ${
            subtitle 
              ? 'text-5xl md:text-7xl lg:text-8xl xl:text-9xl' 
              : isFirst 
                ? 'text-6xl md:text-8xl lg:text-9xl xl:text-[10rem]'
                : 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
          }`}
          data-testid={`oarc-title-${index}`}
        >
          {title}
        </h2>
        
        {/* Subtitle */}
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              delay: 0.3,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/80 font-light tracking-wide leading-relaxed"
            data-testid={`oarc-subtitle-${index}`}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* Scroll indicator - only show on first screen */}
      {isFirst && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 md:bottom-12"
          data-testid="scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default function LetsTalkSection() {
  const screens = [
    {
      id: 0,
      title: "This is OARC.",
      subtitle: null
    },
    {
      id: 1,
      title: "Optimised.",
      subtitle: "Nothing wasted. Everything aligned."
    },
    {
      id: 2,
      title: "AI-Driven.",
      subtitle: "Systems that learn and multiply your output."
    },
    {
      id: 3,
      title: "Revenue.",
      subtitle: "We focus on what matters."
    },
    {
      id: 4,
      title: "Creative.",
      subtitle: "We win attention that converts."
    },
    {
      id: 5,
      title: "Built for brands that demand exponential growth.",
      subtitle: null
    }
  ];

  return (
    <section 
      className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ 
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
      }}
      data-testid="section-oarc-cinematic"
    >
      {screens.map((screen, index) => (
        <CinematicScreen
          key={screen.id}
          title={screen.title}
          subtitle={screen.subtitle}
          index={index}
          isFirst={index === 0}
          isLast={index === screens.length - 1}
        />
      ))}
    </section>
  );
}
