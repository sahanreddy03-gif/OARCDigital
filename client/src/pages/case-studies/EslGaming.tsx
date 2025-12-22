import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import dontMakeAdsHeroImg from '@assets/generated_images/social_media_creators_marketing_image.png';
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
      id: 'authentic-stories',
      title: "Authentic Stories",
      subtitle: "TikTok's genuine content approach garners 2 million likes and 400K NEW followers.",
      image: dontMakeAdsHeroImg,
      link: '/case-studies/authentic-stories'
    },
    {
      id: 'volta-home',
      title: 'Volta Home',
      subtitle: 'Selling out product lines of household products through strategic campaigns.',
      image: tefalHeroImg,
      link: '/case-studies/volta-home'
    },
    {
      id: 'naturalcare-beauty',
      title: 'NaturalCare Beauty',
      subtitle: "Raising awareness of NaturalCare Beauty's brand activism in the Middle-East.",
      image: bodyShopHeroImg,
      link: '/case-studies/naturalcare-beauty'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.proGamerNetwork.title}
        description={caseStudiesSEO.proGamerNetwork.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.proGamerNetwork.path}`}
        ogType={caseStudiesSEO.proGamerNetwork.ogType}
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
            Accelerating esports community engagement at massive scale.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">About</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Multiplying audience reach through strategic esports content distribution.
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            ProGamer Network approached us with ambitious expansion targets for their TikTok presence. Our mission: 50% follower growth while strengthening brand authority on the platform. We architected an eight-asset-per-week content system that balanced trending relevance with game-specific expertise (Counter-Strike 2, Dota 2), anchoring every piece to major tournaments and community events. Strategic account optimization and platform growth consulting complemented organic content efforts.
          </p>

          <h3 className="text-2xl font-bold text-black mb-8">
            Strategic esports content at scale on TikTok.
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
      <section className="relative py-16 px-4 bg-black text-white overflow-hidden">
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-800 text-white p-8 text-center">
            <div className="text-5xl font-black mb-2">113%</div>
            <div className="text-sm uppercase tracking-wider font-bold">Follower Increase</div>
          </div>
          <div className="bg-zinc-800 text-white p-8 text-center">
            <div className="text-5xl font-black mb-2">13%</div>
            <div className="text-sm uppercase tracking-wider font-bold">Engagement Rate</div>
          </div>
          <div className="bg-zinc-800 text-white p-8 text-center">
            <div className="text-5xl font-black mb-2">30K</div>
            <div className="text-sm uppercase tracking-wider font-bold">AV Video Views</div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="relative py-16 px-4 bg-surface-lime">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Challenge</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Levelling Up on TikTok: A Collaboration for over 100% Follower Growth with Engaging Gaming Content!
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our challenge: scale @ProGamerNetwork beyond hardcore esports enthusiasts while maintaining authenticity with core gaming communities. The 50% growth target demanded strategic positioning that felt organic rather than corporate.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Success required cultural nuance. We needed messaging that resonated with esports veterans while appealing to mainstream gaming audiences. The tone had to reflect genuine gaming culture understanding rather than corporate interpretation. Content needed to balance specialized esports knowledge with accessible entertainment that drives viral potential.
          </p>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="relative py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Strategy</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Captivating Core and New Audiences: A Multi-Pillared Content Strategy on TikTok for ProGamer Network.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We built a diversified content pillars system: esports gameplay highlights, community humor content, production behind-the-scenes, and tactical pro strategies. Rather than one-directional broadcasting, we implemented proactive community engagement—personally interacting with 50+ relevant accounts and gaming influencers to build reciprocal relationships and amplify reach.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Platform optimization was critical. We leveraged TikTok's native editing suite, trending audio, popular sounds, and community challenges while maintaining ProGamer Network's distinctive voice. Every piece combined entertainment value with authenticity. The formula: relatable humor + specialized esports knowledge + accessible production = content that bridges hardcore gamers and mainstream audiences.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Consistency anchored growth. Eight weekly posts maintained algorithmic momentum and top-of-mind presence. This cadence demonstrated dedicated resource commitment, signaling to the algorithm and audience that ProGamer Network operates with professional discipline while maintaining community-first authenticity.
          </p>

          {/* Strategy Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="image-reveal">
              <img
                src={gamingImg2}
                alt="ProGamer Network Strategy Image 1"
                className="w-full h-auto rounded-lg"
                data-testid="img-strategy-1"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg3}
                alt="ProGamer Network Strategy Image 2"
                className="w-full h-auto rounded-lg"
                data-testid="img-strategy-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-16 px-4 bg-surface-lime">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Results</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Strategic Triumph: 113% Follower Surge and 13% Engagement Rate on TikTok for ProGamer Network.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Results demonstrated strategic execution. We achieved 113% follower growth—exceeding the 50% target by 2x. The compound effect of authentic content + proactive community engagement + consistent posting created compounding reach momentum within the TikTok algorithm.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Engagement metrics proved audience resonance: 13% engagement rate significantly outpaced platform benchmarks and demonstrated genuine community connection rather than hollow vanity metrics. This data confirmed our cultural authenticity worked—audiences weren't just following; they were actively participating in ProGamer Network's gaming community.
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
            <div className="image-reveal">
              <img
                src={gamingImg1}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-1"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg2}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-2"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg3}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-3"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg4}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-4"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg1}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-5"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg2}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-6"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg3}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-7"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg4}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-8"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg1}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-9"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg2}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-10"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg3}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-11"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg4}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-12"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg1}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-13"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg2}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-14"
              />
            </div>
            <div className="image-reveal">
              <img
                src={gamingImg3}
                alt="ProGamer Network TikTok Content"
                className="w-full h-auto rounded-lg"
                data-testid="img-result-15"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Start Project Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Start Project</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            OARC Digital is a global leading social media and influencer marketing agency, with offices across Europe, USA, Asia and the Middle-East.
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            If you'd like to speak to our team about how we can help you take your brand to another level and engage audiences globally, please complete our contact form.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="group btn-shimmer" data-testid="button-contact">
              Let's talk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="relative py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-2 tracking-wider text-center">Projects</p>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-black">
            Check out some of our related case studies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedCases.map((caseStudy) => (
              <Link key={caseStudy.id} href={caseStudy.link}>
                <Card className="overflow-hidden hover-lift glass-lime cursor-pointer h-full" data-testid={`card-case-study-${caseStudy.id}`}>
                  <div className="relative h-64 overflow-hidden image-reveal">
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
                    <div className="flex items-center text-zinc-400 font-bold text-sm">
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
      <section className="relative py-20 px-4 bg-black text-white overflow-hidden">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to elevate your brand with TikTok and gaming content excellence? Let's create something extraordinary together.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="group btn-shimmer glow-lime" data-testid="button-get-in-touch">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
