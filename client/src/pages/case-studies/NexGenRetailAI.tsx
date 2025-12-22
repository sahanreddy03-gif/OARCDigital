import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, CheckCircle2, Headphones, Users, TrendingUp, Zap, Clock, BarChart3, MessageSquare, Bot, Workflow, Mail, Phone, Calendar, FileText, ShoppingCart, Package, CreditCard, UserCheck, Settings, RefreshCw } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { FlowDiagram } from '@/components/ui/flow-diagram';
import { motion } from 'framer-motion';

import aiAutomationDashboard from '@assets/generated_images/ai_automation_enterprise_dashboard.png';
import aiLeadEngineDashboard from '@assets/generated_images/ai_lead_engine_dashboard.png';
import foodSupplyImg from '@assets/stock_images/food_supply_chain_au_9bb3c110.jpg';

export default function NexGenRetailAICaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '65%', label: 'Cost Reduction', icon: TrendingUp },
    { value: '4.8/5', label: 'CSAT Score', icon: Headphones },
    { value: '3x', label: 'Pipeline Velocity', icon: Zap },
    { value: '90 Days', label: 'Full Deployment', icon: Clock }
  ];

  const aiEmployees = [
    {
      icon: Headphones,
      title: 'AI Support Specialist',
      description: '24/7 customer support handling Tier 1-2 inquiries across chat, email, and phone with human-like conversation quality.',
      metrics: [
        { value: '89%', label: 'First Contact Resolution' },
        { value: '< 30s', label: 'Response Time' },
        { value: '24/7', label: 'Availability' }
      ],
      capabilities: ['Order status inquiries', 'Return processing', 'Product questions', 'Account management', 'Complaint handling', 'Escalation to human agents']
    },
    {
      icon: UserCheck,
      title: 'AI SDR Agent',
      description: 'Intelligent sales development representative that qualifies leads, nurtures prospects, and books meetings for the sales team.',
      metrics: [
        { value: '340%', label: 'Lead Qualification Rate' },
        { value: '67%', label: 'Meeting Book Rate' },
        { value: '< 2min', label: 'Lead Response Time' }
      ],
      capabilities: ['Lead scoring & qualification', 'Personalized outreach', 'Meeting scheduling', 'CRM updates', 'Follow-up sequences', 'Hand-off to sales reps']
    },
    {
      icon: FileText,
      title: 'AI Admin Agent',
      description: 'Automated document processing, data entry, and administrative workflows that previously consumed 70% of staff time.',
      metrics: [
        { value: '99.2%', label: 'Processing Accuracy' },
        { value: '85%', label: 'Time Saved' },
        { value: '1000+', label: 'Docs/Day' }
      ],
      capabilities: ['Invoice processing', 'Order documentation', 'Inventory updates', 'Report generation', 'Email categorization', 'Data validation']
    }
  ];

  const workflows = [
    {
      title: 'Order-to-Delivery Automation',
      description: 'End-to-end automation from order placement to delivery confirmation',
      icon: Package,
      steps: ['Order received', 'Inventory check', 'Payment processing', 'Fulfillment trigger', 'Shipping update', 'Delivery confirmation']
    },
    {
      title: 'Lead-to-Customer Pipeline',
      description: 'Automated lead nurturing from first touch to closed deal',
      icon: Users,
      steps: ['Lead capture', 'AI qualification', 'Nurture sequence', 'Meeting booked', 'Sales handoff', 'Deal closed']
    },
    {
      title: 'Support Ticket Resolution',
      description: 'Intelligent ticket routing and resolution workflow',
      icon: MessageSquare,
      steps: ['Ticket created', 'AI analysis', 'Auto-resolve or route', 'Resolution delivered', 'Satisfaction survey', 'Case closed']
    },
    {
      title: 'Inventory & Reorder',
      description: 'Predictive inventory management with automatic reordering',
      icon: RefreshCw,
      steps: ['Stock monitoring', 'Demand forecast', 'Reorder trigger', 'PO generation', 'Supplier confirmation', 'Stock update']
    }
  ];

  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Zendesk', category: 'Support' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'SAP', category: 'ERP' },
    { name: 'Slack', category: 'Communication' },
    { name: 'HubSpot', category: 'Marketing' },
    { name: 'Twilio', category: 'Voice/SMS' },
    { name: 'Stripe', category: 'Payments' }
  ];

  const outcomes = [
    { title: '65% Reduction in Operational Costs', description: 'AI employees handle 80% of customer interactions, reducing staffing needs while improving service quality' },
    { title: 'Customer Satisfaction Up to 4.8/5', description: 'Faster response times, 24/7 availability, and consistent quality drove CSAT from 3.2 to 4.8' },
    { title: '3x Sales Pipeline Velocity', description: 'AI SDR qualification and nurturing accelerated the sales cycle, tripling pipeline movement' },
    { title: '85% Staff Time Freed', description: 'Administrative automation freed human team for high-value relationship building and strategic work' }
  ];

  const timeline = [
    { week: 'Week 1-2', title: 'Discovery & Planning', description: 'Process mapping, integration requirements, AI training data collection' },
    { week: 'Week 3-4', title: 'AI Employee Setup', description: 'Deployed AI Support Specialist and AI SDR Agent with initial training' },
    { week: 'Week 5-8', title: 'Workflow Automation', description: 'Connected systems, built automation flows, tested end-to-end processes' },
    { week: 'Week 9-12', title: 'Optimization & Scale', description: 'Fine-tuned AI responses, expanded capabilities, achieved full deployment' }
  ];

  const relatedCases = [
    {
      id: 'global-supply-systems',
      title: 'Global Supply Systems',
      subtitle: 'Saving $1M+ annually with intelligent automation.',
      image: foodSupplyImg,
      link: '/case-studies/global-supply-systems'
    },
    {
      id: 'fanstake-sports',
      title: 'FanStake Sports',
      subtitle: '10x pipeline velocity with AI sales agents.',
      image: aiLeadEngineDashboard,
      link: '/case-studies/fanstake-sports-platform'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="NexGen Retail Group | Full AI Transformation Case Study | OARC Digital"
        description="How OARC deployed AI customer support agents, AI sales reps, and workflow automation to achieve 65% cost reduction and 4.8/5 CSAT for a mid-market retail group."
        canonicalUrl="https://oarcdigital.com/case-studies/nexgen-retail-ai-transformation"
        ogType="article"
      />

      {/* Hero Section - Monochrome Futurism */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black" data-testid="section-hero">
        <AnimatedGridBackground 
          className="absolute inset-0" 
          showParticles={true}
          showScanLine={true}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#4ade80]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#23AACA]/10 rounded-full blur-3xl" />
        
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

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-[#4ade80]/20 border border-[#4ade80]/30 rounded-full text-[#4ade80] text-sm font-medium">
                  AI Employees
                </span>
                <span className="px-4 py-2 bg-[#23AACA]/20 border border-[#23AACA]/30 rounded-full text-[#23AACA] text-sm font-medium">
                  Workflow Automation
                </span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium">
                  Full Transformation
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl leading-tight" data-testid="heading-case-study-title">
                Complete AI Workforce Transformation:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#23AACA]">
                  Support, Sales & Automation
                </span>
              </h1>

              <p className="text-xl text-white/80 max-w-3xl mb-10">
                How we deployed AI customer support agents, AI sales representatives, and end-to-end workflow 
                automation for NexGen Retail Group—achieving 65% cost reduction while improving customer satisfaction.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <GlassCard key={idx} className="p-6 text-center" glowOnHover={true}>
                      <Icon className="w-6 h-6 text-[#4ade80] mx-auto mb-3" />
                      <div className="text-3xl md:text-4xl font-black text-white mb-1" data-testid={`stat-value-${idx}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
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
                src={aiAutomationDashboard}
                alt="NexGen AI automation dashboard showing customer support metrics, sales pipeline, and workflow automation status"
                className="w-full h-auto"
                loading="lazy"
                data-testid="img-hero-product"
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="bg-black py-24 px-6" data-testid="section-about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">01 — Client Overview</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Mid-Market Retail Group Ready for AI Transformation
              </h2>
              <p className="text-lg text-white/80 mb-6">
                NexGen Retail Group operates multiple retail brands across Europe, serving thousands of customers 
                daily through e-commerce and physical stores. With rapid growth came operational challenges that 
                traditional scaling couldn't solve efficiently.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Their customer support team was overwhelmed, sales reps spent 60% of time on unqualified leads, 
                and manual processes across order fulfillment, inventory, and communications consumed the majority 
                of staff time.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-[#4ade80]/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Industry</div>
                  <div className="text-white font-bold">Retail & E-commerce</div>
                </div>
                <div className="border-l-2 border-[#4ade80]/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Region</div>
                  <div className="text-white font-bold">Europe</div>
                </div>
                <div className="border-l-2 border-[#4ade80]/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Scale</div>
                  <div className="text-white font-bold">50,000+ customers/month</div>
                </div>
                <div className="border-l-2 border-[#4ade80]/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Timeline</div>
                  <div className="text-white font-bold">90 Days</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8" glowOnHover={true}>
                <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-6">What We Deployed</div>
                <div className="space-y-4">
                  {[
                    { icon: Headphones, title: 'AI Support Specialist', desc: '24/7 customer support' },
                    { icon: UserCheck, title: 'AI SDR Agent', desc: 'Lead qualification & nurturing' },
                    { icon: FileText, title: 'AI Admin Agent', desc: 'Document processing automation' },
                    { icon: Workflow, title: 'Workflow Automation', desc: 'End-to-end process orchestration' }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                        <div className="w-10 h-10 bg-[#4ade80]/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#4ade80]" />
                        </div>
                        <div>
                          <div className="text-white font-bold">{item.title}</div>
                          <div className="text-white/60 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Employees Section */}
      <section className="bg-black py-24 px-6" data-testid="section-ai-employees">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">02 — AI Employees Deployed</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Three AI Employees, One Unified Workforce
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each AI employee was trained specifically for NexGen's processes, brand voice, and customer expectations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {aiEmployees.map((employee, idx) => {
              const Icon = employee.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-8" glowOnHover={true}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#4ade80]/20 to-[#23AACA]/20 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-[#4ade80]" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">{employee.title}</h3>
                        <p className="text-white/70 mb-6">{employee.description}</p>
                        
                        <div className="grid grid-cols-3 gap-4">
                          {employee.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="text-center">
                              <div className="text-xl font-black text-[#4ade80]">{metric.value}</div>
                              <div className="text-xs text-white/50">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">Capabilities</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {employee.capabilities.map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-center gap-2 text-white/80 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#4ade80] flex-shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Automation Section */}
      <section className="bg-black py-24 px-6" data-testid="section-workflows">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">03 — Workflow Automation</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              End-to-End Process Orchestration
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We connected every system and automated every repeatable process—from order placement to delivery confirmation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflows.map((workflow, idx) => {
              const Icon = workflow.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6 h-full" glowOnHover={true}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#23AACA]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#23AACA]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{workflow.title}</h3>
                        <p className="text-white/60 text-sm">{workflow.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {workflow.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2">
                          <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                            {step}
                          </span>
                          {sIdx < workflow.steps.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-white/30" />
                          )}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-black py-16 px-6" data-testid="section-integrations">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">Connected Systems</div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full"
              >
                <span className="text-white font-medium">{integration.name}</span>
                <span className="text-white/40 text-sm ml-2">({integration.category})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-black py-24 px-6" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">04 — Implementation Timeline</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              From Kickoff to Full Deployment in 90 Days
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 h-full relative" glowOnHover={true}>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#4ade80]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#4ade80] font-bold text-sm">{idx + 1}</span>
                  </div>
                  <div className="text-[#4ade80] font-bold text-sm mb-2">{phase.week}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-white/60 text-sm">{phase.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="bg-black py-24 px-6" data-testid="section-outcome">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">05 — The Outcome</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Transformed Operations, Delighted Customers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 h-full border-l-2 border-[#4ade80]/50" glowOnHover={true}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#4ade80] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{outcome.title}</h3>
                      <p className="text-white/70">{outcome.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <GlassCard className="p-12 inline-block max-w-3xl" glowOnHover={true}>
              <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
                "OARC didn't just give us AI tools—they gave us a competitive advantage. Our customer support 
                is now better than companies 10x our size, and our sales team focuses only on closing deals."
              </p>
              <p className="text-white/60">CEO, NexGen Retail Group</p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-black py-24 px-6" data-testid="section-related">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">More Case Studies</div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Similar AI Transformations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCases.map((caseItem, idx) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={caseItem.link}>
                  <GlassCard className="overflow-hidden group cursor-pointer h-full" glowOnHover={true}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4ade80] transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-white/60">{caseItem.subtitle}</p>
                      <div className="flex items-center gap-2 mt-4 text-[#4ade80] font-medium text-sm">
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 px-6" data-testid="section-cta">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready for Your AI Transformation?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Whether you need AI customer support, AI sales agents, workflow automation, or all three—OARC 
              can deploy a complete AI workforce tailored to your business in as little as 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4ade80] to-[#23AACA] text-black font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
                  data-testid="button-cta-contact"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/services/hire-ai-employees">
                <button 
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/5 transition-colors"
                  data-testid="button-view-services"
                >
                  Explore AI Employees
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
