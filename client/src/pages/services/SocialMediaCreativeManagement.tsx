import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { useEffect } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Smartphone, Target, Palette, Users,
  Instagram, Linkedin, Facebook, Sparkles
} from "lucide-react";
import { SiTiktok, SiYoutube, SiSnapchat, SiPinterest, SiGoogle } from "react-icons/si";

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
      title: "Social",
      icon: Smartphone,
      description: "We grow cult-like social communities with platform-specific social strategies",
      points: [
        "Social Strategy",
        "Channel and Community Management",
        "Social-first Content Creation",
        "Social Listening & Insights"
      ],
      learnMore: "Learn more about Social",
      link: "/services/social"
    },
    {
      title: "Paid",
      icon: Target,
      description: "We deliver performance-driven Paid Social and Paid Search campaigns",
      points: [
        "Paid Social & Paid Search",
        "Full-Funnel Media Strategy",
        "Planning, Buying, Creative, Analytics, Testing and more.",
        "Feed Optimisation & Shopping"
      ],
      learnMore: "Learn more about Paid",
      link: "/services/paid"
    },
    {
      title: "Creative",
      icon: Palette,
      description: "Delivering outstanding Creative across Video, Design and Motion",
      points: [
        "Organic & Paid Social Video",
        "UGC to High-Production",
        "Creative Strategy, Art Direction & Campaigns",
        "Motion Design, Animation and Graphics"
      ],
      learnMore: "Learn more about Creative",
      link: "/services/creative"
    },
    {
      title: "Influencer",
      icon: Users,
      description: "We deliver brand awareness and direct-response Influencer & Creator campaigns",
      points: [
        "End-to-end Campaign Management",
        "Brand Awareness and Direct-Response Objectives",
        "Content Creators for UGC Content",
        "Wrap Reports and Analysis"
      ],
      learnMore: "Learn more about Influencer",
      link: "/services/influencer"
    }
  ];

  const platformIcons = [
    { Icon: Instagram, label: "Instagram" },
    { Icon: Facebook, label: "Facebook" },
    { Icon: SiGoogle, label: "Google" },
    { Icon: SiPinterest, label: "Pinterest" },
    { Icon: SiSnapchat, label: "Snapchat" },
    { Icon: SiTiktok, label: "TikTok" },
    { Icon: SiYoutube, label: "YouTube" }
  ];

  const brandLogos = [
    brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo6
  ];

  const useCases = [
    {
      id: "ecommerce",
      title: "E-commerce Brands",
      description: "Scale your online store with integrated social, paid, and creative strategies. Drive traffic and conversions across all channels.",
      points: ["Full-funnel marketing campaigns", "Product photography & video", "Social commerce optimization"]
    },
    {
      id: "dtc",
      title: "DTC Startups",
      description: "Launch and scale your brand with comprehensive marketing support. From strategy to execution across all digital channels.",
      points: ["Brand building campaigns", "Content creation at scale", "Performance marketing"]
    },
    {
      id: "saas",
      title: "SaaS Companies",
      description: "Generate qualified leads with strategic content and paid campaigns. Build authority and drive sign-ups across platforms.",
      points: ["Lead generation campaigns", "Thought leadership content", "Demo & product videos"]
    },
    {
      id: "lifestyle",
      title: "Lifestyle Brands",
      description: "Build engaged communities around your brand. Authentic storytelling that resonates with your target audience across all platforms.",
      points: ["Community building strategies", "Influencer partnerships", "UGC & brand storytelling"]
    },
    {
      id: "finance",
      title: "Finance & FinTech",
      description: "Navigate complex regulatory environments while building trust. Compliant creative that educates and converts at scale.",
      points: ["Compliant ad creative", "Educational content", "Trust-building campaigns"]
    },
    {
      id: "enterprise",
      title: "Enterprise Brands",
      description: "Coordinate global campaigns across multiple markets. Strategic creative production and media management at enterprise scale.",
      points: ["Multi-market campaigns", "Localized content creation", "Global brand consistency"]
    }
  ];

  const relatedServices = [
    {
      id: "paid",
      title: "Paid Advertising",
      description: "Performance-driven paid social and search campaigns. Maximize ROI with data-driven media buying.",
      link: "/services/paid-advertising"
    },
    {
      id: "influencer",
      title: "Influencer Marketing",
      description: "Connect with your audience through authentic creator partnerships. Build trust at scale.",
      link: "/services/influencer-marketing"
    },
    {
      id: "management",
      title: "Social Management",
      description: "Daily community management and content publishing. Build engaged audiences that drive business results.",
      link: "/services/social-media-management"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="How We Help | Social, Paid, Creative & Influencer Services | OARC Digital"
        description="We specialise in Social, Paid, Creative, Influencer and Strategy and work with fast-growth brands and household names across the globe."
        canonicalUrl="https://oarcdigital.com/services/how-we-help"
        ogType="article"
        structuredData={createServiceSchema(
          "Comprehensive Marketing Services",
          "Full-service marketing agency specializing in Social, Paid, Creative, Influencer and Strategy.",
          "Marketing Services"
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
                  <Sparkles className="w-4 h-4" />
                  Full-Service Marketing
                </span>
              </motion.div>
              
              <motion.h1 
                initial={fadeIn}
                animate={fadeInVisible}
                transition={prefersReducedMotion ? {} : { delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6"
              >
                How we help
              </motion.h1>
              
              <motion.p 
                initial={fadeIn}
                animate={fadeInVisible}
                transition={prefersReducedMotion ? {} : { delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-black/80 leading-relaxed max-w-3xl"
              >
                We specialise in Social, Paid, Creative, Influencer and Strategy and work with fast-growth brands and household names across the globe.
              </motion.p>
            </div>
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

          {/* Working Across Platform Icons - Premium Animation */}
          <motion.div 
            initial={fadeIn}
            whileInView={fadeInVisible}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-black text-black text-center mb-8">
              Working Across
            </h2>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {platformIcons.map((platform, idx) => (
                <motion.div 
                  key={idx}
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={prefersReducedMotion ? {} : { delay: idx * 0.05 }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.15, y: -5 }}
                  className="w-14 h-14 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-all duration-300"
                  data-testid={`icon-platform-${idx}`}
                >
                  <platform.Icon className="h-10 w-10 text-black" />
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
              We work with brands across multiple industries and verticals…
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
              WHO THIS IS FOR
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
              Perfect for <span className="italic text-[#5FD4C4]">ambitious brands</span>
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
              EXPLORE MORE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
              Specialized <span className="italic text-[#5FD4C4]">service offerings</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Dive deeper into specific services that power our comprehensive approach.
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
                className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8"
              >
                Ready to <span className="text-white drop-shadow-lg">transform</span> your brand?
              </motion.h2>
              
              <Link href="/contact">
                <motion.button
                  initial={fadeIn}
                  whileInView={fadeInVisible}
                  viewport={{ once: true }}
                  transition={prefersReducedMotion ? {} : { delay: 0.2 }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
                  data-testid="button-lets-chat"
                >
                  Let's Chat
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </motion.button>
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
              <h3 className="text-2xl font-bold mb-4">Stay Ahead of the Curve</h3>
              <p className="text-lg mb-6 text-gray-300">
                Join forward-thinking brands and receive exclusive insights, strategies and industry news.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="Email"
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
