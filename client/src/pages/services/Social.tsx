import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  ArrowRight, CheckCircle2, Globe, Sparkles, BarChart3, Users2, Layers,
  ChevronLeft, ChevronRight, TrendingUp, MessageCircle, Zap
} from "lucide-react";

import conferenceImg from "@assets/pexels-sasi-tha-13049577_1764633603081.jpg";
import arcadeImg from "@assets/pexels-pho-tomass-883344227-31612601_1764634936625.jpg";
import awardTeamImg from "@assets/pexels-mikael-blomkvist-6476256_1764635228817.jpg";
import largeTeamImg from "@assets/pexels-bertellifotografia-2467506_1761761073217.jpg";
import beybladeImg from "@assets/TefalPictures-32-scaled_1761760754960.jpg";
import videoImg1 from "@assets/stock_images/social_media_content_75f5c57d.jpg";
import videoImg2 from "@assets/stock_images/social_media_content_806a81e8.jpg";

export default function Social() {
  const [currentService, setCurrentService] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Channel Growth & Community",
      description: "Building engaged audiences across every platform",
      points: [
        "Strategic Content Planning",
        "Visual & Video Production",
        "Community Engagement",
        "Cross-Platform Publishing",
        "Brand Voice Development"
      ]
    },
    {
      icon: Sparkles,
      title: "Content Production",
      description: "Creating scroll-stopping content native to each platform",
      points: [
        "Short-Form Video (TikTok, Reels)",
        "Original Graphics & Motion",
        "User-Generated Content",
        "Story & Feed Optimization"
      ]
    },
    {
      icon: BarChart3,
      title: "Paid Amplification",
      description: "Strategic ad campaigns that maximize your reach and ROI",
      points: [
        "Campaign Strategy & Execution",
        "Audience Research & Targeting",
        "Creative Testing & Iteration",
        "Performance Optimization",
        "Conversion Tracking"
      ]
    },
    {
      icon: Users2,
      title: "Creator Partnerships",
      description: "Authentic collaborations that amplify your message",
      points: [
        "Full-Service Campaign Management",
        "Brand & Performance Objectives",
        "Micro to Macro Partnerships",
        "Content Rights & Usage"
      ]
    },
    {
      icon: Layers,
      title: "Analytics & Intelligence",
      description: "Data-driven insights that fuel smarter decisions",
      points: [
        "Custom Dashboard Development",
        "Competitive Monitoring",
        "Audience & Trend Analysis",
        "Performance Benchmarking",
        "Strategic Recommendations"
      ]
    }
  ];

  const benefits = [
    {
      title: "Platform Expertise",
      description: "Our team maintains direct relationships with Meta, TikTok, and LinkedIn, giving us early access to new features and algorithm insights that keep your brand ahead."
    },
    {
      title: "Specialized Talent",
      description: "From strategists to videographers, our in-house specialists focus exclusively on social—no generalists, just experts who live and breathe each platform."
    },
    {
      title: "Algorithm-Native Content",
      description: "We craft content engineered for each platform's unique algorithm, ensuring maximum organic reach while building genuine brand affinity."
    },
    {
      title: "Real-Time Reporting",
      description: "Custom dashboards aligned to your KPIs deliver transparent insights, so you always know exactly how your investment is performing."
    },
    {
      title: "Scalable Solutions",
      description: "Whether launching from scratch or scaling existing channels, our flexible approach adapts to your growth stage and ambitions."
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const nextBenefit = () => {
    setCurrentBenefit((prev) => (prev + 1) % benefits.length);
  };

  const prevBenefit = () => {
    setCurrentBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <Layout>
      <SEOHead
        title="Organic Social Media Management | Strategy & Community | OARC Digital"
        description="Build engaged communities that drive real business results. Daily content, community management, and data-driven strategy to grow your organic presence."
        canonicalUrl="https://oarcdigital.com/services/social"
        ogType="article"
        structuredData={createServiceSchema(
          "Organic Social Media Services",
          "Build engaged communities that drive real business results. Daily content, community management, and data-driven strategy.",
          "Organic Social"
        )}
        schemaId="service-social"
      />
      
      {/* Hero Section */}
      <section className="relative py-14 px-4 bg-[#f5f0e6] overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-radial"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-4"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6" data-testid="heading-social">
            Organic Social
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-black mb-5">
            Build communities that drive real business growth
          </h2>

          <p className="text-base text-black mb-5">
            Growing an organic following takes more than posting consistently. It takes strategy.
          </p>

          <p className="text-base text-black mb-6">
            We handle everything from content planning to community engagement, turning your social presence into a growth engine.
          </p>

          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-lets-chat-hero"
            >
              Start Growing
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Text Left + Image Right Section */}
      <ScrollReveal>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#4a7000]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Built for the algorithm-first era
                </h2>

                <p className="text-base text-black mb-4">
                  Every platform rewards different behaviors. We've decoded what makes content thrive on each one.
                </p>

                <p className="text-base text-black mb-4">
                  Our strategies aren't about vanity metrics—they're engineered to drive measurable outcomes. From awareness to acquisition, every piece of content serves a purpose.
                </p>

                <p className="text-base text-black mb-6">
                  We bring together strategists, creators, and analysts who specialize in turning social presence into business performance.
                </p>

                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-1"
                  >
                    Discuss Your Goals
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </button>
                </Link>
              </div>

              <div className="image-reveal rounded-3xl">
                <img 
                  src={conferenceImg}
                  alt="Strategic planning session"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-conference"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Image Left + Text Right Section */}
      <ScrollReveal delay={200}>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-surface-lime"></div>
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="image-reveal rounded-3xl glow-lime-subtle">
                <img 
                  src={arcadeImg}
                  alt="Creative content production"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-arcade"
                />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Native content for every platform
                </h2>

                <p className="text-base text-black mb-4">
                  Cross-posting the same content everywhere? That's leaving growth on the table.
                </p>

                <p className="text-base text-black mb-4">
                  Each platform has its own culture, format preferences, and audience expectations. We create content specifically optimized for where it will live—not generic assets stretched across channels.
                </p>

                <p className="text-base text-black mb-6">
                  Our production team stays ahead of platform updates, format changes, and emerging trends so your content always feels fresh and relevant.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-2"
                  >
                    See Our Approach
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Text Left + Image Right Section */}
      <ScrollReveal delay={300}>
        <section className="relative py-14 px-4 bg-[#f5f0e6] overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#c4ff4d]/5 rounded-full blur-2xl animate-float-delayed"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Performance meets creativity
                </h2>

                <p className="text-base text-black mb-4">
                  Beautiful content that doesn't convert is just noise. We marry creative excellence with rigorous performance analysis.
                </p>

                <p className="text-base text-black mb-4">
                  Every campaign is built on insights—what's working, what's not, and what opportunities exist. We continuously test, learn, and refine.
                </p>

                <p className="text-base text-black mb-6">
                  The result? Content strategies that look stunning and consistently outperform benchmarks.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-3"
                  >
                    Explore Results
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </button>
                </Link>
              </div>

              <div className="image-reveal rounded-3xl">
                <img 
                  src={awardTeamImg}
                  alt="Award-winning campaign results"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-award"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Full-Service Social Offering Section */}
      <section className="relative py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-soft"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-2">
            Complete social
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-8">
            solutions...
          </h2>

          <div className="flex items-center justify-start gap-2 mb-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentService ? 'w-8 bg-[#c4ff4d] glow-lime' : 'w-2 bg-zinc-300'
                }`}
                data-testid={`dot-service-${idx}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 stagger-fade-in">
            {[0, 1, 2].map((offset) => {
              const actualIdx = (currentService + offset) % services.length;
              const service = services[actualIdx];
              const Icon = service.icon;
              
              return (
                <div key={actualIdx} className="glass-lime-strong rounded-3xl p-8 hover-lift" data-testid={`card-service-${actualIdx}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-[#0a0a0a] rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-[#c4ff4d]" />
                    </div>
                    {offset === 2 && (
                      <button
                        onClick={nextService}
                        className="w-11 h-11 bg-black rounded-full flex items-center justify-center hover-elevate"
                        data-testid="button-next-service"
                      >
                        <ArrowRight className="h-4 w-4 text-white" />
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-black mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#1a2e29]/70 mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-1" />
                        <span className="text-sm text-[#1a2e29]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <Link href="/services">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-view-all-services"
            >
              Explore All Services
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-14 px-4 bg-[#f5f0e6]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Social Success Stories
          </h2>

          <Link href="/our-work">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 mb-8"
              data-testid="button-view-case-studies"
            >
              View All Results
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>

          <Link href="/case-studies/tefal">
            <div className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer hover-elevate" data-testid="card-case-study">
              <img 
                src={beybladeImg}
                alt="Social media campaign results"
                className="w-full rounded-3xl h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#c4ff4d] text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Creator Campaigns
                    </span>
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Paid Amplification
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3">
                    Driving record product launches through strategic social campaigns
                  </h3>
                  <p className="text-white text-lg">
                    Multi-platform strategy that exceeded sales targets and built lasting brand advocacy.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Social Content Section */}
      <section className="py-14 px-4 bg-[#f5f0e6]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Recent
          </h2>
          <h2 className="text-3xl md:text-4xl font-black mb-8" style={{ color: '#6b9b12' }}>
            Campaign Highlights
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden" data-testid="content-1">
              <img 
                src={videoImg1}
                alt="Brand campaign example"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-black text-white">Lifestyle Brand Launch</h3>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden" data-testid="content-2">
              <img 
                src={videoImg2}
                alt="Social content showcase"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-black text-white">Retail Growth Campaign</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OARC Digital Section */}
      <section className="relative py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c4ff4d]/15 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              The OARC Advantage
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prevBenefit}
                className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover-elevate"
                data-testid="button-prev-benefit"
              >
                <ChevronLeft className="h-6 w-6 text-black" />
              </button>
              <button
                onClick={nextBenefit}
                className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover-elevate"
                data-testid="button-next-benefit"
              >
                <ChevronRight className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 mb-8">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBenefit(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentBenefit ? 'w-8 bg-[#c4ff4d] glow-lime' : 'w-2 bg-zinc-300'
                }`}
                data-testid={`dot-benefit-${idx}`}
              />
            ))}
          </div>

          <div className="bg-black text-white rounded-3xl p-10 glow-lime-subtle" data-testid="card-benefit-current">
            <div className="w-16 h-16 bg-[#c4ff4d] rounded-full flex items-center justify-center mb-6 stat-glow">
              <TrendingUp className="h-8 w-8 text-black" />
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              {benefits[currentBenefit].title}
            </h3>

            <p className="text-lg text-white/80">
              {benefits[currentBenefit].description}
            </p>
          </div>

          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2 mt-8"
              data-testid="button-get-in-touch-final"
            >
              Start Your Growth Journey
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider mb-3" style={{ color: '#6b9b12' }}>IDEAL FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Brands ready to <span className="italic" style={{ color: '#6b9b12' }}>dominate</span> social
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Growth-Stage Startups",
                items: [
                  "Building brand awareness from zero",
                  "Limited internal resources",
                  "Need rapid audience growth"
                ]
              },
              {
                icon: TrendingUp,
                title: "Scaling Brands",
                items: [
                  "Ready to professionalize social",
                  "Want consistent content quality",
                  "Looking for measurable ROI"
                ]
              },
              {
                icon: MessageCircle,
                title: "Enterprise Teams",
                items: [
                  "Need specialist support",
                  "Multi-market coordination",
                  "Advanced reporting requirements"
                ]
              }
            ].map((category, idx) => (
              <div key={idx} className="glass-lime rounded-3xl p-8 hover-lift" data-testid={`card-audience-${idx}`}>
                <div className="w-14 h-14 bg-[#c4ff4d] rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-black text-black mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#1a2e29]/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c4ff4d]/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to transform your social presence?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-enhanced social strategies can drive measurable growth for your brand.
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-lg font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
              data-testid="button-final-cta"
            >
              Schedule Your Strategy Call
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
