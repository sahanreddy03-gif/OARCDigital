import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle, MessageSquare, Star, Target, Users, Settings, Play,
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
    document.title = "Social | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "We grow cult-like social communities with platform-specific social strategies");
    }
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
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
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
            <div>
              <img 
                src={conferenceImg}
                alt="Team meeting in modern office"
                className="w-full rounded-3xl h-[500px] object-cover"
                data-testid="img-conference"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Left + Text Right Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left */}
            <div>
              <img 
                src={arcadeImg}
                alt="Gaming arcade with neon lights"
                className="w-full rounded-3xl h-[500px] object-cover"
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

      {/* Text Left + Image Right Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
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
            <div>
              <img 
                src={awardTeamImg}
                alt="Award ceremony team photo"
                className="w-full rounded-3xl h-[500px] object-cover"
                data-testid="img-award"
              />
            </div>
          </div>
        </div>
      </section>

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
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-1" />
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
          <h2 className="text-3xl md:text-4xl font-black text-[#5FD4C4] mb-8">
            Social content
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Video 1 */}
            <div className="relative rounded-3xl overflow-hidden" data-testid="video-1">
              <img 
                src={videoImg1}
                alt="The Dungeons"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-black fill-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-black text-white">The Dungeons</h3>
              </div>
            </div>

            {/* Video 2 */}
            <div className="relative rounded-3xl overflow-hidden" data-testid="video-2">
              <img 
                src={videoImg2}
                alt="Carpetright"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#5FD4C4] rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-black fill-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-black text-white">Carpetright</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Social Shepherd Section */}
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
                  idx === currentBenefit ? 'w-8 bg-[#5FD4C4]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-benefit-${idx}`}
              />
            ))}
          </div>

          {/* Benefit Card */}
          <div className="bg-black text-white rounded-3xl p-10" data-testid="card-benefit-current">
            <div className="w-16 h-16 bg-[#5FD4C4] rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
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
