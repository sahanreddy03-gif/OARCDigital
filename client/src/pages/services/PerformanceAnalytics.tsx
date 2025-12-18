import { useEffect } from "react";
import { Link } from "wouter";
import { LineChart, BarChart3, PieChart, TrendingUp, Target, Eye, CheckCircle2, ArrowRight, Database, Zap, Clock, DollarSign, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import FAQSection, { FAQItem } from "@/components/FAQSection";

const analyticsFAQs: FAQItem[] = [
  { question: "What is performance analytics?", answer: "Data-driven analysis of your marketing and business performance. We track, measure, and optimize every touchpoint for maximum ROI." },
  { question: "What platforms do you track?", answer: "Google Analytics, Meta Ads, Google Ads, CRM data, and custom integrations. Unified dashboards showing your complete picture." },
  { question: "How do you handle attribution?", answer: "Multi-touch attribution modeling shows true conversion paths. We track the full customer journey across all channels." },
  { question: "What makes OARC's analytics different?", answer: "Actionable insights, not just data. We translate numbers into recommendations that directly improve your results." },
  { question: "Do you provide real-time reporting?", answer: "Yes, live dashboards accessible 24/7. Automated alerts for significant changes and regular strategic reviews." },
  { question: "Can you help with data privacy compliance?", answer: "Absolutely. GDPR-compliant tracking setup, cookie consent, and privacy-first analytics configurations." },
  { question: "What is the investment for analytics services?", answer: "Analytics setup starts from €2,000. Ongoing reporting and optimization retainers range from €1,500-4,000/month." },
  { question: "Do you help implement tracking?", answer: "Yes, complete implementation including pixel setup, event tracking, UTM strategies, and conversion tracking." }
];

export default function PerformanceAnalytics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Performance Analytics & Reporting | Data-Driven Insights | OARC Digital"
        description="Custom analytics dashboards, ROI tracking, attribution modeling, and performance insights. Transform data into actionable growth strategies."
        canonicalUrl="https://oarcdigital.com/services/performance-analytics"
        ogType="article"
        structuredData={createServiceSchema(
          "Performance Analytics & Reporting",
          "Custom dashboards, ROI tracking, attribution modeling, and performance insights that drive data-driven decisions.",
          "Analytics Services"
        )}
        schemaId="service-performance-analytics"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
            <LineChart className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Data-Driven Growth</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Insights that <span className="italic bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">drive decisions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Stop guessing, start knowing. Custom analytics dashboards, attribution modeling, and performance reporting that transform raw data into actionable growth strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600" data-testid="button-get-started">
                Get Custom Dashboard
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10" data-testid="button-view-case-studies">
              See Analytics in Action
            </Button>
          </div>
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="py-12 px-4 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {['Custom Dashboards', 'ROI Tracking', 'Attribution Modeling', 'Cohort Analysis', 'Predictive Analytics', 'Real-time Reporting'].map((type, i) => (
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
              <div className="text-sm uppercase tracking-wider text-cyan-400 mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                How we saved $340K in wasted ad spend with proper attribution
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">$340K saved</div>
                  <div className="text-sm text-zinc-400">Reallocated from underperforming channels</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">3.2x ROAS</div>
                  <div className="text-sm text-zinc-400">Up from 1.4x with better attribution</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Real-time</div>
                  <div className="text-sm text-zinc-400">Dashboard updates every 15 minutes</div>
                </div>
              </div>
              <p className="text-zinc-400 mb-6">
                This e-commerce brand was making decisions based on last-click attribution, missing the full picture of their customer journey. We implemented multi-touch attribution, built custom dashboards, and discovered that 40% of their ad budget was going to channels that weren't actually driving conversions. Reallocating spend based on true ROI transformed their marketing efficiency.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Multi-touch Attribution', 'Custom Dashboards', 'Channel Analysis', 'Budget Optimization', 'Real-time Tracking'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Solutions */}
      <section className="py-16 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-cyan-400 mb-3">ANALYTICS SOLUTIONS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Data clarity. <span className="italic text-cyan-400">Growth velocity.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            From raw data to actionable insights that drive revenue
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Custom Dashboard Development", 
                desc: "Beautiful, intuitive dashboards tailored to your KPIs. Real-time data visualization that keeps your entire team aligned on what matters.",
                icon: BarChart3,
                features: ["Real-time updates", "Custom KPIs", "Team access", "Mobile-friendly"]
              },
              { 
                name: "Multi-touch Attribution", 
                desc: "Understand the true customer journey. See which touchpoints actually drive conversions and allocate budget accordingly.",
                icon: Layers,
                features: ["Journey mapping", "Channel weighting", "Conversion paths", "Budget recommendations"]
              },
              { 
                name: "ROI & Revenue Tracking", 
                desc: "Know exactly what each marketing dollar returns. Track ROI by channel, campaign, and creative with complete accuracy.",
                icon: DollarSign,
                features: ["Channel ROI", "Campaign tracking", "Creative performance", "Revenue attribution"]
              },
              { 
                name: "Cohort & Retention Analysis", 
                desc: "Understand customer behavior over time. Track cohorts, identify churn risks, and optimize for lifetime value.",
                icon: Users,
                features: ["Cohort tracking", "Churn prediction", "LTV analysis", "Retention metrics"]
              },
              { 
                name: "Predictive Analytics", 
                desc: "See around corners. Machine learning models that predict customer behavior, revenue trends, and growth opportunities.",
                icon: TrendingUp,
                features: ["Revenue forecasting", "Churn prediction", "Trend analysis", "Opportunity scoring"]
              },
              { 
                name: "Executive Reporting", 
                desc: "Boardroom-ready reports that tell the story. Automated reporting that keeps stakeholders informed without manual work.",
                icon: Eye,
                features: ["Automated reports", "Executive summaries", "Trend narratives", "Stakeholder views"]
              },
            ].map((solution, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-solution-${i}`}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-zinc-800 h-full hover:-translate-y-2 hover:border-cyan-500/30">
                  <div className="relative h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 overflow-hidden flex items-center justify-center">
                    <solution.icon className="h-16 w-16 text-cyan-400/40 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{solution.name}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{solution.desc}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400" />
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

      {/* What We Track */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Complete analytics stack
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Every metric that matters, tracked and visualized
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Marketing Performance", desc: "ROAS, CAC, CPL, CPC, CTR, and conversion rates across all channels and campaigns in real-time." },
              { name: "Revenue Analytics", desc: "MRR, ARR, revenue by source, product performance, and revenue forecasting with trend analysis." },
              { name: "Customer Metrics", desc: "LTV, churn rate, retention curves, NPS, and customer health scores for proactive engagement." },
              { name: "Funnel Analytics", desc: "Stage-by-stage conversion rates, drop-off analysis, and funnel optimization recommendations." },
              { name: "Attribution & Journey", desc: "Multi-touch attribution, customer journey visualization, and channel contribution analysis." },
              { name: "Competitive Intelligence", desc: "Market share tracking, competitive benchmarking, and industry trend analysis." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-track-${i}`}>
                <h3 className="text-lg font-bold mb-2 text-white">{item.name}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Tools we integrate with
            </h2>
            <p className="text-lg text-zinc-400">
              We connect to your existing stack and unify your data
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Google Analytics', 'Meta Ads', 'Google Ads', 'HubSpot',
              'Salesforce', 'Stripe', 'Shopify', 'Mixpanel',
              'Segment', 'BigQuery', 'Tableau', 'Looker',
              'Amplitude', 'Klaviyo', 'Mailchimp', 'Custom APIs'
            ].map((tool, i) => (
              <div key={i} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 text-center hover:border-cyan-500/20 transition-colors" data-testid={`tool-${i}`}>
                <span className="text-sm text-zinc-300">{tool}</span>
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
              How we work: <span className="italic text-cyan-400">Audit, build, optimize</span>
            </h2>
            <p className="text-lg text-zinc-400">
              From data chaos to clarity in weeks
            </p>
          </div>

          <div className="space-y-8">
            {[
              { phase: "Data Audit", desc: "Review your current tracking, identify gaps, and map all data sources. Ensure accuracy before building.", duration: "1 week" },
              { phase: "Architecture Design", desc: "Design your analytics infrastructure. Data models, dashboard layouts, KPI definitions, and integration plan.", duration: "1 week" },
              { phase: "Implementation", desc: "Build your custom dashboards, set up tracking, and integrate all data sources into a unified view.", duration: "2-3 weeks" },
              { phase: "Training & Optimization", desc: "Train your team, establish reporting cadences, and continuously optimize based on usage patterns.", duration: "Ongoing" },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-6 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800" data-testid={`process-step-${i}`}>
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-cyan-400">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{step.phase}</h3>
                    <span className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-zinc-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={analyticsFAQs} 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about performance analytics" 
        schemaId="faq-analytics"
        darkMode={true}
      />

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to see your data clearly?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build the analytics infrastructure that powers your growth decisions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-white/90" data-testid="button-cta-primary">
                Get Custom Dashboard
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
            <Link href="/services/growth-strategy">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-cyan-500/30 cursor-pointer transition-all" data-testid="related-service-strategy">
                <h3 className="text-xl font-bold mb-3 text-white">Growth Strategy</h3>
                <p className="text-sm text-zinc-400">Strategic planning and growth roadmaps for ambitious businesses.</p>
              </div>
            </Link>
            <Link href="/services/ai-consulting">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-cyan-500/30 cursor-pointer transition-all" data-testid="related-service-ai">
                <h3 className="text-xl font-bold mb-3 text-white">AI Consulting</h3>
                <p className="text-sm text-zinc-400">AI readiness assessment and implementation roadmap.</p>
              </div>
            </Link>
            <Link href="/services/funnel-optimization-agent">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-cyan-500/30 cursor-pointer transition-all" data-testid="related-service-funnel">
                <h3 className="text-xl font-bold mb-3 text-white">Conversion Optimization</h3>
                <p className="text-sm text-zinc-400">A/B testing and funnel analysis to improve conversion rates.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
