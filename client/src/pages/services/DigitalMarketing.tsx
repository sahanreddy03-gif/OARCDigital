import { useEffect } from "react";
import { Link } from "wouter";
import { Target, TrendingUp, Users, Zap, BarChart, Globe, CheckCircle2, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/media_strategy_plann_9ca291d2.jpg";

export default function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Digital Marketing Services - Full-Service Growth Partner | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-service digital marketing. Strategy, creative, paid media, SEO, social, content. Everything you need to grow online.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Digital Marketing Services - Full-Service Growth Partner | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Full-service digital marketing. Strategy, creative, paid media, SEO, social, content. Everything you need to grow online.');
  }, []);

  return (
    <Layout>
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Digital marketing strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Your complete <span className="italic bg-gradient-to-r from-slate-300 via-gray-200 to-zinc-100 text-transparent bg-clip-text">digital growth</span> partner
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Full-service digital marketing. Strategy, creative, paid media, SEO, social, content, analytics. Everything you need to grow online, all under one roof.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90" data-testid="button-get-started">
              Build Your Growth Plan
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Marketing Results
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering growth for businesses across industries
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Multi-location Businesses', 'E-commerce', 'Service Providers', 'Franchises', 'Retail', 'B2B'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-slate-700 mb-3">FULL-SERVICE DIGITAL MARKETING</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Strategy, creative, media, analytics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop juggling agencies. One team, one strategy, one dashboard. Full-stack marketing that works together
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "350+", label: "Brands grown with full-service marketing" },
              { value: "18", label: "Avg. channels managed per client" },
              { value: "3.8x", label: "Avg. revenue growth YoY" },
              { value: "91%", label: "Client retention rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-zinc-700 text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-slate-700 mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we grew a multi-location service business from $2M to $8.5M in 18 months
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">$6.5M growth</div>
                  <div className="text-sm text-muted-foreground">Revenue increase in 18 months</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">425% ROAS</div>
                  <div className="text-sm text-muted-foreground">Return on ad spend</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">23 locations</div>
                  <div className="text-sm text-muted-foreground">Expanded from 8 locations</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Through integrated campaigns across Google Ads, Facebook, SEO, content marketing, and email, we built a full-funnel marketing engine. We optimized local search presence for each location, launched geo-targeted paid campaigns, created location-specific landing pages, and built automated nurture sequences. Revenue per location increased 285% while customer acquisition cost decreased 42%.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Multi-Location SEO', 'Geo-Targeted Ads', 'Content Marketing', 'Email Automation', 'Local Optimization'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-slate-700 mb-3">COMPREHENSIVE SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need. <span className="italic text-slate-600">Under one roof.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Full-stack digital marketing that works together as one integrated system
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Digital Strategy & Planning", 
                desc: "Market research, competitive analysis, channel strategy, budget allocation. Build the roadmap for growth with clear KPIs and milestones.",
                icon: Target,
                features: ["Market research", "Competitor analysis", "Channel strategy", "Budget planning"]
              },
              { 
                name: "Creative & Content Production", 
                desc: "Ad creative, video, social content, copywriting, design. All the assets you need to execute campaigns across every channel.",
                icon: Zap,
                features: ["Ad creative design", "Video production", "Copywriting", "Brand assets"]
              },
              { 
                name: "Paid Media Management", 
                desc: "Google Ads, Meta Ads, LinkedIn, TikTok, programmatic. Expert campaign management across all paid channels with performance tracking.",
                icon: TrendingUp,
                features: ["Search ads", "Social ads", "Display ads", "Performance tracking"]
              },
              { 
                name: "SEO & Content Marketing", 
                desc: "Technical SEO, content strategy, link building, blog production. Organic growth that compounds over time with sustainable traffic.",
                icon: Globe,
                features: ["Technical SEO", "Content strategy", "Link building", "Blog production"]
              },
              { 
                name: "Social Media Marketing", 
                desc: "Strategy, content creation, community management, influencer partnerships. Build engaged audiences on every platform that matters.",
                icon: Users,
                features: ["Content creation", "Community management", "Influencer partnerships", "Social strategy"]
              },
              { 
                name: "Analytics & Optimization", 
                desc: "Multi-touch attribution, conversion tracking, A/B testing, dashboards. Data-driven decision making across all channels with unified reporting.",
                icon: BarChart,
                features: ["Attribution modeling", "Conversion tracking", "A/B testing", "Custom dashboards"]
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-slate-900/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-slate-900 transition-colors">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-slate-700" />
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
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Integrated marketing execution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your digital marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Marketing Strategy & Planning", desc: "Comprehensive strategy covering all channels. Define target audiences, messaging, budget allocation, and success metrics for integrated campaigns." },
              { name: "Campaign Development & Creative", desc: "Create compelling campaigns with professional creative assets. Ad copy, landing pages, email templates, social content, and video production." },
              { name: "Multi-Channel Execution", desc: "Execute campaigns across paid search, social, SEO, email, and content. Coordinated messaging and timing across all touchpoints." },
              { name: "Conversion Rate Optimization", desc: "Systematically test and optimize landing pages, forms, CTAs, and user flows. Improve conversion rates across all channels month over month." },
              { name: "Performance Tracking & Attribution", desc: "Multi-touch attribution modeling, conversion tracking, and custom dashboards. Understand what's driving revenue and ROI across all channels." },
              { name: "Monthly Reporting & Optimization", desc: "Detailed monthly reports with actionable insights. Regular strategy calls to review performance and optimize campaigns for better results." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-deliverable-${i}`}>
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
              How we work: <span className="italic text-slate-600">Strategy, execute, optimize</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-phase approach to integrated marketing
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "Deep dive into your business, customers, competitors, and market. Build comprehensive strategy covering all channels with clear objectives and KPIs." },
              { step: "02", title: "Campaign Development", desc: "Create campaign assets including creative, copy, landing pages, and email sequences. Set up tracking, attribution, and reporting infrastructure." },
              { step: "03", title: "Multi-Channel Launch", desc: "Launch integrated campaigns across paid, organic, and owned channels. Coordinate messaging and timing for maximum impact and efficiency." },
              { step: "04", title: "Test, Learn, Scale", desc: "Weekly optimization across all channels. A/B test creative, messaging, audiences, and budgets. Scale what works, kill what doesn't." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-slate-900/20 flex-shrink-0">{item.step}</div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to grow with a full-service partner?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            One team. One strategy. Measurable results. Let's build your integrated digital marketing engine.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90" data-testid="button-cta-primary">
              Get Your Custom Plan
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
