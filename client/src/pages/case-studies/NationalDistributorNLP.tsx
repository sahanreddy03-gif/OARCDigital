import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, CheckCircle2, Database, Layers, TrendingUp, Zap, Globe, Clock, BarChart3, Search, FileCheck, RefreshCw, Shield, Server, Cpu } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { FlowDiagram } from '@/components/ui/flow-diagram';
import { motion } from 'framer-motion';

import aiDataCleansingDashboard from '@assets/generated_images/ai_data_cleansing_dashboard.png';

export default function NationalDistributorNLPCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '10,000+', label: 'SKUs Transformed', icon: Database },
    { value: '99.2%', label: 'Data Accuracy', icon: CheckCircle2 },
    { value: '73%', label: 'Error Reduction', icon: TrendingUp },
    { value: '4 Weeks', label: 'Time to Complete', icon: Clock }
  ];

  const technologies = [
    'Python', 'NLP Models', 'PostgreSQL', 'Fuzzy Matching', 'Apache Airflow', 'Docker', 'REST APIs', 'Redis', 'Elasticsearch', 'Power BI'
  ];

  const services = [
    { icon: Cpu, title: 'NLP-Powered Standardization', description: 'AI models normalized product names, supplier codes, and category formats across 10,000+ SKUs' },
    { icon: Search, title: 'Fuzzy Matching & De-duplication', description: 'Sophisticated algorithms identified and merged duplicate records across product, customer, and supplier datasets' },
    { icon: Shield, title: 'Rule-Based Validation Engine', description: 'Custom rules flagged anomalies, invalid SKU patterns, and incomplete fields automatically' },
    { icon: BarChart3, title: 'Real-Time Quality Dashboards', description: 'Live visibility into data health metrics across all systems for ongoing governance' }
  ];

  const workflowSteps = [
    { icon: <Search className="w-full h-full" />, label: 'Data Audit' },
    { icon: <Cpu className="w-full h-full" />, label: 'NLP Processing' },
    { icon: <RefreshCw className="w-full h-full" />, label: 'De-duplicate' },
    { icon: <CheckCircle2 className="w-full h-full" />, label: 'Validate & Enrich' }
  ];

  const challenges = [
    { title: 'Misaligned Product IDs', description: 'Product identifiers varied across ERP, CRM, and legacy spreadsheets with no single source of truth' },
    { title: 'Duplicate Records', description: 'Same customers, suppliers, and products existed multiple times with inconsistent data' },
    { title: 'Non-Standard Formats', description: 'Dates, addresses, SKUs, and units followed different formats across systems' },
    { title: 'Missing Fields', description: 'Critical data gaps across thousands of records causing operational delays' }
  ];

  const solutions = [
    { 
      title: 'Data Audit Across Systems', 
      description: 'Mapped inconsistencies across ERP, CRM, and offline databases to build a unified data model that became the single source of truth.'
    },
    { 
      title: 'AI-Led Record Standardization', 
      description: 'NLP models normalized product names, supplier codes, and category formats. Formatting rules applied for units of measure, addresses, SKUs, and date structures.'
    },
    { 
      title: 'Fuzzy Matching & De-duplication', 
      description: 'Sophisticated data matching techniques identified and merged duplicate records across product, customer, and supplier datasets.'
    },
    { 
      title: 'Rule-Based Validation Engine', 
      description: 'Built custom rules (valid SKU patterns, category logic) to flag anomalies and incomplete fields in real-time.'
    },
    { 
      title: 'Enrichment and Completion', 
      description: 'Leveraged external data sources to auto-complete address fields and supplier data, filling gaps across thousands of records.'
    },
    { 
      title: 'Real-Time Data Quality Dashboards', 
      description: 'Deployed dashboards giving leadership full visibility into data health metrics across systems, supporting ongoing governance.'
    }
  ];

  const outcomes = [
    { title: 'Dramatic Reduction in Order Errors', description: 'Standardized product and supplier records improved system accuracy and reduced fulfillment mistakes' },
    { title: 'Stronger Forecasting & Reporting', description: 'Clean, unified data allowed for precise inventory tracking and more accurate demand planning' },
    { title: 'Faster Operations', description: 'Team members no longer slowed down by inconsistent records, duplicates, or manual corrections' },
    { title: 'Foundation for Scalable AI', description: 'Clean dataset now enables AI automation across supply chain, pricing, and customer experience' }
  ];

  return (
    <Layout>
      <SEOHead
        title="AI Data Engine | NLP Data Transformation Case Study | OARC Digital"
        description="How OARC deployed AI-powered data cleansing to transform 10,000+ chaotic stock cards into clean, intelligent data for a major UK food & beverage distributor. NLP and data engineering case study."
        canonicalUrl="https://oarcdigital.com/case-studies/national-distributor-nlp"
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
                <span className="text-sm font-medium text-white/80">AI Data Engineering • NLP Processing</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl leading-tight" data-testid="heading-case-study-title">
                AI-Driven Data Engineering That Transformed 10,000+ Stock Cards
              </h1>

              <p className="text-xl text-white/80 max-w-3xl mb-10">
                How we deployed a custom AI-powered data cleansing framework that turned a fractured data ecosystem 
                into a structured, intelligent foundation—without interrupting operations.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <GlassCard key={idx} className="p-6 text-center" glowOnHover={true}>
                      <Icon className="w-6 h-6 text-[#47F5E4] mx-auto mb-3" />
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
                src={aiDataCleansingDashboard}
                alt="AI data cleansing dashboard showing data quality metrics, fuzzy matching results, and real-time data health monitoring"
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
              <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">01 — Client Overview</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                A Major Player in Food & Beverage Distribution
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Our client operates across both B2B and B2C channels, supplying non-perishable goods to a vast 
                customer base across the United Kingdom. With over 10,000+ unique SKUs and a substantial operational footprint, 
                the business depends heavily on clean, reliable data for inventory management, order processing, 
                and customer relationship workflows.
              </p>
              <p className="text-lg text-white/80 mb-8">
                All operations are centralized through a complex ERP system integrated with legacy spreadsheets 
                and CRM platforms—a common scenario that creates data chaos at scale.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-[#47F5E4]/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Industry</div>
                  <div className="text-white font-bold">Food & Beverage</div>
                </div>
                <div className="border-l-2 border-[#47F5E4]/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Region</div>
                  <div className="text-white font-bold">United Kingdom</div>
                </div>
                <div className="border-l-2 border-[#47F5E4]/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Scale</div>
                  <div className="text-white font-bold">10,000+ SKUs</div>
                </div>
                <div className="border-l-2 border-[#47F5E4]/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Timeline</div>
                  <div className="text-white font-bold">4 Weeks</div>
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
                <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-6">Data Workflow</div>
                <FlowDiagram steps={workflowSteps} />
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-black py-24 px-6" data-testid="section-challenge">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">02 — The Challenge</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              A Data Ecosystem Breaking Down
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Despite their scale, the client's data ecosystem was causing material business issues 
              that impacted operations daily.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 h-full border-l-2 border-red-500/30" glowOnHover={true}>
                  <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                  <p className="text-white/70">{challenge.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <GlassCard className="p-8 border-l-4 border-red-500/50">
              <h3 className="text-xl font-bold text-white mb-4">Business Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Frequent order errors', 'Delayed fulfillment', 'Inaccurate forecasting', 'Poor reporting visibility'].map((impact, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 bg-red-500/80 rounded-full flex-shrink-0" />
                    <span className="text-sm">{impact}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-black py-24 px-6" data-testid="section-solution">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">03 — The Solution</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              AI-Powered Data Cleansing Framework
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              OARC deployed a custom AI-powered data cleansing framework designed to clean, 
              standardize, and strengthen the client's data architecture—without interrupting operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 h-full" glowOnHover={true}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#47F5E4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#47F5E4] font-bold">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-white/70">{solution.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
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
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-4">04 — What We Built</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Core Capabilities Delivered
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6 h-full" glowOnHover={true}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#47F5E4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#47F5E4]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/70">{service.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-black py-16 px-6" data-testid="section-tech-stack">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear'
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...technologies, ...technologies].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                  <Server className="w-4 h-4 text-[#47F5E4]" />
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </motion.div>
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
              From Bottleneck to Business Enabler
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              In just weeks, OARC transformed a fractured data ecosystem into a structured, 
              intelligent foundation that enabled business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 h-full border-l-2 border-[#47F5E4]/50" glowOnHover={true}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#47F5E4] flex-shrink-0 mt-1" />
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
            className="mt-16 text-center"
          >
            <GlassCard className="p-12 inline-block max-w-3xl" glowOnHover={true}>
              <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
                "What was once a bottleneck is now a business enabler—driven by OARC's ability to combine AI, 
                data engineering, and strategic problem-solving in one seamless solution."
              </p>
              <p className="text-white/60">Operations Director, F&B Distribution Client</p>
            </GlassCard>
          </motion.div>
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
              Drowning in Data Chaos?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              If your business is struggling with inconsistent data, manual corrections, and operational delays, 
              OARC can deploy AI-powered solutions to clean and unify your data foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button 
                  className="inline-flex items-center justify-center gap-2 bg-[#47F5E4] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#47F5E4]/90 transition-colors"
                  data-testid="button-cta-contact"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/our-work">
                <button 
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/5 transition-colors"
                  data-testid="button-view-more"
                >
                  View More Case Studies
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
