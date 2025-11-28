import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion, useInView, useSpring, useMotionValue } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Zap, BarChart3, Wand2, Network,
  Instagram, Facebook, Sparkles, Brain, Rocket, TrendingUp
} from "lucide-react";
import { SiTiktok, SiYoutube, SiX, SiThreads, SiLinkedin, SiMeta } from "react-icons/si";

// Animated counter component for impressive number reveals
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

// Magnetic button effect for premium CTAs
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

// Import award and team photos
import awardTeamImg from "@assets/stock_images/award_ceremony_busin_81e5ff09.jpg";
import largeTeamImg from "@assets/stock_images/large_company_team_p_32054de0.jpg";

// Import brand logos
import brandLogo1 from "@assets/stock_images/corporate_brand_logo_7fa71d75.jpg";
import brandLogo2 from "@assets/stock_images/corporate_brand_logo_3ecd3c3a.jpg";
import brandLogo3 from "@assets/stock_images/corporate_brand_logo_53ee2baf.jpg";
import brandLogo4 from "@assets/stock_images/corporate_brand_logo_36956200.jpg";
import brandLogo5 from "@assets/stock_images/corporate_brand_logo_fa7a9043.jpg";
import brandLogo6 from "@assets/stock_images/corporate_brand_logo_45511c03.jpg";

export default function SocialMediaCreativeManagement() {
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const fadeIn = prefersReducedMotion ? {} : { opacity: 0, y: 20 };
  const fadeInVisible = prefersReducedMotion ? {} : { opacity: 1, y: 0 };
  const scaleIn = prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 };
  const scaleInVisible = prefersReducedMotion ? {} : { opacity: 1, scale: 1 };
  const slideLeft = prefersReducedMotion ? {} : { opacity: 0, x: -20 };
  const slideLeftVisible = prefersReducedMotion ? {} : { opacity: 1, x: 0 };

  const services = [
    {
      title: "AI-Powered Social",
      icon: Brain,
      description: "Our proprietary OARC Intelligence Engine analyzes millions of data points to craft social strategies that outperform human intuition by 340%.",
      points: [
        "Neural content optimization",
        "Predictive engagement mapping",
        "AI-driven community growth",
        "Real-time sentiment orchestration"
      ],
      learnMore: "Explore AI Social",
      link: "/services/social-media-management"
    },
    {
      title: "Revenue Ads",
      icon: TrendingUp,
      description: "Malta's only agency with direct API access to Meta and Google's machine learning layers. We don't just run ads—we engineer revenue systems.",
      points: [
        "Algorithmic bid optimization",
        "Dynamic creative sequencing",
        "Cross-platform attribution modeling",
        "Automated ROAS scaling"
      ],
      learnMore: "Explore Revenue Ads",
      link: "/services/paid-advertising"
    },
    {
      title: "Creative Lab",
      icon: Wand2,
      description: "Where AI meets artistry. Our Creative Lab fuses generative AI with human creative direction to produce assets that stop thumbs and start conversations.",
      points: [
        "AI-assisted video production",
        "Generative design systems",
        "Rapid creative iteration",
        "Performance-tested visuals"
      ],
      learnMore: "Enter the Lab",
      link: "/services/creative-production"
    },
    {
      title: "Creator Network",
      icon: Network,
      description: "Access our vetted network of 2,000+ creators across EMEA. We match brands with authentic voices using AI-powered affinity scoring.",
      points: [
        "AI creator-brand matching",
        "Performance-based partnerships",
        "Multi-platform amplification",
        "Real-time campaign analytics"
      ],
      learnMore: "Meet the Network",
      link: "/services/influencer-marketing"
    }
  ];

  const platformIcons = [
    { Icon: SiMeta, label: "Meta Ads" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: SiTiktok, label: "TikTok" },
    { Icon: SiYoutube, label: "YouTube" },
    { Icon: SiLinkedin, label: "LinkedIn" },
    { Icon: SiX, label: "X (Twitter)" },
    { Icon: SiThreads, label: "Threads" }
  ];

  const brandLogos = [
    brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo6
  ];

  const useCases = [
    {
      id: "ecommerce",
      title: "E-commerce Disruptors",
      description: "We've scaled 47+ e-commerce brands from €10K to €1M+ monthly revenue. Our AI-driven approach identifies untapped audiences and automates winning creative at scale.",
      points: ["Predictive audience discovery", "Dynamic product creative", "Automated scaling playbooks"]
    },
    {
      id: "dtc",
      title: "DTC Challengers",
      description: "Launch fast, scale faster. Our OARC Launch Protocol gets brands to profitability in 90 days with a proven system refined across 200+ DTC launches.",
      points: ["90-day launch framework", "Founder-led content systems", "CAC optimization engines"]
    },
    {
      id: "saas",
      title: "B2B SaaS",
      description: "Turn complex products into compelling stories. Our SaaS playbook has generated €50M+ in pipeline for tech companies across Europe and the US.",
      points: ["LinkedIn thought leadership", "Product demo campaigns", "MQL-to-SQL optimization"]
    },
    {
      id: "lifestyle",
      title: "Premium Lifestyle",
      description: "Craft aspirational brand narratives that command premium pricing. We've built category-defining brands in fashion, wellness, and hospitality.",
      points: ["Luxury positioning strategy", "Editorial content creation", "Influencer curation"]
    },
    {
      id: "finance",
      title: "FinTech & iGaming",
      description: "Malta's financial hub demands compliance expertise. We navigate MGA, MFSA, and platform policies to deliver compliant campaigns that convert.",
      points: ["Regulatory-compliant creative", "Risk-managed targeting", "Licensed market expansion"]
    },
    {
      id: "enterprise",
      title: "Global Enterprise",
      description: "Unified brand experiences across 30+ markets. Our enterprise clients trust us to maintain brand consistency while adapting to local nuances.",
      points: ["Multi-market coordination", "AI-powered localization", "Global performance dashboards"]
    }
  ];

  const relatedServices = [
    {
      id: "paid",
      title: "Revenue Automation",
      description: "Our AI bidding systems manage €2M+ monthly ad spend with 24/7 optimization. Set ROAS targets and watch revenue scale.",
      link: "/services/paid-advertising",
      icon: Zap
    },
    {
      id: "influencer",
      title: "Creator Economy",
      description: "Access 2,000+ vetted creators. Our AI matches your brand with voices that drive authentic engagement and measurable ROI.",
      link: "/services/influencer-marketing",
      icon: Network
    },
    {
      id: "management",
      title: "AI Social Engine",
      description: "Content that learns and evolves. Our AI analyzes performance in real-time to optimize posting times, formats, and messaging.",
      link: "/services/social-media-management",
      icon: Brain
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

      {/* How we help - Premium Hero Section */}
      <section className="py-12 px-4 bg-white relative overflow-hidden">
        {/* Premium Floating Orbs */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#c4ff4d]/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-[#5FD4C4]/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Card with Glassmorphism */}
          <motion.div 
            initial={fadeIn}
            animate={fadeInVisible}
            transition={prefersReducedMotion ? {} : { duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#5FD4C4] to-[#4BC4B4] rounded-3xl p-10 md:p-16 mb-8 overflow-hidden" 
            data-testid="card-how-we-help"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl motion-reduce:hidden"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c4ff4d]/20 rounded-full blur-3xl motion-reduce:hidden"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={slideLeft}
                animate={slideLeftVisible}
                transition={prefersReducedMotion ? {} : { delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm font-semibold text-black mb-6">
                  <Rocket className="w-4 h-4" />
                  AI-Engineered Growth
                </span>
              </motion.div>
              
              <motion.h1 
                initial={fadeIn}
                animate={fadeInVisible}
                transition={prefersReducedMotion ? {} : { delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6"
              >
                Revenue. Engineered.
              </motion.h1>
              
              <motion.p 
                initial={fadeIn}
                animate={fadeInVisible}
                transition={prefersReducedMotion ? {} : { delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-black/80 leading-relaxed max-w-3xl"
              >
                We don't run campaigns—we build revenue machines. OARC Digital combines proprietary AI systems with human creative excellence to deliver measurable growth for ambitious brands worldwide.
              </motion.p>
            </div>
            
            {/* Animated Stats Row */}
            <motion.div
              initial={fadeIn}
              animate={fadeInVisible}
              transition={prefersReducedMotion ? {} : { delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-black/10 relative z-10"
            >
              <div className="text-center" data-testid="stat-ad-spend">
                <div className="text-3xl md:text-4xl font-black text-black mb-1">
                  <AnimatedCounter prefix="€" value={2} suffix="M+" />
                </div>
                <p className="text-sm text-black/70 font-medium">Monthly Ad Spend</p>
              </div>
              <div className="text-center" data-testid="stat-roas-lift">
                <div className="text-3xl md:text-4xl font-black text-black mb-1">
                  <AnimatedCounter value={340} suffix="%" />
                </div>
                <p className="text-sm text-black/70 font-medium">Avg. ROAS Lift</p>
              </div>
              <div className="text-center" data-testid="stat-brands-scaled">
                <div className="text-3xl md:text-4xl font-black text-black mb-1">
                  <AnimatedCounter value={47} suffix="+" />
                </div>
                <p className="text-sm text-black/70 font-medium">Brands Scaled</p>
              </div>
              <div className="text-center" data-testid="stat-creators">
                <div className="text-3xl md:text-4xl font-black text-black mb-1">
                  <AnimatedCounter value={2000} suffix="+" />
                </div>
                <p className="text-sm text-black/70 font-medium">EMEA Creators</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Award Image with Premium Effect */}
          <motion.div 
            initial={scaleIn}
            animate={scaleInVisible}
            transition={prefersReducedMotion ? {} : { delay: 0.5, duration: 0.6 }}
            className="mb-12 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src={awardTeamImg}
              alt="Best Large Social Agency"
              className="w-full rounded-3xl shadow-xl h-[400px] object-cover image-reveal transition-transform duration-500 group-hover:scale-[1.02]"
              data-testid="img-award-team"
            />
          </motion.div>

          {/* Service Cards Grid - Premium Glassmorphism */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 hover-lift glass-lime-strong shadow-sm hover:shadow-xl transition-all duration-300"
                data-testid={`card-service-${service.title.toLowerCase()}`}
              >
                {/* Icon with Gradient Background */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5FD4C4] flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Link href={service.link}>
                  <a className="block w-full">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
                      data-testid={`button-learn-${service.title.toLowerCase()}`}
                    >
                      {service.learnMore}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Platform Expertise - Premium Animation */}
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-black text-black text-center mb-3">
              Platform Mastery
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Direct API integrations and certified partnerships across every major platform
            </p>
            <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap">
              {platformIcons.map((platform, idx) => (
                <motion.div 
                  key={idx}
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={prefersReducedMotion ? {} : { delay: idx * 0.05 }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.2, y: -8 }}
                  className="group relative w-16 h-16 flex flex-col items-center justify-center rounded-xl hover:bg-[#5FD4C4]/10 transition-all duration-300 cursor-pointer"
                  data-testid={`icon-platform-${idx}`}
                  title={platform.label}
                >
                  <div className="absolute inset-0 rounded-xl bg-[#5FD4C4]/0 group-hover:bg-[#5FD4C4]/5 group-hover:shadow-[0_0_20px_rgba(95,212,196,0.3)] transition-all duration-300 motion-reduce:hidden" />
                  <platform.Icon className="h-10 w-10 text-black group-hover:text-[#5FD4C4] transition-colors relative z-10" />
                  <span className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap font-medium">
                    {platform.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brand Logos Section - Premium Grid */}
          <motion.div 
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-center text-lg text-gray-700 mb-8">
              Trusted by brands scaling from startup to enterprise across EMEA
            </p>
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
          </motion.div>
        </div>
      </section>

      {/* Who This Service Is For - Premium Section with Lime Background */}
      <section className="py-20 px-4 bg-surface-lime relative overflow-hidden">
        {/* Premium Floating Orbs */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-[#c4ff4d]/20 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#5FD4C4]/15 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-wider text-[#5FD4C4] mb-4 inline-block font-bold bg-[#5FD4C4]/10 px-4 py-2 rounded-full">
              INDUSTRIES WE TRANSFORM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
              Built for <span className="italic text-[#5FD4C4]">category leaders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={useCase.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover-lift glass-lime shadow-sm hover:shadow-lg transition-all duration-300" 
                data-testid={`use-case-${useCase.id}`}
              >
                <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-gray-700 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services - Premium White Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Subtle Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#c4ff4d]/8 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-wider text-[#5FD4C4] mb-4 inline-block font-bold">
              THE OARC ECOSYSTEM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
              Interconnected <span className="italic text-[#5FD4C4]">growth systems</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each OARC service feeds into the next, creating compounding returns across your entire marketing stack.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, idx) => (
              <Link key={service.id} href={service.link}>
                <motion.div 
                  initial={fadeIn}
                  whileInView={fadeInVisible}
                  viewport={{ once: true }}
                  transition={prefersReducedMotion ? {} : { delay: idx * 0.1 }}
                  className="group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#5FD4C4] hover:shadow-xl transition-all duration-300 cursor-pointer hover-lift glass-lime" 
                  data-testid={`related-service-${service.id}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5FD4C4] to-[#4BC4B4] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-[#5FD4C4] transition-colors">{service.title}</h3>
                    <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra Premium Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#5FD4C4] to-[#4BC4B4] rounded-3xl overflow-hidden glow-lime" 
            data-testid="card-final-cta"
          >
            {/* Premium Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl motion-reduce:hidden"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c4ff4d]/25 rounded-full blur-3xl motion-reduce:hidden"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl motion-reduce:hidden"></div>
            
            <div className="p-10 md:p-16 relative z-10">
              <motion.h2 
                initial={fadeIn}
                whileInView={fadeInVisible}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4"
              >
                Ready to <span className="text-white drop-shadow-lg">engineer</span> your growth?
              </motion.h2>
              <motion.p
                initial={fadeIn}
                whileInView={fadeInVisible}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { delay: 0.15 }}
                className="text-lg md:text-xl text-black/70 mb-8 max-w-2xl"
              >
                Book a strategy call with our Malta-based team. We'll audit your current setup and show you exactly how OARC can accelerate your revenue.
              </motion.p>
              
              <Link href="/contact">
                <MagneticButton
                  initial={fadeIn}
                  whileInView={fadeInVisible}
                  viewport={{ once: true }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="group btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300"
                  data-testid="button-lets-chat"
                >
                  Book Strategy Call
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </MagneticButton>
              </Link>
            </div>
            
            {/* Team Photo at bottom of card */}
            <div className="w-full image-reveal">
              <img 
                src={largeTeamImg}
                alt="OARC Digital Team"
                className="w-full h-[400px] object-cover"
                data-testid="img-team"
              />
            </div>
          </motion.div>

          {/* Newsletter Section - Premium Dark */}
          <motion.div 
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#c4ff4d]/10 rounded-full blur-3xl motion-reduce:hidden"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#5FD4C4]/10 rounded-full blur-3xl motion-reduce:hidden"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">The OARC Intelligence Brief</h3>
              <p className="text-lg mb-6 text-gray-300">
                Weekly insights from our AI systems: platform algorithm changes, emerging trends, and strategies that are working right now. No fluff, just signal.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5FD4C4] transition-all"
                  data-testid="input-email"
                />
                <button
                  className="bg-[#c4ff4d] text-black rounded-full px-8 py-4 font-semibold btn-shimmer hover:bg-[#b8f547] transition-all"
                  data-testid="button-submit-email"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
