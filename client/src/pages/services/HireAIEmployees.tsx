import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Target, HeadphonesIcon, Brain, LayoutGrid, Megaphone, FileCheck, Calendar, Building2, Zap, Clock, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';

import sdrAgent from '@assets/stock_images/elite_sales_professi_1c84b4b4.jpg';
import supportSpecialist from '@assets/stock_images/customer_support_spe_789ecb6b.jpg';
import dataAnalyst from '@assets/stock_images/data_analyst_profess_4f5ff172.jpg';
import adminAgent from '@assets/stock_images/administrative_assis_da9e94eb.jpg';
import contentStrategist from '@assets/stock_images/content_strategist_c_61044a33.jpg';
import complianceAuditor from '@assets/stock_images/legal_compliance_off_78808712.jpg';
import appointmentBooker from '@assets/stock_images/appointment_schedule_97373ecb.jpg';
import realEstateAgent from '@assets/stock_images/real_estate_agent_pr_d5449235.jpg';

const agents = [
  {
    id: 'sdr-agent',
    slug: 'ai-sdr-agent',
    icon: Target,
    title: 'Sales Development Rep',
    tagline: '3x conversion lift',
    image: sdrAgent,
    pain: 'Manual prospecting drains resources on low-quality leads.',
    solution: 'Precision scoring algorithms qualify leads with CRM integration.',
    outcome: '3x conversions, zero wasted calls.'
  },
  {
    id: 'support-specialist',
    slug: 'ai-support-specialist',
    icon: HeadphonesIcon,
    title: 'Support Specialist',
    tagline: '90% query resolution',
    image: supportSpecialist,
    pain: 'Overloaded queues erode customer trust.',
    solution: 'Instant, tone-aware responses around the clock.',
    outcome: '90% queries resolved autonomously.'
  },
  {
    id: 'data-analyst',
    slug: 'ai-data-analyst',
    icon: Brain,
    title: 'Data Insights Analyst',
    tagline: 'Chaos to clarity',
    image: dataAnalyst,
    pain: 'Data overload hides critical trends.',
    solution: 'AI-powered dashboards spot inefficiencies.',
    outcome: 'Decisions in minutes, not weeks.'
  },
  {
    id: 'admin-agent',
    slug: 'ai-admin-agent',
    icon: LayoutGrid,
    title: 'Administrative Agent',
    tagline: '50% time reclaimed',
    image: adminAgent,
    pain: 'Routine tasks fragment your focus.',
    solution: 'Error-free automation across tools.',
    outcome: '50% of workday reclaimed.'
  },
  {
    id: 'content-strategist',
    slug: 'ai-content-strategist',
    icon: Megaphone,
    title: 'Content Strategist',
    tagline: 'Ideas to impact',
    image: contentStrategist,
    pain: 'Ad-hoc planning scatters efforts.',
    solution: 'Align trends with content calendars.',
    outcome: 'Consistent engagement engines.'
  },
  {
    id: 'compliance-auditor',
    slug: 'ai-compliance-auditor',
    icon: FileCheck,
    title: 'Compliance Auditor',
    tagline: 'GDPR bulletproof',
    image: complianceAuditor,
    pain: 'EU regulations expose serious risks.',
    solution: 'Real-time scanning with audit trails.',
    outcome: 'Bulletproof regulatory compliance.'
  },
  {
    id: 'appointment-booker',
    slug: 'ai-appointment-booker',
    icon: Calendar,
    title: 'Appointment Booker',
    tagline: '20% fewer no-shows',
    image: appointmentBooker,
    pain: 'Scheduling mishaps cause no-shows.',
    solution: 'Intelligent booking with pattern learning.',
    outcome: '20% reduction in no-shows.'
  },
  {
    id: 'real-estate-agent',
    slug: 'ai-real-estate-agent',
    icon: Building2,
    title: 'Real Estate Specialist',
    tagline: 'Malta-focused',
    image: realEstateAgent,
    pain: 'Market volatility prolongs deals.',
    solution: 'Bilingual agent with permit prediction.',
    outcome: '100x faster closures.'
  }
];

export default function HireAIEmployees() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title="AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta"
        description="Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support."
        canonicalUrl="https://oarcdigital.com/services/ai-virtual-talent-hub"
        ogType="article"
        structuredData={createServiceSchema(
          "AI Virtual Talent Hub",
          "Hire autonomous AI agents as on-demand team members—thinking, adapting, and executing 24/7 while slashing your hiring costs.",
          "AI Talent Solutions"
        )}
        schemaId="service-ai-virtual-talent-hub"
      />
      
      {/* Hero Section - Elevated Monochrome */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <AnimatedGridBackground gridOpacity={0.02} showScanLine={true} showParticles={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-8"
            >
              <span className="px-4 py-2 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-[10px] font-medium text-white/60 uppercase tracking-[0.2em]">
                Production-Tested AI Workforce
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight" 
              data-testid="heading-talent-hub"
            >
              AI Virtual Talent Hub
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 mb-6 max-w-3xl leading-relaxed"
            >
              Hire autonomous AI agents as on-demand team members—thinking, adapting, and executing 24/7 while slashing your hiring costs.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-zinc-500 mb-10 max-w-2xl"
            >
              Every agent is production-tested, not a prototype. Built from real-world MVPs that have already transformed how businesses operate.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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

      {/* Agents Grid - Enhanced Cards */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Select Your Agent</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                8 Specialized Agents
              </h2>
              <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                Each agent solves a specific pain point with production-tested precision
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <ScrollReveal key={agent.id} delay={index * 0.05}>
                  <Link href={`/services/${agent.slug}`} className="block h-full">
                    <GlassCard className="p-6 h-full cursor-pointer" glowOnHover={true}>
                      <div className="relative aspect-[4/3] mb-5 overflow-hidden">
                        <img 
                          src={agent.image} 
                          alt={agent.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <div className="w-10 h-10 bg-white flex items-center justify-center">
                            <Icon className="w-5 h-5 text-black" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {agent.title}
                      </h3>
                      <p className="text-sm text-zinc-500 mb-4">
                        {agent.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition-colors">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Agents Deep Dive */}
      <section className="py-20 md:py-28 bg-black border-t border-white/5 relative overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.01} showScanLine={false} showParticles={false} />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">How It Works</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Pain → Solution → Outcome
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="space-y-20">
            {agents.slice(0, 4).map((agent, idx) => {
              const Icon = agent.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <ScrollReveal key={agent.id} delay={idx * 0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-4 bg-white/[0.02] blur-2xl group-hover:bg-white/[0.04] transition-all duration-700" />
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img 
                            src={agent.image} 
                            alt={agent.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 transition-colors" />
                        </div>
                      </motion.div>
                    </div>
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white flex items-center justify-center">
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{agent.title}</h3>
                      </div>
                      
                      <div className="space-y-6 mb-8">
                        <GlassCard className="p-5" glowOnHover={false} liftOnHover={false}>
                          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">The Pain</span>
                          <p className="text-white/80 mt-1">{agent.pain}</p>
                        </GlassCard>
                        <GlassCard className="p-5" glowOnHover={false} liftOnHover={false}>
                          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Our Solution</span>
                          <p className="text-white/80 mt-1">{agent.solution}</p>
                        </GlassCard>
                        <GlassCard className="p-5 border-white/10" glowOnHover={false} liftOnHover={false}>
                          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">The Outcome</span>
                          <p className="text-white mt-1 font-medium">{agent.outcome}</p>
                        </GlassCard>
                      </div>
                      
                      <Link href={`/services/${agent.slug}`}>
                        <button className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors">
                          Explore {agent.title}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why OARC Agents - Monochrome Stats */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">The Advantage</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Why OARC Agents
              </h2>
              <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                Not prototypes. Production-tested AI built from real MVPs that have already delivered results.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '24/7', label: 'Always On', icon: Clock, description: 'Your AI workforce never sleeps, never takes holidays, never calls in sick.' },
              { value: '90%', label: 'Cost Reduction', icon: Zap, description: 'Slash hiring costs dramatically. No benefits, no training, no turnover.' },
              { value: 'Malta', label: 'Local Support', icon: Globe, description: 'Based in Malta with EU compliance built-in. Human support in your timezone.' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="p-10 text-center" glowOnHover={true} borderPulse={index === 0}>
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

      {/* CTA Section - Clean Monochrome */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <AnimatedGridBackground gridOpacity={0.02} showScanLine={true} showParticles={true} />
        <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6">Get Started</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Ready to Build Your AI Workforce?
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Book a strategy call with our Malta team. We'll analyze your operations and recommend which agents will deliver the highest ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group px-12 py-5 bg-white text-black font-semibold inline-flex items-center justify-center gap-3 hover:bg-white/90 transition-all duration-300" data-testid="button-book-strategy-call">
                    Book Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-12 py-5 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
                    Explore All Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
}
