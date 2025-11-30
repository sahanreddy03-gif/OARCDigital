import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedGridBackgroundProps {
  className?: string;
  gridOpacity?: number;
  showScanLine?: boolean;
  showParticles?: boolean;
  showConcentricRings?: boolean;
  showDiagonalGrid?: boolean;
  intensity?: 'subtle' | 'medium' | 'high';
}

export function AnimatedGridBackground({ 
  className = '', 
  gridOpacity,
  showScanLine = true,
  showParticles = true,
  showConcentricRings = true,
  showDiagonalGrid = true,
  intensity = 'high'
}: AnimatedGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const opacityMap = {
    subtle: 0.03,
    medium: 0.05,
    high: 0.08
  };

  const effectiveOpacity = gridOpacity ?? opacityMap[intensity];

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

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      connections: number[];
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.2,
        connections: []
      });
    }

    let animationId: number;
    const maxConnectionDistance = 150;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            const opacity = (1 - distance / maxConnectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        const glowSize = p.size * 3;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
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
      {/* Base Dark Gradient - Deep space feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

      {/* Primary Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,${effectiveOpacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,${effectiveOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Secondary Diagonal Grid - Adds depth */}
      {showDiagonalGrid && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,${effectiveOpacity * 0.3}) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,${effectiveOpacity * 0.3}) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      )}

      {/* Multiple Radial Glows - Energy Cores */}
      <div className="absolute inset-0">
        {/* Central energy core */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)'
          }}
        />
        {/* Top accent */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(255,255,255,0.04) 0%, transparent 70%)'
          }}
        />
        {/* Bottom accent */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(255,255,255,0.02) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Concentric Rings - Neural network feel */}
      {showConcentricRings && (
        <div className="absolute inset-0 flex items-center justify-center motion-reduce:hidden">
          {[1, 2, 3, 4].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-white/[0.03]"
              style={{
                width: `${ring * 200}px`,
                height: `${ring * 200}px`,
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + ring,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: ring * 0.5
              }}
            />
          ))}
        </div>
      )}

      {/* Scan Line Effect - More visible */}
      {showScanLine && (
        <>
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent motion-reduce:hidden"
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent motion-reduce:hidden"
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
              delay: 2
            }}
          />
        </>
      )}

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Particles Canvas with connections */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 motion-reduce:hidden"
          style={{ opacity: 0.8 }}
        />
      )}

      {/* Vignette Effect - Adds depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}
      />
    </div>
  );
}

export default AnimatedGridBackground;
