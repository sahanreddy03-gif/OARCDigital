import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { 
  Palette, Video, Camera, TrendingUp, Heart, MessageCircle, BarChart, Users, 
  ArrowRight, CheckCircle2, Instagram, Linkedin, Facebook, Play, Shield, Clock, Eye,
  Repeat, Bell, Search, ShoppingBag, Award, FileText, Lightbulb, Target, Megaphone,
  Sparkles, ChevronDown, Zap, Globe, TrendingDown, Share2, ThumbsUp, MessageSquare,
  Star, Layers, Calendar, Mail, DollarSign, Settings
} from "lucide-react";
import { SiTiktok, SiYoutube, SiSnapchat, SiPinterest } from "react-icons/si";
import { CountUp } from "@/components/ui/count-up";

export default function SocialMediaCreativeManagement() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    document.title = "Social Media Creative & Management - Dominate Your Feed | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-funnel social—content, management, influencers and paid—engineered to capture attention and drive revenue. Reels, Stories, Carousels, UGC.");
    }
    
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Social Media Creative & Management | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Full-funnel social—content, management, influencers and paid—engineered to capture attention and drive revenue.');

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      {/* SECTION 1: HERO - 3D Phone Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-100 via-white to-pink-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute w-64 h-64 bg-teal-400/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }}></div>
        </div>

        {/* 3D Phone Cluster */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block"
          style={{ 
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Center Phone */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-56 h-[28rem] rounded-[2.5rem] bg-black shadow-2xl overflow-hidden border-8 border-gray-900" style={{ transform: 'perspective(1000px) rotateY(-8deg)' }}>
            <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
              <Play className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Left Phone */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-48 h-96 rounded-[2rem] bg-black shadow-xl overflow-hidden border-8 border-gray-900" style={{ transform: 'perspective(1000px) rotateY(15deg) translateX(20px)' }}>
            <div className="w-full h-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
              <Camera className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Right Phone */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-48 h-96 rounded-[2rem] bg-black shadow-xl overflow-hidden border-8 border-gray-900" style={{ transform: 'perspective(1000px) rotateY(-15deg) translateX(-20px)' }}>
            <div className="w-full h-full bg-gradient-to-br from-amber-400 to-pink-600 flex items-center justify-center">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-10 right-10 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <ThumbsUp className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="absolute bottom-20 left-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <MessageSquare className="w-5 h-5 text-pink-600" />
            </div>
          </div>
          <div className="absolute top-1/3 left-5 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Share2 className="w-5 h-5 text-teal-600" />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-40 text-center px-4 max-w-5xl mx-auto py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-transparent bg-clip-text">
              Dominate Social Media.
            </span>
            <br/>
            Create. Influence. Convert.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Full-funnel social—content, management, influencers and paid—engineered to capture attention and drive revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
              data-testid="button-start-pilot"
            >
              Start a Social Pilot
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 h-14 px-8 text-lg"
              data-testid="button-see-work"
            >
              See Our Work
            </Button>
          </div>

          {/* Micro Trust Chips */}
          <div className="flex flex-wrap gap-3 justify-center text-sm animate-in fade-in duration-700 delay-300">
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200 text-gray-700">
              Reels. Stories. Carousels. UGC.
            </span>
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-pink-200 text-gray-700">
              Instagram • TikTok • YouTube • LinkedIn
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-gray-600 mb-6 font-medium">
            Chosen by brands that demand attention, momentum and creative firepower.
          </p>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {[
              { label: "Retail", icon: ShoppingBag },
              { label: "SaaS", icon: Layers },
              { label: "Hospitality", icon: Award },
              { label: "Ecommerce", icon: DollarSign },
              { label: "Creators", icon: Star }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <item.icon className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            The social game changed — most brands didn't.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Audiences scroll faster. Competition produces louder. Algorithms reward motion and volume.<br/><br/>
            Yet most brands still post like it's 2018 — slow, static, and forgettable.<br/><br/>
            To win today, you need a system that produces high-volume creative, manages daily momentum, and turns attention into revenue.
          </p>
        </div>
      </section>

      {/* SECTION 4: THE SOLUTION - 3 Pillars */}
      <section className="py-32 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              One partner. Every part of social — handled, end-to-end.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just post. We ideate, create, publish, manage, amplify and optimize — across organic, paid and influencer — with a system built for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Create",
                desc: "Short-form video, carousels, UGC & motion built on proven hooks.",
                icon: Palette,
                gradient: "from-purple-500 to-violet-600"
              },
              {
                title: "Manage",
                desc: "Calendars, posting, community, engagement & moderation.",
                icon: Calendar,
                gradient: "from-pink-500 to-rose-600"
              },
              {
                title: "Convert",
                desc: "Paid, influencers, analytics and optimization tied to KPIs.",
                icon: TrendingUp,
                gradient: "from-teal-500 to-cyan-600"
              }
            ].map((pillar, i) => (
              <Card 
                key={i} 
                className="p-8 bg-white/60 backdrop-blur-lg border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                data-testid={`card-pillar-${pillar.title.toLowerCase()}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FULL SOCIAL STACK - Feature Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything your brand needs to grow on social — under one roof.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Video, label: "Short-form video: Reels, TikTok, Shorts" },
              { icon: Layers, label: "Motion & carousels" },
              { icon: Camera, label: "Story design & highlights" },
              { icon: Users, label: "UGC & creator content" },
              { icon: Calendar, label: "Content calendar + creative direction" },
              { icon: Clock, label: "Posting & scheduling" },
              { icon: MessageCircle, label: "Community engagement (DMs + comments)" },
              { icon: Star, label: "Influencer sourcing & management" },
              { icon: Target, label: "Paid social integration (Meta/TikTok)" },
              { icon: BarChart, label: "Weekly reporting & insights" },
              { icon: Repeat, label: "A/B creative testing" },
              { icon: Zap, label: "Always-on optimization" }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 p-6 rounded-xl hover:bg-purple-50 transition-all duration-300 group"
                data-testid={`feature-${i}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PLATFORM SCROLLER */}
      <section className="py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Platforms we dominate.
          </h2>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            {[
              { 
                platform: "Instagram", 
                icon: Instagram, 
                desc: "storytelling, Reels, carousels, engagement",
                color: "from-pink-500 via-purple-500 to-orange-500"
              },
              { 
                platform: "TikTok", 
                icon: SiTiktok, 
                desc: "velocity, trends, UGC, virality",
                color: "from-gray-900 to-teal-500"
              },
              { 
                platform: "YouTube", 
                icon: SiYoutube, 
                desc: "Shorts + authority building",
                color: "from-red-600 to-red-500"
              },
              { 
                platform: "LinkedIn", 
                icon: Linkedin, 
                desc: "positioning, authority & pipeline",
                color: "from-blue-600 to-blue-500"
              }
            ].map((platform, i) => (
              <Card 
                key={i}
                className="flex-shrink-0 w-80 p-8 bg-white/80 backdrop-blur-lg border border-white/50 shadow-xl snap-center hover:shadow-2xl transition-all duration-300"
                data-testid={`platform-${platform.platform.toLowerCase()}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.platform}</h3>
                <p className="text-gray-600 leading-relaxed">{platform.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTENT SHOWCASE REEL */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Content engineered to stop the scroll.
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Hooks, pacing, hierarchy and native-first execution.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "Reels / TikTok", gradient: "from-purple-500 to-pink-600" },
              { label: "Motion ads", gradient: "from-pink-500 to-rose-600" },
              { label: "Carousels", gradient: "from-orange-500 to-red-600" },
              { label: "UGC", gradient: "from-teal-500 to-cyan-600" },
              { label: "Story flows", gradient: "from-violet-500 to-purple-600" }
            ].map((item, i) => (
              <div 
                key={i}
                className="aspect-[9/16] rounded-2xl bg-gradient-to-br shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-end p-6 relative overflow-hidden group"
                data-testid={`showcase-${i}`}
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10">
                  <Play className="w-12 h-12 text-white mb-3 opacity-80 group-hover:opacity-100" />
                  <p className="text-white font-bold text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: MANAGEMENT SECTION */}
      <section className="py-32 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Daily momentum. Zero hassle.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                We handle the daily execution that brands struggle to maintain — consistently, on-brand and on-time.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Clock, label: "Posting & scheduling (7 days if required)" },
                  { icon: MessageCircle, label: "DM & comment moderation" },
                  { icon: TrendingUp, label: "Trend & competitor tracking" },
                  { icon: BarChart, label: "Weekly reporting" },
                  { icon: Users, label: "Community building & engagement" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm" data-testid={`management-${i}`}>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[9/16] max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Calendar className="w-24 h-24 mx-auto mb-4 opacity-90" />
                  <p className="text-xl font-bold">Your social calendar,<br/>always full</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: GROWTH ENGINE - 5 Steps */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Social Growth Engine™
          </h2>

          <div className="space-y-12">
            {[
              { 
                step: 1, 
                title: "Discover", 
                desc: "brand, voice, audience, competitors, data",
                icon: Search,
                gradient: "from-purple-500 to-purple-600"
              },
              { 
                step: 2, 
                title: "Plan", 
                desc: "content calendar + hook map",
                icon: Calendar,
                gradient: "from-pink-500 to-pink-600"
              },
              { 
                step: 3, 
                title: "Create", 
                desc: "video, UGC, motion, design",
                icon: Palette,
                gradient: "from-teal-500 to-teal-600"
              },
              { 
                step: 4, 
                title: "Amplify", 
                desc: "paid + influencer + distribution",
                icon: Megaphone,
                gradient: "from-orange-500 to-orange-600"
              },
              { 
                step: 5, 
                title: "Optimize", 
                desc: "weekly insights, improvements & iterations",
                icon: TrendingUp,
                gradient: "from-violet-500 to-violet-600"
              }
            ].map((step, i) => (
              <div 
                key={i} 
                className="flex items-start gap-6 group"
                data-testid={`step-${step.step}`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-bold text-gray-400">STEP {step.step}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: ADD-ONS (Influencer, UGC, Paid) */}
      <section className="py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Add fuel to the fire.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Influencers",
                desc: "curated, managed, briefed, delivered",
                icon: Star,
                gradient: "from-purple-500 to-violet-600"
              },
              {
                title: "UGC",
                desc: "authentic faces that convert",
                icon: Users,
                gradient: "from-pink-500 to-rose-600"
              },
              {
                title: "Paid Social",
                desc: "scale winners, kill losers, grow revenue",
                icon: Target,
                gradient: "from-teal-500 to-cyan-600"
              }
            ].map((addon, i) => (
              <Card 
                key={i}
                className="p-8 bg-white/60 backdrop-blur-lg border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                data-testid={`addon-${addon.title.toLowerCase()}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${addon.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{addon.title}</h3>
                <p className="text-gray-600 leading-relaxed">{addon.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: KPIs */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div data-testid="kpi-0">
              <CountUp 
                end={72} 
                prefix="+" 
                suffix="%" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4"
              />
              <p className="text-lg text-gray-600">average engagement uplift (pilot programs)</p>
            </div>
            <div data-testid="kpi-1">
              <CountUp 
                end={3} 
                suffix="×" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4"
              />
              <p className="text-lg text-gray-600">faster content velocity (vs internal teams)</p>
            </div>
            <div data-testid="kpi-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">
                24/7
              </div>
              <p className="text-lg text-gray-600">execution (no downtime)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: CASE STUDIES */}
      <section className="py-32 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Proven results, not promises.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "F&B brand",
                result: "+38% engagement in 60 days",
                method: "Reels + UGC + geo-targeting"
              },
              {
                industry: "SaaS startup",
                result: "4× content output and 31% more demos",
                method: "from social"
              },
              {
                industry: "Ecommerce brand",
                result: "+27% revenue",
                method: "from social-driven audiences"
              }
            ].map((study, i) => (
              <Card 
                key={i}
                className="p-8 bg-white/60 backdrop-blur-lg border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                data-testid={`case-${i}`}
              >
                <div className="text-sm font-bold text-purple-600 mb-3 uppercase tracking-wide">{study.industry}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{study.result}</div>
                <p className="text-gray-600">({study.method})</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: TESTIMONIALS */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-8 pb-6 snap-x snap-mandatory scrollbar-hide">
            {[
              {
                quote: "OARC transformed our social from static posts to a revenue channel. The quality and speed are unmatched.",
                author: "Sarah Chen",
                role: "CMO, TechFlow"
              },
              {
                quote: "Finally, a partner that understands social velocity. Our engagement tripled in 90 days.",
                author: "Marcus Williams",
                role: "Founder, Lumina Eats"
              },
              {
                quote: "They don't just create content—they build momentum. Our community has never been more engaged.",
                author: "Priya Patel",
                role: "Marketing Director, StyleCo"
              }
            ].map((testimonial, i) => (
              <Card 
                key={i}
                className="flex-shrink-0 w-full md:w-96 p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-none shadow-xl snap-center"
                data-testid={`testimonial-${i}`}
              >
                <div className="mb-6">
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400 inline" />
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400 inline" />
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400 inline" />
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400 inline" />
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400 inline" />
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: FINAL CTA */}
      <section className="py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to dominate your category?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Let's build a social system that creates, influences and converts 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 h-14 px-8 text-lg shadow-xl"
              data-testid="button-final-cta-pilot"
            >
              Start a Social Pilot
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 h-14 px-8 text-lg"
              data-testid="button-final-cta-call"
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 15: FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How fast can we start?",
                a: "We can kick off a pilot within 7-10 days. Discovery, strategy alignment, and initial content creation begin immediately."
              },
              {
                q: "Do you work with small or large brands?",
                a: "Both. We scale our services to match your needs—from startups needing velocity to enterprises requiring high-volume production."
              },
              {
                q: "Can you do only creative or only management?",
                a: "Yes. While we excel at full-stack social, you can engage us for creative production only or management only based on your needs."
              },
              {
                q: "Do you handle influencers & paid?",
                a: "Absolutely. We source influencers, manage partnerships, and integrate paid social campaigns to amplify your organic efforts."
              },
              {
                q: "What does a pilot include?",
                a: "30-60 days of content production, posting, community management, and performance tracking. It's designed to prove ROI before long-term commitment."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="border border-gray-200 rounded-xl overflow-hidden"
                data-testid={`faq-${i}`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg lg:hidden animate-in slide-in-from-bottom-full duration-300">
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            data-testid="button-sticky-cta"
          >
            Start a Social Pilot
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </Layout>
  );
}
