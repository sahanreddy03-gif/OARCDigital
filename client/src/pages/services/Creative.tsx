import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Camera, Palette, Briefcase, Video, FileText, Play } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import videoProductionImg from '@assets/stock_images/video_production_beh_bd5a9a1a.jpg';
import cameraMonitorImg from '@assets/stock_images/camera_monitor_displ_2de527a0.jpg';
import designWorkspaceImg from '@assets/stock_images/graphic_designer_wor_df6aa1c0.jpg';
import largeTeamImg from '@assets/stock_images/large_corporate_team_3b815cb4.jpg';

export default function Creative() {
  const [currentService, setCurrentService] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

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
    <Layout
      title="Creative Services - OARC Digital"
      description="Delivering outstanding Creative across Video, Design and Motion. Social-first creative specialists producing content that gets results."
    >
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-8" data-testid="heading-creative">
            Creative
          </h1>

          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            Delivering outstanding Creative across Video, Design and Motion
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Is your creative uninspiring, not getting the results you're looking for and not platform-specific?
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Whether you're in need of always-on content or campaign creative, we have the full capabilities across our Creative Strategy and Studios to bring your project to life.
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

      {/* Video Production Photo */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img 
            src={videoProductionImg}
            alt="Video Production Behind the Scenes"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
            data-testid="img-video-production"
          />
        </div>
      </section>

      {/* Social Creative Specialists Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            We're social creative specialists
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Gone are the days when you can use cutdowns of campaigns and chuck them on social. Creative needs to be produced by specialists that understand the algorithms of where it's being distributed and the purpose of each piece of content.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Our team solely work on social and digital creatives... that's all they do. That's why brands work with us instead of your traditional creative or production agencies.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Whether it's Creative for Campaigns, Always-On or TikTok, Reels, Feed, Stories or Paid Social - we've got you covered.
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

      {/* Camera Monitor Photo */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img 
            src={cameraMonitorImg}
            alt="Camera Monitor Display"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
            data-testid="img-camera-monitor"
          />
        </div>
      </section>

      {/* Strategy to Delivery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Our creatives spans from strategy to delivery
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Our Studio includes a range of talented strategists, art directors, copywriters, creators, videographers, designers, and animators.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            We truly understand what works on Social and Digital channels which allows us to deliver industry-leading creative for our clients.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            See some of our teams' work further below.
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

      {/* Design Workspace Photo */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img 
            src={designWorkspaceImg}
            alt="Design Workspace"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
            data-testid="img-design-workspace"
          />
        </div>
      </section>

      {/* Always-on Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Always-on content and creative campaigns
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Whether you're looking for a retained creative agency that can produce social-first content or someone to deliver a large-scale creative project, we are set up to deliver.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            We're flexible and agile to your individual needs and know how to deliver creative that will excite you and your audience.
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

      {/* Campaign Creatives Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-2">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-2">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-2">
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
