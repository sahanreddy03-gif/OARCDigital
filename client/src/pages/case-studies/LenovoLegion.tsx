import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiInstagram, SiTiktok, SiTwitch, SiYoutube } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import dontMakeAdsHeroImg from '@assets/TikTok-for-Business-Marketing-Agenct_1761842288035.png';
import bodyShopHeroImg from '@assets/IMG_7951_1761931806299.jpeg';

export default function LenovoLegionCaseStudy() {
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
      subtitle: "Raising awareness of The Body Shop's brand activism in the Middle-East.",
      image: bodyShopHeroImg,
      link: '/case-studies/body-shop'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.lenovoLegion.title}
        description={caseStudiesSEO.lenovoLegion.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.lenovoLegion.path}`}
        ogType={caseStudiesSEO.lenovoLegion.ogType}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://sociallypowerful.com/wp-content/uploads/2023/07/Danny-New.png)'
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4" data-testid="heading-case-study-title">
            Making Lenovo Legion stand out in a saturated gaming market.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">About</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Building an Exceptional Gaming Brand Identity in the UKI's Competitive Social Marketing Sector.
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            As a premier provider of gaming hardware and peripherals, Legion embarked on a journey to carve its unique identity within the densely populated gaming social landscape of the UKI. With the determination to rise above the competition in a crowded market, Legion aimed not only to stand out but to establish an unparalleled presence that resonated authentically with the gaming community.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            This aspiration fuelled the pursuit of cultivating an engaged and thriving social sphere where gamers could connect, collaborate, and find genuine camaraderie – transforming Legion from a mere brand into an integral part of every gamer's journey.
          </p>

          <h3 className="text-2xl font-bold text-black mb-8">
            Reactive and proactive content to drive organic growth.
          </h3>

          {/* Platforms & Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Platforms */}
            <div>
              <h4 className="text-lg font-bold text-black mb-6">Platforms</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <SiInstagram className="w-6 h-6 text-pink-600" />
                  <span className="text-gray-800 font-medium">Instagram</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiTiktok className="w-6 h-6 text-black" />
                  <span className="text-gray-800 font-medium">TikTok</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiTwitch className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-800 font-medium">Twitch</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiYoutube className="w-6 h-6 text-red-600" />
                  <span className="text-gray-800 font-medium">YouTube</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-black mb-6">Services</h4>
              <ul className="space-y-3 text-gray-800">
                <li className="font-medium">Influencer Marketing</li>
                <li className="font-medium">Social Strategy</li>
                <li className="font-medium">Social Video And Content Production</li>
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
            <div className="text-5xl font-black mb-2">13M</div>
            <div className="text-sm uppercase tracking-wider font-bold">Impressions</div>
          </div>
          <div className="bg-[#FF0080] p-8 text-center">
            <div className="text-5xl font-black mb-2">26M</div>
            <div className="text-sm uppercase tracking-wider font-bold">Ad Placement Views</div>
          </div>
          <div className="bg-[#FF0080] p-8 text-center">
            <div className="text-5xl font-black mb-2">1.1M</div>
            <div className="text-sm uppercase tracking-wider font-bold">Stream Followers</div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Challenge</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Breaking the Mould: Crafting Genuine Connections with the Gaming Community Beyond Traditional Branding.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The formulaic product focused approach most UKI brands use doesn't resonate with the gaming community, it's stale, dull and offers no value to anyone. Gaming is exciting, it's full of flavour and passion and that's what we needed to bring out.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The gaming audience wants a brand they can relate to, engage with and create dialogue with, that goes beyond classic brand and product offering, which meant we had to offer something entirely different to ensure the Lenovo brand popped on social ahead of their established competitors.
          </p>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Strategy</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            How Legion's Authentic Gaming Strategy Created a Thriving Community and Skyrocketed Growth.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Utilising insights, we crafted a social strategy spotlighting Legion's gaming focus, authenticity, and relatability. A friendly tone produced memes, polls, and engaging content, forging connections. Active engagement with brands and creators boosted brand awareness. The team we assembled to work on the account were all gamers, some previous professional gamers and streamers, so had a unique identity of understanding what they would want to see from a brand themselves.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The standout achievement was the Legion Stream Team, diverse creators reaching various audiences, highlighting brand and products, to a wide audience and demographics that Lenovo wanted to target. The Stream Team acted as Legion's public face, boosted by cross-channel content and activations across YouTube, Twitch, Instagram and TikTok. Growth was prioritised through a targeted paid social strategy highlighting best performing content, giveaways, and mutual content sharing.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Driving growth was a paramount objective and key to this was a relatable tone and engaging content, through social media management and not taking the Lenovo brand too seriously as it had previously. Collaborations with other influential gaming figures were integrated to tap into new audiences and escalate brand recognition within the gaming community.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Our strategy seamlessly blended relatability, influencers, engaging content, and dialogue, thrusting Legion into the UKI gaming spotlight as an authentic choice. Crafted content was purposefully engaging and fun, tailored to cater to the niche's preferences. Crucially, we prioritized interactive dialogue over one-sided communication, actively responding to comments and engaging with followers.
          </p>

          {/* Strategy Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/Lenovo-Legion-Marketing-Agency-1.png"
              alt="Lenovo Legion Strategy Image 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-strategy-1"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/Lenovo-Legion-Marketing-Agency.png"
              alt="Lenovo Legion Strategy Image 2"
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
            How Legion Became the UKI Gaming Community's Beloved Brand.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our approach seamlessly weaved together what gamers love: relatability, influencer collaborations, captivating content, and friendly conversations. This catapulted Legion to the forefront of the UKI gaming scene, making us a brand gamers truly connect with.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            And the numbers tell the story: We achieved an impressive 20 million impressions, captivating 26 million views through ad placements, and gained a remarkable 1.1 million loyal stream followers. We're not just a brand – we're a community.
          </p>

          {/* Results Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">13M</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">26M</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">Ad Placement Views</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">1.1M</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-600">Stream Followers</div>
            </div>
          </div>

          {/* Memes Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/puss-in-boots-meme.png"
              alt="Gaming Meme"
              className="w-full h-auto rounded-lg"
              data-testid="img-meme-1"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/steam-summer-sale-meme.png"
              alt="Gaming Meme"
              className="w-full h-auto rounded-lg"
              data-testid="img-meme-2"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/im-waiting-meme.png"
              alt="Gaming Meme"
              className="w-full h-auto rounded-lg"
              data-testid="img-meme-3"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/plink-meme.png"
              alt="Gaming Meme"
              className="w-full h-auto rounded-lg"
              data-testid="img-meme-4"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/Gi-Hun-Meme-1.png"
              alt="Gaming Meme"
              className="w-full h-auto rounded-lg"
              data-testid="img-meme-5"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/hulk-meme.png"
              alt="Gaming Meme"
              className="w-full h-auto rounded-lg"
              data-testid="img-meme-6"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/Meme-Will-Byers.png"
              alt="Gaming Meme"
              className="w-full h-auto rounded-lg"
              data-testid="img-meme-7"
            />
            <img
              src="https://sociallypowerful.com/wp-content/uploads/2023/07/puss-in-boots-meme.png"
              alt="Gaming Meme"
              className="w-full h-auto rounded-lg"
              data-testid="img-meme-8"
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
            Ready to elevate your brand with gaming and paid media excellence? Let's create something extraordinary together.
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
