import { useEffect } from "react";
import { Link } from "wouter";
import { Bot, Users, MessageSquare, TrendingUp, Clock, DollarSign, CheckCircle2, Database, Mail, Headphones, BarChart, Share2, Code, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/artificial_intellige_a2f9df87.jpg";

export default function HireAIEmployees() {
  useEffect(() => {
    document.title = "Hire AI Employees - Scale Your Team Instantly | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Scale your team instantly with AI employees. Automate sales, support, and operations 24/7 without hiring overhead. 90% cost savings vs traditional hiring.");
    }
    // Open Graph tags
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Hire AI Employees - Scale Your Team Instantly | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Deploy AI employees in hours. No recruiting, no onboarding, no payroll. Just instant productivity at 10% of the cost.');
  }, []);

  return (
    <Layout>
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="AI artificial intelligence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Scale your team with <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(300,81%,60%)] to-[hsl(158,83%,39%)] text-transparent bg-clip-text">AI employees</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Deploy AI employees in hours, not months. No recruiting, no onboarding, no payroll. Just instant productivity at 10% of the cost.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90" data-testid="button-get-started">
              Get Your AI Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View ROI Calculator
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by teams who want to scale fast
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['SMBs', 'Agencies', 'Professional Services', 'E-commerce', 'SaaS Companies', 'Consulting Firms'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">AI EMPLOYEE BENEFITS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why businesses are hiring AI employees
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save 90% on costs, work 24/7, scale instantly. No recruiting, training, or management overhead
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Clock, value: "24/7", label: "Always available, never takes breaks" },
              { icon: DollarSign, value: "90%", label: "Cost savings vs traditional hiring" },
              { icon: TrendingUp, value: "10x", label: "Faster response times" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(262,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <stat.icon className="h-16 w-16 text-[hsl(262,83%,58%)] mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(158,83%,39%)] text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-[hsl(262,10%,98%)]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How an agency saved $420K/year by hiring 6 AI employees
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">$420K saved</div>
                  <div className="text-sm text-muted-foreground">Annual cost reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">6 AI employees</div>
                  <div className="text-sm text-muted-foreground">Replaced 8 full-time roles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">48 hours</div>
                  <div className="text-sm text-muted-foreground">Time to full deployment</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                A 45-person marketing agency deployed AI employees for SDR prospecting, customer support, content creation, data analysis, email management, and social media. They reduced headcount from 8 to 2 in these functions while maintaining quality and increasing output. The AI employees handle repetitive work 24/7 while human employees focus on strategy and client relationships.
              </p>
              <div className="flex flex-wrap gap-3">
                {['SDR Automation', 'Support Bot', 'Content AI', 'Data Analysis', '48hr Deployment'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[hsl(262,10%,95%)] text-[hsl(262,83%,58%)] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Employee Roles */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">AI EMPLOYEES AVAILABLE</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet your <span className="italic text-[hsl(158,83%,39%)]">AI employees</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Deploy specialized AI employees for every business function
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "AI SDR (Sales Development Rep)", 
                desc: "Prospect, qualify leads, and book meetings automatically. Handles cold outreach, follow-ups, and lead scoring with 300+ leads/day capacity.",
                icon: Bot,
                features: ["300+ leads/day", "Personalized outreach", "Auto-scheduling", "CRM integration"]
              },
              { 
                name: "AI Customer Support Agent", 
                desc: "Answer customer questions 24/7 across email, chat, and social. Escalates complex issues to humans with context and conversation history.",
                icon: Headphones,
                features: ["Instant responses", "Multi-language", "90% resolution rate", "Smart escalation"]
              },
              { 
                name: "AI Content Writer", 
                desc: "Create blog posts, social content, emails, and ads. Maintains brand voice and SEO optimization while producing 10x faster than humans.",
                icon: MessageSquare,
                features: ["10x faster output", "SEO optimized", "Brand consistent", "Multi-format"]
              },
              { 
                name: "AI Data Analyst", 
                desc: "Analyze data, generate reports, and provide insights. Connects to your CRM, analytics, and databases for real-time business intelligence.",
                icon: BarChart,
                features: ["Real-time insights", "Auto reporting", "Predictive analytics", "Data visualization"]
              },
              { 
                name: "AI Email Assistant", 
                desc: "Manage inbox, draft responses, schedule follow-ups. Integrates with Gmail, Outlook, and more to handle email communication at scale.",
                icon: Mail,
                features: ["Smart prioritization", "Auto-responses", "Calendar sync", "Follow-up tracking"]
              },
            ].map((role, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-role-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[hsl(262,83%,58%)]/10 via-[hsl(300,81%,60%)]/10 to-[hsl(158,83%,39%)]/10 overflow-hidden flex items-center justify-center">
                    <role.icon className="h-16 w-16 text-[hsl(262,83%,58%)]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(262,83%,58%)] transition-colors">{role.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{role.desc}</p>
                    <div className="space-y-2">
                      {role.features.map((feature, j) => (
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

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-[hsl(262,10%,98%)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate your <span className="italic text-[hsl(158,83%,39%)]">ROI</span>
          </h2>
          <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Traditional Employee Cost</div>
                <div className="text-4xl font-bold text-red-600 mb-1">$75,000</div>
                <div className="text-sm text-muted-foreground">+ benefits, training, overhead</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">AI Employee Cost</div>
                <div className="text-4xl font-bold text-[hsl(158,83%,39%)] mb-1">$8,000</div>
                <div className="text-sm text-muted-foreground">All-inclusive, instant productivity</div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[hsl(158,83%,39%)]/10 rounded-xl">
              <div className="text-3xl font-bold text-[hsl(158,83%,39%)]">Save $67,000 per year</div>
              <div className="text-sm text-muted-foreground mt-2">That's 89% cost savings, plus 24/7 availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">INTEGRATIONS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Connects with your <span className="italic text-[hsl(158,83%,39%)]">entire stack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI employees integrate seamlessly with the tools you already use
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { category: "CRM & Sales", tools: ["Salesforce", "HubSpot", "Pipedrive", "Close"], icon: Database },
              { category: "Communication", tools: ["Gmail", "Outlook", "Slack", "Teams"], icon: Mail },
              { category: "Customer Support", tools: ["Zendesk", "Intercom", "Freshdesk", "Help Scout"], icon: Headphones },
              { category: "Analytics", tools: ["Google Analytics", "Mixpanel", "Amplitude", "Segment"], icon: BarChart },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[hsl(262,10%,98%)] border border-border hover:border-[hsl(262,83%,58%)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group" data-testid={`integration-${i}`}>
                <item.icon className="h-8 w-8 text-[hsl(262,83%,58%)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-3 text-sm uppercase tracking-wider text-[hsl(262,83%,58%)]">{item.category}</h3>
                <div className="space-y-1">
                  {item.tools.map((tool, j) => (
                    <div key={j} className="text-sm text-muted-foreground">{tool}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-[hsl(262,10%,98%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get started in <span className="italic text-[hsl(158,83%,39%)]">3 simple steps</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From signup to productivity in 48 hours
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Choose Your AI Employee", desc: "Select the role that fits your needs. SDR, support, content, analyst, or custom. We'll configure the AI employee with your brand voice, processes, and tools." },
              { step: "02", title: "Connect Your Tools", desc: "Integrate with your CRM, email, calendar, and other systems in minutes. Our team handles the technical setup—you just approve the connections." },
              { step: "03", title: "Watch Them Work", desc: "Your AI employee starts working immediately. Monitor performance in real-time, review outputs, and provide feedback to improve over time." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[hsl(262,83%,58%)]/20 flex-shrink-0">{item.step}</div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(300,81%,60%)] to-[hsl(158,83%,39%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="italic">scale your team</span> with AI?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start with one AI employee. Scale to an entire team. No contracts, cancel anytime. 48-hour deployment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90" data-testid="button-cta-primary">
              Get Your First AI Employee
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
