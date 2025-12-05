import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Users, FileBarChart2, Megaphone, TrendingUp, Sparkles, Target } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import picnicImg from '@assets/stock_images/social_media_influen_3c07c2fc.jpg';
import skincareImg from '@assets/stock_images/social_media_influen_496eb368.jpg';
import packageImg from '@assets/stock_images/social_media_influen_0dbb3056.jpg';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import bodyShopHeroImg from '@assets/The-Body-Shop-Social-Marketing-Agency_1761842288034.jpg';

export default function Influencer() {
  const [currentService, setCurrentService] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Megaphone,
      title: 'Campaign Management',
      description: 'Full-service influencer campaign execution from brief to wrap',
      items: [
        'End-to-End Campaign Delivery',
        'Strategic Planning',
        'Influencer Sourcing & Vetting',
        'Brief Development & Approvals',
        'Contracts & Payments'
      ]
    },
    {
      icon: Users,
      title: 'Creator Partnerships',
      description: 'Building your content library with authentic creator voices',
      items: [
        'Vetted Creator Pools',
        'UGC for Organic Channels',
        'UGC for Paid Amplification',
        'Content Rights Management'
      ]
    },
    {
      icon: FileBarChart2,
      title: 'Measurement & Insights',
      description: 'Comprehensive tracking and reporting on campaign impact',
      items: [
        'Campaign Performance Reports',
        'UTM & Discount Code Tracking',
        'Social Listening Integration',
        'Brand Lift Analysis'
      ]
    }
  ];

  const caseStudies = [
    {
      id: 'homecraft-innovations',
      category: 'Influencer Campaign',
      brand: 'HomeCraft Innovations',
      description: 'Product launch campaign driving record sell-through rates.',
      image: tefalHeroImg,
      link: '/case-studies/homecraft-innovations',
      stats: [
        { value: '500K', label: 'Engagements' },
        { value: '6.6M', label: 'Impressions' },
        { value: '69K', label: 'Clicks' }
      ]
    },
    {
      id: 'naturalcare-beauty',
      category: 'Creator Campaign',
      brand: 'NaturalCare Beauty',
      description: 'Authentic beauty content driving brand consideration.',
      image: bodyShopHeroImg,
      link: '/case-studies/naturalcare-beauty',
      stats: [
        { value: '800K', label: 'Engagements' },
        { value: '4.5M', label: 'Views' },
        { value: '95K', label: 'New Followers' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Strategic Influencer Selection',
      description: 'We build custom influencer strategies for each brand, using data-driven vetting to ensure authentic partnerships that resonate with your audience.'
    },
    {
      title: 'Flexible Campaign Models',
      description: 'Whether you need always-on creator partnerships, seasonal campaigns, or one-off activations, we structure engagements to match your goals and budget.'
    },
    {
      title: 'Complete Campaign Execution',
      description: 'From initial strategy through to payment and performance analysis, we handle every detail so you can focus on your business.'
    },
    {
      title: 'Performance-Focused Approach',
      description: 'We obsess over ROI. Our campaigns are designed to drive measurable outcomes, not just vanity metrics and likes.'
    },
    {
      title: 'Transparent Reporting',
      description: 'Custom tracking setups with discount codes, UTM parameters, and attribution modeling ensure you always know exactly what your investment is delivering.'
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

  return (
    <Layout>
      <SEOHead
        title="Influencer Partners | Creator Campaigns | OARC Digital"
        description="Connect with vetted creators who align with your brand. We handle sourcing, outreach, contracts, and campaign management from start to finish."
        canonicalUrl="https://oarcdigital.com/services/influencer-marketing"
        ogType="article"
        structuredData={createServiceSchema(
          "Influencer Partnership Services",
          "Connect with vetted creators who align with your brand. Full campaign management from sourcing to measurement.",
          "Influencer Partners"
        )}
        schemaId="service-influencer"
      />
      
      {/* Hero Section */}
      <section className="relative py-14 px-4 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-radial"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-4"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8" data-testid="heading-influencer">
            Influencer Partners
          </h1>

          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            Creator partnerships that deliver real results
          </h2>

          <p className="text-base text-black mb-4">
            Connect with vetted creators who genuinely align with your brand and audience.
          </p>

          <p className="text-base text-black mb-6">
            We handle everything—sourcing, outreach, contracts, and campaign management—so you can focus on your business.
          </p>

          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-lets-chat-hero"
            >
              Start Your Campaign
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Section 1: Text Left + Image Right */}
      <ScrollReveal>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#4a7000]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Data-informed, human-led selection
                </h2>

                <p className="text-base text-black mb-4">
                  Too many agencies rely solely on influencer databases and surface-level metrics. We take a more considered approach.
                </p>

                <p className="text-base text-black mb-4">
                  Our team combines data analysis with human judgment—understanding not just follower counts, but audience quality, engagement authenticity, and brand alignment.
                </p>

                <p className="text-base text-black mb-4">
                  We analyze content performance, audience demographics, and past partnership results to identify creators who will genuinely move the needle for your brand.
                </p>

                <p className="text-base text-black mb-6">
                  This rigorous vetting process means every influencer partnership is strategically selected for maximum impact and efficiency.
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
                  src={picnicImg}
                  alt="Influencer content creation"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-picnic-scene"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 2: Image Left + Text Right */}
      <ScrollReveal delay={200}>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-surface-lime"></div>
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="image-reveal rounded-3xl glow-lime-subtle">
                <img 
                  src={skincareImg}
                  alt="Product-focused creator content"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-skincare-products"
                />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Complete campaign management
                </h2>

                <p className="text-base text-black mb-4">
                  Influencer campaigns have a lot of moving parts. We manage every detail so you don't have to.
                </p>

                <p className="text-base text-black mb-6">
                  From strategy development and influencer outreach to briefing, approvals, content review, payment processing, and performance reporting—we handle it all. Some clients want hands-on involvement, others prefer to see results. We adapt to your preferred working style.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-2"
                  >
                    Learn Our Process
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

      {/* Section 3: Text Left + Image Right */}
      <ScrollReveal delay={300}>
        <section className="relative py-14 px-4 bg-white overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#c4ff4d]/5 rounded-full blur-2xl animate-float-delayed"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Content creators for your channels
                </h2>

                <p className="text-base text-black mb-4">
                  Beyond traditional influencer campaigns, we've built creator networks specifically for content production.
                </p>

                <p className="text-base text-black mb-4">
                  These creators produce authentic, platform-native content for your owned channels—not for posting on their profiles, but for elevating your brand's content quality.
                </p>

                <p className="text-base text-black mb-4">
                  It's user-generated content that feels genuine because it is—created by real people who understand social platforms, not just your marketing team.
                </p>

                <p className="text-base text-black mb-6">
                  Whether you need UGC for organic posting or high-performing ad creative, our creator network delivers.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-3"
                  >
                    Explore Creator Partnerships
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </button>
                </Link>
              </div>

              <div className="image-reveal rounded-3xl">
                <img 
                  src={packageImg}
                  alt="Creator unboxing content"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-package-delivery"
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
            Complete influencer & creator solutions...
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
            Influencer success stories
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
            {caseStudies.map((caseStudy) => (
              <Link key={caseStudy.id} href={caseStudy.link}>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden h-[500px] hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-case-study-${caseStudy.id}`}>
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.brand}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <div className="flex gap-3 mb-4 flex-wrap">
                      <span className="px-4 py-2 bg-[#c4ff4d] text-black backdrop-blur-sm rounded-full text-sm font-semibold">
                        {caseStudy.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black mb-2">{caseStudy.brand}</h3>
                    <p className="text-lg text-gray-200 mb-4">
                      {caseStudy.description}
                    </p>
                    <div className="grid grid-cols-3 gap-6 mt-6">
                      {caseStudy.stats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-3xl font-black text-[#c4ff4d]">{stat.value}</div>
                          <div className="text-sm text-gray-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Influencer Content Section */}
      <section className="relative py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Recent <span style={{ color: '#6b9b12' }}>Creator Content</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              'Fashion Brand x Fall Collection',
              'Wellness Brand x Lifestyle',
              'Tech Product Launch'
            ].map((title, idx) => (
              <div key={idx} className="relative bg-gray-200 rounded-3xl overflow-hidden h-[350px] group glass-lime hover-lift" data-testid={`card-content-influencer-${idx + 1}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-black text-white">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OARC Digital Carousel */}
      <section className="relative py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-soft"></div>
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
              <TrendingUp className="h-8 w-8 text-black" />
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
              Start Your Influencer Strategy
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-[#c4ff4d]/5 rounded-full blur-2xl animate-float-delayed"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider mb-4" style={{ color: '#6b9b12' }}>IDEAL FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Brands ready to <span className="italic" style={{ color: '#6b9b12' }}>amplify</span> their message
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Brand Launchers",
                items: [
                  "Need rapid awareness building",
                  "Want authentic social proof",
                  "Looking to reach new audiences"
                ]
              },
              {
                icon: Target,
                title: "E-Commerce Brands",
                items: [
                  "Seeking conversion-focused partnerships",
                  "Want trackable influencer ROI",
                  "Need ongoing content production"
                ]
              },
              {
                icon: TrendingUp,
                title: "Established Brands",
                items: [
                  "Looking to shift perception",
                  "Want to reach younger demographics",
                  "Need authentic brand storytelling"
                ]
              }
            ].map((category, idx) => (
              <div key={idx} className="glass-lime rounded-3xl p-8 hover-lift" data-testid={`card-audience-${idx}`}>
                <div className="w-14 h-14 bg-[#c4ff4d] rounded-xl flex items-center justify-center mb-6 stat-glow">
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
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to partner with the right creators?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how strategic influencer partnerships can drive measurable results for your brand.
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-lg font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
              data-testid="button-final-cta"
            >
              Plan Your Campaign
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
