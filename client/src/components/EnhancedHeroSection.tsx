import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "wouter";
import oarcLogo from "@assets/IMG_8813_(1)_1764796694787.png";

// Import work showcase images from case studies
import colorfulDashboardImg from '@assets/generated_images/colorful_analytics_dashboard_laptop.png';
import colorfulRealEstateImg from '@assets/generated_images/colorful_real_estate_property_showcase.png';
import colorfulSalesTeamImg from '@assets/generated_images/vibrant_sales_team_celebrating.png';
import colorfulGymImg from '@assets/generated_images/colorful_modern_gym_interior.png';
import colorfulPerfumeImg from '@assets/generated_images/colorful_luxury_perfume_product.png';
import colorfulBeautyImg from '@assets/generated_images/colorful_natural_beauty_products.png';

// Work showcase data
const workShowcase = [
  { id: 1, image: colorfulDashboardImg, platform: "Analytics", metric: "+340% Growth", type: "image" },
  { id: 2, image: colorfulRealEstateImg, platform: "Real Estate", metric: "94% Faster", type: "image" },
  { id: 3, image: colorfulSalesTeamImg, platform: "Sales Automation", metric: "10x Pipeline", type: "image" },
  { id: 4, image: colorfulGymImg, platform: "Fitness Brand", metric: "+520% Reach", type: "image" },
  { id: 5, image: colorfulPerfumeImg, platform: "Luxury Campaign", metric: "5.2x ROAS", type: "image" },
  { id: 6, image: colorfulBeautyImg, platform: "Beauty Brand", metric: "+85% Sales", type: "image" },
];

// Code lines for terminal animation
const codeLines = [
  "// AI Optimization Engine",
  "const analyzer = new ContentAnalyzer();",
  "const insights = analyzer.process(creative);",
  "",
  "insights.optimize({",
  "  target: 'revenue',",
  "  improve: '3x ROAS'",
  "});",
  "",
  "// Result: +340% performance"
];

// Metrics data for right side
const metricsData = [
  { label: "Engagement Rate", target: 340, suffix: "%" },
  { label: "Conversion Optimization", target: 275, suffix: "%" },
  { label: "ROAS Improvement", target: 310, suffix: "%" },
];

// Custom hook for reduced motion preference
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
}

// Custom hook for mouse parallax
function useMouseParallax() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>();
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);
  
  return mousePosition;
}

// Particle class for canvas animation
class Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  speed: number;
  color: string;
  trail: { x: number; y: number }[];
  maxTrail: number;
  
  constructor(side: 'creative' | 'ai', canvasWidth: number, canvasHeight: number) {
    if (side === 'creative') {
      this.x = Math.random() * (canvasWidth * 0.4);
      this.y = Math.random() * canvasHeight;
      this.color = '#FF6B9D';
    } else {
      this.x = canvasWidth * 0.6 + Math.random() * (canvasWidth * 0.4);
      this.y = Math.random() * canvasHeight;
      this.color = '#00FF41';
    }
    
    this.targetX = canvasWidth * 0.5;
    this.targetY = canvasHeight * 0.5;
    this.vx = 0;
    this.vy = 0;
    this.size = 2 + Math.random() * 2;
    this.life = 1.0;
    this.maxLife = 1.0;
    this.speed = 0.02 + Math.random() * 0.02;
    this.trail = [];
    this.maxTrail = 8;
  }
  
  update() {
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    
    this.vx += dx * this.speed;
    this.vy += dy * this.speed;
    this.vx *= 0.95;
    this.vy *= 0.95;
    
    this.x += this.vx;
    this.y += this.vy;
    
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > this.maxTrail) {
      this.trail.shift();
    }
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 30) {
      this.life -= 0.05;
    }
    this.life -= 0.002;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    if (this.life <= 0) return;
    
    ctx.globalAlpha = this.life * 0.6;
    
    if (this.trail.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.size * 0.4;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      
      for (let i = 0; i < this.trail.length; i++) {
        const point = this.trail[i];
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      }
      ctx.stroke();
    }
    
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 12;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  }
}

// Particle Field Component
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const spawnIntervalRef = useRef<NodeJS.Timeout>();
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const MAX_PARTICLES = isMobile ? 150 : 400;
    const SPAWN_RATE = isMobile ? 200 : 100;
    let spawnFromCreative = true;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    spawnIntervalRef.current = setInterval(() => {
      if (particlesRef.current.length < MAX_PARTICLES) {
        const side = spawnFromCreative ? 'creative' : 'ai';
        particlesRef.current.push(new Particle(side, canvas.width, canvas.height));
        spawnFromCreative = !spawnFromCreative;
      }
    }, SPAWN_RATE);
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        particle.update();
        
        if (particle.life > 0) {
          particle.draw(ctx);
        } else {
          particlesRef.current.splice(i, 1);
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);
      particlesRef.current = [];
    };
  }, [prefersReducedMotion, isMobile]);
  
  if (prefersReducedMotion) return null;
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      data-testid="particle-canvas"
    />
  );
}

// Background Layers with Parallax
function BackgroundLayers({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const prefersReducedMotion = useReducedMotion();
  
  const getTransform = (multiplier: number) => {
    if (prefersReducedMotion) return 'translate(0, 0)';
    return `translate(${mousePosition.x * multiplier}px, ${mousePosition.y * multiplier}px)`;
  };
  
  return (
    <>
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(255,107,157,0.04), transparent 50%)',
          transform: getTransform(20)
        }}
      />
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at 80% 50%, rgba(0,255,65,0.04), transparent 50%)',
          transform: getTransform(40)
        }}
      />
      <div 
        className="absolute inset-0 transition-transform duration-200 ease-out"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.05), transparent 70%)',
          transform: getTransform(60)
        }}
      />
    </>
  );
}

// Work Card Component
function WorkCard({ item, index }: { item: typeof workShowcase[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const gridStyles = useMemo(() => {
    const styles: Record<number, string> = {
      0: 'aspect-square',
      1: 'aspect-[1/1.3] row-span-2',
      2: 'aspect-square',
      3: 'aspect-square',
      4: 'col-span-2 aspect-[2/1]',
      5: 'aspect-square',
    };
    return styles[index] || 'aspect-square';
  }, [index]);
  
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden bg-white shadow-lg cursor-pointer ${gridStyles}`}
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)' }}
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -100, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        scale: 1,
        y: prefersReducedMotion ? 0 : (isHovered ? -12 : [0, -8, 0])
      }}
      transition={{ 
        duration: prefersReducedMotion ? 0.3 : 0.8, 
        delay: prefersReducedMotion ? 0 : (0.3 + index * 0.1),
        y: prefersReducedMotion ? { duration: 0 } : (isHovered ? { duration: 0.3 } : { duration: 4, repeat: Infinity, delay: index * 0.5 })
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 24px 60px rgba(255,107,157,0.2), 0 8px 20px rgba(0,0,0,0.1)',
        zIndex: 10
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      data-testid={`work-card-${item.id}`}
      tabIndex={0}
      role="button"
      aria-label={`View ${item.platform} project details`}
    >
      <img 
        src={item.image} 
        alt={item.platform}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        loading="lazy"
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-4 text-white z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-white/90">
          {item.platform}
        </p>
        <p className="text-lg font-bold" style={{ color: '#c4ff4d' }}>
          {item.metric}
        </p>
      </motion.div>
    </motion.div>
  );
}

// Creative Side Component
function CreativeShowcase() {
  return (
    <div className="w-full lg:w-[40%] h-auto lg:h-full flex items-center justify-center p-6 lg:p-10">
      <div className="grid grid-cols-2 gap-3 lg:gap-5 max-w-lg lg:max-w-xl w-full">
        {workShowcase.map((item, index) => (
          <WorkCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

// Fusion Zone Component (Center)
function FusionCore() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.8 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };
  
  return (
    <div className="w-full lg:w-[20%] h-auto lg:h-full relative flex flex-col items-center justify-center py-12 lg:py-0 px-4 z-20">
      <motion.div 
        className="absolute left-1/2 top-0 bottom-0 w-[2px] hidden lg:block"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,107,157,0.4) 0%, rgba(139,92,246,0.6) 50%, rgba(0,255,65,0.4) 100%)',
          boxShadow: '0 0 25px rgba(139,92,246,0.5)',
          transform: 'translateX(-50%)'
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
        data-testid="energy-line"
      />
      
      <motion.div 
        className="lg:hidden w-full h-[2px] mb-8"
        style={{
          background: 'linear-gradient(to right, rgba(255,107,157,0.4) 0%, rgba(139,92,246,0.6) 50%, rgba(0,255,65,0.4) 100%)',
          boxShadow: '0 0 25px rgba(139,92,246,0.5)'
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
      />
      
      <motion.div
        ref={ref}
        className="flex flex-col items-center text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.img 
          src={oarcLogo} 
          alt="OARC Digital" 
          className="w-16 h-16 lg:w-20 lg:h-20 mb-6 lg:mb-8 object-contain"
          style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.15))' }}
          variants={itemVariants}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          data-testid="fusion-logo"
        />
        
        <motion.div className="flex flex-col items-center gap-2 lg:gap-3 mb-4 lg:mb-6" variants={itemVariants}>
          <span 
            className="font-black text-transparent bg-clip-text"
            style={{ 
              fontSize: 'clamp(28px, 4vw, 48px)',
              backgroundImage: 'linear-gradient(135deg, #FF6B9D, #C77DFF)',
              lineHeight: 1.1
            }}
            data-testid="creative-text"
          >
            Creative
          </span>
          
          <motion.span 
            className="text-purple-500"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            data-testid="fusion-symbol"
          >
            ×
          </motion.span>
          
          <span 
            className="font-black text-transparent bg-clip-text"
            style={{ 
              fontSize: 'clamp(28px, 4vw, 48px)',
              backgroundImage: 'linear-gradient(135deg, #00FF41, #00D4FF)',
              lineHeight: 1.1
            }}
            data-testid="ai-text"
          >
            AI
          </span>
        </motion.div>
        
        <motion.p 
          className="text-zinc-600 text-center max-w-xs lg:max-w-sm mb-3 lg:mb-4"
          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.6 }}
          variants={itemVariants}
          data-testid="subheadline"
        >
          Where Creativity Meets Revenue
        </motion.p>
        
        <motion.p 
          className="text-zinc-500 text-center max-w-xs lg:max-w-sm mb-6 lg:mb-8"
          style={{ fontSize: 'clamp(12px, 1.2vw, 15px)', lineHeight: 1.5 }}
          variants={itemVariants}
          data-testid="proof-metric"
        >
          We don't just make things look pretty. We engineer content that{' '}
          <strong className="text-orange-500">consistently outperforms</strong>—with{' '}
          <strong className="text-orange-500">3x average ROAS</strong> across 47+ active clients.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link href="/contact">
            <Button 
              className="px-6 lg:px-10 py-5 lg:py-6 text-base lg:text-lg font-bold text-white rounded-xl relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #FF6B35, #C77DFF)',
                boxShadow: '0 8px 24px rgba(255,107,53,0.3), 0 2px 8px rgba(0,0,0,0.1)'
              }}
              data-testid="fusion-cta"
            >
              <span className="relative z-10">Start Creating →</span>
              <span 
                className="absolute inset-0 bg-white/20 scale-0 rounded-full group-hover:scale-150 transition-transform duration-500"
                style={{ transformOrigin: 'center' }}
              />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Code Terminal Component
function CodeTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLines(codeLines);
      return;
    }
    
    const typeCode = () => {
      if (currentLine >= codeLines.length) {
        setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLine(0);
          setCurrentChar(0);
        }, 3000);
        return;
      }
      
      const line = codeLines[currentLine];
      
      if (currentChar <= line.length) {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = line.substring(0, currentChar);
          return newLines;
        });
        
        setCurrentChar(prev => prev + 1);
      } else {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }
    };
    
    const delay = currentChar === 0 ? 300 : 30;
    const timer = setTimeout(typeCode, delay);
    
    return () => clearTimeout(timer);
  }, [currentLine, currentChar, prefersReducedMotion]);
  
  return (
    <motion.div 
      className="rounded-xl p-4 lg:p-5 font-mono text-xs lg:text-sm overflow-hidden"
      style={{
        background: 'rgba(13,17,23,0.85)',
        border: '1px solid rgba(0,255,65,0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 0 40px rgba(0,255,65,0.1)',
        maxHeight: '180px'
      }}
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      data-testid="code-terminal"
    >
      {displayedLines.map((line, idx) => (
        <div 
          key={idx} 
          className="my-1 whitespace-pre"
          style={{ 
            color: line.startsWith('//') ? '#6B7280' : '#00FF41',
            textShadow: line.startsWith('//') ? 'none' : '0 0 10px rgba(0,255,65,0.5)'
          }}
        >
          {line}
        </div>
      ))}
      <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
    </motion.div>
  );
}

// Metric Row Component
function MetricRow({ label, target, suffix, delay }: { label: string; target: number; suffix: string; delay: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (!isInView) return;
    
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }
    
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setValue(Math.floor(current));
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, target, prefersReducedMotion]);
  
  const barWidth = (value / target) * 100;
  
  return (
    <motion.div 
      ref={ref}
      className="flex justify-between items-center py-3 lg:py-4 border-b border-zinc-100 last:border-b-0"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex-1">
        <p className="text-xs lg:text-sm text-zinc-500 font-medium mb-1">{label}</p>
        <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #00FF41, #00D4FF)' }}
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${barWidth}%` : 0 }}
            transition={{ duration: 1.5, delay: delay + 0.2 }}
          />
        </div>
      </div>
      <p className="text-lg lg:text-2xl font-bold text-zinc-900 ml-4">
        {value}{suffix}
      </p>
    </motion.div>
  );
}

// Data Visualization Component
function DataVisualization() {
  return (
    <motion.div 
      className="bg-white rounded-xl p-4 lg:p-5"
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)' }}
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.45 }}
      data-testid="data-visualization"
    >
      {metricsData.map((metric, idx) => (
        <MetricRow 
          key={metric.label}
          label={metric.label}
          target={metric.target}
          suffix={metric.suffix}
          delay={0.5 + idx * 0.15}
        />
      ))}
    </motion.div>
  );
}

// AI Systems Side Component
function AISystems() {
  return (
    <div className="w-full lg:w-[40%] h-auto lg:h-full flex items-center justify-center p-6 lg:p-10">
      <div className="flex flex-col gap-4 lg:gap-6 w-full max-w-lg lg:max-w-xl">
        <CodeTerminal />
        <DataVisualization />
      </div>
    </div>
  );
}

// Main Enhanced Hero Section
export default function EnhancedHeroSection() {
  const mousePosition = useMouseParallax();
  const prefersReducedMotion = useReducedMotion();
  
  const styles = `
    @keyframes energy-pulse {
      0%, 100% { opacity: 0.6; box-shadow: 0 0 20px rgba(139,92,246,0.4); }
      50% { opacity: 1; box-shadow: 0 0 40px rgba(139,92,246,0.6); }
    }
  `;
  
  return (
    <>
      <style>{styles}</style>
      <section 
        className="relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FDFCFA 0%, #F8F7F4 50%, #FDFCFA 100%)'
        }}
        data-testid="hero-split-screen"
      >
        <BackgroundLayers mousePosition={mousePosition} />
        
        <ParticleField />
        
        <div className="sr-only">
          OARC Digital combines creative excellence with AI automation to deliver 
          marketing campaigns that consistently achieve 3x average return on ad spend.
        </div>
        
        <motion.div 
          className="relative z-20 flex flex-col lg:flex-row w-full h-full pt-20 lg:pt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CreativeShowcase />
          
          <FusionCore />
          
          <AISystems />
        </motion.div>
      </section>
    </>
  );
}
