import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
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
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.4 + 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    };
  }, []);

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle, isNearMouse: boolean) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    
    const baseOpacity = particle.opacity;
    const glowOpacity = isNearMouse ? Math.min(baseOpacity * 2, 1) : baseOpacity;
    ctx.globalAlpha = glowOpacity;
    
    // Lime green brand color (#c4ff4d)
    const limeColor = `rgba(196, 255, 77, ${glowOpacity})`;
    
    // Add glow effect when near mouse
    if (isNearMouse) {
      ctx.shadowColor = 'rgba(196, 255, 77, 0.8)';
      ctx.shadowBlur = 15;
    }
    
    ctx.fillStyle = limeColor;
    ctx.strokeStyle = limeColor;
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
      
      // Initialize particles - always visible like Google Antigravity
      const particleCount = Math.floor((rect.width * rect.height) / 8000);
      particlesRef.current = Array.from({ length: Math.min(particleCount, 150) }, () => 
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
        const activationRadius = 150;
        const isNearMouse = mouseRef.current.active && distance < activationRadius;

        // Apply mouse repulsion when near
        if (isNearMouse) {
          const force = (1 - distance / activationRadius) * 2;
          particle.vx += (dx / distance) * force * 0.3;
          particle.vy += (dy / distance) * force * 0.3;
        }

        // Apply friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Add slight random movement for constant floating effect
        particle.vx += (Math.random() - 0.5) * 0.05;
        particle.vy += (Math.random() - 0.5) * 0.05;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x < -20) particle.x = rect.width + 20;
        if (particle.x > rect.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = rect.height + 20;
        if (particle.y > rect.height + 20) particle.y = -20;

        drawParticle(ctx, particle, isNearMouse);
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
