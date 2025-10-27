import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import { 
  Palette, Video, Camera, TrendingUp, Heart, MessageCircle, BarChart, Users, 
  ArrowRight, CheckCircle2, Instagram, Linkedin, Facebook, Globe, Zap,
  Target, Megaphone, Sparkles, ChevronDown, Play, Shield, Clock, Eye,
  Repeat, Bell, Search, ShoppingBag, Award, FileText, Lightbulb, TrendingDown
} from "lucide-react";
import { SiTiktok, SiYoutube, SiSnapchat, SiPinterest } from "react-icons/si";
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 leading-tight">
            Your <span className="italic bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">competitive edge</span><br/>in a crowded feed
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Slice through the chaos with scroll-stopping content and full-service management that builds communities, drives engagement, and delivers measurable business results.
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
              <div key={i} className="text-center p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group" data-testid={`metric-${i}`}>
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-to-Post Banner */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-sm uppercase tracking-wider text-white/80 mb-4">READY-TO-POST</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your shortcut to <span className="italic underline decoration-wavy decoration-white/40 underline-offset-8">scroll-stopping</span> content
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Scaling your social ads and posts in-house? Easier said than done. Whether it's looming deadlines or limited resources, keeping up with demand for compelling social media content is a challenge. <strong>That's where we come in.</strong>
          </p>
        </div>
      </section>

      {/* Comprehensive Social Solutions */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">MADE FOR SOCIAL</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Creative that <span className="italic bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text">clicks</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Show up on Instagram, Facebook, TikTok, LinkedIn, and everything in between with creative designed to connect with and grow your audience.
            </p>
          </div>

          <ScrollableCards id="services" className="pb-8">
            {[
              { 
                name: "Organic Social Media Content", 
                desc: "Engage your audience with authentic and compelling content that boosts your organic reach and brand loyalty. Platform-optimized posts, Stories, Reels, and carousel posts that drive real engagement.",
                icon: Heart,
                gradient: "from-pink-500 to-rose-500",
                features: ["Daily posting schedules", "Platform-native formats", "Hashtag strategy", "Trend integration"]
              },
              { 
                name: "Social Media Video Content", 
                desc: "Optimize for algorithms and engagement across social media platforms like Instagram, TikTok, and YouTube. Livestream and UGC support available. Hook-first vertical videos engineered for viral potential.",
                icon: Video,
                gradient: "from-purple-500 to-indigo-500",
                features: ["Short-form video", "Reels & TikToks", "YouTube content", "Livestream support"]
              },
              { 
                name: "Social Media Post Design", 
                desc: "Capture attention with visually stunning post designs that reflect your brand's identity and message. Aesthetic-first design optimized for visual-first algorithms and thumb-stopping creativity.",
                icon: Palette,
                gradient: "from-orange-500 to-amber-500",
                features: ["Custom graphics", "Brand templates", "Carousel designs", "Story templates"]
              },
              { 
                name: "Social Media Collateral", 
                desc: "From profile banners to highlight covers, ensure every aspect of your social media presence is on-brand and impactful. Complete visual identity systems for all platforms.",
                icon: Camera,
                gradient: "from-cyan-500 to-blue-500",
                features: ["Profile design", "Cover photos", "Highlight covers", "Link-in-bio pages"]
              },
              { 
                name: "Social Media Response Guide", 
                desc: "Equip your team with a comprehensive guide to maintain a consistent and engaging brand voice across all interactions. Templates, tone guidelines, and crisis protocols.",
                icon: FileText,
                gradient: "from-green-500 to-emerald-500",
                features: ["Brand voice guide", "Response templates", "Crisis management", "Escalation protocols"]
              },
              { 
                name: "Social Media Concepts", 
                desc: "Innovate and set yourself apart from the competition with unique concepts that set trends and engage audiences in new ways. Campaign ideation and creative direction.",
                icon: Lightbulb,
                gradient: "from-yellow-500 to-orange-500",
                features: ["Campaign ideation", "Creative direction", "Trend forecasting", "Concept testing"]
              },
              { 
                name: "Community Management", 
                desc: "Respond to comments, DMs, and mentions. Moderate discussions, handle customer service inquiries, build relationships with your followers. 2-hour average response time.",
                icon: MessageCircle,
                gradient: "from-indigo-500 to-purple-500",
                features: ["Daily engagement", "DM responses", "Comment moderation", "Customer service"]
              },
              { 
                name: "Social Media Analytics", 
                desc: "Track funnel performance, analyze engagement patterns, identify growth opportunities. Data-driven insights that inform strategy and optimize results month over month.",
                icon: BarChart,
                gradient: "from-violet-500 to-fuchsia-500",
                features: ["Performance tracking", "Competitive analysis", "ROI reporting", "Growth insights"]
              },
              { 
                name: "Social Media Advertising", 
                desc: "Supercharge organic content with paid amplification. Strategic targeting, A/B testing, and performance optimization across all platforms. On average, ads from influencers perform 7x better.",
                icon: Target,
                gradient: "from-red-500 to-pink-500",
                features: ["Paid campaigns", "Ad creative", "Audience targeting", "Budget optimization"]
              },
              { 
                name: "Influencer Marketing", 
                desc: "Create the most engaged, captivating & ROI-focused influencer marketing campaigns. Strategic partnerships with creators who align with your brand. Guaranteed results and performance.",
                icon: Users,
                gradient: "from-teal-500 to-cyan-500",
                features: ["Influencer sourcing", "Campaign management", "Contract negotiation", "Performance tracking"]
              },
              { 
                name: "Social Listening & Monitoring", 
                desc: "Track brand mentions, monitor sentiment, identify opportunities and threats in real-time. Stay ahead of the conversation and protect your reputation.",
                icon: Search,
                gradient: "from-slate-500 to-gray-600",
                features: ["Brand monitoring", "Sentiment analysis", "Competitor tracking", "Trend identification"]
              },
              { 
                name: "Crisis Management", 
                desc: "Rapid response protocols for negative feedback, PR incidents, or viral controversies. 24/7 monitoring and immediate action plans to protect your brand reputation.",
                icon: Shield,
                gradient: "from-rose-600 to-red-600",
                features: ["24/7 monitoring", "Response protocols", "Reputation management", "Stakeholder communication"]
              },
              { 
                name: "Social Commerce", 
                desc: "Turn your social channels into revenue-generating storefronts. Instagram Shop, Facebook Shops, TikTok Shop, Pinterest catalogs. Seamless shopping experiences.",
                icon: ShoppingBag,
                gradient: "from-emerald-500 to-green-600",
                features: ["Shop setup", "Product tagging", "Checkout optimization", "Sales tracking"]
              },
              { 
                name: "Content Calendar Management", 
                desc: "Strategic planning and scheduling across all platforms. Coordinated campaigns, seasonal content, product launches. Never miss a posting opportunity.",
                icon: Clock,
                gradient: "from-blue-600 to-indigo-600",
                features: ["Content planning", "Multi-platform scheduling", "Campaign coordination", "Approval workflows"]
              },
              { 
                name: "UGC Strategy & Management", 
                desc: "Amplify authentic customer voices. Source, curate, and leverage user-generated content to build trust and social proof. Rights management and creator partnerships.",
                icon: Award,
                gradient: "from-amber-500 to-yellow-600",
                features: ["UGC sourcing", "Rights management", "Creator partnerships", "Content curation"]
              },
              { 
                name: "Social SEO Optimization", 
                desc: "Optimize your social content for search discovery. Keyword research, profile optimization, hashtag strategy. Make your content discoverable across platforms and Google.",
                icon: TrendingUp,
                gradient: "from-purple-600 to-pink-600",
                features: ["Profile optimization", "Keyword research", "Hashtag strategy", "Search discovery"]
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[380px] md:w-[460px]" data-testid={`service-card-${i}`}>
                <div className="h-full p-8 bg-white rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${service.gradient} blur-2xl`}></div>
                  </div>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className={`w-4 h-4 bg-gradient-to-br ${service.gradient} text-transparent`} style={{WebkitBackgroundClip: 'text', backgroundClip: 'text'}} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-400 mb-4">PLATFORM MASTERY</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Expertise across <span className="italic bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">all social media platforms</span>
            </h2>
            <p className="text-xl text-white/80">
              Rely on our in-depth expertise to version and scale any kind of social media content—static, motion, or video—across all your key social media channels.
            </p>
          </div>

          <ScrollableCards id="platforms" className="pb-8">
            {[
              { 
                platform: "Instagram", 
                desc: "Captivate Instagram's visually-driven audience with stunning graphics and innovative content formats. Feed posts, Reels, Stories, and carousels optimized for maximum engagement.",
                icon: Instagram,
                color: "from-pink-500 via-purple-500 to-orange-500",
                features: ["Reels mastery", "Story strategies", "Carousel posts", "Shopping tags"]
              },
              { 
                platform: "TikTok", 
                desc: "Tap into the power of viral content with TikTok creatives designed for maximum shareability and engagement. Hook-first storytelling that captures Gen Z and millennial attention.",
                icon: SiTiktok,
                color: "from-cyan-400 via-pink-400 to-purple-500",
                features: ["Viral trends", "Sound strategy", "Effects & filters", "TikTok Shop"]
              },
              { 
                platform: "LinkedIn", 
                desc: "Position your brand as an industry leader with professional and engaging content designed for LinkedIn's business-focused community. Thought leadership and B2B growth.",
                icon: Linkedin,
                color: "from-blue-600 to-blue-400",
                features: ["Thought leadership", "Company pages", "Employee advocacy", "B2B targeting"]
              },
              { 
                platform: "Facebook", 
                desc: "Maximize engagement with custom creative tailored for Facebook's unique audience and platform capabilities. Community building and group management strategies.",
                icon: Facebook,
                color: "from-blue-500 to-indigo-600",
                features: ["Community groups", "Live video", "Facebook Shops", "Event promotion"]
              },
              { 
                platform: "YouTube", 
                desc: "Optimize viewer interaction with tailored creatives designed for YouTube's diverse audience and video-friendly platform features. Long-form and Shorts strategies.",
                icon: SiYoutube,
                color: "from-red-500 to-pink-500",
                features: ["Long-form content", "YouTube Shorts", "Thumbnail design", "SEO optimization"]
              },
              { 
                platform: "Twitter/X", 
                desc: "Real-time engagement and trend-jacking for cultural relevance. Witty copy, thread storytelling, and visual tweets that spark conversation and drive reach.",
                icon: Globe,
                color: "from-sky-400 to-blue-500",
                features: ["Thread creation", "Trend-jacking", "Spaces hosting", "Community notes"]
              },
              { 
                platform: "Snapchat", 
                desc: "Reach younger audiences with AR lenses, filters, and Stories. Authentic, ephemeral content that drives engagement with Gen Z and millennials.",
                icon: SiSnapchat,
                color: "from-yellow-400 to-yellow-600",
                features: ["AR lenses", "Snap Ads", "Stories", "Spotlight content"]
              },
              { 
                platform: "Pinterest", 
                desc: "Drive traffic and conversions with visually-rich Pins and boards. Shopping integration, idea Pins, and SEO optimization for discovery.",
                icon: SiPinterest,
                color: "from-red-600 to-pink-600",
                features: ["Idea Pins", "Shopping Pins", "Board strategy", "SEO optimization"]
              },
            ].map((platform, i) => (
              <div key={i} className="flex-none w-[380px] md:w-[460px]" data-testid={`platform-card-${i}`}>
                <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${platform.color} blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>
                  </div>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{platform.platform}</h3>
                  <p className="text-white/70 leading-relaxed mb-6 relative z-10">{platform.desc}</p>
                  <div className="grid grid-cols-2 gap-2 relative z-10">
                    {platform.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-white/60" />
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
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
              <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">AI-ENHANCED</div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Powerful creative, <span className="italic bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text">impressive</span> turnarounds
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                By equipping the top 1% of global talent with the latest AI tools, we deliver high-performing social creative <strong className="text-foreground">up to 60% faster.</strong> Our AI-enhanced workflows help us move with speed and precision—amplifying creativity and bringing more value to your brand.
              </p>
              <div className="space-y-4">
                {[
                  "24-hour first draft delivery on most content",
                  "Unlimited revisions until you're 100% satisfied",
                  "AI-powered trend analysis and content ideation",
                  "Scalable content production (20-50+ posts/week)",
                  "Real-time performance optimization",
                  "Automated A/B testing and analytics"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 bg-gradient-to-r from-orange-600 to-purple-600 text-white" data-testid="button-ai-services">
                Explore AI Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "60%", label: "Faster turnaround", icon: Zap, color: "from-orange-500 to-pink-500" },
                { value: "100+", label: "Posts per month", icon: Sparkles, color: "from-purple-500 to-indigo-500" },
                { value: "24hrs", label: "First draft delivery", icon: Clock, color: "from-cyan-500 to-blue-500" },
                { value: "∞", label: "Unlimited revisions", icon: Repeat, color: "from-green-500 to-emerald-500" },
              ].map((stat, i) => (
                <div key={i} className={`p-8 bg-gradient-to-br ${stat.color} rounded-2xl text-center text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group`}>
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-white group-hover:scale-125 transition-transform duration-300" />
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">SUCCESS STORIES</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Brands that stepped up their game <span className="italic bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text">with OARC Digital</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real brands across industries. See how our strategic social media approach drives business growth.
            </p>
          </div>

          <ScrollableCards id="case-studies" className="pb-8">
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
                gradient: "from-pink-500 to-rose-500",
                metrics: { impressions: "70M+", collaborations: "500+", outcome: "Sold Out Lines" }
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
                gradient: "from-orange-500 to-amber-500",
                metrics: { impressions: "70M+", collaborations: "500+", outcome: "Sold Out" }
              },
              {
                company: "SaaS Platform Launch",
                industry: "Technology",
                challenge: "Launching in 15 western markets simultaneously",
                results: [
                  "500M+ impressions across 15 countries",
                  "Millions of app downloads in first 90 days",
                  "Top 10 trending app in all markets",
                  "#1 social media growth campaign"
                ],
                gradient: "from-blue-500 to-cyan-500",
                metrics: { impressions: "500M+", countries: "15", outcome: "Millions of Downloads" }
              },
              {
                company: "Gaming Hardware Brand",
                industry: "Gaming",
                challenge: "Standing out in saturated gaming market",
                results: [
                  "13M impressions in first campaign",
                  "26M ad placement views",
                  "1.1M stream followers generated",
                  "Top 3 gaming brand on Twitch"
                ],
                gradient: "from-purple-500 to-indigo-500",
                metrics: { impressions: "13M", views: "26M", followers: "1.1M" }
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
                gradient: "from-green-500 to-emerald-500",
                metrics: { increase: "5.2x", capacity: "95%", revenue: "$520K" }
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
                gradient: "from-violet-500 to-purple-500",
                metrics: { leads: "320/mo", conversion: "28%", roi: "450%" }
              },
            ].map((study, i) => (
              <div key={i} className="flex-none w-[420px] md:w-[500px]" data-testid={`case-study-${i}`}>
                <div className="h-full p-8 bg-white rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs uppercase tracking-wider text-orange-600 font-bold">{study.industry}</div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white text-xs font-bold`}>
                      Case Study
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">{study.company}</h3>
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Challenge</div>
                    <p className="text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm font-semibold mb-3">Key Results</div>
                    <div className="space-y-3">
                      {study.results.map((result, j) => (
                        <div key={j} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${study.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium leading-relaxed">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(study.metrics).map(([key, value], j) => (
                        <div key={j} className="text-center">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${study.gradient} text-transparent bg-clip-text`}>{value}</div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">{key}</div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From comprehensive analysis to continuous optimization, our proven 5-step process delivers results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Strategy",
                desc: "Comprehensive A-to-Z analysis of your social footprint. Define approach and service combination for maximum impact and cultural relevance.",
                icon: Target
              },
              {
                step: "02",
                title: "Insight",
                desc: "Reverse engineer from desired outcomes. Research audience, platforms, and content that captures attention and drives action.",
                icon: Lightbulb
              },
              {
                step: "03",
                title: "Creative",
                desc: "Shareable, engaging, performance-focused content for the social generation across all platforms. Data meets creativity.",
                icon: Sparkles
              },
              {
                step: "04",
                title: "Management",
                desc: "Daily publishing, community engagement, customer service, and real-time trend monitoring. We're your in-house team.",
                icon: Users
              },
              {
                step: "05",
                title: "Optimization",
                desc: "Continuous testing, analytics, and strategy refinement based on performance data. Month-over-month growth.",
                icon: TrendingUp
              },
            ].map((item, i) => (
              <div key={i} className="text-center group hover:-translate-y-3 transition-all duration-500" data-testid={`process-step-${i}`}>
                <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div className="mb-4">
                  <item.icon className="w-12 h-12 mx-auto text-orange-600 group-hover:scale-125 transition-transform duration-300" />
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
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">FAQ</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is your social strategy approach?",
                answer: "As your global social agency, we always start with a comprehensive A-to-Z analysis of your social media footprint to understand how our work would fit into the overall marketing mix and your customer journey. We then define which approach and combination of our services is the most effective route to success, ensuring we amplify your message rather than confusing it."
              },
              {
                question: "What platforms do you support?",
                answer: "We support all major social media platforms including Instagram, TikTok, LinkedIn, Facebook, YouTube, Twitter/X, Snapchat, Pinterest, and Threads. We create platform-native content optimized for each channel's unique algorithm, audience, and format requirements."
              },
              {
                question: "How quickly can you deliver content?",
                answer: "With our AI-enhanced workflows, we deliver first drafts within 24 hours for most content types. We offer unlimited revisions and guarantee you'll be 100% satisfied before publishing. For ongoing management, we maintain consistent daily/weekly posting schedules."
              },
              {
                question: "Do you offer influencer marketing?",
                answer: "Yes! We create strategic, results-driven influencer marketing campaigns with guaranteed ROI. From influencer sourcing and contract negotiation to campaign management and performance tracking, we handle every aspect of your influencer partnerships."
              },
              {
                question: "What kind of results can I expect?",
                answer: "Our clients typically see 3-4x engagement rate increases, significant follower growth, and measurable revenue attribution from social channels. We provide detailed analytics and reporting so you can track ROI and performance metrics that matter to your business."
              },
              {
                question: "How does community management work?",
                answer: "Our team responds to comments, DMs, and mentions with an average 2-hour response time during business hours. We moderate discussions, handle customer service inquiries, and build authentic relationships with your followers while maintaining your brand voice."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300" data-testid={`faq-${i}`}>
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-bold pr-8">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 text-orange-600 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ready to dominate your feed?
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-10 leading-relaxed">
            Let's create social content that captivates, engages, and converts.<br/>
            <strong>Full-service. Performance-driven. Results guaranteed.</strong>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 h-16 px-10 text-lg font-bold" data-testid="button-cta-primary">
              Get Started Today
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 h-16 px-10 text-lg font-bold" data-testid="button-cta-secondary">
              <Play className="mr-2 w-6 h-6" />
              See Our Work
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
