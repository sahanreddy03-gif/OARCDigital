import Layout from "@/components/layout/Layout";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Bot, 
  Palette, 
  Globe, 
  Zap, 
  Target, 
  Cog, 
  TrendingUp, 
  Lightbulb, 
  Sparkles,
  Rocket,
  Users,
  Award,
  Heart
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import companyLogo from "@assets/final 2_1762907995368.png";
import heroImg from "@assets/nnnnnnnnnn_1763249120461.avif";
import visionEye from "@assets/pexels-burakkostak-18809_1763243435924.jpg";
import experimentsWorkspace from "@assets/campaign-img1_1763245285586.png";
import birthTeam from "@assets/pexels-thirdman-5257897 (1)_1763243949488.jpg";
import globalNetwork from "@assets/global-influencer-marketing-agency-socially-powerful_1763244062764.jpg";
import maltaHub from "@assets/pexels-pham-ngoc-anh-170983008-14237665_1763244193737.jpg";
import futureSign from "@assets/pexels-didsss-29218003_1763244513664.jpg";
import carousel1 from "@assets/stock_images/modern_marketing_age_2cb6d515.jpg";
import carousel3 from "@assets/stock_images/modern_marketing_age_0c16bbf6.jpg";
import carouselWorkspace from "@assets/image_1763243239681.png";
import carouselBiolage from "@assets/Biolage-influencer-marketing-agency-socially-powerful_1763243258630.jpg";
import carouselBeauty from "@assets/it-cosmetics-socially-powerful-marketing-agency-1_1763243258630.png";
import carouselFashion from "@assets/joshua-rondeau-7mHMwHbJ_0o-unsplash-scaled-e1690895515404_1763243258631.jpg";
import carouselJoy from "@assets/Screenshot-2023-08-01-at-16.06.24_1763243258631.png";
import timeline1 from "@assets/stock_images/professional_busines_080c57eb.jpg";
import timeline2 from "@assets/stock_images/professional_busines_617ecf1a.jpg";
import timeline3 from "@assets/stock_images/professional_busines_838bb4c4.jpg";
import { SuccessInNumbers } from "@/components/SuccessInNumbers";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Scroll Reveal Component with prefers-reduced-motion support
function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If user prefers reduced motion, show content immediately without animation
    if (prefersReducedMotion.current) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${
        prefersReducedMotion.current 
          ? '' 
          : `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
      }`}
    >
      {children}
    </div>
  );
}

export default function WhyUs() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP Parallax scrolling on hero
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && heroImgRef.current) {
      const parallaxTrigger = ScrollTrigger.create({
        trigger: '.hero-section-why-us',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.9,
        animation: gsap.to(heroImgRef.current, {
          yPercent: 20,
          scale: 1.1,
          ease: 'none'
        })
      });

      scrollTriggersRef.current = [parallaxTrigger];
    }

    return () => {
      scrollTriggersRef.current.forEach(trigger => trigger.kill());
    };
  }, []);

  // Auto-scroll carousel with prefers-reduced-motion support
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Don't auto-scroll if user prefers reduced motion
    if (prefersReducedMotion) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 2;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  const carouselImages = [
    carouselWorkspace, carouselBiolage, carouselBeauty, carousel1, carouselFashion, carouselJoy, carousel3,
    carouselWorkspace, carouselBiolage, carouselBeauty, carousel1, carouselFashion, carouselJoy, carousel3, // Duplicate for infinite scroll
    carouselWorkspace, carouselBiolage, carouselBeauty, carousel1, carouselFashion, carouselJoy, carousel3
  ];

  const timeline = [
    { year: "2015", title: "The Vision" },
    { year: "2018", title: "First AI Experiment" },
    { year: "2020", title: "Founded OARC" },
    { year: "2021", title: "Revenue Automation" },
    { year: "2022", title: "Global Expansion" },
    { year: "2023", title: "AI Employees Launch" },
    { year: "2024", title: "Malta Hub" },
    { year: "202?+", title: "The Future" }
  ];

  const badges = [
    { title: "AI-First", subtitle: "Innovation Leader", Icon: Bot },
    { title: "Creative", subtitle: "Award-Winning Agency", Icon: Palette },
    { title: "Global", subtitle: "Malta-Based, Worldwide Reach", Icon: Globe },
    { title: "Tech-Driven", subtitle: "Automation Experts", Icon: Zap }
  ];

  const coreValues = [
    {
      title: "AI-Powered Creativity",
      Icon: Target,
      description: "At OARC Digital, we merge human creativity with AI intelligence to create campaigns that are both beautiful and performance-driven."
    },
    {
      title: "Automation First",
      Icon: Cog,
      description: "Everything we build is designed to scale autonomously, freeing your team to focus on strategy while AI handles execution."
    },
    {
      title: "Revenue Obsessed",
      Icon: TrendingUp,
      description: "We measure success by one metric: ROI. Every campaign is engineered to drive measurable business growth."
    },
    {
      title: "Innovation",
      Icon: Lightbulb,
      description: "At OARC Digital, we continuously evolve with cutting-edge AI tools and marketing automation to stay ahead of the curve."
    },
    {
      title: "Agility",
      Icon: Zap,
      description: "OARC Digital acts fast and adapts faster, cutting lead times from weeks to days to keep brands relevant."
    },
    {
      title: "Authenticity",
      Icon: Sparkles,
      description: "OARC Digital builds meaningful relationships between brands and audiences through authentic, AI-enhanced storytelling."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.whyUs.title}
        description={supportingPagesSEO.whyUs.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.whyUs.path}`}
        ogType={supportingPagesSEO.whyUs.ogType}
      />
      {/* Hero Section - Premium Superside Style */}
      <section className="hero-section-why-us relative min-h-[75vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black -mt-20" data-testid="section-hero">
        <img
          ref={heroImgRef}
          src={heroImg}
          alt="OARC Digital Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40 will-change-transform"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-8 pb-20 md:pt-12 md:pb-32">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/60 mb-8 font-bold" data-testid="text-hero-kicker">
            WHY OARC
          </p>
          <h1 
            className="font-black text-white leading-[1.1] mb-10" 
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
              letterSpacing: '-0.04em' 
            }}
            data-testid="heading-hero"
          >
            What Is OARC Digital?
          </h1>
          <p 
            className="text-white/95 max-w-4xl mx-auto leading-relaxed mb-12 font-light" 
            style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }}
            data-testid="text-hero-description"
          >
            OARC Digital is a <strong className="text-[#00FF9C] font-semibold">global AI-powered marketing agency</strong> engineered to help brands win through intelligent creativity, revenue automation, and AI employees across all digital channels.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-white/75 leading-loose" data-testid="text-hero-mission">
              We partner with forward-thinking brands to create performance-driven campaigns powered by AI that cut through the noise and deliver measurable ROI.
            </p>
            <p className="text-base md:text-lg text-white/75 leading-loose" data-testid="text-hero-positioning">
              The mission of OARC Digital is to empower brands to connect with audiences through AI-enhanced creative, autonomous revenue systems, and platform-native automation.
            </p>
            <p className="text-base md:text-lg text-white/75 leading-loose" data-testid="text-hero-value-prop">
              We are positioned as a full-service, AI-first agency that brings together strategy, automation, tech, and creativity to shape brand narratives that matter across all digital platforms, worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* OARC Origin Story Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-24 md:py-36" data-testid="section-origin-story">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-24">
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-500 mb-6 font-bold">
                OUR ORIGIN
              </p>
              <h2 
                className="font-black text-zinc-900 mb-8 leading-tight" 
                style={{ 
                  fontSize: 'clamp(2rem, 6vw, 4rem)',
                  letterSpacing: '-0.03em'
                }}
                data-testid="heading-origin"
              >
                What Does <span className="text-[#FF5A00]">OARC</span> Mean?
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-8">
                <span className="text-xl md:text-2xl lg:text-3xl font-black text-[#FF5A00]" style={{ letterSpacing: '-0.02em' }}>O</span>
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-700">ptimised</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-black text-[#00FF9C]" style={{ letterSpacing: '-0.02em' }}>A</span>
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-700">I</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-black text-[#FF5A00]" style={{ letterSpacing: '-0.02em' }}>R</span>
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-700">evenue</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-black text-[#00FF9C]" style={{ letterSpacing: '-0.02em' }}>C</span>
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-700">reativity</span>
              </div>
              <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed" data-testid="text-origin-intro">
                Our name embodies our philosophy: leveraging <strong className="text-zinc-900">Optimised AI</strong> to drive <strong className="text-zinc-900">Revenue</strong> through exceptional <strong className="text-zinc-900">Creativity</strong>.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline: 2020-2022 Journey */}
          <ScrollReveal delay={100}>
            <div className="relative">
              {/* Timeline Line - Desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF5A00] via-[#00FF9C] to-[#FF5A00]"></div>

              <div className="space-y-12 md:space-y-0">
                {/* 2020 Milestone */}
                <div className="relative md:flex md:items-center md:justify-between md:mb-20" data-testid="milestone-2020">
                  {/* Year Marker - Mobile */}
                  <div className="md:hidden flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#FF5A00] flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-3xl font-black text-zinc-900">2020</span>
                  </div>
                  
                  {/* Left Content */}
                  <div className="md:w-5/12 md:pr-12 md:text-right">
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-100 hover-elevate">
                      <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                        Founded in Malta
                      </h3>
                      <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                        OARC Digital was born with a bold vision: to revolutionize digital marketing through the power of AI. From our Mediterranean hub, we set out to redefine what's possible in marketing.
                      </p>
                    </div>
                  </div>

                  {/* Center Icon - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-[#FF5A00] items-center justify-center shadow-lg shadow-orange-500/30 z-10">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>

                  {/* Right Year Label - Desktop */}
                  <div className="hidden md:block md:w-5/12 md:pl-12">
                    <span className="text-5xl lg:text-6xl font-black text-zinc-200" style={{ letterSpacing: '-0.04em' }}>2020</span>
                  </div>
                </div>

                {/* 2021 Milestone */}
                <div className="relative md:flex md:items-center md:justify-between md:mb-20" data-testid="milestone-2021">
                  {/* Year Marker - Mobile */}
                  <div className="md:hidden flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#00FF9C] flex items-center justify-center shadow-lg shadow-green-500/30">
                      <Palette className="w-8 h-8 text-zinc-900" />
                    </div>
                    <span className="text-3xl font-black text-zinc-900">2021</span>
                  </div>

                  {/* Left Year Label - Desktop */}
                  <div className="hidden md:block md:w-5/12 md:pr-12 md:text-right">
                    <span className="text-5xl lg:text-6xl font-black text-zinc-200" style={{ letterSpacing: '-0.04em' }}>2021</span>
                  </div>

                  {/* Center Icon - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-[#00FF9C] items-center justify-center shadow-lg shadow-green-500/30 z-10">
                    <Palette className="w-10 h-10 text-zinc-900" />
                  </div>

                  {/* Right Content */}
                  <div className="md:w-5/12 md:pl-12">
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-100 hover-elevate">
                      <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                        AI-Powered Creative Launch
                      </h3>
                      <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                        Launched our revolutionary AI-powered creative services, rapidly expanding to serve European clients with cutting-edge campaigns that outperformed traditional approaches.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2022 Milestone */}
                <div className="relative md:flex md:items-center md:justify-between" data-testid="milestone-2022">
                  {/* Year Marker - Mobile */}
                  <div className="md:hidden flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#FF5A00] flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-3xl font-black text-zinc-900">2022</span>
                  </div>

                  {/* Left Content */}
                  <div className="md:w-5/12 md:pr-12 md:text-right">
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-100 hover-elevate">
                      <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                        AI Employees Platform
                      </h3>
                      <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                        Introduced our groundbreaking AI Employees platform, empowering businesses with autonomous digital workers. Grew to serve 50+ enterprise clients across multiple industries.
                      </p>
                    </div>
                  </div>

                  {/* Center Icon - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-[#FF5A00] items-center justify-center shadow-lg shadow-orange-500/30 z-10">
                    <Users className="w-10 h-10 text-white" />
                  </div>

                  {/* Right Year Label - Desktop */}
                  <div className="hidden md:block md:w-5/12 md:pl-12">
                    <span className="text-5xl lg:text-6xl font-black text-zinc-200" style={{ letterSpacing: '-0.04em' }}>2022</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission Statement */}
          <ScrollReveal delay={200}>
            <div className="mt-20 md:mt-28 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF5A00]/10 mb-8">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#FF5A00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">
                Our Mission
              </h3>
              <blockquote 
                className="font-black text-zinc-900 leading-tight max-w-4xl mx-auto"
                style={{ 
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  letterSpacing: '-0.02em'
                }}
                data-testid="text-mission-statement"
              >
                "We believe every business deserves access to <span className="text-[#FF5A00]">world-class AI-powered marketing</span>."
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Badges Section - 4 Pillars */}
      <section className="bg-white py-24 md:py-36" data-testid="section-badges">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
              {badges.map((badge, index) => {
                const IconComponent = badge.Icon;
                return (
                  <div key={index} className="text-center group" data-testid={`badge-${index}`}>
                    <div className="flex justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110">
                      <IconComponent className="w-20 h-20 md:w-24 md:h-24 text-[#FF5A00] opacity-90" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-zinc-900 mb-3" style={{ letterSpacing: '-0.02em' }}>{badge.title}</h3>
                    <p className="text-sm md:text-base text-zinc-600 leading-relaxed">{badge.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Horizontal Scrolling Carousel - Campaign Showcase */}
      <section className="bg-zinc-900 py-20 md:py-28 overflow-hidden" data-testid="section-carousel">
        <div className="mb-12 md:mb-16 px-6">
          <ScrollReveal>
            <h2 className="text-heading-xl font-black text-white text-center mb-4">
              Campaign Excellence
            </h2>
            <p className="text-body-lg text-white/70 text-center max-w-2xl mx-auto">
              Award-winning creative that drives results across industries
            </p>
          </ScrollReveal>
        </div>
        <div 
          ref={carouselRef}
          className="flex gap-6 md:gap-8 overflow-x-scroll scrollbar-hide px-6 md:px-12"
          style={{ scrollBehavior: 'auto' }}
          data-testid="carousel-container"
        >
          {carouselImages.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-80 md:w-[28rem] lg:w-[32rem] h-72 md:h-96 lg:h-[28rem] group hover-elevate" data-testid={`carousel-item-${index}`}>
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`Campaign ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY Timeline Section */}
      <section className="bg-white py-28 md:py-40" data-testid="section-story">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20 md:mb-28">
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-500 mb-8 font-bold">
                THE JOURNEY
              </p>
              <h2 
                className="font-black uppercase text-zinc-900 mb-6 leading-tight" 
                style={{ 
                  fontSize: 'clamp(2rem, 6vw, 4rem)',
                  letterSpacing: '-0.03em'
                }}
                data-testid="heading-our-story"
              >
                OUR STORY
              </h2>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-12">TIMELINE</p>
              <h3 
                className="font-bold text-zinc-900 mb-8" 
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.02em' }}
                data-testid="heading-history"
              >
                THE HISTORY...SO FAR
              </h3>
              <p className="text-body-lg text-zinc-600 max-w-3xl mx-auto mb-4" data-testid="text-story-intro">
                People often ask us, what's your story? How did OARC Digital become a thing? What were you doing before OARC Digital?
              </p>
              <p className="text-body-lg text-zinc-600 max-w-3xl mx-auto mb-8">
                You can find out our history with the timeline below, where you can discover who we are and why we exist.
              </p>
              <p className="text-heading-lg font-black text-zinc-900 mt-10">
                So, hello, we're <span className="text-[#FF5A00]">OARC Digital</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Timeline */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24 md:mb-32" data-testid="timeline">
            {timeline.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTimeline(index)}
                className={`px-8 py-4 rounded-xl font-black text-base md:text-lg transition-all duration-300 hover-elevate ${
                  activeTimeline === index
                    ? 'bg-[#FF5A00] text-white shadow-lg shadow-orange-500/30'
                    : 'bg-zinc-100 text-zinc-700'
                }`}
                style={{ letterSpacing: '-0.01em' }}
                data-testid={`timeline-${index}`}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Timeline Content Sections */}
          <div className="space-y-24" data-testid="timeline-milestones">
            {/* Milestone 1: The Vision (2015) */}
            <ScrollReveal delay={100}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={visionEye}
                  alt="The Vision"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-vision"
                />
              </div>
              <div>
                <h4 className="text-heading-lg font-bold text-zinc-900 mb-6" data-testid="heading-vision">
                  The Vision
                </h4>
                <p className="text-body-lg text-zinc-700 mb-4">
                  Remember the times before AI transformed marketing?
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  Well, we saw it coming.
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  Our founders began exploring how artificial intelligence could revolutionize creative work and revenue generation. Starting with simple automation experiments, they discovered that the future of marketing wasn't about replacing humans—it was about augmenting human creativity with intelligent systems.
                </p>
                <p className="text-body-lg text-zinc-700">
                  This vision became the foundation of everything OARC Digital would become: an agency where AI and human creativity work in perfect harmony.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Milestone 2: First AI Experiments (2018) */}
            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src={experimentsWorkspace}
                  alt="First AI Experiments"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-experiments"
                />
              </div>
              <div className="md:order-1">
                <h4 className="text-heading-lg font-bold text-zinc-900 mb-6" data-testid="heading-experiments">
                  The First AI Experiments
                </h4>
                <p className="text-body-lg text-zinc-700 mb-4">
                  In 2018, we started testing AI-powered creative tools and automation systems. What began as experimental projects quickly proved their worth.
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  Early successes included AI-generated copy that outperformed human-written variants, automated design systems that produced hundreds of variations in minutes, and predictive analytics that forecast campaign performance with uncanny accuracy.
                </p>
                <p className="text-body-lg text-zinc-700">
                  These experiments confirmed what we suspected: AI wasn't the future—it was the present. We just had to build it.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Milestone 3: Founded OARC (2020) */}
            <ScrollReveal delay={300}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={birthTeam}
                  alt="OARC Digital Founded"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-founded"
                />
              </div>
              <div>
                <h4 className="text-heading-lg font-bold text-zinc-900 mb-6" data-testid="heading-founded">
                  The Birth of OARC Digital
                </h4>
                <p className="text-body-lg text-zinc-700 mb-4">
                  In 2020, OARC Digital was officially born—an agency built from day one around AI, automation, and revenue optimization.
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  It was the right product at the right time. Brands were hungry for agencies that understood both creative excellence and technical automation. We won incredible clients in our infancy by delivering results that traditional agencies couldn't match.
                </p>
                <p className="text-body-lg text-zinc-700">
                  Our first AI-powered campaigns generated 3x ROI improvements, proving that our model worked. The future was here.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Milestone 4: Revenue Automation (2021) */}
            <ScrollReveal delay={100}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src={timeline3}
                  alt="Revenue Automation"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-revenue"
                />
              </div>
              <div className="md:order-1">
                <h4 className="text-heading-lg font-bold text-zinc-900 mb-6" data-testid="heading-revenue">
                  Revenue Automation Takes Off
                </h4>
                <p className="text-body-lg text-zinc-700 mb-4">
                  In 2021, we launched our Revenue Automation suite—intelligent systems that identify opportunities, nurture leads, and close deals autonomously.
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  Our clients saw immediate results: sales pipelines that never slept, conversion rates that climbed month after month, and customer acquisition costs that plummeted.
                </p>
                <p className="text-body-lg text-zinc-700">
                  This wasn't just marketing automation. This was revenue engineering powered by AI.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Milestone 5: Global Expansion (2022) */}
            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={globalNetwork}
                  alt="Global Expansion"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-global"
                />
              </div>
              <div>
                <h4 className="text-heading-lg font-bold text-zinc-900 mb-6" data-testid="heading-global">
                  Going Global
                </h4>
                <p className="text-body-lg text-zinc-700 mb-4">
                  By 2022, OARC Digital expanded beyond borders. Our AI-first model meant we could serve clients anywhere, anytime, with the same level of excellence.
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  We partnered with brands across Europe, North America, and Asia—delivering AI-powered creative and automation that transcended geography.
                </p>
                <p className="text-body-lg text-zinc-700">
                  Our remote-first, AI-augmented team proved that the future of work wasn't about office locations—it was about intelligent systems and global talent.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Milestone 6: AI Employees Launch (2023) */}
            <ScrollReveal delay={300}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src={carouselBiolage}
                  alt="AI Employees"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-employees"
                />
              </div>
              <div className="md:order-1">
                <h4 className="text-heading-lg font-bold text-zinc-900 mb-6" data-testid="heading-employees">
                  AI Employees Revolution
                </h4>
                <p className="text-body-lg text-zinc-700 mb-4">
                  In 2023, we launched our AI Employees platform—autonomous agents that handle customer service, content generation, data analysis, and more.
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  Brands could now scale infinitely without hiring limitations. Our AI workforce never sleeps, never tires, and constantly improves through machine learning.
                </p>
                <p className="text-body-lg text-zinc-700">
                  This was the breakthrough moment: intelligent agents working 24/7 to drive growth while human teams focused on strategy and innovation.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Milestone 7: Malta Hub (2024) */}
            <ScrollReveal delay={100}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={maltaHub}
                  alt="Malta Hub"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-malta"
                />
              </div>
              <div>
                <h4 className="text-heading-lg font-bold text-zinc-900 mb-6" data-testid="heading-malta">
                  Malta: Our European Hub
                </h4>
                <p className="text-body-lg text-zinc-700 mb-4">
                  In 2024, we established our European headquarters in Malta—a strategic location at the crossroads of Europe, Africa, and the Middle East.
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  Malta's thriving tech ecosystem, favorable business environment, and multilingual talent pool made it the perfect base for our global operations.
                </p>
                <p className="text-body-lg text-zinc-700">
                  From Malta, we serve clients worldwide with AI-powered creativity and automation that drives real business results.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Milestone 8: The Future (202?+) */}
            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src={futureSign}
                  alt="The Future"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-future"
                />
              </div>
              <div className="md:order-1">
                <h4 className="text-heading-lg font-bold text-zinc-900 mb-6" data-testid="heading-future">
                  The Future?
                </h4>
                <p className="text-body-lg text-zinc-700 mb-4">
                  Our focus is on pushing AI boundaries—building solutions that give our agency and our clients an unstoppable edge over the competition.
                </p>
                <p className="text-body-lg text-zinc-700 mb-4">
                  We're excited to evolve OARC Digital over the coming years. We have a clear vision for where the agency will be: the world's most advanced AI-powered marketing force.
                </p>
                <p className="text-body-lg text-zinc-700">
                  If you want to join us on this journey—whether you're a brand ready to transform or a talented individual who wants to shape the future—you know what to do. Let's talk.
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand Showcase - Premium Client Gallery */}
      <section className="bg-white py-24 md:py-40 overflow-hidden" data-testid="section-brand-showcase">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-24">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6 font-semibold" data-testid="text-brands-eyebrow">
                TRUSTED BY GLOBAL BRANDS
              </p>
              <h2 className="text-display font-black text-zinc-900 mb-6" data-testid="heading-brands">
                We Work With The Best
              </h2>
              <p className="text-body-lg text-zinc-600 max-w-3xl mx-auto">
                From fast-growing startups to global enterprises, we partner with brands that demand excellence in AI-powered marketing.
              </p>
            </div>
          </ScrollReveal>

          {/* Animated Client Logo Marquee */}
          <ScrollReveal delay={50}>
            <div className="mb-20 md:mb-28 relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <div className="overflow-hidden" data-testid="logo-marquee-container">
                <div className="flex motion-reduce:animate-none" style={{ 
                  animation: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : 'marquee-scroll 40s linear infinite',
                }} data-testid="logo-marquee">
                  {/* First complete set */}
                  <div className="flex flex-shrink-0 gap-16 md:gap-20 pr-16 md:pr-20">
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">FitnessPro</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">Luxe Essence</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">NaturalCare</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">HomeCraft</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">GamingTech</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">ProGamer</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">Biolage</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">IT Cosmetics</div>
                  </div>
                  {/* Second complete set - exact duplicate for seamless loop */}
                  <div className="flex flex-shrink-0 gap-16 md:gap-20 pr-16 md:pr-20">
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">FitnessPro</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">Luxe Essence</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">NaturalCare</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">HomeCraft</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">GamingTech</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">ProGamer</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">Biolage</div>
                    <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-20 text-xl md:text-2xl lg:text-3xl font-black text-zinc-300 hover:text-zinc-900 transition-colors duration-300 whitespace-nowrap">IT Cosmetics</div>
                  </div>
                </div>
              </div>
              
              {/* CSS animation with proper seamless loop */}
              <style>{`
                @keyframes marquee-scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                  [style*="marquee-scroll"] {
                    animation: none !important;
                  }
                }
              `}</style>
            </div>
          </ScrollReveal>

          {/* Flagship Campaign Gallery - 3 Column Grid */}
          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
              <div className="group relative overflow-hidden rounded-lg aspect-[4/5] hover-elevate" data-testid="campaign-card-1">
                <img
                  src={carouselBiolage}
                  alt="Biolage Campaign"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="group relative overflow-hidden rounded-lg aspect-[4/5] hover-elevate" data-testid="campaign-card-2">
                <img
                  src={carouselBeauty}
                  alt="IT Cosmetics Campaign"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="group relative overflow-hidden rounded-lg aspect-[4/5] hover-elevate" data-testid="campaign-card-3">
                <img
                  src={carouselFashion}
                  alt="Fashion Campaign"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder's Manifesto - Editorial Section */}
      <section className="bg-zinc-900 py-24 md:py-40" data-testid="section-manifesto">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
              {/* Left - Image Column (2/5) */}
              <div className="md:col-span-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={birthTeam}
                    alt="OARC Digital Team"
                    className="w-full h-full object-cover"
                    data-testid="img-manifesto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
                </div>
              </div>

              {/* Right - Content Column (3/5) */}
              <div className="md:col-span-3">
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-orange-500 mb-8 font-bold" data-testid="text-manifesto-eyebrow">
                  OUR PHILOSOPHY
                </p>
                <h2 className="text-lg md:text-xl lg:text-2xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }} data-testid="heading-manifesto">
                  Built Different. Driven by Intelligence, Powered by Humans.
                </h2>
                
                {/* Pull Quotes & Philosophy */}
                <div className="space-y-4">
                  <div className="border-l-3 border-orange-500 pl-3" data-testid="quote-1">
                    <p className="text-sm md:text-base text-white font-light italic leading-snug mb-1.5">
                      "We don't rely on AI alone. We combine AI with human creativity and business intelligence to produce work that actually grows revenue."
                    </p>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-wide">
                      — OARC DIGITAL, FOUNDERS
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-zinc-300 leading-snug" data-testid="manifesto-body-1">
                    While most agencies treat AI as a shortcut or a gimmick, we use it the way it was meant to be used: as a force multiplier for human talent, strategic thinking, and business outcomes.
                  </p>

                  {/* Core Principles */}
                  <div className="space-y-1 pl-3 border-l-2 border-zinc-700">
                    <p className="text-[11px] md:text-xs text-white leading-snug">
                      <span className="font-bold text-green-500">AI</span> gives us scale.
                    </p>
                    <p className="text-[11px] md:text-xs text-white leading-snug">
                      <span className="font-bold text-orange-500">Creativity</span> gives us originality.
                    </p>
                    <p className="text-[11px] md:text-xs text-white leading-snug">
                      <span className="font-bold text-purple-400">Business economics</span> gives us direction.
                    </p>
                    <p className="text-[11px] md:text-xs text-white font-semibold leading-snug">
                      Revenue is the result.
                    </p>
                  </div>

                  <div className="border-l-3 border-green-500 pl-3" data-testid="quote-2">
                    <p className="text-sm md:text-base text-white font-light italic leading-snug mb-1.5">
                      "Tools don't build great campaigns. People do — with the right intelligence behind them."
                    </p>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-wide">
                      — THE OARC APPROACH
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-zinc-300 leading-snug" data-testid="manifesto-body-2">
                    This isn't about automation. It's about precision, clarity and performance — using AI to eliminate the slow, repetitive tasks so our team can focus on strategy, storytelling, experimentation and ROI-driven execution.
                  </p>

                  <p className="text-xs md:text-sm text-white font-semibold leading-snug" data-testid="manifesto-cta">
                    We're not a traditional agency.<br />
                    We're not an AI-only agency.<br />
                    <span className="block mt-1.5 text-sm">
                      We're the hybrid agency built for a world where human creativity and machine intelligence create unfair business advantage.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Success in Numbers - Exact Superside Clone */}
      <SuccessInNumbers />

      {/* Core Values Section */}
      <section className="bg-white py-20 md:py-32" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 mb-16 text-center" data-testid="heading-core-values">
              What Are the Core Values of OARC Digital?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {coreValues.map((value, index) => {
                const IconComponent = value.Icon;
                return (
                  <div key={index} className="text-center" data-testid={`value-${index}`}>
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-[#FF5A00]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">{value.title}</h3>
                    <p className="text-base text-zinc-700 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-20 md:py-32 text-center" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8" data-testid="heading-cta">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed" data-testid="text-cta-description">
              Join the brands who are winning with AI-powered creativity, revenue automation, and intelligent systems.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#FF5A00] border-[#E65100] text-white text-lg rounded-full font-bold"
                data-testid="button-cta"
              >
                Work with us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
