import { useEffect } from "react";
import { Link } from "wouter";
import { Zap, TrendingUp, Target, Users, BarChart, Sparkles, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/automation_workflow__5f7d705f.jpg";

export default function FunnelAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Funnel Automation Services - Convert More, Work Less | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Automated marketing and sales funnels that convert 24/7. Email sequences, lead scoring, retargeting, nurture campaigns.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Funnel Automation Services - Convert More, Work Less | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Automated marketing and sales funnels that convert 24/7. Email sequences, lead scoring, retargeting, nurture campaigns.');
  }, []);

  return (
    <Layout>
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

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-cyan-600 mb-3">FUNNEL AUTOMATION RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Convert more leads, work less
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Automated workflows that nurture leads, score prospects, trigger retargeting, and close deals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "47%", label: "Avg. conversion rate lift" },
              { value: "12 hours", label: "Time saved per week" },
              { value: "8,500+", label: "Funnels built & optimized" },
              { value: "4.2x", label: "Avg. ROI on automation" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
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
