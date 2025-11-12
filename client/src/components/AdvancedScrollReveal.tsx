import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface AdvancedScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'parallax' | 'stagger';
  duration?: number;
  parallaxOffset?: number;
}

export default function AdvancedScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  variant = 'slide-up',
  duration = 0.8,
  parallaxOffset = 50
}: AdvancedScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: 0.3 
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax transform
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const getVariantAnimation = () => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
      };
    }

    switch (variant) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration, delay: delay / 1000 }
          }
        };
      
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration, 
              delay: delay / 1000,
              ease: [0.25, 0.4, 0.25, 1] // Custom easing
            }
          }
        };
      
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration, 
              delay: delay / 1000,
              ease: [0.25, 0.4, 0.25, 1]
            }
          }
        };
      
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration, 
              delay: delay / 1000,
              ease: [0.25, 0.4, 0.25, 1]
            }
          }
        };
      
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration, 
              delay: delay / 1000,
              ease: [0.25, 0.4, 0.25, 1]
            }
          }
        };
      
      case 'parallax':
        return {
          hidden: {},
          visible: {}
        };
      
      case 'stagger':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: duration * 0.8, 
              delay: delay / 1000,
              ease: [0.25, 0.4, 0.25, 1]
            }
          }
        };
      
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration, delay: delay / 1000 }
          }
        };
    }
  };

  if (variant === 'parallax') {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ y, opacity: prefersReducedMotion ? 1 : opacity }}
      >
        {children}
      </motion.div>
    );
  }

  const variants = getVariantAnimation();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container for multiple children
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.2
  });

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: 0
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      {children}
    </motion.div>
  );
}
