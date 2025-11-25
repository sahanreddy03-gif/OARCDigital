import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, Target, Palette, Users,
  Instagram, Linkedin, Facebook
} from "lucide-react";
import { SiTiktok, SiYoutube, SiSnapchat, SiPinterest, SiGoogle } from "react-icons/si";

// Import award and team photos
import awardTeamImg from "@assets/stock_images/award_ceremony_busin_81e5ff09.jpg";
import largeTeamImg from "@assets/stock_images/large_company_team_p_32054de0.jpg";

// Import brand logos
import brandLogo1 from "@assets/stock_images/corporate_brand_logo_7fa71d75.jpg";
import brandLogo2 from "@assets/stock_images/corporate_brand_logo_3ecd3c3a.jpg";
import brandLogo3 from "@assets/stock_images/corporate_brand_logo_53ee2baf.jpg";
import brandLogo4 from "@assets/stock_images/corporate_brand_logo_36956200.jpg";
import brandLogo5 from "@assets/stock_images/corporate_brand_logo_fa7a9043.jpg";
import brandLogo6 from "@assets/stock_images/corporate_brand_logo_45511c03.jpg";

export default function SocialMediaCreativeManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      learnMore: "Learn more about Social",
      link: "/services/social"
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
      learnMore: "Learn more about Paid",
      link: "/services/paid"
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
      learnMore: "Learn more about Creative",
      link: "/services/creative"
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
      learnMore: "Learn more about Influencer",
      link: "/services/influencer"
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

  const brandLogos = [
    brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo6
  ];

  return (
    <Layout>
      <SEOHead
        title="How We Help | Social, Paid, Creative & Influencer Services | OARC Digital"
        description="We specialise in Social, Paid, Creative, Influencer and Strategy and work with fast-growth brands and household names across the globe."
        canonicalUrl="https://oarcdigital.com/services/how-we-help"
        ogType="article"
        structuredData={createServiceSchema(
          "Comprehensive Marketing Services",
          "Full-service marketing agency specializing in Social, Paid, Creative, Influencer and Strategy.",
          "Marketing Services"
        )}
        schemaId="service-marketing-overview"
      />
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
                      <CheckCircle2 className="h-5 w-5 text-[#5FD4C4] flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Link href={service.link}>
                  <a className="block w-full">
                    <Button
                      variant="outline"
                      className="w-full border border-black text-black rounded-full font-semibold"
                      data-testid={`button-learn-${service.title.toLowerCase()}`}
                    >
                      {service.learnMore}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </Link>
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
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {brandLogos.map((logo, i) => (
                <div key={i} className="h-12 flex items-center justify-center" data-testid={`brand-${i + 1}`}>
                  <img 
                    src={logo}
                    alt={`Brand ${i + 1}`}
                    className="max-h-full w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Who This Service Is For */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-wider text-[#5FD4C4] mb-4">WHO THIS IS FOR</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Perfect for <span className="italic text-[#5FD4C4]">ambitious brands</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-gray-100" data-testid="use-case-ecommerce">
                <h3 className="text-xl font-bold mb-4">E-commerce Brands</h3>
                <p className="text-gray-700 mb-4">
                  Scale your online store with integrated social, paid, and creative strategies. Drive traffic and conversions across all channels.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Full-funnel marketing campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Product photography & video</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Social commerce optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-100" data-testid="use-case-dtc">
                <h3 className="text-xl font-bold mb-4">DTC Startups</h3>
                <p className="text-gray-700 mb-4">
                  Launch and scale your brand with comprehensive marketing support. From strategy to execution across all digital channels.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Brand building campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Content creation at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Performance marketing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-100" data-testid="use-case-saas">
                <h3 className="text-xl font-bold mb-4">SaaS Companies</h3>
                <p className="text-gray-700 mb-4">
                  Generate qualified leads with strategic content and paid campaigns. Build authority and drive sign-ups across platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Lead generation campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Thought leadership content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Demo & product videos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-100" data-testid="use-case-lifestyle">
                <h3 className="text-xl font-bold mb-4">Lifestyle Brands</h3>
                <p className="text-gray-700 mb-4">
                  Build engaged communities around your brand. Authentic storytelling that resonates with your target audience across all platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Community building strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Influencer partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>UGC & brand storytelling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-100" data-testid="use-case-finance">
                <h3 className="text-xl font-bold mb-4">Finance & FinTech</h3>
                <p className="text-gray-700 mb-4">
                  Navigate complex regulatory environments while building trust. Compliant creative that educates and converts at scale.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Compliant ad creative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Educational content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Trust-building campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-100" data-testid="use-case-enterprise">
                <h3 className="text-xl font-bold mb-4">Enterprise Brands</h3>
                <p className="text-gray-700 mb-4">
                  Coordinate global campaigns across multiple markets. Strategic creative production and media management at enterprise scale.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Multi-market campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Localized content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                    <span>Global brand consistency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-wider text-[#5FD4C4] mb-4">EXPLORE MORE</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Specialized <span className="italic text-[#5FD4C4]">service offerings</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Dive deeper into specific services that power our comprehensive approach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/services/paid-advertising">
                <div className="group p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-[#5FD4C4] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-paid">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-[#5FD4C4] transition-colors">Paid Advertising</h3>
                    <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Performance-driven paid social and search campaigns. Maximize ROI with data-driven media buying.
                  </p>
                </div>
              </Link>

              <Link href="/services/influencer-marketing">
                <div className="group p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-[#5FD4C4] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-influencer">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-[#5FD4C4] transition-colors">Influencer Marketing</h3>
                    <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Connect with your audience through authentic creator partnerships. Build trust at scale.
                  </p>
                </div>
              </Link>

              <Link href="/services/social-media-management">
                <div className="group p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-[#5FD4C4] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-management">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-[#5FD4C4] transition-colors">Social Management</h3>
                    <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Daily community management and content publishing. Build engaged audiences that drive business results.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Final CTA - Teal Card with Team Photo */}
          <div className="bg-[#5FD4C4] rounded-3xl overflow-hidden" data-testid="card-final-cta">
            <div className="p-10 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
                Don't be <span className="text-white">sheepish</span> let's talk
              </h2>
              <button
                className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2"
                data-testid="button-lets-chat"
              >
                Let's Chat
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-black" />
                </div>
              </button>
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
                className="flex-1 px-6 py-4 rounded-full bg-gray-800 border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5FD4C4]"
                data-testid="input-email"
              />
              <button
                className="bg-white text-black rounded-full px-8 py-4 hover-elevate active-elevate-2"
                data-testid="button-submit-email"
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
