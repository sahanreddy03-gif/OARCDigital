import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Target, TrendingUp, Users, Zap, BarChart, Globe } from "lucide-react";

export default function DigitalMarketing() {
  useEffect(() => {
    document.title = "Digital Marketing Services - Full-Service Growth Partner | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-service digital marketing. Strategy, creative, paid media, SEO, social, content. Everything you need to grow online.");
    }
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#c4ff4d]/10"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Your complete <span className="italic text-[#c4ff4d]">digital growth</span> partner
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Full-service digital marketing. Strategy, creative, paid media, SEO, social, content, analytics. Everything you need to grow online, all under one roof.
          </p>
          <Button size="lg" className="bg-[#c4ff4d] text-slate-900 hover:bg-[#b8f042] h-12 px-8" data-testid="button-get-started">
            Build Your Growth Plan
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-slate-700 mb-4">FULL-SERVICE DIGITAL MARKETING</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Strategy. Creative. Media. <span className="italic text-[#ea580c]">Analytics.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop juggling agencies. One team, one strategy, one dashboard. Full-stack digital marketing that actually works together.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "350+", label: "Brands grown with full-service marketing" },
              { value: "18 channels", label: "Average channels managed per client" },
              { value: "3.8x", label: "Average revenue growth year-over-year" },
              { value: "91%", label: "Client retention rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-slate-700 mb-4">COMPREHENSIVE SERVICES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Everything you need. <span className="italic text-[#ea580c]">Under one roof.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Digital Strategy & Planning", desc: "Market research, competitive analysis, channel strategy, budget allocation. Build the roadmap for growth.", icon: Target },
              { name: "Creative & Content Production", desc: "Ad creative, video, social content, copywriting, design. All the assets you need to execute campaigns.", icon: Zap },
              { name: "Paid Media Management", desc: "Google Ads, Meta Ads, LinkedIn, TikTok, programmatic. Expert campaign management across all paid channels.", icon: TrendingUp },
              { name: "SEO & Content Marketing", desc: "Technical SEO, content strategy, link building, blog production. Organic growth that compounds over time.", icon: Globe },
              { name: "Social Media Marketing", desc: "Strategy, content creation, community management, influencer partnerships. Build engaged audiences on every platform.", icon: Users },
              { name: "Analytics & Optimization", desc: "Multi-touch attribution, conversion tracking, A/B testing, dashboards. Data-driven decision making across all channels.", icon: BarChart },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-slate-900/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold">
              Growth that <span className="italic text-[#ea580c]">compounds</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "350+", label: "Brands grown" },
              { value: "3.8x", label: "Average YoY revenue growth" },
              { value: "91%", label: "Client retention rate" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to grow with a full-service partner?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            One team. One strategy. Measurable results. Let's build your growth engine.
          </p>
          <Button size="lg" className="bg-[#c4ff4d] text-slate-900 hover:bg-[#b8f042] h-12 px-8" data-testid="button-cta-primary">
            Get Your Custom Plan
          </Button>
        </div>
      </section>
    </Layout>
  );
}
