import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import challengeImg1 from '@assets/IMG_7990_1761953778756.png';
import challengeImg2 from '@assets/IMG_7989_1761953778756.png';
import challengeImg3 from '@assets/IMG_7987_1761953778756.png';
import strategyImg1 from '@assets/IMG_7986_1761954243676.png';
import strategyImg2 from '@assets/IMG_7985_1761954243676.png';
import tefalHeroImg from '@assets/tefal-hero-bg_1761949476870.png';
import dontMakeAdsHeroImg from '@assets/tiktok-hero-bg_1761949476870.png';

export default function AzzaroCaseStudy() {
  const relatedCases = [
    {
      id: 'tefal',
      title: 'Tefal',
      subtitle: 'Selling out product lines of household products for Tefal.',
      image: tefalHeroImg,
      link: '/case-studies/tefal'
    },
    {
      id: 'dont-make-ads',
      title: "Don't Make Ads",
      subtitle: "TikTok's authentic success stories garner 2 million likes and 400K NEW followers.",
      image: dontMakeAdsHeroImg,
      link: '/case-studies/dont-make-ads'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://sociallypowerful.com/wp-content/uploads/2023/08/LOreal-influencer-marketing-agency.png)'
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4" data-testid="heading-case-study-title">
            Introducing a luxury fragrance Azzaro to the TikTok community.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">ABOUT</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Taking Azzaro from "mundane" to "extraordinary"
          </h2>
          
          <p className="text-base text-black leading-relaxed mb-12">
            Azzaro, a distinguished luxury fragrance brand under the L'Oréal umbrella, approached our agency with a unique challenge: launching their latest olfactory masterpiece, "The Most Wanted," within the dynamic and trendsetting landscape of TikTok. We delivered a campaign that highlighted the mundane to extraordinary.
          </p>

          <p className="text-base text-black leading-relaxed mb-12">
            Understanding the distinct challenges posed by the TikTok platform, we strategically partnered with a carefully curated selection of 20 TikTok creators within the US market. This partnership wasn't merely about numbers; it was about leveraging the individual creativity and reach of each creator to amplify the fragrance's presence. By enlisting creators from diverse spheres including Fashion, Lifestyle, Entertainment, and Men's Grooming, we ensured a multi-faceted approach that resonated across demographics.
          </p>

          {/* Campaign Overview Box */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-black text-black mb-6">
              A powerful and creative beauty influencer marketing campaign, supplemented with supercharged paid social.
            </h3>
            
            <div className="space-y-6">
              {/* Platforms */}
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider">Platforms</p>
                <div className="flex items-center gap-3">
                  <SiTiktok className="w-8 h-8 text-black" />
                  <span className="text-base font-semibold text-black">TikTok</span>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider">Services</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-base text-black">Influencer Marketing</span>
                  <span className="text-base text-black">Creative</span>
                  <span className="text-base text-black">Paid Media</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Pink Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">59M</div>
              <div className="text-sm font-semibold uppercase">REACH</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">1.5M</div>
              <div className="text-sm font-semibold uppercase">ENGAGEMENTS</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">20+</div>
              <div className="text-sm font-semibold uppercase">CREATORS</div>
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
            Bridging the gap from high-end luxury to Gen-Z on TikTok.
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed mb-8">
            <p>
              Azzaro, a revered high-end brand renowned for its sophistication, was faced with a unique aspiration: to bridge the generational gap and connect with a younger demographic. This intriguing challenge compelled us to embark on a creative journey to develop Azzaro's inaugural TikTok activation – a task that entailed not just showcasing the product's luxurious positioning, but also crafting an experience that seamlessly integrated within the native tapestry of TikTok.
            </p>
            
            <p>
              TikTok, provided an unparalleled opportunity for products to not only gain visibility but also achieve viral status. The statistics underscored this potential: 52% of users actively explored new products on the platform, drawn to aspirational videos that showcased transformations. This insight formed the cornerstone of our strategy – we weren't just showcasing a product; we were curating an experience that took viewers on a journey from intrigue to aspiration.
            </p>
          </div>

          {/* Challenge Images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={challengeImg1}
                alt="Azzaro fragrance TikTok content - luxury transformation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={challengeImg2}
                alt="Azzaro Parfums Partner TikTok campaign"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={challengeImg3}
                alt="Azzaro The Most Wanted TikTok influencer content"
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
            From mundane to extraordinary with Azzaro.
          </h3>
          
          <div className="space-y-4 text-black text-base leading-relaxed">
            <p>
              We developed a branded hashtag challenge, showcasing how Azzaro's The Most Wanted fragrance transforms users from the mundane to the extraordinary with just one spray. Our creative concepts were meticulously designed to evoke this journey. Each video was a careful blend of aesthetic allure and the promise of transformation. Azzaro's luxurious allure wasn't merely presented; it was intertwined with narratives that resonated with aspirations of the audience.
            </p>
            
            <p>
              Using a data-driven approach, we selected 20 Macro and Hero creators from Fashion, Lifestyle, Men's Grooming & Entertainment tribes with a high male audience, whose content and tone of voice were aligned with the overarching campaign message and brand values. Each influencer created one high-quality TikTok transition video, using a bespoke brand song as the sound that helped encourage UGC.
            </p>
            
            <p>
              Alongside this, we seeded the product to over 500 Nano TikTok creators, who produced organic content in-line with campaign concept and increased awareness of the product. As a result, the campaign achieved over 59M views.
            </p>
          </div>

          {/* Strategy Images */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={strategyImg1}
                alt="Azzaro influencer content - transformation aesthetic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={strategyImg2}
                alt="Azzaro TikTok creator content - men's grooming"
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
            Celebrating authentic connections: Azzaro and L'Oréal's influencer campaign success!
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed mb-12">
            <p>
              Our collaboration with Azzaro and L'Oréal exemplified the power of authentic partnerships in influencer marketing. By carefully selecting creators whose values aligned with the brand's ethos, we achieved genuine connections that resonated with audiences.
            </p>
            
            <p>
              The campaign not only introduced Azzaro's luxury fragrance to a new generation on TikTok but also demonstrated how strategic influencer partnerships can drive meaningful engagement and brand awareness in the digital age.
            </p>
          </div>

          {/* Results Stats - Pink Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">59M</div>
              <div className="text-sm font-semibold uppercase">TOTAL REACH</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">1.5M</div>
              <div className="text-sm font-semibold uppercase">ENGAGEMENTS</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">20+</div>
              <div className="text-sm font-semibold uppercase">CREATORS</div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
