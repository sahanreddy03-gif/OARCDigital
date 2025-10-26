import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Users, TrendingUp, Heart, Zap, Target, BarChart3 } from "lucide-react";

export default function InfluencerMarketing() {
  useEffect(() => {
    document.title = "Influencer Marketing Services - Creator Partnerships That Convert | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "End-to-end influencer marketing campaigns. From micro to mega influencers, we find creators, negotiate deals, manage campaigns, and track ROI.");
    }
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Influencer campaigns that <span className="italic">actually convert</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            We find the perfect creators, negotiate the deals, manage the campaigns, and prove the ROI. Full-service influencer marketing from micro to mega.
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 h-12 px-8" data-testid="button-get-started">
            Launch Your Campaign
          </Button>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-pink-600 mb-4">INFLUENCER EXPERTISE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              From creator discovery to <span className="italic text-rose-500">campaign reporting</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              15,000+ influencer partnerships. 2.5B+ impressions delivered. Campaigns that drive awareness, engagement, and sales.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "15,000+", label: "Influencer partnerships executed" },
              { value: "2.5B+", label: "Total impressions delivered" },
              { value: "4.8x", label: "Average engagement rate vs brand content" },
              { value: "92%", label: "Client satisfaction and repeat rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-pink-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-pink-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-pink-600 mb-4">FULL-SERVICE INFLUENCER CAMPAIGNS</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every step. <span className="italic text-rose-500">Every platform.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Influencer Discovery & Vetting", desc: "Find creators who align with your brand values and audience. Vet for engagement quality, audience authenticity, and brand safety.", icon: Users },
              { name: "Campaign Strategy & Planning", desc: "Define goals, KPIs, messaging, content guidelines. Build campaigns that ladder up to your marketing objectives.", icon: Target },
              { name: "Negotiation & Contracting", desc: "Negotiate rates, deliverables, usage rights, exclusivity. Handle contracts, payments, and legal compliance.", icon: TrendingUp },
              { name: "Content Creation & Approval", desc: "Brief creators, review content pre-publish, request revisions. Ensure brand messaging while preserving creator authenticity.", icon: Heart },
              { name: "Campaign Management & Optimization", desc: "Coordinate multi-creator campaigns, monitor performance in real-time, optimize budgets toward top performers.", icon: Zap },
              { name: "Reporting & ROI Measurement", desc: "Track impressions, engagement, conversions, earned media value. Prove the business impact of influencer investments.", icon: BarChart3 },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-pink-600/20" />
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

      {/* Creator Tiers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              Micro to mega. <span className="italic text-rose-500">Every tier.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { tier: "Nano (1K-10K)", desc: "Hyper-engaged niche audiences. Authentic voices with high trust. Cost-effective at scale.", value: "$50-$500" },
              { tier: "Micro (10K-100K)", desc: "Targeted reach with strong engagement. Sweet spot for most brands. Best ROI per dollar.", value: "$500-$5K" },
              { tier: "Mid-Tier (100K-500K)", desc: "Established creators with proven track records. Balance of reach and engagement.", value: "$5K-$25K" },
              { tier: "Macro & Mega (500K+)", desc: "Mass awareness campaigns. Celebrity endorsements. Maximum reach and brand prestige.", value: "$25K+" },
            ].map((tier, i) => (
              <div key={i} className="p-8 rounded-xl border border-border hover:border-pink-600 hover:shadow-lg transition-all" data-testid={`card-tier-${i}`}>
                <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                <div className="text-3xl font-bold text-pink-600 mb-3">{tier.value}</div>
                <p className="text-muted-foreground">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              Instagram. TikTok. YouTube. <span className="italic text-rose-500">And beyond.</span>
            </h2>
            <p className="text-xl text-muted-foreground mt-6">
              Platform-specific strategies and creator networks across every major social platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { platform: "Instagram & Facebook", creators: "8,000+ creators", desc: "Feed posts, Stories, Reels, IGTV. Lifestyle, fashion, beauty, fitness influencers." },
              { platform: "TikTok", creators: "4,500+ creators", desc: "Viral short-form video. Gen Z and millennial audiences. Trend-driven campaigns." },
              { platform: "YouTube", creators: "2,200+ creators", desc: "Long-form product reviews, tutorials, vlogs. Evergreen content with lasting value." },
              { platform: "LinkedIn", creators: "1,800+ creators", desc: "B2B thought leaders and industry experts. Professional audiences and decision-makers." },
              { platform: "Twitter/X", creators: "3,500+ creators", desc: "Real-time commentary, tech influencers, viral threads. Fast-moving conversations." },
              { platform: "Twitch & Gaming", creators: "900+ creators", desc: "Live streamers, esports personalities, gaming communities. Highly engaged audiences." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-xl border border-border hover:border-pink-600 hover:shadow-lg transition-all" data-testid={`card-platform-${i}`}>
                <h3 className="text-2xl font-bold mb-2">{item.platform}</h3>
                <div className="text-lg font-semibold text-pink-600 mb-3">{item.creators}</div>
                <p className="text-muted-foreground">{item.desc}</p>
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
              Trusted by <span className="italic text-rose-500">growth-focused brands</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "15,000+", label: "Influencer partnerships executed" },
              { value: "2.5B+", label: "Total impressions delivered" },
              { value: "4.8x", label: "Higher engagement vs brand content" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-pink-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to launch your influencer campaign?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We'll find the creators, negotiate the deals, and prove the ROI. Let's talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 h-12 px-8" data-testid="button-cta-primary">
              Start Your Campaign
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-cta-secondary">
              View Creator Network
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
