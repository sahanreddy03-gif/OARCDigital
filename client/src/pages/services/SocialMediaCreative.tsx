import { useEffect } from "react";
import { Link } from "wouter";
import { Instagram, Youtube, Linkedin, Facebook, ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from "@assets/stock_images/social_media_content_74d332d2.jpg";
import socialImg1 from "@assets/stock_images/social_media_content_1291e113.jpg";
import socialImg2 from "@assets/stock_images/social_media_content_c1be1c46.jpg";
import socialImg3 from "@assets/stock_images/social_media_content_e4f88d3a.jpg";

export default function SocialMediaCreative() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.socialMediaCreative.title}
        description={creativeServicesSEO.socialMediaCreative.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.socialMediaCreative.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Social Media Creative Services",
          creativeServicesSEO.socialMediaCreative.description,
          "Social Content Design"
        )}
        schemaId="service-social-media-creative"
      />
    <div className="social-media-creative">
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Social media content creation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Social content that <span className="italic text-[#c4ff4d]">stops the scroll</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Platform-optimized content for Instagram, TikTok, LinkedIn, and beyond. Unlimited creation at a fixed monthly rate. Trend-aware, on-brand, and built for engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-get-started">
              Start Creating
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-work">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Creating viral content for modern brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['E-commerce Brands', 'Content Creators', 'Digital Products', 'Lifestyle Brands', 'Food & Bev Startups', 'Wellness Coaches'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#a8b892]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[#1a2e29] mb-4">UNLIMITED CONTENT</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1a2e29]">
              Feed the algorithm. <span className="italic text-white">Feed your growth.</span>
            </h2>
            <p className="text-xl text-[#1a2e29]/80 max-w-3xl mx-auto">
              Social algorithms reward volume and consistency. We produce 20-50+ pieces of content per week—all platform-optimized, on-brand, and designed to engage.
            </p>
          </div>
        </div>
      </section>

      {/* Platform-Specific Content - Large Cards */}
      <section className="py-20 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">PLATFORM EXPERTISE</div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a2e29]">
            Native content for <span className="italic text-orange-500">every platform</span>
          </h2>
        </div>

        <div className="px-4">
          <ScrollableCards>
            {[
              { name: "Instagram Content", desc: "Feed posts, Reels, Stories, and carousels. Aesthetic-first design optimized for Instagram's visual-first algorithm." },
              { name: "TikTok & Short-Form Video", desc: "Hook-first vertical videos engineered for viral potential. Trending sounds, effects, and native editing styles." },
              { name: "LinkedIn Thought Leadership", desc: "Professional content that builds authority. Carousels, infographics, and text posts that drive B2B engagement." },
              { name: "Twitter/X Threads", desc: "Witty copy, thread storytelling, and visual tweets that spark conversation and grow following." },
              { name: "Stories & Ephemeral Content", desc: "Daily Stories, polls, Q&As, and BTS content. Keep your audience engaged between main posts." },
              { name: "Memes & Trend-Jacking", desc: "Capitalize on trending moments with on-brand reactive content. Quick turnaround for cultural relevance." },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] group" data-testid={`card-platform-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <img src={[socialImg1, socialImg2, socialImg3][i % 3]} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">CASE STUDIES</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Viral moments that <span className="italic text-[#c4ff4d]">move business metrics</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                industry: "E-commerce Brand", 
                challenge: "Building engaged community on Instagram and TikTok",
                result: "4.3x engagement",
                metric1: "287% follower growth in 6 months",
                metric2: "$1.8M in social-driven revenue",
                icon: Instagram
              },
              { 
                industry: "Food & Beverage Startup", 
                challenge: "Establishing brand voice across social platforms",
                result: "12M impressions",
                metric1: "350% increase in UGC mentions",
                metric2: "42% of sales from social",
                icon: TrendingUp
              },
              { 
                industry: "Wellness Coach", 
                challenge: "Growing audience and converting followers to clients",
                result: "5.2x leads",
                metric1: "180K new followers in 90 days",
                metric2: "$520K in course sales",
                icon: Sparkles
              },
            ].map((study, i) => (
              <div key={i} className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <study.icon className="h-12 w-12 text-[#23AACA] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-2">{study.industry}</div>
                <p className="text-sm text-white/60 mb-4">{study.challenge}</p>
                <div className="text-4xl font-bold text-[#c4ff4d] mb-4">{study.result}</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#23AACA] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{study.metric1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#23AACA] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{study.metric2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Voice & Trends */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">BRAND VOICE</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a2e29]">
                On-brand. <span className="italic text-orange-500">On-trend.</span> Always.
              </h2>
              <p className="text-lg text-[#1a2e29]/70 mb-6">
                We capture your unique brand voice and adapt it for each platform—while staying ahead of trends to keep your content fresh and relevant.
              </p>
              <div className="space-y-4">
                {[
                  "Platform-native content that doesn't feel like ads",
                  "Real-time trend monitoring and reactive content",
                  "Consistent brand voice across all channels",
                  "Community management and engagement support",
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
                { label: "Trending Topics", value: "500+" },
                { label: "Content Pillars", value: "10-15" },
                { label: "Engagement Rate", value: "4.2%" },
                { label: "Response Time", value: "2hrs" },
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Who This Service Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-ecommerce-dtc">
              <h3 className="text-2xl font-bold mb-4">E-commerce & DTC Brands</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Brands selling physical products need constant content to drive sales and build community. We create scroll-stopping content that converts followers into customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Product showcase content optimized for conversions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">UGC-style content that drives authentic engagement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Campaign creative for launches and seasonal promotions</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-content-creators">
              <h3 className="text-2xl font-bold mb-4">Content Creators & Influencers</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Creators need consistent, high-quality content to maintain growth and monetization. We help you post daily without burnout.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Daily content calendar with platform-specific posts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Trending audio and effect integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Brand partnership content that maintains authenticity</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-food-beverage">
              <h3 className="text-2xl font-bold mb-4">Food & Beverage Brands</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Visual-first industries need stunning content that makes mouths water and drives foot traffic or online orders.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Appetizing food photography and videography</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Behind-the-scenes kitchen and team content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Location-specific content for multi-location businesses</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-wellness-fitness">
              <h3 className="text-2xl font-bold mb-4">Wellness & Fitness Coaches</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Build authority and attract clients with educational content that demonstrates expertise and results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Educational carousels and infographics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Transformation stories and client testimonials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Tip videos and workout demonstrations</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-saas-tech">
              <h3 className="text-2xl font-bold mb-4">SaaS & Tech Companies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Humanize your tech brand with engaging content that educates prospects and nurtures leads through the buying journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Product tip videos and feature showcases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Customer success stories and use cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Industry insights and thought leadership content</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-lifestyle-fashion">
              <h3 className="text-2xl font-bold mb-4">Lifestyle & Fashion Brands</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Aesthetic-first content that builds brand desire and drives engagement in highly competitive visual markets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Trend-aware styling and lookbook content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Influencer collaboration and partnership content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Seasonal campaigns and collection launches</span>
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
            <Link href="/services/social-media-management">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-social-management">
                <h3 className="text-xl font-bold mb-3 text-white">Social Media Management</h3>
                <p className="text-white/70 mb-4">
                  We create the content—add full community management, scheduling, and strategy to maximize ROI.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-paid-ads">
                <h3 className="text-xl font-bold mb-3 text-white">Paid Advertising</h3>
                <p className="text-white/70 mb-4">
                  Amplify your best-performing social content with targeted paid campaigns that drive measurable results.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/influencer-marketing">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-influencer">
                <h3 className="text-xl font-bold mb-3 text-white">Influencer Marketing</h3>
                <p className="text-white/70 mb-4">
                  Scale your social presence with influencer partnerships and authentic creator collaborations.
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
            Ready to dominate the <span className="italic">social feed?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get unlimited social content that stops the scroll and drives engagement
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90 h-12 px-8" data-testid="button-cta-demo">
              Start Creating
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
