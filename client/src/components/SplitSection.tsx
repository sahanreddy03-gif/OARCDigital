import PhoneMockup from "./PhoneMockup";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function NeonGreenGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
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
    }

    const particles: Particle[] = [];
    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationId: number;
    const maxConnectionDistance = 120;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            const opacity = (1 - distance / maxConnectionDistance) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(196, 255, 77, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 255, 77, ${p.opacity})`;
        ctx.fill();

        const glowSize = p.size * 4;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
        gradient.addColorStop(0, `rgba(196, 255, 77, ${p.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(196, 255, 77, 0)');
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
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#0a1a0f] to-zinc-950" />

      {/* Neon green grid lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196, 255, 77, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 255, 77, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Secondary diagonal grid for 3D depth */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(196, 255, 77, 0.02) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(196, 255, 77, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Radial glow center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(196, 255, 77, 0.08) 0%, transparent 70%)'
        }}
      />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] motion-reduce:hidden"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(196, 255, 77, 0.5), transparent)'
        }}
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full motion-reduce:hidden"
        style={{ opacity: 0.9 }}
      />

      {/* Vignette for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)'
        }}
      />
    </div>
  );
}

export default function SplitSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Animated neon green grid background */}
      <NeonGreenGridBackground />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <p 
              className="text-xs uppercase tracking-wider font-black"
              style={{ color: '#c4ff4d' }}
            >
              The results-driven, social-first agency you've been waiting for
            </p>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight leading-[0.95] text-white">
              Creative that <span className="italic font-black" style={{ color: '#c4ff4d' }}>clicks</span>
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              We blend creative and performance. We turn data and trends into campaigns that matter — helping brands stand out, connect with customers, and build social media that makes a difference. Every idea is designed to win attention, spark engagement, and convert into real revenue.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
