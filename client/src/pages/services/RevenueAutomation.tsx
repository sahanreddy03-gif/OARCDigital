import { useEffect } from "react";
import { Link } from "wouter";
import { TrendingUp, Mail, Linkedin, Users, Zap, Target, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function RevenueAutomation() {
  useEffect(() => {
    document.title = "Revenue Automation & Growth | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Automate your entire revenue engine. From lead generation to deal closing, we build AI-powered systems that grow your business on autopilot.");
    }
  }, []);

  return (
    <Layout>
    <div className="revenue-automation">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(158,83%,39%)] to-[hsl(221,91%,60%)]">
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Automate your entire <span className="italic">revenue engine</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            From lead generation to deal closing, we build AI-powered systems that grow your business on autopilot.
          </p>
          <Button size="lg" className="bg-white text-[hsl(158,83%,39%)] hover:bg-white/90 h-12 px-8" data-testid="button-get-started">
            Start Growing Revenue
          </Button>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-green-900 to-blue-900" />
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Generate predictable, <span className="italic text-[hsl(221,91%,60%)]">scalable revenue</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop relying on manual outreach and unpredictable results. Build a revenue machine that works 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, value: "3x", label: "Average revenue increase in 90 days" },
              { icon: Users, value: "10,000+", label: "Leads generated monthly" },
              { icon: Zap, value: "90%", label: "Reduction in manual work" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-xl border border-border hover:shadow-lg transition-all" data-testid={`metric-${i}`}>
                <item.icon className="h-16 w-16 text-[hsl(158,83%,39%)] mx-auto mb-4" />
                <div className="text-6xl font-bold text-[hsl(158,83%,39%)] mb-3">{item.value}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Categories - Large Cards */}
      <section className="py-20 bg-[hsl(0,0%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-bold">
            Complete <span className="italic text-[hsl(221,91%,60%)]">revenue automation</span> stack
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { 
                name: "Lead Generation on Autopilot", 
                desc: "AI finds and qualifies your ideal customers from 100+ data sources. Build targeted lists daily.",
                icon: Users,
                features: ["300+ leads/day", "Multi-source enrichment", "Intent signals"]
              },
              { 
                name: "Email Deliverability Suite", 
                desc: "Warm-up infrastructure, spam testing, and inbox rotation. Land in inbox, not spam.",
                icon: Mail,
                features: ["99% inbox rate", "Domain health monitoring", "Auto warm-up"]
              },
              { 
                name: "LinkedIn Automation", 
                desc: "Automate connection requests, messaging, and follow-ups. Scale LinkedIn outreach safely.",
                icon: Linkedin,
                features: ["Safe automation", "Personalized at scale", "Multi-account"]
              },
              { 
                name: "AI-Powered Outreach", 
                desc: "Personalized emails and messages written by AI. A/B testing and optimization built-in.",
                icon: Zap,
                features: ["90% personalization", "Auto A/B testing", "Learning algorithms"]
              },
              { 
                name: "CRM Automation", 
                desc: "Auto-sync leads, update records, score prospects, and trigger workflows. Zero manual data entry.",
                icon: BarChart,
                features: ["Auto data sync", "Lead scoring", "Pipeline automation"]
              },
              { 
                name: "Deal Intelligence", 
                desc: "AI analyzes deals, predicts close rates, and recommends next actions to win more.",
                icon: Target,
                features: ["Predictive scoring", "Win/loss analysis", "Action recommendations"]
              },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[420px] snap-center group" data-testid={`card-automation-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[280px] bg-gradient-to-br from-green-50 via-blue-50 to-green-100 overflow-hidden flex items-center justify-center">
                    <item.icon className="h-32 w-32 text-[hsl(158,83%,39%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-sm font-medium">Explore Tool →</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                    <div className="space-y-2">
                      {item.features.map((feature, j) => (
                        <div key={j} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-[hsl(221,91%,60%)] mr-2" />
                          <span className="text-muted-foreground">{feature}</span>
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

      {/* Tools We Integrate */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(158,83%,39%)] mb-4">INTEGRATIONS</div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Works with your <span className="italic text-[hsl(221,91%,60%)]">existing stack</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Clay", "Instantly", "Lemlist", "Apollo",
              "HubSpot", "Salesforce", "Pipedrive", "Close",
              "LinkedIn", "Expandi", "PhantomBuster", "Waalaxy",
              "Zapier", "Make", "n8n", "API Access"
            ].map((tool, i) => (
              <div key={i} className="p-6 rounded-xl border border-border hover:border-[hsl(158,83%,39%)] hover:shadow-lg transition-all text-center" data-testid={`tool-${i}`}>
                <div className="font-bold text-lg">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[hsl(0,0%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              From zero to <span className="italic text-[hsl(221,91%,60%)]">revenue machine</span> in 30 days
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Strategy Session", desc: "We analyze your ICP, messaging, and revenue goals" },
              { step: "2", title: "Tech Stack Setup", desc: "Install and configure all automation tools and integrations" },
              { step: "3", title: "Campaign Launch", desc: "Launch multi-channel campaigns with AI-powered personalization" },
              { step: "4", title: "Optimize & Scale", desc: "Continuously test, optimize, and scale winning campaigns" },
            ].map((item, i) => (
              <div key={i} className="text-center" data-testid={`step-${i}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(158,83%,39%)] text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl md:text-7xl font-bold text-[hsl(158,83%,39%)] mb-4">$50M+</div>
          <div className="text-2xl md:text-3xl font-bold mb-4">in pipeline generated for clients</div>
          <p className="text-xl text-muted-foreground">
            Join 500+ companies automating their revenue growth
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(158,83%,39%)] to-[hsl(221,91%,60%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to <span className="italic">automate your revenue?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a strategy call and we'll show you exactly how to 3x your pipeline in 90 days
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[hsl(158,83%,39%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-strategy">
              Book Strategy Call
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
