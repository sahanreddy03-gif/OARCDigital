import { useEffect } from "react";
import { Link } from "wouter";
import { Sparkles, Target, Zap, BarChart, ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from '@assets/creative-ad-campaigns-optimized.jpg';
import adImg1 from "@assets/stock_images/creative_advertising_b13aabf8.jpg";
import adImg2 from "@assets/stock_images/creative_advertising_0f7921d3.jpg";
import adImg3 from "@assets/stock_images/creative_advertising_3d5c5ae1.jpg";

export default function AdCreative() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.adCreative.title}
        description={creativeServicesSEO.adCreative.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.adCreative.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Ad Creative Design Services",
          creativeServicesSEO.adCreative.description,
          "Performance Marketing Creative"
        )}
        schemaId="service-ad-creative"
      />
    <div className="ad-creative">
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Ad creative design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Performance creative that <span className="italic text-[#c4ff4d]">actually converts</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Unlimited creative iterations, A/B testing frameworks, and platform-optimized formats that lower your CPA and scale profitably. We don't just make ads look good—we make them perform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-get-started">
              Get Free Creative Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-portfolio">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-[#1a2e29]/60 mb-8">
            Creating winning ads for fast-growing brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['DTC Beauty', 'Mobile Gaming', 'Fintech Apps', 'Health & Wellness', 'EdTech Platforms', 'Subscription Services'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-[#1a2e29]">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#a8b892]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[#1a2e29] mb-4">PERFORMANCE CREATIVE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1a2e29]">
              Test. <span className="italic text-white">Iterate.</span> Scale.
            </h2>
            <p className="text-xl text-[#1a2e29]/80 max-w-3xl mx-auto">
              We deliver 20-50+ ad variations per week, all backed by data and optimized for platform algorithms. Your creative never stops improving.
            </p>
          </div>
        </div>
      </section>

      {/* The Only Creative Subscription - Large Cards */}
      <section className="py-20 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">AD FORMATS</div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a2e29]">
            Every format. <span className="italic text-orange-500">Every platform.</span> Unlimited iterations.
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { name: "Static Display Ads", desc: "High-converting static ads for Facebook, Instagram, TikTok, and Google Display. Test 20+ variants per week to find winners." },
              { name: "Video & Motion Ads", desc: "15s, 30s, 60s video ads engineered for retention. Hooks tested to maximize 3-second watch rate and CTR." },
              { name: "UGC-Style Ads", desc: "Authentic user-generated content that outperforms polished studio ads. Real creators, native feel, better performance." },
              { name: "Dynamic Product Ads", desc: "Automated catalog ads with personalized recommendations. Scale to thousands of SKUs with dynamic templates." },
              { name: "Carousel & Collection Ads", desc: "Multi-product storytelling that increases AOV by 32%. Perfect for showcasing collections and product lines." },
              { name: "Retargeting Creative", desc: "Stage-aware creative that speaks to funnel position. Cart abandonment, browse abandonment, upsells, and loyalty." },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] group" data-testid={`card-ad-type-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#1a2e29]/10">
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <img src={[adImg1, adImg2, adImg3][i % 3]} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1a2e29]">{item.name}</h3>
                    <p className="text-[#1a2e29]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">CASE STUDIES</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Real results from <span className="italic text-[#c4ff4d]">real campaigns</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                industry: "DTC Beauty Brand", 
                challenge: "Scaling past $100K/mo ad spend without CPA increase",
                result: "2.9x ROAS",
                metric1: "32% CPA reduction",
                metric2: "$1.8M revenue in 90 days",
                icon: Sparkles
              },
              { 
                industry: "Mobile Gaming", 
                challenge: "Improving creative performance for user acquisition",
                result: "2.4x CTR",
                metric1: "38% cost per install reduction",
                metric2: "120K+ new installs",
                icon: Target
              },
              { 
                industry: "Fintech App", 
                challenge: "Converting high-intent users with performance creative",
                result: "3.1x ROAS",
                metric1: "24% conversion rate increase",
                metric2: "$540K revenue increase",
                icon: TrendingUp
              },
            ].map((study, i) => (
              <div key={i} className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <study.icon className="h-12 w-12 text-[#23AACA] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-2">{study.industry}</div>
                <p className="text-sm text-white/70 mb-4">{study.challenge}</p>
                <div className="text-3xl font-bold text-[#c4ff4d] mb-4">{study.result}</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">{study.metric1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">{study.metric2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Framework */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">TESTING FRAMEWORK</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a2e29]">
                We A/B test <span className="italic text-orange-500">everything</span>
              </h2>
              <p className="text-lg text-[#1a2e29]/70 mb-6">
                Every creative concept goes through rigorous testing. Headlines, visuals, CTAs, formats, colors—we test it all to find what converts best.
              </p>
              <div className="space-y-4">
                {[
                  "50+ creative variants per campaign minimum",
                  "Platform-specific optimization (Meta, Google, TikTok, LinkedIn)",
                  "Statistical significance testing on all winners",
                  "Continuous iteration based on performance data",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#23AACA] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-[#1a2e29]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Hooks Tested", value: "2,000+" },
                { label: "Concepts/Week", value: "100+" },
                { label: "Avg. Winner Rate", value: "12%" },
                { label: "Testing Speed", value: "72hrs" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white rounded-xl text-center border border-[#1a2e29]/10">
                  <div className="text-3xl font-bold text-[#23AACA] mb-3">{stat.value}</div>
                  <div className="text-base text-[#1a2e29]/60 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Who This Service Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-dtc">
              <h3 className="text-2xl font-bold mb-4">Direct-to-Consumer Brands</h3>
              <p className="text-lg text-muted-foreground mb-4">
                E-commerce brands spending $50K+ monthly on ads need high-volume creative testing to find winning combinations that lower CPA and scale profitably.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Unlimited creative variants for continuous testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Platform-optimized formats (Meta, TikTok, Google)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Data-driven iteration based on performance</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-agencies">
              <h3 className="text-2xl font-bold mb-4">Performance Marketing Agencies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Agencies managing multiple client accounts need scalable creative production to test, iterate, and optimize ads without creative becoming a bottleneck.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">White-label creative services for all clients</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fast turnaround for campaign launches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Performance reporting and optimization</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-app-businesses">
              <h3 className="text-2xl font-bold mb-4">App-Based Businesses</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Mobile apps and SaaS platforms acquiring users through paid ads need creative that reduces cost-per-install and increases trial-to-paid conversion.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">App install campaign creative (iOS & Android)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">User testimonials and product demos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Feature highlight videos and carousels</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-subscriptions">
              <h3 className="text-2xl font-bold mb-4">Subscription Services</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Subscription boxes, meal kits, and membership services need engaging creative that showcases value and drives consistent new subscriber acquisition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Unboxing videos and product reveals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Comparison and value proposition creative</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Social proof and testimonial ads</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-b2b-saas">
              <h3 className="text-2xl font-bold mb-4">B2B SaaS Companies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Business software companies need professional, results-focused creative that generates quality leads and showcases ROI to decision-makers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn and display ad creative</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Case study and ROI-focused messaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Demo and trial signup campaigns</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-franchise">
              <h3 className="text-2xl font-bold mb-4">Franchise & Multi-Location Businesses</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Franchises and chains need scalable creative that maintains brand consistency while allowing local customization for geo-targeted campaigns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Template-based creative for local markets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Brand-compliant customization system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Performance tracking across locations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Services That Work Great Together
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/paid-advertising">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-paid-ads">
                <h3 className="text-xl font-bold mb-3 text-white">Paid Advertising</h3>
                <p className="text-white/70 mb-4">
                  Combine high-performance ad creative with expert media buying and campaign management.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/rapid-idea-testing">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-rapid-testing">
                <h3 className="text-xl font-bold mb-3 text-white">Rapid Idea Testing</h3>
                <p className="text-white/70 mb-4">
                  Test creative concepts quickly before scaling spend with validated winning angles.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/ai-copywriting">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-ai-copywriting">
                <h3 className="text-xl font-bold mb-3 text-white">AI Copywriting</h3>
                <p className="text-white/70 mb-4">
                  Scale ad copy production 10x with AI-powered writing optimized for conversions.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[#23AACA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to scale with <span className="italic">performance creative?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get unlimited ad creative designed to lower CPA and increase ROAS
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90 h-12 px-8" data-testid="button-cta-demo">
              Get Free Creative Audit
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
