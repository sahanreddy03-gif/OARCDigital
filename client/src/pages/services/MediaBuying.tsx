import { useEffect } from "react";
import { Link } from "wouter";
import { DollarSign, TrendingUp, Target, Zap, ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function MediaBuying() {
  useEffect(() => {
    document.title = "Media Buying Services - Maximize Ad Spend ROI | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Strategic media buying across digital, social, and traditional channels. Negotiate better rates, optimize placements, and maximize your advertising ROI.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Media Buying Services - Maximize Ad Spend Efficiency | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Enterprise media buying that reduces costs by 40%. Negotiate better rates, optimize placements, scale winning campaigns.');
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(221,91%,60%)] via-[hsl(241,77%,55%)] to-[hsl(262,83%,58%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Stretch every ad dollar <span className="italic">further</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Strategic media buying that negotiates better rates, secures premium placements, and maximizes ROI. We buy smarter, not harder.
          </p>
          <Button size="lg" className="bg-white text-[hsl(221,91%,60%)]" data-testid="button-get-started">
            Optimize Your Media Spend
          </Button>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-4">MEDIA BUYING EXCELLENCE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Better rates. <span className="italic text-[hsl(262,83%,58%)]">Better placements.</span> Better results.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage our relationships with top publishers and platforms to secure inventory you can't access on your own—at prices 25-40% below rate card.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "35%", label: "Average cost savings vs. rate card pricing" },
              { value: "$75M+", label: "Total media spend negotiated annually" },
              { value: "3.2x", label: "Average improvement in cost per acquisition" },
              { value: "150+", label: "Publisher and platform partnerships" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(220,20%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(221,91%,60%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Channels */}
      <section className="py-20 bg-[hsl(220,20%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-4">OMNICHANNEL BUYING POWER</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every channel. <span className="italic text-[hsl(262,83%,58%)]">Every audience.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Programmatic Display", desc: "Real-time bidding, private marketplaces, direct deals. Automated buying that targets your audience across millions of websites and apps.", icon: Target },
              { name: "Social Media Buying", desc: "Negotiate volume discounts on Meta, LinkedIn, TikTok, Snap, Pinterest. Secure premium placements and early beta access to new formats.", icon: TrendingUp },
              { name: "Video & CTV", desc: "YouTube, Hulu, Roku, Amazon Fire TV. Reach cord-cutters and connected TV audiences at scale with precision targeting.", icon: Zap },
              { name: "Audio & Podcast", desc: "Spotify, iHeartRadio, podcast networks. Tap into high-engagement audio inventory with host-read sponsorships and dynamic insertion.", icon: BarChart3 },
              { name: "Out-of-Home (OOH)", desc: "Billboards, transit ads, digital signage. Physical placements in high-traffic locations. Geo-targeted, data-driven OOH at scale.", icon: DollarSign },
              { name: "Traditional Media", desc: "TV, radio, print. Negotiate local and national buys. Integrated campaigns that bridge digital and traditional touchpoints.", icon: Target },
            ].map((channel, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-channel-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden flex items-center justify-center">
                    <channel.icon className="h-24 w-24 text-[hsl(221,91%,60%)]/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{channel.name}</h3>
                    <p className="text-muted-foreground">{channel.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              Data-driven. <span className="italic text-[hsl(262,83%,58%)]">Relationship-powered.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rate Negotiation", desc: "Leverage our $75M+ annual spend to negotiate rates 25-40% below standard pricing. Volume discounts, added value, and preferential terms." },
              { name: "Audience Intelligence", desc: "Advanced data modeling to identify where your audience spends time. Buy impressions where they're most receptive and engaged." },
              { name: "Inventory Optimization", desc: "Continuous monitoring and optimization. Shift budgets in real-time to high-performing placements and away from underperformers." },
              { name: "Attribution & Measurement", desc: "Multi-touch attribution, incrementality testing, brand lift studies. Prove the impact of every channel and placement." },
              { name: "Premium Access", desc: "First-look deals, exclusive inventory, beta testing new ad products. Our relationships unlock opportunities unavailable at list prices." },
              { name: "Fraud Prevention", desc: "Ad verification, viewability tracking, bot detection. Ensure every impression is real, viewable, and brand-safe." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-border hover:border-[hsl(221,91%,60%)] hover:shadow-lg transition-all" data-testid={`card-approach-${i}`}>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-[hsl(220,20%,98%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              How we maximize <span className="italic text-[hsl(262,83%,58%)]">your media investment</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Audience & Channel Analysis", desc: "Map your target audience's media consumption. Identify the channels, publishers, and formats where they're most engaged and receptive." },
              { step: "02", title: "Media Planning & Budget Allocation", desc: "Build integrated media plans that balance reach, frequency, and efficiency. Allocate budgets based on projected performance and strategic priorities." },
              { step: "03", title: "Negotiation & Execution", desc: "Leverage relationships to secure preferential rates, added value, and premium placements. Execute buys across all channels simultaneously." },
              { step: "04", title: "Performance Monitoring & Optimization", desc: "Track campaign performance in real-time. Optimize budgets, placements, and creative. Scale winners, pause underperformers." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-8 bg-white rounded-xl border border-border" data-testid={`step-${i}`}>
                <div className="text-6xl font-bold text-[hsl(221,91%,60%)]/20">{item.step}</div>
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
              Buying power <span className="italic text-[hsl(262,83%,58%)]">you can leverage</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "$75M+", label: "Annual media spend negotiated" },
              { value: "150+", label: "Active publisher partnerships" },
              { value: "35%", label: "Average savings below rate card" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-[hsl(221,91%,60%)] mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(221,91%,60%)] to-[hsl(262,83%,58%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Stop overpaying for media
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Leverage our buying power and relationships to stretch your media budget 35% further.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(221,91%,60%)]" data-testid="button-cta-primary">
              Get a Media Plan
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
