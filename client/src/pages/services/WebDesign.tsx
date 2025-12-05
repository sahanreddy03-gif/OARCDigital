import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Gauge, MousePointer2, TrendingUp, Timer, Users, Zap, ArrowUpRight, BarChart3, Target, Eye, ShoppingCart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";

import heroImage from '@assets/website-design-optimized.jpg';
import webImg1 from "@assets/stock_images/modern_web_design_ux_d23df466.jpg";
import webImg2 from "@assets/stock_images/modern_web_design_ux_62274473.jpg";
import webImg3 from "@assets/stock_images/modern_web_design_ux_699e8c91.jpg";
import webImg4 from "@assets/stock_images/modern_website_desig_4ba94acf.jpg";
import webAppImg from "@assets/stock_images/modern_web_design_we_927d8700.jpg";

export default function WebDesign() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const liveMetrics = [
    { label: "Page Speed", value: "0.8s", target: "<1.5s", status: "good" },
    { label: "Bounce Rate", value: "28%", target: "<35%", status: "good" },
    { label: "Conversion", value: "4.2%", target: ">3%", status: "good" },
    { label: "Mobile Score", value: "98", target: ">90", status: "good" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Web Design | Conversion-Focused Sites | OARC Digital"
        description="Websites engineered for conversion. Performance-optimized, mobile-first, A/B tested. See real metrics from sites we've built."
        canonicalUrl="https://oarcdigital.com/services/web-design"
        ogType="article"
        structuredData={createServiceSchema(
          "Web Design Services",
          "Conversion-optimized web design for SaaS, e-commerce, and B2B companies",
          "Web Design & Development"
        )}
        schemaId="service-web-design"
      />

      {/* HERO: Performance Dashboard Style */}
      <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Web design"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/80"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-400 text-sm uppercase tracking-widest mb-4">Web Design & Development</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-web-design">
                Websites that actually convert.
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Not just pretty. Profitable. Every pixel optimized for performance, every interaction designed to convert.
              </p>
              
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-emerald-500 text-black rounded-full pl-8 pr-4 py-4 text-lg font-bold hover:bg-emerald-400 transition-colors"
                  data-testid="button-get-audit"
                >
                  Get a Free UX Audit
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Live metrics dashboard */}
            <div className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white/40 text-sm">Live site performance</span>
                <span className="flex items-center gap-2 text-emerald-400 text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  All systems healthy
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {liveMetrics.map((metric, i) => (
                  <div 
                    key={i}
                    className={`p-4 rounded-xl transition-all ${
                      activeMetric === i ? 'bg-emerald-500/20 border border-emerald-500/50' : 'bg-zinc-800/50'
                    }`}
                    data-testid={`metric-${i}`}
                  >
                    <div className="text-white/40 text-xs mb-1">{metric.label}</div>
                    <div className="text-2xl font-black text-white">{metric.value}</div>
                    <div className="text-emerald-400 text-xs">Target: {metric.target}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">Lighthouse Score</span>
                  <span className="text-emerald-400 font-bold">99/100</span>
                </div>
                <div className="mt-2 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[99%] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Case Study Spotlight with Before/After */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Real results, not mockups</h2>
              <p className="text-white/50">Actual performance improvements from recent projects</p>
            </div>

            {/* Featured case study */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={webImg1} alt="SaaS website redesign" className="w-full h-[400px] object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-black text-sm font-bold rounded-full">
                  SaaS Redesign
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-white mb-4">Fintech SaaS Platform</h3>
                <p className="text-white/60 mb-8">
                  Complete redesign of signup flow and pricing page. The old site had a 1.2% conversion rate with slow load times. We rebuilt it from scratch with conversion in mind.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { before: "1.2%", after: "4.8%", label: "Conversion Rate", change: "+300%" },
                    { before: "4.2s", after: "0.9s", label: "Load Time", change: "-78%" },
                    { before: "68%", after: "32%", label: "Bounce Rate", change: "-53%" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center" data-testid={`case-stat-${i}`}>
                      <div className="text-emerald-400 text-xs font-bold mb-1">{stat.change}</div>
                      <div className="text-white/30 text-xs line-through">{stat.before}</div>
                      <div className="text-2xl font-black text-white">{stat.after}</div>
                      <div className="text-white/40 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* More case thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: webImg2, title: "E-commerce", metric: "+127% revenue" },
                { img: webImg3, title: "Lead Gen Site", metric: "+89% leads" },
                { img: webImg4, title: "SaaS Landing", metric: "+156% signups" },
                { img: webAppImg, title: "B2B Platform", metric: "+67% demos" },
              ].map((project, i) => (
                <div 
                  key={i}
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                  data-testid={`project-${i}`}
                >
                  <img 
                    src={project.img}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-emerald-400 text-xs font-bold">{project.metric}</span>
                    <h4 className="text-white font-bold text-sm">{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: Conversion Framework */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Our conversion framework
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Every website we build follows a proven methodology for turning visitors into customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Eye, 
                  step: "Capture", 
                  title: "Above-the-fold impact",
                  desc: "Hook visitors in 3 seconds with clear value props, strong visuals, and obvious next steps.",
                  tactics: ["Hero messaging", "Social proof", "Clear CTA"]
                },
                { 
                  icon: MousePointer2, 
                  step: "Guide", 
                  title: "Intuitive user journeys",
                  desc: "Remove friction and lead visitors toward conversion with smart UX patterns.",
                  tactics: ["Progressive disclosure", "Sticky nav", "F-pattern layout"]
                },
                { 
                  icon: Target, 
                  step: "Convert", 
                  title: "Optimized conversion points",
                  desc: "Forms, CTAs, and checkout flows designed to maximize completion rates.",
                  tactics: ["Multi-step forms", "Urgency triggers", "Trust signals"]
                },
              ].map((phase, i) => (
                <div 
                  key={i}
                  className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 group hover:border-emerald-500/50 transition-colors"
                  data-testid={`framework-${i}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-emerald-400 text-sm font-bold uppercase">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-white/50 text-sm mb-6">{phase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.tactics.map((tactic, j) => (
                      <span key={j} className="px-3 py-1 bg-zinc-800 text-white/60 text-xs rounded-full">
                        {tactic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: What We Build */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              Sites built for specific goals
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, title: "SaaS Websites", desc: "Product pages, pricing, demo flows optimized for trial signups." },
                { icon: ShoppingCart, title: "E-commerce", desc: "Product pages, cart, checkout flows that reduce abandonment." },
                { icon: Target, title: "Lead Generation", desc: "Landing pages and forms designed for maximum lead capture." },
                { icon: BarChart3, title: "B2B Platforms", desc: "Professional sites that establish credibility and generate demos." },
                { icon: Zap, title: "Landing Pages", desc: "Single-purpose pages for campaigns, launches, and promotions." },
                { icon: Users, title: "Corporate Sites", desc: "Brand-forward sites that communicate company values and attract talent." },
              ].map((type, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl border border-zinc-200 hover:border-emerald-500 hover:shadow-lg transition-all group"
                  data-testid={`site-type-${i}`}
                >
                  <type.icon className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: Tech & Performance */}
      <section className="py-16 px-4 bg-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99/100", label: "Lighthouse Score" },
              { value: "<1s", label: "First Paint" },
              { value: "Mobile-First", label: "All Responsive" },
              { value: "A/B Ready", label: "Built for Testing" },
            ].map((stat, i) => (
              <div key={i} data-testid={`perf-stat-${i}`}>
                <div className="text-3xl md:text-4xl font-black text-black">{stat.value}</div>
                <div className="text-sm text-black/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Want a site that works harder?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Get a free UX audit and see where your current site is losing conversions.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-emerald-500 text-black rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-emerald-400 transition-colors"
              data-testid="button-cta-audit"
            >
              Get Free UX Audit
              <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
