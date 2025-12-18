import { useEffect } from "react";
import { Link } from "wouter";
import { Lightbulb, Target, TrendingUp, Rocket, Map, Users, CheckCircle2, BarChart3, ArrowRight, Compass, Zap, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import FAQSection, { FAQItem } from '@/components/FAQSection';

const growthStrategyFAQs: FAQItem[] = [
  { question: "What is growth strategy consulting?", answer: "We help businesses identify growth levers, develop go-to-market plans, and build scalable systems for sustainable revenue growth." },
  { question: "How do you develop a growth strategy?", answer: "Research, analysis, opportunity mapping, and roadmap creation. We identify your highest-leverage growth opportunities and prioritize actions." },
  { question: "What industries do you work with?", answer: "B2B, SaaS, e-commerce, professional services, and startups. Our Malta base gives us strong EU market expertise." },
  { question: "How quickly can we see growth results?", answer: "Quick wins appear within 30-60 days. Sustainable growth systems typically show significant results within 3-6 months." },
  { question: "What makes OARC's growth strategy different?", answer: "We combine strategic thinking with execution capability. We don't just plan—we help you implement and measure results." },
  { question: "Do you offer fractional CMO services?", answer: "Yes, we provide fractional marketing leadership. Get senior strategy expertise without full-time executive costs." },
  { question: "What is the investment for growth strategy?", answer: "Strategy engagements start from €5,000. Ongoing fractional CMO services range from €3,000-8,000/month." },
  { question: "How do you measure growth success?", answer: "We track revenue growth, customer acquisition cost, lifetime value, and other key metrics aligned with your goals." }
];

export default function GrowthStrategy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Growth Strategy & Consulting | Strategic Planning | OARC Digital"
        description="Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders."
        canonicalUrl="https://oarcdigital.com/services/growth-strategy"
        ogType="article"
        structuredData={createServiceSchema(
          "Growth Strategy & Consulting",
          "Expert growth strategy consulting with market validation, growth experiments, strategic planning, and scaling roadmaps.",
          "Business Consulting"
        )}
        schemaId="service-growth-strategy"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
            <Lightbulb className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300 font-medium">Strategic Growth Partner</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Strategy that <span className="italic bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text">accelerates growth</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Transform uncertainty into opportunity. Our growth strategists partner with you to validate markets, run experiments, and build roadmaps that turn ambitious visions into market leadership.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600" data-testid="button-get-started">
                Start Strategic Planning
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10" data-testid="button-view-case-studies">
              View Growth Results
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="py-12 px-4 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {['Market Entry Strategy', 'Growth Experiments', 'Scaling Roadmaps', 'Go-to-Market', 'Unit Economics', 'Competitive Analysis'].map((type, i) => (
              <div key={i} className="text-base md:text-lg font-semibold text-white/80">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-orange-400 mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                How we helped a SaaS startup go from $0 to $2M ARR in 18 months
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">$2M ARR</div>
                  <div className="text-sm text-zinc-400">From zero revenue in 18 months</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">3 pivots</div>
                  <div className="text-sm text-zinc-400">Strategic repositioning based on data</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">$5M seed</div>
                  <div className="text-sm text-zinc-400">Raised from top-tier VCs</div>
                </div>
              </div>
              <p className="text-zinc-400 mb-6">
                Through rigorous market validation, rapid experimentation, and strategic pivots based on customer data, we helped this B2B SaaS company find product-market fit and scale. We ran 47 growth experiments in 12 months, optimized their go-to-market strategy, and built a repeatable sales process that attracted investor attention.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Market Validation', 'Growth Experiments', 'GTM Strategy', 'Investor Prep', 'Sales Process Design'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Frameworks */}
      <section className="py-16 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-orange-400 mb-3">STRATEGY FRAMEWORKS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Proven methodologies. <span className="italic text-orange-400">Real results.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Strategic frameworks refined across 100+ growth engagements
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Market Validation Sprint", 
                desc: "Validate your market opportunity in weeks, not months. Customer interviews, competitive analysis, and demand testing to derisk your next move.",
                icon: Target,
                features: ["Customer discovery", "Competitive mapping", "Demand testing", "ICP definition"]
              },
              { 
                name: "Growth Experiment System", 
                desc: "Build a culture of rapid experimentation. Hypothesis-driven testing, prioritization frameworks, and learning loops that compound growth.",
                icon: Rocket,
                features: ["Experiment design", "ICE prioritization", "Testing protocols", "Learning synthesis"]
              },
              { 
                name: "Go-to-Market Strategy", 
                desc: "Launch with confidence. Positioning, messaging, channel strategy, and launch plans that maximize market impact and minimize waste.",
                icon: Map,
                features: ["Positioning", "Channel strategy", "Launch planning", "Messaging matrix"]
              },
              { 
                name: "Scaling Roadmap", 
                desc: "Plan your path from current state to market leadership. Milestone planning, resource allocation, and strategic sequencing for sustainable growth.",
                icon: TrendingUp,
                features: ["Milestone planning", "Resource mapping", "Risk mitigation", "Growth levers"]
              },
              { 
                name: "Unit Economics Deep Dive", 
                desc: "Understand the true economics of your business. CAC, LTV, payback periods, and margin analysis to ensure profitable growth.",
                icon: LineChart,
                features: ["CAC analysis", "LTV modeling", "Payback optimization", "Margin improvement"]
              },
              { 
                name: "Strategic Advisory", 
                desc: "Ongoing strategic partnership. Regular strategy sessions, board prep, investor relations support, and executive coaching.",
                icon: Users,
                features: ["Weekly syncs", "Board prep", "Investor support", "Executive coaching"]
              },
            ].map((framework, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-framework-${i}`}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-zinc-800 h-full hover:-translate-y-2 hover:border-orange-500/30">
                  <div className="relative h-48 bg-gradient-to-br from-orange-500/10 to-amber-500/5 overflow-hidden flex items-center justify-center">
                    <framework.icon className="h-16 w-16 text-orange-400/40 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">{framework.name}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{framework.desc}</p>
                    <div className="space-y-2">
                      {framework.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 text-orange-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Complete strategy partnership
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              From initial assessment to ongoing advisory, we're your strategic growth partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Strategic Assessment", desc: "Deep dive into your business, market, competition, and opportunities. Identify the highest-impact growth levers." },
              { name: "Growth Roadmap", desc: "Detailed 12-month strategic plan with clear milestones, KPIs, and action items. Know exactly what to do and when." },
              { name: "Experiment Design", desc: "Prioritized experiment backlog with hypotheses, success metrics, and testing protocols. Build a culture of rapid learning." },
              { name: "Weekly Strategy Sessions", desc: "Regular working sessions to review progress, remove blockers, and adapt strategy based on learnings." },
              { name: "Executive Coaching", desc: "1-on-1 support for founders and executives navigating growth challenges. Strategic thinking partner in your corner." },
              { name: "Investor & Board Support", desc: "Pitch deck strategy, board meeting prep, investor intro support. Help you tell your growth story effectively." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${i}`}>
                <h3 className="text-lg font-bold mb-2 text-white">{item.name}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              How we work: <span className="italic text-orange-400">Assess, plan, execute</span>
            </h2>
            <p className="text-lg text-zinc-400">
              A proven approach to strategic growth
            </p>
          </div>

          <div className="space-y-8">
            {[
              { phase: "Discovery", desc: "Deep immersion in your business, market, and goals. Customer interviews, data analysis, competitive research.", duration: "2 weeks" },
              { phase: "Strategy Development", desc: "Synthesize insights into a comprehensive growth strategy. Prioritized initiatives, resource requirements, timeline.", duration: "2 weeks" },
              { phase: "Execution Planning", desc: "Translate strategy into actionable playbooks. Experiment designs, team assignments, success metrics.", duration: "1 week" },
              { phase: "Ongoing Advisory", desc: "Regular strategy sessions, progress reviews, and adaptive planning. Continuous optimization based on results.", duration: "Ongoing" },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-6 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800" data-testid={`process-step-${i}`}>
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-orange-400">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{step.phase}</h3>
                    <span className="px-3 py-1 text-xs bg-orange-500/10 text-orange-400 rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-zinc-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={growthStrategyFAQs} title="Frequently Asked Questions" subtitle="Everything you need to know about growth strategy" schemaId="faq-growth-strategy" darkMode={true} />

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to accelerate your growth?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your growth challenges and explore how strategic partnership can help you reach your goals faster.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90" data-testid="button-cta-primary">
                Book Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/ai-consulting">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-orange-500/30 cursor-pointer transition-all" data-testid="related-service-ai-consulting">
                <h3 className="text-xl font-bold mb-3 text-white">AI Consulting</h3>
                <p className="text-sm text-zinc-400">AI readiness assessment and implementation roadmap for your business.</p>
              </div>
            </Link>
            <Link href="/services/performance-analytics">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-orange-500/30 cursor-pointer transition-all" data-testid="related-service-analytics">
                <h3 className="text-xl font-bold mb-3 text-white">Performance Analytics</h3>
                <p className="text-sm text-zinc-400">Custom dashboards, ROI tracking, and data-driven insights.</p>
              </div>
            </Link>
            <Link href="/services/customer-acquisition-accelerator">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-orange-500/30 cursor-pointer transition-all" data-testid="related-service-acquisition">
                <h3 className="text-xl font-bold mb-3 text-white">Customer Acquisition</h3>
                <p className="text-sm text-zinc-400">Scale your customer base with proven acquisition systems.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
