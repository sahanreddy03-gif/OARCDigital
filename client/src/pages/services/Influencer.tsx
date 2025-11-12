import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Megaphone, Users, FileText, Play } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import picnicImg from '@assets/stock_images/social_media_influen_3c07c2fc.jpg';
import skincareImg from '@assets/stock_images/social_media_influen_496eb368.jpg';
import packageImg from '@assets/stock_images/social_media_influen_0dbb3056.jpg';
import largeTeamImg from '@assets/stock_images/digital_marketing_st_5a50cd8e.jpg';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import bodyShopHeroImg from '@assets/The-Body-Shop-Social-Marketing-Agency_1761842288034.jpg';

export default function Influencer() {
  const [currentService, setCurrentService] = useState(0);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Influencer Marketing Services | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "We deliver brand awareness and direct-response Influencer & Creator campaigns. Expert end-to-end campaign management.");
    }
  }, []);

  const services = [
    {
      icon: Megaphone,
      title: 'Influencer',
      description: 'We handle everything from start to end',
      items: [
        'End-to-End Campaign Management',
        'Strategy',
        'Sourcing, negotiations',
        'Briefing, approvals',
        'Contracts, payments'
      ]
    },
    {
      icon: Users,
      title: 'UGC Creators',
      description: 'We work with content UGC creators to produce content for your channels',
      items: [
        'Creator Pools',
        'UGC content for Organic',
        'UGC content for Paid'
      ]
    },
    {
      icon: FileText,
      title: 'Reporting',
      description: 'We create bespoke reports for influencer activity',
      items: [
        'Campaign Wrap and Monthly reports',
        'UTM, Discount Code, Social & GA tracking',
        'Social Listening',
        'Brand Uplift'
      ]
    }
  ];

  const caseStudies = [
    {
      id: 'tefal',
      category: 'Influencer Marketing',
      brand: 'Tefal',
      description: 'Selling out product lines of household products for Tefal.',
      image: tefalHeroImg,
      link: '/case-studies/tefal',
      stats: [
        { value: '500K', label: 'Engagements' },
        { value: '6.6M', label: 'Impressions' },
        { value: '69K', label: 'Clicks' }
      ]
    },
    {
      id: 'body-shop',
      category: 'Influencer Marketing',
      brand: 'The Body Shop',
      description: 'Celebrating authenticity and natural beauty with TikTok.',
      image: bodyShopHeroImg,
      link: '/case-studies/body-shop',
      stats: [
        { value: '800K', label: 'Engagements' },
        { value: '4.5M', label: 'Views' },
        { value: '95K', label: 'New Followers' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Bespoke Influencer Marketing plans',
      description: 'We create bespoke Influencer Marketing plans with every brand we work with, using content creators and macro-influencers to amplify your brand.'
    },
    {
      title: 'Agile and flexible',
      description: 'Whether you\'re in need of an always-on approach, one-off campaign, or campaigns sprinkled throughout the year - we can flex to your needs.'
    },
    {
      title: 'We handle it all',
      description: 'We do end-to-end campaign management from sourcing, negotiations, contracts, briefing, reporting, approvals, payment & packaging.'
    },
    {
      title: 'Content Creators for your social channels',
      description: 'We\'re incredibly data-driven and focused on increasing your return on ad spend with Influencer Marketing.'
    },
    {
      title: 'Holistic reports and campaign tracking',
      description: 'We ensure everything is properly tracked using discount code tracking & UTM parameters where relevant, and build holistic reports that help you understand the results we\'ve driven.'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevBenefit = () => {
    setCurrentBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const nextBenefit = () => {
    setCurrentBenefit((prev) => (prev + 1) % benefits.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8" data-testid="heading-influencer">
            Influencer
          </h1>

          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            We deliver brand awareness and direct-response Influencer & Creator campaigns
          </h2>

          <p className="text-base text-gray-700 mb-4">
            We help brands drive growth, change brand perception and produce creative influencer campaigns.
          </p>

          <p className="text-base text-gray-700 mb-6">
            Whether you're looking for a one-off campaign or a long-term retained influencer partner - we could be the agency for you.
          </p>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-lets-chat-hero"
            >
              Let's Chat
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Section 1: Text Left + Image Right */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text - Left */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Human-led influencer approach
              </h2>

              <p className="text-base text-gray-700 mb-4">
                Too many influencer agencies rely solely on tech and influencer search platforms to guide their entire campaign, but we knew there was a better way.
              </p>

              <p className="text-base text-gray-700 mb-4">
                We take a more human-led approach and then use tech to confirm our research and campaign development.
              </p>

              <p className="text-base text-gray-700 mb-4">
                This looks at how we research potential influencers, how we analyse their metrics, and how they have performed on previous campaigns.
              </p>

              <p className="text-base text-gray-700 mb-6">
                Our team is extremely thorough when it comes to the planning phase, so we can truly get the best influencers for your brand, while delivering efficiency of your budget.
              </p>

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
            <div>
              <img 
                src={picnicImg}
                alt="Influencer Marketing Flat Lay"
                className="w-full rounded-3xl h-[500px] object-cover"
                data-testid="img-picnic-scene"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Image Left + Text Right */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left */}
            <div>
              <img 
                src={skincareImg}
                alt="Skincare Products"
                className="w-full rounded-3xl h-[500px] object-cover"
                data-testid="img-skincare-products"
              />
            </div>

            {/* Text - Right */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                End-to-end Campaign Management
              </h2>

              <p className="text-base text-gray-700 mb-4">
                We can handle it all, from campaign strategy, research, insights, outreach, briefing, approvals, payment, analysis, and delivery.
              </p>

              <p className="text-base text-gray-700 mb-6">
                Some brands want to be heavily involved, while others prefer a hands-off approach. So our ways of working allow us to mould to your exact needs.
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

      {/* Section 3: Text Left + Image Right */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text - Left */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Creators for User-generated Content
              </h2>

              <p className="text-base text-gray-700 mb-4">
                Not only do we deliver Influencer campaigns, but we've built our creator pools, who can produce social-first content for your social channels.
              </p>

              <p className="text-base text-gray-700 mb-4">
                Creators have a unique ability to create content that's socially native, produced specifically for each individual platform, so we decided to harness it!
              </p>

              <p className="text-base text-gray-700 mb-4">
                Not used for their 'influence', but as another means of production. We then use that content on your owned brand channels, not their own channels.
              </p>

              <p className="text-base text-gray-700 mb-6">
                So if you're a brand looking for UGC content for Organic or Paid channels or a creator yourself, get in touch.
              </p>

              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-get-in-touch-3"
                >
                  Get In Touch To See How We Can Help You
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Image - Right */}
            <div>
              <img 
                src={packageImg}
                alt="Package Delivery"
                className="w-full rounded-3xl h-[500px] object-cover"
                data-testid="img-package-delivery"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-8">
            Our full-service Influencer and Creator offering...
          </h2>

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentService ? 'w-8 bg-[#5FD4C4]' : 'w-2 bg-gray-300'
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
                        <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-1" />
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
            How we've used Influencers to grow our clients
          </h2>

          <Link href="/our-work">
            <button className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2 mb-8" data-testid="button-view-all-case-studies">
              View All Case Studies
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>

          {/* Case Studies Grid */}
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
                      <span className="px-4 py-2 bg-[#FF0080] backdrop-blur-sm rounded-full text-sm font-semibold">
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
                          <div className="text-3xl font-black text-[#FF0080]">{stat.value}</div>
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
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Checkout our latest <span className="text-[#5FD4C4]">Influencer content</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              'Uniqlo Influencer x Fall/Winter',
              'Jungle Formula x Poppy Hollins',
              'Carpetright Influencer'
            ].map((title, idx) => (
              <div key={idx} className="relative bg-gray-300 rounded-3xl overflow-hidden h-[350px] group" data-testid={`card-video-influencer-${idx + 1}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-black text-white">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Social Shepherd Carousel */}
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
                  idx === currentBenefit ? 'w-8 bg-[#5FD4C4]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-benefit-${idx}`}
              />
            ))}
          </div>

          {/* Benefit Card */}
          <div className="bg-black text-white rounded-3xl p-10" data-testid="card-benefit-current">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-[#5FD4C4]" />
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

      {/* Final CTA Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#5FD4C4] rounded-3xl overflow-hidden" data-testid="card-final-cta">
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
                className="flex-1 px-6 py-4 rounded-full bg-gray-800 border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5FD4C4]"
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
