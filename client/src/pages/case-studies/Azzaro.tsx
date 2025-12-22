import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import challengeImg1 from '@assets/IMG_7990_1761953778756.png';
import challengeImg2 from '@assets/IMG_7989_1761953778756.png';
import challengeImg3 from '@assets/IMG_7987_1761953778756.png';
import strategyImg1 from '@assets/IMG_7986_1761954243676.png';
import strategyImg2 from '@assets/IMG_7985_1761954243676.png';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import dontMakeAdsHeroImg from '@assets/generated_images/social_media_creators_marketing_image.png';
import fragranceHeroImg from '@assets/stock_images/luxury_perfume_fragr_8ec132de.jpg';

export default function AzzaroCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCases = [
    {
      id: 'volta-home',
      title: 'Volta Home',
      subtitle: 'Selling out product lines of household products through strategic campaigns.',
      image: tefalHeroImg,
      link: '/case-studies/volta-home'
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
        title={caseStudiesSEO.maisonLumiere.title}
        description={caseStudiesSEO.maisonLumiere.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.maisonLumiere.path}`}
        ogType={caseStudiesSEO.maisonLumiere.ogType}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${fragranceHeroImg})`
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4" data-testid="heading-case-study-title">
            Introducing luxury fragrance to Gen-Z through authentic creator partnerships.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">ABOUT</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Building luxury brand prestige through creator-driven engagement
          </h2>
          
          <p className="text-base text-black leading-relaxed mb-12">
            Maison Lumière, the prestigious fragrance powerhouse, partnered with us to introduce their signature scent to TikTok's Gen-Z audience. Our challenge: connect luxury positioning with viral-first platform dynamics through authentic creator partnerships.
          </p>

          <p className="text-base text-black leading-relaxed mb-12">
            We assembled a handpicked team of 20 influential TikTok creators across the United States. Rather than pursuing volume, we prioritized creative alignment and authentic audience overlap. Strategically sourcing creators from fashion, lifestyle, entertainment, and grooming sectors ensured multifaceted platform penetration and demographic diversity.
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

          {/* Stats - Green Boxes */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            
            <div className="bg-zinc-800 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">59M</div>
              <div className="text-sm font-semibold uppercase">REACH</div>
            </div>
            <div className="bg-zinc-800 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">1.5M</div>
              <div className="text-sm font-semibold uppercase">ENGAGEMENTS</div>
            </div>
            <div className="bg-zinc-800 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">20+</div>
              <div className="text-sm font-semibold uppercase">CREATORS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="relative py-16 px-4 bg-black text-white overflow-hidden">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-zinc-400 mb-8 uppercase">
            Challenge
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
            Bridging the gap from high-end luxury to Gen-Z on TikTok.
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed mb-8">
            <p>
              Maison Lumière's core challenge: introducing a prestige fragrance to an audience that traditionally discovers brands through peer recommendations rather than traditional luxury marketing. This required us to rethink luxury communication for TikTok's norms while preserving brand equity.
            </p>
            
            <p>
              The data supported our approach: over half of TikTok users use the platform for product discovery, with transformation-focused content driving highest engagement. We recognized an opportunity to showcase fragrance not as an accessory, but as a confidence-building ritual—a narrative that would resonate organically.
            </p>
          </div>

          {/* Challenge Images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden image-reveal">
              <img 
                src={challengeImg1}
                alt="Maison Lumière fragrance TikTok content - luxury transformation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden image-reveal">
              <img 
                src={challengeImg2}
                alt="Maison Lumière Partner TikTok campaign"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden image-reveal">
              <img 
                src={challengeImg3}
                alt="Maison Lumière TikTok influencer content"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="relative py-16 px-4 bg-surface-lime">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-zinc-400 mb-8 uppercase">
            Strategy
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-black mb-6">
            From mundane to extraordinary with Maison Lumière.
          </h3>
          
          <div className="space-y-4 text-black text-base leading-relaxed">
            <p>
              We launched a hashtag-driven challenge positioning the fragrance as a daily confidence boost. Each creator produced a transition-focused video showcasing the "before-and-after" effect of wearing the signature scent, paired with an exclusive brand soundtrack. The creative emphasized personal elevation rather than product features.
            </p>
            
            <p>
              Our creator selection process prioritized audience demographics and authentic voice alignment. We partnered with 20 prominent creators across fashion, lifestyle, men's wellness, and entertainment verticals. Each produced signature transition content using the branded audio, creating a cohesive campaign narrative.
            </p>
            
            <p>
              Simultaneously, 500+ tier-2 creators amplified the message through organic interpretations of the challenge, exponentially increasing reach. Final campaign performance: 59M+ total impressions across all creator tiers.
            </p>
          </div>

          {/* Strategy Images */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="rounded-lg overflow-hidden image-reveal">
              <img 
                src={strategyImg1}
                alt="Maison Lumière influencer content - transformation aesthetic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden image-reveal">
              <img 
                src={strategyImg2}
                alt="Maison Lumière TikTok creator content - men's grooming"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-16 px-4 bg-black text-white overflow-hidden">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-zinc-400 mb-8 uppercase">
            Results
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
            Celebrating authentic connections: Maison Lumière's influencer campaign success!
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed mb-12">
            <p>
              Our methodology proved that luxury brands thrive on TikTok when authenticity precedes product promotion. By aligning with creators who naturally embody brand values, we cultivated trust and credibility among audiences typically skeptical of branded content.
            </p>
            
            <p>
              The campaign successfully introduced Maison Lumière to millions of new Gen-Z consumers while establishing a blueprint for luxury-to-digital-native brand translations. Engagement rates and repeat content creation among creators underscored the campaign's organic appeal.
            </p>
          </div>

          {/* Results Stats - Green Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">59M</div>
              <div className="text-sm font-semibold uppercase">TOTAL REACH</div>
            </div>
            <div className="bg-zinc-800 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">1.5M</div>
              <div className="text-sm font-semibold uppercase">ENGAGEMENTS</div>
            </div>
            <div className="bg-zinc-800 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">20+</div>
              <div className="text-sm font-semibold uppercase">CREATORS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Project Section */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        
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
            <button className="inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold btn-shimmer glow-lime" data-testid="button-lets-talk">
              LET'S TALK.
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-zinc-400" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="relative py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 uppercase text-center">
            Related Case Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCases.map((caseStudy) => (
              <Link key={caseStudy.id} href={caseStudy.link}>
                <Card className="overflow-hidden hover-lift glass-lime cursor-pointer" data-testid={`card-case-study-${caseStudy.id}`}>
                  <div className="aspect-video bg-gray-200 relative overflow-hidden image-reveal">
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
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        
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
              className="bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90 rounded-full px-8 py-6 text-base font-semibold btn-shimmer glow-lime"
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
