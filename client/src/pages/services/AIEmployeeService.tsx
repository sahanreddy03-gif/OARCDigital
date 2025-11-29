import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { ArrowRight, CheckCircle2, Sparkles, MessageSquare, Brain, Zap, Shield, Users, TrendingUp, Clock, BarChart3, Mail, Calendar, Headphones, Bot, Database, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { FlowDiagram, IntegrationHub } from '@/components/ui/flow-diagram';

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

      {/* Hero Section with Animated Background */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.02} showScanLine={true} showParticles={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <ScrollReveal className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-[10px] font-medium text-white/60 uppercase tracking-[0.2em]">
                  AI Virtual Talent Hub
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight"
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
                  <button className="group px-8 py-4 bg-white text-black font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-all duration-300" data-testid="button-get-started-hero">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300" data-testid="button-view-all-services-hero">
                    All Services
                  </button>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Right: Hero Image with Glow */}
            {heroImage && (
              <ScrollReveal delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative group"
                >
                  {/* Subtle Glow Behind Image */}
                  <div className="absolute -inset-4 bg-white/[0.02] blur-3xl group-hover:bg-white/[0.04] transition-all duration-700" />
                  
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={heroImage}
                      alt={content.title}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                      data-testid="hero-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Tech Border Effect */}
                    <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
                  </div>
                </motion.div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Key Metrics with Glass Effect */}
      <section className="py-20 px-6 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black pointer-events-none" />
        <ScrollReveal>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Efficiency Boost', value: content.metrics.efficiency, icon: Zap },
                { label: 'Response Speed', value: content.metrics.speed, icon: Clock },
                { label: 'Cost Impact', value: content.metrics.cost, icon: TrendingUp },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <GlassCard className="p-10 text-center" glowOnHover={true} borderPulse={false}>
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                        <metric.icon className="w-5 h-5 text-white/60" />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {metric.value}
                    </div>
                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-[0.2em]">{metric.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Benefits with Visual Diagrams */}
      <section className="py-28 px-6 bg-zinc-950 relative overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.015} showScanLine={false} showParticles={false} />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Why Choose This</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-lg">
                Transform your workflow with intelligent automation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-10" glowOnHover={true}>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-white flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-7 h-7 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features with Icons and Mini Diagrams */}
      <section className="py-28 px-6 bg-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Capabilities</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Core Features
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-lg">
                Everything you need to automate and scale
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => {
              const IconComponent = (Icons as any)[feature.icon] || Sparkles;
              
              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <GlassCard className="p-8 h-full" glowOnHover={true}>
                    <div className="flex items-start gap-5">
                      {/* Large Icon */}
                      <div className="w-14 h-14 bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases with Visual Flow Diagrams */}
      <section className="py-28 px-6 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.01} showScanLine={false} showParticles={false} />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Applications</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-lg">
                How leading companies deploy AI employees
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.useCases.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-8 h-full" glowOnHover={true} borderPulse={index === 0}>
                  {/* Number Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white flex items-center justify-center text-black font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-zinc-400 leading-relaxed mb-6">{useCase.description}</p>
                  
                  {/* Mini Flow Diagram */}
                  <div className="pt-4 border-t border-white/5">
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

      {/* Seamless Integrations with Hub Visualization */}
      <section className="py-28 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Connectivity</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-lg">
                Works with the tools you already use
              </p>
            </div>
          </ScrollReveal>

          {/* Integration Hub Visualization */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mb-16">
              <IntegrationHub
                centerIcon={<Brain className="w-full h-full" />}
                centerLabel="AI Core"
                integrations={INTEGRATION_ICONS}
              />
            </div>
          </ScrollReveal>

          {/* Integration Tags */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {content.integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="px-5 py-2.5 bg-white/[0.02] backdrop-blur-sm border border-white/5 text-xs font-medium text-zinc-400 hover:bg-white/[0.05] hover:border-white/10 hover:text-white/70 transition-all duration-300 cursor-default"
                  data-testid={`integration-${index}`}
                >
                  {integration}
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who This Service Is For with Enhanced Cards */}
      <section className="py-28 px-6 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.015} showScanLine={false} showParticles={false} />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Target Audience</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Built for forward-thinking teams
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-lg">
                Scale your team without the overhead
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHO_THIS_IS_FOR.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-8 h-full" glowOnHover={true}>
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      <useCase.icon className="w-5 h-5 text-white/70" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-zinc-400 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  {/* Feature List */}
                  <ul className="space-y-2 mb-6">
                    {useCase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-500">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Mini Flow Diagram */}
                  <div className="pt-5 border-t border-white/5">
                    <FlowDiagram steps={useCase.diagram} compact={true} />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Premium Treatment */}
      <section className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.02} showScanLine={true} showParticles={true} />
        <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6">Get Started</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Ready to deploy your AI employee?
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Go live in days, not months. Start automating today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group px-12 py-5 bg-white text-black font-semibold inline-flex items-center justify-center gap-3 hover:bg-white/90 transition-all duration-300" data-testid="button-get-started-footer">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-12 py-5 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300" data-testid="button-view-services-footer">
                    Explore All Services
                  </button>
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
