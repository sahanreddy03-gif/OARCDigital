import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { Users, TrendingUp, Heart, Zap, Target, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from '@assets/influencer-marketing-optimized.jpg';
import influencerImg1 from "@assets/stock_images/influencer_marketing_e096cc44.jpg";
import influencerImg2 from "@assets/stock_images/influencer_marketing_47b0ede7.jpg";
import influencerImg3 from "@assets/stock_images/influencer_marketing_3b6f7762.jpg";

export default function InfluencerMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.influencerMarketing.title}
        description={revenueServicesSEO.influencerMarketing.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.influencerMarketing.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Influencer Marketing Services",
          revenueServicesSEO.influencerMarketing.description,
          "Creator Partnerships"
        )}
        schemaId="service-influencer-marketing"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Influencer content creation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Influencer campaigns that <span className="italic bg-gradient-to-r from-[#c4ff4d] to-[#23AACA] text-transparent bg-clip-text">actually convert</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            We find the perfect creators, negotiate the deals, manage the campaigns, and prove the ROI. Full-service influencer marketing from micro to mega.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[#23AACA] hover:bg-white/90" data-testid="button-get-started">
              Launch Your Campaign
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
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering growth for leading brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Beauty & Skincare Brands', 'Fashion E-commerce', 'Gaming Companies', 'Health & Wellness Apps', 'Food Delivery Services', 'Travel Booking Platforms'].map((type, i) => (
              <div key={i} className="text-base md:text-lg font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">FULL-SERVICE INFLUENCER CAMPAIGNS</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Every step. <span className="italic bg-gradient-to-r from-[#c4ff4d] to-orange-500 text-transparent bg-clip-text">Every platform.</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { name: "Influencer Discovery & Vetting", desc: "Find creators who align with your brand values and audience. Vet for engagement quality, audience authenticity, and brand safety.", icon: Users },
              { name: "Campaign Strategy & Planning", desc: "Define goals, KPIs, messaging, content guidelines. Build campaigns that ladder up to your marketing objectives.", icon: Target },
              { name: "Negotiation & Contracting", desc: "Negotiate rates, deliverables, usage rights, exclusivity. Handle contracts, payments, and legal compliance.", icon: TrendingUp },
              { name: "Content Creation & Approval", desc: "Brief creators, review content pre-publish, request revisions. Ensure brand messaging while preserving creator authenticity.", icon: Heart },
              { name: "Campaign Management & Optimization", desc: "Coordinate multi-creator campaigns, monitor performance in real-time, optimize budgets toward top performers.", icon: Zap },
              { name: "Reporting & ROI Measurement", desc: "Track impressions, engagement, conversions, earned media value. Prove the business impact of influencer investments.", icon: BarChart3 },
            ].map((service, i) => (
              <div 
                key={i} 
                className="flex-none w-[320px] md:min-w-[400px] p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`service-${i}`}
              >
                <service.icon className="w-12 h-12 text-[#23AACA] mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Creator partnerships that deliver
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Beauty Brand Drives 450% ROI with Micro-Influencer Strategy",
                industry: "Beauty & Skincare",
                challenge: "Needed authentic product endorsements to drive DTC sales",
                solution: "Partnered with 85 micro-influencers in beauty niche for authentic product reviews and tutorials across Instagram and TikTok",
                results: [
                  "450% ROI on influencer campaign investment",
                  "12.8% average engagement rate on content",
                  "2.3M total impressions across platforms",
                  "$340K in attributed revenue from creator links"
                ]
              },
              {
                title: "Fashion E-commerce Scales to $2M in Revenue",
                industry: "Fashion E-commerce",
                challenge: "Breaking into competitive fashion market with limited brand awareness",
                solution: "Multi-tier influencer strategy combining nano, micro, and mid-tier creators with exclusive discount codes and affiliate tracking",
                results: [
                  "$2.1M in attributed influencer revenue",
                  "127% increase in Instagram followers",
                  "18% average conversion rate from creator links",
                  "250+ pieces of user-generated content"
                ]
              },
              {
                title: "Gaming Company Achieves 8M Impressions via Twitch",
                industry: "Gaming / Esports",
                challenge: "Launch new mobile game to highly engaged gaming audience",
                solution: "Sponsored live streams with 40 Twitch creators, coordinated launch day event, provided early access and exclusive in-game items",
                results: [
                  "8.2M impressions across Twitch and YouTube",
                  "450K game downloads in first month",
                  "62% of downloads attributed to influencer codes",
                  "Top 10 in App Store games category"
                ]
              },
              {
                title: "Wellness App Grows User Base by 380%",
                industry: "Health & Wellness",
                challenge: "Acquire health-conscious users in crowded wellness app market",
                solution: "Partnered with fitness, nutrition, and mindfulness creators for authentic app demonstrations and 30-day challenge campaigns",
                results: [
                  "380% increase in monthly active users",
                  "52% reduction in cost per install vs paid ads",
                  "4.2/5 star average app rating from new users",
                  "35% of influencer-acquired users still active at 90 days"
                ]
              },
            ].map((study, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-2">{study.industry}</div>
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
                        <CheckCircle2 className="w-4 h-4 text-[#23AACA] mt-0.5 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">OUR PROCESS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From discovery to reporting
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Creator Discovery & Vetting",
                description: "Find creators who authentically align with your brand. Vet for engagement quality, audience demographics, and brand safety to ensure perfect partnerships."
              },
              {
                step: "02",
                title: "Campaign Execution",
                description: "Negotiate terms, brief creators, manage content approval, coordinate launches. Handle all logistics so you can focus on strategy and results."
              },
              {
                step: "03",
                title: "Performance Tracking & ROI",
                description: "Track impressions, engagement, conversions, and earned media value. Prove business impact with comprehensive analytics and reporting."
              },
            ].map((item, i) => (
              <div key={i} className="text-center" data-testid={`step-${i}`}>
                <div className="inline-block text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#c4ff4d] to-orange-500 text-transparent bg-clip-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect for <span className="italic bg-gradient-to-r from-[#c4ff4d] to-orange-500 text-transparent bg-clip-text">brands ready to scale</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-4">E-commerce Brands</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Launch products with creator partnerships. Drive awareness, build social proof, and generate sales through authentic influencer content.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Product launch campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Unboxing & review content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Affiliate & discount code campaigns</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-dtc">
              <h3 className="text-xl font-bold mb-4">DTC Brands</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Build brand awareness and social credibility through creator partnerships. Overcome the cold start problem with authentic endorsements.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Brand awareness campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Trust & credibility building</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Founder-story collaborations</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-beauty">
              <h3 className="text-xl font-bold mb-4">Beauty & Personal Care</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Drive product trials and build loyal communities through beauty creator partnerships. Tutorials, reviews, and before-after content.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Tutorial & how-to content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Before/after transformations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Product comparison & reviews</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-saas">
              <h3 className="text-xl font-bold mb-4">SaaS & Tech Products</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Educate prospects through tech influencer partnerships. Build trust with product demos, use-case content, and expert endorsements.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Product demo & walkthrough content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Use-case & solution campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Expert & thought leader partnerships</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-wellness">
              <h3 className="text-xl font-bold mb-4">Health & Wellness</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Build trust through authentic wellness creator partnerships. Share transformation stories and build credible health-focused communities.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Transformation story campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Wellness routine content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Expert endorsement partnerships</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-lifestyle">
              <h3 className="text-xl font-bold mb-4">Lifestyle & Home</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Showcase products in real-life settings through lifestyle creator partnerships. Drive aspirational content and shopping behavior.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Lifestyle integration content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Home tour & styling features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Seasonal & trend campaigns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">MAXIMIZE IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Amplify with <span className="italic text-[#c4ff4d]">related services</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Influencer marketing works best when combined with paid amplification and creative production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-all duration-300 cursor-pointer" data-testid="related-service-paid">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Amplify your influencer content with paid media. Turn organic creator content into high-performing ads.
                </p>
              </div>
            </Link>

            <Link href="/services/social-media-creative">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-all duration-300 cursor-pointer" data-testid="related-service-creative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors">Social Creative Production</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Professional content creation to complement influencer campaigns. UGC-style creative that converts.
                </p>
              </div>
            </Link>

            <Link href="/services/social-media-management">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-all duration-300 cursor-pointer" data-testid="related-service-management">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors">Social Media Management</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Maximize influencer ROI with daily community management. Keep the conversation going beyond campaigns.
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
            Ready to launch your influencer campaign?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We'll find the creators, negotiate the deals, and prove the ROI. Let's talk.
          </p>
          <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta">
            Start Your Campaign
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
