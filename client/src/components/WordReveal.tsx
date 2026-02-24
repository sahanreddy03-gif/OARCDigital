import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  highlightWords?: string[];
  highlightClassName?: string;
}

export default function WordReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.06,
  tag: Tag = 'h2',
  highlightWords = [],
  highlightClassName = 'text-[#e8ffb0]',
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px', amount: 0.3 });

  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : delay,
      },
    },
  };

  const wordVariant = {
    hidden: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={container}
      aria-label={text}
    >
      <Tag className={className} style={{ display: 'inline' }}>
        {words.map((word, i) => {
          const isHighlighted = highlightWords.some(
            (hw) => word.toLowerCase().replace(/[^a-z]/g, '') === hw.toLowerCase()
          );
          return (
            <motion.span
              key={i}
              variants={wordVariant}
              className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
              style={{ marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          );
        })}
      </Tag>
    </motion.div>
  );
}