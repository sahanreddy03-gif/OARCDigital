import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion, useInView, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Zap, BarChart3, Wand2, Network,
  Instagram, Sparkles, Brain, Rocket, TrendingUp, Play, Eye,
  Heart, MessageCircle, Share2, Palette, Camera, Video, Layers,
  Target, Users, LineChart, MousePointer2
} from "lucide-react";
import { SiTiktok, SiYoutube, SiX, SiThreads, SiLinkedin, SiMeta } from "react-icons/si";

import awardTeamImg from "@assets/stock_images/award_ceremony_busin_81e5ff09.jpg";
import largeTeamImg from "@assets/stock_images/large_company_team_p_32054de0.jpg";

import brandLogo1 from "@assets/stock_images/corporate_brand_logo_7fa71d75.jpg";
import brandLogo2 from "@assets/stock_images/corporate_brand_logo_3ecd3c3a.jpg";
import brandLogo3 from "@assets/stock_images/corporate_brand_logo_53ee2baf.jpg";
import brandLogo4 from "@assets/stock_images/corporate_brand_logo_36956200.jpg";
import brandLogo5 from "@assets/stock_images/corporate_brand_logo_fa7a9043.jpg";
import brandLogo6 from "@assets/stock_images/corporate_brand_logo_45511c03.jpg";

function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      motionValue.set(value);
    } else if (prefersReducedMotion || isInView) {
      setDisplayValue(value);
    }
  }, [isInView, value, motionValue, prefersReducedMotion]);
  
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);
  
  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

function MagneticButton({ children, className, ...props }: React.ComponentProps<typeof motion.button>) {
  const ref = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    x.set(deltaX);
    y.set(deltaY);
  }, [prefersReducedMotion, x, y]);
  
  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);
  
  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

function FloatingParticle({ delay, duration, color }: { delay: number; duration: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full motion-reduce:hidden"
      style={{
        width: Math.random() * 8 + 4,
        height: Math.random() * 8 + 4,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        background: color,
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function CreativeFlowDiagram({ steps, gradient }: { steps: { icon: React.ReactNode; label: string }[]; gradient: string }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <motion.div 
            className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center shadow-lg`}
            initial={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }}
            whileInView={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={prefersReducedMotion ? {} : { delay: idx * 0.15 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
          >
            {step.icon}
          </motion.div>
          <span className="text-xs font-semibold text-white/80 hidden sm:block">{step.label}</span>
          {idx < steps.length - 1 && (
            <motion.div
              className="w-6 h-0.5 bg-white/30"
              initial={prefersReducedMotion ? {} : { scaleX: 0 }}
              whileInView={prefersReducedMotion ? {} : { scaleX: 1 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? {} : { delay: idx * 0.15 + 0.1 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function CreativePortfolioCard({ image, title, platform, metrics, color, delay }: {
  image: string;
  title: string;
  platform: string;
  metrics: { views: string; engagement: string };
  color: string;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={prefersReducedMotion ? {} : { delay }}
      whileHover={prefersReducedMotion ? {} : { y: -8 }}
    >
      <div className={`absolute inset-0 ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity motion-reduce:hidden`} />
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
        <div className="aspect-[4/5] relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${color}`}>{platform}</span>
              </div>
              <p className="text-white font-bold text-sm">{title}</p>
              <div className="flex items-center gap-4 mt-2 text-white/80 text-xs">
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {metrics.views}</span>
                <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {metrics.engagement}</span>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-5 h-5 text-white fill-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialMediaCreativeManagement() {
  const prefersReducedMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);
  
  const fadeIn = prefersReducedMotion ? {} : { opacity: 0, y: 20 };
  const fadeInVisible = prefersReducedMotion ? {} : { opacity: 1, y: 0 };

  const services = [
    {
      title: "AI-Powered Social",
      icon: Brain,
      description: "Our OARC Intelligence Engine analyzes millions of data points to craft strategies that outperform human intuition by 340%.",
      points: [
        "Neural content optimization",
        "Predictive engagement mapping",
        "AI-driven community growth",
        "Real-time sentiment orchestration"
      ],
      learnMore: "Explore AI Social",
      link: "/services/social",
      gradient: "bg-gradient-to-br from-[#7B2FF7] via-[#9D4EDD] to-[#C77DFF]",
      glowColor: "shadow-[0_20px_50px_rgba(123,47,247,0.4)]",
      accentColor: "#7B2FF7",
      flowSteps: [
        { icon: <Brain className="w-5 h-5 text-white" />, label: "Analyze" },
        { icon: <Sparkles className="w-5 h-5 text-white" />, label: "Create" },
        { icon: <TrendingUp className="w-5 h-5 text-white" />, label: "Grow" },
      ]
    },
    {
      title: "Revenue Ads",
      icon: TrendingUp,
      description: "Malta's only agency with direct API access to Meta and Google's ML layers. We engineer revenue systems, not just ads.",
      points: [
        "Algorithmic bid optimization",
        "Dynamic creative sequencing",
        "Cross-platform attribution",
        "Automated ROAS scaling"
      ],
      learnMore: "Explore Revenue Ads",
      link: "/services/paid-advertising",
      gradient: "bg-gradient-to-br from-[#FF6B53] via-[#FF7A5C] to-[#FF9F7F]",
      glowColor: "shadow-[0_20px_50px_rgba(255,107,83,0.4)]",
      accentColor: "#FF6B53",
      flowSteps: [
        { icon: <Target className="w-5 h-5 text-white" />, label: "Target" },
        { icon: <Zap className="w-5 h-5 text-white" />, label: "Optimize" },
        { icon: <LineChart className="w-5 h-5 text-white" />, label: "Scale" },
      ]
    },
    {
      title: "Creative Lab",
      icon: Wand2,
      description: "Where AI meets artistry. Our Creative Lab fuses generative AI with human direction to produce thumb-stopping content.",
      points: [
        "AI-assisted video production",
        "Generative design systems",
        "Rapid creative iteration",
        "Performance-tested visuals"
      ],
      learnMore: "Enter the Lab",
      link: "/services/creative",
      gradient: "bg-gradient-to-br from-[#FF6B9D] via-[#FF8FAB] to-[#FFB3C1]",
      glowColor: "shadow-[0_20px_50px_rgba(255,107,157,0.4)]",
      accentColor: "#FF6B9D",
      flowSteps: [
        { icon: <Palette className="w-5 h-5 text-white" />, label: "Design" },
        { icon: <Wand2 className="w-5 h-5 text-white" />, label: "AI Magic" },
        { icon: <Video className="w-5 h-5 text-white" />, label: "Produce" },
      ]
    },
    {
      title: "Creator Network",
      icon: Network,
      description: "Access 2,000+ vetted creators across EMEA. AI-powered affinity scoring matches your brand with authentic voices.",
      points: [
        "AI creator-brand matching",
        "Performance-based partnerships",
        "Multi-platform amplification",
        "Real-time campaign analytics"
      ],
      learnMore: "Meet the Network",
      link: "/services/influencer-marketing",
      gradient: "bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#818CF8]",
      glowColor: "shadow-[0_20px_50px_rgba(79,70,229,0.4)]",
      accentColor: "#4F46E5",
      flowSteps: [
        { icon: <Users className="w-5 h-5 text-white" />, label: "Match" },
        { icon: <MessageCircle className="w-5 h-5 text-white" />, label: "Create" },
        { icon: <Share2 className="w-5 h-5 text-white" />, label: "Amplify" },
      ]
    }
  ];

  const platformIcons = [
    { Icon: SiMeta, label: "Meta Ads", color: "#1877F2" },
    { Icon: Instagram, label: "Instagram", color: "#E4405F" },
    { Icon: SiTiktok, label: "TikTok", color: "#000000" },
    { Icon: SiYoutube, label: "YouTube", color: "#FF0000" },
    { Icon: SiLinkedin, label: "LinkedIn", color: "#0A66C2" },
    { Icon: SiX, label: "X", color: "#000000" },
    { Icon: SiThreads, label: "Threads", color: "#000000" }
  ];

  const brandLogos = [
    brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo6
  ];

  const portfolioItems = [
    { image: awardTeamImg, title: "Award-Winning Campaign", platform: "Instagram", metrics: { views: "2.4M", engagement: "12.3%" }, color: "bg-gradient-to-br from-[#E4405F] to-[#833AB4]" },
    { image: largeTeamImg, title: "Brand Launch Video", platform: "TikTok", metrics: { views: "5.1M", engagement: "18.7%" }, color: "bg-gradient-to-br from-[#000000] to-[#25F4EE]" },
    { image: awardTeamImg, title: "Product Showcase", platform: "YouTube", metrics: { views: "890K", engagement: "8.4%" }, color: "bg-gradient-to-br from-[#FF0000] to-[#FF4444]" },
    { image: largeTeamImg, title: "Social Series", platform: "LinkedIn", metrics: { views: "340K", engagement: "15.2%" }, color: "bg-gradient-to-br from-[#0A66C2] to-[#0077B5]" },
  ];

  const useCases = [
    {
      id: "ecommerce",
      title: "E-commerce Disruptors",
      description: "We've scaled 47+ e-commerce brands from €10K to €1M+ monthly revenue.",
      points: ["Predictive audience discovery", "Dynamic product creative", "Automated scaling"],
      color: "from-[#FF6B9D] to-[#C77DFF]"
    },
    {
      id: "dtc",
      title: "DTC Challengers",
      description: "Our OARC Launch Protocol gets brands to profitability in 90 days.",
      points: ["90-day launch framework", "Founder-led content", "CAC optimization"],
      color: "from-[#FF6B53] to-[#FF9F7F]"
    },
    {
      id: "saas",
      title: "B2B SaaS",
      description: "Turn complex products into compelling stories. €50M+ pipeline generated.",
      points: ["LinkedIn thought leadership", "Product demos", "MQL optimization"],
      color: "from-[#4F46E5] to-[#818CF8]"
    },
    {
      id: "lifestyle",
      title: "Premium Lifestyle",
      description: "Aspirational brand narratives that command premium pricing.",
      points: ["Luxury positioning", "Editorial content", "Influencer curation"],
      color: "from-[#7B2FF7] to-[#C77DFF]"
    },
    {
      id: "finance",
      title: "FinTech & iGaming",
      description: "Malta's financial hub demands compliance expertise. We deliver.",
      points: ["Regulatory-compliant creative", "Risk-managed targeting", "Licensed expansion"],
      color: "from-[#10B981] to-[#34D399]"
    },
    {
      id: "enterprise",
      title: "Global Enterprise",
      description: "Unified brand experiences across 30+ markets worldwide.",
      points: ["Multi-market coordination", "AI localization", "Global dashboards"],
      color: "from-[#F59E0B] to-[#FBBF24]"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="AI-Powered Marketing Services | Revenue, Creative & Growth | OARC Digital Malta"
        description="Malta's leading AI marketing agency. We engineer revenue systems, not just campaigns. Explore our AI-powered social, creative lab, and creator network services."
        canonicalUrl="https://oarcdigital.com/services/how-we-help"
        ogType="article"
        structuredData={createServiceSchema(
          "AI-Powered Marketing Services",
          "OARC Digital delivers AI-engineered marketing solutions including revenue automation, creative production, and influencer partnerships from Malta.",
          "AI Marketing Services"
        )}
        schemaId="service-marketing-overview"
      />

      {/* HERO - Vibrant Gradient with Creative Elements */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53]">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 motion-reduce:hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          {[...Array(20)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.2} 
              duration={3 + Math.random() * 2}
              color={['#FFD700', '#00FF88', '#00D4FF', '#FF6B9D', '#FFFFFF'][Math.floor(Math.random() * 5)]}
            />
          ))}
        </div>
        
        {/* Decorative Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 blur-3xl opacity-60 motion-reduce:hidden"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 blur-3xl opacity-50 motion-reduce:hidden"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/30 blur-2xl motion-reduce:hidden"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={fadeIn}
            animate={fadeInVisible}
            transition={prefersReducedMotion ? {} : { duration: 0.6 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold text-white mb-8 border border-white/30"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              Malta's #1 AI Creative Agency
            </motion.span>
          </motion.div>
          
          <motion.h1 
            initial={fadeIn}
            animate={fadeInVisible}
            transition={prefersReducedMotion ? {} : { delay: 0.15, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.95]"
          >
            <span className="block">Creative</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-cyan-300">
              That Sells
            </span>
          </motion.h1>
          
          <motion.p 
            initial={fadeIn}
            animate={fadeInVisible}
            transition={prefersReducedMotion ? {} : { delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We don't just make things look pretty. We engineer content that drives 
            <span className="font-bold text-yellow-300"> 340% more engagement</span> and 
            <span className="font-bold text-cyan-300"> 5x ROAS</span>.
          </motion.p>
          
          <motion.div 
            initial={fadeIn}
            animate={fadeInVisible}
            transition={prefersReducedMotion ? {} : { delay: 0.45, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <MagneticButton
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-white text-gray-900 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-[0_25px_50px_rgba(255,255,255,0.3)] transition-all"
                data-testid="button-hero-cta"
              >
                Start Creating
                <div className="w-10 h-10 bg-gradient-to-br from-[#7B2FF7] to-[#FF6B9D] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </MagneticButton>
            </Link>
            <Link href="#portfolio">
              <motion.button
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white rounded-full px-8 py-4 text-lg font-bold hover:bg-white/20 transition-all"
                data-testid="button-view-work"
              >
                <Play className="w-5 h-5 fill-white" />
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Platform Icons Row */}
          <motion.div 
            initial={fadeIn}
            animate={fadeInVisible}
            transition={prefersReducedMotion ? {} : { delay: 0.6 }}
            className="mt-16 flex justify-center items-center gap-4 md:gap-8"
          >
            {platformIcons.map((platform, idx) => (
              <motion.div 
                key={idx}
                className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/30 transition-all cursor-pointer"
                whileHover={prefersReducedMotion ? {} : { scale: 1.2, y: -5 }}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? {} : { delay: 0.7 + idx * 0.05 }}
                title={platform.label}
              >
                <platform.Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-reduce:hidden"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 340, suffix: "%", label: "More Engagement" },
              { value: 5, suffix: "x", label: "Average ROAS" },
              { value: 200, suffix: "+", label: "Brands Scaled" },
              { prefix: "€", value: 50, suffix: "M+", label: "Revenue Generated" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: idx * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53]">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS - Colorful Gradient Cards with Diagrams */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 motion-reduce:hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7B2FF7]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B9D]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7B2FF7]/20 to-[#FF6B9D]/20 rounded-full text-sm font-bold text-white/80 mb-6 border border-white/10">
              <Layers className="w-4 h-4" />
              Our Services
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Four Pillars of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53]">
                Creative Growth
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: idx * 0.15, duration: 0.5 }}
                whileHover={prefersReducedMotion ? {} : { y: -8 }}
                className={`relative rounded-3xl p-8 md:p-10 overflow-hidden ${service.gradient} ${service.glowColor} transition-all duration-300`}
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl motion-reduce:hidden" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20"
                    whileHover={prefersReducedMotion ? {} : { rotate: 10, scale: 1.1 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {service.points.map((point, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center gap-3"
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                        whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={prefersReducedMotion ? {} : { delay: idx * 0.1 + i * 0.05 }}
                      >
                        <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-white/90">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* AI Flow Diagram */}
                  <CreativeFlowDiagram steps={service.flowSteps} gradient="bg-white/20" />

                  {/* CTA Button */}
                  <Link href={service.link}>
                    <motion.a
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-white text-gray-900 rounded-full py-4 font-bold hover:shadow-xl transition-all"
                      data-testid={`button-learn-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.learnMore}
                      <ArrowRight className="h-5 w-5" />
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 motion-reduce:hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#7B2FF7]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF6B9D]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7B2FF7]/10 to-[#FF6B9D]/10 rounded-full text-sm font-bold text-gray-900 mb-6 border border-gray-200">
              <Camera className="w-4 h-4" />
              Our Work
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              See What We <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53]">
                Create
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real campaigns. Real results. Content that stops thumbs and starts conversations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioItems.map((item, idx) => (
              <CreativePortfolioCard key={idx} {...item} delay={idx * 0.1} />
            ))}
          </div>
          
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/our-work">
              <motion.button
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B2FF7] to-[#FF6B9D] text-white rounded-full px-8 py-4 font-bold shadow-xl hover:shadow-2xl transition-all"
                data-testid="button-view-all-work"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Platform Mastery */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Platform Mastery
            </h2>
            <p className="text-white/80 text-lg">
              Direct API integrations and certified partnerships
            </p>
          </motion.div>
          
          <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap">
            {platformIcons.map((platform, idx) => (
              <motion.div 
                key={idx}
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: idx * 0.05 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.3, y: -8 }}
                className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                data-testid={`icon-platform-${idx}`}
                title={platform.label}
              >
                <platform.Icon 
                  className="h-8 w-8 md:h-10 md:w-10" 
                  style={{ color: platform.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Colorful Cards */}
      <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7B2FF7]/10 to-[#FF6B9D]/10 rounded-full text-sm font-bold text-gray-900 mb-6 border border-gray-200">
              <Target className="w-4 h-4" />
              Industries We Transform
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#FF6B53]">Category Leaders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={useCase.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: idx * 0.08 }}
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group" 
                data-testid={`use-case-${useCase.id}`}
              >
                <div className={`h-2 w-20 bg-gradient-to-r ${useCase.color} rounded-full mb-6 group-hover:w-full transition-all duration-500`} />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.color}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.p 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center text-lg text-gray-600 mb-8"
          >
            Trusted by brands scaling from startup to enterprise
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {brandLogos.map((logo, i) => (
              <motion.div 
                key={i}
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: i * 0.05 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                className="h-16 w-24 flex items-center justify-center" 
                data-testid={`brand-${i + 1}`}
              >
                <img 
                  src={logo}
                  alt={`Brand ${i + 1}`}
                  className="max-h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Vibrant Gradient */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53] relative overflow-hidden">
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl motion-reduce:hidden"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-300/30 rounded-full blur-3xl motion-reduce:hidden"
          animate={{ scale: [1.3, 1, 1.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold text-white mb-8 border border-white/30">
              <Rocket className="w-4 h-4" />
              Ready to Scale?
            </span>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              Let's Create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300">
                Something Amazing
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Book a strategy call with our Malta-based team. We'll show you exactly how OARC can accelerate your creative and revenue.
            </p>
            
            <Link href="/contact">
              <MagneticButton
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-white text-gray-900 rounded-full px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-[0_25px_50px_rgba(255,255,255,0.3)] transition-all"
                data-testid="button-final-cta"
              >
                Book Strategy Call
                <div className="w-12 h-12 bg-gradient-to-br from-[#7B2FF7] to-[#FF6B9D] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
