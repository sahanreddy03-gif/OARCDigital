import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Bot, MessageSquare, Calendar, TrendingUp, Clock, Shield, Zap, CheckCircle2, Phone, Mail, Database, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { FlowDiagram } from '@/components/ui/flow-diagram';
import { motion } from 'framer-motion';

import aiRealEstateDashboard from '@assets/generated_images/ai_real_estate_lead_dashboard.png';

export default function PropFlowCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workflowSteps = [
    { icon: <Phone className="w-full h-full" />, label: "Lead Capture" },
    { icon: <Bot className="w-full h-full" />, label: "AI Qualification" },
    { icon: <MessageSquare className="w-full h-full" />, label: "Nurture Sequence" },
    { icon: <Calendar className="w-full h-full" />, label: "Booking" },
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Zillow', 'Realtor.com', 'MLS Systems', 'Calendly', 'Twilio', 'Google Workspace'
  ];

  return (
    <Layout>
      <SEOHead
        title="AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital"
        description="How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates."
        canonicalUrl="https://oarcdigital.com/case-studies/propflow-property-platform"
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
              <Bot className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium" data-testid="text-eyebrow">AI Employees • Real Estate</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-testid="heading-case-study-title">
              How an AI Agent Qualified Property Leads 24/7 for a Growing Brokerage
            </h1>
            
            <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8" data-testid="text-hero-description">
              Deploying an autonomous AI real estate specialist that handled initial inquiries, qualified prospects, and scheduled viewings—reducing human workload by 70%.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Clock className="w-4 h-4 text-white/50" />
                <span className="text-sm text-white/70">6-month engagement</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Shield className="w-4 h-4 text-white/50" />
                <span className="text-sm text-white/70">Enterprise deployment</span>
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
              { value: '94%', label: 'Faster Response Time' },
              { value: '3.2x', label: 'Lead Conversion Rate' },
              { value: '70%', label: 'Workload Reduction' },
              { value: '24/7', label: 'Availability' },
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
                Automating Lead Qualification Without Losing the Personal Touch
              </h2>

              <p className="text-base text-white/60 mb-6 leading-relaxed" data-testid="text-overview-1">
                A mid-sized real estate brokerage was struggling with lead response times. Their agents were spending 60% of their day on initial inquiries—many of which never converted. They needed a solution that could handle the first touchpoint professionally while freeing agents to focus on serious buyers.
              </p>

              <p className="text-base text-white/60 mb-8 leading-relaxed" data-testid="text-overview-2">
                We deployed an AI Real Estate Specialist that could engage leads via phone, SMS, and email within seconds of inquiry. The AI qualified prospects based on budget, timeline, and preferences, then seamlessly handed off warm leads to human agents with complete context. The technology was later acquired as part of a larger proptech consolidation in 2023.
              </p>
            </div>

            <div className="relative">
              <GlassCard className="overflow-hidden" glowOnHover={true}>
                <img 
                  src={aiRealEstateDashboard}
                  alt="AI Real Estate Agent dashboard showing lead qualification scores, contact pipeline, and automated response metrics"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  data-testid="img-product-screenshot"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">AI Employee Type</p>
                  <p className="text-white font-bold">Real Estate Sales Specialist</p>
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
            Automated Lead-to-Booking Pipeline
          </h2>

          <FlowDiagram steps={workflowSteps} />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <GlassCard className="p-6" variant="subtle">
              <h3 className="text-lg font-bold text-white mb-3">Instant Engagement</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Within 30 seconds of a lead submission, the AI initiates contact via the prospect's preferred channel—phone, SMS, or email. No more leads going cold while agents juggle existing clients.
              </p>
            </GlassCard>

            <GlassCard className="p-6" variant="subtle">
              <h3 className="text-lg font-bold text-white mb-3">Intelligent Qualification</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                The AI asks qualifying questions naturally: budget range, timeline, preferred neighborhoods, property type. It scores leads and prioritizes high-intent prospects for immediate agent attention.
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
              <h3 className="text-2xl font-black text-white mb-6">The Lead Response Problem</h3>
              
              <div className="space-y-4">
                {[
                  'Average lead response time exceeded 4 hours',
                  'Agents spent 60% of time on unqualified leads',
                  'Weekend and after-hours inquiries went unanswered',
                  'No consistent qualification process across team'
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
              <h3 className="text-2xl font-black text-white mb-6">AI-Powered Response System</h3>
              
              <div className="space-y-4">
                {[
                  'Sub-minute response time across all channels',
                  'Consistent qualification scoring methodology',
                  'True 24/7 availability including holidays',
                  'Seamless handoff with full conversation context'
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
            Measurable Impact on Pipeline Efficiency
          </h2>

          <p className="text-base text-white/60 mb-6 leading-relaxed">
            Within 90 days of deployment, the brokerage saw dramatic improvements across their sales funnel. Lead response time dropped from over 4 hours to under 30 seconds. More importantly, the quality of leads reaching human agents improved significantly—agents were spending time with prospects who were ready to move forward.
          </p>

          <p className="text-base text-white/60 mb-8 leading-relaxed" data-testid="text-results-2">
            The AI handled an average of 340 initial conversations per month, qualifying leads and booking viewings without human intervention. Following these results, the technology stack and methodology were acquired by a larger real estate technology company in Q3 2023 as part of their AI expansion strategy.
          </p>

          <GlassCard className="p-6" data-testid="testimonial-block">
            <p className="text-white/60 italic text-base mb-4" data-testid="text-testimonial">
              "We were skeptical about AI handling our initial lead contact—real estate is relationship-driven. But the results spoke for themselves. Our agents now spend their time with qualified buyers instead of tire-kickers."
            </p>
            <p className="text-sm font-bold text-white/80" data-testid="text-testimonial-author">— Managing Broker</p>
          </GlassCard>
        </div>
      </section>

      {/* Related AI Services */}
      <section className="py-20 px-4 bg-zinc-950 border-t border-white/5" data-testid="section-related">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold text-white/40 uppercase mb-4 tracking-wider">Explore AI Employees</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8">
            Related AI Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'AI SDR Agent', description: 'Automate outbound prospecting', link: '/services/ai-sdr-agent' },
              { title: 'AI Support Specialist', description: '24/7 customer assistance', link: '/services/ai-support-specialist' },
              { title: 'AI Appointment Booker', description: 'Scheduling automation', link: '/services/ai-appointment-booker' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Deploy AI Employees?</h2>
          <p className="text-base text-white/50 mb-8 max-w-2xl mx-auto">
            Whether you need lead qualification, customer support, or workflow automation—our AI employees work around the clock so your team can focus on what matters.
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
