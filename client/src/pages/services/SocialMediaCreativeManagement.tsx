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
      title: "AI-Amplified Social",
      icon: Brain,
      description: "Fusing AI with human dynamics. Our OARC Intelligence Engine crafts strategies that outperform traditional approaches—powered by our tested MVPs.",
      points: [
        "Neural content optimization",
        "Predictive engagement mapping",
        "AI-driven community growth"
      ],
      caseStudy: "See how we grew an e-commerce brand 2.4x →",
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
      description: "In a saturated ad landscape, scaling ROAS is tough. Malta's only agency with direct API access to Meta and Google's ML layers—powered by our proven MVPs.",
      points: [
        "Algorithmic bid optimization",
        "Dynamic creative sequencing",
        "Automated ROAS scaling"
      ],
      caseStudy: "See how our MVP boosted ROAS for FinTech →",
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
      description: "Where AI meets artistry. Our Creative Lab fuses generative AI with human direction to produce thumb-stopping content—powered by tested MVPs.",
      points: [
        "AI-assisted video production",
        "Generative design systems",
        "Performance-tested visuals"
      ],
      caseStudy: "View our award-winning DTC campaign →",
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
      description: "Access 2,000+ vetted creators across EMEA. AI-powered affinity scoring—built on our tested MVPs—matches your brand with authentic voices.",
      points: [
        "AI creator-brand matching",
        "Performance-based partnerships",
        "Multi-platform amplification"
      ],
      caseStudy: "How we scaled lifestyle brand reach 5x →",
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
    { image: awardTeamImg, title: "MVP-Driven E-commerce Campaign", platform: "Instagram", metrics: { views: "2.4M", engagement: "12.3%" }, color: "bg-gradient-to-br from-[#E4405F] to-[#833AB4]" },
    { image: largeTeamImg, title: "MVP-Powered Brand Launch", platform: "TikTok", metrics: { views: "5.1M", engagement: "18.7%" }, color: "bg-gradient-to-br from-[#000000] to-[#25F4EE]" },
    { image: awardTeamImg, title: "AI-MVP Product Showcase", platform: "YouTube", metrics: { views: "890K", engagement: "8.4%" }, color: "bg-gradient-to-br from-[#FF0000] to-[#FF4444]" },
    { image: largeTeamImg, title: "MVP-Tested Thought Leadership", platform: "LinkedIn", metrics: { views: "340K", engagement: "15.2%" }, color: "bg-gradient-to-br from-[#0A66C2] to-[#0077B5]" },
  ];

  const useCases = [
    {
      id: "ecommerce",
      title: "E-commerce Disruptors",
      description: "We've scaled 47+ e-commerce brands from €10K to €1M+ monthly revenue.",
      points: ["Predictive audience discovery", "Dynamic product creative", "Malta Edge: EU-compliant scaling"],
      color: "from-[#FF6B9D] to-[#C77DFF]"
    },
    {
      id: "dtc",
      title: "DTC Challengers",
      description: "Our OARC Launch Protocol gets brands to profitability in 90 days.",
      points: ["90-day launch framework", "Founder-led content", "Malta Edge: Access to EU markets"],
      color: "from-[#FF6B53] to-[#FF9F7F]"
    },
    {
      id: "saas",
      title: "B2B SaaS",
      description: "Turn complex products into compelling stories. Based on client averages.",
      points: ["LinkedIn thought leadership", "Product demos", "Malta Edge: Multilingual campaigns"],
      color: "from-[#4F46E5] to-[#818CF8]"
    },
    {
      id: "lifestyle",
      title: "Premium Lifestyle",
      description: "Aspirational brand narratives that command premium pricing.",
      points: ["Luxury positioning", "Editorial content", "Malta Edge: Mediterranean aesthetics"],
      color: "from-[#7B2FF7] to-[#C77DFF]"
    },
    {
      id: "finance",
      title: "FinTech & iGaming",
      description: "Malta's financial hub demands compliance expertise. We deliver.",
      points: ["Regulatory-compliant creative", "Risk-managed targeting", "Malta Edge: MGA/MFSA expertise"],
      color: "from-[#10B981] to-[#34D399]"
    },
    {
      id: "enterprise",
      title: "Global Enterprise",
      description: "Unified brand experiences across 30+ markets worldwide.",
      points: ["Multi-market coordination", "AI localization", "Malta Edge: EU HQ advantage"],
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

      {/* HERO SECTION 1: ANIMATIONS ABOVE THE FOLD */}
      {/* Mobile: Content aligned to TOP | Desktop: Vertically centered */}
      <section className="relative min-h-screen flex flex-col justify-start md:justify-center overflow-hidden bg-[#FDFCFA]">
        {/* Premium Light Background with Subtle Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle Video Background with light overlay */}
        <div className="absolute inset-0 motion-reduce:hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-15"
            style={{ filter: 'grayscale(30%) brightness(1.2)' }}
          >
            <source src="https://videos.pexels.com/video-files/856106/856106-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFA]/80 via-[#FDFCFA]/60 to-[#FDFCFA]/95" />
        </div>

        {/* TARGET CIRCLE with SVG ICONS - Positioned for new layout */}
        {/* Mobile: Top-right beside title (slightly enlarged) | Desktop: Right side, vertically centered */}
        <div className="absolute top-1 right-1 sm:top-3 sm:right-3 md:top-1/2 md:right-12 lg:right-20 md:-translate-y-1/2 w-[136px] h-[136px] sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 motion-reduce:hidden pointer-events-none z-10">
          <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B9D"/>
                <stop offset="100%" stopColor="#FF8FAB"/>
              </linearGradient>
              <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="shadowFilter">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2"/>
              </filter>
            </defs>
            
            {/* Pink Target Center with Crosshair */}
            <circle cx="150" cy="150" r="28" fill="url(#centerGrad)" filter="url(#glow1)">
              <animate attributeName="r" values="26;30;26" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="150" cy="150" r="22" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
            
            {/* Crosshair Lines - Dashed, extending outward */}
            <line x1="150" y1="100" x2="150" y2="125" stroke="rgba(255,143,171,0.7)" strokeWidth="2" strokeDasharray="4 3">
              <animate attributeName="stroke-dashoffset" from="0" to="7" dur="0.8s" repeatCount="indefinite"/>
            </line>
            <line x1="150" y1="175" x2="150" y2="200" stroke="rgba(255,143,171,0.7)" strokeWidth="2" strokeDasharray="4 3">
              <animate attributeName="stroke-dashoffset" from="0" to="7" dur="0.8s" repeatCount="indefinite"/>
            </line>
            <line x1="100" y1="150" x2="125" y2="150" stroke="rgba(255,143,171,0.7)" strokeWidth="2" strokeDasharray="4 3">
              <animate attributeName="stroke-dashoffset" from="0" to="7" dur="0.8s" repeatCount="indefinite"/>
            </line>
            <line x1="175" y1="150" x2="200" y2="150" stroke="rgba(255,143,171,0.7)" strokeWidth="2" strokeDasharray="4 3">
              <animate attributeName="stroke-dashoffset" from="0" to="7" dur="0.8s" repeatCount="indefinite"/>
            </line>
            
            {/* ROTATING ICONS GROUP */}
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="12s" repeatCount="indefinite"/>
              
              {/* Pink Speech Bubble with Heart - Top */}
              <g transform="translate(125, 35)" filter="url(#shadowFilter)">
                <rect x="0" y="5" width="50" height="38" rx="12" fill="#FF6B9D"/>
                <polygon points="18,43 25,52 32,43" fill="#FF6B9D"/>
                <path d="M25 32 Q 17 26 14 20 Q 11 14 17 10 Q 23 6 25 14 Q 27 6 33 10 Q 39 14 36 20 Q 33 26 25 32" fill="white"/>
                <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="-360 25 25" dur="12s" repeatCount="indefinite" additive="sum"/>
              </g>
              
              {/* Purple Speech Bubble with Dots - KEEP THIS ONE - Bottom Left */}
              <g transform="translate(50, 195)" filter="url(#shadowFilter)">
                <rect x="0" y="0" width="44" height="32" rx="9" fill="#A855F7"/>
                <polygon points="30,32 35,42 40,32" fill="#A855F7"/>
                <circle cx="12" cy="16" r="4" fill="white"/>
                <circle cx="22" cy="16" r="4" fill="white"/>
                <circle cx="32" cy="16" r="4" fill="white"/>
                <animateTransform attributeName="transform" type="rotate" from="0 22 18" to="-360 22 18" dur="12s" repeatCount="indefinite" additive="sum"/>
              </g>
              
              {/* Blue Share Arrow Speech Bubble - Right */}
              <g transform="translate(220, 120)" filter="url(#shadowFilter)">
                <rect x="0" y="5" width="44" height="34" rx="10" fill="#3B82F6"/>
                <polygon points="15,39 20,48 25,39" fill="#3B82F6"/>
                <path d="M30 15 L20 22 L20 18 L12 18 L12 28 L20 28 L20 24 L30 31 L30 15" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                <animateTransform attributeName="transform" type="rotate" from="0 22 22" to="-360 22 22" dur="12s" repeatCount="indefinite" additive="sum"/>
              </g>
              
              {/* Yellow Winking Smiley - Bottom Right */}
              <g transform="translate(180, 215)" filter="url(#shadowFilter)">
                <circle cx="22" cy="22" r="22" fill="#FBBF24"/>
                <circle cx="14" cy="18" r="3" fill="#1F2937"/>
                <line x1="26" y1="16" x2="32" y2="20" stroke="#1F2937" strokeWidth="3" strokeLinecap="round"/>
                <path d="M12 28 Q 22 36 32 28" fill="none" stroke="#1F2937" strokeWidth="3" strokeLinecap="round"/>
                <animateTransform attributeName="transform" type="rotate" from="0 22 22" to="-360 22 22" dur="12s" repeatCount="indefinite" additive="sum"/>
              </g>
              
              {/* Yellow Hashtag Speech Bubble - Left */}
              <g transform="translate(30, 115)" filter="url(#shadowFilter)">
                <rect x="0" y="5" width="48" height="36" rx="10" fill="#FBBF24"/>
                <polygon points="32,41 36,50 40,41" fill="#FBBF24"/>
                <text x="24" y="30" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">#</text>
                <animateTransform attributeName="transform" type="rotate" from="0 24 23" to="-360 24 23" dur="12s" repeatCount="indefinite" additive="sum"/>
              </g>
              
              {/* Decorative Orange Circle - Top Right */}
              <g transform="translate(200, 60)">
                <circle cx="15" cy="15" r="15" fill="#FB923C">
                  <animate attributeName="r" values="14;17;14" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <animateTransform attributeName="transform" type="rotate" from="0 15 15" to="-360 15 15" dur="12s" repeatCount="indefinite" additive="sum"/>
              </g>
              
              {/* Small Yellow Circle - Top */}
              <g transform="translate(85, 50)">
                <circle cx="10" cy="10" r="10" fill="#FDE047">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <animateTransform attributeName="transform" type="rotate" from="0 10 10" to="-360 10 10" dur="12s" repeatCount="indefinite" additive="sum"/>
              </g>
              
              {/* Small Pink Circle - Bottom Center */}
              <g transform="translate(130, 240)">
                <circle cx="10" cy="10" r="10" fill="#FF6B9D">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                </circle>
                <animateTransform attributeName="transform" type="rotate" from="0 10 10" to="-360 10 10" dur="12s" repeatCount="indefinite" additive="sum"/>
              </g>
              
              {/* Small Pink Dot - Far Right */}
              <g transform="translate(265, 165)">
                <circle cx="6" cy="6" r="6" fill="#F472B6">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
                </circle>
              </g>
            </g>
          </svg>
        </div>

        {/* Animated Social Nodes SVG Overlay - Full Screen */}
        <div className="absolute inset-0 motion-reduce:hidden pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B53"/>
                <stop offset="50%" stopColor="#FF6B9D"/>
                <stop offset="100%" stopColor="#7B2FF7"/>
              </linearGradient>
              <linearGradient id="nodeGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF"/>
                <stop offset="50%" stopColor="#7B2FF7"/>
                <stop offset="100%" stopColor="#FF6B9D"/>
              </linearGradient>
            </defs>
            
            {/* Snake Line Animation 1 - Left Side */}
            <motion.path 
              d="M100,200 Q250,100 400,250 T700,180 T950,350" 
              stroke="url(#nodeGradient)" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Snake Line Animation 2 - Right Side (RESTORED) */}
            <motion.path 
              d="M1000,600 Q1150,450 1300,550 T1550,400 T1800,500" 
              stroke="url(#nodeGradient2)" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Snake Line Animation 3 - Bottom */}
            <motion.path 
              d="M200,800 Q400,700 600,850 T1000,750 T1400,850" 
              stroke="url(#nodeGradient)" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.35"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Pulsing Social Nodes */}
            <motion.circle 
              cx="200" cy="300" r="10" 
              fill="#FF6B53" 
              filter="url(#glow)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle 
              cx="500" cy="200" r="8" 
              fill="#7B2FF7" 
              filter="url(#glow)"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
            />
            <motion.circle 
              cx="150" cy="500" r="6" 
              fill="#FF6B9D" 
              filter="url(#glow)"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity }}
            />
            <motion.circle 
              cx="800" cy="150" r="7" 
              fill="#00D4FF" 
              filter="url(#glow)"
              animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            />
            <motion.circle 
              cx="1600" cy="400" r="9" 
              fill="#FFD700" 
              filter="url(#glow)"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2.8, delay: 0.8, repeat: Infinity }}
            />
            <motion.circle 
              cx="1300" cy="600" r="7" 
              fill="#7B2FF7" 
              filter="url(#glow)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, delay: 0.4, repeat: Infinity }}
            />
            
            {/* Floating Speech Bubble - Top Left */}
            <motion.g 
              transform="translate(80, 150)"
              animate={{ y: [-8, 8, -8], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <rect x="0" y="0" width="50" height="35" rx="8" fill="#7B2FF7" opacity="0.85"/>
              <polygon points="15,35 20,48 28,35" fill="#7B2FF7" opacity="0.85"/>
              <circle cx="14" cy="17" r="4" fill="white" opacity="0.9"/>
              <circle cx="26" cy="17" r="4" fill="white" opacity="0.9"/>
              <circle cx="38" cy="17" r="4" fill="white" opacity="0.9"/>
            </motion.g>
            
            {/* Floating Heart - Top Right */}
            <motion.g 
              transform="translate(1700, 180)"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M20,35 Q 10 28 6 20 Q 2 12 10 7 Q 18 2 20 12 Q 22 2 30 7 Q 38 12 34 20 Q 30 28 20 35" 
                    fill="#FF6B9D" 
                    opacity="0.85"
                    transform="scale(1.3)"
              />
            </motion.g>
            
            {/* +1 Engagement Bubble - Left */}
            <motion.g 
              transform="translate(300, 450)"
              animate={{ y: [5, -5, 5], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <circle cx="20" cy="20" r="18" fill="#FFD700" opacity="0.85"/>
              <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">+1</text>
            </motion.g>
          </svg>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 motion-reduce:hidden">
          {[...Array(20)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.2} 
              duration={4 + Math.random() * 3}
              color={['#7B2FF7', '#FF6B9D', '#FF6B53', '#00D4FF', '#FFD700'][Math.floor(Math.random() * 5)]}
            />
          ))}
        </div>
        
        {/* Premium Decorative Glows - Softer for light background */}
        <motion.div 
          className="absolute top-10 left-5 w-48 h-48 rounded-full bg-gradient-to-r from-[#7B2FF7]/20 to-[#FF6B9D]/20 blur-3xl motion-reduce:hidden"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#FF6B53]/15 to-[#FF6B9D]/15 blur-3xl motion-reduce:hidden"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-[#00D4FF]/10 blur-2xl motion-reduce:hidden"
          animate={{ y: [-20, 20, -20], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Hero Content Area - MOBILE: Full-width stacked | DESKTOP: Two-column */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-3 pb-3 md:pt-6 md:pb-8">
          
          {/* MOBILE: Full-width stacked layout | DESKTOP: Two-column grid */}
          {/* More bottom margin to push portfolio cards down */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-8 items-start md:items-center mb-8 md:mb-6">
            
            {/* Text Content - Full width on mobile, with room for target animation */}
            <div className="w-full text-left pr-[140px] sm:pr-40 md:pr-0">
              {/* Main Headline - with more top spacing */}
              <motion.h1 
                initial={fadeIn}
                animate={fadeInVisible}
                transition={prefersReducedMotion ? {} : { delay: 0.1, duration: 0.5 }}
                className="font-black text-[#1A1A1A] mb-4 md:mb-4 leading-[0.9]"
                style={{ fontSize: 'clamp(2.75rem, 12vw, 3.75rem)' }}
              >
                <span className="block">Creative</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53]">
                  That Converts
                </span>
              </motion.h1>
              
              {/* Subheadline - LARGER text on mobile */}
              <motion.p 
                initial={fadeIn}
                animate={fadeInVisible}
                transition={prefersReducedMotion ? {} : { delay: 0.2, duration: 0.5 }}
                className="text-sm sm:text-base md:text-lg text-[#525252] max-w-xs sm:max-w-md mb-5 md:mb-5 leading-relaxed"
              >
                We engineer content that{' '}
                <span className="font-semibold text-[#1A1A1A]">consistently outperforms</span>—with{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#FF6B9D]">3x average ROAS</span>.
              </motion.p>
              
              {/* CTA Buttons - Larger on mobile, row on desktop */}
              <motion.div 
                initial={fadeIn}
                animate={fadeInVisible}
                transition={prefersReducedMotion ? {} : { delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-3"
              >
                <Link href="/contact">
                  <MagneticButton
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#7B2FF7] to-[#FF6B9D] text-white rounded-full px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 transition-all"
                    data-testid="button-hero-cta"
                  >
                    Start Creating
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                    </div>
                  </MagneticButton>
                </Link>
                <Link href="#portfolio">
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    className="inline-flex items-center gap-2 bg-white border-2 border-[#E5E4E0] text-[#1A1A1A] rounded-full px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-bold hover:border-[#7B2FF7]/30 hover:shadow-lg transition-all"
                    data-testid="button-view-work"
                  >
                    <Play className="w-4 h-4 sm:w-4 sm:h-4 fill-[#7B2FF7] text-[#7B2FF7]" />
                    View Work
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* PORTFOLIO GALLERY - 3-column grid on mobile, 6-column on desktop */}
          <motion.div 
            id="portfolio"
            initial={fadeIn}
            animate={fadeInVisible}
            transition={prefersReducedMotion ? {} : { delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            {/* Mobile: 3×2 Grid (TALLER cards) | Desktop: 6-column Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5 md:gap-3">
              {/* Card 1 - Instagram Post */}
              <motion.div 
                className="relative h-24 sm:h-28 md:h-32 bg-white rounded-xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(236,72,153,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D] to-[#EC4899]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7 mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold opacity-80">IG POST</span>
                  <span className="text-sm sm:text-base font-black">2.4M</span>
                </div>
              </motion.div>
              
              {/* Card 2 - Video Campaign */}
              <motion.div 
                className="relative h-24 sm:h-28 md:h-32 bg-white rounded-xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(139,92,246,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white ml-0.5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold opacity-80">VIDEO</span>
                  <span className="text-sm sm:text-base font-black">8.7M+</span>
                </div>
              </motion.div>
              
              {/* Card 3 - TikTok */}
              <motion.div 
                className="relative h-24 sm:h-28 md:h-32 bg-white rounded-xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#333]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <SiTiktok className="w-6 h-6 sm:w-7 sm:h-7 mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold opacity-80">TIKTOK</span>
                  <span className="text-sm sm:text-base font-black">5.2M</span>
                </div>
              </motion.div>
              
              {/* Card 4 - Ad ROAS */}
              <motion.div 
                className="relative h-24 sm:h-28 md:h-32 bg-white rounded-xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(255,107,53,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#F97316]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold opacity-80">AD ROAS</span>
                  <span className="text-base sm:text-lg font-black">4.7x</span>
                </div>
              </motion.div>
              
              {/* Card 5 - Reels */}
              <motion.div 
                className="relative h-24 sm:h-28 md:h-32 bg-white rounded-xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(16,185,129,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] to-[#059669]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <Camera className="w-6 h-6 sm:w-7 sm:h-7 mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold opacity-80">REELS</span>
                  <span className="text-sm sm:text-base font-black">890K</span>
                </div>
              </motion.div>
              
              {/* Card 6 - LinkedIn */}
              <motion.div 
                className="relative h-24 sm:h-28 md:h-32 bg-white rounded-xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(59,130,246,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5] to-[#0369A1]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <SiLinkedin className="w-6 h-6 sm:w-7 sm:h-7 mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold opacity-80">LINKEDIN</span>
                  <span className="text-sm sm:text-base font-black">B2B</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Reduced metrics for credibility */}
      <section className="py-8 pb-12 bg-gradient-to-r from-[#0f0f23] via-[#1a1a2e] to-[#0f0f23] relative overflow-hidden">
        {/* AI Neural Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 motion-reduce:hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibmV1cmFsIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMiIgZmlsbD0icmdiYSgxMjMsNDcsMjQ3LDAuNSkiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDEwNywxNTcsMC40KSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDEwNyw4MywwLjQpIi8+PGxpbmUgeDE9IjUwIiB5MT0iNTAiIHgyPSIyMCIgeTI9IjIwIiBzdHJva2U9InJnYmEoMTIzLDQ3LDI0NywwLjIpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSI1MCIgeTE9IjUwIiB4Mj0iODAiIHkyPSIzMCIgc3Ryb2tlPSJyZ2JhKDI1NSwxMDcsMTU3LDAuMikiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI25ldXJhbCkiLz48L3N2Zz4=')]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 47, suffix: "+", label: "Active Clients" },
              { value: 3, suffix: "x", label: "Avg. ROAS" },
              { value: 89, suffix: "%", label: "Client Retention" },
              { value: 12, suffix: "+", label: "AI MVPs Built" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: idx * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* View Case Studies Button */}
          <motion.div 
            className="flex justify-center mt-8"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReducedMotion ? {} : { delay: 0.5 }}
          >
            <Link href="/our-work">
              <motion.button
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7B2FF7] to-[#FF6B9D] rounded-full text-white font-bold shadow-lg hover:shadow-[0_15px_40px_rgba(123,47,247,0.3)] transition-all"
                data-testid="button-view-case-studies"
              >
                <Eye className="w-5 h-5" />
                View Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CARDS - Colorful Gradient Cards with AI Elements */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f0f23] via-[#1a1a2e] to-[#0f0f23] relative overflow-hidden">
        {/* AI Circuit Background Pattern */}
        <div className="absolute inset-0 opacity-10 motion-reduce:hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY3VpdCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDUwIEg4MCBWMTBIMTI1IFY1MCBIMjAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTIzLDQ3LDI0NywwLjMpIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMCAxNTAgSDUwIFYxMDAgSDEwMCBWMTUwIEgyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMTA3LDE1NywwLjMpIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjUwIiByPSI0IiBmaWxsPSJyZ2JhKDEyMyw0NywyNDcsMC41KSIvPjxjaXJjbGUgY3g9IjEyNSIgY3k9IjEwIiByPSIzIiBmaWxsPSJyZ2JhKDI1NSwxMDcsMTU3LDAuNSkiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjE1MCIgcj0iNCIgZmlsbD0icmdiYSgyNTUsMTA3LDgzLDAuNSkiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjMiIGZpbGw9InJnYmEoMTIzLDQ3LDI0NywwLjUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NpcmN1aXQpIi8+PC9zdmc+')]" />
        </div>
        {/* Background Glows with Navy Undertones */}
        <div className="absolute inset-0 motion-reduce:hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4F46E5]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7B2FF7]/15 rounded-full blur-3xl" />
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

                  {/* Case Study Tease */}
                  <Link href="/our-work">
                    <motion.p 
                      className="mt-6 text-sm text-white/60 hover:text-white/90 transition-colors cursor-pointer underline decoration-white/30 hover:decoration-white/60"
                      whileHover={prefersReducedMotion ? {} : { x: 5 }}
                    >
                      {service.caseStudy}
                    </motion.p>
                  </Link>

                  {/* CTA Button */}
                  <Link href={service.link}>
                    <motion.a
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-white text-gray-900 rounded-full py-4 font-bold hover:shadow-xl transition-all"
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

      {/* PORTFOLIO SHOWCASE - with navy undertones */}
      <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-[#0f0f23] via-[#151528] to-[#1a1a2e] relative overflow-hidden">
        {/* AI Neural Pattern Overlay for consistency */}
        <div className="absolute inset-0 opacity-10 motion-reduce:hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibmV1cmFsIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMiIgZmlsbD0icmdiYSgxMjMsNDcsMjQ3LDAuNSkiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDEwNywxNTcsMC40KSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDEwNyw4MywwLjQpIi8+PGxpbmUgeDE9IjUwIiB5MT0iNTAiIHgyPSIyMCIgeTI9IjIwIiBzdHJva2U9InJnYmEoMTIzLDQ3LDI0NywwLjIpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSI1MCIgeTE9IjUwIiB4Mj0iODAiIHkyPSIzMCIgc3Ryb2tlPSJyZ2JhKDI1NSwxMDcsMTU3LDAuMikiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI25ldXJhbCkiLz48L3N2Zz4=')]" />
        </div>
        <div className="absolute inset-0 motion-reduce:hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#7B2FF7]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF6B9D]/15 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7B2FF7]/20 to-[#FF6B9D]/20 rounded-full text-sm font-bold text-white/80 mb-6 border border-white/10">
              <Camera className="w-4 h-4" />
              Our Work
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              See What We <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#FF6B9D] to-[#FF6B53]">
                Create
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real campaigns. Real results. Content engineered to outperform.
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

      {/* Industries Section - Navy undertones for consistency */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1a1a2e] via-[#0f0f23] to-[#151528] relative overflow-hidden">
        {/* AI Circuit Pattern */}
        <div className="absolute inset-0 opacity-5 motion-reduce:hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY3VpdCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDUwIEg4MCBWMTBIMTI1IFY1MCBIMjAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTIzLDQ3LDI0NywwLjMpIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMCAxNTAgSDUwIFYxMDAgSDEwMCBWMTUwIEgyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMTA3LDE1NywwLjMpIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjUwIiByPSI0IiBmaWxsPSJyZ2JhKDEyMyw0NywyNDcsMC41KSIvPjxjaXJjbGUgY3g9IjEyNSIgY3k9IjEwIiByPSIzIiBmaWxsPSJyZ2JhKDI1NSwxMDcsMTU3LDAuNSkiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjE1MCIgcj0iNCIgZmlsbD0icmdiYSgyNTUsMTA3LDgzLDAuNSkiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjMiIGZpbGw9InJnYmEoMTIzLDQ3LDI0NywwLjUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NpcmN1aXQpIi8+PC9zdmc+')]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7B2FF7]/20 to-[#FF6B9D]/20 rounded-full text-sm font-bold text-white/80 mb-6 border border-white/10">
              <Target className="w-4 h-4" />
              Industries We Transform
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
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
                whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group" 
                data-testid={`use-case-${useCase.id}`}
              >
                <div className={`h-2 w-20 bg-gradient-to-r ${useCase.color} rounded-full mb-6 group-hover:w-full transition-all duration-500`} />
                <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
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

      {/* Trusted Brands - Dark theme */}
      <section className="py-16 px-6 bg-[#0f0f23]">
        <div className="max-w-6xl mx-auto">
          <motion.p 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center text-lg text-gray-400 mb-8"
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
          animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1] }}
          transition={prefersReducedMotion ? {} : { duration: 5, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-300/30 rounded-full blur-3xl motion-reduce:hidden"
          animate={prefersReducedMotion ? {} : { scale: [1.3, 1, 1.3] }}
          transition={prefersReducedMotion ? {} : { duration: 7, repeat: Infinity }}
        ></motion.div>
        
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
