import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Instagram, Linkedin, Facebook, ArrowRight, Play, Video, Palette, Users,
  Target, TrendingUp, BarChart, MessageCircle, Share2, Calendar, Bell,
  Zap, Globe, ThumbsUp, Star, Award, CheckCircle2, ChevronRight, Eye,
  Heart, Camera, Sparkles, Clock, Shield, Mail, Lightbulb
} from "lucide-react";
import { SiTiktok, SiYoutube, SiSnapchat, SiPinterest, SiX } from "react-icons/si";

// Animation component for scroll reveals
function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function SocialMediaCreativeManagement() {
  const [activeCategory, setActiveCategory] = useState<'social' | 'paid' | 'influencer'>('social');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    document.title = "Social Media Creative & Management | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Your competitive edge in a crowded feed. Full-service social media creative, paid advertising, and influencer marketing.");
    }
  }, []);

  const services = {
    social: [
      { name: "Organic Social Content", desc: "Daily posts, stories, reels optimized for engagement", icon: Palette },
      { name: "Community Management", desc: "Active engagement, 2-hour response time", icon: MessageCircle },
      { name: "Content Calendar", desc: "Strategic planning and scheduling", icon: Calendar },
      { name: "Social Media Video", desc: "Reels, TikToks, YouTube Shorts, livestreams", icon: Video },
      { name: "Post Design", desc: "Eye-catching graphics and carousels", icon: Palette },
      { name: "Social Analytics", desc: "Performance tracking and insights", icon: BarChart },
    ],
    paid: [
      { name: "Social Media Advertising", desc: "Paid campaigns across all platforms", icon: Target },
      { name: "Campaign Management", desc: "Strategy, execution, optimization", icon: TrendingUp },
      { name: "A/B Testing", desc: "Data-driven creative optimization", icon: BarChart },
      { name: "Audience Targeting", desc: "Precision targeting for maximum ROI", icon: Users },
      { name: "Retargeting Campaigns", desc: "Re-engage warm audiences", icon: Zap },
      { name: "Performance Reporting", desc: "Detailed analytics and insights", icon: Award },
    ],
    influencer: [
      { name: "Influencer Partnerships", desc: "Find and manage creator relationships", icon: Users },
      { name: "UGC Strategy", desc: "Authentic user-generated content", icon: Camera },
      { name: "Creator Management", desc: "Full campaign coordination", icon: Star },
      { name: "Brand Ambassador Programs", desc: "Long-term partnerships", icon: Heart },
      { name: "Campaign Tracking", desc: "Measure influencer ROI", icon: BarChart },
      { name: "Content Rights", desc: "Usage licensing and management", icon: Shield },
    ]
  };

  const platforms = [
    { name: "Instagram", icon: Instagram, color: "from-purple-600 to-pink-600", features: ["Reels", "Stories", "Shopping"] },
    { name: "TikTok", icon: SiTiktok, color: "from-cyan-500 to-blue-600", features: ["Viral trends", "TikTok Shop", "Live"] },
    { name: "LinkedIn", icon: Linkedin, color: "from-blue-700 to-blue-500", features: ["B2B", "Thought leadership", "Ads"] },
    { name: "Facebook", icon: Facebook, color: "from-blue-600 to-indigo-600", features: ["Groups", "Marketplace", "Video"] },
    { name: "YouTube", icon: SiYoutube, color: "from-red-600 to-red-500", features: ["Long-form", "Shorts", "Live streams"] },
    { name: "Twitter/X", icon: SiX, color: "from-gray-900 to-gray-700", features: ["Real-time", "Threads", "Spaces"] },
    { name: "Snapchat", icon: SiSnapchat, color: "from-yellow-400 to-yellow-500", features: ["AR lenses", "Spotlight", "Ads"] },
    { name: "Pinterest", icon: SiPinterest, color: "from-red-600 to-pink-600", features: ["Idea Pins", "Shopping", "SEO"] },
  ];

  const stats = [
    { value: "500+", label: "Brands Served" },
    { value: "20K+", label: "Projects Completed" },
    { value: "4.9/5", label: "Client Rating" },
    { value: "60%", label: "Faster Delivery" },
  ];

  return (
    <Layout>
      {/* HERO SECTION - Superside Style */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-8">
              <span className="text-blue-600 font-semibold text-sm">SOCIAL MEDIA CREATIVE</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Your <span className="italic text-blue-600">competitive edge</span><br />in a crowded feed
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Slice through the chaos with social media content that gets your brand noticed and drives the results you want.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="px-8" data-testid="button-book-demo">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" data-testid="button-view-work">
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronRight className="h-6 w-6 text-gray-400 rotate-90" />
        </motion.div>
      </motion.section>

      {/* SERVICES CAROUSEL - Horizontal Scroll */}
      <section className="py-20 bg-white overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" data-testid="services-carousel">
              {[
                { name: "Organic Social Media Content", icon: Share2, color: "from-blue-500 to-cyan-500" },
                { name: "Video Content", icon: Video, color: "from-purple-500 to-pink-500" },
                { name: "Social Media Post Design", icon: Palette, color: "from-orange-500 to-red-500" },
                { name: "Social Media Collateral", icon: Sparkles, color: "from-green-500 to-emerald-500" },
                { name: "Social Media Response Guide", icon: MessageCircle, color: "from-indigo-500 to-purple-500" },
                { name: "Social Media Concepts", icon: Lightbulb, color: "from-yellow-500 to-orange-500" },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-72 snap-center"
                  data-testid={`service-card-${i}`}
                >
                  <Card className="p-6 h-full hover-elevate">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${service.color} text-white mb-4`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* TRUSTED BY SECTION */}
      <section className="py-12 bg-gray-50">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">Trusted by 500+ of the world's biggest brands</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
              {["Meta", "Amazon", "Shopify", "Reddit", "Coinbase", "Uber"].map((brand, i) => (
                <div key={i} className="text-2xl font-bold text-gray-900">{brand}</div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* MAIN SERVICES - 3 Categories with Animations */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your shortcut to <span className="italic text-blue-600">scroll-stopping</span> content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Scaling your social ads and posts in-house? Easier said than done. Whether it's looming deadlines or limited resources, keeping up with the demand for compelling social media content is a challenge. That's where we come in.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-4 mb-12" data-testid="category-tabs">
              {[
                { id: 'social' as const, label: 'Social Media', icon: Share2 },
                { id: 'paid' as const, label: 'Paid Advertising', icon: Target },
                { id: 'influencer' as const, label: 'Influencer Marketing', icon: Users }
              ].map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setActiveCategory(cat.id)}
                  data-testid={`tab-${cat.id}`}
                >
                  <cat.icon className="mr-2 h-5 w-5" />
                  {cat.label}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Services Grid with Animation */}
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services[activeCategory].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`service-${activeCategory}-${i}`}
              >
                <Card className="p-8 h-full hover-elevate active-elevate-2 transition-all duration-300">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PLATFORM EXPERTISE - Slide Up Animation */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Expertise across <span className="italic text-blue-600">all social media platforms</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rely on our in-depth expertise, as well as the ability to version and scale any kind of social media content across your key channels.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`platform-${platform.name.toLowerCase()}`}
                >
                  <Card className="p-8 text-center hover-elevate">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${platform.color} text-white mb-6`}>
                      <platform.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                    <div className="space-y-2">
                      {platform.features.map((feature, j) => (
                        <div key={j} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI-ENHANCED SECTION - Parallax Effect */}
      <section className="py-32 bg-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sparkles className="h-96 w-96 text-blue-600/20" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
                  <span className="text-blue-600 font-semibold text-sm">AI-ENHANCED</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Powerful creative, <span className="italic text-blue-600">impressive</span> turnarounds
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  By equipping the top 1% of global talent with the latest AI tools, we're able to deliver high-performing creative up to 60% faster.
                </p>
                <Button size="lg" data-testid="button-ai-demo">
                  Learn About AI Design
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CASE STUDIES - Stagger Animation */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                These brands already stepped up their game <span className="italic text-blue-600">with OARC Digital</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { industry: "SaaS", brand: "Tech Platform", service: "Social Media Creative" },
              { industry: "E-commerce", brand: "Fashion Brand", service: "Ad Creative" },
              { industry: "Food & Beverages", brand: "Restaurant Chain", service: "Influencer Marketing" },
            ].map((study, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`case-study-${i}`}
                >
                  <Card className="p-8 hover-elevate h-full bg-gradient-to-br from-white to-blue-50">
                    <div className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg mb-6"></div>
                    <div className="text-xs font-semibold text-blue-600 mb-2 uppercase">{study.industry}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.brand}</h3>
                    <p className="text-gray-600">{study.service}</p>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Scale Animation */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to dominate your category?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let's create scroll-stopping content that drives real results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 border-0" data-testid="button-final-cta">
              Book Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-contact">
              Contact Sales
            </Button>
          </div>
        </motion.div>

        {/* Animated background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-10"
        >
          <Sparkles className="h-full w-full" />
        </motion.div>
      </section>
    </Layout>
  );
}
