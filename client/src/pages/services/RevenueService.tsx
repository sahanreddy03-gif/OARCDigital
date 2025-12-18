import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Zap, Clock, MessageSquare, Brain, Target, BarChart3, Users, Mail, Filter, Database, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection, { FAQItem } from '@/components/FAQSection';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { FlowDiagram, IntegrationHub } from '@/components/ui/flow-diagram';

import leadGenImage from '@assets/stock_images/lead_generation_qual_b9d50c93.jpg';
import customerAcquisitionImage from '@assets/stock_images/customer_acquisition_38bd9c1d.jpg';
import funnelOptimizationImage from '@assets/stock_images/sales_funnel_optimiz_42aebf8c.jpg';
import marketingAutomationImage from '@assets/stock_images/marketing_automation_630ae165.jpg';
import ideaValidationImage from '@assets/stock_images/startup_idea_validat_9b100223.jpg';

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
  'lead-generation-engine': leadGenImage,
  'customer-acquisition-accelerator': customerAcquisitionImage,
  'funnel-optimization-agent': funnelOptimizationImage,
  'marketing-automation-suite': marketingAutomationImage,
  'idea-validation-engine': ideaValidationImage,
};

const WHO_THIS_IS_FOR = [
  {
    title: "Startups",
    description: "Validate faster and acquire customers without burning through runway.",
    items: ["Fast validation", "Lean operations", "Scalable systems"],
    icon: TrendingUp,
    diagram: [
      { icon: <Target className="w-full h-full" />, label: "Idea" },
      { icon: <Brain className="w-full h-full" />, label: "Validate" },
      { icon: <TrendingUp className="w-full h-full" />, label: "Scale" },
    ]
  },
  {
    title: "Growth Teams",
    description: "Optimize every channel and funnel stage with data-driven automation.",
    items: ["Multi-channel", "A/B testing", "Attribution"],
    icon: BarChart3,
    diagram: [
      { icon: <Filter className="w-full h-full" />, label: "Funnel" },
      { icon: <Brain className="w-full h-full" />, label: "Optimize" },
      { icon: <TrendingUp className="w-full h-full" />, label: "Convert" },
    ]
  },
  {
    title: "Marketing Leaders",
    description: "Build predictable pipelines and prove ROI with clear metrics.",
    items: ["Pipeline visibility", "ROI tracking", "Forecasting"],
    icon: Target,
    diagram: [
      { icon: <BarChart3 className="w-full h-full" />, label: "Data" },
      { icon: <Brain className="w-full h-full" />, label: "Analyze" },
      { icon: <Target className="w-full h-full" />, label: "Predict" },
    ]
  },
  {
    title: "Sales Organizations",
    description: "Fill your pipeline with qualified leads that are ready to buy.",
    items: ["Lead scoring", "Intent data", "Automated nurturing"],
    icon: Users,
    diagram: [
      { icon: <MessageSquare className="w-full h-full" />, label: "Lead" },
      { icon: <Filter className="w-full h-full" />, label: "Qualify" },
      { icon: <CheckCircle2 className="w-full h-full" />, label: "Convert" },
    ]
  },
  {
    title: "E-Commerce",
    description: "Acquire customers profitably and increase lifetime value.",
    items: ["CAC optimization", "LTV growth", "Retention"],
    icon: Zap,
    diagram: [
      { icon: <Users className="w-full h-full" />, label: "Acquire" },
      { icon: <Brain className="w-full h-full" />, label: "Retain" },
      { icon: <TrendingUp className="w-full h-full" />, label: "Expand" },
    ]
  },
  {
    title: "SaaS Companies",
    description: "Drive trial signups and convert free users to paid.",
    items: ["Product-led growth", "Activation", "Expansion revenue"],
    icon: Globe,
    diagram: [
      { icon: <Target className="w-full h-full" />, label: "Trial" },
      { icon: <Zap className="w-full h-full" />, label: "Activate" },
      { icon: <TrendingUp className="w-full h-full" />, label: "Upgrade" },
    ]
  }
];

const INTEGRATION_ICONS = [
  { icon: <Mail className="w-full h-full" />, name: "Email" },
  { icon: <MessageSquare className="w-full h-full" />, name: "CRM" },
  { icon: <BarChart3 className="w-full h-full" />, name: "Analytics" },
  { icon: <Database className="w-full h-full" />, name: "Data" },
  { icon: <Target className="w-full h-full" />, name: "Ads" },
  { icon: <Globe className="w-full h-full" />, name: "Web" },
];

const revenueServiceFAQs: FAQItem[] = [
  { question: "What revenue services do you offer?", answer: "Sales automation, CRM optimization, funnel building, lead nurturing, and revenue operations. Complete revenue acceleration." },
  { question: "How do you increase revenue?", answer: "Better lead capture, improved conversion rates, faster sales cycles, and reduced customer acquisition costs. Systematic improvements." },
  { question: "What results can we expect?", answer: "Typical clients see 30-50% improvement in conversion rates and 2-3x increase in qualified leads within 6 months." },
  { question: "What makes OARC's revenue services different?", answer: "We combine marketing expertise with sales operations knowledge. We optimize the entire revenue engine, not just parts." },
  { question: "Do you integrate with existing tools?", answer: "Yes, we work with your current tech stack. We optimize what you have before recommending new tools." },
  { question: "How quickly do we see results?", answer: "Quick wins within 30 days. Significant revenue impact typically visible within 3-6 months of systematic optimization." },
  { question: "What is the investment for revenue services?", answer: "Consulting engagements start from €5,000. Ongoing revenue optimization retainers range from €4,000-10,000/month." },
  { question: "Can you work with our sales team?", answer: "Absolutely. We collaborate closely with sales, providing tools and processes that help them close more deals." }
];

export default function RevenueService() {
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
      <Layout>
        <div className="min-h-screen bg-black pt-32 px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Service Not Found</h1>
          <Link href="/services">
            <button className="px-8 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors" data-testid="button-view-all-services-notfound">
              View All Services
            </button>
          </Link>
        </div>
      </Layout>
    );
  }

  const heroImage = HERO_IMAGES[slug];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">

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
                  Revenue Ignition Engine
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
                  <div className="absolute -inset-4 bg-white/[0.02] blur-3xl group-hover:bg-white/[0.04] transition-all duration-700" />
                  
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={heroImage}
                      alt={content.title}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                      data-testid="hero-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
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
                { label: 'Growth Rate', value: content.metrics.efficiency, icon: TrendingUp },
                { label: 'Time to Value', value: content.metrics.speed, icon: Clock },
                { label: 'ROI Impact', value: content.metrics.cost, icon: Zap },
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
                Accelerate growth with intelligent automation
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

      {/* Core Features */}
      <section className="py-28 px-6 bg-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Capabilities</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Core Features
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-lg">
                Everything you need to drive growth
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
                Proven strategies that drive results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.useCases.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-8 h-full" glowOnHover={true} borderPulse={index === 0}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white flex items-center justify-center text-black font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-zinc-400 leading-relaxed mb-6">{useCase.description}</p>
                  
                  <div className="pt-4 border-t border-white/5">
                    <FlowDiagram 
                      steps={[
                        { icon: <Target className="w-full h-full" />, label: "Target" },
                        { icon: <Brain className="w-full h-full" />, label: "Execute" },
                        { icon: <TrendingUp className="w-full h-full" />, label: "Scale" },
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

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mb-16">
              <IntegrationHub
                centerIcon={<Zap className="w-full h-full" />}
                centerLabel="Engine"
                integrations={INTEGRATION_ICONS}
              />
            </div>
          </ScrollReveal>

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

      {/* Who This Service Is For */}
      <section className="py-28 px-6 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.015} showScanLine={false} showParticles={false} />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Target Audience</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Built for growth-focused teams
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-lg">
                Scale your revenue without scaling complexity
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHO_THIS_IS_FOR.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-8 h-full" glowOnHover={true}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      <useCase.icon className="w-5 h-5 text-white/70" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-zinc-400 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {useCase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-500">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-5 border-t border-white/5">
                    <FlowDiagram steps={useCase.diagram} compact={true} />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={revenueServiceFAQs} 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about revenue services" 
        schemaId="faq-revenue-service" 
        darkMode={true}
      />

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
                Ready to accelerate growth?
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Deploy your revenue engine in days, not months. Start growing today.
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

      </div>
    </Layout>
  );
}
