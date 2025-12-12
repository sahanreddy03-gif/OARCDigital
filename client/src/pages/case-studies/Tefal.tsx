import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, ChevronLeft, ChevronRight, Instagram, Youtube } from 'lucide-react';
import { SiSnapchat, SiTiktok } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import tefalHeroImg from '@assets/pexels-shvetsa-12673974_1764638693005.jpg';
import tefalAboutImg from '@assets/HOME-LAME-3-About-Tefal_1761847874021.jpg';
import tefalVideoImg from '@assets/image_1761847809835.png';
import strategyImg1 from '@assets/IMG_7948_1761931325601.jpeg';
import strategyImg2 from '@assets/Tefal-Influencer-Marketing-Agency-3_1761842114850.jpg';
import socialContent1 from '@assets/IMG_7944_1761930827804.jpeg';
import socialContent2 from '@assets/IMG_7945_1761930827804.jpeg';
import productImg1 from '@assets/Tefal-Marketing-Agency_1761842232532.jpg';
import productImg2 from '@assets/Tefal-Influencer-Marketing-Agency-4_1761842232532.jpg';
import productImg3 from '@assets/Tefal-Influencer-Marketing-Agency-1_1761842169383.jpg';
import relatedCase1 from '@assets/generated_images/social_media_creators_marketing_image.png';
import relatedCase2 from '@assets/IMG_7950_1761931806299.png';
import relatedCase3 from '@assets/IMG_7951_1761931806299.jpeg';

export default function TefalCaseStudy() {
  const [currentRelatedCase, setCurrentRelatedCase] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCases = [
    {
      title: "Authentic Stories",
      category: "TikTok",
      stats: { impressions: "33M", engagement: "+450K", ctr: "2M" },
      image: relatedCase1,
      link: "/case-studies/authentic-stories"
    },
    {
      title: "Luxe Essence Fragrance",
      category: "Instagram",
      stats: { reach: "59M", engagement: "1.5M", conversions: "20+" },
      image: relatedCase2,
      link: "/case-studies/luxe-essence"
    },
    {
      title: "NaturalCare Beauty",
      category: "NaturalCare Beauty",
      stats: { impressions: "30M", uplift: "15%", reach: "17M" },
      image: relatedCase3,
      link: "/case-studies/naturalcare-beauty"
    }
  ];

  const prevCase = () => {
    setCurrentRelatedCase((prev) => (prev - 1 + relatedCases.length) % relatedCases.length);
  };

  const nextCase = () => {
    setCurrentRelatedCase((prev) => (prev + 1) % relatedCases.length);
  };

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.homeCraftInnovations.title}
        description={caseStudiesSEO.homeCraftInnovations.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.homeCraftInnovations.path}`}
        ogType={caseStudiesSEO.homeCraftInnovations.ogType}
      />
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] bg-black overflow-hidden">
        
        <img 
          src={tefalHeroImg}
          alt="Content creator filming kitchen product review with ring light for HomeCraft Innovations influencer campaign"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        {/* Breadcrumb */}
        <div className="absolute top-8 left-8 flex items-center gap-2 text-white text-sm">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span>{'>'}</span>
          <Link href="/our-work" className="hover:text-gray-300">Our Work</Link>
          <span>{'>'}</span>
          <span className="text-zinc-400">Selling Out Product Lines...</span>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase" data-testid="heading-hero">
              ACHIEVING INVENTORY DEPLETION THROUGH INFLUENCER-DRIVEN CAMPAIGNS.
            </h1>
          </div>
        </div>
      </section>

      {/* About Section - Black Background */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div>
              <div className="inline-block bg-[#c4ff4d] text-black px-6 py-2 rounded text-sm font-bold uppercase mb-6" data-testid="badge-about">
                About
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8">
                Driving market leadership through creator partnerships and premium positioning.
              </h2>

              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                HomeCraft Innovations targeted European market dominance in kitchen appliances through aggressive brand positioning and sales acceleration. The mission: establish HomeCraft Innovations as the category leader through strategic presence amplification and consumer engagement.
              </p>

              <p className="text-base text-gray-300 mb-8 leading-relaxed">
                The challenge: differentiate in a crowded appliance market saturated with competitors. We needed to create genuine consumer preference and drive conversion through social channels. Rather than traditional advertising, we pursued community-first storytelling and aspirational lifestyle positioning that would convert followers into customers.
              </p>

              <h3 className="text-xl md:text-2xl font-black text-zinc-400 mb-6">
                Selling out product lines. Award-winning social campaigns. We did it all!
              </h3>
            </div>

            {/* Right Column - Platforms & Services */}
            <div>
              <div className="mb-10">
                <h4 className="text-white font-bold text-lg mb-4">Platforms</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3" data-testid="platform-instagram">
                    <Instagram className="h-5 w-5 text-white" />
                    <span className="text-white font-semibold text-sm">Instagram</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3" data-testid="platform-snapchat">
                    <SiSnapchat className="h-5 w-5 text-white" />
                    <span className="text-white font-semibold text-sm">Snapchat</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3" data-testid="platform-tiktok">
                    <SiTiktok className="h-5 w-5 text-white" />
                    <span className="text-white font-semibold text-sm">TikTok</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3" data-testid="platform-youtube">
                    <Youtube className="h-5 w-5 text-white" />
                    <span className="text-white font-semibold text-sm">YouTube</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-4">Services</h4>
                <div className="flex flex-col gap-2">
                  <div className="bg-[#c4ff4d] text-black text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-1">
                    Influencer Marketing
                  </div>
                  <div className="bg-[#c4ff4d] text-black text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-2">
                    Community Management
                  </div>
                  <div className="bg-[#c4ff4d] text-black text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-3">
                    Social Strategy
                  </div>
                  <div className="bg-[#c4ff4d] text-black text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-4">
                    Social Video And Content Production
                  </div>
                  <div className="bg-[#c4ff4d] text-black text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-5">
                    Paid Media
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Pink Cards */}
      <section className="py-16 px-4 bg-surface-lime relative">
        <div className="max-w-6xl mx-auto relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 text-white rounded-2xl p-10 text-center" data-testid="stat-impressions">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">70M+</div>
              <div className="text-lg font-semibold text-white uppercase tracking-wide">Impressions</div>
            </div>
            <div className="bg-zinc-800 text-white rounded-2xl p-10 text-center" data-testid="stat-collaborations">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">500+</div>
              <div className="text-lg font-semibold text-white uppercase tracking-wide">Collaborations</div>
            </div>
            <div className="bg-zinc-800 text-white rounded-2xl p-10 text-center" data-testid="stat-sold-out">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">SOLD OUT</div>
              <div className="text-lg font-semibold text-white uppercase tracking-wide">Product Lines</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden image-reveal">
            <img 
              src={tefalAboutImg}
              alt="Case Study Video - How OARC Digital Sold-Out Small Appliances for HomeCraft Innovations Using Influencers"
              className="w-full"
              data-testid="img-video-placeholder"
            />
          </div>
        </div>
      </section>

      {/* Challenge Section - White Background */}
      <section className="py-20 px-4 bg-surface-lime relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-zinc-400 mb-12 uppercase" data-testid="heading-challenge">
            Challenge
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
            Harnessing the power of influencers to grow brand love and raise awareness for HomeCraft Innovations.
          </h3>

          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            Since 2019, we've partnered with HomeCraft Innovations through transformative influencer-led campaigns. The mission extended beyond brand awareness—we sought to establish HomeCraft Innovations as the definitive authority in lifestyle convenience and kitchen innovation across social channels.
          </p>

          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            Consumer psychology remained constant: audiences seek products solving real problems and simplifying daily routines. HomeCraft Innovations' product advantage was clear. The channel opportunity was undeniable: Millennials and Gen-Z increasingly discover and evaluate kitchen products through TikTok, YouTube, and Instagram. Our challenge: translate product benefits into culturally resonant influencer narratives that drive both awareness and conversion.
          </p>

          <p className="text-base text-gray-700 mb-10 leading-relaxed">
            Execution required precision. Market timing, creator alignment, content authenticity, and conversion optimization needed orchestration across 500+ influencer relationships simultaneously—a complex operation demanding cross-functional coordination and data-driven decision making.
          </p>

          {/* Social Media Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-100 rounded-2xl h-[400px] overflow-hidden image-reveal">
              <img 
                src={socialContent1}
                alt="Instagram Social Media Content Creation"
                className="w-full h-full object-cover"
                data-testid="img-social-content-1"
              />
            </div>
            <div className="bg-gray-100 rounded-2xl h-[400px] overflow-hidden image-reveal">
              <img 
                src={socialContent2}
                alt="TikTok Social Media Content Creation"
                className="w-full h-full object-cover"
                data-testid="img-social-content-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section - Black Background */}
      <section className="py-20 px-4 bg-black relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-12 uppercase text-center" data-testid="heading-strategy">
            Strategy
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            HomeCraft Innovations' Success Story through Adaptive Strategy and Performance-Based Influencer Marketing
          </h3>

          <p className="text-base text-gray-300 mb-10 leading-relaxed">
            We positioned HomeCraft Innovations' value proposition—"making life easier"—as the psychological driver across all creator partnerships. Rather than generic product endorsements, we enabled influencers to share genuine daily-life integrations of HomeCraft Innovations products. This authenticity-first approach combined with our 500+ influencer network created compounding reach and credibility. Performance metrics guided constant optimization: engagement rates, conversion tracking, and audience demographic alignment informed real-time creator roster adjustments.
          </p>

          {/* Influencer Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800 rounded-2xl overflow-hidden h-[350px] image-reveal">
              <img 
                src={strategyImg1}
                alt="Creators for User-generated Content"
                className="w-full h-full object-cover"
                data-testid="img-strategy-1"
              />
            </div>
            <div className="bg-gray-800 rounded-2xl overflow-hidden h-[350px] image-reveal">
              <img 
                src={strategyImg2}
                alt="HomeCraft Innovations Influencer Marketing Campaign"
                className="w-full h-full object-cover"
                data-testid="img-strategy-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - White Background */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-zinc-400 mb-12 uppercase" data-testid="heading-results">
            Results
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
            Selling out HomeCraft Innovations Product Lines through Strategic Paid Social Excellence and Lasting Influencer Partnerships.
          </h3>

          <p className="text-base text-gray-700 mb-10 leading-relaxed">
            HomeCraft Innovations achieved unprecedented market penetration through our integrated influencer + paid social framework. The results demonstrated that authentic creator partnerships—when combined with data-driven media investment—generate exponential ROI. Across 70M+ impressions and 500+ strategic creator relationships, HomeCraft Innovations didn't just achieve awareness—they achieved product sell-through that depleted inventory across multiple product lines.
          </p>

          {/* Repeat Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white border-4 border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">70M+</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">For All Platforms</div>
            </div>
            <div className="bg-white border-4 border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">500+</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">For All Platforms</div>
            </div>
            <div className="bg-white border-4 border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">SOLD OUT</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">For HomeCraft Innovations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images Grid */}
      <section className="py-16 px-4 bg-surface-lime relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 rounded-2xl h-[350px] overflow-hidden image-reveal">
              <img 
                src={productImg1}
                alt="HomeCraft Innovations Kitchen Product 1"
                className="w-full h-full object-cover"
                data-testid="img-product-1"
              />
            </div>
            <div className="bg-gray-200 rounded-2xl h-[350px] overflow-hidden image-reveal">
              <img 
                src={productImg2}
                alt="HomeCraft Innovations Kitchen Product 2"
                className="w-full h-full object-cover"
                data-testid="img-product-2"
              />
            </div>
            <div className="bg-gray-200 rounded-2xl h-[350px] overflow-hidden image-reveal">
              <img 
                src={productImg3}
                alt="HomeCraft Innovations Kitchen Product 3"
                className="w-full h-full object-cover"
                data-testid="img-product-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Start a Project Section - Black Background */}
      <section className="py-20 px-4 bg-black relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase" data-testid="heading-start-project">
            Start A Project
          </h2>

          <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
            OARC Digital is a global leading social media and influencer marketing agency, with offices across Europe, USA, Asia and the Middle East.
          </p>

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            If you'd like to learn more about our influencer marketing plans, creative production, and engage audiences globally, please complete our contact form.
          </p>

          <Link href="/contact">
            <button className="inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 btn-shimmer glow-lime" data-testid="button-get-started">
              get started
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-zinc-400" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
                Check out some <span className="text-zinc-400">of our</span> related case studies
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevCase}
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-prev-case"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                onClick={nextCase}
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-next-case"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCases.map((caseStudy, idx) => (
              <Link key={idx} href={caseStudy.link}>
                <div className="rounded-2xl overflow-hidden h-[400px] relative group cursor-pointer hover-lift glass-lime">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#c4ff4d] text-black px-4 py-2 rounded text-xs font-bold uppercase">
                      Case Study
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-black text-white mb-4">{caseStudy.title}</h3>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(caseStudy.stats).map(([key, value], i) => (
                        <div key={i} className="bg-white/20 backdrop-blur-sm rounded px-2 py-2">
                          <div className="text-lg font-black text-white">{value}</div>
                          <div className="text-[10px] text-gray-300 uppercase">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/our-work">
              <button className="inline-flex items-center gap-2 bg-[#c4ff4d] text-black rounded-full px-8 py-3 text-sm font-semibold hover-elevate active-elevate-2 btn-shimmer glow-lime">
                VIEW ALL CASE STUDIES
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Get In Touch Section - Black Background */}
      <section className="py-20 px-4 bg-black relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase" data-testid="heading-get-in-touch">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            We'd love to hear how to start powerful conversation, drive social engagement, build your brand, hit sales targets or meet other goals you have, wherever you are in the world.
          </p>

          <Link href="/contact">
            <button className="inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 btn-shimmer glow-lime mb-12" data-testid="button-work-with-us">
              WORK WITH US
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-zinc-400" />
              </div>
            </button>
          </Link>

          {/* Office Locations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold text-sm mb-2">New York</h4>
              <p className="text-gray-500 text-xs">United States</p>
            </div>
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold text-sm mb-2">London</h4>
              <p className="text-gray-500 text-xs">United Kingdom</p>
            </div>
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold text-sm mb-2">Dubai</h4>
              <p className="text-gray-500 text-xs">United Arab Emirates</p>
            </div>
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold text-sm mb-2">Beijing</h4>
              <p className="text-gray-500 text-xs">China</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
