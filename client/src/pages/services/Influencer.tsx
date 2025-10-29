import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Megaphone, Users, FileText, Play } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import picnicImg from '@assets/stock_images/flat_lay_picnic_blan_e2f94356.jpg';
import skincareImg from '@assets/stock_images/skincare_beauty_prod_d67a31ee.jpg';
import packageImg from '@assets/stock_images/package_delivery_car_227b2f33.jpg';
import largeTeamImg from '@assets/stock_images/large_corporate_team_3b815cb4.jpg';

export default function Influencer() {
  const [currentService, setCurrentService] = useState(0);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

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
      category: 'Influencer Marketing',
      brand: 'Bio-Oil',
      description: 'Reached 9.4M Users & 1.4M Views in a Video-First Brand Positioning Campaign'
    },
    {
      category: 'Influencer Marketing',
      brand: 'Lumene',
      description: 'Micro-Influencer Campaign for Skincare Brand Generated 150k Video Views'
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
    <Layout
      title="Influencer Marketing Services - OARC Digital"
      description="We deliver brand awareness and direct-response Influencer & Creator campaigns. Expert end-to-end campaign management."
    >
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-8" data-testid="heading-influencer">
            Influencer
          </h1>

          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            We deliver brand awareness and direct-response Influencer & Creator campaigns
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            We help brands drive growth, change brand perception and produce creative influencer campaigns.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Whether you're looking for a one-off campaign or a long-term retained influencer partner - we could be the agency for you.
          </p>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2"
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

      {/* Picnic Scene Photo */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img 
            src={picnicImg}
            alt="Influencer Marketing Flat Lay"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
            data-testid="img-picnic-scene"
          />
        </div>
      </section>

      {/* Human-led Influencer Approach Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Human-led influencer approach
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Too many influencer agencies rely solely on tech and influencer search platforms to guide their entire campaign, but we knew there was a better way.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            We take a more human-led approach and then use tech to confirm our research and campaign development.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            This looks at how we research potential influencers, how we analyse their metrics, and how they have performed on previous campaigns.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Our team is extremely thorough when it comes to the planning phase, so we can truly get the best influencers for your brand, while delivering efficiency of your budget.
          </p>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-get-in-touch-1"
            >
              Get In Touch To See How We Can Help You
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Skincare Products Photo */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img 
            src={skincareImg}
            alt="Skincare Products"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
            data-testid="img-skincare-products"
          />
        </div>
      </section>

      {/* End-to-end Campaign Management Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            End-to-end Campaign Management
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            We can handle it all, from campaign strategy, research, insights, outreach, briefing, approvals, payment, analysis, and delivery.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Some brands want to be heavily involved, while others prefer a hands-off approach. So our ways of working allow us to mould to your exact needs.
          </p>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-get-in-touch-2"
            >
              Get In Touch To See How We Can Help You
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Package Delivery Photo */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img 
            src={packageImg}
            alt="Package Delivery"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
            data-testid="img-package-delivery"
          />
        </div>
      </section>

      {/* Creators for UGC Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Creators for User-generated Content
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Not only do we deliver Influencer campaigns, but we've built our creator pools, who can produce social-first content for your social channels.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Creators have a unique ability to create content that's socially native, produced specifically for each individual platform, so we decided to harness it!
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Not used for their 'influence', but as another means of production. We then use that content on your owned brand channels, not their own channels.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            So if you're a brand looking for UGC content for Organic or Paid channels or a creator yourself, get in touch.
          </p>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-get-in-touch-3"
            >
              Get In Touch To See How We Can Help You
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-2">
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

          {/* Service Card */}
          <div className="bg-white rounded-3xl p-10 mb-8" data-testid="card-service-current">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                {(() => {
                  const Icon = services[currentService].icon;
                  return <Icon className="h-8 w-8 text-white" />;
                })()}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-black mb-2">
                  {services[currentService].title}
                </h3>
                <p className="text-lg text-gray-700">
                  {services[currentService].description}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {services[currentService].items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#5FD4C4] flex-shrink-0" />
                  <span className="text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={nextService}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
              data-testid="button-next-service"
            >
              <ArrowRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            How we've used Influencers to grow our clients
          </h2>

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentCaseStudy(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentCaseStudy ? 'w-8 bg-[#5FD4C4]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-case-study-${idx}`}
              />
            ))}
          </div>

          {/* Case Study Card */}
          <div className="relative bg-gray-300 rounded-3xl overflow-hidden h-[400px] group" data-testid="card-case-study-current">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-white rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-black">{caseStudies[currentCaseStudy].category}</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-3">
                {caseStudies[currentCaseStudy].brand}
              </h3>
              <p className="text-lg text-white mb-4">
                {caseStudies[currentCaseStudy].description}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prevCaseStudy}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
              data-testid="button-prev-case-study"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={nextCaseStudy}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
              data-testid="button-next-case-study"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Influencer Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-2">
            Checkout our latest <span className="text-[#5FD4C4]">Influencer content</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              'Uniqlo Influencer x Fall/Winter',
              'Bio Oil x Ruth Crilly',
              'Jungle Formula x Poppy Hollins',
              'Carpetright Influencer',
              'Lumene x TikTok'
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-black">
              Why The Social Shepherd?
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#5FD4C4] rounded-3xl overflow-hidden" data-testid="card-final-cta">
            <div className="p-10 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
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
