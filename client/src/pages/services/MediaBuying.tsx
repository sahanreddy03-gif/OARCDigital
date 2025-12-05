import { useEffect } from "react";
import { Link } from "wouter";
import { DollarSign, TrendingUp, Target, Zap, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from '@assets/media-buying-optimized.jpg';

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
            Stretch every ad dollar <span className="italic text-[#c4ff4d]">further</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Strategic media buying that negotiates better rates, secures premium placements, and maximizes ROI. Access exclusive inventory and pricing 25-40% below rate card.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-get-started">
              Optimize Your Media Spend
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-[#1a2e29]/60 mb-8">
            Powering growth for ambitious brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Performance Marketing Agencies', 'DTC Subscription Boxes', 'Mobile Game Publishers', 'Healthcare Brands', 'Regional Restaurant Chains', 'Fitness Apps'].map((type, i) => (
              <div key={i} className="text-base md:text-lg font-bold text-[#1a2e29]">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">OMNICHANNEL BUYING POWER</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Every channel. <span className="italic text-[#c4ff4d]">Every audience.</span>
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
                className="flex-none w-[320px] md:min-w-[400px] p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`service-${i}`}
              >
                <service.icon className="w-12 h-12 text-[#23AACA] mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">{service.name}</h3>
                <p className="text-white/70 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">SUCCESS STORIES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e29]">
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
              <div key={i} className="p-8 bg-white rounded-2xl border border-[#1a2e29]/10 hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1a2e29]">{study.title}</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-[#1a2e29] mb-1">Challenge</div>
                  <p className="text-sm text-[#1a2e29]/60">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-[#1a2e29] mb-1">Solution</div>
                  <p className="text-sm text-[#1a2e29]/60">{study.solution}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#1a2e29] mb-2">Results</div>
                  <ul className="space-y-2">
                    {study.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#23AACA] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#1a2e29]/60">{result}</span>
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
      <section className="py-20 px-4 bg-[#a8b892]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#1a2e29] mb-3">OUR PROCESS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e29]">
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
              <div key={i} className="text-center bg-white p-8 rounded-xl" data-testid={`step-${i}`}>
                <div className="inline-block text-5xl md:text-6xl font-bold text-[#23AACA] mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1a2e29]">{item.title}</h3>
                <p className="text-[#1a2e29]/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Built for <span className="italic text-[#c4ff4d]">performance-driven teams</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-4 text-white">E-commerce & DTC Brands</h3>
              <p className="text-white/70 mb-4">
                Scale customer acquisition profitably. Strategic media buying across search, social, display, and programmatic channels.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Multi-channel media strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Performance & ROAS optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Scaled customer acquisition</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800" data-testid="use-case-b2b">
              <h3 className="text-xl font-bold mb-4 text-white">B2B SaaS Companies</h3>
              <p className="text-white/70 mb-4">
                Generate qualified leads at scale. Programmatic display, LinkedIn, search campaigns optimized for conversion efficiency.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Lead generation campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Account-based marketing (ABM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>CPL & CAC optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800" data-testid="use-case-agencies">
              <h3 className="text-xl font-bold mb-4 text-white">Marketing Agencies</h3>
              <p className="text-white/70 mb-4">
                White-label media buying for agencies. Access enterprise-level buying power and premium inventory on behalf of your clients.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>White-label solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Enterprise buying power</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Premium inventory access</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800" data-testid="use-case-enterprise">
              <h3 className="text-xl font-bold mb-4 text-white">Enterprise Brands</h3>
              <p className="text-white/70 mb-4">
                Sophisticated media strategies across national campaigns. TV, radio, OOH, programmatic, and digital at scale.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Integrated media campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Traditional + digital mix</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Brand awareness & reach</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800" data-testid="use-case-app">
              <h3 className="text-xl font-bold mb-4 text-white">Mobile Apps</h3>
              <p className="text-white/70 mb-4">
                User acquisition campaigns optimized for install volume and LTV. ASO, app store ads, programmatic, and social.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>User acquisition (UA) campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>LTV & retention optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>App Store & Play Store ads</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800" data-testid="use-case-local">
              <h3 className="text-xl font-bold mb-4 text-white">Local & Regional Businesses</h3>
              <p className="text-white/70 mb-4">
                Geo-targeted media buying for local markets. Radio, local TV, OOH, and hyper-local digital campaigns that drive foot traffic.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Local market targeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Radio, TV, OOH campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Foot traffic & store visits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">COMPLETE YOUR STRATEGY</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a2e29]">
              Maximize media <span className="italic text-orange-500">with these services</span>
            </h2>
            <p className="text-lg text-[#1a2e29]/70 max-w-3xl mx-auto">
              Media buying is most effective when combined with creative production and strategic planning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-white rounded-xl border border-[#1a2e29]/10 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-paid">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1a2e29] group-hover:text-[#23AACA] transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[#1a2e29]/70 mb-4">
                  Full-funnel paid media strategy and execution. Turn your media buys into high-performance campaigns.
                </p>
              </div>
            </Link>

            <Link href="/services/social-media-creative">
              <div className="group p-8 bg-white rounded-xl border border-[#1a2e29]/10 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-creative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1a2e29] group-hover:text-[#23AACA] transition-colors">Creative Production</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[#1a2e29]/70 mb-4">
                  High-performing ad creative across all formats. Maximize your media investment with compelling creatives.
                </p>
              </div>
            </Link>

            <Link href="/services/marketing-strategy">
              <div className="group p-8 bg-white rounded-xl border border-[#1a2e29]/10 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-strategy">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1a2e29] group-hover:text-[#23AACA] transition-colors">Marketing Strategy</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[#1a2e29]/70 mb-4">
                  Strategic planning that aligns media buying with business goals. Optimize channel mix and budget allocation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#23AACA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to maximize your media investment?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get a free media plan and rate audit. See how much you could be saving.
          </p>
          <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta">
            Get Your Free Media Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
