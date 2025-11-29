import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Target, HeadphonesIcon, Brain, LayoutGrid, Megaphone, FileCheck, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";

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
    title: 'Sales Development Rep Agent',
    tagline: 'Precision lead qualification with 3x conversion lift',
    image: sdrAgent,
    pain: 'Manual prospecting drains resources on low-quality leads, missing revenue opportunities in competitive markets. Your sales team wastes hours chasing prospects who were never going to convert.',
    solution: 'Our production-tested SDR agent qualifies leads with precision scoring algorithms, integrating seamlessly with your CRM. Built to adapt like a seasoned rep—it learns your ideal customer profile and ruthlessly filters out time-wasters.',
    features: ['Objection handling & crushing', 'Bilingual outreach (EN/MT)', 'Predictive lead analytics', 'CRM auto-sync'],
    outcome: 'Achieve 3x conversions while freeing your human team to focus exclusively on high-value closes. No more wasted calls.'
  },
  {
    id: 'support-specialist',
    slug: 'ai-support-specialist',
    icon: HeadphonesIcon,
    title: 'Customer Support Specialist',
    tagline: '24/7 empathetic responses, 90% query resolution',
    image: supportSpecialist,
    pain: 'Overloaded support queues lead to delays, frustrated customers, and eroding trust. Every minute of wait time chips away at your retention rates.',
    solution: 'This production-tested agent delivers instant, tone-aware responses around the clock. It escalates only when genuinely needed—handling the repetitive queries that burn out your human team.',
    features: ['Empathy detection AI', 'Knowledge base integration', 'Resolution tracking', 'Smart escalation routing'],
    outcome: 'Boost retention by autonomously handling 90% of incoming queries. Your support team focuses on complex issues that actually need human judgment.'
  },
  {
    id: 'data-analyst',
    slug: 'ai-data-analyst',
    icon: Brain,
    title: 'Data Insights Analyst',
    tagline: 'Turn data chaos into strategic dashboards',
    image: dataAnalyst,
    pain: 'Data overload hides critical trends, leading to flawed decisions. Your team drowns in spreadsheets while actionable insights slip through the cracks.',
    solution: 'Our production-tested analyst crunches datasets into clear dashboards, spotting inefficiencies and opportunities with AI-powered foresight. No more guesswork—just data-driven decisions.',
    features: ['Trend forecasting', 'Custom visualizations', 'API data pulls', 'Anomaly detection'],
    outcome: 'Save thousands by turning raw data into strategic advantages. Make decisions in minutes that used to take weeks of analysis.'
  },
  {
    id: 'admin-agent',
    slug: 'ai-admin-agent',
    icon: LayoutGrid,
    title: 'Administrative Workflow Agent',
    tagline: 'Reclaim 50% of your day from routine tasks',
    image: adminAgent,
    pain: 'Routine administrative tasks fragment your focus, stalling productivity. Scheduling, emails, and follow-ups consume hours that should go toward innovation.',
    solution: 'Precision-built to automate with error-free execution, syncing seamlessly across your existing tools. From calendar management to document organization—handled without human intervention.',
    features: ['Smart scheduling', 'Automated email responses', 'Reminder chains', 'Cross-platform sync'],
    outcome: 'Reclaim 50% of your workday for high-value activities. Let the agent handle the administrative burden that was holding you back.'
  },
  {
    id: 'content-strategist',
    slug: 'ai-content-strategist',
    icon: Megaphone,
    title: 'Content Strategy Coordinator',
    tagline: 'Transform scattered ideas into engagement engines',
    image: contentStrategist,
    pain: 'Ad-hoc content planning scatters your efforts and dilutes impact. Without a coherent strategy, your marketing becomes noise instead of signal.',
    solution: 'This production-tested coordinator aligns trending topics with content calendars for cohesive, high-impact strategies. It spots what will resonate before you publish.',
    features: ['Idea generation AI', 'Performance optimization', 'Multi-channel planning', 'Trend analysis'],
    outcome: 'Transform scattered content ideas into consistent engagement engines. Every piece of content works harder because it is part of a strategy.'
  },
  {
    id: 'compliance-auditor',
    slug: 'ai-compliance-auditor',
    icon: FileCheck,
    title: 'Compliance & Legal Auditor',
    tagline: 'GDPR bulletproof, real-time risk scanning',
    image: complianceAuditor,
    pain: 'EU regulations like GDPR expose serious risks, inviting fines without vigilant oversight. Manual compliance checks miss gaps that could cost you millions.',
    solution: 'Our production-tested auditor scans operations and contracts in real-time, flagging issues with complete audit-ready documentation trails. Built for Malta and EU regulatory frameworks.',
    features: ['Regulation update tracking', 'Risk scoring', 'Compliance automation', 'Audit trail generation'],
    outcome: 'Operate bulletproof against regulatory risk, avoiding costly pitfalls before they become headlines. Peace of mind, automated.'
  },
  {
    id: 'appointment-booker',
    slug: 'ai-appointment-booker',
    icon: Calendar,
    title: 'Appointment Booker Agent',
    tagline: 'Reduce no-shows 20%, intelligent scheduling',
    image: appointmentBooker,
    pain: 'Scheduling mishaps cause no-shows, lost opportunities, and frustrated clients. Double-bookings and timezone confusion destroy your professional image.',
    solution: 'This production-tested agent predicts and manages bookings intelligently, learning patterns to optimize availability and reduce friction for both sides.',
    features: ['Calendar sync across platforms', 'Automated reminders', 'Availability optimization', 'Timezone handling'],
    outcome: 'Reduce no-shows by 20% while streamlining operations. Never lose another deal because someone forgot to confirm.'
  },
  {
    id: 'real-estate-agent',
    slug: 'ai-real-estate-agent',
    icon: Building2,
    title: 'Real Estate Sales Specialist',
    tagline: 'Malta-focused, bilingual deal acceleration',
    image: realEstateAgent,
    pain: 'Market volatility and expat hurdles prolong deals in specialized niches like Malta. Language barriers and permit complexities kill promising transactions.',
    solution: 'Bilingual agent that qualifies leads, simulates negotiations, and predicts permit timelines. Built specifically for Mediterranean real estate dynamics and Malta unique market.',
    features: ['Data-driven market insights', 'Deal tracking', 'Psych-adapted closing', 'Permit timeline prediction'],
    outcome: 'Accelerate closures 100x with tailored efficiency. Close deals that competitors cannot even navigate.'
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
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(196,255,77,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(196,255,77,0.08),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 rounded-full text-sm font-medium text-[#c4ff4d] mb-6">
            <span className="w-1.5 h-1.5 bg-[#c4ff4d] rounded-full animate-pulse"></span>
            Production-Tested AI Workforce
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-talent-hub" style={{ letterSpacing: '-0.04em' }}>
            AI Virtual Talent Hub
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl leading-relaxed">
            Hire autonomous AI agents as on-demand team members—thinking, adapting, and executing 24/7 while slashing your hiring costs.
          </p>
          
          <p className="text-base text-zinc-400 mb-10 max-w-2xl">
            Every agent is production-tested, not a prototype. Built from real-world MVPs that have already transformed how businesses operate. Malta-based support included.
          </p>
          
          <Link href="/contact">
            <button className="group inline-flex items-center gap-3 bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black rounded-full pl-8 pr-4 py-4 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff4d]/20" data-testid="button-get-started">
              Get Started
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4" style={{ letterSpacing: '-0.03em' }}>
              8 Specialized Agents. <span className="text-[#c4ff4d]">Zero Guesswork.</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Each agent solves a specific pain point with a production-tested solution. Click to explore the full capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <Link 
                  key={agent.id} 
                  href={`/services/${agent.slug}`}
                  className="group"
                >
                  <div className="relative h-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 hover:border-[#c4ff4d]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg" data-testid={`card-agent-${agent.id}`}>
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c4ff4d] transition-colors">
                      <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#1a2e29] transition-colors">
                      {agent.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                      {agent.tagline}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 group-hover:text-[#c4ff4d] transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Agents Deep Dive */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-12 text-center" style={{ letterSpacing: '-0.03em' }}>
            Deep Dive: <span className="text-[#c4ff4d]">Pain → Solution → Outcome</span>
          </h2>
          
          <div className="space-y-16">
            {agents.slice(0, 4).map((agent, idx) => {
              const Icon = agent.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={agent.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <img 
                      src={agent.image} 
                      alt={agent.title}
                      className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#c4ff4d]" />
                      </div>
                      <h3 className="text-2xl font-bold text-black">{agent.title}</h3>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">The Pain</span>
                        <p className="text-sm text-zinc-700 mt-1">{agent.pain}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#c4ff4d] uppercase tracking-wider">Our Solution</span>
                        <p className="text-sm text-zinc-700 mt-1">{agent.solution}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">The Outcome</span>
                        <p className="text-sm text-zinc-700 mt-1">{agent.outcome}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {agent.features.map((feature, fIdx) => (
                        <span key={fIdx} className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-700">
                          <CheckCircle2 className="w-3 h-3 text-[#c4ff4d]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/services/${agent.slug}`}>
                      <button className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#c4ff4d] transition-colors">
                        Explore {agent.title}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why OARC Agents */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Why OARC <span className="text-[#c4ff4d]">Agents?</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Not prototypes. Production-tested AI built from real MVPs that have already delivered results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
              <div className="text-4xl font-black text-[#c4ff4d] mb-3">24/7</div>
              <h3 className="text-lg font-bold text-white mb-2">Always On</h3>
              <p className="text-sm text-zinc-400">Your AI workforce never sleeps, never takes holidays, never calls in sick. Consistent output around the clock.</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
              <div className="text-4xl font-black text-[#c4ff4d] mb-3">90%</div>
              <h3 className="text-lg font-bold text-white mb-2">Cost Reduction</h3>
              <p className="text-sm text-zinc-400">Slash hiring costs dramatically. No benefits, no training costs, no turnover. Just consistent execution.</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
              <div className="text-4xl font-black text-[#c4ff4d] mb-3">Malta</div>
              <h3 className="text-lg font-bold text-white mb-2">Local Support</h3>
              <p className="text-sm text-zinc-400">Based in Malta with EU compliance built-in. Human support when you need it, in your timezone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#c4ff4d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6" style={{ letterSpacing: '-0.03em' }}>
            Ready to Build Your AI Workforce?
          </h2>
          <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
            Book a strategy call with our Malta team. We will analyze your operations and recommend which agents will deliver the highest ROI for your specific situation.
          </p>
          <Link href="/contact">
            <button className="group inline-flex items-center gap-3 bg-black hover:bg-zinc-800 text-white rounded-full pl-8 pr-4 py-4 text-base font-semibold transition-all duration-300" data-testid="button-book-strategy-call">
              Book Strategy Call
              <div className="w-10 h-10 bg-[#c4ff4d] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
