import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Target, TrendingUp, Zap, Globe, Clock, BarChart3, Layers, MessageSquare } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { FlowDiagram } from '@/components/ui/flow-diagram';
import { motion } from 'framer-motion';

import strategicDashboard from '@assets/generated_images/strategic_planning_dashboard_ui.png';
import collaborationPlatform from '@assets/generated_images/team_collaboration_platform_ui.png';
import analyticsDashboard from '@assets/generated_images/business_analytics_dashboard.png';

export default function StrategyPulseCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '340%', label: 'Goal Achievement Rate', icon: Target },
    { value: '67%', label: 'Faster Planning Cycles', icon: Clock },
    { value: '92%', label: 'Team Alignment Score', icon: Users },
    { value: '4.2x', label: 'Execution Velocity', icon: Zap }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GraphQL', 'Kubernetes', 'ElasticSearch'
  ];

  const services = [
    { icon: Layers, title: 'Custom Platform Development', description: 'End-to-end SaaS platform built from ground up' },
    { icon: BarChart3, title: 'AI Analytics Engine', description: 'Predictive insights and performance forecasting' },
    { icon: MessageSquare, title: 'Real-Time Collaboration', description: 'WebSocket-powered team communication' },
    { icon: Globe, title: 'Enterprise Deployment', description: 'Multi-tenant architecture with SSO integration' }
  ];

  const workflowSteps = [
    { icon: <Target className="w-full h-full" />, label: 'Define Goals' },
    { icon: <Users className="w-full h-full" />, label: 'Align Teams' },
    { icon: <TrendingUp className="w-full h-full" />, label: 'Track Progress' },
    { icon: <CheckCircle2 className="w-full h-full" />, label: 'Achieve Results' }
  ];

  return (
    <Layout>
      <SEOHead
        title="StrategyPulse | AI Strategic Planning Platform Case Study | OARC Digital"
        description="How OARC Digital built an AI-powered strategic planning platform that increased goal achievement by 340% for enterprise clients. Custom SaaS development case study."
        canonicalUrl="https://oarcdigital.com/case-studies/strategypulse-enterprise"
        ogType="article"
      />

      {/* Hero Section - Full Width Dark */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black" data-testid="section-hero">
        <AnimatedGridBackground 
          className="absolute inset-0" 
          showParticles={true}
          showScanLine={true}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        
        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/our-work">
                <button className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors" data-testid="button-back">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back to Our Work</span>
                </button>
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6" data-testid="text-eyebrow">
                <span className="text-sm font-medium text-white/80">AI Solutions • Enterprise Software</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl leading-tight" data-testid="heading-case-study-title">
                How We Built an AI Strategic Planning Platform That Tripled Goal Achievement
              </h1>

              <p className="text-xl text-white/70 max-w-3xl mb-10">
                StrategyPulse helps mid-market companies align their entire organization around strategic objectives, 
                turning annual planning from a dreaded exercise into a continuous, collaborative process.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <GlassCard key={idx} className="p-6 text-center" glowOnHover={true}>
                      <Icon className="w-6 h-6 text-white/40 mx-auto mb-3" />
                      <div className="text-3xl md:text-4xl font-black text-white mb-1" data-testid={`stat-value-${idx}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/50">{stat.label}</div>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Hero Image */}
      <section className="relative bg-black py-0" data-testid="section-showcase">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="overflow-hidden" glowOnHover={false}>
              <img 
                src={strategicDashboard}
                alt="StrategyPulse strategic planning dashboard showing OKR goals, team alignment metrics, and project timelines"
                className="w-full h-auto"
                loading="lazy"
                data-testid="img-hero-product"
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black py-24 px-6" data-testid="section-about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">01 — About</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Strategic Planning & Execution Made Simple
              </h2>
              <p className="text-lg text-white/70 mb-6">
                StrategyPulse is an enterprise SaaS platform designed for mid-market companies seeking to transform 
                how they plan, communicate, and execute strategic initiatives.
              </p>
              <p className="text-lg text-white/70 mb-8">
                The platform ensures every employee—from C-suite to individual contributors—understands how their 
                daily work connects to company-wide objectives, creating unprecedented organizational alignment.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-white/20 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Industry</div>
                  <div className="text-white font-bold">Enterprise Software</div>
                </div>
                <div className="border-l-2 border-white/20 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Region</div>
                  <div className="text-white font-bold">North America & EU</div>
                </div>
                <div className="border-l-2 border-white/20 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Partnership</div>
                  <div className="text-white font-bold">18 Months</div>
                </div>
                <div className="border-l-2 border-white/20 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Team Size</div>
                  <div className="text-white font-bold">12 Specialists</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <GlassCard className="overflow-hidden" glowOnHover={true}>
                <img 
                  src={collaborationPlatform}
                  alt="Team collaboration platform showing goal tracking and departmental alignment"
                  className="w-full h-auto"
                  loading="lazy"
                  data-testid="img-collaboration"
                />
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-gradient-to-b from-black to-zinc-950 py-24 px-6" data-testid="section-challenge">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">02 — Challenge</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              The Problem with Modern Business Planning
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Siloed Planning',
                description: 'Departments create plans in isolation, leading to conflicting priorities and wasted resources across the organization.'
              },
              {
                title: 'Disconnected Execution',
                description: 'Employees can\'t see how their daily tasks connect to strategic objectives, reducing motivation and alignment.'
              },
              {
                title: 'Stale Strategies',
                description: 'Annual plans become outdated within months, but rigid tools make adaptation slow and painful.'
              }
            ].map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glowOnHover={true}>
                  <div className="text-5xl font-black text-white/10 mb-4">0{idx + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                  <p className="text-white/60">{challenge.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-solution">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <GlassCard className="overflow-hidden" glowOnHover={true}>
                <img 
                  src={analyticsDashboard}
                  alt="Business analytics dashboard showing company performance metrics and strategic initiative tracker"
                  className="w-full h-auto"
                  loading="lazy"
                  data-testid="img-analytics"
                />
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">03 — Solution</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                AI-Powered Strategic Alignment
              </h2>
              <p className="text-lg text-white/70 mb-8">
                We built StrategyPulse to make strategic planning collaborative, transparent, and adaptive. 
                The platform uses AI to surface insights, predict bottlenecks, and keep everyone focused on what matters most.
              </p>

              <div className="space-y-4">
                {[
                  'Real-time goal cascading from company to individual level',
                  'AI-powered progress predictions and risk alerts',
                  'Integrated commenting and decision documentation',
                  'Automated progress updates from connected tools',
                  'Executive dashboards with drill-down capabilities'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-black py-24 px-6" data-testid="section-workflow">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">04 — Process</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              From Vision to Execution
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              The platform guides organizations through a proven strategic planning methodology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FlowDiagram steps={workflowSteps} />
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-technologies">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">05 — Technologies</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Built with Modern Tech Stack
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24 px-6" data-testid="section-services">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">06 — Services Delivered</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What We Built
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6 h-full text-center" glowOnHover={true}>
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white/60" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-white/50">{service.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-testimonial">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-12 text-center" glowOnHover={false}>
              <div className="text-6xl text-white/20 mb-6">"</div>
              <blockquote className="text-2xl md:text-3xl text-white font-light mb-8 leading-relaxed" data-testid="text-testimonial">
                OARC didn't just build software—they transformed how we think about strategic planning. 
                Our teams are more aligned than ever, and we're executing at a pace we never thought possible.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MR</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-bold" data-testid="text-testimonial-author">Michael Reynolds</div>
                  <div className="text-white/50 text-sm">CEO, StrategyPulse</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-black py-24 px-6" data-testid="section-related">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Related Services
            </h2>
            <p className="text-lg text-white/60">
              Explore how we can help your business achieve similar results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Build powerful custom solutions tailored to your business' },
              { title: 'AI Consulting', href: '/services/ai-consulting', description: 'Strategic AI implementation for your organization' },
              { title: 'Revenue Automation', href: '/services/revenue-automation', description: 'Automate your revenue operations with AI' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link href={service.href}>
                  <GlassCard className="p-6 h-full group cursor-pointer" glowOnHover={true}>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50 mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-zinc-900 to-black py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Build Your Platform?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you create enterprise software that transforms your business.
            </p>
            
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-white text-black rounded-full pl-10 pr-4 py-4 text-base font-bold hover-elevate active-elevate-2"
                data-testid="button-cta-contact"
              >
                Start Your Project
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
