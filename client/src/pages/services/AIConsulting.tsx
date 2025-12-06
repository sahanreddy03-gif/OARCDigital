import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Compass, 
  Hammer, 
  Rocket,
  FileText,
  Table2,
  GitBranch,
  Calculator,
  Presentation,
  MessageCircle,
  AlertTriangle,
  Bot,
  Workflow,
  Code,
  Cog,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Clock,
  Target,
  BarChart3,
  Brain,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { Button } from '@/components/ui/button';

const frameworkPhases = [
  {
    id: 'assess',
    title: 'Assess',
    icon: Search,
    color: '#c4ff4d',
    description: 'Deep-dive analysis of your current operations, tech stack, and AI readiness',
    details: [
      'Business process mapping',
      'Technology stack audit',
      'Team capability assessment',
      'Opportunity identification',
      'Risk evaluation'
    ]
  },
  {
    id: 'design',
    title: 'Design',
    icon: Compass,
    color: '#23AACA',
    description: 'Custom AI strategy and roadmap tailored to your specific business goals',
    details: [
      'AI use case prioritization',
      'Solution architecture',
      'Integration planning',
      'ROI projections',
      'Change management strategy'
    ]
  },
  {
    id: 'build',
    title: 'Build',
    icon: Hammer,
    color: '#ea580c',
    description: 'Implementation of AI solutions with hands-on development and integration',
    details: [
      'Tool selection & setup',
      'Custom AI development',
      'System integrations',
      'Workflow automation',
      'Quality assurance'
    ]
  },
  {
    id: 'deploy',
    title: 'Deploy',
    icon: Rocket,
    color: '#c4ff4d',
    description: 'Launch, training, and ongoing optimization for sustainable AI success',
    details: [
      'Rollout & training',
      'Performance monitoring',
      'Continuous optimization',
      'Team enablement',
      'Ongoing support'
    ]
  }
];

const maturityLevels = [
  {
    level: 0,
    title: 'Manual Processes',
    description: 'Spreadsheets, copy-paste, and human-dependent workflows',
    pain: 'Time-consuming, error-prone, unscalable',
    opportunity: 'Immediate efficiency gains possible',
    timeline: '2-4 weeks to Level 1',
    services: ['Process Audit', 'Quick Wins Identification']
  },
  {
    level: 1,
    title: 'AI Readiness',
    description: 'Understanding where AI fits in your business',
    pain: 'Unclear ROI, competing priorities',
    opportunity: 'Foundation for strategic AI adoption',
    timeline: '4-6 weeks to Level 2',
    services: ['AI Strategy', 'Roadmap Development']
  },
  {
    level: 2,
    title: 'Tool Deployment',
    description: 'Using off-the-shelf AI tools effectively',
    pain: 'Tool sprawl, underutilization',
    opportunity: '10-30% productivity gains',
    timeline: '6-8 weeks to Level 3',
    services: ['Tool Selection', 'Training & Adoption']
  },
  {
    level: 3,
    title: 'AI Workflow Integration',
    description: 'AI embedded in core business processes',
    pain: 'Siloed AI usage, inconsistent results',
    opportunity: '40-60% efficiency improvements',
    timeline: '8-12 weeks to Level 4',
    services: ['Workflow Automation', 'AI Employees']
  },
  {
    level: 4,
    title: 'Custom AI Systems',
    description: 'Proprietary AI solutions as competitive advantage',
    pain: 'Generic solutions limit differentiation',
    opportunity: 'Transformative business capabilities',
    timeline: 'Continuous optimization',
    services: ['Custom AI Development', 'AI Infrastructure']
  }
];

const deliverables = [
  {
    icon: FileText,
    title: 'AI Readiness Assessment',
    type: 'PDF Report',
    description: 'Comprehensive analysis of your current state, gaps, and opportunities',
    color: '#c4ff4d'
  },
  {
    icon: Table2,
    title: 'Tool Evaluation Matrix',
    type: 'Spreadsheet',
    description: 'Side-by-side comparison of AI tools rated against your requirements',
    color: '#23AACA'
  },
  {
    icon: GitBranch,
    title: 'Implementation Roadmap',
    type: 'Visual Diagram',
    description: 'Phased plan with milestones, dependencies, and success metrics',
    color: '#ea580c'
  },
  {
    icon: Calculator,
    title: 'ROI Projections',
    type: 'Financial Model',
    description: 'Investment analysis with projected returns and payback timeline',
    color: '#c4ff4d'
  },
  {
    icon: Presentation,
    title: 'Executive Board Deck',
    type: 'Presentation',
    description: 'Stakeholder-ready presentation for leadership buy-in',
    color: '#23AACA'
  }
];

const timelineWeeks = [
  {
    week: '1-2',
    title: 'Discovery & Assessment',
    activities: [
      'Stakeholder interviews',
      'Process documentation',
      'Technology audit',
      'Team capability mapping'
    ],
    output: 'Current State Report'
  },
  {
    week: '3-4',
    title: 'Strategy & Roadmap',
    activities: [
      'Opportunity prioritization',
      'Solution architecture',
      'ROI modeling',
      'Risk assessment'
    ],
    output: 'Strategic Roadmap'
  },
  {
    week: '5-6',
    title: 'Implementation Plan',
    activities: [
      'Tool selection',
      'Integration planning',
      'Change management',
      'Training curriculum'
    ],
    output: 'Action Plan & Board Deck'
  },
  {
    week: '7+',
    title: 'Ongoing Support',
    activities: [
      'Implementation guidance',
      'Performance reviews',
      'Optimization cycles',
      'Team coaching'
    ],
    output: 'Continuous Improvement'
  }
];

const confusionMessages = [
  { text: '"Use ChatGPT!"', angle: -60, delay: 0 },
  { text: '"Build custom AI!"', angle: -30, delay: 0.2 },
  { text: '"Wait for AGI!"', angle: 0, delay: 0.4 },
  { text: '"Hire an AI team!"', angle: 30, delay: 0.6 },
  { text: '"Do nothing!"', angle: 60, delay: 0.8 }
];

const proofPoints = [
  { metric: '40+', label: 'AI Agents Built', icon: Bot },
  { metric: '$7M+', label: 'Pipeline Automated', icon: TrendingUp },
  { metric: '200+', label: 'Workflows Optimized', icon: Workflow },
  { metric: '95%', label: 'Client Satisfaction', icon: Users }
];

export default function AIConsulting() {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [activeLevel, setActiveLevel] = useState(0);
  const [hoveredDeliverable, setHoveredDeliverable] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePhaseKeyDown = (e: React.KeyboardEvent, phaseId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActivePhase(activePhase === phaseId ? null : phaseId);
    }
  };

  const handleLevelKeyDown = (e: React.KeyboardEvent, level: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveLevel(level);
    }
  };

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.aiConsulting.title}
        description={revenueServicesSEO.aiConsulting.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.aiConsulting.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "AI Consulting Services",
          revenueServicesSEO.aiConsulting.description,
          "AI Strategy & Implementation"
        )}
        schemaId="service-ai-consulting"
      />

      {/* HERO: Interactive Framework Diagram */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-zinc-950">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(196, 255, 77, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196, 255, 77, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#23AACA]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-6">
                <Brain className="w-4 h-4 text-[#c4ff4d]" />
                <span className="text-sm text-white/80">Your AI Transformation Partner</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" data-testid="heading-ai-consulting">
                AI Consulting
                <br />
                <span className="text-[#c4ff4d]">Without the Hype</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-xl">
                We analyze your business, identify high-impact AI opportunities, and execute the entire transformation. 
                <span className="text-[#c4ff4d] font-semibold"> You don't need to figure out which services you need—we handle everything.</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90 font-bold" data-testid="button-hero-cta">
                    Start Your AI Transformation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10" data-testid="button-hero-secondary">
                  See Our Framework
                </Button>
              </div>
            </motion.div>

            {/* Right: Interactive Circular Framework Diagram */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-[500px] mx-auto aspect-square">
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-zinc-900 border-2 border-[#c4ff4d] flex items-center justify-center z-20">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-[#c4ff4d] mx-auto mb-1" />
                    <span className="text-white font-bold text-sm">OARC</span>
                  </div>
                </div>

                {/* Circular Track */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" aria-hidden="true">
                  <circle
                    cx="250"
                    cy="250"
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                  {/* Animated Arc */}
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="180"
                    fill="none"
                    stroke="#c4ff4d"
                    strokeWidth="3"
                    strokeDasharray="1130"
                    strokeDashoffset={prefersReducedMotion ? 0 : 1130}
                    animate={{ strokeDashoffset: 0 }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 2, ease: "easeOut" }}
                  />
                </svg>

                {/* Phase Nodes */}
                <div role="group" aria-label="AI Consulting Framework Phases">
                  {frameworkPhases.map((phase, index) => {
                    const angle = (index * 90 - 90) * (Math.PI / 180);
                    const radius = 180;
                    const x = 250 + radius * Math.cos(angle);
                    const y = 250 + radius * Math.sin(angle);
                    const Icon = phase.icon;
                    const isExpanded = activePhase === phase.id;

                    return (
                      <motion.div
                        key={phase.id}
                        initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 + index * 0.15 }}
                        className="absolute z-30"
                        style={{
                          left: `${(x / 500) * 100}%`,
                          top: `${(y / 500) * 100}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <motion.button
                          id={`phase-${phase.id}`}
                          onClick={() => setActivePhase(isExpanded ? null : phase.id)}
                          onKeyDown={(e) => handlePhaseKeyDown(e, phase.id)}
                          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                          aria-expanded={isExpanded}
                          aria-controls={`phase-panel-${phase.id}`}
                          aria-label={`${phase.title} phase: ${phase.description}`}
                          className={`w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c4ff4d] focus:ring-offset-2 focus:ring-offset-zinc-950 ${
                            isExpanded 
                              ? 'bg-zinc-800 border-2 shadow-lg shadow-[#c4ff4d]/20' 
                              : 'bg-zinc-900 border border-zinc-700 hover:border-zinc-500'
                          }`}
                          style={{ borderColor: isExpanded ? phase.color : undefined }}
                          data-testid={`phase-${phase.id}`}
                        >
                          <Icon className="w-6 h-6 mb-1" style={{ color: phase.color }} />
                          <span className="text-xs font-bold text-white">{phase.title}</span>
                        </motion.button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Connection Arrows */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" aria-hidden="true">
                  {[0, 1, 2, 3].map((i) => {
                    const startAngle = (i * 90 - 90 + 25) * (Math.PI / 180);
                    const endAngle = (i * 90 - 90 + 65) * (Math.PI / 180);
                    const radius = 180;
                    const startX = 250 + radius * Math.cos(startAngle);
                    const startY = 250 + radius * Math.sin(startAngle);
                    const endX = 250 + radius * Math.cos(endAngle);
                    const endY = 250 + radius * Math.sin(endAngle);
                    
                    return (
                      <motion.path
                        key={i}
                        d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
                        fill="none"
                        stroke="rgba(196, 255, 77, 0.3)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 1, delay: 1 + i * 0.2 }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Phase Detail Panel */}
              <AnimatePresence>
                {activePhase && (
                  <motion.div
                    id={`phase-panel-${activePhase}`}
                    role="region"
                    aria-labelledby={`phase-${activePhase}`}
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    transition={prefersReducedMotion ? { duration: 0.1 } : { duration: 0.3 }}
                    className="absolute -bottom-4 left-0 right-0 bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                    data-testid={`phase-panel-${activePhase}`}
                  >
                    {(() => {
                      const phase = frameworkPhases.find(p => p.id === activePhase);
                      if (!phase) return null;
                      const Icon = phase.icon;
                      return (
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${phase.color}20` }}>
                              <Icon className="w-5 h-5" style={{ color: phase.color }} />
                            </div>
                            <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                          </div>
                          <p className="text-white/70 mb-4">{phase.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {phase.details.map((detail, idx) => (
                              <span key={idx} className="text-xs bg-zinc-800 text-white/80 px-3 py-1.5 rounded-full">
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 1: The Confusion (Problem Visualization) */}
      <section className="py-24 px-4 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual Problem Illustration */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* CEO Figure */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10 w-32 h-32 mx-auto bg-zinc-800 rounded-full flex items-center justify-center border-4 border-zinc-700"
                >
                  <Users className="w-16 h-16 text-zinc-500" />
                </motion.div>

                {/* Confusion Speech Bubbles */}
                {confusionMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: msg.delay, duration: 0.5 }}
                    className="absolute"
                    style={{
                      top: `${50 + Math.sin(msg.angle * Math.PI / 180) * 120}%`,
                      left: `${50 + Math.cos(msg.angle * Math.PI / 180) * 150}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 whitespace-nowrap">
                      <span className="text-sm font-medium text-white/80">{msg.text}</span>
                    </div>
                  </motion.div>
                ))}

                {/* Overwhelm Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(234,88,12,0.3) 0%, transparent 70%)'
                  }}
                />
              </div>
            </div>

            {/* Right: Problem Statement */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-white/80">The Problem</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Everyone has <span className="text-orange-500">opinions</span>.
                <br />
                Few have <span className="text-[#c4ff4d]">results</span>.
              </h2>

              <p className="text-lg text-white/70 mb-6">
                CEOs are bombarded with conflicting AI advice. Vendors push products. Consultants speak in jargon. 
                Meanwhile, your competitors are moving fast while you're stuck in analysis paralysis.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">✕</span>
                  </div>
                  <p className="text-white/60">Vendors sell tools without understanding your business</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">✕</span>
                  </div>
                  <p className="text-white/60">Traditional consultants advise but never build</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">✕</span>
                  </div>
                  <p className="text-white/60">Internal teams lack AI expertise and bandwidth</p>
                </div>
              </div>

              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                <p className="text-lg text-white font-semibold mb-2">
                  OARC is different.
                </p>
                <p className="text-white/70">
                  We don't just consult on AI—we build it. Our team has deployed 40+ AI agents, 
                  automated $7M+ in pipeline, and transformed operations for brands worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI Maturity Model (Interactive Staircase) */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-full px-4 py-2 mb-6"
            >
              <Target className="w-4 h-4 text-[#23AACA]" />
              <span className="text-sm text-white/80">AI Maturity Model</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              We meet you <span className="text-[#23AACA]">where you are</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Every business is at a different stage of AI adoption. Click on each level to see what's involved, 
              the timeline, and what services we recommend.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Interactive Staircase */}
            <div className="relative" role="group" aria-label="AI Maturity Levels">
              <div className="space-y-3">
                {maturityLevels.map((level, index) => {
                  const isSelected = activeLevel === level.level;
                  return (
                    <motion.button
                      key={level.level}
                      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={prefersReducedMotion ? { duration: 0 } : { delay: index * 0.1 }}
                      onClick={() => setActiveLevel(level.level)}
                      onKeyDown={(e) => handleLevelKeyDown(e, level.level)}
                      aria-pressed={isSelected}
                      aria-label={`Level ${level.level}: ${level.title} - ${level.description}`}
                      className={`w-full text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c4ff4d] focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-xl ${
                        isSelected ? 'transform translate-x-4' : ''
                      }`}
                      data-testid={`level-${level.level}`}
                    >
                      <div
                        className={`p-5 rounded-xl border-2 transition-all duration-300 ${
                          isSelected
                            ? 'bg-zinc-800 border-[#c4ff4d] shadow-lg shadow-[#c4ff4d]/10'
                            : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                        }`}
                        style={{ marginLeft: `${index * 20}px` }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl ${
                              isSelected
                                ? 'bg-[#c4ff4d] text-black'
                                : 'bg-zinc-800 text-white/60'
                            }`}>
                              {level.level}
                            </div>
                            <div>
                              <h3 className={`font-bold text-lg ${
                                isSelected ? 'text-white' : 'text-white/80'
                              }`}>
                                {level.title}
                              </h3>
                              <p className="text-sm text-white/50">{level.description}</p>
                            </div>
                          </div>
                          <ChevronRight className={`w-5 h-5 transition-transform ${
                            isSelected ? 'text-[#c4ff4d] rotate-90' : 'text-white/30'
                          }`} />
                        </div>

                        {level.level === 0 && activeLevel !== 0 && (
                          <div className="mt-3 inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
                            <span>← You are here</span>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right: Level Details */}
            <div className="lg:sticky lg:top-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel}
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
                  transition={prefersReducedMotion ? { duration: 0.1 } : { duration: 0.3 }}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8"
                  data-testid={`level-details-${activeLevel}`}
                >
                  {(() => {
                    const level = maturityLevels[activeLevel];
                    return (
                      <>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-xl bg-[#c4ff4d] flex items-center justify-center">
                            <span className="text-3xl font-black text-black">{level.level}</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{level.title}</h3>
                            <p className="text-white/60">{level.description}</p>
                          </div>
                        </div>

                        <div className="grid gap-6 mb-8">
                          <div className="p-4 bg-zinc-900 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <AlertTriangle className="w-4 h-4 text-orange-500" />
                              <span className="text-sm font-semibold text-orange-500">Pain Point</span>
                            </div>
                            <p className="text-white/70">{level.pain}</p>
                          </div>

                          <div className="p-4 bg-zinc-900 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-4 h-4 text-[#c4ff4d]" />
                              <span className="text-sm font-semibold text-[#c4ff4d]">Opportunity</span>
                            </div>
                            <p className="text-white/70">{level.opportunity}</p>
                          </div>

                          <div className="p-4 bg-zinc-900 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-4 h-4 text-[#23AACA]" />
                              <span className="text-sm font-semibold text-[#23AACA]">Timeline</span>
                            </div>
                            <p className="text-white/70">{level.timeline}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                            Recommended Services
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {level.services.map((service, idx) => (
                              <span key={idx} className="bg-[#c4ff4d]/10 text-[#c4ff4d] text-sm font-medium px-4 py-2 rounded-full">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: What You Get (Deliverables) */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-6"
            >
              <FileText className="w-4 h-4 text-[#c4ff4d]" />
              <span className="text-sm text-white/80">Tangible Outcomes</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              Consulting means <span className="text-[#c4ff4d]">deliverables</span>,
              <br />
              not just conversations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Every engagement produces actionable documents you can use immediately—not PowerPoints that gather dust.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredDeliverable(index)}
                  onMouseLeave={() => setHoveredDeliverable(null)}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    hoveredDeliverable === index
                      ? 'bg-zinc-800 border-zinc-600 transform -translate-y-2'
                      : 'bg-zinc-900 border-zinc-800'
                  }`}
                  data-testid={`deliverable-${index}`}
                >
                  {/* Document Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>

                  {/* Type Badge */}
                  <div className="inline-block bg-zinc-800 text-white/60 text-xs font-medium px-2 py-1 rounded mb-3">
                    {item.type}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredDeliverable === index ? 1 : 0 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${item.color}10 0%, transparent 70%)`
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Timeline (Gantt-style) */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-full px-4 py-2 mb-6"
            >
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-white/80">Engagement Timeline</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              From confusion to clarity in <span className="text-orange-500">6 weeks</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              A structured engagement that delivers results, not endless meetings.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {timelineWeeks.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
                data-testid={`timeline-week-${index}`}
              >
                {/* Week Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                    index === 3 ? 'bg-[#23AACA]/20 text-[#23AACA]' : 'bg-zinc-800 text-white'
                  }`}>
                    {week.week}
                  </div>
                  <div>
                    <span className="text-xs text-white/50 uppercase tracking-wider">Week</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-zinc-800 rounded-full mb-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                    className={`h-full rounded-full ${
                      index === 3 ? 'bg-[#23AACA]' : 'bg-[#c4ff4d]'
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div className={`p-6 rounded-2xl border ${
                  index === 3 
                    ? 'bg-zinc-950 border-[#23AACA]/30' 
                    : 'bg-zinc-950 border-zinc-800'
                }`}>
                  <h3 className="text-lg font-bold text-white mb-4">{week.title}</h3>
                  
                  <ul className="space-y-2 mb-6">
                    {week.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c4ff4d]" />
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-zinc-800">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Output</span>
                    <p className="text-sm font-semibold text-[#c4ff4d] mt-1">{week.output}</p>
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 -right-3 text-zinc-700">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Why Trust Us (Proof) */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-[#c4ff4d]" />
                <span className="text-sm text-white/80">Why Trust OARC</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                We don't just <span className="text-[#c4ff4d]">consult</span> on AI.
                <br />
                We <span className="text-[#23AACA]">build</span> it.
              </h2>

              <p className="text-lg text-white/70 mb-8">
                Most consultants hand you a deck and walk away. We've built production AI systems, 
                deployed autonomous agents, and automated millions in revenue operations. 
                When we advise, it's from experience—not textbooks.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {proofPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl"
                      data-testid={`proof-point-${index}`}
                    >
                      <Icon className="w-6 h-6 text-[#c4ff4d] mb-2" />
                      <div className="text-2xl font-black text-white">{point.metric}</div>
                      <div className="text-sm text-white/60">{point.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <Link href="/our-work">
                <Button variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10">
                  View Our Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Right: Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* AI Agents Card */}
                <div className="col-span-2 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c4ff4d]/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-[#c4ff4d]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">AI Agents</h4>
                      <p className="text-xs text-white/50">Autonomous employees that work 24/7</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Sales', 'Support', 'Research'].map((type, i) => (
                      <div key={i} className="p-3 bg-zinc-950 rounded-lg text-center">
                        <span className="text-xs text-white/60">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Automation Card */}
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                  <div className="w-10 h-10 rounded-lg bg-[#23AACA]/20 flex items-center justify-center mb-4">
                    <Workflow className="w-5 h-5 text-[#23AACA]" />
                  </div>
                  <h4 className="font-bold text-white mb-1">Automation</h4>
                  <p className="text-xs text-white/50">Revenue workflows that run themselves</p>
                </div>

                {/* Development Card */}
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Code className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="font-bold text-white mb-1">Development</h4>
                  <p className="text-xs text-white/50">Custom software and MVPs</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#c4ff4d] text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Consulting from Practitioners
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="py-24 px-4 bg-[#23AACA]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              One engagement.
              <br />
              <span className="text-black">Every AI initiative prioritized.</span>
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Stop guessing which AI tools to buy. Stop wondering what's possible. 
              We analyze your business, design the roadmap, and build the solutions—all under one roof.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90 font-bold text-lg px-8" data-testid="button-final-cta">
                  Start Your AI Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services/hire-ai-employees">
                <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 font-semibold" data-testid="button-explore-agents">
                  Explore AI Employees
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-[#c4ff4d]" />
                <span className="text-white text-sm font-medium">No-risk discovery call</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-[#c4ff4d]" />
                <span className="text-white text-sm font-medium">Results in 6 weeks</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-[#c4ff4d]" />
                <span className="text-white text-sm font-medium">100% money-back guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            Complete Your <span className="text-[#c4ff4d]">AI Transformation</span>
          </h2>
          <p className="text-base text-white/70 mb-8">
            After your AI strategy is defined, we can handle the implementation too
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/hire-ai-employees">
              <div className="group bg-zinc-900 rounded-2xl p-8 border-2 border-zinc-800 hover:border-[#23AACA] transition-all cursor-pointer" data-testid="related-service-hire">
                <div className="flex items-start justify-between mb-4">
                  <Bot className="w-8 h-8 text-[#c4ff4d]" />
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors mb-2">Hire AI Employees</h3>
                <p className="text-sm text-white/70">
                  Deploy AI employees to handle customer service, sales, and operations at scale.
                </p>
              </div>
            </Link>

            <Link href="/services/revenue-automation">
              <div className="group bg-zinc-900 rounded-2xl p-8 border-2 border-zinc-800 hover:border-[#23AACA] transition-all cursor-pointer" data-testid="related-service-automation">
                <div className="flex items-start justify-between mb-4">
                  <Workflow className="w-8 h-8 text-[#23AACA]" />
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors mb-2">Revenue Automation</h3>
                <p className="text-sm text-white/70">
                  Automate your entire revenue operations from lead generation to invoicing.
                </p>
              </div>
            </Link>

            <Link href="/services/mvp-development">
              <div className="group bg-zinc-900 rounded-2xl p-8 border-2 border-zinc-800 hover:border-[#23AACA] transition-all cursor-pointer" data-testid="related-service-mvp">
                <div className="flex items-start justify-between mb-4">
                  <Code className="w-8 h-8 text-orange-500" />
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors mb-2">MVP Development</h3>
                <p className="text-sm text-white/70">
                  Turn your AI product ideas into working software with rapid development.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
