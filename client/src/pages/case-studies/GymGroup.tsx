import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import dontMakeAdsHeroImg from '@assets/TikTok-for-Business-Marketing-Agenct_1761842288035.png';
import bodyShopHeroImg from '@assets/The-Body-Shop-Social-Marketing-Agency_1761842288034.jpg';

export default function GymGroupCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    },
    {
      id: 'body-shop',
      title: 'The Body Shop',
      subtitle: 'Celebrating authenticity and natural beauty with TikTok.',
      image: bodyShopHeroImg,
      link: '/case-studies/body-shop'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.gymGroup.title}
        description={caseStudiesSEO.gymGroup.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.gymGroup.path}`}
        ogType={caseStudiesSEO.gymGroup.ogType}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://sociallypowerful.com/wp-content/uploads/2023/08/The-Gym-Group-Socially-Powerful.png)'
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4" data-testid="heading-case-study-title">
            Recruiting a whole new generation of gym-goers.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">About</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            We democratised gym culture for The Gym Group.
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            During the busiest time of year and most competitive for attention, we made The Gym Group unmissable on TikTok.
          </p>

          <h3 className="text-2xl font-bold text-black mb-8">
            Broke stereotypes around gym culture with a Gen-Z driven creative marketing campaign.
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
                <li className="font-medium">Creative</li>
                <li className="font-medium">Paid Media</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#FF0080] p-8 text-center">
            <div className="text-5xl font-black mb-2">1M</div>
            <div className="text-sm uppercase tracking-wider font-bold">Clicks</div>
          </div>
          <div className="bg-[#FF0080] p-8 text-center">
            <div className="text-5xl font-black mb-2">15M</div>
            <div className="text-sm uppercase tracking-wider font-bold">Views</div>
          </div>
          <div className="bg-[#FF0080] p-8 text-center">
            <div className="text-5xl font-black mb-2">500K</div>
            <div className="text-sm uppercase tracking-wider font-bold">Engagements</div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Challenge</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Helping The Gym Group Rise Above January Fitness Noise.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In January, amidst the fitness frenzy, we strategically launched a campaign for The Gym Group. Our goal: to stand out in the clutter on TikTok. As people embraced New Year's resolutions, gym chatter reaches its peak saturation and attention for eyeballs from fitness brands is at an all-time high.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            We had the task of making The Gym Group the provider people would choose to hit their New Year fitness goals and making them unmissable on TikTok, communicating The Gym Group as the UK's best value 24/7 gym.
          </p>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Strategy</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            TikTok & The Gym Group - Top-View Ad Unites, Inspires, and Redefines Fitness Perceptions.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Fitness brands were targeting their social media strategy towards those already invested in fitness, so we went after the rest of the market.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our creative, driven by insight around consumer attitudes to fitness, was all about encouraging participation in fitness by tackling pain points around the gym (anxiety, accessibility, embarrassment), deployed on the world's most inclusive platform: TikTok.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Leveraging a portfolio that championed diversity at all levels of fitness, we celebrated all types of gym-goer in a light-hearted way to break stereotypes and represent everyone no matter their level.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Alongside this, we seeded the product to over 500 Nano TikTok creators, who produced organic content in-line with campaign concept and increased awareness of the product. As a result, the campaign achieved over 59M views.
          </p>

          {/* Strategy Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/08/Picture-1-2.png"
              alt="The Gym Group Strategy Image 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-strategy-1"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/08/Picture-2.png"
              alt="The Gym Group Strategy Image 2"
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
            The unmissable fitness campaign on TikTok.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our fresh approach to fitness marketing has delivered remarkable results, reshaping how people engage. Our campaign drew an impressive 1 million clicks, showing how appealing our content was to our audience. We reached an extensive 15 million views, proving our ability to capture diverse viewers on TikTok.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            The impact was clear with 500K engagements—likes, comments, shares—highlighting how strongly people connected with our campaign. These numbers not only show our strategy works but also how relevant it is in today's crowded online space. By using TikTok's Top-View Ad, we didn't just change fitness marketing; we sparked a movement that encouraged participation, broke stereotypes, and embraced everyone.
          </p>

          {/* Results Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">1M</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">Clicks</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">15M</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">Views</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">500K</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">Engagements</div>
            </div>
          </div>

          {/* Results Screenshots Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/08/Picture-1-2.png"
              alt="The Gym Group Campaign Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-1"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/09/1.png"
              alt="The Gym Group Campaign Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-2"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/09/11.png"
              alt="The Gym Group Campaign Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-3"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/09/2222-1.png"
              alt="The Gym Group Campaign Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-4"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/09/Gym-Group-Influencer-Marketing.png"
              alt="The Gym Group Campaign Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-5"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/09/Gym-Group-Marketing-Agency.png"
              alt="The Gym Group Campaign Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-6"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/09/Pictu1re-1.png"
              alt="The Gym Group Campaign Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-7"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/09/Picture-1.png"
              alt="The Gym Group Campaign Content"
              className="w-full h-auto rounded-lg"
              data-testid="img-result-8"
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
            Ready to revolutionize your fitness brand with creative TikTok campaigns? Let's create something extraordinary together.
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
