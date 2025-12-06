import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Globe, Monitor, Zap, Shield, BarChart3, CheckCircle2, Code2, Layers, Server, Database, Cloud, Lock, Users, Cpu, ChevronRight, TrendingUp, Clock, Target } from 'lucide-react';
import { SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiTailwindcss, SiVercel } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from '@/components/ui/button';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';

import dashboardImg from '@assets/stock_images/financial_dashboard__226af471.jpg';
import softwareDevImg1 from '@assets/stock_images/software_development_5606ca42.jpg';
import softwareDevImg2 from '@assets/stock_images/software_development_bf22fbae.jpg';

const ELITE_COLORS = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#22d3ee',
  success: '#22c55e',
};

export default function WebApplicationDevelopment() {
  const [activeType, setActiveType] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const webAppTypes = [
    {
      title: "SaaS Platforms",
      icon: Cloud,
      desc: "Multi-tenant applications with subscription billing, user management, and analytics dashboards",
      features: ["User authentication", "Subscription management", "Admin dashboards", "API access"],
      example: "CRM, Project management, Analytics tools"
    },
    {
      title: "E-Commerce",
      icon: TrendingUp,
      desc: "High-performance online stores with inventory, payments, and order management",
      features: ["Product catalogs", "Payment processing", "Inventory sync", "Order tracking"],
      example: "Online stores, Marketplaces, B2B portals"
    },
    {
      title: "Enterprise Portals",
      icon: Users,
      desc: "Internal tools, dashboards, and workflow automation for large organizations",
      features: ["Role-based access", "Data visualization", "Workflow automation", "Integrations"],
      example: "Employee portals, Data dashboards, Reporting tools"
    },
    {
      title: "Real-time Apps",
      icon: Zap,
      desc: "Live collaboration, chat, and streaming applications with instant updates",
      features: ["WebSocket connections", "Live updates", "Presence indicators", "Notifications"],
      example: "Chat apps, Collaboration tools, Live dashboards"
    },
  ];

  const techStack = [
    { name: 'React', Icon: SiReact, color: '#61DAFB', desc: 'Component UI' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff', desc: 'Full-stack framework' },
    { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D', desc: 'Progressive framework' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', desc: 'Type-safe code' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', desc: 'Server runtime' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', desc: 'Database' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4', desc: 'Styling' },
    { name: 'Vercel', Icon: SiVercel, color: '#ffffff', desc: 'Deployment' },
  ];

  const performanceMetrics = [
    { value: "<1s", label: "Load Time", icon: Clock, desc: "First contentful paint under 1 second" },
    { value: "100", label: "Performance Score", icon: BarChart3, desc: "Google Lighthouse perfect score" },
    { value: "99.9%", label: "Uptime SLA", icon: Shield, desc: "Enterprise-grade reliability" },
    { value: "A+", label: "Security Grade", icon: Lock, desc: "SSL Labs security rating" },
  ];

  const conversionProcess = [
    { phase: "Capture", icon: Target, color: "#22d3ee", desc: "Engaging landing pages that convert visitors into leads" },
    { phase: "Guide", icon: Layers, color: "#6366f1", desc: "Intuitive UX that guides users through your funnel" },
    { phase: "Convert", icon: TrendingUp, color: "#22c55e", desc: "Optimized checkout and signup flows that close deals" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Web Application Development | React, Next.js, Vue | OARC Digital"
        description="Build high-performance web applications that convert. Custom SaaS platforms, e-commerce sites, and enterprise portals built with React, Next.js, and modern tech."
        canonicalUrl="https://oarcdigital.com/services/web-application-development"
        ogType="article"
        structuredData={createServiceSchema(
          "Web Application Development",
          "High-performance web applications built with modern frameworks",
          "Web Development"
        )}
        schemaId="service-web-application-development"
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
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium text-white/70 uppercase tracking-[0.2em]">
                    Web Development
                  </span>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05]"
                data-testid="heading-web-apps"
              >
                Web Apps That{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Convert
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/60 mb-8 leading-relaxed max-w-xl"
              >
                Lightning-fast, conversion-optimized web applications. Built with React, Next.js, and modern architecture that scales.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg px-8" data-testid="button-start-project">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Performance Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <GlassCard className="p-6" variant="strong" showCornerAccents={true}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/70 text-sm font-medium">Performance Dashboard</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {performanceMetrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      onHoverStart={() => setHoveredMetric(i)}
                      onHoverEnd={() => setHoveredMetric(null)}
                      className={`p-4 rounded-xl bg-white/[0.03] border transition-all ${
                        hoveredMetric === i ? 'border-cyan-500/50' : 'border-white/10'
                      }`}
                    >
                      <metric.icon className="w-5 h-5 text-cyan-400 mb-2" />
                      <div className="text-2xl font-black text-white">{metric.value}</div>
                      <div className="text-xs text-white/50">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="h-24 bg-white/[0.02] rounded-lg border border-white/10 flex items-end p-4 gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-cyan-500 to-indigo-500 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONVERSION FRAMEWORK */}
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
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-white/70 uppercase tracking-[0.2em]">Conversion Framework</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Built to <span className="text-cyan-400">Convert</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Every web app we build follows our proven conversion framework
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8">
              {conversionProcess.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-8 text-center h-full" variant="strong" glowOnHover={true}>
                    <div 
                      className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <step.icon className="w-10 h-10" style={{ color: step.color }} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: step.color }}>
                      Step {i + 1}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">{step.phase}</h3>
                    <p className="text-white/60">{step.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Connection arrows */}
            <div className="hidden md:flex justify-center items-center gap-4 mt-8">
              {[0, 1].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <ChevronRight className="w-5 h-5 text-white/30" />
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WEB APP TYPES */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                What We <span className="text-cyan-400">Build</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                From SaaS platforms to enterprise portals—web apps that drive business results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {webAppTypes.map((type, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveType(i)}
                  data-testid={`app-type-${i}`}
                >
                  <GlassCard 
                    className={`p-6 cursor-pointer h-full transition-all ${
                      activeType === i ? 'border-cyan-500/50' : ''
                    }`}
                    variant="strong"
                    glowOnHover={true}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{type.title}</h3>
                          <ChevronRight className={`w-4 h-4 text-white/40 transition-transform ${activeType === i ? 'rotate-90' : ''}`} />
                        </div>
                        <p className="text-white/60 text-sm mb-4">{type.desc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {type.features.map((feature, j) => (
                            <span key={j} className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/70 border border-white/10">
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="text-xs text-cyan-400">
                          Examples: {type.example}
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

      {/* TECH STACK */}
      <section className="py-20 px-4 bg-zinc-950 border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Modern <span className="text-cyan-400">Tech Stack</span>
            </h2>
            <p className="text-white/60">Battle-tested technologies for scalable applications</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="p-6 text-center" variant="strong" glowOnHover={true}>
                  <tech.Icon className="w-10 h-10 mx-auto mb-3" style={{ color: tech.color }} />
                  <div className="text-white font-bold">{tech.name}</div>
                  <div className="text-xs text-white/50">{tech.desc}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                  <BarChart3 className="w-4 h-4" />
                  Case Study
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  +340% Conversion <span className="text-cyan-400">Increase</span>
                </h2>
                <p className="text-lg text-white/60 mb-8">
                  We rebuilt an enterprise SaaS platform from legacy PHP to modern React/Next.js. The result: lightning-fast load times, improved UX, and a 340% increase in trial-to-paid conversions.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { before: "4.2s", after: "0.8s", label: "Page Load Time" },
                    { before: "2.1%", after: "9.2%", label: "Conversion Rate" },
                    { before: "45%", after: "78%", label: "User Retention" },
                  ].map((metric, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-sm text-white/50 mb-1">{metric.label}</div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-white/50 text-sm line-through mr-2">{metric.before}</span>
                        <span className="text-cyan-400 font-bold">{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/our-work">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    View Case Studies
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img src={dashboardImg} alt="Web application dashboard" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* STATS */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 via-indigo-600 to-cyan-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Web Apps Launched", icon: Globe },
              { value: "<1s", label: "Avg. Load Time", icon: Zap },
              { value: "99.9%", label: "Uptime SLA", icon: Shield },
              { value: "100", label: "Lighthouse Score", icon: BarChart3 },
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

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-black text-white relative overflow-hidden border-t border-white/10">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={true} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Ready to build a <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">high-performance</span> web app?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto"
          >
            Free technical consultation. We'll analyze your requirements and propose the optimal architecture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg px-10" data-testid="button-cta-contact">
                Start Your Web Project
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
              <span className="text-white text-sm font-medium">Free consultation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Launch in 8-12 weeks</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Full code ownership</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
