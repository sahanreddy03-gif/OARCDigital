import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Target, TrendingUp, BarChart3, Palette, Settings, Zap, LineChart } from 'lucide-react';
import { SiMeta, SiGoogle, SiTiktok, SiPinterest } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from '@assets/paid-advertising-optimized.jpg';
import formalTeamImg from '@assets/stock_images/digital_advertising__84eb3355.jpg';
import conferenceTeamImg from '@assets/stock_images/digital_advertising__e3a5e56c.jpg';
import studioImg from '@assets/stock_images/graphic_design_creat_e05eb8ba.jpg';
import largeTeamImg from '@assets/stock_images/digital_advertising__72c578c7.jpg';
import gamingImg1 from '@assets/stock_images/gaming_esports_compu_611efecd.jpg';
import gamingImg2 from '@assets/stock_images/gaming_esports_compu_315351f1.jpg';
import retailStoreImg from '@assets/stock_images/retail_store_fashion_343ad2e2.jpg';
import eyeglassesImg from '@assets/stock_images/eyeglasses_optical_s_879c2628.jpg';

export default function Paid() {
  const [currentService, setCurrentService] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Multi-channel strategies built for measurable outcomes',
      items: [
        'Audience Research & Mapping',
        'Creative Performance Strategy',
        'Channel Mix Optimization',
        'Budget Allocation & Forecasting'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Campaign Execution',
      description: 'Full-funnel campaign management across platforms',
      items: [
        'Campaign Setup & Launch',
        'Continuous Optimization',
        'Creative Testing',
        'Audience Refinement'
      ]
    },
    {
      icon: BarChart3,
      title: 'Measurement & Insights',
      description: 'Custom reporting that connects spend to outcomes',
      items: [
        'Real-Time Dashboards',
        'Attribution Modeling',
        'Conversion Tracking Setup',
        'Performance Benchmarking'
      ]
    },
    {
      icon: Palette,
      title: 'Performance Creative',
      description: 'Ads engineered to convert at every funnel stage',
      items: [
        'Video Ads Production',
        'Static & Motion Design',
        'UGC-Style Content',
        'Creative Iteration'
      ]
    },
    {
      icon: Settings,
      title: 'Commerce & Shopping',
      description: 'Product feed optimization for maximum ROAS',
      items: [
        'Feed Optimization',
        'Shopping Campaign Management',
        'Dynamic Retargeting',
        'Catalog Integration'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Proven Performance Track Record',
      description: 'Our campaigns have consistently delivered double-digit ROAS improvements, with the majority of clients seeing measurable revenue growth within the first 90 days.'
    },
    {
      title: 'AI-Enhanced Optimization',
      description: 'We leverage machine learning and proprietary tools to identify optimization opportunities faster than traditional methods, giving your campaigns a competitive edge.'
    },
    {
      title: 'Platform Partnerships',
      description: 'As certified partners with Meta, Google, TikTok, and Pinterest, we access beta features, priority support, and exclusive insights before they reach the broader market.'
    },
    {
      title: 'Creative-Performance Integration',
      description: 'Our in-house creative team works directly with media buyers, ensuring ads are designed specifically for platform performance—not repurposed afterthoughts.'
    },
    {
      title: 'Transparent Reporting',
      description: 'Custom dashboards give you full visibility into spend, performance, and ROI. No black boxes—just clear data you can act on.'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevBenefit = () => {
    setCurrentBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const nextBenefit = () => {
    setCurrentBenefit((prev) => (prev + 1) % benefits.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.paidAdvertising.title}
        description={revenueServicesSEO.paidAdvertising.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.paidAdvertising.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Paid Media Services",
          revenueServicesSEO.paidAdvertising.description,
          "Paid Advertising"
        )}
        schemaId="service-paid"
      />
      
      {/* Hero Section with Banner Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Performance marketing campaigns"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="heading-paid">
            Data-Driven <span className="italic" style={{ color: '#c4ff4d' }}>Paid Media</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Transform ad spend into predictable revenue with AI-optimized campaigns across social and search. We engineer full-funnel strategies that acquire customers profitably and scale sustainably.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="/contact">
              <button
                className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
                data-testid="button-lets-chat-hero"
              >
                Scale Your Ads
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
                </div>
              </button>
            </Link>
          </div>
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
                  Campaigns engineered for profitable growth
                </h2>

                <p className="text-base text-gray-700 mb-4">
                  Most paid media fails because it focuses on vanity metrics instead of business outcomes. We take a different approach.
                </p>

                <p className="text-base text-gray-700 mb-4">
                  Every campaign we build starts with your unit economics and works backward to create sustainable acquisition funnels. We obsess over customer lifetime value, not just click costs.
                </p>

                <p className="text-base text-gray-700 mb-6">
                  Our team combines platform expertise with AI-powered optimization to find and convert your ideal customers at scale.
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center" data-testid="icon-meta">
                    <SiMeta className="h-7 w-7 text-[#c4ff4d]" />
                  </div>
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center" data-testid="icon-google">
                    <SiGoogle className="h-7 w-7 text-[#c4ff4d]" />
                  </div>
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center" data-testid="icon-tiktok">
                    <SiTiktok className="h-7 w-7 text-[#c4ff4d]" />
                  </div>
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center" data-testid="icon-pinterest">
                    <SiPinterest className="h-7 w-7 text-[#c4ff4d]" />
                  </div>
                </div>

                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-1"
                  >
                    Discuss Your Growth Goals
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-black" />
                    </div>
                  </button>
                </Link>
              </div>

              <div className="image-reveal rounded-3xl glow-lime-subtle">
                <img 
                  src={formalTeamImg}
                  alt="Performance marketing team"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-award-team"
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
              <div className="image-reveal rounded-3xl">
                <img 
                  src={conferenceTeamImg}
                  alt="Strategic campaign planning"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-conference-team"
                />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Staying ahead of platform evolution
                </h2>

                <p className="text-base text-gray-700 mb-4">
                  The paid media landscape shifts constantly. Privacy changes, new ad formats, algorithm updates—what worked last quarter might underperform today.
                </p>

                <p className="text-base text-gray-700 mb-4">
                  We invest heavily in staying current. Our team tests new features before they're widely available, adapts strategies proactively, and ensures your campaigns never fall behind.
                </p>

                <p className="text-base text-gray-700 mb-6">
                  From creative strategy to technical implementation, we handle the complexity so you can focus on growing your business.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-2"
                  >
                    Explore Our Approach
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-black" />
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
        <section className="relative py-14 px-4 bg-white overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#c4ff4d]/5 rounded-full blur-2xl animate-float-delayed"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Measurement that drives decisions
                </h2>

                <p className="text-base text-gray-700 mb-4">
                  Good data is the foundation of great campaigns. We build custom reporting that connects your ad spend to actual business outcomes.
                </p>

                <p className="text-base text-gray-700 mb-4">
                  Our dashboards show you exactly which campaigns, audiences, and creatives are driving revenue—not just clicks and impressions.
                </p>

                <p className="text-base text-gray-700 mb-6">
                  With clear attribution and transparent metrics, you'll always know exactly where your investment is going and what it's delivering.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-contact"
                  >
                    See Sample Reports
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-black" />
                    </div>
                  </button>
                </Link>
              </div>

              <div className="image-reveal rounded-3xl">
                <img 
                  src={studioImg}
                  alt="Analytics and reporting dashboard"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-studio"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Carousel */}
      <section className="relative py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-soft"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-8">
            Complete paid media solutions...
          </h2>

          <div className="flex items-center justify-start gap-2 mb-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentService ? 'w-8 bg-[#c4ff4d] glow-lime' : 'w-2 bg-gray-300'
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

                  <p className="text-sm text-gray-700 mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            Paid media success stories
          </h2>

          <Link href="/our-work">
            <button className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2 mb-8" data-testid="button-view-all-case-studies">
              View All Results
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/esl-gaming">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden h-[500px] hover-elevate active-elevate-2 cursor-pointer" data-testid="card-case-study-gaming">
                <img
                  src={gamingImg1}
                  alt="Gaming brand paid campaign"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-[#c4ff4d] text-black backdrop-blur-sm rounded-full text-xs font-semibold">
                      Paid Social
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                      Gaming
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">ESL Gaming</h3>
                  <p className="text-sm text-gray-200 mb-3">
                    Scaling esports brand awareness through precision-targeted campaigns.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div>
                      <div className="text-2xl font-black text-[#c4ff4d]">13M</div>
                      <div className="text-xs text-gray-300">Impressions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#c4ff4d]">26M</div>
                      <div className="text-xs text-gray-300">Video Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#c4ff4d]">1.1M</div>
                      <div className="text-xs text-gray-300">Engagements</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/lenovo-legion">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden h-[500px] hover-elevate active-elevate-2 cursor-pointer" data-testid="card-case-study-tech">
                <img
                  src={gamingImg2}
                  alt="Tech brand performance campaign"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-[#c4ff4d] text-black backdrop-blur-sm rounded-full text-xs font-semibold">
                      Performance
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                      Technology
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Lenovo Legion</h3>
                  <p className="text-sm text-gray-200 mb-3">
                    Driving product consideration through multi-platform campaigns.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div>
                      <div className="text-2xl font-black text-[#c4ff4d]">113%</div>
                      <div className="text-xs text-gray-300">Traffic Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#c4ff4d]">8.5%</div>
                      <div className="text-xs text-gray-300">CTR</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#c4ff4d]">4.2x</div>
                      <div className="text-xs text-gray-300">ROAS</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why OARC Digital Carousel */}
      <section className="relative py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c4ff4d]/15 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              The OARC Advantage
            </h2>
            <div className="flex gap-3">
              <button
                onClick={prevBenefit}
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-prev-benefit"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                onClick={nextBenefit}
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-next-benefit"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 mb-8">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBenefit(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentBenefit ? 'w-8 bg-[#c4ff4d] glow-lime' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-benefit-${idx}`}
              />
            ))}
          </div>

          <div className="bg-black text-white rounded-3xl p-10 glow-lime-subtle" data-testid="card-benefit-current">
            <div className="w-16 h-16 bg-[#c4ff4d] rounded-full flex items-center justify-center mb-6 stat-glow">
              <LineChart className="h-8 w-8 text-black" />
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              {benefits[currentBenefit].title}
            </h3>

            <p className="text-lg text-gray-200">
              {benefits[currentBenefit].description}
            </p>
          </div>

          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2 mt-8"
              data-testid="button-get-in-touch-final"
            >
              Start Scaling Your Ads
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider mb-4" style={{ color: '#6b9b12' }}>IDEAL FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Brands ready to <span className="italic" style={{ color: '#6b9b12' }}>scale profitably</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "E-Commerce Brands",
                items: [
                  "Seeking profitable customer acquisition",
                  "Ready to scale beyond plateaus",
                  "Need full-funnel strategies"
                ]
              },
              {
                icon: TrendingUp,
                title: "Growth-Stage Companies",
                items: [
                  "Moving from founder-led to structured growth",
                  "Need predictable lead generation",
                  "Want transparent reporting"
                ]
              },
              {
                icon: Target,
                title: "Established Brands",
                items: [
                  "Looking for performance optimization",
                  "Multi-market expansion",
                  "Advanced attribution needs"
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
                      <span className="text-sm text-gray-700">{item}</span>
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
            Ready to turn ad spend into revenue?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-enhanced paid media strategies can drive measurable growth for your brand.
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-lg font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
              data-testid="button-final-cta"
            >
              Get Your Free Audit
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
