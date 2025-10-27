import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import { 
  Palette, Video, Camera, TrendingUp, Heart, MessageCircle, BarChart, Users, 
  ArrowRight, CheckCircle2, Instagram, Linkedin, Facebook, Globe, Zap,
  Target, Megaphone, Sparkles, ChevronDown, Play
} from "lucide-react";
import heroImage from "@assets/stock_images/professional_social__d031bd94.jpg";

export default function SocialMediaCreativeManagement() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Social Media Creative & Management - Your Competitive Edge | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Slice through the chaos with social media content that gets your brand noticed and drives results. Full-service creative, management, and growth - all in one.");
    }
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Social Media Creative & Management - Your Competitive Edge | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Slice through the chaos with social media content that gets your brand noticed and drives results. Full-service creative, management, and growth - all in one.');
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Social media creative and management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm mb-6 animate-in fade-in duration-700">
            SOCIAL MEDIA CREATIVE & MANAGEMENT
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Your <span className="italic bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">competitive edge</span><br/>in a crowded feed
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Slice through the chaos with scroll-stopping content and full-service management that builds communities and drives measurable business results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 h-14 px-8 text-lg" data-testid="button-get-started">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 h-14 px-8 text-lg" data-testid="button-view-work">
              <Play className="mr-2 w-5 h-5" />
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By - Animated Logo Ticker */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by 500+ of the world's biggest brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['E-commerce', 'SaaS', 'Financial Services', 'Hospitality', 'Food & Beverage', 'Wellness', 'Real Estate', 'Professional Services'].map((type, i) => (
              <div key={i} className="text-base md:text-lg font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-3">PROVEN IMPACT</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Data-driven success for our customers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just create beautiful content—we deliver measurable business results through strategic creativity and hands-on management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "20K+", label: "Social media projects completed", icon: CheckCircle2 },
              { value: "3.8x", label: "Average engagement rate increase", icon: TrendingUp },
              { value: "850+", label: "Social accounts managed", icon: Users },
              { value: "4.8/5", label: "Average project approval rating", icon: Heart },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group" data-testid={`metric-${i}`}>
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Comprehensive Services */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">COMPREHENSIVE SOCIAL SOLUTIONS</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Creative that <span className="italic bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text">clicks</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From strategy to execution, we handle every aspect of your social media presence—so you can focus on running your business.
            </p>
          </div>

          <ScrollableCards className="pb-8">
            {[
              { 
                name: "Organic Social Media Content", 
                desc: "Engage your audience with authentic and compelling content that boosts your organic reach and brand loyalty. Platform-optimized posts, Stories, Reels, and more.",
                icon: Heart,
                gradient: "from-pink-500 to-rose-500"
              },
              { 
                name: "Social Media Video Content", 
                desc: "Optimize for algorithms and engagement across Instagram, TikTok, and YouTube. Livestream and UGC support. Hook-first vertical videos engineered for viral potential.",
                icon: Video,
                gradient: "from-purple-500 to-indigo-500"
              },
              { 
                name: "Social Media Post Design", 
                desc: "Capture attention with visually stunning post designs that reflect your brand's identity. Aesthetic-first design optimized for visual-first algorithms.",
                icon: Palette,
                gradient: "from-orange-500 to-amber-500"
              },
              { 
                name: "Community Management", 
                desc: "Respond to comments, DMs, mentions. Moderate discussions, handle customer service inquiries, build relationships with your followers. 2hr avg response time.",
                icon: MessageCircle,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                name: "Social Media Advertising", 
                desc: "Supercharge organic content with paid amplification. Strategic targeting, A/B testing, and performance optimization across all platforms.",
                icon: Target,
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                name: "Influencer Marketing", 
                desc: "Strategic partnerships with creators who align with your brand. Campaign management from discovery to reporting with guaranteed ROI.",
                icon: Users,
                gradient: "from-violet-500 to-purple-500"
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px]" data-testid={`service-card-${i}`}>
                <div className="h-full p-8 bg-white rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-400 mb-4">PLATFORM MASTERY</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Expertise across <span className="italic bg-gradient-to-r from-orange-400 to-purple-400 text-transparent bg-clip-text">all platforms</span>
            </h2>
            <p className="text-xl text-white/80">
              Native content for every platform. We understand the unique algorithms, formats, and audiences of each social network.
            </p>
          </div>

          <ScrollableCards className="pb-8">
            {[
              { 
                platform: "Instagram", 
                desc: "Feed posts, Reels, Stories, and carousels. Aesthetic-first design optimized for Instagram's visual algorithm. Hashtag strategy and engagement tactics.",
                icon: Instagram,
                color: "from-pink-500 via-purple-500 to-orange-500"
              },
              { 
                platform: "TikTok", 
                desc: "Viral content engineered for maximum shareability. Trending sounds, effects, and native editing styles. Hook-first storytelling that captures Gen Z attention.",
                icon: Play,
                color: "from-cyan-400 to-pink-500"
              },
              { 
                platform: "LinkedIn", 
                desc: "Professional content that builds authority. Thought leadership posts, carousels, and articles that drive B2B engagement and position you as an industry leader.",
                icon: Linkedin,
                color: "from-blue-600 to-blue-400"
              },
              { 
                platform: "Facebook", 
                desc: "Community-building content tailored for Facebook's unique audience. Group management, live video, and engagement strategies that build loyal communities.",
                icon: Facebook,
                color: "from-blue-500 to-indigo-600"
              },
              { 
                platform: "YouTube", 
                desc: "Long-form and Shorts optimized for watch time and retention. Thumbnail design, SEO optimization, and content strategies that grow subscribers.",
                icon: Play,
                color: "from-red-500 to-pink-500"
              },
              { 
                platform: "Twitter/X", 
                desc: "Witty copy, thread storytelling, and visual tweets that spark conversation. Real-time engagement and trend-jacking for cultural relevance.",
                icon: Globe,
                color: "from-sky-400 to-blue-500"
              },
            ].map((platform, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px]" data-testid={`platform-card-${i}`}>
                <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{platform.platform}</h3>
                  <p className="text-white/70 leading-relaxed">{platform.desc}</p>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* AI-Enhanced Workflows */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">AI-ENHANCED CREATIVE</div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Powerful creative, <span className="italic bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text">impressive</span> turnarounds
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                By equipping the top 1% of global talent with the latest AI tools, we deliver high-performing social creative <strong>up to 60% faster.</strong> Our AI-enhanced workflows help us move with speed and precision—amplifying creativity and bringing more value to your brand.
              </p>
              <div className="space-y-4">
                {[
                  "24-hour first draft delivery on most content",
                  "Unlimited revisions until you're 100% satisfied",
                  "AI-powered trend analysis and content ideation",
                  "Scalable content production (20-50+ posts/week)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "60%", label: "Faster turnaround", icon: Zap },
                { value: "100+", label: "Posts per month", icon: Sparkles },
                { value: "24hrs", label: "First draft delivery", icon: TrendingUp },
                { value: "∞", label: "Unlimited revisions", icon: CheckCircle2 },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Scrollable */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">SUCCESS STORIES</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Brands that stepped up their game <span className="italic bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text">with OARC Digital</span>
            </h2>
          </div>

          <ScrollableCards className="pb-8">
            {[
              {
                company: "E-commerce Fashion Brand",
                industry: "E-commerce",
                challenge: "Low engagement and struggling to convert followers to customers",
                results: [
                  "287% follower growth in 6 months",
                  "4.3x engagement rate increase",
                  "$1.8M in social-driven revenue",
                  "42% of total sales from social channels"
                ],
                gradient: "from-pink-500 to-rose-500"
              },
              {
                company: "Food & Beverage Startup",
                industry: "Food & Bev",
                challenge: "Building brand awareness in competitive market",
                results: [
                  "12M impressions in first quarter",
                  "350% increase in UGC mentions",
                  "Sold out product lines via Instagram",
                  "Top 3 trending food brand on TikTok"
                ],
                gradient: "from-orange-500 to-amber-500"
              },
              {
                company: "SaaS Platform",
                industry: "Technology",
                challenge: "Generating B2B leads through LinkedIn",
                results: [
                  "520% increase in qualified leads",
                  "180K new followers in 90 days",
                  "$2.3M pipeline from social",
                  "Industry thought leader positioning"
                ],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                company: "Wellness Coach",
                industry: "Wellness",
                challenge: "Converting social following to course sales",
                results: [
                  "5.2x increase in course leads",
                  "95% class capacity from Instagram",
                  "$520K in attributed course sales",
                  "4.9/5 community engagement rating"
                ],
                gradient: "from-green-500 to-emerald-500"
              },
              {
                company: "Real Estate Firm",
                industry: "Real Estate",
                challenge: "Competing with large agencies for visibility",
                results: [
                  "320 qualified leads per month",
                  "28% conversion rate on social leads",
                  "450% ROI on social investment",
                  "Top 3 real estate brand in market"
                ],
                gradient: "from-violet-500 to-purple-500"
              },
            ].map((study, i) => (
              <div key={i} className="flex-none w-[380px] md:w-[460px]" data-testid={`case-study-${i}`}>
                <div className="h-full p-8 bg-white rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-xs uppercase tracking-wider text-orange-600 mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Challenge</div>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-3">Results</div>
                    <div className="space-y-3">
                      {study.results.map((result, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${study.gradient} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium">{result}</span>
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

      {/* How We Do It - Process */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">OUR PROCESS</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How we do it
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Strategy",
                desc: "Comprehensive A-to-Z analysis of your social footprint. Define approach and service combination for maximum impact."
              },
              {
                step: "02",
                title: "Insight",
                desc: "Reverse engineer from desired outcomes. Research audience, platforms, and content that captures attention."
              },
              {
                step: "03",
                title: "Creative",
                desc: "Shareable, engaging, performance-focused content for the social generation across all platforms."
              },
              {
                step: "04",
                title: "Management",
                desc: "Daily publishing, community engagement, customer service, and real-time trend monitoring."
              },
              {
                step: "05",
                title: "Optimization",
                desc: "Continuous testing, analytics, and strategy refinement based on performance data."
              },
            ].map((item, i) => (
              <div key={i} className="text-center group hover:-translate-y-2 transition-all duration-300" data-testid={`process-step-${i}`}>
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-orange-600 to-purple-600 text-transparent bg-clip-text mb-4 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">FAQ</h2>
            <p className="text-xl text-muted-foreground">Common questions about our social media services</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What makes your social media services different?",
                answer: "We combine creative excellence with full-service management. Unlike agencies that only do creative or only do management, we handle everything: strategy, content creation, publishing, community management, paid amplification, influencer partnerships, and analytics—all under one roof with one unified strategy."
              },
              {
                question: "How quickly can you turn around content?",
                answer: "Most content gets first drafts within 24 hours. Our AI-enhanced workflows allow us to produce 20-50+ pieces of content per week while maintaining exceptional quality. Urgent requests can often be accommodated same-day."
              },
              {
                question: "Do you work with all social media platforms?",
                answer: "Yes. We're platform-agnostic and have deep expertise across Instagram, TikTok, LinkedIn, Facebook, YouTube, Twitter/X, and emerging platforms. We create native content optimized for each platform's unique algorithm and audience."
              },
              {
                question: "What industries do you work with?",
                answer: "We work across all industries: E-commerce, SaaS, Financial Services, Hospitality, Food & Beverage, Wellness, Real Estate, Professional Services, and more. Our team has specialized expertise in B2C and B2B social strategies."
              },
              {
                question: "How do you measure success?",
                answer: "We track what matters to your business: engagement rates, follower growth, website traffic, lead generation, and revenue attribution. You'll receive weekly dashboards and monthly strategy reviews with actionable insights and clear ROI tracking."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300" data-testid={`faq-${i}`}>
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  data-testid={`faq-button-${i}`}
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to dominate <span className="italic">social media?</span>
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Stop posting into the void. Start building engaged communities, creating viral content, and driving measurable business results.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 h-16 px-10 text-lg" data-testid="button-cta-primary">
              Get Started Today
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-16 px-10 text-lg" data-testid="button-cta-secondary">
              Book a Free Audit
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
