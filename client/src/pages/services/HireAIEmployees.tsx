import { useEffect } from "react";
import { Link } from "wouter";
import { Bot, Users, MessageSquare, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function HireAIEmployees() {
  useEffect(() => {
    document.title = "Hire AI Employees | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Scale your team instantly with AI employees. Automate sales, support, and operations 24/7 without hiring overhead.");
    }
  }, []);

  return (
    <Layout>
    <div className="hire-ai-employees">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(262,83%,57%)] to-[hsl(158,83%,39%)]">
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Scale your team with <span className="italic">AI employees</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Automate sales, support, and operations 24/7. No hiring overhead. No training required. Just instant productivity.
          </p>
          <Button size="lg" className="bg-white text-[hsl(262,83%,57%)] hover:bg-white/90 h-12 px-8" data-testid="button-get-started">
            Get Your AI Team
          </Button>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-green-900 flex items-center justify-center">
            <div className="text-white/50 text-center">
              <div className="text-sm uppercase tracking-wider mb-2">Hero Asset</div>
              <div className="text-xs">4K/UHD (3840x2160)</div>
              <div className="text-xs mt-1">AI team illustration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Employees */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Why businesses are hiring <span className="italic text-[hsl(158,83%,39%)]">AI employees</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, value: "24/7", label: "Always available, never takes breaks" },
              { icon: DollarSign, value: "90%", label: "Cost savings vs traditional hiring" },
              { icon: TrendingUp, value: "10x", label: "Faster response times" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-xl border border-border hover:shadow-lg transition-all" data-testid={`benefit-${i}`}>
                <item.icon className="h-16 w-16 text-[hsl(262,83%,57%)] mx-auto mb-4" />
                <div className="text-6xl font-bold text-[hsl(262,83%,57%)] mb-3">{item.value}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Employee Roles - Large Cards */}
      <section className="py-20 bg-[hsl(0,0%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-bold">
            Meet your <span className="italic text-[hsl(158,83%,39%)]">AI employees</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { 
                name: "AI SDR (Sales Development Rep)", 
                desc: "Prospect, qualify leads, and book meetings automatically. Handles cold outreach, follow-ups, and lead scoring.",
                features: ["300+ leads/day", "Personalized outreach", "Auto-scheduling"]
              },
              { 
                name: "AI Customer Support Agent", 
                desc: "Answer customer questions 24/7 across email, chat, and social. Escalates complex issues to humans.",
                features: ["Instant responses", "Multi-language", "90% resolution rate"]
              },
              { 
                name: "AI Content Writer", 
                desc: "Create blog posts, social content, emails, and ads. Maintains brand voice and SEO optimization.",
                features: ["10x faster", "SEO optimized", "Brand consistent"]
              },
              { 
                name: "AI Data Analyst", 
                desc: "Analyze data, generate reports, and provide insights. Connects to your CRM, analytics, and databases.",
                features: ["Real-time insights", "Auto reporting", "Predictive analytics"]
              },
              { 
                name: "AI Email Assistant", 
                desc: "Manage inbox, draft responses, schedule follow-ups. Integrates with Gmail, Outlook, and more.",
                features: ["Smart prioritization", "Auto-responses", "Calendar sync"]
              },
            ].map((role, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[420px] snap-center group" data-testid={`card-role-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[280px] bg-gradient-to-br from-purple-50 via-green-50 to-purple-100 overflow-hidden flex items-center justify-center">
                    <Bot className="h-32 w-32 text-[hsl(262,83%,57%)]/20" />
                    <div className="absolute bottom-4 left-4 right-4 text-center text-muted-foreground">
                      <div className="text-sm font-medium mb-1">Asset Placeholder</div>
                      <div className="text-xs">1920x1080px</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{role.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{role.desc}</p>
                    <div className="space-y-2">
                      {role.features.map((feature, j) => (
                        <div key={j} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-[hsl(158,83%,39%)] mr-2" />
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

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Get started in <span className="italic text-[hsl(158,83%,39%)]">3 simple steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Choose Your AI Employee", desc: "Select the role that fits your needs. SDR, support, content, or custom." },
              { step: "2", title: "Connect Your Tools", desc: "Integrate with your CRM, email, calendar, and other systems in minutes." },
              { step: "3", title: "Watch Them Work", desc: "Your AI employee starts working immediately. Monitor performance in real-time." },
            ].map((item, i) => (
              <div key={i} className="text-center" data-testid={`step-${i}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(262,83%,57%)] text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 bg-[hsl(262,83%,57%)]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate your <span className="italic text-[hsl(158,83%,39%)]">ROI</span>
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Traditional Employee Cost</div>
                <div className="text-4xl font-bold text-destructive mb-1">$75,000</div>
                <div className="text-sm text-muted-foreground">+ benefits, training, overhead</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">AI Employee Cost</div>
                <div className="text-4xl font-bold text-[hsl(158,83%,39%)] mb-1">$8,000</div>
                <div className="text-sm text-muted-foreground">All-inclusive, instant productivity</div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-[hsl(158,83%,39%)]/10 rounded-lg">
              <div className="text-2xl font-bold text-[hsl(158,83%,39%)]">Save $67,000 per year</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(262,83%,57%)] to-[hsl(158,83%,39%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to <span className="italic">scale your team</span> with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start with one AI employee. Scale to an entire team. No contracts, cancel anytime.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[hsl(262,83%,57%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-start">
              Get Your First AI Employee
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-cta-contact">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
