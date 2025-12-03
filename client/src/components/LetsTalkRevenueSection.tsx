import { useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, TrendingUp, BarChart3, Rocket, DollarSign } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

import leadGenImage from '@assets/stock_images/lead_generation_qual_b9d50c93.jpg';
import customerAcquisitionImage from '@assets/stock_images/customer_acquisition_38bd9c1d.jpg';
import funnelOptimizationImage from '@assets/stock_images/sales_funnel_optimiz_42aebf8c.jpg';
import marketingAutomationImage from '@assets/stock_images/marketing_automation_630ae165.jpg';
import ideaValidationImage from '@assets/stock_images/startup_idea_validat_9b100223.jpg';

const services = [
  {
    title: "Lead Generation Engine",
    metric: "3x qualified leads",
    image: leadGenImage,
    slug: "lead-generation-engine"
  },
  {
    title: "Customer Acquisition",
    metric: "40% lower CAC",
    image: customerAcquisitionImage,
    slug: "customer-acquisition-accelerator"
  },
  {
    title: "Funnel Optimization",
    metric: "2.5x conversion",
    image: funnelOptimizationImage,
    slug: "funnel-optimization-agent"
  },
  {
    title: "Marketing Automation",
    metric: "85% time saved",
    image: marketingAutomationImage,
    slug: "marketing-automation-suite"
  },
  {
    title: "Idea Validation",
    metric: "10x faster testing",
    image: ideaValidationImage,
    slug: "idea-validation-engine"
  },
];

function DataFlowLines() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none">
      <defs>
        <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#23AACA" stopOpacity="0" />
          <stop offset="50%" stopColor="#23AACA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#23AACA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c4ff4d" stopOpacity="0" />
          <stop offset="50%" stopColor="#c4ff4d" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c4ff4d" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Flowing Data Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.path
          key={i}
          d={`M 0 ${15 + i * 15} Q 25 ${10 + i * 15 + (i % 2 === 0 ? 5 : -5)} 50 ${15 + i * 15} T 100 ${15 + i * 15}`}
          fill="none"
          stroke={i % 2 === 0 ? "url(#flowGradient1)" : "url(#flowGradient2)"}
          strokeWidth="1"
          strokeDasharray="10,20"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ 
            duration: 8 + i * 2, 
            repeat: Infinity, 
            ease: 'linear',
            delay: i * 0.5
          }}
        />
      ))}
    </svg>
  );
}

function GrowthChart() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[200px] overflow-hidden opacity-10">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#23AACA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#23AACA" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 50 L0 40 Q10 38 15 35 T30 28 T45 22 T60 15 T75 8 T90 5 T100 3 L100 50 Z"
          fill="url(#chartGradient)"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <motion.path
          d="M0 40 Q10 38 15 35 T30 28 T45 22 T60 15 T75 8 T90 5 T100 3"
          fill="none"
          stroke="#23AACA"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        />
      </svg>
    </div>
  );
}

function FloatingMetric({ value, label, top, left, delay }: { 
  value: string; 
  label: string;
  top: string;
  left: string;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <motion.div
      className="absolute hidden lg:flex flex-col items-center px-4 py-3 bg-white/[0.02] backdrop-blur-sm rounded-lg border border-white/5"
      style={{ top, left }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0.3, 0.6, 0.3], y: [-5, 5, -5] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <span className="text-lg font-bold text-[#23AACA]">{value}</span>
      <span className="text-[8px] uppercase tracking-wider text-white/40">{label}</span>
    </motion.div>
  );
}

function PulsingRings() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <div className="absolute top-1/2 right-[10%] -translate-y-1/2 pointer-events-none hidden lg:block">
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-[#23AACA]/15"
          style={{
            width: ring * 150,
            height: ring * 150,
            top: `calc(50% - ${ring * 75}px)`,
            left: `calc(50% - ${ring * 75}px)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + ring,
            repeat: Infinity,
            delay: ring * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-[#23AACA]"
        style={{ top: 'calc(50% - 8px)', left: 'calc(50% - 8px)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}

function FloatingParticle({ delay, duration, size, left, top, color }: { 
  delay: number; 
  duration: number; 
  size: number;
  left: string;
  top: string;
  color: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: color,
        boxShadow: `0 0 ${size * 3}px ${color}`,
      }}
      animate={{
        y: [-15, 15, -15],
        x: [-8, 8, -8],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function LetsTalkRevenueSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const particles = [
    { delay: 0, duration: 7, size: 5, left: '15%', top: '25%', color: 'rgba(35,170,202,0.5)' },
    { delay: 1.5, duration: 8, size: 4, left: '80%', top: '20%', color: 'rgba(196,255,77,0.4)' },
    { delay: 2, duration: 6, size: 6, left: '65%', top: '75%', color: 'rgba(35,170,202,0.6)' },
    { delay: 0.5, duration: 9, size: 3, left: '25%', top: '85%', color: 'rgba(196,255,77,0.5)' },
    { delay: 3, duration: 7, size: 5, left: '45%', top: '15%', color: 'rgba(35,170,202,0.4)' },
    { delay: 2.5, duration: 8, size: 4, left: '8%', top: '55%', color: 'rgba(35,170,202,0.3)' },
    { delay: 4, duration: 6, size: 5, left: '92%', top: '45%', color: 'rgba(196,255,77,0.4)' },
  ];

  return (
    <section 
      className="relative py-16 lg:py-24 overflow-hidden" 
      data-testid="section-ai-revenue-engine"
    >
      {/* Premium Dark Base with Blue Tint */}
      <div className="absolute inset-0 bg-[#020308]" />
      
      {/* Sophisticated Radial Gradient - Bottom Focus */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 120% 70% at 50% 100%, rgba(35,170,202,0.1) 0%, rgba(196,255,77,0.03) 35%, transparent 65%)'
        }}
      />
      
      {/* Top Accent Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(35,170,202,0.05) 0%, transparent 45%)'
        }}
      />
      
      {/* Data Flow Lines Animation */}
      <DataFlowLines />
      
      {/* Growth Chart Background */}
      <GrowthChart />
      
      {/* Premium Grid with Teal */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(35,170,202,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(35,170,202,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Diagonal Lines Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(35,170,202,0.3) 40px,
            rgba(35,170,202,0.3) 41px
          )`
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>
      
      {/* Pulsing Rings */}
      <PulsingRings />
      
      {/* Floating Metrics */}
      <FloatingMetric value="+340%" label="Revenue" top="20%" left="5%" delay={0} />
      <FloatingMetric value="2.4x" label="ROAS" top="70%" left="88%" delay={1.5} />
      
      {/* Premium Gradient Orbs */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(35,170,202,0.18) 0%, transparent 65%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,255,77,0.08) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      
      {/* Diagonal Accent Lines */}
      <div className="absolute top-0 left-[25%] w-[2px] h-[350px] bg-gradient-to-b from-[#23AACA]/40 via-[#c4ff4d]/20 to-transparent transform -rotate-[15deg] origin-top" />
      <div className="absolute bottom-0 right-[20%] w-[2px] h-[250px] bg-gradient-to-t from-[#23AACA]/50 via-[#23AACA]/20 to-transparent transform rotate-[20deg] origin-bottom" />
      
      {/* Corner Accents */}
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-4 left-4 w-16 h-[1px] bg-gradient-to-r from-[#23AACA]/60 to-transparent" />
        <div className="absolute bottom-4 left-4 w-[1px] h-16 bg-gradient-to-t from-[#23AACA]/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-4 right-4 w-16 h-[1px] bg-gradient-to-l from-[#c4ff4d]/40 to-transparent" />
        <div className="absolute bottom-4 right-4 w-[1px] h-16 bg-gradient-to-t from-[#c4ff4d]/40 to-transparent" />
      </div>
      
      {/* Tech Icons Floating */}
      {!prefersReducedMotion && (
        <>
          <motion.div 
            className="absolute top-[25%] right-[8%] text-[#23AACA]/15"
            animate={{ y: [-5, 5, -5], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <TrendingUp className="w-10 h-10" />
          </motion.div>
          <motion.div 
            className="absolute bottom-[30%] left-[6%] text-[#23AACA]/20"
            animate={{ y: [5, -5, 5], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <BarChart3 className="w-8 h-8" />
          </motion.div>
          <motion.div 
            className="absolute top-[15%] left-[12%] text-[#c4ff4d]/10"
            animate={{ y: [-8, 8, -8], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <DollarSign className="w-12 h-12" />
          </motion.div>
        </>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-md rounded-full border border-[#23AACA]/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#23AACA]"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">Automated Growth Systems</span>
          </motion.div>
          
          <h2 
            className="font-bold text-white mb-4 uppercase tracking-[0.12em]" 
            data-testid="text-revenue-engine-heading" 
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">Revenue</span>
            <span className="bg-gradient-to-r from-[#23AACA] to-[#4ade80] bg-clip-text text-transparent ml-3">Automation</span>
          </h2>
          <p 
            className="font-medium text-white/80 mb-4" 
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', letterSpacing: '-0.01em', lineHeight: '1.3' }}
          >
            Growth systems that run while you sleep.
          </p>
          <p className="text-sm text-white/40 max-w-xl mx-auto leading-relaxed">
            End-to-end automation engines that optimize pipelines, acquire customers, and validate ideas on autopilot.
          </p>
        </motion.div>

        <motion.div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={`/services/${service.slug}`}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start group"
              data-testid={`revenue-card-${index}`}
            >
              <motion.div 
                className="relative aspect-[3/4] overflow-hidden bg-[#080810] rounded-lg border border-white/5 hover:border-[#23AACA]/30 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#23AACA]/10 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#23AACA]/80 mb-2 font-medium">
                    {service.metric}
                  </p>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#23AACA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/services/ai-revenue-engine">
            <button 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#23AACA] to-[#1a8fa8] text-white text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:shadow-lg hover:shadow-[#23AACA]/25 rounded-sm"
              data-testid="button-explore-revenue-engine"
            >
              <span>Explore Revenue Engine</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
