import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { TrendingUp, Target, Users, Zap, BarChart, DollarSign } from "lucide-react";

export default function CustomerAcquisition() {
  useEffect(() => {
    document.title = "Customer Acquisition Strategy - Growth Frameworks That Scale | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Data-driven customer acquisition strategies. Build repeatable, scalable systems that acquire customers profitably across every channel.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Customer Acquisition Strategy - Growth Frameworks That Scale | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Data-driven customer acquisition strategies. Build repeatable, scalable systems that acquire customers profitably across every channel.');
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Acquire customers <span className="italic">profitably at scale</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Growth frameworks that work. Build repeatable, data-driven customer acquisition systems across paid, organic, and partner channels.
          </p>
          <Button size="lg" className="bg-white text-indigo-600" data-testid="button-get-started">
            Build Your Growth Engine
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-indigo-600 mb-4">CUSTOMER ACQUISITION STRATEGY</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Predictable growth. <span className="italic text-purple-600">Profitable unit economics.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We build acquisition systems that scale. Lower CAC, increase LTV, optimize every channel for maximum ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "42%", label: "Average CAC reduction within 6 months" },
              { value: "3.1x", label: "Average LTV:CAC ratio improvement" },
              { value: "250K+", label: "New customers acquired for clients" },
              { value: "18 channels", label: "Tested and optimized per client avg" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-indigo-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-indigo-600 mb-4">GROWTH FRAMEWORKS</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every channel. <span className="italic text-purple-600">Every lever.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Channel Mix Optimization", desc: "Test and scale across 20+ acquisition channels. Find your most efficient channel mix and double down on winners.", icon: BarChart },
              { name: "Funnel Conversion Optimization", desc: "Optimize every step from first touch to paying customer. Reduce drop-off, increase conversion, maximize LTV.", icon: TrendingUp },
              { name: "CAC Payback & Unit Economics", desc: "Model customer acquisition costs, payback periods, LTV:CAC ratios. Make data-driven budget allocation decisions.", icon: DollarSign },
              { name: "Retention & Referral Loops", desc: "Turn customers into acquisition engines. Build viral loops, referral programs, and retention strategies that compound.", icon: Users },
              { name: "Pricing & Packaging Optimization", desc: "Test pricing models, packaging tiers, discount strategies. Maximize revenue per customer and conversion rates.", icon: Target },
              { name: "Attribution & Analytics", desc: "Multi-touch attribution, cohort analysis, incrementality testing. Understand what's actually driving growth.", icon: Zap },
            ].map((framework, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-framework-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden flex items-center justify-center">
                    <framework.icon className="h-24 w-24 text-indigo-600/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{framework.name}</h3>
                    <p className="text-muted-foreground">{framework.desc}</p>
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
              Growth that <span className="italic text-purple-600">compounds</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "42%", label: "Average CAC reduction" },
              { value: "3.1x", label: "LTV:CAC ratio improvement" },
              { value: "250K+", label: "Customers acquired" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-indigo-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to build a growth engine?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's build a customer acquisition system that scales profitably.
          </p>
          <Button size="lg" className="bg-white text-indigo-600" data-testid="button-cta-primary">
            Get Your Growth Plan
          </Button>
        </div>
      </section>
    </Layout>
  );
}
