import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import dontMakeAdsHeroImg from '@assets/TikTok-for-Business-Marketing-Agenct_1761842288035.png';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import bodyShopHeroImg from '@assets/IMG_7951_1761931806299.jpeg';
import gamingImg1 from '@assets/stock_images/gaming_esports_compu_611efecd.jpg';
import gamingImg2 from '@assets/stock_images/gaming_esports_compu_315351f1.jpg';
import gamingImg3 from '@assets/stock_images/gaming_esports_compu_3ad523c7.jpg';
import gamingImg4 from '@assets/stock_images/gaming_esports_compu_496ae89d.jpg';

export default function EslGamingCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCases = [
    {
      id: 'dont-make-ads',
      title: "Don't Make Ads",
      subtitle: "TikTok's authentic success stories garner 2 million likes and 400K NEW followers.",
      image: dontMakeAdsHeroImg,
      link: '/case-studies/dont-make-ads'
    },
    {
      id: 'tefal',
      title: 'Tefal',
      subtitle: 'Selling out product lines of household products for Tefal.',
      image: tefalHeroImg,
      link: '/case-studies/tefal'
    },
    {
      id: 'body-shop',
      title: 'The Body Shop',
      subtitle: "Raising awareness of The Body Shop's brand activism in the Middle-East.",
      image: bodyShopHeroImg,
      link: '/case-studies/body-shop'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.eslGaming.title}
        description={caseStudiesSEO.eslGaming.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.eslGaming.path}`}
        ogType={caseStudiesSEO.eslGaming.ogType}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${gamingImg1})`
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4" data-testid="heading-case-study-title">
            Building and scaling the ESL Gaming TikTok presence.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">About</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Creating and expanding the global ESL Gaming TikTok community.
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            To achieve a 50% growth in followers by year-end and boost the ESL brand on TikTok, we developed a comprehensive content strategy. This involved creating eight TikTok video assets weekly, focusing on current trends and maintaining brand authenticity. We centred our content around CS: GO and Dota 2, connecting it to major ESL events. Furthermore, we provided valuable advice on account growth hacking and TikTok services to enhance the TikTok experience.
          </p>

          <h3 className="text-2xl font-bold text-black mb-8">
            ESL's TikTok Success Story with Strategic Content.
          </h3>

          {/* Platforms & Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Platforms */}
            <div>
              <h4 className="text-lg font-bold text-black mb-6">Platforms</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <SiTiktok className="w-6 h-6 text-black" />
                  <span className="text-gray-800 font-medium">TikTok</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-black mb-6">Services</h4>
              <ul className="space-y-3 text-gray-800">
                <li className="font-medium">Influencer Marketing</li>
                <li className="font-medium">Community Management</li>
                <li className="font-medium">Social Video And Content Production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#FF0080] p-8 text-center">
            <div className="text-5xl font-black mb-2">113%</div>
            <div className="text-sm uppercase tracking-wider font-bold">Follower Increase</div>
          </div>
          <div className="bg-[#FF0080] p-8 text-center">
            <div className="text-5xl font-black mb-2">13%</div>
            <div className="text-sm uppercase tracking-wider font-bold">Engagement Rate</div>
          </div>
          <div className="bg-[#FF0080] p-8 text-center">
            <div className="text-5xl font-black mb-2">30K</div>
            <div className="text-sm uppercase tracking-wider font-bold">AV Video Views</div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Challenge</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Levelling Up on TikTok: A Collaboration for over 100% Follower Growth with Engaging Gaming Content!
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The goal of this collaboration was to manage and grow the @EslGaming TikTok account by creating versatile and engaging content, with an objective of 50% percent following growth.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In order to captivate our core audience group with a strong gaming passion point while at the same time creating content that resonates with a wider audience allowing our content to go viral and gain exposure with new potential fans, a specific content and account management strategy had to be created. In addition to this introducing the right tone of voice that reflects an understanding of gaming culture and resonates with the target audience was key.
          </p>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Strategy</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Captivating Core and New Audiences: A Multi-Pillared Content Strategy on TikTok for ESL.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In order to captivate our core target audience as well as to tab into new audience groups, the developed content strategy was based on a combination of gaming and humor. To bring this approach to life several content pillars were introduced including Game Play, Meme Content, Behind The Scenes footage and Pro Tips. In order to increase engagement as well as TikTok visibility, furthermore, a pro-active engagement approach was introduced. As part of this we interacted with over 50 relevant accounts to drive valuable interactions.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            By utilizing TikTok's native editing capabilities and incorporating popular music, trending sounds, and challenges, we ensured that our content was not only entertaining but also highly discoverable. The strategy emphasized the importance of authenticity and relatability, which helped ESL Gaming resonate with a broad audience, including hardcore gamers and casual viewers alike.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            To maintain momentum and keep the audience engaged, we implemented a consistent posting schedule of eight videos per week. This regular cadence kept the ESL Gaming account top of mind for followers and helped drive algorithmic visibility on the TikTok platform.
          </p>

          {/* Strategy Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <img
              src={gamingImg2}
              alt="ESL Gaming Strategy Image 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-strategy-1"
            />
            <img
              src={gamingImg3}
              alt="ESL Gaming Strategy Image 2"
              className="w-full h-auto rounded-lg"
              data-testid="img-strategy-2"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Results</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Strategic Triumph: 113% Follower Surge and 13% Engagement Rate on TikTok for ESL.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our dedicated efforts in implementing a comprehensive content strategy on TikTok yielded remarkable outcomes. We witnessed an astounding 113% increase in our follower count, surpassing our initial target and demonstrating the effectiveness of our approach.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Moreover, the engagement rate on our content soared to an impressive 13%, reflecting the resonance of our TikTok content with our audience. This high level of engagement underscores the success of our strategy in capturing and retaining the attention of our target audience.
          </p>

          {/* Results Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">113%</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">Follower Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">13%</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">30K</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">AV Video Views</div>
            </div>
          </div>

          {/* Results Screenshots Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src={gamingImg1}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-1"
            />
            <img
              src={gamingImg2}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-2"
            />
            <img
              src={gamingImg3}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-3"
            />
            <img
              src={gamingImg4}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-4"
            />
            <img
              src={gamingImg1}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-5"
            />
            <img
              src={gamingImg2}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-6"
            />
            <img
              src={gamingImg3}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-7"
            />
            <img
              src={gamingImg4}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-8"
            />
            <img
              src={gamingImg1}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-9"
            />
            <img
              src={gamingImg2}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-10"
            />
            <img
              src={gamingImg3}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-11"
            />
            <img
              src={gamingImg4}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-12"
            />
            <img
              src={gamingImg1}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-13"
            />
            <img
              src={gamingImg2}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-14"
            />
            <img
              src={gamingImg3}
              alt="ESL Gaming TikTok Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-15"
            />
          </div>
        </div>
      </section>

      {/* Start Project Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Start Project</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            OARC Digital is a global leading social media and influencer marketing agency, with offices across Europe, USA, Asia and the Middle-East.
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            If you'd like to speak to our team about how we can help you take your brand to another level and engage audiences globally, please complete our contact form.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="group" data-testid="button-contact">
              Let's talk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-2 tracking-wider text-center">Projects</p>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-black">
            Check out some of our related case studies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedCases.map((caseStudy) => (
              <Link key={caseStudy.id} href={caseStudy.link}>
                <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full" data-testid={`card-case-study-${caseStudy.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-case-study-${caseStudy.id}`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">Case Study</p>
                    <h3 className="text-xl font-black text-black mb-2">{caseStudy.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{caseStudy.subtitle}</p>
                    <div className="flex items-center text-[#FF0080] font-bold text-sm">
                      <span>View Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to elevate your brand with TikTok and gaming content excellence? Let's create something extraordinary together.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="group" data-testid="button-get-in-touch">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
