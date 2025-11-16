import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PremiumScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right';
  scrub?: boolean;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export default function PremiumScrollReveal({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  animation = 'fade-up',
  scrub = false,
  parallax = false,
  parallaxSpeed = 0.5
}: PremiumScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    if (!elementRef.current || prefersReducedMotion) return;

    const element = elementRef.current;
    
    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {};

    switch (animation) {
      case 'fade-up':
        fromVars = { 
          opacity: 0, 
          y: 60,
          scale: 0.98
        };
        toVars = { 
          opacity: 1, 
          y: 0,
          scale: 1,
          ease: 'power3.out',
          duration,
          delay
        };
        break;
      case 'fade-in':
        fromVars = { opacity: 0 };
        toVars = { 
          opacity: 1, 
          ease: 'power2.out',
          duration,
          delay
        };
        break;
      case 'scale':
        fromVars = { 
          opacity: 0, 
          scale: 0.9
        };
        toVars = { 
          opacity: 1, 
          scale: 1,
          ease: 'back.out(1.2)',
          duration,
          delay
        };
        break;
      case 'slide-left':
        fromVars = { 
          opacity: 0, 
          x: 100
        };
        toVars = { 
          opacity: 1, 
          x: 0,
          ease: 'power3.out',
          duration,
          delay
        };
        break;
      case 'slide-right':
        fromVars = { 
          opacity: 0, 
          x: -100
        };
        toVars = { 
          opacity: 1, 
          x: 0,
          ease: 'power3.out',
          duration,
          delay
        };
        break;
    }

    gsap.set(element, fromVars);

    const scrollTriggerConfig: ScrollTrigger.Vars = {
      trigger: element,
      start: 'top 85%',
      end: parallax ? 'bottom top' : undefined,
      toggleActions: scrub ? undefined : 'play none none reverse',
      scrub: scrub ? 1 : false,
      markers: false
    };

    if (parallax) {
      gsap.to(element, {
        y: -100 * parallaxSpeed,
        ease: 'none',
        scrollTrigger: {
          ...scrollTriggerConfig,
          scrub: 1
        }
      });
      
      gsap.to(element, {
        ...toVars,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          scrub: false
        }
      });
    } else {
      gsap.to(element, {
        ...toVars,
        scrollTrigger: scrollTriggerConfig
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration, scrub, parallax, parallaxSpeed, prefersReducedMotion]);

  return (
    <div 
      ref={elementRef}
      className={`relative ${className}`}
      data-testid="premium-scroll-reveal"
    >
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
}

export function StaggerReveal({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  childDelay = 0.3
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const container = containerRef.current;
    const items = container.children;

    gsap.set(items, { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    });

    ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: staggerDelay,
          delay: childDelay,
          ease: 'power3.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [staggerDelay, childDelay, prefersReducedMotion]);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      data-testid="stagger-reveal"
    >
      {children}
    </div>
  );
}
