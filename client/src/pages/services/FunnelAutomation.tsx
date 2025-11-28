import { useEffect } from "react";
import { Link } from "wouter";
import { Zap, TrendingUp, Target, Users, BarChart, Sparkles, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from "@assets/funnel-automation-optimized.jpg";

export default function FunnelAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.funnelAutomation.title}
        description={revenueServicesSEO.funnelAutomation.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.funnelAutomation.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Funnel Automation Services",
          revenueServicesSEO.funnelAutomation.description,
          "Marketing Automation"
        )}
        schemaId="service-funnel-automation"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Marketing automation workflow"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Funnels that convert <span className="italic bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">while you sleep</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Automated email sequences, lead scoring, retargeting, and nurture campaigns. Build funnels that work 24/7 to turn prospects into customers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-white/90" data-testid="button-get-started">
              Automate Your Funnel
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Automation Results
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering automated funnels for leading brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['E-commerce', 'SaaS', 'Digital Products', 'Coaching', 'Membership Sites', 'Lead Gen Businesses'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-cyan-600 mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we increased email revenue by 312% with automated nurture sequences
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">312% increase</div>
                  <div className="text-sm text-muted-foreground">Email-attributed revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">67% open rate</div>
                  <div className="text-sm text-muted-foreground">Automated sequence performance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">$280K</div>
                  <div className="text-sm text-muted-foreground">Additional monthly revenue</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                By implementing behavioral-triggered email sequences, abandoned cart recovery, post-purchase upsells, and win-back campaigns, we transformed their email channel from a cost center to a profit driver. We segmented their list by engagement and purchase history, personalized messaging at scale, and optimized send times based on individual behavior patterns.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Behavioral Triggers', 'Abandoned Cart', 'Post-Purchase Upsell', 'Win-Back Campaigns', 'Segmentation'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Workflows */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-cyan-600 mb-3">AUTOMATION WORKFLOWS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every stage. <span className="italic text-blue-600">Every touchpoint.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive automation that works across your entire customer journey
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Lead Nurture Sequences", 
                desc: "Multi-touch email sequences that educate, build trust, and move prospects through the funnel automatically based on behavior and engagement.",
                icon: Mail,
                features: ["Behavioral triggers", "Drip campaigns", "Educational content", "Auto follow-ups"]
              },
              { 
                name: "Lead Scoring & Qualification", 
                desc: "Automatically score leads based on behavior, demographics, and engagement. Route hot leads to sales instantly when they hit threshold.",
                icon: Target,
                features: ["Behavioral scoring", "Demographic scoring", "Auto-routing", "Sales alerts"]
              },
              { 
                name: "Retargeting & Remarketing", 
                desc: "Pixel-based retargeting, email retargeting, abandoned cart sequences. Bring back prospects who didn't convert the first time.",
                icon: TrendingUp,
                features: ["Abandoned cart", "Browse abandon", "Email retargeting", "Pixel tracking"]
              },
              { 
                name: "Sales Enablement Automation", 
                desc: "Auto-assign leads, trigger follow-up tasks, send personalized outreach. Arm your sales team with automation that helps them close faster.",
                icon: Users,
                features: ["Lead assignment", "Task automation", "Email templates", "CRM sync"]
              },
              { 
                name: "Customer Onboarding Flows", 
                desc: "Welcome sequences, product tutorials, activation campaigns. Automate the first 90 days of the customer journey for maximum retention.",
                icon: Sparkles,
                features: ["Welcome series", "Product education", "Activation triggers", "Usage tracking"]
              },
              { 
                name: "Analytics & Optimization", 
                desc: "Track funnel performance, A/B test sequences, identify drop-off points. Continuously optimize for better conversion rates.",
                icon: BarChart,
                features: ["Funnel analytics", "A/B testing", "Drop-off analysis", "Performance dashboards"]
              },
            ].map((workflow, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-workflow-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-cyan-100/50 via-blue-100/50 to-indigo-100/50 overflow-hidden flex items-center justify-center">
                    <workflow.icon className="h-16 w-16 text-cyan-600/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">{workflow.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{workflow.desc}</p>
                    <div className="space-y-2">
                      {workflow.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600" />
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
      <section className="py-16 px-4 bg-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-service funnel automation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate your funnel—no hidden costs, no surprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Funnel Mapping & Strategy", desc: "Map your current funnel, identify bottlenecks, and design automation workflows that move prospects from awareness to purchase." },
              { name: "Email Sequence Development", desc: "Write compelling email sequences for every stage of the funnel. Welcome series, nurture campaigns, re-engagement, and more." },
              { name: "Marketing Automation Setup", desc: "Configure automation platforms (HubSpot, ActiveCampaign, Klaviyo). Set up workflows, triggers, and integrations." },
              { name: "Lead Scoring & Segmentation", desc: "Build scoring models based on behavior and demographics. Segment lists for personalized messaging at scale." },
              { name: "Retargeting Campaign Setup", desc: "Implement pixel tracking, build retargeting audiences, and create campaigns that bring back lost prospects." },
              { name: "Performance Monitoring & Optimization", desc: "Weekly performance reviews, A/B testing, and continuous optimization. We improve conversion rates month over month." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-cyan-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${i}`}>
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we work: <span className="italic text-blue-600">Map, build, optimize</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-step framework for funnel automation
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Funnel Audit", desc: "We analyze your current funnel performance, identify drop-off points, and map opportunities for automation. Most audits reveal 3-5 quick wins." },
              { step: "02", title: "Workflow Design", desc: "We design automation workflows for each funnel stage. Email sequences, scoring rules, triggers, and integrations mapped in detail." },
              { step: "03", title: "Build & Launch", desc: "We build sequences, configure automation tools, set up tracking, and test everything before launch. Most clients go live within 3-4 weeks." },
              { step: "04", title: "Test & Optimize", desc: "Weekly A/B tests on subject lines, copy, timing, and triggers. We continuously improve conversion rates through systematic testing." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-cyan-600/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-cyan-600 mb-3">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for businesses ready to <span className="italic text-blue-600">scale with automation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Funnel automation that works for any business model or industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-cyan-50 border border-border hover-elevate" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-3">E-commerce Brands</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automate abandoned cart recovery, post-purchase upsells, and win-back campaigns. Turn email into your highest-ROI channel.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Abandoned cart sequences</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Post-purchase automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Customer reactivation flows</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-cyan-50 border border-border hover-elevate" data-testid="use-case-saas">
              <h3 className="text-xl font-bold mb-3">SaaS Companies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automate trial onboarding, feature adoption campaigns, and upgrade sequences. Move users through the value journey automatically.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Trial-to-paid automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Feature adoption sequences</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Churn prevention workflows</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-cyan-50 border border-border hover-elevate" data-testid="use-case-b2b-services">
              <h3 className="text-xl font-bold mb-3">B2B Service Providers</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automate lead nurturing, proposal follow-ups, and client onboarding. Turn manual processes into scalable systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Lead nurture campaigns</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Proposal automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Client onboarding flows</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-cyan-50 border border-border hover-elevate" data-testid="use-case-digital-products">
              <h3 className="text-xl font-bold mb-3">Digital Product Creators</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automate course delivery, upsell sequences, and community engagement. Scale your digital products without scaling your time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Course drip campaigns</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Upsell automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Engagement sequences</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-cyan-50 border border-border hover-elevate" data-testid="use-case-memberships">
              <h3 className="text-xl font-bold mb-3">Membership Sites</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automate member onboarding, content delivery, and renewal campaigns. Reduce churn and increase lifetime value automatically.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Member welcome sequences</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Content drip automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Renewal reminders</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-cyan-50 border border-border hover-elevate" data-testid="use-case-professional-services">
              <h3 className="text-xl font-bold mb-3">Professional Services</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automate consultation booking, follow-up sequences, and client communication. Deliver premium service at scale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Booking confirmation automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Client follow-up sequences</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Referral request automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-cyan-600 mb-3">MAXIMIZE YOUR AUTOMATION</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pair with these <span className="italic text-blue-600">complementary services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build a complete marketing automation stack that works 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/email-marketing">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-cyan-600 hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-email-marketing">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-cyan-600 transition-colors">Email Marketing</h3>
                  <ArrowRight className="h-5 w-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Build your email list and create campaigns that drive revenue. The perfect foundation for automation workflows.
                </p>
              </div>
            </Link>

            <Link href="/services/lead-generation">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-cyan-600 hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-lead-generation">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-cyan-600 transition-colors">Lead Generation</h3>
                  <ArrowRight className="h-5 w-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Fill your funnel with qualified leads that your automation can nurture and convert into customers.
                </p>
              </div>
            </Link>

            <Link href="/services/analytics-tracking">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-cyan-600 hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-analytics">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-cyan-600 transition-colors">Analytics & Tracking</h3>
                  <ArrowRight className="h-5 w-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Track funnel performance, identify drop-off points, and optimize every stage of your automation for maximum ROI.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to automate your funnel?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free funnel audit. We'll identify automation opportunities and show you exactly how to increase conversions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-white/90" data-testid="button-cta-primary">
              Get Your Automation Plan
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
