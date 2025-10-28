import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { 
  ArrowRight, Check, Play, Award, TrendingUp, Users, Target,
  Lightbulb, MessageCircle, Palette, BarChart, Calendar, 
  Zap, Eye, Share2, Camera, Film, Layout as LayoutIcon,
  Sparkles, Shield, Video, Star, CheckCircle2
} from "lucide-react";

// Import high-quality stock images
import teamWorkingImg from "@assets/stock_images/creative_team_workin_f6ad2574.jpg";
import productionImg from "@assets/stock_images/behind_the_scenes_vi_512df08f.jpg";
import strategyImg from "@assets/stock_images/social_media_marketi_c5c9fc0c.jpg";
import socialMediaPhoneImg from "@assets/stock_images/instagram_tiktok_mob_ed4787dd.jpg";

export default function SocialMediaCreativeManagement() {
  useEffect(() => {
    document.title = "Social Media Creative & Management | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "We grow cult-like social communities with platform-specific social strategies. Full-service social media creative, paid advertising, and influencer marketing.");
    }
  }, []);

  const services = {
    social: [
      { name: "Social Strategy", icon: Lightbulb },
      { name: "Channel and Community Management", icon: MessageCircle },
      { name: "Social-first Content Creation", icon: Palette },
      { name: "Social Listening & Insights", icon: BarChart },
      { name: "Content Calendar Management", icon: Calendar },
      { name: "Performance Analytics", icon: TrendingUp },
    ],
    paid: [
      { name: "Paid Social & Paid Search", icon: Target },
      { name: "Full-Funnel Media Strategy", icon: Zap },
      { name: "Planning, Buying, Creative, Analytics, Testing and more", icon: Award },
      { name: "Feed Optimisation & Shopping", icon: Share2 },
      { name: "Campaign Management", icon: BarChart },
      { name: "Retargeting & Optimisation", icon: Eye },
    ],
    creative: [
      { name: "Organic & Paid Social Video", icon: Video },
      { name: "UGC to High-Production", icon: Camera },
      { name: "Creative Strategy, Art Direction & Campaigns", icon: Sparkles },
      { name: "Motion Design, Animation and Graphics", icon: Film },
      { name: "Campaign Creative", icon: LayoutIcon },
      { name: "Social-first Graphics & Design", icon: Palette },
    ],
    influencer: [
      { name: "End-to-end Campaign Management", icon: Users },
      { name: "Brand Awareness and Direct-Response Objectives", icon: Star },
      { name: "Content Creators for UGC Content", icon: Camera },
      { name: "Wrap Reports and Analysis", icon: BarChart },
      { name: "Micro, Macro, Celebrity Campaigns", icon: Award },
      { name: "Rights & Licensing", icon: Shield },
    ]
  };

  const stats = [
    { value: "500+", label: "Brands Served" },
    { value: "2.5B+", label: "Impressions Delivered" },
    { value: "350%", label: "Avg. ROI Increase" },
    { value: "4.9/5", label: "Client Satisfaction" },
  ];

  const whyChooseUs = [
    {
      title: "Platform Partners",
      description: "We're agency partners with Meta, TikTok, and Pinterest with access to unique insights and beta tests."
    },
    {
      title: "Specialists",
      description: "Our team consists of Social Strategists, Content Creators, Videographers, Influencer Managers & Analysts."
    },
    {
      title: "Social-first Content",
      description: "We create engaging platform-specific content for each algorithm whilst building your brand and driving ROI."
    },
    {
      title: "Custom Reporting",
      description: "We design & build custom reports that align with your business goals, priorities and core KPIs."
    },
    {
      title: "Award-Winning",
      description: "Multi-award winning agency delivering exceptional results across social, paid, creative, and influencer."
    },
    {
      title: "Data-Driven",
      description: "93% of our clients increase their ROAS and revenue within the first 3 months of working together."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Social Shepherd Style */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
                <Award className="h-4 w-4 text-teal-600" />
                <span className="text-teal-700 text-sm font-semibold">Award-Winning Agency</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Social Media Creative & Management
              </h1>
              
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                We grow cult-like social communities with platform-specific social strategies
              </p>
              
              <p className="text-lg text-gray-500 mb-10">
                Are you lacking a social strategy that's driving your brand forward? Our team knows how to craft always-on and campaign activity that elevates your content & community across your social channels.
              </p>
              
              <Button 
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 text-lg"
                data-testid="button-lets-chat"
              >
                Let's chat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={teamWorkingImg} 
                alt="Creative team working together"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                data-testid="img-hero"
              />
              <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-black mb-1">7+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 py-16 border-y">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <div className="text-5xl font-black text-teal-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              How we help
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We specialise in Social, Paid, Creative, Influencer and work with fast-growth brands and household names across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Social Card */}
            <Card className="p-10 bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 hover-elevate group cursor-pointer">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Social</h3>
              <p className="text-lg text-gray-700 mb-6">
                We grow cult-like social communities with platform-specific social strategies
              </p>
              <ul className="space-y-3 mb-8">
                {services.social.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service.name}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-colors" data-testid="button-learn-social">
                Learn more about Social
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            {/* Paid Card */}
            <Card className="p-10 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover-elevate group cursor-pointer">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Paid</h3>
              <p className="text-lg text-gray-700 mb-6">
                We deliver performance-driven Paid Social and Paid Search campaigns
              </p>
              <ul className="space-y-3 mb-8">
                {services.paid.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service.name}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors" data-testid="button-learn-paid">
                Learn more about Paid
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            {/* Creative Card */}
            <Card className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 hover-elevate group cursor-pointer">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Creative</h3>
              <p className="text-lg text-gray-700 mb-6">
                Delivering outstanding Creative across Video, Design and Motion
              </p>
              <ul className="space-y-3 mb-8">
                {services.creative.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service.name}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors" data-testid="button-learn-creative">
                Learn more about Creative
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            {/* Influencer Card */}
            <Card className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover-elevate group cursor-pointer">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Influencer</h3>
              <p className="text-lg text-gray-700 mb-6">
                We deliver brand awareness and direct-response Influencer & Creator campaigns
              </p>
              <ul className="space-y-3 mb-8">
                {services.influencer.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service.name}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors" data-testid="button-learn-influencer">
                Learn more about Influencer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Social-first Strategies Section with Image */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Social-first strategies, for our social-first world
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We work with brands that are looking to lead their industry and thrive in this social-first world.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're not here to tick boxes but to push the boundaries, deliver significant brand growth and captivate your audience with social-first content. We focus on outcomes, not outputs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've designed our team to ensure we're ready for all challenges. It includes strategists, community & channel managers, content creators, videographers, designers, paid social experts, influencer managers and analytics leads.
              </p>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" data-testid="button-get-in-touch-1">
                Get In Touch To See How We Can Help You
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <img 
                src={productionImg} 
                alt="Behind the scenes video production"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                data-testid="img-production"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform-specific Content Section with Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={strategyImg} 
                alt="Social media strategy planning"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                data-testid="img-strategy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Platform-specific social content
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We know each algorithm inside and out. They're all different, and so they should be treated that way.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Creating content for specific platforms is vital for growth, rather than a cookie-cutter approach of re-posting everywhere. Our strategists and planners are built to deliver narratives that align with the individual platform algorithms.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team has both the technical and creative capabilities to ensure we're delivering content that adapts to algorithm changes.
              </p>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" data-testid="button-get-in-touch-2">
                Get In Touch To See How We Can Help You
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Approach Section with Image */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
                <Award className="h-5 w-5 text-teal-600" />
                <span className="text-teal-700 text-sm font-semibold">Best Large Social Agency</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                We take a data-driven approach to social
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Data-driven strategies combined with our creativity are exactly why we've been able to win awards such as Best Large Social Agency and deliver incredible results time and time again.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A lot of social agencies and brands create content for the sake of it without any reasoning behind what they're creating.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We dive deep into content analysis and why each piece is either performing or underperforming. This leads us to make adjustments to our content plans on a weekly and monthly and overarching strategy on a quarterly basis.
              </p>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" data-testid="button-get-in-touch-3">
                Get In Touch To See How We Can Help You
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <img 
                src={socialMediaPhoneImg} 
                alt="Social media content on mobile"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                data-testid="img-social-phone"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Content Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Checkout our latest Social content
            </h2>
            <p className="text-xl text-gray-600">
              Platform-specific video content that drives engagement and results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative group cursor-pointer" data-testid={`video-card-${i}`}>
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden hover-elevate">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                    <Play className="h-16 w-16 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-900">Sample Video {i}</p>
                  <p className="text-xs text-gray-500">Click for sound</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why OARC Digital?
            </h2>
            <p className="text-xl text-teal-50">
              We're not just another agency - we're your strategic growth partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover-elevate" data-testid={`why-card-${i}`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-teal-50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="bg-white text-teal-600 hover:bg-gray-100 border-0 px-8" data-testid="button-final-cta">
              Get In Touch To See How We Can Help You
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Don't be <span className="text-teal-600">sheepish</span> – let's talk
          </h2>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-12" data-testid="button-lets-chat-final">
            Let's chat
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
