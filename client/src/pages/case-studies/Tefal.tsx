import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, ChevronLeft, ChevronRight, Instagram, Youtube } from 'lucide-react';
import { SiSnapchat, SiTiktok } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import tefalAboutImg from '@assets/HOME-LAME-3-About-Tefal_1761767129107.jpg';
import influencer1 from '@assets/image_1761768268453.png';
import influencer2 from '@assets/image_1761768297418.png';
import product1 from '@assets/IMG_7903_1761750487084.png';
import product2 from '@assets/IMG_7904_1761750487084.png';
import product3 from '@assets/IMG_7905_1761750487084.png';
import socialEmbed1 from '@assets/IMG_7906_1761750487084.png';
import socialEmbed2 from '@assets/IMG_7907_1761750487084.png';

export default function TefalCaseStudy() {
  const [currentRelatedCase, setCurrentRelatedCase] = useState(0);

  const relatedCases = [
    {
      title: "Don't Make Ads",
      category: "TikTok",
      stats: { impressions: "33M", engagement: "+450K", ctr: "2M" }
    },
    {
      title: "Introducing Luxury Fragrance",
      category: "Instagram",
      stats: { reach: "59M", engagement: "1.5M", conversions: "20+" }
    },
    {
      title: "Raising Awareness",
      category: "Multi-Channel",
      stats: { impressions: "30M", reach: "10%", ctr: "5%" }
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
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] bg-black overflow-hidden">
        <img 
          src={tefalHeroImg}
          alt="Tefal Kitchen Products"
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
          <span className="text-[#FF0080]">Selling Out Product Lines...</span>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase" data-testid="heading-hero">
              SELLING OUT PRODUCT LINES OF HOUSEHOLD PRODUCTS FOR TEFAL.
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
              <div className="inline-block bg-[#FF0080] text-white px-6 py-2 rounded text-sm font-bold uppercase mb-6" data-testid="badge-about">
                About
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8">
                Dominating European Markets with Innovation and Sales Excellence for Tefal.
              </h2>

              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                With a strategic focus on elevating brand recognition and propelling sales of Tefal's flagship appliances within the competitive European market, the mission was clear: to establish Tefal as the premier brand within its category.
              </p>

              <p className="text-base text-gray-300 mb-8 leading-relaxed">
                The objective was ambitious – to navigate a saturated market and carve a distinct space as the ultimate choice for consumers seeking top-tier home and kitchen appliances. This endeavor extended beyond traditional marketing goals; it aimed to evoke genuine brand affection and drive sales through an innovative social-first approach.
              </p>

              <h3 className="text-xl md:text-2xl font-black text-[#FF0080] mb-6">
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
                  <div className="bg-[#FF0080] text-white text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-1">
                    Influencer Marketing
                  </div>
                  <div className="bg-[#FF0080] text-white text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-2">
                    Community Management
                  </div>
                  <div className="bg-[#FF0080] text-white text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-3">
                    Social Strategy
                  </div>
                  <div className="bg-[#FF0080] text-white text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-4">
                    Social Video And Content Production
                  </div>
                  <div className="bg-[#FF0080] text-white text-center py-3 px-4 rounded font-bold text-sm uppercase" data-testid="service-5">
                    Paid Media
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Pink Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FF0080] rounded-2xl p-10 text-center" data-testid="stat-impressions">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">70M+</div>
              <div className="text-lg font-semibold text-white uppercase tracking-wide">Impressions</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-10 text-center" data-testid="stat-collaborations">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">500+</div>
              <div className="text-lg font-semibold text-white uppercase tracking-wide">Collaborations</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-10 text-center" data-testid="stat-sold-out">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">SOLD OUT</div>
              <div className="text-lg font-semibold text-white uppercase tracking-wide">Product Lines</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-sm font-semibold mb-4 uppercase tracking-wide">Case Study Video</div>
                <p className="text-xs text-gray-400">HOW OARC DIGITAL SOLD-OUT SMALL APPLIANCES FOR TEFAL USING INFLUENCERS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section - White Background */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#FF0080] mb-12 uppercase" data-testid="heading-challenge">
            Challenge
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
            Harnessing the power of influencers to grow brand love and raise awareness for Tefal.
          </h3>

          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            Starting in 2019, our journey with Tefal has been a testament to the impactful potential of influencer marketing activations. We embarked on a mission to not only elevate the brand's standing but also to position Tefal as a trailblazer in trust and innovation within the realm of social media.
          </p>

          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            At the heart of this optimization lay the essential understanding that consumers, regardless of the ever-evolving dynamics, still seek convenience and solutions that seamlessly integrate into their daily routines. The appeal of gadgets that simplify lives remained steadfast, creating a compelling foundation for our strategy moving forward. The allure of TikTok, YouTube, and Instagram has galvanized the attention of Millennials and Gen-Z, reshaping how they explore and interact with brands.
          </p>

          <p className="text-base text-gray-700 mb-10 leading-relaxed">
            Navigating these challenges was, without doubt, a meticulous endeavor, requiring an acute understanding of emerging consumer trends and digital platforms.
          </p>

          {/* Social Media Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px]">
              <img 
                src={socialEmbed1}
                alt="Tefal Social Media Content"
                className="w-full h-full object-cover"
                data-testid="img-social-content-1"
              />
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px]">
              <img 
                src={socialEmbed2}
                alt="Tefal Social Media Campaign"
                className="w-full h-full object-cover"
                data-testid="img-social-content-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section - Black Background */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-12 uppercase text-center" data-testid="heading-strategy">
            Strategy
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Tefal's Success Story through Adaptive Strategy and Performance-Based Influencer Marketing
          </h3>

          <p className="text-base text-gray-300 mb-10 leading-relaxed">
            This structured digital path-way represented a combination of our strategy. We recognized Tefal's talent was in both best-in-class product planning and thought leadership around "making life easier," creating an opportunity worth exploring. With this multifaceted approach, we identified the best practices across industries that could be deployed with our partner.
          </p>

          {/* Influencer Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800 rounded-2xl overflow-hidden h-[350px]">
              <img 
                src={influencer1}
                alt="Tefal Influencer Marketing Content"
                className="w-full h-full object-cover"
                data-testid="img-influencer-1"
              />
            </div>
            <div className="bg-gray-800 rounded-2xl overflow-hidden h-[350px]">
              <img 
                src={influencer2}
                alt="Tefal Influencer Campaign"
                className="w-full h-full object-cover"
                data-testid="img-influencer-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - White Background */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#FF0080] mb-12 uppercase" data-testid="heading-results">
            Results
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
            Selling out Tefal Product Lines through Strategic Paid Social Excellence and Lasting Influencer Partnerships.
          </h3>

          <p className="text-base text-gray-700 mb-10 leading-relaxed">
            Thanks to our dual approach, significant benefits were realized. Our teams were able to reach a saturated market and build genuine affinity, ultimately facilitating the customer's ability to recognize that value proposition. Strategically executed influencer partnerships along with a sophisticated paid social framework created what can only be described as explosive and meaningful brand lift and engagement.
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
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">For Tefal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 rounded-2xl h-[350px] overflow-hidden">
              <img 
                src={product1}
                alt="Tefal Product Showcase"
                className="w-full h-full object-cover"
                data-testid="img-product-1"
              />
            </div>
            <div className="bg-gray-200 rounded-2xl h-[350px] overflow-hidden">
              <img 
                src={product2}
                alt="Tefal Product Line"
                className="w-full h-full object-cover"
                data-testid="img-product-2"
              />
            </div>
            <div className="bg-gray-200 rounded-2xl h-[350px] overflow-hidden">
              <img 
                src={product3}
                alt="Tefal Kitchen Products"
                className="w-full h-full object-cover"
                data-testid="img-product-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Start a Project Section - Black Background */}
      <section className="py-20 px-4 bg-black">
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
            <button className="inline-flex items-center gap-3 bg-[#FF0080] text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2" data-testid="button-get-started">
              get started
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
                Check out some <span className="text-[#FF0080]">of our</span> related case studies
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
              <div key={idx} className="bg-gray-900 rounded-2xl overflow-hidden h-[400px] relative group">
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
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/our-work">
              <button className="inline-flex items-center gap-2 bg-[#FF0080] text-white rounded-full px-8 py-3 text-sm font-semibold hover-elevate active-elevate-2">
                VIEW ALL CASE STUDIES
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Get In Touch Section - Black Background */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase" data-testid="heading-get-in-touch">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            We'd love to hear how to start powerful conversation, drive social engagement, build your brand, hit sales targets or meet other goals you have, wherever you are in the world.
          </p>

          <Link href="/contact">
            <button className="inline-flex items-center gap-3 bg-[#FF0080] text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 mb-12" data-testid="button-work-with-us">
              WORK WITH US
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#FF0080]" />
              </div>
            </button>
          </Link>

          {/* Office Locations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold text-sm mb-1">Fly Reels Collaborative,</h4>
              <p className="text-gray-400 text-xs">Chennai India</p>
            </div>
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold text-sm mb-1">Global Footprint Across</h4>
              <p className="text-gray-400 text-xs">Europe, USA, MENA</p>
            </div>
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold text-sm mb-1">Greater Social</h4>
              <p className="text-gray-400 text-xs">Islamabad Pakistan</p>
            </div>
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold text-sm mb-1">Killer Ascent Agency</h4>
              <p className="text-gray-400 text-xs">London UK</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
