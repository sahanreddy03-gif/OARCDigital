import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { 
  Instagram, Linkedin, Facebook, ArrowRight, Play, Video, Palette, Users,
  Target, TrendingUp, BarChart, MessageCircle, Share2, Calendar,
  Zap, ThumbsUp, Star, Award, CheckCircle2, ChevronRight, Eye,
  Heart, Camera, Sparkles, Shield, Lightbulb, Film, Layout as LayoutIcon
} from "lucide-react";
import { SiTiktok, SiYoutube, SiSnapchat, SiPinterest, SiX } from "react-icons/si";

// Smooth scroll reveal component
function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Animated word component with subtle 3D effect
function AnimatedWord({ children, delay = 0 }: { children: string; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="inline-block mx-1"
    >
      {children}
    </motion.span>
  );
}

export default function SocialMediaCreativeManagement() {
  const [activeCategory, setActiveCategory] = useState<'social' | 'paid' | 'creative' | 'influencer'>('social');
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    document.title = "Social Media Creative & Management | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-service social media creative, paid advertising, and influencer marketing. Professional strategies that drive real results.");
    }
  }, []);

  const services = {
    social: [
      { name: "Social Strategy", desc: "Platform-specific strategies that drive growth", icon: Lightbulb },
      { name: "Channel & Community Management", desc: "Active engagement and community building", icon: MessageCircle },
      { name: "Social-First Content Creation", desc: "Native content that performs", icon: Palette },
      { name: "Social Listening & Insights", desc: "Data-driven social intelligence", icon: BarChart },
      { name: "Content Calendar Management", desc: "Strategic planning and scheduling", icon: Calendar },
      { name: "Performance Analytics", desc: "Comprehensive reporting and optimization", icon: TrendingUp },
    ],
    paid: [
      { name: "Paid Social & Paid Search", desc: "Performance-driven campaigns", icon: Target },
      { name: "Full-Funnel Media Strategy", desc: "End-to-end campaign planning", icon: Zap },
      { name: "Planning, Buying, Creative", desc: "Complete campaign management", icon: Award },
      { name: "Analytics & Testing", desc: "Data-driven optimization", icon: BarChart },
      { name: "Feed Optimisation & Shopping", desc: "E-commerce advertising", icon: Share2 },
      { name: "Retargeting Campaigns", desc: "Precision audience re-engagement", icon: Eye },
    ],
    creative: [
      { name: "Organic & Paid Social Video", desc: "Scroll-stopping video content", icon: Video },
      { name: "UGC to High-Production", desc: "Authentic to premium content", icon: Camera },
      { name: "Creative Strategy & Art Direction", desc: "Brand-defining creative", icon: Sparkles },
      { name: "Motion Design & Animation", desc: "Dynamic motion graphics", icon: Film },
      { name: "Campaign Creative", desc: "Multi-platform campaign assets", icon: LayoutIcon },
      { name: "Graphics & Post Design", desc: "Eye-catching social graphics", icon: Palette },
    ],
    influencer: [
      { name: "End-to-End Campaign Management", desc: "Full influencer program management", icon: Users },
      { name: "Brand Awareness Objectives", desc: "Strategic brand partnerships", icon: Star },
      { name: "Direct-Response Campaigns", desc: "Performance-focused influencer marketing", icon: TrendingUp },
      { name: "Content Creators for UGC", desc: "Authentic creator content", icon: Camera },
      { name: "Wrap Reports & Analysis", desc: "Comprehensive campaign reporting", icon: BarChart },
      { name: "Rights & Licensing", desc: "Content rights management", icon: Shield },
    ]
  };

  const platforms = [
    { name: "Instagram", icon: Instagram, gradient: "from-purple-600 to-pink-600" },
    { name: "TikTok", icon: SiTiktok, gradient: "from-gray-900 to-pink-600" },
    { name: "YouTube", icon: SiYoutube, gradient: "from-red-600 to-red-700" },
    { name: "LinkedIn", icon: Linkedin, gradient: "from-blue-700 to-blue-800" },
    { name: "Facebook", icon: Facebook, gradient: "from-blue-600 to-blue-700" },
    { name: "Twitter/X", icon: SiX, gradient: "from-gray-800 to-gray-900" },
    { name: "Snapchat", icon: SiSnapchat, gradient: "from-yellow-400 to-yellow-500" },
    { name: "Pinterest", icon: SiPinterest, gradient: "from-red-600 to-red-700" },
  ];

  const stats = [
    { value: "500+", label: "Brands Served", icon: Star },
    { value: "2.5B+", label: "Impressions Delivered", icon: Eye },
    { value: "350%", label: "Avg. ROI Increase", icon: TrendingUp },
    { value: "4.9/5", label: "Client Satisfaction", icon: Heart },
  ];

  const categoryInfo = {
    social: {
      title: "Social",
      subtitle: "We grow cult-like social communities with platform-specific social strategies",
      color: "from-blue-600 to-indigo-600"
    },
    paid: {
      title: "Paid",
      subtitle: "We deliver performance-driven Paid Social and Paid Search campaigns",
      color: "from-purple-600 to-pink-600"
    },
    creative: {
      title: "Creative",
      subtitle: "Delivering outstanding Creative across Video, Design and Motion",
      color: "from-orange-600 to-red-600"
    },
    influencer: {
      title: "Influencer",
      subtitle: "We deliver brand awareness and direct-response Influencer & Creator campaigns",
      color: "from-green-600 to-emerald-600"
    }
  };

  return (
    <Layout>
      {/* Hero Section with Subtle Animation */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
        {/* Subtle animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8"
          >
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-white/90 text-sm font-medium">Social Media Excellence</span>
          </motion.div>

          {/* Title with word animation */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <div className="text-white">
              {["Your", "Competitive", "Edge"].map((word, i) => (
                <AnimatedWord key={i} delay={i * 0.1}>
                  {word}
                </AnimatedWord>
              ))}
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {["in", "a", "Crowded", "Feed"].map((word, i) => (
                <AnimatedWord key={i} delay={0.3 + i * 0.1}>
                  {word}
                </AnimatedWord>
              ))}
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light"
          >
            Full-service social media creative, paid advertising, and influencer marketing
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="px-8 text-lg"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="px-8 text-lg bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
              data-testid="button-view-work"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={!shouldReduceMotion ? { y: [0, 10, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronRight className="h-6 w-6 text-white/40 rotate-90" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                  className="text-center"
                  data-testid={`stat-${i}`}
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Tab Based */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                How We Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialise in Social, Paid, Creative, Influencer and work with fast-growth brands across the globe
              </p>
            </div>
          </ScrollReveal>

          <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as any)} className="w-full">
            <ScrollReveal delay={0.2}>
              <TabsList className="grid w-full grid-cols-4 mb-12 h-auto p-1 bg-white shadow-sm">
                <TabsTrigger value="social" className="text-base py-4" data-testid="tab-social">
                  Social
                </TabsTrigger>
                <TabsTrigger value="paid" className="text-base py-4" data-testid="tab-paid">
                  Paid
                </TabsTrigger>
                <TabsTrigger value="creative" className="text-base py-4" data-testid="tab-creative">
                  Creative
                </TabsTrigger>
                <TabsTrigger value="influencer" className="text-base py-4" data-testid="tab-influencer">
                  Influencer
                </TabsTrigger>
              </TabsList>
            </ScrollReveal>

            {Object.entries(services).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-r ${categoryInfo[category as keyof typeof categoryInfo].color} text-white p-8 md:p-12 rounded-2xl mb-8`}
                >
                  <h3 className="text-3xl md:text-5xl font-black mb-4">
                    {categoryInfo[category as keyof typeof categoryInfo].title}
                  </h3>
                  <p className="text-xl text-white/90 max-w-3xl">
                    {categoryInfo[category as keyof typeof categoryInfo].subtitle}
                  </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      data-testid={`service-${category}-${i}`}
                    >
                      <Card className="p-6 h-full hover-elevate group cursor-pointer">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                            <service.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Category CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 text-center"
                >
                  <Button 
                    size="lg"
                    variant="outline"
                    className="group"
                    data-testid={`button-learn-more-${category}`}
                  >
                    Learn More About {categoryInfo[category as keyof typeof categoryInfo].title}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Platform Coverage */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                Platform Expertise
              </h2>
              <p className="text-xl text-gray-600">
                We dominate across all major social platforms
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={!shouldReduceMotion ? { scale: 1.05, y: -5 } : {}}
                  data-testid={`platform-${i}`}
                >
                  <Card className="p-8 text-center hover-elevate group cursor-pointer">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
                      <platform.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{platform.name}</h3>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Ready to Dominate Social?
            </h2>
            <p className="text-2xl text-white/90 mb-12">
              Let's create content that stops the scroll and drives real results
            </p>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-8 bg-white text-blue-600 hover:bg-gray-100 border-0"
              data-testid="button-final-cta"
            >
              <Sparkles className="mr-2 h-6 w-6" />
              Start Your Campaign
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
}
