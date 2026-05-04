"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const salesAgentAvatar = "/attached_assets/Sales_1768204442839.png";
const customerSupportAvatar = "/attached_assets/Customer_support_specalist_1768204442837.png";
const operationsAgentAvatar = "/attached_assets/Man_Avatar_8_1768204442838.png";
const supportAgentAvatar = "/attached_assets/Untitled_1768204442839.png";
const followupAgentAvatar = "/attached_assets/Follow_up_1768204442837.png";
const complianceAuditor = "/attached_assets/stock_images/legal_compliance_off_78808712.jpg";
const bookingsAgentAvatar = "/attached_assets/bookings_1768204442836.png";
const businessDevAvatar = "/attached_assets/Business_development_manager_1768204442837.png";

const agents = [
  {
    title: "Sales Development Rep",
    metric: "3x conversion lift",
    image: salesAgentAvatar,
    slug: "ai-sdr-agent",
    objectPosition: "center",
    alt: "AI Sales Development Rep - OARC Digital Malta AI agency automated lead qualification"
  },
  {
    title: "Customer Support",
    metric: "90% resolution rate",
    image: customerSupportAvatar,
    slug: "ai-support-specialist",
    objectPosition: "center",
    alt: "AI Customer Support Specialist - OARC Digital Malta AI agency customer service automation"
  },
  {
    title: "Data Insights Analyst",
    metric: "Real-time dashboards",
    image: operationsAgentAvatar,
    slug: "ai-data-analyst",
    objectPosition: "center",
    alt: "AI Data Insights Analyst - OARC Digital Malta AI agency real-time analytics"
  },
  {
    title: "Administrative Agent",
    metric: "50% time reclaimed",
    image: supportAgentAvatar,
    slug: "ai-admin-agent",
    objectPosition: "center",
    alt: "AI Administrative Agent - OARC Digital Malta AI agency workflow automation"
  },
  {
    title: "Content Strategist",
    metric: "10x content velocity",
    image: followupAgentAvatar,
    slug: "ai-content-strategist",
    objectPosition: "center",
    alt: "AI Content Strategist - OARC Digital Malta AI agency content creation"
  },
  {
    title: "Compliance Auditor",
    metric: "GDPR bulletproof",
    image: complianceAuditor,
    slug: "ai-compliance-auditor",
    objectPosition: "center",
    alt: "AI Compliance Auditor - OARC Digital Malta AI agency GDPR compliance automation"
  },
  {
    title: "Appointment Booker",
    metric: "20% fewer no-shows",
    image: bookingsAgentAvatar,
    slug: "ai-appointment-booker",
    objectPosition: "center",
    alt: "AI Appointment Booker - OARC Digital Malta AI agency scheduling automation"
  },
  {
    title: "Business Development",
    metric: "50+ leads/month",
    image: businessDevAvatar,
    slug: "ai-business-development",
    objectPosition: "center",
    alt: "AI Business Development Agent - OARC Digital Malta AI agency growth strategies"
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
  const [activeIndex, setActiveIndex] = useState(0);
  
  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.snap-start')?.clientWidth || 220;
    const gap = 16;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth'
    });
  }, []);
  
  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : agents.length - 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };
  
  const handleNext = () => {
    const newIndex = activeIndex < agents.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };
  
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.snap-start')?.clientWidth || 220;
    const gap = 16;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < agents.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex]);
  
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    scrollElement.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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

        {/* Native scroll-snap carousel - smooth touch/swipe */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {agents.map((agent, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[240px] snap-start"
            >
              <Link 
                href={`/services/${agent.slug}`}
                className="block group touch-manipulation"
                data-testid={`agent-card-${agent.slug}-${index}`}
              >
                <div 
                  className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] rounded-lg border border-white/5 hover:border-[#c4ff4d]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.98]"
                >
                  <img
                    src={agent.image}
                    alt={agent.alt}
                    className="w-full h-full object-contain object-center opacity-80 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#c4ff4d]/10 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#c4ff4d]/80 mb-1.5 sm:mb-2 font-medium">
                      {agent.metric}
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {agent.title}
                    </h3>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#c4ff4d]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Bottom Navigation - Arrows & Dots */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-9 h-9 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 hover:text-[#c4ff4d] hover:border-[#c4ff4d]/40 hover:bg-white/10 transition-all duration-200"
            data-testid="button-agents-prev"
            aria-label="Previous agent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5">
            {agents.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#c4ff4d] w-5' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to agent ${index + 1}`}
                data-testid={`dot-agents-${index}`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className="w-9 h-9 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 hover:text-[#c4ff4d] hover:border-[#c4ff4d]/40 hover:bg-white/10 transition-all duration-200"
            data-testid="button-agents-next"
            aria-label="Next agent"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/services/hire-ai-employees">
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
