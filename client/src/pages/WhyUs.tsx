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
  Sparkles 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import companyLogo from "@assets/final 2_1762907995368.png";
import heroImg from "@assets/generated_images/Professional_agency_office_workspace_a047b567.png";
import visionEye from "@assets/pexels-burakkostak-18809_1763243435924.jpg";
import experimentsWorkspace from "@assets/image_1763243519050.png";
import birthTeam from "@assets/pexels-thirdman-5257897 (1)_1763243949488.jpg";
import globalNetwork from "@assets/global-influencer-marketing-agency-socially-powerful_1763244062764.jpg";
import maltaHub from "@assets/pexels-pham-ngoc-anh-170983008-14237665_1763244193737.jpg";
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
    document.title = "Why OARC Digital | AI-Powered Marketing Agency Malta";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover why OARC Digital is redefining digital marketing with AI-powered creativity, revenue automation, and intelligent systems. Based in Malta, serving global brands."
      );
    }

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
      {/* Hero Section - Socially Powerful Style */}
      <section className="hero-section-why-us relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-black" data-testid="section-hero">
        <img
          ref={heroImgRef}
          src={heroImg}
          alt="OARC Digital Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40 will-change-transform"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4" data-testid="text-hero-kicker">
            why us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6" data-testid="heading-hero">
            What Is OARC Digital?
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8" data-testid="text-hero-description">
            OARC Digital is a <strong className="text-[#00FF9C]">global AI-powered marketing agency</strong> engineered to help brands win through intelligent creativity, revenue automation, and AI employees across all digital channels.
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-mission">
            We partner with forward-thinking brands to create performance-driven campaigns powered by AI that cut through the noise and deliver measurable ROI (return on investment).
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mt-4" data-testid="text-hero-positioning">
            The mission of OARC Digital is to empower brands to connect with audiences through AI-enhanced creative, autonomous revenue systems, and platform-native automation.
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mt-4" data-testid="text-hero-value-prop">
            We are positioned as a full-service, AI-first agency that brings together strategy, automation, tech, and creativity to shape brand narratives that matter across all digital platforms, worldwide.
          </p>
        </div>
      </section>

      {/* Badges Section - 4 Awards/Achievements */}
      <section className="bg-white py-16 md:py-20" data-testid="section-badges">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {badges.map((badge, index) => {
                const IconComponent = badge.Icon;
                return (
                  <div key={index} className="text-center" data-testid={`badge-${index}`}>
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-[#FF5A00]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-1">{badge.title}</h3>
                    <p className="text-sm md:text-base text-zinc-600">{badge.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Horizontal Scrolling Carousel - Campaign Images */}
      <section className="bg-zinc-50 py-16" data-testid="section-carousel">
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide"
          style={{ scrollBehavior: 'auto' }}
          data-testid="carousel-container"
        >
          {carouselImages.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-80 md:w-96 h-64 md:h-80" data-testid={`carousel-item-${index}`}>
              <img
                src={img}
                alt={`Campaign ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY Timeline Section */}
      <section className="bg-white py-20 md:py-32" data-testid="section-story">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-zinc-900 mb-4" data-testid="heading-our-story">
                OUR STORY
              </h2>
              <p className="text-sm uppercase tracking-widest text-zinc-500 mb-8">timeline</p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-history">
                THE HISTORY...SO FAR
              </h3>
              <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed mb-4" data-testid="text-story-intro">
                People often ask us, what's your story? How did OARC Digital become a thing? What were you doing before OARC Digital?
              </p>
              <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed mb-4">
                You can find out our history with the timeline below, where you can discover who we are and why we exist.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-zinc-900 mt-8">
                So, hello, we're <span className="text-[#FF5A00]">OARC Digital</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Timeline */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20" data-testid="timeline">
            {timeline.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTimeline(index)}
                className={`px-6 py-3 rounded-lg font-bold text-base md:text-lg transition-all duration-300 ${
                  activeTimeline === index
                    ? 'bg-[#FF5A00] text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
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
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-vision">
                  The Vision
                </h4>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Remember the times before AI transformed marketing?
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Well, we saw it coming.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Our founders began exploring how artificial intelligence could revolutionize creative work and revenue generation. Starting with simple automation experiments, they discovered that the future of marketing wasn't about replacing humans—it was about augmenting human creativity with intelligent systems.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
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
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-experiments">
                  The First AI Experiments
                </h4>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  In 2018, we started testing AI-powered creative tools and automation systems. What began as experimental projects quickly proved their worth.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Early successes included AI-generated copy that outperformed human-written variants, automated design systems that produced hundreds of variations in minutes, and predictive analytics that forecast campaign performance with uncanny accuracy.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
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
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-founded">
                  The Birth of OARC Digital
                </h4>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  In 2020, OARC Digital was officially born—an agency built from day one around AI, automation, and revenue optimization.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  It was the right product at the right time. Brands were hungry for agencies that understood both creative excellence and technical automation. We won incredible clients in our infancy by delivering results that traditional agencies couldn't match.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
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
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-revenue">
                  Revenue Automation Takes Off
                </h4>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  In 2021, we launched our Revenue Automation suite—intelligent systems that identify opportunities, nurture leads, and close deals autonomously.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Our clients saw immediate results: sales pipelines that never slept, conversion rates that climbed month after month, and customer acquisition costs that plummeted.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
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
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-global">
                  Going Global
                </h4>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  By 2022, OARC Digital expanded beyond borders. Our AI-first model meant we could serve clients anywhere, anytime, with the same level of excellence.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  We partnered with brands across Europe, North America, and Asia—delivering AI-powered creative and automation that transcended geography.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
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
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-employees">
                  AI Employees Revolution
                </h4>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  In 2023, we launched our AI Employees platform—autonomous agents that handle customer service, content generation, data analysis, and more.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Brands could now scale infinitely without hiring limitations. Our AI workforce never sleeps, never tires, and constantly improves through machine learning.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
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
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-malta">
                  Malta: Our European Hub
                </h4>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  In 2024, we established our European headquarters in Malta—a strategic location at the crossroads of Europe, Africa, and the Middle East.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Malta's thriving tech ecosystem, favorable business environment, and multilingual talent pool made it the perfect base for our global operations.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
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
                  src={carouselWorkspace}
                  alt="The Future"
                  className="w-full h-80 object-cover rounded-lg"
                  data-testid="img-milestone-future"
                />
              </div>
              <div className="md:order-1">
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-future">
                  The Future?
                </h4>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Our focus is on pushing AI boundaries—building solutions that give our agency and our clients an unstoppable edge over the competition.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  We're excited to evolve OARC Digital over the coming years. We have a clear vision for where the agency will be: the world's most advanced AI-powered marketing force.
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
                  If you want to join us on this journey—whether you're a brand ready to transform or a talented individual who wants to shape the future—you know what to do. Let's talk.
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Behind OARC - Q&A Section */}
      <section className="bg-zinc-50 py-20 md:py-32" data-testid="section-story-behind">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 mb-12" data-testid="heading-story-behind">
            What Is the Story Behind OARC Digital?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              OARC Digital was born from a vision to merge human creativity with artificial intelligence long before AI became mainstream. It all began in 2015, when our founders started experimenting with early AI tools and automation systems.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              By 2020, OARC Digital was officially founded as an AI-first marketing agency—built from day one around intelligent systems, creative automation, and revenue optimization.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              The agency evolved from experimental AI projects into a global force, serving brands worldwide from our Malta headquarters. Today, OARC Digital combines AI-powered creative, autonomous revenue systems, and a global team of specialists to deliver campaigns that traditional agencies can't match.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              We've transformed from an automation startup into an AI-first powerhouse—and we're just getting started.
            </p>
          </div>

          {/* When Was OARC Digital Founded? */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 mb-6" data-testid="heading-when-founded">
                When Was OARC Digital Founded?
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                OARC Digital was founded in <strong>2020</strong>, but its origin dates back to 2015 when the founders began experimenting with AI-powered marketing automation.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                The agency evolved from this AI-driven movement into a global marketing powerhouse that combines creativity with intelligent automation.
              </p>
            </div>
            <div>
              <img
                src={heroImg}
                alt="OARC Digital Founded"
                className="w-full h-80 object-cover rounded-lg"
                data-testid="img-founded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success in Numbers - Superside Style */}
      <section className="bg-[#0A2818] py-20 md:py-32" data-testid="section-success-numbers">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
              {/* Left Column - Text */}
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 mb-6 font-semibold" data-testid="text-success-eyebrow">
                  SUCCESS IN NUMBERS
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'serif', letterSpacing: '-0.02em' }} data-testid="heading-success">
                  The best return on your investment
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed" data-testid="text-success-description">
                  Brands, teams and founders trust OARC Digital to deliver smart, conversion-focused creative at scale.
                </p>
              </div>

              {/* Right Column - 2x2 Stats Grid */}
              <div className="grid grid-cols-2 gap-8 md:gap-10">
                {/* Stat 1: Brands */}
                <div data-testid="stat-brands">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2" style={{ letterSpacing: '-0.03em' }}>
                    120+
                  </div>
                  <p className="text-sm md:text-base text-white/70 font-normal leading-tight">
                    Brands partnered with OARC Digital
                  </p>
                </div>

                {/* Stat 2: ROAS */}
                <div data-testid="stat-roas">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2" style={{ letterSpacing: '-0.03em' }}>
                    3x
                  </div>
                  <p className="text-sm md:text-base text-white/70 font-normal leading-tight">
                    Average increase in ROAS
                  </p>
                </div>

                {/* Stat 3: Retention */}
                <div data-testid="stat-retention">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2" style={{ letterSpacing: '-0.03em' }}>
                    92%
                  </div>
                  <p className="text-sm md:text-base text-white/70 font-normal leading-tight">
                    Client retention rate
                  </p>
                </div>

                {/* Stat 4: Payback */}
                <div data-testid="stat-payback">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2" style={{ letterSpacing: '-0.03em' }}>
                    6
                  </div>
                  <p className="text-sm md:text-base text-white/70 font-normal leading-tight">
                    Typical payback period (months)
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
