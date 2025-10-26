import { useEffect } from "react";
import { Link } from "wouter";
import { TrendingUp, Target, Zap, BarChart, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function PaidAdvertising() {
  useEffect(() => {
    document.title = "Paid Advertising Services - Scale Profitably | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-service paid advertising management. Google Ads, Meta, LinkedIn, TikTok. Lower CPA, increase ROAS, scale profitably with expert campaign management.");
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(280,70%,50%)] to-[hsl(330,81%,60%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Paid advertising that <span className="italic">actually scales</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Full-service paid campaign management across Google, Meta, LinkedIn, TikTok, and more. We don't just run ads—we build profitable growth engines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90 h-12 px-8" data-testid="button-get-started">
              Start Scaling
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-view-case-studies">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Managing $50M+ in annual ad spend
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'YouTube Ads', 'Pinterest Ads'].map((platform, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{platform}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">PROVEN RESULTS</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Stop wasting ad spend. <span className="italic text-[hsl(330,81%,60%)]">Start scaling profitably.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert campaign management, rigorous testing, and data-driven optimization. We find what works, kill what doesn't, and scale winners relentlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "2.8x", label: "Average ROAS improvement in 90 days" },
              { value: "47%", label: "Average CPA reduction within 6 months" },
              { value: "$50M+", label: "Annual ad spend managed profitably" },
              { value: "89%", label: "Client retention rate year-over-year" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(262,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(262,83%,58%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms We Master */}
      <section className="py-20 bg-[hsl(262,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">MULTI-PLATFORM EXPERTISE</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every platform. <span className="italic text-[hsl(330,81%,60%)]">Every audience.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Google Ads (Search & Display)", desc: "Capture high-intent buyers with Search, expand reach with Display. Advanced bidding strategies, granular audience targeting, conversion tracking.", icon: Target },
              { name: "Meta Ads (Facebook & Instagram)", desc: "Dominate the world's largest social platforms. Custom audiences, lookalikes, dynamic product ads, A/B creative testing at scale.", icon: TrendingUp },
              { name: "LinkedIn Ads", desc: "Reach B2B decision-makers where they engage. Sponsored Content, InMail, Lead Gen Forms. Target by job title, company, industry, seniority.", icon: BarChart },
              { name: "TikTok Ads", desc: "Capture Gen Z and millennial buyers with thumb-stopping video ads. Spark Ads, TopView, In-Feed. Trend-responsive creative.", icon: Zap },
              { name: "YouTube Ads", desc: "Pre-roll, mid-roll, bumper ads, and Discovery. Video storytelling that drives awareness and conversions. Audience intent targeting.", icon: Target },
              { name: "Programmatic & Display", desc: "Retargeting, contextual targeting, and premium placements across the open web. Real-time bidding, frequency capping, attribution.", icon: DollarSign },
            ].map((platform, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-platform-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-hidden flex items-center justify-center">
                    <platform.icon className="h-24 w-24 text-[hsl(262,83%,58%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                    <p className="text-muted-foreground">{platform.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              Full-service management. <span className="italic text-[hsl(330,81%,60%)]">Zero overhead.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Campaign Strategy & Planning", desc: "Audience research, competitor analysis, funnel mapping, budget allocation, KPI definition. Strategic foundations that set campaigns up for success." },
              { name: "Account Setup & Structure", desc: "Campaign architecture, ad group organization, conversion tracking, UTM parameters. Clean, scalable account structure from day one." },
              { name: "Creative Ideation & Testing", desc: "Ad copy, headlines, CTAs, visual concepts. Continuous A/B testing to find winning combinations that drive performance." },
              { name: "Bid Management & Optimization", desc: "Smart bidding strategies, manual bid adjustments, dayparting, device targeting. Maximize ROI while hitting your target CPA." },
              { name: "Audience Segmentation & Targeting", desc: "Custom audiences, lookalikes, retargeting, exclusions. Reach the right people at the right time with the right message." },
              { name: "Reporting & Performance Analysis", desc: "Weekly dashboards, monthly deep-dives, attribution modeling, incrementality testing. Full transparency into what's working and why." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-border hover:border-[hsl(262,83%,58%)] hover:shadow-lg transition-all" data-testid={`card-service-${i}`}>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 bg-[hsl(262,10%,98%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              Our process: <span className="italic text-[hsl(330,81%,60%)]">Launch, test, scale</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery & Audit", desc: "Analyze current performance, identify quick wins, define success metrics. If you're already running ads, we audit everything and find immediate optimization opportunities." },
              { step: "02", title: "Strategy & Launch", desc: "Build campaign architecture, create initial ad variations, set up tracking. Launch within 7-10 days with foundational campaigns live." },
              { step: "03", title: "Test & Iterate", desc: "A/B test ad creative, audiences, bidding strategies, landing pages. Weekly iterations based on performance data. Kill losers fast, double down on winners." },
              { step: "04", title: "Scale & Optimize", desc: "Increase budgets on profitable campaigns, expand to new platforms, refine targeting. Continuous optimization to maintain efficiency as spend grows." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-8 bg-white rounded-xl border border-border" data-testid={`step-${i}`}>
                <div className="text-6xl font-bold text-[hsl(262,83%,58%)]/20">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold">
              Trusted by <span className="italic text-[hsl(330,81%,60%)]">growth-focused brands</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "$50M+", label: "Annual ad spend managed profitably" },
              { value: "300+", label: "Active campaigns running right now" },
              { value: "14 days", label: "Average time to first profitable campaign" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-[hsl(262,83%,58%)] mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to scale profitably?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Stop guessing. Start growing. Get expert paid advertising management that delivers real ROI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-primary">
              Get a Free Ad Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-cta-secondary">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
