import { motion, type HTMLMotionProps } from 'framer-motion';
import { useRef, useState } from 'react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  goldHover?: boolean;
}

export default function GlassCard({ children, className = '', tilt = true, goldHover = true, ...props }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 8);
    setRotateY(x * 8);
  };

  const handlePointerLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`pj-glass ${goldHover ? 'transition-all duration-300' : ''} ${className}`}
      style={{
        transform: tilt ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
        transition: 'transform 0.15s ease-out',
        ...(props.style || {}),
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={goldHover ? { borderColor: 'rgba(196,148,30,0.3)' } : undefined}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
