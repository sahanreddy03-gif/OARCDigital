import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { ArrowRight, Sparkles, MessageSquare, Brain, Zap, Shield, Users, TrendingUp, Clock, BarChart3, Mail, Calendar, Headphones, Bot, Database, Globe, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { FlowDiagram, IntegrationHub } from '@/components/ui/flow-diagram';
import { AIFlowCanvas, DecisionTree, ProcessFlow } from '@/components/ui/ai-flow-canvas';
import { 
  NeuralBrain, 
  DataFlow, 
  LightningBolt, 
  NetworkHub, 
  ShieldCheck, 
  ClockSpeed, 
  ChatBubbles, 
  BarChart, 
  BrainCircuit,
  SignalWave,
  TargetLock,
  GlobeNetwork,
  AIIconWithGlow
} from '@/components/ui/ai-icons';

import sdrAgentImage from '@assets/stock_images/elite_sales_professi_1c84b4b4.jpg';
import supportSpecialistImage from '@assets/stock_images/customer_support_spe_789ecb6b.jpg';
import dataAnalystImage from '@assets/stock_images/data_analyst_profess_4f5ff172.jpg';
import adminAgentImage from '@assets/stock_images/administrative_assis_da9e94eb.jpg';
import contentStrategistImage from '@assets/stock_images/content_strategist_c_61044a33.jpg';
import complianceAuditorImage from '@assets/stock_images/legal_compliance_off_78808712.jpg';
import appointmentBookerImage from '@assets/stock_images/appointment_schedule_97373ecb.jpg';
import realEstateAgentImage from '@assets/stock_images/real_estate_agent_pr_d5449235.jpg';

interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
  }>;
  integrations: string[];
  metrics: {
    efficiency: string;
    speed: string;
    cost: string;
  };
}

const HERO_IMAGES: Record<string, string> = {
  'ai-sdr-agent': sdrAgentImage,
  'ai-support-specialist': supportSpecialistImage,
  'ai-data-analyst': dataAnalystImage,
  'ai-admin-agent': adminAgentImage,
  'ai-content-strategist': contentStrategistImage,
  'ai-compliance-auditor': complianceAuditorImage,
  'ai-appointment-booker': appointmentBookerImage,
  'ai-real-estate-agent': realEstateAgentImage,
};

const BENEFIT_ICONS = [
  NeuralBrain,
  DataFlow,
  LightningBolt,
  ShieldCheck,
  ClockSpeed,
  NetworkHub,
  BrainCircuit,
  SignalWave,
];

const FEATURE_ICON_MAP: Record<string, React.FC<{ size?: number }>> = {
  'MessageSquare': ChatBubbles,
  'Brain': NeuralBrain,
  'Zap': LightningBolt,
  'Shield': ShieldCheck,
  'Clock': ClockSpeed,
  'BarChart3': BarChart,
  'Mail': SignalWave,
  'Calendar': ClockSpeed,
  'Database': DataFlow,
  'Globe': GlobeNetwork,
  'TrendingUp': BarChart,
  'Users': NetworkHub,
  'Headphones': ChatBubbles,
  'Bot': BrainCircuit,
  'Target': TargetLock,
};

const WHO_THIS_IS_FOR = [
  {
    title: "Growing Startups",
    description: "Scale faster without scaling headcount. AI employees help you punch above your weight class.",
    items: ["Rapid scaling", "Cost-effective", "24/7 operations"],
    icon: TrendingUp,
    diagram: [
      { icon: <Users className="w-full h-full" />, label: "Small Team" },
      { icon: <Bot className="w-full h-full" />, label: "AI Boost" },
      { icon: <TrendingUp className="w-full h-full" />, label: "10x Output" },
    ]
  },
  {
    title: "Enterprise Teams",
    description: "Boost productivity across departments. Deploy AI that integrates with existing workflows.",
    items: ["Enterprise security", "Custom integrations", "Dedicated support"],
    icon: Shield,
    diagram: [
      { icon: <Database className="w-full h-full" />, label: "Systems" },
      { icon: <Bot className="w-full h-full" />, label: "AI Layer" },
      { icon: <Zap className="w-full h-full" />, label: "Unified" },
    ]
  },
  {
    title: "Sales Organizations",
    description: "Never miss a lead. AI SDRs qualify, nurture, and book meetings while your team closes.",
    items: ["Lead qualification", "Automated outreach", "Meeting scheduling"],
    icon: MessageSquare,
    diagram: [
      { icon: <Mail className="w-full h-full" />, label: "Leads In" },
      { icon: <Brain className="w-full h-full" />, label: "Qualify" },
      { icon: <Calendar className="w-full h-full" />, label: "Book" },
    ]
  },
  {
    title: "Support Teams",
    description: "Deliver instant, accurate support 24/7. Handle common queries while escalating complex issues.",
    items: ["Instant response", "Multilingual", "Smart escalation"],
    icon: Headphones,
    diagram: [
      { icon: <MessageSquare className="w-full h-full" />, label: "Ticket" },
      { icon: <Bot className="w-full h-full" />, label: "Analyze" },
      { icon: <CheckCircle2 className="w-full h-full" />, label: "Resolve" },
    ]
  },
  {
    title: "Marketing",
    description: "Create content at scale. AI writers and analysts help execute campaigns faster.",
    items: ["Content generation", "Performance analysis", "Campaign optimization"],
    icon: BarChart3,
    diagram: [
      { icon: <Brain className="w-full h-full" />, label: "Strategy" },
      { icon: <Sparkles className="w-full h-full" />, label: "Create" },
      { icon: <BarChart3 className="w-full h-full" />, label: "Measure" },
    ]
  },
  {
    title: "Operations",
    description: "Automate data entry, reporting, and analysis. Focus on strategy instead of spreadsheets.",
    items: ["Automated reporting", "Data analysis", "Process optimization"],
    icon: Clock,
    diagram: [
      { icon: <Database className="w-full h-full" />, label: "Data" },
      { icon: <Bot className="w-full h-full" />, label: "Process" },
      { icon: <BarChart3 className="w-full h-full" />, label: "Insights" },
    ]
  }
];

const INTEGRATION_ICONS = [
  { icon: <Mail className="w-full h-full" />, name: "Email" },
  { icon: <MessageSquare className="w-full h-full" />, name: "Chat" },
  { icon: <Calendar className="w-full h-full" />, name: "Calendar" },
  { icon: <Database className="w-full h-full" />, name: "CRM" },
  { icon: <BarChart3 className="w-full h-full" />, name: "Analytics" },
  { icon: <Globe className="w-full h-full" />, name: "Web" },
];

export default function AIEmployeeService() {
  const [location] = useLocation();
  const slug = location.split('/').filter(Boolean).pop() || '';
  const [content, setContent] = useState<ServiceContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/content/services/${slug}.json`);
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch (error) {
        // Silent fail
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadContent();
    } else {
      setLoading(false);
    }
  }, [slug, location]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="text-zinc-500 text-sm">Loading...</div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-32 px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Service Not Found</h1>
          <Link href="/services">
            <button className="px-8 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors" data-testid="button-view-all-services-notfound">
              View All Services
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const heroImage = HERO_IMAGES[slug];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section with Dramatic Animated Background */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden min-h-[85vh] flex items-center">
        <AnimatedGridBackground 
          intensity="high" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <ScrollReveal className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-white/[0.05] backdrop-blur-md border border-white/15 text-[10px] font-medium text-white/70 uppercase tracking-[0.2em]">
                  AI Virtual Talent Hub
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
              >
                {content.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/60 font-light leading-relaxed"
              >
                {content.subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-zinc-500 leading-relaxed max-w-xl"
              >
                {content.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <Link href="/contact">
                  <button className="group px-10 py-5 bg-white text-black font-semibold inline-flex items-center gap-3 hover:bg-white/90 transition-all duration-300" data-testid="button-get-started-hero">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-10 py-5 bg-white/[0.05] backdrop-blur-md border border-white/15 text-white font-medium hover:bg-white/[0.1] hover:border-white/25 transition-all duration-300" data-testid="button-view-all-services-hero">
                    All Services
                  </button>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Right: Hero Image with Premium Glow */}
            {heroImage && (
              <ScrollReveal delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative group"
                >
                  {/* Multi-layer Glow Effect */}
                  <div className="absolute -inset-8 bg-white/[0.03] blur-3xl group-hover:bg-white/[0.06] transition-all duration-700 rounded-3xl" />
                  <div className="absolute -inset-4 bg-white/[0.02] blur-2xl transition-all duration-500" />
                  
                  <div className="relative overflow-hidden aspect-[4/3] rounded-xl">
                    <img
                      src={heroImage}
                      alt={content.title}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-[0.5] transition-all duration-700 scale-105 group-hover:scale-100"
                      data-testid="hero-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Premium Border Effect */}
                    <div className="absolute inset-0 border border-white/15 group-hover:border-white/30 transition-colors duration-500 rounded-xl" />
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-xl" />
                  </div>
                </motion.div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Key Metrics - Enhanced Glass Effect */}
      <section className="py-24 px-6 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 pointer-events-none" />
        <ScrollReveal>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Efficiency Boost', value: content.metrics.efficiency, Icon: LightningBolt },
                { label: 'Response Speed', value: content.metrics.speed, Icon: ClockSpeed },
                { label: 'Cost Impact', value: content.metrics.cost, Icon: BarChart },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <GlassCard 
                    className="p-12 text-center" 
                    variant="strong"
                    glowOnHover={true} 
                    showCornerAccents={true}
                  >
                    <div className="flex justify-center mb-6">
                      <AIIconWithGlow icon={metric.Icon} size={80} />
                    </div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                      {metric.value}
                    </div>
                    <div className="text-sm text-zinc-400 font-medium uppercase tracking-[0.2em]">{metric.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* HOW IT WORKS - AI Flow Visualization (NEW PROMINENT SECTION) */}
      <section className="py-32 px-6 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground 
          intensity="medium" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={false}
        />
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] border border-white/15 rounded-full mb-6"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs text-white/70 uppercase tracking-[0.2em]">How AI Works</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                See AI in Action
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Watch how our AI processes requests and delivers intelligent responses in real-time
              </p>
            </div>
          </ScrollReveal>

          {/* Main AI Decision Flow */}
          <ScrollReveal delay={0.2}>
            <div className="mb-20">
              <DecisionTree
                question="Incoming Customer Request"
                yesPath={{ 
                  label: "AI Resolves", 
                  percentage: "90%",
                  description: "Instant automated response"
                }}
                noPath={{ 
                  label: "Human + AI", 
                  percentage: "10%",
                  description: "Escalated with full context"
                }}
              />
            </div>
          </ScrollReveal>

          {/* Process Flow Visualization */}
          <ScrollReveal delay={0.3}>
            <GlassCard className="p-10 md:p-14" variant="strong" showCornerAccents={true}>
              <h3 className="text-center text-lg text-white/60 mb-10 uppercase tracking-[0.2em]">
                End-to-End AI Workflow
              </h3>
              <ProcessFlow
                steps={[
                  { icon: <MessageSquare className="w-6 h-6" />, label: "Ingest", sublabel: "Multi-channel" },
                  { icon: <Brain className="w-6 h-6" />, label: "Analyze", sublabel: "NLP + Context" },
                  { icon: <Database className="w-6 h-6" />, label: "Process", sublabel: "Knowledge Base" },
                  { icon: <Zap className="w-6 h-6" />, label: "Execute", sublabel: "Take Action" },
                  { icon: <CheckCircle2 className="w-6 h-6" />, label: "Deliver", sublabel: "Response" },
                ]}
              />
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits with Custom AI Icons */}
      <section className="py-32 px-6 bg-black border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={false} showConcentricRings={false} />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Why Choose This</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Key Benefits
              </h2>
              <p className="text-xl text-zinc-400 max-w-xl mx-auto">
                Transform your workflow with intelligent automation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {content.benefits.map((benefit, index) => {
              const IconComponent = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
              
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <GlassCard 
                    className="p-10 md:p-12" 
                    variant="strong"
                    glowOnHover={true}
                    showCornerAccents={true}
                  >
                    <div className="flex items-start gap-8">
                      {/* Large Custom AI Icon */}
                      <div className="flex-shrink-0">
                        <AIIconWithGlow icon={IconComponent} size={96} />
                      </div>
                      <div className="flex-1 pt-3">
                        <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                        <p className="text-zinc-400 leading-relaxed text-lg">{benefit.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Features with Enhanced Icons and Diagrams */}
      <section className="py-32 px-6 bg-zinc-950 border-t border-white/10 relative">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={false} />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Capabilities</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Core Features
              </h2>
              <p className="text-xl text-zinc-400 max-w-xl mx-auto">
                Everything you need to automate and scale
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, index) => {
              const CustomIcon = FEATURE_ICON_MAP[feature.icon] || NeuralBrain;
              
              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <GlassCard 
                    className="p-8 h-full" 
                    variant="default"
                    glowOnHover={true}
                  >
                    {/* Custom AI Icon with Glow */}
                    <div className="flex justify-center mb-6">
                      <AIIconWithGlow icon={CustomIcon} size={72} />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases with Enhanced Visual Flow */}
      <section className="py-32 px-6 bg-black border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground intensity="medium" showScanLine={true} showParticles={false} showConcentricRings={true} />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Applications</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-zinc-400 max-w-xl mx-auto">
                How leading companies deploy AI employees
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {content.useCases.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard 
                  className="p-8 h-full" 
                  variant="strong"
                  glowOnHover={true} 
                  borderPulse={index === 0}
                  showCornerAccents={true}
                >
                  {/* Number Badge with Glow */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="relative w-14 h-14 bg-white flex items-center justify-center text-black font-bold text-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 bg-white/20 blur-xl" />
                      <span className="relative">{String(index + 1).padStart(2, '0')}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-zinc-400 leading-relaxed mb-8">{useCase.description}</p>
                  
                  {/* Enhanced Mini Flow Diagram */}
                  <div className="pt-6 border-t border-white/10">
                    <FlowDiagram 
                      steps={[
                        { icon: <MessageSquare className="w-full h-full" />, label: "Input" },
                        { icon: <Brain className="w-full h-full" />, label: "Process" },
                        { icon: <CheckCircle2 className="w-full h-full" />, label: "Output" },
                      ]}
                      compact={true}
                    />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integrations with Enhanced Hub */}
      <section className="py-32 px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Connectivity</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-zinc-400 max-w-xl mx-auto">
                Works with the tools you already use
              </p>
            </div>
          </ScrollReveal>

          {/* Integration Hub Visualization */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mb-20">
              <IntegrationHub
                centerIcon={<Brain className="w-full h-full" />}
                centerLabel="AI Core"
                integrations={INTEGRATION_ICONS}
              />
            </div>
          </ScrollReveal>

          {/* Integration Tags with Enhanced Styling */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {content.integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ y: -4, scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
                  className="px-6 py-3 bg-white/[0.04] backdrop-blur-md border border-white/10 text-sm font-medium text-zinc-300 hover:bg-white/[0.08] hover:text-white transition-all duration-300 cursor-default rounded-lg"
                  data-testid={`integration-${index}`}
                >
                  {integration}
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who This Is For - Enhanced Cards */}
      <section className="py-32 px-6 bg-black border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground intensity="medium" showScanLine={false} showParticles={true} showConcentricRings={true} />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Target Audience</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Built for forward-thinking teams
              </h2>
              <p className="text-xl text-zinc-400 max-w-xl mx-auto">
                Scale your team without the overhead
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {WHO_THIS_IS_FOR.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard 
                  className="p-8 h-full" 
                  variant="strong"
                  glowOnHover={true}
                  showCornerAccents={true}
                >
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-14 h-14 bg-white/[0.08] border border-white/20 flex items-center justify-center rounded-lg"
                      whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.4)' }}
                    >
                      <useCase.icon className="w-6 h-6 text-white/80" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-zinc-400 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  {/* Feature List */}
                  <ul className="space-y-3 mb-8">
                    {useCase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                        <div className="w-2 h-2 bg-white/50 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Mini Flow Diagram */}
                  <div className="pt-6 border-t border-white/10">
                    <FlowDiagram steps={useCase.diagram} compact={true} />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Premium Treatment */}
      <section className="py-40 px-6 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground 
          intensity="high" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={true}
        />
        <div className="absolute inset-0 bg-gradient-radial from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] border border-white/15 rounded-full mb-8">
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-white/70 uppercase tracking-[0.2em]">Get Started</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.1]">
                Ready to deploy your AI employee?
              </h2>
              <p className="text-xl text-zinc-400 mb-14 max-w-2xl mx-auto leading-relaxed">
                Go live in days, not months. Start automating today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact">
                  <motion.button 
                    className="group px-14 py-6 bg-white text-black font-bold text-lg inline-flex items-center justify-center gap-3 hover:bg-white/90 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid="button-get-started-footer"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button 
                    className="px-14 py-6 bg-white/[0.05] backdrop-blur-md border border-white/20 text-white font-semibold text-lg hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid="button-view-services-footer"
                  >
                    Explore All Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
