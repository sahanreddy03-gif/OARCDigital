import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedGridBackgroundProps {
  className?: string;
  gridOpacity?: number;
  showScanLine?: boolean;
  showParticles?: boolean;
}

export function AnimatedGridBackground({ 
  className = '', 
  gridOpacity = 0.03,
  showScanLine = true,
  showParticles = true 
}: AnimatedGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!showParticles) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [showParticles]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,${gridOpacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,${gridOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      {/* Scan Line Effect */}
      {showScanLine && (
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent motion-reduce:hidden"
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      )}

      {/* Floating Particles Canvas */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 motion-reduce:hidden"
          style={{ opacity: 0.6 }}
        />
      )}
    </div>
  );
}

export default AnimatedGridBackground;
