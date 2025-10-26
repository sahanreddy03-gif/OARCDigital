import { useEffect } from "react";
import { Link } from "wouter";
import { Instagram, Youtube, Linkedin, Facebook, ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/social_media_content_74d332d2.jpg";

export default function SocialMediaCreative() {
  useEffect(() => {
    document.title = "Social Media Creative Services - Scroll-Stopping Content | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Platform-optimized social media creative that drives engagement and conversions. Unlimited content creation for Instagram, TikTok, LinkedIn, and more.");
    }
    // Open Graph tags
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Social Media Creative - Scroll-Stopping Content | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Unlimited social media content designed for engagement. Platform-specific creative that stops the scroll and drives results.');
  }, []);

  return (
    <Layout>
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
            Social content that <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(300,81%,60%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">stops the scroll</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Platform-optimized content for Instagram, TikTok, LinkedIn, and beyond. Unlimited creation at a fixed monthly rate. Trend-aware, on-brand, and built for engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90" data-testid="button-get-started">
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

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">SOCIAL MEDIA MASTERY</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Content that captures attention and drives action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Platform-specific creative optimized for algorithms and human behavior
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "3.8x", label: "Avg. engagement increase", gradient: "from-purple-600 to-pink-600" },
              { value: "250%", label: "Follower growth rate", gradient: "from-blue-600 to-cyan-600" },
              { value: "100+", label: "Posts per month", gradient: "from-orange-600 to-red-600" },
              { value: "24hrs", label: "First draft delivery", gradient: "from-green-600 to-emerald-600" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-[hsl(262,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-to-Post Section */}
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">UNLIMITED CONTENT</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Feed the algorithm. <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">Feed your growth.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Social algorithms reward volume and consistency. We produce 20-50+ pieces of content per week—all platform-optimized, on-brand, and designed to engage.
            </p>
          </div>
        </div>
      </section>

      {/* Platform-Specific Content - Large Cards */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">PLATFORM EXPERTISE</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Native content for <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">every platform</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Instagram Content", desc: "Feed posts, Reels, Stories, and carousels. Aesthetic-first design optimized for Instagram's visual-first algorithm." },
              { name: "TikTok & Short-Form Video", desc: "Hook-first vertical videos engineered for viral potential. Trending sounds, effects, and native editing styles." },
              { name: "LinkedIn Thought Leadership", desc: "Professional content that builds authority. Carousels, infographics, and text posts that drive B2B engagement." },
              { name: "Twitter/X Threads", desc: "Witty copy, thread storytelling, and visual tweets that spark conversation and grow following." },
              { name: "Stories & Ephemeral Content", desc: "Daily Stories, polls, Q&As, and BTS content. Keep your audience engaged between main posts." },
              { name: "Memes & Trend-Jacking", desc: "Capitalize on trending moments with on-brand reactive content. Quick turnaround for cultural relevance." },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-platform-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">CASE STUDIES</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Viral moments that <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">move business metrics</span>
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
              <div key={i} className="group p-8 bg-white rounded-xl border border-border hover:border-[hsl(262,83%,58%)] hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <study.icon className="h-12 w-12 text-[hsl(262,83%,58%)] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-2">{study.industry}</div>
                <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">{study.result}</div>
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

      {/* Brand Voice & Trends */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">BRAND VOICE</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                On-brand. <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">On-trend.</span> Always.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
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
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
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
            Ready to dominate the <span className="italic">social feed?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get unlimited social content that stops the scroll and drives engagement
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-demo">
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
