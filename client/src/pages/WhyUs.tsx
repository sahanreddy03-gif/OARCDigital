import Layout from "@/components/layout/Layout";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Bot,
  Globe,
  Zap,
  TrendingUp,
  Rocket,
  Award,
  Sparkles
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@assets/download_1765164422640.jpg";

import birthTeam from "@assets/pexels-thirdman-5257897 (1)_1763243949488.jpg";
import maltaHub from "@assets/pexels-pham-ngoc-anh-170983008-14237665_1763244193737.jpg";
import experimentsWorkspace from "@assets/campaign-img1_1763245285586.png";
import globalNetwork from "@assets/global-influencer-marketing-agency-socially-powerful_1763244062764.jpg";

import carousel1 from "@assets/stock_images/modern_marketing_age_2cb6d515.jpg";
import carousel3 from "@assets/stock_images/modern_marketing_age_0c16bbf6.jpg";
import carouselWorkspace from "@assets/image_1763243239681.png";
import carouselBiolage from "@assets/Biolage-influencer-marketing-agency-socially-powerful_1763243258630.jpg";
import carouselBeauty from "@assets/it-cosmetics-socially-powerful-marketing-agency-1_1763243258630.png";
import carouselFashion from "@assets/joshua-rondeau-7mHMwHbJ_0o-unsplash-scaled-e1690895515404_1763243258631.jpg";
import carouselJoy from "@assets/Screenshot-2023-08-01-at-16.06.24_1763243258631.png";

import SEOHead from "@/components/SEOHead";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setIsVisible(true), delay);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
}

export default function WhyUs() {
  const heroImgRef = useRef<HTMLImageElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (heroImgRef.current) {
      ScrollTrigger.create({
        trigger: '.hero-section-why-us',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.9,
        animation: gsap.to(heroImgRef.current, { yPercent: 20, scale: 1.1, ease: 'none' })
      });
    }

    const carousel = carouselRef.current;
    if (carousel) {
      const scrollInterval = setInterval(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 1;
        }
      }, 20);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  const carouselImages = [
    carouselWorkspace, carouselBiolage, carouselBeauty, carousel1, carouselFashion, carouselJoy, carousel3,
    carouselWorkspace, carouselBiolage, carouselBeauty, carousel1, carouselFashion, carouselJoy, carousel3
  ];

  const badges = [
    { title: "AI-Native", subtitle: "Born in the Intelligence Era", Icon: Bot },
    { title: "Revenue-First", subtitle: "Growth over Vanity Metrics", Icon: TrendingUp },
    { title: "Malta HQ", subtitle: "European Heart, Global Reach", Icon: Globe },
    { title: "Speed", subtitle: "48h Turnaround Times", Icon: Zap }
  ];

  return (
    <Layout>
      <SEOHead
        title="Why OARC? | Born in the AI Era"
        description="OARC Digital was founded in 2023 to bridge the gap between human creativity and AI efficiency."
        canonicalUrl={`https://oarcdigital.com/why-us`}
        ogType="website"
      />

      {/* 1. HERO */}
      <section className="hero-section-why-us relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black -mt-20" data-testid="section-hero">
        <img
          ref={heroImgRef}
          src={heroImg}
          alt="OARC Digital Forest"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0E27]"></div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#00D9FF] mb-8" data-testid="text-hero-kicker">
            Origin Story
          </p>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9]" data-testid="heading-hero">
            Born in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-lime-400">
              The AI Era.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed" data-testid="text-hero-description">
            Founded in 2023 with a singular mission: <br />
            <strong className="text-white font-bold">Replace the broken agency model forever.</strong>
          </p>
        </div>
      </section>

      {/* 2. THE PROBLEM (Origin) */}
      <section className="bg-[#0A0E27] py-24 relative overflow-hidden text-white border-b border-white/5" data-testid="section-origin">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-origin">Why start in <span className="text-[#00D9FF]">2023</span>?</h2>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Traditional agencies were charging fortunes for manual work. We saw a better way.
                </p>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  OARC Digital was built from day one as an "Operating System" for growth. No bloated teams. No slow approvals. Just elite creative direction amplified by infinite AI execution.
                </p>
              </div>
              <div className="relative">
                <img src={birthTeam} className="rounded-2xl shadow-2xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity" alt="Founding Team" data-testid="img-team" />
                <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                  <p className="font-bold text-lg">"Outcomes over Hours."</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. THE TIMELINE (2023, 2024, 2025) */}
      <section className="bg-[#0A0E27] py-24 relative overflow-hidden" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            {/* Neon Spine */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D9FF] via-lime-400 to-[#00D9FF] opacity-30"></div>

            {/* 2023: MALTA */}
            <ScrollReveal delay={100}>
              <div className="relative flex flex-col md:flex-row items-center mb-32 group" data-testid="milestone-2023">
                <div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0">
                  <h3 className="text-6xl font-black text-white/10 absolute -top-10 left-0 md:left-auto md:right-0">2023</h3>
                  <h4 className="text-3xl font-bold text-white mb-4 relative z-10">Founding The Hub</h4>
                  <p className="text-slate-400 text-lg">
                    We established our HQ in Malta. A strategic European hub perfect for global reach.
                  </p>
                </div>

                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#00D9FF] border-4 border-[#0A0E27] shadow-[0_0_20px_#00D9FF] z-20 transform -translate-x-[19px] md:-translate-x-1/2 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-[#0A0E27]" />
                </div>

                <div className="md:w-1/2 md:pl-16 pl-12 mt-6 md:mt-0">
                  <img src={maltaHub} className="rounded-xl border border-white/10 w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700 shadow-2xl" alt="Malta HQ" data-testid="img-malta" />
                </div>
              </div>
            </ScrollReveal>

            {/* 2024: AI DEPLOYMENT */}
            <ScrollReveal delay={200}>
              <div className="relative flex flex-col md:flex-row-reverse items-center mb-32 group" data-testid="milestone-2024">
                <div className="md:w-1/2 md:pl-16 pl-12 md:pl-0">
                  <h3 className="text-6xl font-black text-white/10 absolute -top-10 left-0">2024</h3>
                  <h4 className="text-3xl font-bold text-white mb-4 relative z-10">AI Scale</h4>
                  <p className="text-slate-400 text-lg">
                    We launched the AI Employees platform. Clients began hiring autonomous agents for social, sales, and support.
                  </p>
                </div>

                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-lime-400 border-4 border-[#0A0E27] shadow-[0_0_20px_#a3e635] z-20 transform -translate-x-[19px] md:-translate-x-1/2 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#0A0E27]" />
                </div>

                <div className="md:w-1/2 md:pr-16 text-right pl-12 mt-6 md:mt-0">
                  <img src={experimentsWorkspace} className="rounded-xl border border-white/10 w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700 shadow-2xl" alt="AI Workspace" data-testid="img-ai-workspace" />
                </div>
              </div>
            </ScrollReveal>

            {/* 2025: GLOBAL */}
            <ScrollReveal delay={300}>
              <div className="relative flex flex-col md:flex-row items-center mb-12 group" data-testid="milestone-2025">
                <div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0">
                  <h3 className="text-6xl font-black text-white/10 absolute -top-10 left-0 md:left-auto md:right-0">2025</h3>
                  <h4 className="text-3xl font-bold text-white mb-4 relative z-10">Global Dominance</h4>
                  <p className="text-slate-400 text-lg">
                    OARC Digital is now the default operating system for high-growth brands worldwide.
                  </p>
                </div>

                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#0A0E27] shadow-[0_0_20px_white] z-20 transform -translate-x-[19px] md:-translate-x-1/2 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#0A0E27]" />
                </div>

                <div className="md:w-1/2 md:pl-16 pl-12 mt-6 md:mt-0">
                  <img src={globalNetwork} className="rounded-xl border border-white/10 w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700 shadow-2xl" alt="Global Network" data-testid="img-global" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. BADGES - 4 Pillars */}
      <section className="bg-[#0A0E27] py-24 border-t border-white/5" data-testid="section-badges">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
              {badges.map((badge, index) => {
                const IconComponent = badge.Icon;
                return (
                  <div key={index} className="text-center group" data-testid={`badge-${index}`}>
                    <div className="flex justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110">
                      <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-[#00D9FF] opacity-90" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-2">{badge.title}</h3>
                    <p className="text-sm md:text-base text-slate-400">{badge.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. CAMPAIGN EXCELLENCE (Carousel) */}
      <section className="bg-black py-24 relative border-t border-white/10 overflow-hidden" data-testid="section-campaigns">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-2" data-testid="heading-campaigns">Campaign Excellence</h2>
          <p className="text-slate-500">The result of Human Strategy + AI Execution.</p>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden no-scrollbar whitespace-nowrap px-4"
          data-testid="carousel-container"
        >
          {carouselImages.map((img, i) => (
            <div key={i} className="inline-block w-[300px] h-[400px] rounded-2xl overflow-hidden relative group flex-shrink-0 border border-white/10" data-testid={`carousel-item-${i}`}>
              <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campaign" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">View Campaign</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="bg-gradient-to-b from-black to-[#0A0E27] py-24 text-center" data-testid="section-cta">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6">
            <Sparkles className="w-12 h-12 text-[#00D9FF] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-testid="heading-cta">
              Ready to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-lime-400">AI Era</span>?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Partner with the agency built for the future.
            </p>
            <Link href="/contact">
              <button className="bg-[#c4ff4d] hover:bg-[#b8f547] text-black font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105" data-testid="button-cta">
                Start Your Journey
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
}
