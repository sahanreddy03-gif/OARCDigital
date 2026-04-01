import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetOpacity: number;
  glowIntensity: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'dot' | 'line' | 'triangle' | 'square';
}

export default function AntigravityParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const animationRef = useRef<number>();

  const createParticle = useCallback((width: number, height: number): Particle => {
    const shapes: Particle['shape'][] = ['dot', 'line', 'triangle', 'square'];
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      size: Math.random() * 4 + 2,
      opacity: 0,
      targetOpacity: 0,
      glowIntensity: 0,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    };
  }, []);

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle) => {
    if (particle.opacity < 0.01) return;
    
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.globalAlpha = particle.opacity;
    
    // Dark green color with glow (#0A2818)
    const darkGreenColor = `rgba(10, 40, 24, ${particle.opacity})`;
    const glowColor = `rgba(20, 80, 48, ${particle.glowIntensity * 0.6})`;
    
    // Add glow effect
    if (particle.glowIntensity > 0.1) {
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 18 * particle.glowIntensity;
    }
    
    ctx.fillStyle = darkGreenColor;
    ctx.strokeStyle = darkGreenColor;
    ctx.lineWidth = 1.5;

    const s = particle.size;
    
    switch (particle.shape) {
      case 'dot':
        ctx.beginPath();
        ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'line':
        ctx.beginPath();
        ctx.moveTo(-s, 0);
        ctx.lineTo(s, 0);
        ctx.stroke();
        break;
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(s * 0.866, s * 0.5);
        ctx.lineTo(-s * 0.866, s * 0.5);
        ctx.closePath();
        ctx.stroke();
        break;
      case 'square':
        ctx.strokeRect(-s / 2, -s / 2, s, s);
        break;
    }
    
    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      // Initialize particles - dormant until hover
      const particleCount = Math.floor((rect.width * rect.height) / 6000);
      particlesRef.current = Array.from({ length: Math.min(particleCount, 200) }, () => 
        createParticle(rect.width, rect.height)
      );
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
          active: true
        };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particlesRef.current.forEach((particle) => {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const activationRadius = 200;

        // Only activate particles near cursor
        if (mouseRef.current.active && distance < activationRadius) {
          // Pop into view with glow
          const proximity = 1 - distance / activationRadius;
          particle.targetOpacity = 0.3 + proximity * 0.7;
          particle.glowIntensity = proximity;
          
          // Repulsion from cursor
          const force = proximity * 3;
          particle.vx += (dx / distance) * force * 0.2;
          particle.vy += (dy / distance) * force * 0.2;
        } else {
          // Fade out when not near cursor
          particle.targetOpacity = 0;
          particle.glowIntensity *= 0.95;
        }

        // Smooth opacity transition
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.1;

        // Apply friction
        particle.vx *= 0.92;
        particle.vy *= 0.92;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x < -20) particle.x = rect.width + 20;
        if (particle.x > rect.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = rect.height + 20;
        if (particle.y > rect.height + 20) particle.y = -20;

        drawParticle(ctx, particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticle, drawParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: 'none' }}
      data-testid="canvas-antigravity-particles"
    />
  );
}
