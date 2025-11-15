import { useEffect } from "react";
import { Link } from "wouter";
import { TrendingUp, Target, Zap, BarChart, ArrowRight, DollarSign, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from '@assets/paid advertising_1763088406833.avif';

export default function PaidAdvertising() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Paid Advertising Services - Scale Profitably | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-service paid advertising management. Google Ads, Meta, LinkedIn, TikTok. Lower CPA, increase ROAS, scale profitably with expert campaign management.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Paid Advertising Services - Lower CPA, Higher ROAS | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Performance marketing that scales profitably. Google Ads, Meta Ads, LinkedIn, TikTok—optimized for maximum ROI.');
  }, []);

  return (
    <Layout>
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Paid advertising strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Paid advertising that <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(300,81%,60%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">actually scales</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            We manage over $50M in annual ad spend across Google, Meta, LinkedIn, and TikTok. Our campaigns don't just drive clicks—they drive profitable growth at scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90" data-testid="button-get-started">
              Get Free Ad Audit
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
            {['Fintech', 'DTC Brands', 'SaaS Platforms', 'Health & Wellness', 'EdTech', 'Consumer Apps'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics - REDUCED SIZE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">PROVEN RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Performance that speaks for itself
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our data-driven approach consistently delivers results across industries and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "3.2x", label: "Avg. ROAS improvement" },
              { value: "47%", label: "Avg. CPA reduction" },
              { value: "$50M+", label: "Ad spend managed" },
              { value: "89%", label: "Client retention" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(262,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-[hsl(262,10%,98%)]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we scaled a DTC beauty brand from $20k to $200k monthly revenue
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">4.8x ROAS</div>
                  <div className="text-sm text-muted-foreground">Up from 1.9x baseline</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">-52% CPA</div>
                  <div className="text-sm text-muted-foreground">From $48 to $23 per acquisition</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">10x Scale</div>
                  <div className="text-sm text-muted-foreground">In 6 months</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Through strategic audience segmentation, creative refresh cycles, and conversion rate optimization, we transformed their Meta and Google campaigns into a predictable growth engine. The brand went from struggling with profitability to becoming a category leader in their niche.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Meta Ads', 'Google Shopping', 'Dynamic Retargeting', 'UGC Creative', 'Landing Page CRO'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[hsl(262,10%,95%)] text-[hsl(262,83%,58%)] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Master */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">MULTI-PLATFORM EXPERTISE</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every platform. <span className="italic text-[hsl(330,81%,60%)]">Every audience.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Platform-specific strategies that leverage each channel's unique strengths
          </p>
        </div>

        <div className="px-4">
          <ScrollableCards>
            {[
              { 
                name: "Google Ads", 
                desc: "Search, Shopping, Display, Performance Max. We capture high-intent buyers at every stage of their journey. Advanced bidding strategies and granular audience targeting.",
                icon: Target,
                features: ["Search campaigns", "Shopping feed optimization", "Display remarketing", "Performance Max"]
              },
              { 
                name: "Meta Ads", 
                desc: "Facebook & Instagram mastery. From awareness to conversion, we build full-funnel campaigns that scale. Custom audiences, dynamic product ads, and creative testing.",
                icon: TrendingUp,
                features: ["Custom & lookalike audiences", "Dynamic product ads", "A/B creative testing", "Conversion API setup"]
              },
              { 
                name: "LinkedIn Ads", 
                desc: "B2B decision-maker targeting at scale. Sponsored Content, InMail, and Lead Gen Forms that convert. Precision targeting by job title, company, and industry.",
                icon: BarChart,
                features: ["Lead Gen Forms", "Sponsored InMail", "Account-based targeting", "Thought leadership content"]
              },
              { 
                name: "TikTok Ads", 
                desc: "Capture Gen Z and millennials with thumb-stopping creative. Spark Ads, TopView, In-Feed ads. Trend-responsive content that drives conversions.",
                icon: Zap,
                features: ["Spark Ads", "In-Feed videos", "Hashtag challenges", "Creator partnerships"]
              },
              { 
                name: "YouTube Ads", 
                desc: "Video storytelling that drives action. Pre-roll, mid-roll, bumpers, and Discovery ads. Audience intent targeting and sequential messaging.",
                icon: Target,
                features: ["TrueView ads", "Bumper ads", "Video action campaigns", "YouTube Shopping"]
              },
              { 
                name: "Programmatic", 
                desc: "Premium inventory across the open web. Retargeting, contextual targeting, and brand-safe placements. Real-time bidding and attribution.",
                icon: DollarSign,
                features: ["Display retargeting", "Native advertising", "Connected TV", "Audio ads"]
              },
            ].map((platform, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-platform-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[hsl(262,83%,58%)]/10 via-[hsl(300,81%,60%)]/10 to-[hsl(330,81%,60%)]/10 overflow-hidden flex items-center justify-center">
                    <platform.icon className="h-16 w-16 text-[hsl(262,83%,58%)]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(262,83%,58%)] transition-colors">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{platform.desc}</p>
                    <div className="space-y-2">
                      {platform.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(262,83%,58%)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-[hsl(262,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-service management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to scale profitably—no hidden costs, no surprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Campaign Strategy", desc: "Audience research, competitor analysis, funnel mapping, and budget allocation. We build strategic foundations that set you up for success from day one." },
              { name: "Account Architecture", desc: "Clean, scalable campaign structure. Proper tracking setup, UTM parameters, and conversion events configured correctly from the start." },
              { name: "Creative Testing", desc: "Continuous A/B testing of ad copy, headlines, visuals, and CTAs. We iterate weekly to find winning combinations that drive performance." },
              { name: "Bid Optimization", desc: "Smart bidding strategies, manual adjustments, dayparting, and device targeting. We maximize ROI while hitting your target CPA or ROAS." },
              { name: "Audience Engineering", desc: "Custom audiences, lookalikes, retargeting sequences, and exclusions. Precision targeting that reaches the right people at the right time." },
              { name: "Performance Reporting", desc: "Weekly dashboards and monthly strategy calls. Full transparency into spend, conversions, attribution, and recommendations." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-[hsl(262,83%,58%)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${i}`}>
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we work: <span className="italic text-[hsl(330,81%,60%)]">Launch, test, scale</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-step framework for profitable growth
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Discovery & Audit", desc: "We start by analyzing your current performance, customer data, and competitive landscape. If you're already running ads, we audit your account and identify immediate wins. We define clear KPIs and success metrics from day one." },
              { step: "02", title: "Strategy & Launch", desc: "We build campaign architecture, create initial ad variations, and set up proper tracking. Most clients launch within 7-10 days with foundational campaigns driving traffic." },
              { step: "03", title: "Test & Iterate", desc: "Weekly A/B tests on ad creative, audiences, bidding strategies, and landing pages. We kill losers fast and double down on winners. This is where the magic happens—performance compounds through iteration." },
              { step: "04", title: "Scale & Optimize", desc: "As campaigns prove profitable, we increase budgets strategically. We expand to new platforms, test new audience segments, and refine targeting. Continuous optimization maintains efficiency as you scale." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-[hsl(262,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[hsl(262,83%,58%)]/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(300,81%,60%)] to-[hsl(330,81%,60%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to scale profitably?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free ad account audit. We'll identify quick wins and show you exactly how we'd improve your campaigns.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90" data-testid="button-cta-primary">
              Get Free Ad Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
