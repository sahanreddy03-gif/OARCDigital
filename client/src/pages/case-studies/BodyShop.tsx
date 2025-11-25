import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiInstagram, SiPinterest, SiSnapchat, SiTiktok, SiYoutube } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import challengeImg1 from '@assets/IMG_7995_1761955512246.png';
import challengeImg2 from '@assets/IMG_7996_1761955512246.jpeg';
import strategyImg1 from '@assets/IMG_7997_1761955811646.jpeg';
import strategyImg2 from '@assets/IMG_7994_1761955811646.jpeg';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import dontMakeAdsHeroImg from '@assets/TikTok-for-Business-Marketing-Agenct_1761842288035.png';
import beautyHeroImg from '@assets/stock_images/beauty_skincare_cosm_560a8e27.jpg';

export default function BodyShopCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCases = [
    {
      id: 'homecraft-innovations',
      title: 'HomeCraft Innovations',
      subtitle: 'Selling out product lines of household products through strategic campaigns.',
      image: tefalHeroImg,
      link: '/case-studies/homecraft-innovations'
    },
    {
      id: 'authentic-stories',
      title: "Authentic Stories",
      subtitle: "TikTok's genuine content approach garners 2 million likes and 400K NEW followers.",
      image: dontMakeAdsHeroImg,
      link: '/case-studies/authentic-stories'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.naturalCareBeauty.title}
        description={caseStudiesSEO.naturalCareBeauty.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.naturalCareBeauty.path}`}
        ogType={caseStudiesSEO.naturalCareBeauty.ogType}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${beautyHeroImg})`
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4" data-testid="heading-case-study-title">
            Establishing values-driven brand authority through regional influencer networks.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">About</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Building authentic brand advocacy and sustained revenue growth.
          </h2>
          
          <p className="text-base text-black leading-relaxed mb-6">
            Over 18 months, we developed a comprehensive influencer partnership strategy positioning NaturalCare Beauty as a socially conscious brand. The initiative balanced purpose-driven storytelling with commercial objectives, addressing both brand perception and revenue targets across Middle Eastern markets.
          </p>

          <p className="text-base text-black leading-relaxed mb-12">
            The program operated on dual objectives: (1) repositioning NaturalCare Beauty as a values-first brand prioritizing social impact and ethical sourcing, and (2) driving measurable sales growth through multi-channel paid and organic influencer activation.
          </p>

          {/* Campaign Overview Box */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-black text-black mb-6">
              Breaking boundaries, with powerful stories.
            </h3>
            
            <div className="space-y-6">
              {/* Platforms */}
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider">Platforms</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <SiInstagram className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">Instagram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiPinterest className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">Pinterest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiSnapchat className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">Snapchat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiTiktok className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">TikTok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiYoutube className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">YouTube</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider">Services</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-base text-black">Influencer Marketing</span>
                  <span className="text-base text-black">Community Management</span>
                  <span className="text-base text-black">Paid Media</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Pink Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">30M</div>
              <div className="text-sm font-semibold uppercase">Impressions</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">15%</div>
              <div className="text-sm font-semibold uppercase">Uplift in Sales</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">17M</div>
              <div className="text-sm font-semibold uppercase">Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#FF0080] mb-8 uppercase">
            Challenge
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
            Ethical Branding and Empowerment in the Middle East.
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed mb-8">
            <p>
              Middle Eastern Gen-Y and Gen-Z consumers increasingly make purchasing decisions based on brand ethics and social responsibility. Rather than viewing brands transactionally, they seek partnerships with organizations aligned to their personal values and commitment to positive impact. This demographic expects radical transparency and measurable contributions to social causes.
            </p>
            
            <p>
              Influencers serve as essential trust bridges in this landscape. As cultural commentators and value-aligned voices, they can amplify brand purpose authentically. Strategic influencer partnerships enable direct conversation with values-conscious audiences, converting awareness into community involvement and sustained loyalty.
            </p>
          </div>

          {/* Challenge Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={challengeImg1}
                alt="NaturalCare Beauty event - women empowerment campaign"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={challengeImg2}
                alt="NaturalCare Beauty influencer collaboration - brand activism"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#FF0080] mb-8 uppercase">
            Strategy
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-black mb-6">
            Curating Authentic Voices for Impactful Change.
          </h3>
          
          <div className="space-y-4 text-black text-base leading-relaxed">
            <p>
              We assembled a cohesive influencer coalition across the Middle East, each selected for authentic alignment with NaturalCare Beauty's activist positioning. Rather than transactional partnerships, we structured deep collaborations enabling creators to tell genuine stories about social impact.
            </p>
            
            <p>
              Content calendars synchronized with cultural moments, product milestones, and social awareness days. Each creator developed personalized narratives—ranging from fair trade supply chain stories to women empowerment testimonials—delivered through their unique voice and platform style.
            </p>
            
            <p>
              Cross-platform distribution (Instagram, YouTube, TikTok, Snapchat, Pinterest) ensured omnipresent messaging while maintaining content context. Educational and inspirational content balanced product visibility, driving both consciousness and conversion.
            </p>
          </div>

          {/* Strategy Images */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={strategyImg1}
                alt="NaturalCare Beauty influencer campaign content"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={strategyImg2}
                alt="NaturalCare Beauty brand activism storytelling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#FF0080] mb-8 uppercase">
            Results
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
            Driving Meaningful Impact and Measurable Growth.
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed mb-12">
            <p>
              The 18-month partnership produced measurable impact across awareness and commerce metrics. Authentic creator storytelling created genuine audience resonance, extending far beyond typical influencer collaboration ROI expectations.
            </p>
            
            <p>
              Brand perception metrics improved significantly among target demographics. NaturalCare Beauty shifted from perceived luxury import to trusted values-aligned partner. Sales growth reflected this perception change, with both e-commerce and retail channels experiencing measurable uplift driven by influencer-generated awareness and credibility.
            </p>
          </div>

          {/* Results Stats - Pink Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">30M</div>
              <div className="text-sm font-semibold uppercase">Total Impressions</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">15%</div>
              <div className="text-sm font-semibold uppercase">Sales Uplift</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">17M</div>
              <div className="text-sm font-semibold uppercase">Total Reach</div>
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
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 uppercase text-center">
            Related Case Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCases.map((caseStudy) => (
              <Link key={caseStudy.id} href={caseStudy.link}>
                <Card className="overflow-hidden hover-elevate cursor-pointer" data-testid={`card-case-study-${caseStudy.id}`}>
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img 
                      src={caseStudy.image}
                      alt={`${caseStudy.title} case study`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-black text-black mb-2">{caseStudy.title}</h3>
                    <p className="text-sm text-gray-600">{caseStudy.subtitle}</p>
                  </CardContent>
                </Card>
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

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            OARC Digital is a global leading social media and influencer marketing agency, with offices across Europe, USA, Asia and the Middle-East.
          </p>

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            If you'd like to speak to our team about how we can help you take your brand to another level and engage audiences globally, please complete our contact form.
          </p>

          <Link href="/contact">
            <Button 
              className="bg-[#FF0080] hover:bg-[#FF0080] text-white rounded-full px-8 py-6 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-contact"
            >
              CONTACT US
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
