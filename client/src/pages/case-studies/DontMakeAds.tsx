import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import relatedCase1 from '@assets/generated_images/social_media_creators_marketing_image.png';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import azzaroHeroImg from '@assets/IMG_7990_1761953778756.png';
import challengeImg1 from '@assets/IMG_7969_1761934914497.png';
import challengeImg2 from '@assets/IMG_7970_1761934905389.png';
import strategyImg from '@assets/IMG_7972_1761935442823.png';
import resultsImg1 from '@assets/IMG_7969_1761940684139.png';
import resultsImg2 from '@assets/IMG_7971_1761940684140.png';
import resultsImg3 from '@assets/IMG_7976_1761940684140.png';

export default function DontMakeAdsCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCases = [
    {
      title: "Selling Out Product Lines",
      category: "HomeCraft Innovations",
      stats: { impressions: "70M+", collaborations: "500+", result: "SOLD OUT" },
      image: tefalHeroImg,
      link: "/case-studies/homecraft-innovations"
    },
    {
      title: "Introducing Luxury Fragrance",
      category: "Luxe Essence",
      stats: { reach: "59M", engagement: "1.5M", conversions: "20+" },
      image: azzaroHeroImg,
      link: "/case-studies/luxe-essence"
    },
    {
      title: "Raising Awareness",
      category: "NaturalCare Beauty",
      stats: { impressions: "30M", uplift: "15%", reach: "17M" },
      image: relatedCase1,
      link: "/case-studies/naturalcare-beauty"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.authenticStories.title}
        description={caseStudiesSEO.authenticStories.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.authenticStories.path}`}
        ogType={caseStudiesSEO.authenticStories.ogType}
      />
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] bg-black overflow-hidden">
        <img 
          src={relatedCase1}
          alt="Authentic Stories TikTok Campaign"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        {/* Breadcrumb */}
        <div className="absolute top-8 left-8 flex items-center gap-2 text-white text-sm">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span>{'>'}</span>
          <Link href="/our-work" className="hover:text-gray-300">Our Work</Link>
          <span>{'>'}</span>
          <span className="text-[#FF0080]">Showing Small Businesse...</span>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase" data-testid="heading-hero">
              SHOWING SMALL BUSINESSES HOW TO HARNESS THE POWER OF TIKTOK WITH A B2B MARKETING CAMPAIGN.
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="bg-[#FF0080] text-white px-6 py-2 text-xs font-bold uppercase">
              ABOUT
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Transforming Perceptions: How TikTok Empowered Small Businesses.
          </h2>
          
          <div className="space-y-4 text-white text-base leading-relaxed">
            <p>
              Small Businesses tend to be reluctant to try new marketing platforms - many question if TikTok is the right platform for them. In order to change this perception we wanted to involve real businesses and tell real success stories in the content.
            </p>
            
            <p>
              We built a comprehensive TikTok channel strategy for a TikTok Official Account and developed a full-fledged content engine that harnessed the creative power of TikToker entrepreneurs, ensuring a dynamic and engaging content funnel.
            </p>
            
            <p className="text-[#FF0080] font-bold text-lg mt-8">
              Our impact on small businesses through authentic stories.
            </p>
          </div>

          {/* Platforms */}
          <div className="mt-12">
            <h3 className="text-white font-bold mb-4">Platforms</h3>
            <div className="flex gap-4">
              <div className="border-2 border-white px-6 py-3 rounded flex items-center gap-2">
                <SiTiktok className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">TikTok</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mt-8">
            <h3 className="text-white font-bold mb-4">Services</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#FF0080] text-white px-6 py-3 text-sm font-bold uppercase">
                COMMUNITY MANAGEMENT
              </span>
              <span className="bg-[#FF0080] text-white px-6 py-3 text-sm font-bold uppercase">
                CREATIVE
              </span>
              <span className="bg-[#FF0080] text-white px-6 py-3 text-sm font-bold uppercase">
                SOCIAL VIDEO AND CONTENT PRODUCTION
              </span>
            </div>
          </div>

          {/* Key Stats - Pink Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center">
              <div className="text-5xl font-black text-white mb-2">32M</div>
              <div className="text-white text-sm font-semibold uppercase">VIEWS</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center">
              <div className="text-5xl font-black text-white mb-2">+400K</div>
              <div className="text-white text-sm font-semibold uppercase">NEW FOLLOWERS</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center">
              <div className="text-5xl font-black text-white mb-2">2M</div>
              <div className="text-white text-sm font-semibold uppercase">LIKES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#FF0080] mb-8 uppercase">
            CHALLENGE
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-black mb-6">
            Empowering Small Businesses: TikTok's 'Promote' Feature Revolutionizes Marketing ROI
          </h3>
          
          <div className="space-y-4 text-black text-base leading-relaxed mb-8">
            <p>
              Attract small businesses to spend money on its advertising solutions. Drive awareness and education of 'Promote', a feature that allows users to put media spend behind existing content.
            </p>
            
            <p>
              TikTok created a dedicated account to help small business navigate TikTok but they needed a content strategy and production plan. We needed to prove that TikTok can be a powerful marketing platform for small business and can generate a return on investment.
            </p>
          </div>

          {/* Challenge Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={challengeImg1}
                alt="How to get started with TikTok Shopping"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={challengeImg2}
                alt="How to get your Ads approved"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase">
            STRATEGY
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
            Empowering Small Business Owners: TikTok's growth potential and TikTok promote benefits revealed through collaborative content.
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed">
            <p>
              OARC Digital curated and produced content to inform small business owners how to use TikTok to grow their business and the benefits of using TikTok Promote. We did this by identifying and collaborating with successful Small Businesses on TikTok. Content curated by OARC Digital – filmed by the small business owners, then edited and published on the TikTok Small Business page and adapted for paid social.
            </p>
          </div>

          {/* Strategy Image */}
          <div className="mt-8 rounded-lg overflow-hidden">
            <img 
              src={strategyImg}
              alt="TikTok Promote Strategy Content"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#FF0080] mb-8 uppercase">
            RESULTS
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-black mb-6">
            TikTok's authentic success stories garner 2 million likes and 400K NEW followers.
          </h3>
          
          <div className="space-y-4 text-black text-base leading-relaxed mb-12">
            <p>
              Leveraging small business owners, we crafted authentic narratives that effectively contextualised TikTok's added value for these enterprises. By enlisting entrepreneurs to provide firsthand accounts of how they harnessed the platform to bolster their businesses, we successfully connected with our audience on a meaningful level.
            </p>
            
            <p>
              Our approach not only engaged audiences but also piqued their interest. The transparency and authenticity of our content resonated with the TikTok community, resulting in an impressive 2 million likes received across our channel. Moreover, during our tenure, the page garnered over 400K followers, clearly indicating that audiences were actively seeking more information about TikTok's offerings for small and medium-sized enterprises (SMEs).
            </p>
          </div>

          {/* Results Stats - White Cards with Border */}
          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-5xl md:text-6xl font-black text-black mb-2">+400K</div>
              <div className="text-black text-sm font-semibold uppercase">NEW FOLLOWERS</div>
            </div>
            <div className="border-2 border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-5xl md:text-6xl font-black text-black mb-2">2M</div>
              <div className="text-black text-sm font-semibold uppercase">LIKES</div>
            </div>
          </div>

          {/* Results Images */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={resultsImg1}
                alt="How to get started with TikTok Shopping"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={resultsImg2}
                alt="Try running your promotions for a longer duration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={resultsImg3}
                alt="Happy Small Business Saturday"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Start Project Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase" data-testid="heading-start-project">
            START PROJECT
          </h2>

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            OARC Digital is a global leading social media and influencer marketing agency, with offices across Europe, USA, Asia and the Middle-East.
          </p>

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            If you'd like to speak to our team about how we can help you take your brand to another level and engage audiences globally, please complete our contact form.
          </p>

          <Link href="/contact">
            <button className="inline-flex items-center gap-3 bg-[#FF0080] text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2" data-testid="button-lets-talk">
              LET'S TALK.
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#FF0080]" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="bg-[#FF0080] text-white px-6 py-2 text-xs font-bold uppercase">
              PROJECTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            Check out some <span className="text-[#FF0080]">of our</span> related case studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCases.map((caseStudy, idx) => (
              <Link key={idx} href={caseStudy.link}>
                <div className="rounded-2xl overflow-hidden h-[400px] relative group cursor-pointer hover-elevate">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FF0080] text-white px-4 py-2 rounded text-xs font-bold uppercase">
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
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase" data-testid="heading-get-in-touch">
            GET IN TOUCH
          </h2>

          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            We'll show you how to start powerful conversation, drive social engagement, build your brand, hit sales targets or meet other goals you have, wherever you are in the world.
          </p>

          <Link href="/contact">
            <button className="inline-flex items-center gap-3 bg-[#FF0080] text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 mb-12" data-testid="button-work-with-us">
              WORK WITH US
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#FF0080]" />
              </div>
            </button>
          </Link>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="border-2 border-gray-700 rounded-lg p-6">
              <h4 className="text-white font-bold text-base">7+ Years Experience in Influencer Marketing</h4>
            </div>
            <div className="bg-[#FF0080] rounded-lg p-6">
              <h4 className="text-white font-bold text-base">Global Footprint Across London, New York, Beijing, Dubai and More</h4>
            </div>
            <div className="border-2 border-gray-700 rounded-lg p-6">
              <h4 className="text-white font-bold text-base">500M+ Social Impressions Delivered</h4>
            </div>
            <div className="border-2 border-gray-700 rounded-lg p-6">
              <h4 className="text-white font-bold text-base">$30M Annual Agency Revenue</h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
