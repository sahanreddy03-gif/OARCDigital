import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Plug, Zap, Shield, BarChart3, CheckCircle2, Code2, Layers, Server, Database, Cloud, Lock, Users, ChevronRight, RefreshCw, GitBranch, Workflow, Globe, Clock, ArrowLeftRight, Box, Cpu } from 'lucide-react';
import { SiStripe, SiTwilio, SiSalesforce, SiShopify, SiZapier, SiSlack, SiHubspot, SiMailchimp } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from '@/components/ui/button';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';

const ELITE_COLORS = {
  primary: '#8b5cf6',
  secondary: '#6366f1',
  accent: '#f59e0b',
  success: '#22c55e',
};

export default function APIIntegrationServices() {
  const [activeIntegration, setActiveIntegration] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const integrationCategories = [
    {
      title: "Payment & Commerce",
      icon: Zap,
      color: "#6366f1",
      integrations: [
        { name: "Stripe", Icon: SiStripe, desc: "Payments, subscriptions, invoicing" },
        { name: "Shopify", Icon: SiShopify, desc: "E-commerce platform sync" },
      ],
      useCases: ["Subscription billing", "Marketplace payments", "Inventory sync"]
    },
    {
      title: "Communication",
      icon: Users,
      color: "#22d3ee",
      integrations: [
        { name: "Twilio", Icon: SiTwilio, desc: "SMS, voice, video" },
        { name: "Slack", Icon: SiSlack, desc: "Team notifications" },
      ],
      useCases: ["Automated alerts", "Customer messaging", "Team workflows"]
    },
    {
      title: "CRM & Marketing",
      icon: BarChart3,
      color: "#f59e0b",
      integrations: [
        { name: "Salesforce", Icon: SiSalesforce, desc: "CRM & sales automation" },
        { name: "HubSpot", Icon: SiHubspot, desc: "Marketing automation" },
      ],
      useCases: ["Lead sync", "Email campaigns", "Customer scoring"]
    },
    {
      title: "Automation",
      icon: RefreshCw,
      color: "#22c55e",
      integrations: [
        { name: "Zapier", Icon: SiZapier, desc: "Workflow automation" },
        { name: "Mailchimp", Icon: SiMailchimp, desc: "Email marketing" },
      ],
      useCases: ["Multi-app workflows", "Data sync", "Triggered actions"]
    },
  ];

  const integrationServices = [
    { 
      icon: Plug, 
      title: "API Development", 
      desc: "Custom REST and GraphQL APIs built for your specific needs",
      features: ["RESTful design", "GraphQL schemas", "OpenAPI docs", "Rate limiting"]
    },
    { 
      icon: ArrowLeftRight, 
      title: "Third-Party Integration", 
      desc: "Connect your systems with any external service or platform",
      features: ["OAuth flows", "Webhook handlers", "Data mapping", "Error handling"]
    },
    { 
      icon: Workflow, 
      title: "Data Synchronization", 
      desc: "Keep your data consistent across all platforms in real-time",
      features: ["Real-time sync", "Batch processing", "Conflict resolution", "Audit trails"]
    },
    { 
      icon: Shield, 
      title: "Legacy System Integration", 
      desc: "Connect modern apps with existing enterprise systems",
      features: ["SOAP/XML support", "Database bridges", "File transfers", "Middleware"]
    },
  ];

  const integrationFlow = [
    { phase: "Analyze", icon: Cpu, desc: "Map existing systems and data flows" },
    { phase: "Design", icon: Layers, desc: "Architecture and API specifications" },
    { phase: "Build", icon: Code2, desc: "Develop and test integrations" },
    { phase: "Deploy", icon: Cloud, desc: "Launch with monitoring" },
    { phase: "Monitor", icon: BarChart3, desc: "Ongoing health checks" },
  ];

  return (
    <Layout>
      <SEOHead
        title="API Integration Services | Connect Any System | OARC Digital"
        description="Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability."
        canonicalUrl="https://oarcdigital.com/services/api-integration-services"
        ogType="article"
        structuredData={createServiceSchema(
          "API Integration Services",
          "Connect your systems with custom API integrations",
          "Integration Services"
        )}
        schemaId="service-api-integration-services"
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <AnimatedGridBackground 
          intensity="high" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <div className="px-5 py-2.5 bg-white/[0.05] backdrop-blur-md border border-white/15 rounded-full flex items-center gap-3">
                  <motion.div 
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium text-white/70 uppercase tracking-[0.2em]">
                    Integration Services
                  </span>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05]"
                data-testid="heading-api-integration"
              >
                Connect{' '}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-amber-400 bg-clip-text text-transparent">
                  Everything
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/60 mb-8 leading-relaxed max-w-xl"
              >
                Seamless API integrations that make your systems work together. Payment, CRM, marketing, and custom APIs—all connected.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg px-8" data-testid="button-start-project">
                    Start Integration
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 mt-12"
              >
                {[
                  { value: "500+", label: "APIs Integrated" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "<100ms", label: "Response Time" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="text-2xl font-black text-purple-400">{stat.value}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Integration Hub Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-amber-500/20 rounded-3xl blur-2xl" />
              <GlassCard className="p-8" variant="strong" showCornerAccents={true}>
                <div className="text-center mb-6">
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-2">Integration Hub</div>
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                    <Box className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-white font-bold">Your System</div>
                </div>

                {/* Connected services */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { Icon: SiStripe, name: "Stripe", color: "#635BFF" },
                    { Icon: SiSalesforce, name: "Salesforce", color: "#00A1E0" },
                    { Icon: SiTwilio, name: "Twilio", color: "#F22F46" },
                    { Icon: SiShopify, name: "Shopify", color: "#96BF48" },
                    { Icon: SiSlack, name: "Slack", color: "#4A154B" },
                    { Icon: SiHubspot, name: "HubSpot", color: "#FF7A59" },
                    { Icon: SiZapier, name: "Zapier", color: "#FF4A00" },
                    { Icon: SiMailchimp, name: "Mailchimp", color: "#FFE01B" },
                  ].map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="p-3 bg-white/[0.03] rounded-xl border border-white/10 text-center hover:border-purple-500/50 transition-colors cursor-pointer"
                    >
                      <service.Icon className="w-8 h-8 mx-auto mb-2" style={{ color: service.color }} />
                      <div className="text-xs text-white/60">{service.name}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Connection lines animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-px bg-gradient-to-b from-purple-500/50 to-transparent"
                      style={{
                        left: `${12.5 + i * 12.5}%`,
                        top: '35%',
                        height: '30%'
                      }}
                      animate={prefersReducedMotion ? {} : { opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTEGRATION PROCESS FLOW */}
      <section className="py-24 px-4 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={false} />
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] border border-white/15 rounded-full mb-6"
              >
                <Workflow className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-white/70 uppercase tracking-[0.2em]">Integration Process</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                How We <span className="text-purple-400">Connect</span> Systems
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Our proven methodology ensures reliable, maintainable integrations
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {integrationFlow.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <GlassCard className="p-6 text-center w-40" variant="strong" glowOnHover={true}>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-white font-bold mb-1">{step.phase}</div>
                    <div className="text-xs text-white/50">{step.desc}</div>
                  </GlassCard>
                  {i < integrationFlow.length - 1 && (
                    <ChevronRight className="w-6 h-6 text-white/30 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTEGRATION SERVICES */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Integration <span className="text-purple-400">Services</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                From custom APIs to complex enterprise integrations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {integrationServices.map((service, i) => (
                <motion.div
                  key={i}
                  onHoverStart={() => setHoveredService(i)}
                  onHoverEnd={() => setHoveredService(null)}
                  data-testid={`service-${i}`}
                >
                  <GlassCard 
                    className={`p-6 h-full transition-all ${
                      hoveredService === i ? 'border-purple-500/50' : ''
                    }`}
                    variant="strong"
                    glowOnHover={true}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/60 text-sm mb-4">{service.desc}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, j) => (
                            <span key={j} className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/70 border border-white/10">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INTEGRATION CATEGORIES */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
          <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={true} />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Popular <span className="text-purple-400">Integrations</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                We integrate with 500+ platforms across all categories
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {integrationCategories.map((category, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActiveIntegration(activeIntegration === i ? null : i)}
                  data-testid={`category-${i}`}
                >
                  <GlassCard 
                    className={`p-6 cursor-pointer transition-all ${
                      activeIntegration === i ? 'border-purple-500/50' : ''
                    }`}
                    variant="strong"
                    glowOnHover={true}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <category.icon className="w-7 h-7" style={{ color: category.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{category.title}</h3>
                          <ChevronRight className={`w-4 h-4 text-white/40 transition-transform ${activeIntegration === i ? 'rotate-90' : ''}`} />
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          {category.integrations.map((integration, j) => (
                            <div key={j} className="flex items-center gap-2">
                              <integration.Icon className="w-6 h-6" style={{ color: category.color }} />
                              <span className="text-white/70 text-sm">{integration.name}</span>
                            </div>
                          ))}
                        </div>

                        {activeIntegration === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-4 border-t border-white/10"
                          >
                            <div className="text-xs text-white/50 uppercase tracking-wider mb-2">Common Use Cases</div>
                            <div className="flex flex-wrap gap-2">
                              {category.useCases.map((useCase, j) => (
                                <span key={j} className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/70 border border-white/10">
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* STATS */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "APIs Integrated", icon: Plug },
              { value: "<100ms", label: "Avg Response Time", icon: Zap },
              { value: "99.9%", label: "Uptime SLA", icon: Shield },
              { value: "24/7", label: "Monitoring", icon: BarChart3 },
            ].map((stat, i) => (
              <div key={i} data-testid={`stat-${i}`}>
                <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CUSTOM INTEGRATION */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Why <span className="text-purple-400">Custom</span> Integration?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Off-the-shelf connectors have limits. Custom integrations give you control.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Lock, 
                  title: "Full Control", 
                  desc: "Own your integration code. No vendor lock-in, no monthly fees for connectors.",
                },
                { 
                  icon: Zap, 
                  title: "Optimized Performance", 
                  desc: "Custom integrations are built for your specific data volumes and latency needs.",
                },
                { 
                  icon: RefreshCw, 
                  title: "Flexible & Scalable", 
                  desc: "Easily modify and extend as your business requirements evolve.",
                },
              ].map((item, i) => (
                <GlassCard 
                  key={i}
                  className="p-8"
                  variant="strong"
                  glowOnHover={true}
                  showCornerAccents={true}
                >
                  <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-zinc-950 text-white relative overflow-hidden border-t border-white/10">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={true} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Need to <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">connect</span> your systems?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto"
          >
            Free integration assessment. We'll map your systems and propose the optimal architecture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg px-10" data-testid="button-cta-contact">
                Get Integration Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 justify-center items-center mt-12"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Free assessment</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">500+ integrations</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">99.9% uptime SLA</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
