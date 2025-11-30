import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Target, HeadphonesIcon, Brain, LayoutGrid, Megaphone, FileCheck, Calendar, Building2, Zap, Clock, Globe, MessageSquare, Database, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { ProcessFlow, DecisionTree } from '@/components/ui/ai-flow-canvas';
import { 
  NeuralBrain, 
  LightningBolt, 
  ClockSpeed, 
  GlobeNetwork,
  AIIconWithGlow,
  NetworkHub,
  DataFlow
} from '@/components/ui/ai-icons';

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
      
      {/* Hero Section - Dramatic Atmospheric */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-black min-h-[80vh] flex items-center">
        <AnimatedGridBackground 
          intensity="high" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="px-5 py-2.5 bg-white/[0.05] backdrop-blur-md border border-white/15 rounded-full flex items-center gap-3">
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-white/70 uppercase tracking-[0.2em]">
                  Production-Tested AI Workforce
                </span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight" 
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
              className="text-base text-zinc-500 mb-12 max-w-2xl"
            >
              Every agent is production-tested, not a prototype. Built from real-world MVPs that have already transformed how businesses operate.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-5"
            >
              <Link href="/contact">
                <motion.button 
                  className="group px-12 py-6 bg-white text-black font-bold text-lg inline-flex items-center gap-3 hover:bg-white/90 transition-all duration-300" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-get-started"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button 
                  className="px-12 py-6 bg-white/[0.05] backdrop-blur-md border border-white/15 text-white font-semibold text-lg hover:bg-white/[0.1] hover:border-white/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Services
                </motion.button>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW AI AGENTS WORK - Visual Flow Section */}
      <section className="py-32 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground 
          intensity="medium" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={false}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] border border-white/15 rounded-full mb-6"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs text-white/70 uppercase tracking-[0.2em]">How AI Agents Work</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                See AI in Action
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Our AI agents follow an intelligent workflow to deliver results
              </p>
            </div>
          </ScrollReveal>

          {/* AI Decision Flow */}
          <ScrollReveal delay={0.2}>
            <div className="mb-16">
              <DecisionTree
                question="Incoming Task or Request"
                yesPath={{ 
                  label: "AI Handles", 
                  percentage: "85%",
                  description: "Autonomous execution"
                }}
                noPath={{ 
                  label: "Human Review", 
                  percentage: "15%",
                  description: "Complex decisions"
                }}
              />
            </div>
          </ScrollReveal>

          {/* Process Flow */}
          <ScrollReveal delay={0.3}>
            <GlassCard className="p-10 md:p-14" variant="strong" showCornerAccents={true}>
              <h3 className="text-center text-lg text-white/60 mb-10 uppercase tracking-[0.2em]">
                Agent Workflow Pipeline
              </h3>
              <ProcessFlow
                steps={[
                  { icon: <MessageSquare className="w-6 h-6" />, label: "Receive", sublabel: "Task Input" },
                  { icon: <Brain className="w-6 h-6" />, label: "Analyze", sublabel: "Context" },
                  { icon: <Database className="w-6 h-6" />, label: "Process", sublabel: "Knowledge" },
                  { icon: <Zap className="w-6 h-6" />, label: "Execute", sublabel: "Action" },
                  { icon: <CheckCircle2 className="w-6 h-6" />, label: "Deliver", sublabel: "Results" },
                ]}
              />
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Agents Grid - Enhanced Cards */}
      <section className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={false} showConcentricRings={false} />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Select Your Agent</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                8 Specialized Agents
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Each agent solves a specific pain point with production-tested precision
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <ScrollReveal key={agent.id} delay={index * 0.05}>
                  <Link href={`/services/${agent.slug}`} className="block h-full">
                    <GlassCard 
                      className="p-6 h-full cursor-pointer group" 
                      variant="strong"
                      glowOnHover={true}
                      showCornerAccents={true}
                    >
                      <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                        <img 
                          src={agent.image} 
                          alt={agent.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-[0.3] transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        
                        {/* Icon Badge with Glow */}
                        <motion.div 
                          className="absolute bottom-4 left-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="relative w-12 h-12 bg-white flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/30 blur-lg" />
                            <Icon className="relative w-6 h-6 text-black" />
                          </div>
                        </motion.div>
                        
                        {/* Border effect */}
                        <div className="absolute inset-0 border border-white/10 group-hover:border-white/25 transition-colors rounded-lg" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">
                        {agent.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mb-5">
                        {agent.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                        <span>Explore Agent</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
      <section className="py-32 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={false} />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Deep Dive</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Pain → Solution → Outcome
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                See how each agent transforms your business challenges into results
              </p>
            </div>
          </ScrollReveal>
          
          <div className="space-y-24">
            {agents.slice(0, 4).map((agent, idx) => {
              const Icon = agent.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <ScrollReveal key={agent.id} delay={idx * 0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                      >
                        {/* Multi-layer glow */}
                        <div className="absolute -inset-8 bg-white/[0.02] blur-3xl group-hover:bg-white/[0.05] transition-all duration-700 rounded-3xl" />
                        <div className="absolute -inset-4 bg-white/[0.01] blur-2xl transition-all duration-500" />
                        
                        <div className="relative overflow-hidden aspect-[4/3] rounded-xl">
                          <img 
                            src={agent.image} 
                            alt={agent.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-[0.3] transition-all duration-700 scale-105 group-hover:scale-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          {/* Premium border */}
                          <div className="absolute inset-0 border border-white/15 group-hover:border-white/30 transition-colors rounded-xl" />
                          
                          {/* Corner accents */}
                          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-xl" />
                          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-xl" />
                          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-xl" />
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-xl" />
                        </div>
                      </motion.div>
                    </div>
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="flex items-center gap-5 mb-8">
                        <motion.div 
                          className="relative w-14 h-14 bg-white flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="absolute inset-0 bg-white/30 blur-xl" />
                          <Icon className="relative w-7 h-7 text-black" />
                        </motion.div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">{agent.title}</h3>
                      </div>
                      
                      <div className="space-y-5 mb-10">
                        <GlassCard className="p-6" variant="default" glowOnHover={false} liftOnHover={false}>
                          <span className="text-xs font-bold text-white/40 uppercase tracking-wider">The Pain</span>
                          <p className="text-white/80 mt-2 text-lg">{agent.pain}</p>
                        </GlassCard>
                        <GlassCard className="p-6" variant="default" glowOnHover={false} liftOnHover={false}>
                          <span className="text-xs font-bold text-white/40 uppercase tracking-wider">Our Solution</span>
                          <p className="text-white/80 mt-2 text-lg">{agent.solution}</p>
                        </GlassCard>
                        <GlassCard className="p-6" variant="strong" glowOnHover={false} liftOnHover={false}>
                          <span className="text-xs font-bold text-white/40 uppercase tracking-wider">The Outcome</span>
                          <p className="text-white mt-2 text-lg font-semibold">{agent.outcome}</p>
                        </GlassCard>
                      </div>
                      
                      <Link href={`/services/${agent.slug}`}>
                        <motion.button 
                          className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors font-medium"
                          whileHover={{ x: 5 }}
                        >
                          Explore {agent.title}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why OARC Agents - Enhanced with Custom Icons */}
      <section className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground intensity="medium" showScanLine={false} showParticles={true} showConcentricRings={true} />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">The Advantage</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Why OARC Agents
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Not prototypes. Production-tested AI built from real MVPs that have already delivered results.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { value: '24/7', label: 'Always On', Icon: ClockSpeed, description: 'Your AI workforce never sleeps, never takes holidays, never calls in sick.' },
              { value: '90%', label: 'Cost Reduction', Icon: LightningBolt, description: 'Slash hiring costs dramatically. No benefits, no training, no turnover.' },
              { value: 'Malta', label: 'Local Support', Icon: GlobeNetwork, description: 'Based in Malta with EU compliance built-in. Human support in your timezone.' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <GlassCard 
                  className="p-12 text-center" 
                  variant="strong"
                  glowOnHover={true} 
                  borderPulse={index === 0}
                  showCornerAccents={true}
                >
                  <div className="flex justify-center mb-8">
                    <AIIconWithGlow icon={stat.Icon} size={96} />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-white/90 mb-4">{stat.label}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{stat.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Treatment */}
      <section className="py-40 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground 
          intensity="high" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={true}
        />
        <div className="absolute inset-0 bg-gradient-radial from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
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
                Ready to Build Your AI Workforce?
              </h2>
              <p className="text-xl text-zinc-400 mb-14 max-w-2xl mx-auto leading-relaxed">
                Book a strategy call with our Malta team. We'll analyze your operations and recommend which agents will deliver the highest ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact">
                  <motion.button 
                    className="group px-14 py-6 bg-white text-black font-bold text-lg inline-flex items-center justify-center gap-3 hover:bg-white/90 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid="button-book-strategy-call"
                  >
                    Book Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button 
                    className="px-14 py-6 bg-white/[0.05] backdrop-blur-md border border-white/20 text-white font-semibold text-lg hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore All Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
}
