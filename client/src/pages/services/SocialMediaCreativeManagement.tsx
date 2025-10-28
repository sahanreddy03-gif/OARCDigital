import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { 
  ArrowRight, CheckCircle, Smartphone, Target, Palette, Users,
  Instagram, Linkedin, Facebook
} from "lucide-react";
import { SiTiktok, SiYoutube, SiSnapchat, SiPinterest, SiGoogle } from "react-icons/si";

// Import award and team photos
import awardTeamImg from "@assets/stock_images/award_ceremony_busin_81e5ff09.jpg";
import largeTeamImg from "@assets/stock_images/large_company_team_p_32054de0.jpg";

export default function SocialMediaCreativeManagement() {
  useEffect(() => {
    document.title = "How we help | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "We specialise in Social, Paid, Creative, Influencer and Strategy and work with fast-growth brands and household names across the globe.");
    }
  }, []);

  const services = [
    {
      title: "Social",
      icon: Smartphone,
      description: "We grow cult-like social communities with platform-specific social strategies",
      points: [
        "Social Strategy",
        "Channel and Community Management",
        "Social-first Content Creation",
        "Social Listening & Insights"
      ],
      learnMore: "Learn more about Social"
    },
    {
      title: "Paid",
      icon: Target,
      description: "We deliver performance-driven Paid Social and Paid Search campaigns",
      points: [
        "Paid Social & Paid Search",
        "Full-Funnel Media Strategy",
        "Planning, Buying, Creative, Analytics, Testing and more.",
        "Feed Optimisation & Shopping"
      ],
      learnMore: "Learn more about Paid"
    },
    {
      title: "Creative",
      icon: Palette,
      description: "Delivering outstanding Creative across Video, Design and Motion",
      points: [
        "Organic & Paid Social Video",
        "UGC to High-Production",
        "Creative Strategy, Art Direction & Campaigns",
        "Motion Design, Animation and Graphics"
      ],
      learnMore: "Learn more about Creative"
    },
    {
      title: "Influencer",
      icon: Users,
      description: "We deliver brand awareness and direct-response Influencer & Creator campaigns",
      points: [
        "End-to-end Campaign Management",
        "Brand Awareness and Direct-Response Objectives",
        "Content Creators for UGC Content",
        "Wrap Reports and Analysis"
      ],
      learnMore: "Learn more about Influencer"
    }
  ];

  const platformIcons = [
    { Icon: Instagram, label: "Instagram" },
    { Icon: Facebook, label: "Facebook" },
    { Icon: SiGoogle, label: "Google" },
    { Icon: SiPinterest, label: "Pinterest" },
    { Icon: SiSnapchat, label: "Snapchat" },
    { Icon: SiTiktok, label: "TikTok" },
    { Icon: SiYoutube, label: "YouTube" }
  ];

  return (
    <Layout>
      {/* How we help - Teal Card */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#5FD4C4] rounded-3xl p-10 md:p-16 mb-8" data-testid="card-how-we-help">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
              How we help
            </h1>
            <p className="text-lg md:text-xl text-black leading-relaxed max-w-3xl">
              We specialise in Social, Paid, Creative, Influencer and Strategy and work with fast-growth brands and household names across the globe.
            </p>
          </div>

          {/* Award Image */}
          <div className="mb-12">
            <img 
              src={awardTeamImg}
              alt="Best Large Social Agency"
              className="w-full rounded-3xl shadow-lg h-[400px] object-cover"
              data-testid="img-award-team"
            />
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover-elevate"
                data-testid={`card-service-${service.title.toLowerCase()}`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#5FD4C4] flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-black text-black hover:bg-black hover:text-white text-base py-6 rounded-full font-semibold"
                  data-testid={`button-learn-${service.title.toLowerCase()}`}
                >
                  {service.learnMore}
                </Button>
              </div>
            ))}
          </div>

          {/* Working Across Platform Icons */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-black text-center mb-8">
              Working Across
            </h2>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {platformIcons.map((platform, idx) => (
                <div 
                  key={idx}
                  className="w-12 h-12 flex items-center justify-center"
                  data-testid={`icon-platform-${idx}`}
                >
                  <platform.Icon className="h-10 w-10 text-black" />
                </div>
              ))}
            </div>
          </div>

          {/* Brand Logos Section */}
          <div className="mb-16">
            <p className="text-center text-lg text-gray-700 mb-8">
              We work with brands across multiple industries and verticals…
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
              {/* Placeholder brand logos - will be filled with actual logos */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="text-sm font-bold text-gray-400" data-testid={`brand-${i}`}>
                  BRAND
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA - Teal Card with Team Photo */}
          <div className="bg-[#5FD4C4] rounded-3xl overflow-hidden" data-testid="card-final-cta">
            <div className="p-10 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
                Don't be <span className="text-white">sheepish</span> let's talk
              </h2>
              <Button 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 rounded-full px-10 py-6 text-lg font-semibold"
                data-testid="button-lets-chat"
              >
                Let's Chat
                <div className="ml-3 w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </Button>
            </div>
            
            {/* Team Photo at bottom of card */}
            <div className="w-full">
              <img 
                src={largeTeamImg}
                alt="OARC Digital Team"
                className="w-full h-[400px] object-cover"
                data-testid="img-team"
              />
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-black text-white rounded-3xl p-10 md:p-16 text-center">
            <p className="text-lg mb-6">
              Stay in touch with the herd and receive up to date insights, strategies and news.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Email"
                className="flex-1 px-6 py-4 rounded-full bg-gray-800 border-none text-white placeholder-gray-400"
                data-testid="input-email"
              />
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
                data-testid="button-submit-email"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
