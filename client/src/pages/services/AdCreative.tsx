import { useEffect } from "react";
import { Link } from "wouter";
import { Sparkles, Target, Zap, BarChart, ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from '@assets/ad creative_1763084489954.avif';
import adImg1 from "@assets/stock_images/creative_advertising_b13aabf8.jpg";
import adImg2 from "@assets/stock_images/creative_advertising_0f7921d3.jpg";
import adImg3 from "@assets/stock_images/creative_advertising_3d5c5ae1.jpg";

export default function AdCreative() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ad Creative Services - Performance Creative That Converts | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Performance-driven ad creative that lowers CPA and scales profitably. Unlimited creative iterations, A/B testing, and platform-optimized formats for every channel.");
    }
    // Open Graph tags
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Ad Creative Services - Performance Creative | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'High-converting ad creative designed to lower CPA and increase ROAS. Performance creative that actually moves metrics.');
  }, []);

  return (
    <Layout>
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
            Performance creative that <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(300,81%,60%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">actually converts</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Unlimited creative iterations, A/B testing frameworks, and platform-optimized formats that lower your CPA and scale profitably. We don't just make ads look good—we make them perform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90" data-testid="button-get-started">
              Get Free Creative Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-portfolio">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Creating winning ads for fast-growing brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['DTC Beauty', 'Mobile Gaming', 'Fintech Apps', 'Health & Wellness', 'EdTech Platforms', 'Subscription Services'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">PROVEN RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Creative that moves the metrics that matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our performance-first creative approach consistently delivers measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "2.8x", label: "Avg. ROAS improvement", gradient: "from-purple-600 to-pink-600" },
              { value: "28%", label: "Avg. CPA reduction", gradient: "from-blue-600 to-cyan-600" },
              { value: "50+", label: "Variants per campaign", gradient: "from-orange-600 to-red-600" },
              { value: "72hrs", label: "Creative turnaround", gradient: "from-green-600 to-emerald-600" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-[hsl(262,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative That Converts */}
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">PERFORMANCE CREATIVE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Test. <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">Iterate.</span> Scale.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver 20-50+ ad variations per week, all backed by data and optimized for platform algorithms. Your creative never stops improving.
            </p>
          </div>
        </div>
      </section>

      {/* The Only Creative Subscription - Large Cards */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">AD FORMATS</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every format. <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">Every platform.</span> Unlimited iterations.
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
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <img src={[adImg1, adImg2, adImg3][i % 3]} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View Example →
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">CASE STUDIES</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Real results from <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">real campaigns</span>
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
              <div key={i} className="group p-8 bg-white rounded-xl border border-border hover:border-[hsl(262,83%,58%)] hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <study.icon className="h-12 w-12 text-[hsl(262,83%,58%)] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-2">{study.industry}</div>
                <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">{study.result}</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{study.metric1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{study.metric2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Framework */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">TESTING FRAMEWORK</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We A/B test <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">everything</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
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
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
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
                <div key={i} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to scale with <span className="italic">performance creative?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get unlimited ad creative designed to lower CPA and increase ROAS
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-demo">
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
