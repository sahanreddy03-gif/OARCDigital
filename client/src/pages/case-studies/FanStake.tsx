import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Zap, TrendingUp, Target, Filter, Users, Mail, BarChart3, CheckCircle2, Clock, Shield, Rocket, DollarSign } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { FlowDiagram } from '@/components/ui/flow-diagram';
import { motion } from 'framer-motion';

import aiLeadEngineDashboard from '@assets/generated_images/ai_lead_engine_dashboard.png';

export default function FanStakeCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workflowSteps = [
    { icon: <Target className="w-full h-full" />, label: "Lead Capture" },
    { icon: <Filter className="w-full h-full" />, label: "AI Scoring" },
    { icon: <Mail className="w-full h-full" />, label: "Nurture Flow" },
    { icon: <DollarSign className="w-full h-full" />, label: "Conversion" },
  ];

  const integrations = [
    'HubSpot', 'Salesforce', 'Stripe', 'Zapier', 'Mailchimp', 'Slack', 'Google Analytics', 'Segment'
  ];

  return (
    <Layout>
      <SEOHead
        title="AI Lead Engine Case Study | 10x Pipeline Velocity | OARC Digital"
        description="How OARC Digital deployed an AI-powered lead generation engine that qualified prospects automatically, increasing pipeline velocity by 10x and reducing cost per acquisition."
        canonicalUrl="https://oarcdigital.com/case-studies/fanstake-sports-platform"
        ogType="article"
      />

      {/* Hero Section - Monochrome Design */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
        <AnimatedGridBackground intensity="high" showParticles={true} showScanLine={true} />
        
        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium" data-testid="text-eyebrow">AI Revenue Engine • Lead Generation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-testid="heading-case-study-title">
              How an AI Engine Drove 10x Pipeline Velocity for a B2B SaaS Company
            </h1>
            
            <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8" data-testid="text-hero-description">
              Deploying an automated lead qualification and nurturing system that identified high-intent prospects, reduced manual effort, and accelerated the path from lead to customer.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Clock className="w-4 h-4 text-white/50" />
                <span className="text-sm text-white/70">8-month engagement</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Shield className="w-4 h-4 text-white/50" />
                <span className="text-sm text-white/70">Full-stack deployment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Monochrome */}
      <section className="py-16 px-4 bg-zinc-950 border-y border-white/5" data-testid="section-stats">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: '10x', label: 'Pipeline Velocity' },
              { value: '67%', label: 'Lower CPA' },
              { value: '340%', label: 'Lead Volume Growth' },
              { value: '85%', label: 'Qualification Accuracy' },
            ].map((stat, i) => (
              <GlassCard key={i} className="p-6 text-center" glowOnHover={true} liftOnHover={false}>
                <div className="text-3xl md:text-4xl font-black text-white mb-2" data-testid={`stat-value-${i}`}>{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/50 font-medium">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-black" data-testid="section-overview">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-bold text-white/40 uppercase mb-4 tracking-wider" data-testid="text-section-label">Overview</p>
              
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8" data-testid="heading-overview">
                From Manual Outreach to Automated Revenue Machine
              </h2>

              <p className="text-base text-white/60 mb-6 leading-relaxed" data-testid="text-overview-1">
                A growing B2B SaaS company was struggling with lead quality and sales efficiency. Their SDR team was burning through hundreds of leads monthly, with no clear way to prioritize high-intent prospects. They needed a system that could intelligently qualify leads before human involvement.
              </p>

              <p className="text-base text-white/60 mb-8 leading-relaxed" data-testid="text-overview-2">
                We built an AI-powered revenue engine that captured leads from multiple channels, scored them using behavioral and firmographic data, and automatically nurtured them through personalized sequences. Only sales-ready prospects reached the human team—complete with full engagement history and intent signals. The system was later acquired as part of a martech consolidation in 2023.
              </p>
            </div>

            <div className="relative">
              <GlassCard className="overflow-hidden" glowOnHover={true}>
                <img 
                  src={aiLeadEngineDashboard}
                  alt="AI Lead Generation Engine dashboard showing lead scoring, pipeline funnel analytics, and automated nurture sequences"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  data-testid="img-product-screenshot"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">AI Solution Type</p>
                  <p className="text-white font-bold">Lead Generation & Qualification Engine</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Diagram Section */}
      <section className="py-20 px-4 bg-zinc-950 border-y border-white/5" data-testid="section-workflow">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-white/40 uppercase mb-4 tracking-wider text-center">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
            Automated Lead-to-Revenue Pipeline
          </h2>

          <FlowDiagram steps={workflowSteps} />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <GlassCard className="p-6" variant="subtle">
              <h3 className="text-lg font-bold text-white mb-3">Intelligent Lead Scoring</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                The AI analyzes 40+ signals including company size, industry, engagement patterns, and content consumption to assign dynamic lead scores. High-intent prospects are fast-tracked while others enter nurture sequences.
              </p>
            </GlassCard>

            <GlassCard className="p-6" variant="subtle">
              <h3 className="text-lg font-bold text-white mb-3">Personalized Nurturing</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Each lead receives tailored content based on their industry, role, and behavior. The AI optimizes send times, subject lines, and content selection to maximize engagement and conversion.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-4 bg-black" data-testid="section-challenge">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-bold text-white/40 uppercase mb-4 tracking-wider">Challenge</p>
              <h3 className="text-2xl font-black text-white mb-6">The Lead Quality Crisis</h3>
              
              <div className="space-y-4">
                {[
                  'SDRs wasting 70% of time on unqualified leads',
                  'No visibility into which leads were sales-ready',
                  'Manual nurturing couldn\'t scale with growth',
                  'Inconsistent follow-up leading to lost opportunities'
                ].map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/50 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-white/40 uppercase mb-4 tracking-wider">Solution</p>
              <h3 className="text-2xl font-black text-white mb-6">AI-Powered Revenue Automation</h3>
              
              <div className="space-y-4">
                {[
                  'Predictive lead scoring with 85% accuracy',
                  'Automated multi-channel nurture sequences',
                  'Real-time intent signals and alerts',
                  'Complete lead journey visibility for sales team'
                ].map((solution, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                    <span className="text-white/50 text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-zinc-950 border-y border-white/5" data-testid="section-integrations">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold text-white/40 uppercase mb-4 tracking-wider">Integrations</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Connected to Your Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((integration, i) => (
              <div 
                key={i}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/60"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-black" data-testid="section-results">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-white/40 uppercase mb-4 tracking-wider">Outcome</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Revenue Growth on Autopilot
          </h2>

          <p className="text-base text-white/60 mb-6 leading-relaxed">
            Within 120 days, the lead engine had processed over 15,000 leads, automatically qualifying and routing them based on intent signals. The SDR team went from spending 70% of their time on cold outreach to focusing exclusively on warm, sales-ready prospects. Cost per acquisition dropped significantly while conversion rates improved.
          </p>

          <p className="text-base text-white/60 mb-8 leading-relaxed" data-testid="text-results-2">
            The AI nurturing system maintained engagement with prospects who weren't ready to buy, automatically re-engaging them when intent signals spiked. Following demonstrated ROI and scalability, the technology platform was acquired by a marketing technology company in Q3 2023 as part of their AI automation suite expansion.
          </p>

          <GlassCard className="p-6" data-testid="testimonial-block">
            <p className="text-white/60 italic text-base mb-4" data-testid="text-testimonial">
              "Our pipeline went from unpredictable to a well-oiled machine. We know exactly which leads to prioritize, and the AI handles everything else. Our sales team is finally selling instead of sorting."
            </p>
            <p className="text-sm font-bold text-white/80" data-testid="text-testimonial-author">— VP of Sales</p>
          </GlassCard>
        </div>
      </section>

      {/* Related AI Services */}
      <section className="py-20 px-4 bg-zinc-950 border-t border-white/5" data-testid="section-related">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold text-white/40 uppercase mb-4 tracking-wider">Explore Revenue Automation</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8">
            Related AI Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'AI Revenue Engine', description: 'End-to-end revenue automation', link: '/services/ai-revenue-engine' },
              { title: 'Customer Acquisition', description: 'Automated growth systems', link: '/services/customer-acquisition-accelerator' },
              { title: 'Funnel Optimization', description: 'AI-powered conversion boost', link: '/services/funnel-optimization-agent' },
            ].map((service, i) => (
              <Link key={i} href={service.link}>
                <GlassCard className="p-6 h-full cursor-pointer" glowOnHover={true}>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/50 mb-4">{service.description}</p>
                  <div className="flex items-center text-white/60 text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Automate Your Revenue?</h2>
          <p className="text-base text-white/50 mb-8 max-w-2xl mx-auto">
            Whether you need lead qualification, pipeline acceleration, or full revenue automation—our AI systems work around the clock to drive growth.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 group" data-testid="button-contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
