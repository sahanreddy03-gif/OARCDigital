import { useEffect } from "react";
import { Link } from "wouter";
import { DollarSign, TrendingUp, Target, Zap, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from '@assets/media buying_1763086700057.jpg';

export default function MediaBuying() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.mediaBuying.title}
        description={revenueServicesSEO.mediaBuying.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.mediaBuying.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Media Buying Services",
          revenueServicesSEO.mediaBuying.description,
          "Strategic Media Buying"
        )}
        schemaId="service-media-buying"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Media buying strategy planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Stretch every ad dollar <span className="italic bg-gradient-to-r from-[hsl(221,91%,60%)] via-[hsl(241,77%,55%)] to-[hsl(262,83%,58%)] text-transparent bg-clip-text">further</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Strategic media buying that negotiates better rates, secures premium placements, and maximizes ROI. Access exclusive inventory and pricing 25-40% below rate card.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(221,91%,60%)] hover:bg-white/90" data-testid="button-get-started">
              Optimize Your Media Spend
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering growth for ambitious brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Performance Marketing Agencies', 'DTC Subscription Boxes', 'Mobile Game Publishers', 'Healthcare Brands', 'Regional Restaurant Chains', 'Fitness Apps'].map((type, i) => (
              <div key={i} className="text-base md:text-lg font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-3">MEDIA BUYING EXCELLENCE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Better rates. Better placements. Better results.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage our relationships with top publishers to secure exclusive inventory at prices you can't access alone
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "35%", label: "Average cost savings vs. rate card" },
              { value: "$75M+", label: "Media spend negotiated annually" },
              { value: "3.2x", label: "Average CPA improvement" },
              { value: "150+", label: "Publisher partnerships" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(221,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[hsl(221,91%,60%)] to-[hsl(262,83%,58%)] text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Channels */}
      <section className="py-20 bg-[hsl(220,20%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-4">OMNICHANNEL BUYING POWER</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Every channel. <span className="italic bg-gradient-to-r from-[hsl(221,91%,60%)] to-[hsl(262,83%,58%)] text-transparent bg-clip-text">Every audience.</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { name: "Programmatic Display", desc: "Real-time bidding, private marketplaces, direct deals. Automated buying that targets your audience across millions of websites and apps.", icon: Target },
              { name: "Social Media Buying", desc: "Negotiate volume discounts on Meta, LinkedIn, TikTok, Snap, Pinterest. Secure premium placements and early beta access to new formats.", icon: TrendingUp },
              { name: "Video & CTV", desc: "YouTube, Hulu, Roku, Amazon Fire TV. Reach cord-cutters and connected TV audiences at scale with precision targeting.", icon: Zap },
              { name: "Audio & Podcast", desc: "Spotify, iHeartRadio, podcast networks. Tap into high-engagement audio inventory with host-read sponsorships and dynamic insertion.", icon: BarChart3 },
              { name: "Premium Publisher Direct", desc: "Direct relationships with top-tier publishers. Access exclusive inventory, preferred rates, and first access to new ad products.", icon: DollarSign },
              { name: "Native & Content", desc: "Outbrain, Taboola, and direct native placements. Non-disruptive ad formats that blend seamlessly with editorial content.", icon: CheckCircle2 },
            ].map((service, i) => (
              <div 
                key={i} 
                className="flex-none w-[320px] md:min-w-[400px] p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`service-${i}`}
              >
                <service.icon className="w-12 h-12 text-[hsl(221,91%,60%)] mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-3">SUCCESS STORIES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real campaigns. Real results.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Mobile Game Publisher Scales User Acquisition 4x",
                industry: "Gaming",
                challenge: "High CPI on major ad networks limiting growth potential",
                solution: "Negotiated direct deals with premium mobile ad exchanges and secured exclusive inventory in high-value game apps",
                results: [
                  "42% reduction in CPI across all campaigns",
                  "4.3x increase in daily install volume",
                  "$2.5M monthly ad spend optimization",
                  "Access to exclusive app inventory networks"
                ]
              },
              {
                title: "DTC Subscription Box Cuts Customer Acquisition Cost 38%",
                industry: "E-commerce",
                challenge: "Rising CPAs on Meta and Google threatening profitability",
                solution: "Built omnichannel media plan with programmatic display, CTV, and podcast sponsorships to diversify beyond Meta/Google duopoly",
                results: [
                  "38% lower blended CAC across all channels",
                  "27% increase in subscription conversion rate",
                  "New high-performing channel: podcast sponsorships",
                  "$890K annual savings on media costs"
                ]
              },
              {
                title: "Healthcare Brand Achieves 5.8x ROAS on Programmatic",
                industry: "Healthcare",
                challenge: "Needed to reach highly specific medical professional audience efficiently",
                solution: "Leveraged first-party data and medical publisher relationships to secure premium inventory with guaranteed viewability",
                results: [
                  "5.8x ROAS on programmatic display campaigns",
                  "91% viewability rate (vs 60% industry avg)",
                  "35% lower CPM vs open exchange rates",
                  "Access to exclusive medical publication inventory"
                ]
              },
              {
                title: "Regional Restaurant Chain Dominates Local CTV",
                industry: "QSR / Restaurants",
                challenge: "Competing with national chains on limited local marketing budget",
                solution: "Negotiated geo-targeted CTV deals with Hulu, Roku, and YouTube TV for maximum local reach at competitive rates",
                results: [
                  "48% reduction in cost per completed view",
                  "2.1M local impressions per month",
                  "23% increase in foot traffic to locations",
                  "Local market dominance vs national competitors"
                ]
              },
            ].map((study, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-[hsl(221,10%,98%)] to-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-foreground mb-1">Challenge</div>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-foreground mb-1">Solution</div>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-foreground mb-2">Results</div>
                  <ul className="space-y-2">
                    {study.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(142,76%,36%)] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[hsl(220,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-3">OUR PROCESS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we buy media smarter
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Media Planning & Strategy",
                description: "Analyze your audience, goals, and budget. Build a custom media plan that identifies the right mix of channels, formats, and publishers to reach your targets efficiently."
              },
              {
                step: "02",
                title: "Negotiation & Procurement",
                description: "Leverage our publisher relationships and buying power to negotiate preferred rates, secure premium inventory, and access exclusive placements not available through self-serve platforms."
              },
              {
                step: "03",
                title: "Execution & Optimization",
                description: "Launch campaigns, monitor performance in real-time, optimize budgets toward top performers, and continuously test new inventory sources to improve efficiency."
              },
            ].map((item, i) => (
              <div key={i} className="text-center" data-testid={`step-${i}`}>
                <div className="inline-block text-5xl md:text-6xl font-bold bg-gradient-to-r from-[hsl(221,91%,60%)] to-[hsl(262,83%,58%)] text-transparent bg-clip-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[hsl(221,91%,60%)] to-[hsl(262,83%,58%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to maximize your media investment?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get a free media plan and rate audit. See how much you could be saving.
          </p>
          <Button size="lg" className="bg-white text-[hsl(221,91%,60%)] hover:bg-white/90" data-testid="button-cta">
            Get Your Free Media Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
