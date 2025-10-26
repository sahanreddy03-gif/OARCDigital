import { useEffect } from "react";
import { Link } from "wouter";
import { TrendingUp, Mail, Linkedin, Users, Zap, Target, BarChart, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/automation_workflow__a2b2e6e2.jpg";

export default function RevenueAutomation() {
  useEffect(() => {
    document.title = "Revenue Automation & Growth - Automate Your Revenue Engine | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Automate your entire revenue engine. From lead generation to deal closing, we build AI-powered systems that grow your business on autopilot.");
    }
    // Open Graph tags
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Revenue Automation - Automate Your Revenue Engine | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'From lead generation to deal closing, we build AI-powered systems that grow your business on autopilot. 3x revenue increase in 90 days.');
  }, []);

  return (
    <Layout>
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Revenue automation workflow"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Automate your entire <span className="italic bg-gradient-to-r from-[hsl(158,83%,39%)] via-[hsl(200,83%,50%)] to-[hsl(221,91%,60%)] text-transparent bg-clip-text">revenue engine</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            From lead generation to deal closing, we build AI-powered systems that grow your business on autopilot. Turn manual outreach into automated pipeline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(158,83%,39%)] hover:bg-white/90" data-testid="button-get-started">
              Start Growing Revenue
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
            Powering automated revenue for leading companies
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['B2B Software', 'Agencies', 'Professional Services', 'Real Estate', 'Consulting', 'Financial Services'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(158,83%,39%)] mb-3">REVENUE AUTOMATION RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Generate predictable, scalable revenue
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turn manual outreach into automated pipeline. We build and optimize your entire revenue engine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: TrendingUp, value: "3x", label: "Avg. revenue increase in 90 days" },
              { icon: Users, value: "10,000+", label: "Leads generated monthly" },
              { icon: Zap, value: "90%", label: "Reduction in manual work" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(158,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <stat.icon className="h-16 w-16 text-[hsl(158,83%,39%)] mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(158,83%,39%)] to-[hsl(221,91%,60%)] text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-[hsl(158,10%,98%)]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[hsl(158,83%,39%)] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we automated a B2B software company's outbound to generate $4.2M in pipeline
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[hsl(158,83%,39%)] mb-2">$4.2M pipeline</div>
                  <div className="text-sm text-muted-foreground">Generated in 6 months</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(158,83%,39%)] mb-2">18% reply rate</div>
                  <div className="text-sm text-muted-foreground">On automated cold emails</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(158,83%,39%)] mb-2">350 meetings</div>
                  <div className="text-sm text-muted-foreground">Booked automatically</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                We built a complete revenue automation stack including lead enrichment, email deliverability infrastructure, personalized outreach sequences, LinkedIn automation, and CRM integration. The system runs 24/7 finding prospects, sending personalized messages, booking meetings, and syncing everything to their CRM—all without manual intervention. Their sales team now focuses only on taking meetings and closing deals.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Lead Enrichment', 'Email Infrastructure', 'LinkedIn Automation', 'CRM Sync', 'Meeting Automation'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[hsl(158,10%,95%)] text-[hsl(158,83%,39%)] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Stack */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[hsl(158,83%,39%)] mb-3">COMPLETE AUTOMATION STACK</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From prospecting to <span className="italic text-[hsl(221,91%,60%)]">closed deals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Every tool you need to automate your revenue generation—fully integrated
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { 
                name: "Lead Generation Autopilot", 
                desc: "AI finds and qualifies your ideal customers from 100+ data sources. Build targeted lists daily with verified emails and enriched data.",
                icon: Users,
                features: ["300+ leads/day", "Multi-source enrichment", "Intent signals", "Real-time verification"]
              },
              { 
                name: "Email Deliverability Suite", 
                desc: "Warm-up infrastructure, spam testing, inbox rotation. Land in inbox, not spam with 99% deliverability rates.",
                icon: Mail,
                features: ["99% inbox rate", "Domain health monitoring", "Auto warm-up", "Spam testing"]
              },
              { 
                name: "LinkedIn Automation", 
                desc: "Automate connection requests, messaging, and follow-ups. Scale LinkedIn outreach safely with personalized messages.",
                icon: Linkedin,
                features: ["Safe automation", "Personalized at scale", "Multi-account", "Connection tracking"]
              },
              { 
                name: "AI-Powered Outreach", 
                desc: "Personalized emails and messages written by AI. A/B testing and optimization built-in for maximum reply rates.",
                icon: Sparkles,
                features: ["90% personalization", "Auto A/B testing", "Learning algorithms", "Reply tracking"]
              },
              { 
                name: "CRM Automation", 
                desc: "Auto-sync leads, update records, score prospects, trigger workflows. Zero manual data entry, perfect data hygiene.",
                icon: Target,
                features: ["Auto data sync", "Lead scoring", "Pipeline automation", "Activity tracking"]
              },
              { 
                name: "Deal Intelligence", 
                desc: "AI analyzes deals, predicts close rates, recommends next actions. Know which deals to prioritize and how to win them.",
                icon: BarChart,
                features: ["Predictive scoring", "Win/loss analysis", "Action recommendations", "Pipeline forecasting"]
              },
            ].map((tool, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] snap-center group" data-testid={`card-tool-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[hsl(158,83%,39%)]/10 via-[hsl(200,83%,50%)]/10 to-[hsl(221,91%,60%)]/10 overflow-hidden flex items-center justify-center">
                    <tool.icon className="h-16 w-16 text-[hsl(158,83%,39%)]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(158,83%,39%)] transition-colors">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                    <div className="space-y-2">
                      {tool.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(158,83%,39%)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-[hsl(158,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-service revenue automation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle strategy, setup, management, and optimization—you focus on closing deals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "ICP & Strategy Development", desc: "Deep research into your ideal customer profile, buying process, and pain points. Build targeting strategy that converts." },
              { name: "Tech Stack Setup", desc: "Configure and integrate all automation tools. Email infrastructure, CRM, enrichment tools, LinkedIn automation, meeting schedulers." },
              { name: "Campaign Development", desc: "Write personalized email sequences, LinkedIn messages, and follow-up cadences. A/B test everything for maximum performance." },
              { name: "Infrastructure Management", desc: "Maintain email deliverability, manage domain health, rotate inboxes, warm up new domains. Keep everything running smoothly." },
              { name: "Lead Generation & Enrichment", desc: "Daily lead list building from premium data sources. Verified emails, enriched profiles, intent signals, and contact tracking." },
              { name: "Performance Optimization", desc: "Weekly testing and optimization. Improve reply rates, meeting booking rates, and pipeline conversion through systematic testing." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-[hsl(158,83%,39%)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${i}`}>
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
              From zero to <span className="italic text-[hsl(221,91%,60%)]">revenue machine</span> in 30 days
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-phase launch process
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Strategy Session", desc: "We analyze your ICP, messaging, competitive landscape, and revenue goals. Define success metrics and build targeting strategy." },
              { step: "02", title: "Tech Stack Setup", desc: "Install and configure all automation tools and integrations. Email infrastructure, CRM setup, data sources, meeting automation." },
              { step: "03", title: "Campaign Launch", desc: "Launch multi-channel campaigns with AI-powered personalization. Start generating meetings within 7-14 days of launch." },
              { step: "04", title: "Optimize & Scale", desc: "Continuously test messaging, audiences, and channels. Improve performance week over week and scale winning campaigns." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-[hsl(158,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[hsl(158,83%,39%)]/20 flex-shrink-0">{item.step}</div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(158,83%,39%)] via-[hsl(200,83%,50%)] to-[hsl(221,91%,60%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="italic">automate your revenue?</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book a strategy call and we'll show you exactly how to 3x your pipeline in 90 days with revenue automation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(158,83%,39%)] hover:bg-white/90" data-testid="button-cta-primary">
              Book Strategy Call
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
