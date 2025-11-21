import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Camera, Palette, Briefcase, Video, FileText, Play } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import videoProductionImg from '@assets/stock_images/video_production_stu_19004f37.jpg';
import cameraMonitorImg from '@assets/stock_images/video_production_stu_5144a38f.jpg';
import designWorkspaceImg from '@assets/stock_images/creative_team_workin_79883382.jpg';
import largeTeamImg from '@assets/stock_images/creative_team_workin_4b023730.jpg';

export default function Creative() {
  const [currentService, setCurrentService] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Camera,
      title: 'Capabilities',
      description: 'We deliver creative for social in a variety of ways',
      items: [
        'Strategy',
        'Videography',
        'Photography',
        'Art Direction',
        'Graphic & Motion Design, AR and Animation'
      ]
    },
    {
      icon: Video,
      title: 'Paid Social Creative',
      description: 'We produce Paid Social creative',
      items: [
        'Full-funnel Paid Social creative',
        'High-production Video',
        'UGC',
        'Design'
      ]
    },
    {
      icon: Palette,
      title: 'Campaigns',
      description: 'We deliver social-first Creative campaigns',
      items: [
        'Strategy',
        'Campaign Ideation',
        'Planning, Scriptwriting, Briefing',
        'Production and Post-Production',
        'Insights & Analysis'
      ]
    },
    {
      icon: Briefcase,
      title: 'Creative Services',
      description: 'We handle the logistics side of production',
      items: [
        'Talent & Location Sourcing',
        'International Shoots',
        'Logistic Management',
        'Props Sourcing'
      ]
    },
    {
      icon: FileText,
      title: 'Organic Social Creative',
      description: 'We produce social-first creative for organic social',
      items: [
        'Reels',
        'TikTok',
        'UGC',
        'Design'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Social Creative specialists',
      description: 'We\'re not just creatives, but social creatives. Our team understands the algorithms and what makes them tick.'
    },
    {
      title: 'Dedicated studio space',
      description: 'We\'ve built a custom studio within our HQ, which means we can turn around content without always needing to hire out expensive locations.'
    },
    {
      title: 'Partnerships at the major social platforms',
      description: 'We have partnerships at the major social platforms, which gives us insight into what\'s working today and in the future.'
    },
    {
      title: 'Organic & Paid Social Creative',
      description: 'We also produce Paid Social creative that increases your ROAS and lowers customer acquisition costs.'
    },
    {
      title: 'Our creative gets results',
      description: 'From producing videos that receive millions of views to building long-term creative strategies that shift brand perception, our creative gets results.'
    },
    {
      title: 'Flexible and transparent team',
      description: 'We built custom solutions based on your challenges and needs. Get in touch to see how we can help.'
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
        title="Creative Services | Video, Design & Motion | OARC Digital"
        description="Delivering outstanding Creative across Video, Design and Motion. Social-first creative specialists producing content that gets results."
        canonicalUrl="https://oarcdigital.com/services/creative"
        ogType="article"
        structuredData={createServiceSchema(
          "Creative Services",
          "Full-service creative production including video, design, and motion graphics for social media and digital platforms.",
          "Creative Production"
        )}
        schemaId="service-creative"
      />
      {/* Hero Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8" data-testid="heading-creative">
            Creative
          </h1>

          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            Delivering outstanding Creative across Video, Design and Motion
          </h2>

          <p className="text-base text-gray-700 mb-4">
            Is your creative uninspiring, not getting the results you're looking for and not platform-specific?
          </p>

          <p className="text-base text-gray-700 mb-8">
            Whether you're in need of always-on content or campaign creative, we have the full capabilities across our Creative Strategy and Studios to bring your project to life.
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
                We're social creative specialists
              </h2>

              <p className="text-base text-gray-700 mb-4">
                Gone are the days when you can use cutdowns of campaigns and chuck them on social. Creative needs to be produced by specialists that understand the algorithms of where it's being distributed and the purpose of each piece of content.
              </p>

              <p className="text-base text-gray-700 mb-4">
                Our team solely work on social and digital creatives... that's all they do. That's why brands work with us instead of your traditional creative or production agencies.
              </p>

              <p className="text-base text-gray-700 mb-6">
                Whether it's Creative for Campaigns, Always-On or TikTok, Reels, Feed, Stories or Paid Social - we've got you covered.
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
                src={videoProductionImg}
                alt="Video Production Behind the Scenes"
                className="w-full rounded-3xl h-[500px] object-cover"
                data-testid="img-video-production"
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
                src={cameraMonitorImg}
                alt="Camera Monitor Display"
                className="w-full rounded-3xl h-[500px] object-cover"
                data-testid="img-camera-monitor"
              />
            </div>

            {/* Text - Right */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Our creatives spans from strategy to delivery
              </h2>

              <p className="text-base text-gray-700 mb-4">
                Our Studio includes a range of talented strategists, art directors, copywriters, creators, videographers, designers, and animators.
              </p>

              <p className="text-base text-gray-700 mb-4">
                We truly understand what works on Social and Digital channels which allows us to deliver industry-leading creative for our clients.
              </p>

              <p className="text-base text-gray-700 mb-6">
                See some of our teams' work further below.
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
                Always-on content and creative campaigns
              </h2>

              <p className="text-base text-gray-700 mb-4">
                Whether you're looking for a retained creative agency that can produce social-first content or someone to deliver a large-scale creative project, we are set up to deliver.
              </p>

              <p className="text-base text-gray-700 mb-6">
                We're flexible and agile to your individual needs and know how to deliver creative that will excite you and your audience.
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
                src={designWorkspaceImg}
                alt="Design Workspace"
                className="w-full rounded-3xl h-[500px] object-cover"
                data-testid="img-design-workspace"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-8">
            Our full-service Creative offering...
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
            How we've used Creative to grow our clients
          </h2>

          <Link href="/our-work">
            <button className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2 mb-8" data-testid="button-view-all-case-studies">
              View All Case Studies
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>

          {/* The Gym Group Case Study */}
          <Link href="/case-studies/gym-group">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden h-[500px] hover-elevate active-elevate-2 cursor-pointer" data-testid="card-case-study-gym-group">
              <img
                src="https://sociallypowerful.com/wp-content/uploads/2023/08/The-Gym-Group-Socially-Powerful.png"
                alt="The Gym Group TikTok Campaign"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <div className="flex gap-3 mb-4 flex-wrap">
                  <span className="px-4 py-2 bg-[#FF0080] backdrop-blur-sm rounded-full text-sm font-semibold">
                    Creative
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    TikTok
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    Influencer Marketing
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-2">The Gym Group</h3>
                <p className="text-lg text-gray-200 mb-4">
                  Recruiting a whole new generation of gym-goers.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-6">
                  <div>
                    <div className="text-3xl font-black text-[#FF0080]">1M</div>
                    <div className="text-sm text-gray-300">Clicks</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#FF0080]">15M</div>
                    <div className="text-sm text-gray-300">Views</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#FF0080]">500K</div>
                    <div className="text-sm text-gray-300">Engagements</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Campaign Creatives Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Checkout our latest <span className="text-[#5FD4C4]">Campaign Creatives</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="relative bg-gray-300 rounded-3xl overflow-hidden h-[400px] group" data-testid="card-video-campaign-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white">19 Crimes x Halloween</h3>
              </div>
            </div>

            <div className="relative bg-gray-300 rounded-3xl overflow-hidden h-[400px] group" data-testid="card-video-campaign-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white">Very Lazy x Beneath the Cloves</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Social Creatives Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Checkout our latest <span className="text-[#5FD4C4]">Organic Social Creatives</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="relative bg-gray-300 rounded-3xl overflow-hidden h-[400px] group" data-testid="card-video-organic-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white">easyJet Holidays</h3>
              </div>
            </div>

            <div className="relative bg-gray-300 rounded-3xl overflow-hidden h-[400px] group" data-testid="card-video-organic-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white">VeryLazy</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Social Creatives Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Checkout our latest <span className="text-[#5FD4C4]">Paid Social Creatives</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="relative bg-gray-300 rounded-3xl overflow-hidden h-[400px] group" data-testid="card-video-paid-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white">Glasses Direct</h3>
              </div>
            </div>

            <div className="relative bg-gray-300 rounded-3xl overflow-hidden h-[400px] group" data-testid="card-video-paid-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white">Adapted Assets for Passenger</h3>
              </div>
            </div>
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
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 mt-8"
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
              For brands that need <span className="italic text-[#5FD4C4]">scroll-stopping creative</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              High-volume creative production for performance marketers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-performance-marketers">
              <h3 className="text-xl font-bold mb-3">Performance Marketers</h3>
              <p className="text-sm text-gray-700 mb-4">
                Test more creative faster. Feed your paid campaigns with high-volume, platform-optimized creative that drives lower CPAs and higher ROAS.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>High-volume ad creative</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Rapid iteration testing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Platform-specific formats</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-3">E-commerce Brands</h3>
              <p className="text-sm text-gray-700 mb-4">
                Scale product creative across catalogs. Create UGC-style content, product videos, and lifestyle imagery that converts browsers into buyers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Product photography</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>UGC-style content</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Lifestyle imagery</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-social-first">
              <h3 className="text-xl font-bold mb-3">Social-First Brands</h3>
              <p className="text-sm text-gray-700 mb-4">
                Fill your content calendar with platform-native creative. Short-form video, Reels, TikToks, Stories—all optimized for each algorithm.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Short-form video</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Platform-native content</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Content calendar production</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-dtc-startups">
              <h3 className="text-xl font-bold mb-3">DTC Startups</h3>
              <p className="text-sm text-gray-700 mb-4">
                Build your brand identity with professional creative on a startup budget. Get brand-quality assets without the agency markup.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Brand identity creative</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Startup-friendly pricing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Fast turnaround times</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-growth-teams">
              <h3 className="text-xl font-bold mb-3">Growth Teams</h3>
              <p className="text-sm text-gray-700 mb-4">
                Support continuous testing with endless creative variations. Never run out of new angles, hooks, or concepts to test in your campaigns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Continuous creative testing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Endless variations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Rapid experimentation support</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-agencies">
              <h3 className="text-xl font-bold mb-3">Agencies & Partners</h3>
              <p className="text-sm text-gray-700 mb-4">
                White-label creative production for your clients. Scale your agency without hiring in-house designers and video editors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>White-label production</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Agency partnership pricing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Scalable creative capacity</span>
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
            <div className="text-sm uppercase tracking-wider text-black mb-3">AMPLIFY YOUR CREATIVE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pair with these <span className="italic text-[#5FD4C4]">performance services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Turn creative into conversions with our integrated services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#5FD4C4] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-paid-ads">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#5FD4C4] transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Scale winning creative with paid campaigns. Put your best-performing assets to work across all paid channels.
                </p>
              </div>
            </Link>

            <Link href="/services/rapid-idea-testing">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#5FD4C4] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-rapid-testing">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#5FD4C4] transition-colors">Rapid Idea Testing</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Test creative concepts before full production. Validate winning angles and save budget on losers.
                </p>
              </div>
            </Link>

            <Link href="/services/social-media-management">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#5FD4C4] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-social-management">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#5FD4C4] transition-colors">Social Media Management</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Fill your social content calendar with platform-optimized creative that drives engagement and growth.
                </p>
              </div>
            </Link>
          </div>
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
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-final-cta"
                >
                  Get In Touch
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
