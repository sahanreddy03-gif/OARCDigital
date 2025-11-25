import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  ArrowRight, CheckCircle, CheckCircle2, MessageSquare, Star, Target, Users, Settings,
  ChevronLeft, ChevronRight
} from "lucide-react";

// Import images
import conferenceImg from "@assets/pexels-kabaa10-4931332_1761760043394.jpg";
import arcadeImg from "@assets/WhatsApp Image 2025-10-29 at 17.09.19_b134f824_1761760222324.jpg";
import awardTeamImg from "@assets/Best-Large-Social-Agency_1761760464709.webp";
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
      icon: MessageSquare,
      title: "Channel & Community Management",
      description: "We manage your brands channels and community",
      points: [
        "Content Strategy and Planning",
        "Content Creation",
        "Community Management",
        "Copywriting and Scheduling",
        "Social Housekeeping"
      ]
    },
    {
      icon: Star,
      title: "Content Creation",
      description: "We produce social-first content for your channels",
      points: [
        "Social-first Video (TikTok, Reels)",
        "User-Generated Content, Feed, Stories, Pins",
        "Graphic Design, Motion and Animation",
        "Social Campaigns"
      ]
    },
    {
      icon: Target,
      title: "Paid Social",
      description: "We manage Paid Social campaigns that drive awareness and conversion",
      points: [
        "Paid Social Management",
        "Media Planning, Buying, Analytics, A/B Testing and more",
        "Paid Social Creative (Design and Video)",
        "Ongoing Optimisation",
        "Reporting and Insights"
      ]
    },
    {
      icon: Users,
      title: "Influencer & UGC",
      description: "We deliver Influencer Campaigns and Content Creators",
      points: [
        "End-to-end Campaign Management",
        "Brand Awareness and Direct Response Objectives",
        "Micro, Macro, Celebrity Influencer Campaigns",
        "UGC Content for Organic & Paid Social"
      ]
    },
    {
      icon: Settings,
      title: "Reporting & Insights",
      description: "We build bespoke reporting solutions for our clients",
      points: [
        "Bespoke Build Reports",
        "Social Listening",
        "Platform & Consumer Insights",
        "Competitor Analysis",
        "Social Audits"
      ]
    }
  ];

  const benefits = [
    {
      title: "Meta Business Partner",
      description: "We're recognised as a Meta Business Partner and have agency reps & relationships with all the major social platforms."
    },
    {
      title: "Specialists",
      description: "Our team consists of Social Strategists, Content Creators, Videographers, Influencer Managers & Analysts - ensuring we have specialists for every requirement."
    },
    {
      title: "Engaging social-first content",
      description: "We know how to create engaging social-first content for each social algorithm whilst building your brand and driving ROI."
    },
    {
      title: "Design & build custom reports",
      description: "We design & build custom reports that align with your business goals, priorities and core KPIs."
    },
    {
      title: "Social transformation",
      description: "Whether you're looking to take your brand through a social transformation, need a trusted pair of hands to grow your socials, or have a lack of resource internally - we can help you."
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
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
        title={revenueServicesSEO.socialMediaManagement.title}
        description={revenueServicesSEO.socialMediaManagement.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.socialMediaManagement.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Social Media Services",
          revenueServicesSEO.socialMediaManagement.description,
          "Social Media Management"
        )}
        schemaId="service-social"
      />
      {/* Hero Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6" data-testid="heading-social">
            Social
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-black mb-5">
            We grow cult-like social communities with platform-specific social strategies
          </h2>

          <p className="text-base text-black mb-5">
            Are you lacking a social strategy that's driving your brand forward?
          </p>

          <p className="text-base text-black mb-6">
            Our team knows how to craft always-on and campaign activity that elevates your content & community across your social channels.
          </p>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-lets-chat-hero"
            >
              Let's Chat
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
          {/* Gradient background with floating orbs */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#5FD4C4]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#4a7000]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text - Left */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Social-first strategies, for our social-first world
                </h2>

                <p className="text-base text-black mb-4">
                  We work with brands that are looking to lead their industry and thrive in this social-first world.
                </p>

                <p className="text-base text-black mb-4">
                  We're not here to tick boxes but to push the boundaries, deliver significant brand growth and captivate your audience with social-first content. We focus on outcomes, not outputs.
                </p>

                <p className="text-base text-black mb-6">
                  We've designed our team to ensure we're ready for all challenges. It includes strategists, community & channel managers, content creators, videographers, designers, paid social experts, influencer managers and analytics leads.
                </p>

                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-1"
                  >
                    Get In Touch To See How We Can Help You
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Image - Right */}
              <div className="overflow-hidden rounded-3xl">
                <img 
                  src={conferenceImg}
                  alt="Team meeting in modern office"
                  className="w-full h-[500px] object-cover scale-110 hover:scale-115 transition-transform duration-700"
                  data-testid="img-conference"
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
                  src={arcadeImg}
                  alt="Gaming arcade with neon lights"
                  className="w-full h-[500px] object-cover scale-110 hover:scale-115 transition-transform duration-700"
                  data-testid="img-arcade"
                />
              </div>

              {/* Text - Right */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  Platform-specific social content
                </h2>

                <p className="text-base text-black mb-4">
                  We know each algorithm inside and out. They're all different, and so they should be treated that way.
                </p>

                <p className="text-base text-black mb-4">
                  Creating content for specific platforms is vital for growth, rather than a cookie-cutter approach of re-posting everywhere. Our strategists and planners are built to deliver narratives that align with the individual platform algorithms.
                </p>

                <p className="text-base text-black mb-6">
                  Our team has both the technical and creative capabilities to ensure we're delivering content that adapts to algorithm changes.
                </p>

                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-2"
                  >
                    Get In Touch To See How We Can Help You
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
        <section className="relative py-14 px-4 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-[#FFF9F0]"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text - Left */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                  We take a data-driven approach to social
                </h2>

                <p className="text-base text-black mb-4">
                  Data-driven strategies combined with our creativity are exactly why we've been able to win awards such as Best Large Social Agency and deliver incredible results time and time again.
                </p>

                <p className="text-base text-black mb-4">
                  A lot of social agencies and brands create content for the sake of it without any reasoning behind what they're creating.
                </p>

                <p className="text-base text-black mb-6">
                  We dive deep into content analysis and why each piece is either performing or underperforming. This leads us to make adjustments to our content plans on a weekly and monthly and overarching strategy on a quarterly basis.
                </p>

                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-3"
                  >
                    Get In Touch To See How We Can Help You
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Image - Right */}
              <div className="overflow-hidden rounded-3xl">
                <img 
                  src={awardTeamImg}
                  alt="Award ceremony team photo"
                  className="w-full h-[500px] object-cover scale-110 hover:scale-115 transition-transform duration-700"
                  data-testid="img-award"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Full-Service Social Offering Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-2">
            Our full-service
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-8">
            Social offering...
          </h2>

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentService ? 'w-8 bg-[#4a7000]' : 'w-2 bg-gray-300'
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
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-800">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <Link href="/services">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-view-all-services"
            >
              View All Services
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Our Social Case Studies
          </h2>

          <Link href="/our-work">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 mb-8"
              data-testid="button-view-case-studies"
            >
              View All Case Studies
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>

          {/* Case Study Card */}
          <Link href="/case-studies/tefal">
            <div className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer hover-elevate" data-testid="card-case-study">
              <img 
                src={beybladeImg}
                alt="Tefal Case Study"
                className="w-full rounded-3xl h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Influencer Marketing
                    </span>
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Paid Social
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3">
                    Raising new product awareness and selling out product lines for Tefal
                  </h3>
                  <p className="text-white text-lg">
                    Sold out product lines through strategic influencer partnerships and award-winning social campaigns.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Social Content Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Checkout our latest
          </h2>
          <h2 className="text-3xl md:text-4xl font-black text-[#4a7000] mb-8">
            Social content
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Content 1 */}
            <div className="relative rounded-3xl overflow-hidden" data-testid="content-1">
              <img 
                src={videoImg1}
                alt="The Dungeons"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-black text-white">The Dungeons</h3>
              </div>
            </div>

            {/* Content 2 */}
            <div className="relative rounded-3xl overflow-hidden" data-testid="content-2">
              <img 
                src={videoImg2}
                alt="Carpetright"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-black text-white">Carpetright</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OARC Digital Section */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              Why OARC Digital?
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

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBenefit(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentBenefit ? 'w-8 bg-[#4a7000]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-benefit-${idx}`}
              />
            ))}
          </div>

          {/* Benefit Card */}
          <div className="bg-black text-white rounded-3xl p-10" data-testid="card-benefit-current">
            <div className="w-16 h-16 bg-[#4a7000] rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-8 w-8 text-white" />
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

      {/* Who This Service Is For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-black mb-3">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              For brands ready to <span className="italic text-[#4a7000]">own social</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Platform-specific social strategies for every type of organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-consumer-brands">
              <h3 className="text-xl font-bold mb-3">Consumer Brands</h3>
              <p className="text-sm text-gray-700 mb-4">
                Build cult-like communities on TikTok, Instagram, and emerging platforms. Create viral moments and authentic connections with your target audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Viral content strategies</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Community building</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Influencer partnerships</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-dtc-ecommerce">
              <h3 className="text-xl font-bold mb-3">DTC E-commerce</h3>
              <p className="text-sm text-gray-700 mb-4">
                Drive sales through shoppable content, UGC, and strategic social commerce. Turn followers into customers with platform-native selling.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Social commerce optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Shoppable content creation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>UGC campaign management</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-b2b-companies">
              <h3 className="text-xl font-bold mb-3">B2B Companies</h3>
              <p className="text-sm text-gray-700 mb-4">
                Build thought leadership on LinkedIn and Twitter. Position executives as industry experts and generate qualified leads through social selling.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Executive positioning</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>LinkedIn lead generation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Thought leadership content</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-saas-tech">
              <h3 className="text-xl font-bold mb-3">SaaS & Tech</h3>
              <p className="text-sm text-gray-700 mb-4">
                Educate your audience with platform-specific content. Build trust through tutorials, product demos, and customer success stories across channels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Educational content series</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Product demo videos</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Customer story amplification</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-hospitality-travel">
              <h3 className="text-xl font-bold mb-3">Hospitality & Travel</h3>
              <p className="text-sm text-gray-700 mb-4">
                Showcase experiences through stunning visuals and user-generated content. Drive bookings with Instagram, TikTok, and Pinterest strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Visual storytelling</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>UGC amplification</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Booking-driven content</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-elevate" data-testid="use-case-entertainment-media">
              <h3 className="text-xl font-bold mb-3">Entertainment & Media</h3>
              <p className="text-sm text-gray-700 mb-4">
                Build fandoms and drive engagement with behind-the-scenes content, exclusive drops, and interactive experiences across all platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Fandom building</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Behind-the-scenes content</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                  <span>Interactive campaigns</span>
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
            <div className="text-sm uppercase tracking-wider text-black mb-3">AMPLIFY YOUR SOCIAL</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Combine with these <span className="italic text-[#4a7000]">complementary services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Build a complete social media powerhouse
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/influencer-marketing">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#4a7000] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-influencer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#4a7000] transition-colors">Influencer Marketing</h3>
                  <ArrowRight className="h-5 w-5 text-[#4a7000] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Amplify your social reach with strategic influencer partnerships. Drive authenticity and scale your message through trusted voices.
                </p>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#4a7000] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-paid-social">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#4a7000] transition-colors">Paid Social</h3>
                  <ArrowRight className="h-5 w-5 text-[#4a7000] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Scale your organic success with targeted paid campaigns. Turn engagement into conversions with performance-driven paid social.
                </p>
              </div>
            </Link>

            <Link href="/services/creative">
              <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#4a7000] hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-creative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#4a7000] transition-colors">Creative Services</h3>
                  <ArrowRight className="h-5 w-5 text-[#4a7000] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Fuel your social channels with high-volume, platform-optimized creative that stops the scroll and drives action.
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
                Don't be <span className="italic">sheepish</span><br />let's talk
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
                className="w-full rounded-3xl h-[500px] object-cover"
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
                className="flex-1 px-6 py-4 rounded-full bg-gray-800 border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a7000]"
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
