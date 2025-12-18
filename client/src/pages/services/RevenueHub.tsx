import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, TrendingUp, Target, Filter, Zap, Lightbulb, Clock, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection, { FAQItem } from '@/components/FAQSection';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';

import leadGenImage from '@assets/stock_images/lead_generation_qual_b9d50c93.jpg';
import customerAcquisitionImage from '@assets/stock_images/customer_acquisition_38bd9c1d.jpg';
import funnelOptimizationImage from '@assets/stock_images/sales_funnel_optimiz_42aebf8c.jpg';
import marketingAutomationImage from '@assets/stock_images/marketing_automation_630ae165.jpg';
import ideaValidationImage from '@assets/stock_images/startup_idea_validat_9b100223.jpg';

const services = [
  {
    title: "Lead Generation Engine",
    metric: "3x qualified leads",
    description: "AI-powered lead identification, qualification, and nurturing at scale.",
    image: leadGenImage,
    slug: "lead-generation-engine",
    icon: Target
  },
  {
    title: "Customer Acquisition Accelerator",
    metric: "40% lower CAC",
    description: "Optimize every stage of acquisition from ad creative to conversion.",
    image: customerAcquisitionImage,
    slug: "customer-acquisition-accelerator",
    icon: TrendingUp
  },
  {
    title: "Funnel Optimization Agent",
    metric: "2.5x conversion rate",
    description: "Continuous AI analysis and optimization of your entire funnel.",
    image: funnelOptimizationImage,
    slug: "funnel-optimization-agent",
    icon: Filter
  },
  {
    title: "Marketing Automation Suite",
    metric: "85% time saved",
    description: "Unified platform for email, social, ads, and analytics automation.",
    image: marketingAutomationImage,
    slug: "marketing-automation-suite",
    icon: Zap
  },
  {
    title: "Idea Validation Engine",
    metric: "10x faster testing",
    description: "Test market demand before building with AI-powered research.",
    image: ideaValidationImage,
    slug: "idea-validation-engine",
    icon: Lightbulb
  },
];

const revenueHubFAQs: FAQItem[] = [
  { question: "What is the Revenue Hub?", answer: "Your complete revenue engine: CRM optimization, sales automation, lead nurturing, and conversion optimization working together seamlessly." },
  { question: "What's included in the Revenue Hub?", answer: "CRM setup, sales pipeline automation, email sequences, lead scoring, reporting dashboards, and ongoing optimization. Complete revenue infrastructure." },
  { question: "How is this different from buying CRM software?", answer: "We build the strategy and systems around the tools. Any company can buy HubSpot—we make it actually work for your business." },
  { question: "What CRM platforms do you work with?", answer: "HubSpot, Salesforce, Pipedrive, and others. We're platform-agnostic—we recommend what fits your needs." },
  { question: "How long does Revenue Hub setup take?", answer: "Initial implementation takes 4-8 weeks. Optimization and refinement continue over the following months." },
  { question: "What makes OARC's Revenue Hub different?", answer: "Marketing meets sales meets tech. We bridge the gap between lead generation and closed deals with integrated systems." },
  { question: "What is the investment for Revenue Hub?", answer: "Implementation starts from €8,000. Ongoing optimization retainers range from €3,000-8,000/month." },
  { question: "Do you train our sales team?", answer: "Yes, team training and enablement included. Your team learns to use the systems independently." }
];

export default function RevenueHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">

      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.02} showScanLine={true} showParticles={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-8"
            >
              <span className="px-4 py-2 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-[10px] font-medium text-white/60 uppercase tracking-[0.2em]">
                Revenue Ignition Engine
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            >
              Growth systems that run while you sleep
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10"
            >
              End-to-end automation engines that optimize pipelines, acquire customers, and validate ideas on autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact">
                <button className="group px-10 py-5 bg-white text-black font-semibold inline-flex items-center gap-3 hover:bg-white/90 transition-all duration-300" data-testid="button-get-started">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Solutions</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                5 Revenue Engines
              </h2>
              <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                Each engine solves a specific growth challenge with AI-powered precision
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <GlassCard className="cursor-pointer h-full" glowOnHover={true}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 bg-white/[0.1] backdrop-blur-sm border border-white/10 flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-white/70" />
                        </div>
                      </div>
                      
                      {/* Metric Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">{service.metric}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 px-6 bg-black border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-black to-black pointer-events-none" />
        <ScrollReveal>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Results That Speak
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                What our revenue automation delivers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '3x', label: 'Lead Volume', icon: Target },
                { value: '40%', label: 'Lower CAC', icon: TrendingUp },
                { value: '2.5x', label: 'Conversion', icon: Filter },
                { value: '85%', label: 'Time Saved', icon: Clock },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-8 text-center" glowOnHover={true} borderPulse={index === 0}>
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-white/[0.05] border border-white/10 flex items-center justify-center">
                        <metric.icon className="w-4 h-4 text-white/60" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-[0.2em]">{metric.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Why Revenue Automation */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">The Advantage</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Automate Revenue
              </h2>
              <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                Manual growth is slow and expensive. AI-powered automation scales without limits.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '24/7', label: 'Always Running', icon: Clock, description: 'Your growth engine never stops. Campaigns run, leads nurture, and funnels optimize around the clock.' },
              { value: 'AI', label: 'Self-Optimizing', icon: Zap, description: 'Machine learning continuously improves performance. Every interaction makes the system smarter.' },
              { value: 'EU', label: 'Malta Based', icon: Globe, description: 'Based in Malta with EU compliance. Real humans available when you need strategic guidance.' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-10 text-center" glowOnHover={true}>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-white/60" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <h3 className="text-sm font-medium text-white/80 mb-3">{stat.label}</h3>
                  <p className="text-xs text-zinc-500">{stat.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={revenueHubFAQs} 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about the Revenue Hub" 
        schemaId="faq-revenue-hub" 
        darkMode={true}
      />

      {/* CTA */}
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
                Deploy your revenue engine in days, not months.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group px-12 py-5 bg-white text-black font-semibold inline-flex items-center justify-center gap-3 hover:bg-white/90 transition-all duration-300" data-testid="button-get-started-footer">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-12 py-5 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300" data-testid="button-all-services">
                    All Services
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
