import { useRef, useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Cpu, Zap, Network, CircuitBoard } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

import sdrAgentImage from '@assets/ai-sdr-agent-optimized.webp';
import customerSupportImage from '@assets/ai-customer-support-optimized.webp';
import dataInsightsImage from '@assets/data-insights-neural-optimized.webp';
import adminAgent from '@assets/stock_images/administrative_assis_da9e94eb.jpg';
import contentStrategistImage from '@assets/ai-content-strategist-optimized.webp';
import complianceAuditor from '@assets/stock_images/legal_compliance_off_78808712.jpg';
import appointmentBooker from '@assets/stock_images/appointment_schedule_97373ecb.jpg';
import realEstateAgent from '@assets/stock_images/real_estate_agent_pr_d5449235.jpg';

const agents = [
  {
    title: "Sales Development Rep",
    metric: "3x conversion lift",
    image: sdrAgentImage,
    slug: "ai-sdr-agent",
    objectPosition: "center"
  },
  {
    title: "Customer Support",
    metric: "90% resolution rate",
    image: customerSupportImage,
    slug: "ai-support-specialist",
    objectPosition: "center"
  },
  {
    title: "Data Insights Analyst",
    metric: "Real-time dashboards",
    image: dataInsightsImage,
    slug: "ai-data-analyst",
    objectPosition: "left center"
  },
  {
    title: "Administrative Agent",
    metric: "50% time reclaimed",
    image: adminAgent,
    slug: "ai-admin-agent",
    objectPosition: "center"
  },
  {
    title: "Content Strategist",
    metric: "10x content velocity",
    image: contentStrategistImage,
    slug: "ai-content-strategist",
    objectPosition: "center"
  },
  {
    title: "Compliance Auditor",
    metric: "GDPR bulletproof",
    image: complianceAuditor,
    slug: "ai-compliance-auditor",
    objectPosition: "center"
  },
  {
    title: "Appointment Booker",
    metric: "20% fewer no-shows",
    image: appointmentBooker,
    slug: "ai-appointment-booker",
    objectPosition: "center"
  },
  {
    title: "Real Estate Specialist",
    metric: "Malta-focused",
    image: realEstateAgent,
    slug: "ai-real-estate-agent",
    objectPosition: "center"
  },
];

function NeuralNetworkBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [nodes, setNodes] = useState<Array<{x: number; y: number; id: number}>>([]);
  
  useEffect(() => {
    const newNodes = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setNodes(newNodes);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4ff4d" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#23AACA" stopOpacity="0.4" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {nodes.map((node, i) => 
        nodes.slice(i + 1).map((target, j) => {
          const distance = Math.sqrt(Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2));
          if (distance < 35) {
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="url(#nodeGradient)"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              />
            );
          }
          return null;
        })
      )}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="3"
          fill="url(#nodeGradient)"
          filter="url(#glow)"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
    </svg>
  );
}

function HexagonGrid() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hexagons" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path 
              d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 100 L56 116 L56 148 L28 164 L0 148 L0 116 Z M0 50 L28 66 L28 98 L0 114 L-28 98 L-28 66 Z M56 50 L84 66 L84 98 L56 114 L28 98 L28 66 Z"
              fill="none" 
              stroke="rgba(196,255,77,0.5)" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
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
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.4, 1],
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

function ScanLine() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <motion.div
      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c4ff4d]/60 to-transparent pointer-events-none"
      style={{ boxShadow: '0 0 20px rgba(196,255,77,0.5), 0 0 40px rgba(196,255,77,0.3)' }}
      initial={{ top: '-2px', opacity: 0 }}
      animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
    />
  );
}

function ConcentricRings() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {[1, 2, 3, 4].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-[#c4ff4d]/10"
          style={{
            width: ring * 250,
            height: ring * 250,
            top: `calc(50% - ${ring * 125}px)`,
            left: `calc(50% - ${ring * 125}px)`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 4 + ring,
            repeat: Infinity,
            delay: ring * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function HireAIEmployeesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const particles = [
    { delay: 0, duration: 6, size: 4, left: '10%', top: '20%', color: 'rgba(196,255,77,0.6)' },
    { delay: 1, duration: 8, size: 6, left: '85%', top: '15%', color: 'rgba(35,170,202,0.5)' },
    { delay: 2, duration: 7, size: 3, left: '70%', top: '70%', color: 'rgba(196,255,77,0.4)' },
    { delay: 0.5, duration: 9, size: 5, left: '20%', top: '80%', color: 'rgba(35,170,202,0.6)' },
    { delay: 1.5, duration: 6, size: 4, left: '50%', top: '10%', color: 'rgba(196,255,77,0.5)' },
    { delay: 3, duration: 7, size: 5, left: '30%', top: '50%', color: 'rgba(74,222,128,0.4)' },
    { delay: 2.5, duration: 8, size: 3, left: '90%', top: '60%', color: 'rgba(196,255,77,0.3)' },
    { delay: 4, duration: 6, size: 4, left: '5%', top: '45%', color: 'rgba(35,170,202,0.4)' },
  ];

  return (
    <section 
      className="relative py-12 lg:py-16 overflow-hidden" 
      data-testid="section-ai-workforce-agents"
    >
      {/* Premium Dark Base */}
      <div className="absolute inset-0 bg-[#030305]" />
      
      {/* Subtle radial gradient - lime accent */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 30%, rgba(196,255,77,0.05) 0%, transparent 60%)'
        }}
      />
      
      {/* Neural Network Background */}
      <NeuralNetworkBackground />
      
      {/* Hexagon Grid Pattern */}
      <HexagonGrid />
      
      {/* Premium Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196,255,77,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,255,77,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>
      
      {/* Concentric Rings */}
      <ConcentricRings />
      
      {/* Scan Line Effect */}
      <ScanLine />
      
      {/* Premium Gradient Orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,255,77,0.15) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(35,170,202,0.12) 0%, transparent 70%)' }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      
      {/* Subtle floating tech icons - only visible on desktop */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute top-[30%] left-[8%] text-[#c4ff4d]/10 hidden lg:block"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Cpu className="w-6 h-6" />
        </motion.div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] backdrop-blur-md rounded-full border border-[#c4ff4d]/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-[#c4ff4d]"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 font-medium">Hire Our AI</span>
          </motion.div>
          
          <h2 
            className="font-bold text-white mb-4 uppercase tracking-[0.08em]" 
            data-testid="text-workforce-agents-heading" 
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">AI Workforce</span>
            <span className="bg-gradient-to-r from-[#c4ff4d] to-[#4ade80] bg-clip-text text-transparent ml-3">Agents</span>
          </h2>
          <p 
            className="font-medium text-white/80 mb-3" 
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)', letterSpacing: '-0.01em', lineHeight: '1.3' }}
          >
            Ready-made AI employees that work 24/7.
          </p>
          <p className="text-xs text-white/40 max-w-lg mx-auto leading-relaxed">
            Hire production-tested agents to handle sales, support, operations—no training required.
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
          {agents.map((agent, index) => (
            <Link 
              key={index} 
              href={`/services/${agent.slug}`}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start group"
              data-testid={`agent-card-${agent.slug}`}
            >
              <motion.div 
                className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] rounded-lg border border-white/5 hover:border-[#c4ff4d]/30 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={agent.image}
                  alt={agent.title}
                  className="w-full h-full object-cover opacity-80 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
                  style={{ objectPosition: agent.objectPosition }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#c4ff4d]/10 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4ff4d]/80 mb-2 font-medium">
                    {agent.metric}
                  </p>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {agent.title}
                  </h3>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#c4ff4d]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/services/ai-workforce-agents">
            <button 
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#c4ff4d] to-[#a8e636] text-black text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff4d]/25 rounded-sm"
              data-testid="button-explore-workforce"
            >
              <span>Meet All Agents</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
