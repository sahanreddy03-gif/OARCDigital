import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, BarChart, Palette, Settings, Target, TrendingUp } from 'lucide-react';
import { SiMeta, SiGoogle, SiTiktok, SiPinterest } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from '@assets/paid advertising_1763088406833.avif';
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
      title: 'Strategy',
      description: 'We develop your multi-channel Paid Media strategy',
      items: [
        'Media Planning',
        'Performance Creative Strategy',
        'Channel Strategy',
        'Budget Allocation & Pacing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Media Buying',
      description: 'We manage Paid Social, Paid Search and Display',
      items: [
        'Campaign Management',
        'Optimisation',
        'Copywriting',
        'A/B Testing'
      ]
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'We provide bespoke analytics and reporting solutions',
      items: [
        'Custom Reporting Dashboard',
        'Visualisation Tools',
        'Tag Implementation',
        'GA4'
      ]
    },
    {
      icon: Palette,
      title: 'Creative',
      description: 'We deliver creative strategy and asset production for Paid',
      items: [
        'Paid Social Video',
        'Graphic Design',
        'UGC for Paid',
        'Adapting Existing Assets'
      ]
    },
    {
      icon: Settings,
      title: 'Feed Management',
      description: 'We manage your product feed for optimal Shopping performance',
      items: [
        'Feed Optimisation',
        'Feed A/B Tests',
        'CSS (Comparison Shopping Service)'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Multi-Award Winning',
      description: 'We\'ve won multiple awards for our Paid Media campaigns, including Best Direct Response Campaign, Best Integrated Campaign and Best Use of Facebook/Instagram Ads'
    },
    {
      title: 'Data-driven Approach',
      description: 'We take a data-driven approach, which has helped us achieve consistent results, with 93% of our clients increasing their ROAS and revenue within the first 3 months of working together.'
    },
    {
      title: 'Channel Partners',
      description: 'We\'ve been recognised by Meta, Google, TikTok and Pinterest as their agency partners, so we\'re able to access Beta\'s and insights others can\'t.'
    },
    {
      title: 'Creative',
      description: 'We understand creative and what ad creatives are driving performance at every stage of the funnel.'
    },
    {
      title: 'Analytics & Reporting',
      description: 'We build holistic reports using Looker Studio and Funnel to provide in-depth insight.'
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
            alt="Paid advertising campaigns"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="heading-paid">
            Performance-driven <span className="italic bg-gradient-to-r from-[hsl(25,95%,53%)] via-[hsl(35,95%,58%)] to-[hsl(45,95%,63%)] text-transparent bg-clip-text">Paid Media</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            We deliver Paid Social and Paid Search campaigns that drive sustainable growth, delivering incrementality in profitability, growth and brand uplift. Leverage Social and Search channels with platform-specific performance creative to drive growth at all stages of the funnel.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-white text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover:bg-white/90 transition-colors"
                data-testid="button-lets-chat-hero"
              >
                Let's Chat
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Text Left + Image Right Section */}
      <ScrollReveal>
        <section className="relative py-14 px-4 overflow-hidden">
          {/* Gradient background with floating orbs */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#4a7000]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text - Left */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  We're an Award-Winning Paid Media Agency
                </h2>

                <p className="text-base text-gray-700 mb-4">
                  Having recently won 'Best Integrated Paid Media Campaign', Best Use of Facebook & Instagram Ads' and 'Best Direct Response Campaign' the Year', we know how to build and optimise full-funnel Paid Media strategies that grow brands at scale.
                </p>

                <p className="text-base text-gray-700 mb-4">
                  Our team manages Paid Social and Paid Search for scaleups, household names, and global brands. So, we know how to scale ad accounts, drive incrementality, deliver creative strategies and create a dramatic shift in performance.
                </p>

                <p className="text-base text-gray-700 mb-6">
                  We're also agency partners with Meta, Google (Premier Partner status), TikTok and Pinterest which give us access to unique insight, ad credits and beta tests.
                </p>

                {/* Platform Partners */}
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center" data-testid="icon-meta">
                    <SiMeta className="h-7 w-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center" data-testid="icon-google">
                    <SiGoogle className="h-7 w-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center" data-testid="icon-tiktok">
                    <SiTiktok className="h-7 w-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center" data-testid="icon-pinterest">
                    <SiPinterest className="h-7 w-7 text-white" />
                  </div>
                </div>

                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-1"
                  >
                    Get In Touch To See How We Can Help You
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-black" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Image - Right */}
              <div className="overflow-hidden rounded-3xl">
                <img 
                  src={formalTeamImg}
                  alt="OARC Digital Award Ceremony"
                  className="w-full h-[500px] object-cover scale-110 hover:scale-115 transition-transform duration-700"
                  data-testid="img-award-team"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Image Left + Text Right Section */}
      <ScrollReveal delay={200}>
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image - Left */}
              <div className="overflow-hidden rounded-3xl">
                <img 
                  src={conferenceTeamImg}
                  alt="OARC Digital Team at Conference"
                  className="w-full h-[500px] object-cover scale-110 hover:scale-115 transition-transform duration-700"
                  data-testid="img-conference-team"
                />
              </div>

              {/* Text - Right */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Our Strategic Approach to Future Proofing Your Brand
                </h2>

                <p className="text-base text-gray-700 mb-4">
                  The Paid Media landscape is ever-changing, and that's why we constantly stay on top of it.
                </p>

                <p className="text-base text-gray-700 mb-4">
                  We're here to be your eyes and ears of what's happening, how platforms are changing and how we need to be adapting our strategy for you.
                </p>

                <p className="text-base text-gray-700 mb-6">
                  We'll then work with you to deliver the direction of your Paid Media strategy and then implement campaign management, optimisation, creative strategy, channel management, budget allocation, attribution modelling, feed optimisation and analytics.
                </p>

                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-2"
                  >
                    Get In Touch To See How We Can Help You
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
        <section className="relative py-14 px-4 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-[#FFF9F0]"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text - Left */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Reporting, Analysis and Attribution Modelling
                </h2>

                <p className="text-base text-gray-700 mb-4">
                  To make the right decisions with your paid media spend, it's important to have a robust reporting solution that can break down all your data into easily digestible numbers.
                </p>

                <p className="text-base text-gray-700 mb-4">
                  Our custom reporting breaks down each channel and shows you which campaigns, audiences, creative and copy are driving performance.
                </p>

                <p className="text-base text-gray-700 mb-6">
                  We're also able to build in metrics that are vital for your business to track, making it completely bespoke to you.
                </p>

                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-contact"
                  >
                    Contact
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Image - Right */}
            <div className="overflow-hidden rounded-3xl">
              <img 
                src={studioImg}
                alt="OARC Digital Studio"
                className="w-full h-[500px] object-cover scale-110 hover:scale-115 transition-transform duration-700"
                data-testid="img-studio"
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Services Carousel */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-8">
            Our full-service Paid Media offering...
          </h2>

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentService ? 'w-8 bg-[#c4ff4d]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-service-${idx}`}
              />
            ))}
          </div>

          {/* Grid of 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[0, 1, 2].map((offset) => {
              const actualIdx = (currentService + offset) % services.length;
              const service = services[actualIdx];
              const Icon = service.icon;
              
              return (
                <div key={actualIdx} className="bg-white border-2 border-gray-100 rounded-3xl p-8" data-testid={`card-service-${actualIdx}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
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
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            How we've used Paid to grow our clients
          </h2>

          <Link href="/our-work">
            <button className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2 mb-8" data-testid="button-view-all-case-studies">
              View All Case Studies
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GamingTech Elite Case Study */}
            <Link href="/case-studies/gamingtech-elite">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden h-[500px] hover-elevate active-elevate-2 cursor-pointer" data-testid="card-case-study-gamingtech">
                <img
                  src={gamingImg1}
                  alt="GamingTech Elite Gaming Setup"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-[#FF0080] backdrop-blur-sm rounded-full text-xs font-semibold">
                      Paid Media
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                      Gaming
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">GamingTech Elite</h3>
                  <p className="text-sm text-gray-200 mb-3">
                    Elevating GamingTech Elite to the forefront of gaming culture.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div>
                      <div className="text-2xl font-black text-[#FF0080]">13M</div>
                      <div className="text-xs text-gray-300">Impressions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#FF0080]">26M</div>
                      <div className="text-xs text-gray-300">Ad Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#FF0080]">1.1M</div>
                      <div className="text-xs text-gray-300">Followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* ProGamer Network Case Study */}
            <Link href="/case-studies/progamer-network">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden h-[500px] hover-elevate active-elevate-2 cursor-pointer" data-testid="card-case-study-progamer">
                <img
                  src={gamingImg2}
                  alt="ProGamer Network TikTok"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-[#FF0080] backdrop-blur-sm rounded-full text-xs font-semibold">
                      TikTok
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                      Gaming
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">ProGamer Network</h3>
                  <p className="text-sm text-gray-200 mb-3">
                    Building and scaling the ProGamer Network TikTok presence.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div>
                      <div className="text-2xl font-black text-[#FF0080]">113%</div>
                      <div className="text-xs text-gray-300">Follower Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#FF0080]">13%</div>
                      <div className="text-xs text-gray-300">Engagement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#FF0080]">30K</div>
                      <div className="text-xs text-gray-300">Avg Views</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Creatives Section */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Checkout our latest <span className="text-[#c4ff4d]">Performance Creatives</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="relative rounded-3xl overflow-hidden h-[400px] group" data-testid="card-content-1">
              <img 
                src={retailStoreImg}
                alt="New Store Opening for Uniqlo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white">New Store Opening for Uniqlo</h3>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-[400px] group" data-testid="card-content-2">
              <img 
                src={eyeglassesImg}
                alt="Glasses Direct"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white">Glasses Direct</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OARC Digital Carousel */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              Why OARC Digital?
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

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBenefit(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentBenefit ? 'w-8 bg-[#c4ff4d]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-benefit-${idx}`}
              />
            ))}
          </div>

          {/* Benefit Card */}
          <div className="bg-[#c4ff4d] text-black rounded-3xl p-10" data-testid="card-benefit-current">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-8 w-8 text-[#c4ff4d]" />
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
              {benefits[currentBenefit].title}
            </h3>

            <p className="text-lg text-black">
              {benefits[currentBenefit].description}
            </p>
          </div>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2 mt-8"
              data-testid="button-get-in-touch-final"
            >
              Get In Touch To See How We Can Help You
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-black mb-3">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              For brands ready to <span className="italic text-[#c4ff4d]">scale with paid</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Performance-driven paid media strategies for every growth stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-3">E-commerce Brands</h3>
              <p className="text-sm text-gray-700 mb-4">
                Scale revenue with profitable paid campaigns across Google Shopping, Facebook, Instagram, and TikTok. Lower CAC while increasing LTV and ROAS.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Shopping feed optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Dynamic retargeting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>ROAS optimization</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-b2b-saas">
              <h3 className="text-xl font-bold mb-3">B2B SaaS</h3>
              <p className="text-sm text-gray-700 mb-4">
                Generate qualified leads and demos with LinkedIn, Google Ads, and programmatic display. Build full-funnel campaigns that drive pipeline growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>LinkedIn lead generation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Search intent targeting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>ABM campaigns</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-dtc">
              <h3 className="text-xl font-bold mb-3">DTC Brands</h3>
              <p className="text-sm text-gray-700 mb-4">
                Build brand awareness and drive direct sales with omnichannel paid strategies. Test, iterate, and scale winners across Meta, TikTok, and Google.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Creative testing frameworks</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Multi-platform scaling</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Brand lift measurement</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-mobile-apps">
              <h3 className="text-xl font-bold mb-3">Mobile Apps</h3>
              <p className="text-sm text-gray-700 mb-4">
                Drive app installs and in-app conversions with performance campaigns across Apple Search Ads, Google UAC, and social platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>App install optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>In-app event tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>LTV-based bidding</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-local-businesses">
              <h3 className="text-xl font-bold mb-3">Local Businesses</h3>
              <p className="text-sm text-gray-700 mb-4">
                Drive foot traffic and local conversions with geo-targeted campaigns. Dominate local search and capture high-intent customers in your area.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Local search domination</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Geo-targeted campaigns</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Store visit tracking</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-enterprise">
              <h3 className="text-xl font-bold mb-3">Enterprise Brands</h3>
              <p className="text-sm text-gray-700 mb-4">
                Execute complex multi-market campaigns with advanced attribution, custom reporting, and strategic media planning across all channels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Multi-market coordination</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Advanced attribution</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                  <span>Custom analytics dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-black mb-3">MAXIMIZE PAID PERFORMANCE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Combine with these <span className="italic text-[#c4ff4d]">performance services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Build a complete paid media engine that drives results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/creative">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#c4ff4d] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-creative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#c4ff4d] transition-colors">Creative Services</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Fuel your paid campaigns with high-converting creative. Test more, win more with platform-optimized ad creative at scale.
                </p>
              </div>
            </Link>

            <Link href="/services/digital-marketing">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#c4ff4d] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-analytics">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#c4ff4d] transition-colors">Digital Marketing</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Make data-driven decisions with proper attribution, conversion tracking, and custom dashboards that show true paid media ROI.
                </p>
              </div>
            </Link>

            <Link href="/services/funnel-automation">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#c4ff4d] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-funnel-automation">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#c4ff4d] transition-colors">Funnel Automation</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Nurture paid traffic automatically with behavioral triggers and sequences that convert cold clicks into hot customers.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#c4ff4d] rounded-3xl overflow-hidden" data-testid="card-final-cta">
            <div className="p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-black mb-8">
                Don't be <span className="text-white">sheepish</span><br />let's talk
              </h2>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2"
                  data-testid="button-lets-chat-final"
                >
                  Let's Chat
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>
            
            <div className="w-full">
              <img 
                src={largeTeamImg}
                alt="OARC Digital Team"
                className="w-full h-[400px] object-cover"
                data-testid="img-team-final"
              />
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-8 bg-black text-white rounded-3xl p-10 text-center">
            <p className="text-lg mb-6">
              Stay in touch with the herd and receive up to date insights, strategies and news.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Email"
                className="flex-1 px-6 py-4 rounded-full bg-gray-800 border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c4ff4d]"
                data-testid="input-email-newsletter"
              />
              <button
                className="bg-white text-black rounded-full px-8 py-4 hover-elevate active-elevate-2"
                data-testid="button-submit-newsletter"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
