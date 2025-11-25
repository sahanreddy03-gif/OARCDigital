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
import dontMakeAdsHeroImg from '@assets/generated_images/social_media_creators_marketing_image.png';
import bodyShopHeroImg from '@assets/The-Body-Shop-Social-Marketing-Agency_1761842288034.jpg';
import fitnessImg1 from '@assets/stock_images/fitness_gym_workout__500a23f2.jpg';
import fitnessImg2 from '@assets/stock_images/fitness_gym_workout__6cda6782.jpg';
import fitnessImg3 from '@assets/stock_images/fitness_gym_workout__509badd9.jpg';
import contentImg1 from '@assets/stock_images/fitness_gym_workout__43cec023.jpg';
import contentImg2 from '@assets/stock_images/fitness_gym_workout__7fbcce24.jpg';
import contentImg3 from '@assets/stock_images/fitness_gym_workout__a4da8115.jpg';
import contentImg4 from '@assets/stock_images/fitness_gym_workout__d7caa1f0.jpg';
import contentImg5 from '@assets/stock_images/gym_personal_trainin_fb56e04c.jpg';
import contentImg6 from '@assets/stock_images/gym_personal_trainin_219a3467.jpg';
import contentImg7 from '@assets/stock_images/gym_personal_trainin_17a601d1.jpg';
import contentImg8 from '@assets/stock_images/gym_personal_trainin_fa5f5bec.jpg';

export default function GymGroupCaseStudy() {
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
    },
    {
      id: 'naturalcare-beauty',
      title: 'NaturalCare Beauty',
      subtitle: 'Celebrating authenticity and natural beauty with TikTok.',
      image: bodyShopHeroImg,
      link: '/case-studies/naturalcare-beauty'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.fitnessProNetwork.title}
        description={caseStudiesSEO.fitnessProNetwork.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.fitnessProNetwork.path}`}
        ogType={caseStudiesSEO.fitnessProNetwork.ogType}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${fitnessImg1})`
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4" data-testid="heading-case-study-title">
            Redefining fitness accessibility through social engagement.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">About</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Strategic campaign making fitness accessible to all demographics.
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            When peak season arrives and competition for viewer attention reaches its highest, we positioned FitnessPro Network as the undeniable choice on TikTok.
          </p>

          <h3 className="text-2xl font-bold text-black mb-8">
            Shattered conventional gym marketing by launching a youth-focused creative initiative that resonates authentically.
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
          <div className="bg-[#c4ff4d] p-8 text-center text-black">
            <div className="text-5xl font-black mb-2">1M</div>
            <div className="text-sm uppercase tracking-wider font-bold">Clicks</div>
          </div>
          <div className="bg-[#c4ff4d] p-8 text-center text-black">
            <div className="text-5xl font-black mb-2">15M</div>
            <div className="text-sm uppercase tracking-wider font-bold">Views</div>
          </div>
          <div className="bg-[#c4ff4d] p-8 text-center text-black">
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
            Helping FitnessPro Network Rise Above January Fitness Noise.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            During the New Year resolution season, we orchestrated a targeted campaign designed to capture attention amidst the noise of countless fitness competitors on TikTok. As millions commit to fitness goals, the demand for gym solutions hits unprecedented levels across all social channels.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission was clear: position FitnessPro Network as the obvious selection for individuals pursuing their fitness objectives while establishing maximum visibility across the TikTok ecosystem. We emphasized their status as the UK's most cost-effective, round-the-clock fitness facility.
          </p>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Strategy</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            TikTok & FitnessPro Network - Top-View Ad Unites, Inspires, and Redefines Fitness Perceptions.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            While competitors focused exclusively on gym enthusiasts, we strategically targeted audiences still considering fitness participation for the first time.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our creative approach centered on psychological barriers to gym participation—intimidation, cost concerns, time limitations—delivered through TikTok's community-oriented platform, which values authenticity and peer-to-peer recommendations.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We built a narrative celebrating fitness across all backgrounds and commitment levels, dismantling misconceptions and showing gym membership as accessible regardless of experience.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            In parallel, we engaged 500+ micro-creators to generate user-aligned content that extended campaign reach organically. The combined effort delivered 59M+ impressions across the TikTok ecosystem.
          </p>

          {/* Strategy Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <img
              src={fitnessImg2}
              alt="FitnessPro Network Strategy Image 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-strategy-1"
            />
            <img
              src={fitnessImg3}
              alt="FitnessPro Network Strategy Image 2"
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
            The outcomes exceeded all expectations, establishing a new benchmark for fitness marketing success. With 1 million click-throughs, we demonstrated content resonance at scale. The 15 million view count reflected genuine cross-demographic appeal and TikTok algorithmic favor.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            The 500K interaction count—spanning saves, shares, and direct engagement—validated our hypothesis about audience receptiveness. These metrics prove that strategic messaging in mainstream channels drives real participation growth. Through innovative paid placements, we catalyzed a cultural shift in fitness brand perception, making gym membership feel attainable and desirable.
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
              src={contentImg1}
              alt="FitnessPro Network Campaign Content"
              className="w-full h-48 object-cover rounded-lg"
              data-testid="img-result-1"
            />
            <img
              src={contentImg2}
              alt="FitnessPro Network Campaign Content"
              className="w-full h-48 object-cover rounded-lg"
              data-testid="img-result-2"
            />
            <img
              src={contentImg3}
              alt="FitnessPro Network Campaign Content"
              className="w-full h-48 object-cover rounded-lg"
              data-testid="img-result-3"
            />
            <img
              src={contentImg4}
              alt="FitnessPro Network Campaign Content"
              className="w-full h-48 object-cover rounded-lg"
              data-testid="img-result-4"
            />
            <img
              src={contentImg5}
              alt="FitnessPro Network Campaign Content"
              className="w-full h-48 object-cover rounded-lg"
              data-testid="img-result-5"
            />
            <img
              src={contentImg6}
              alt="FitnessPro Network Campaign Content"
              className="w-full h-48 object-cover rounded-lg"
              data-testid="img-result-6"
            />
            <img
              src={contentImg7}
              alt="FitnessPro Network Campaign Content"
              className="w-full h-48 object-cover rounded-lg"
              data-testid="img-result-7"
            />
            <img
              src={contentImg8}
              alt="FitnessPro Network Campaign Content"
              className="w-full h-48 object-cover rounded-lg"
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
                    <div className="flex items-center text-[#4a7000] font-bold text-sm">
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
