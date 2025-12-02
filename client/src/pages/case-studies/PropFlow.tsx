import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { ArrowRight, Globe, Smartphone, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';

import designWorkspaceImg from '@assets/stock_images/creative_team_workin_79883382.jpg';
import tefalHeroImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import bodyShopHeroImg from '@assets/The-Body-Shop-Social-Marketing-Agency_1761842288034.jpg';
import dontMakeAdsHeroImg from '@assets/generated_images/social_media_creators_marketing_image.png';

export default function PropFlowCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCases = [
    {
      id: 'homecraft-innovations',
      title: 'HomeCraft Innovations',
      subtitle: 'Strategic e-commerce campaigns driving complete inventory sellout.',
      image: tefalHeroImg,
      link: '/case-studies/homecraft-innovations'
    },
    {
      id: 'authentic-stories',
      title: 'Authentic Stories',
      subtitle: 'Genuine content approach generating millions of organic engagements.',
      image: dontMakeAdsHeroImg,
      link: '/case-studies/authentic-stories'
    },
    {
      id: 'naturalcare-beauty',
      title: 'NaturalCare Beauty',
      subtitle: 'Community-driven beauty brand activation across social platforms.',
      image: bodyShopHeroImg,
      link: '/case-studies/naturalcare-beauty'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="PropFlow Case Study | Property Marketplace Platform | OARC Digital"
        description="How OARC Digital designed and developed a streamlined property marketplace platform that simplified real estate transactions for buyers and sellers."
        canonicalUrl="https://oarcdigital.com/case-studies/propflow-property-platform"
        ogType="article"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden" data-testid="section-hero">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c4ff4d]/15 rounded-full blur-3xl"></div>
        <img 
          src={designWorkspaceImg}
          alt="PropFlow property marketplace platform case study - creative team collaborating on real estate technology solution"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-wider font-bold text-[#c4ff4d] mb-4" data-testid="text-eyebrow">Case Study</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" data-testid="heading-case-study-title">
            How we streamlined property transactions for a growing marketplace
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" data-testid="text-hero-description">
            A comprehensive digital platform that connected property buyers and sellers through transparent data and intuitive design.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 bg-white" data-testid="section-overview">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider" data-testid="text-section-label">Overview</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8" data-testid="heading-overview">
            Making property transactions accessible and transparent
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed" data-testid="text-overview-1">
            The property market has long been plagued by information asymmetry. Sellers navigate complex listing requirements while buyers struggle to access comprehensive property data. Our client approached us with a vision to bridge this gap through technology.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed" data-testid="text-overview-2">
            We partnered with them over an 8-month engagement to design and build a responsive web platform that automated property data collection, provided neighborhood insights, and created a transparent marketplace for both parties. Following successful market validation and Series A funding in late 2022, the platform and technology were acquired by a larger European property technology group in Q3 2023.
          </p>

          {/* Platforms & Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold text-black mb-6">Platforms</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-black" />
                  <span className="text-gray-800 font-medium">Responsive Web</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-black" />
                  <span className="text-gray-800 font-medium">Mobile-Optimized</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-black mb-6">Deliverables</h4>
              <ul className="space-y-3 text-gray-800">
                <li className="font-medium">User Research & Strategy</li>
                <li className="font-medium">UX/UI Design</li>
                <li className="font-medium">Design System</li>
                <li className="font-medium">Full-Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-surface-lime relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-gray-600 uppercase mb-8 tracking-wider text-center">Results After Launch</p>
          <div className="grid md:grid-cols-4 gap-6 relative overflow-hidden">
            <div className="bg-[#c4ff4d] p-6 text-center text-black stat-glow rounded-2xl">
              <div className="text-4xl font-black mb-2 text-white">68%</div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">Faster Listing Time</div>
            </div>
            <div className="bg-[#c4ff4d] p-6 text-center text-black stat-glow rounded-2xl">
              <div className="text-4xl font-black mb-2 text-white">3.2x</div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">User Engagement</div>
            </div>
            <div className="bg-[#c4ff4d] p-6 text-center text-black stat-glow rounded-2xl">
              <div className="text-4xl font-black mb-2 text-white">47%</div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">Conversion Lift</div>
            </div>
            <div className="bg-[#c4ff4d] p-6 text-center text-black stat-glow rounded-2xl">
              <div className="text-4xl font-black mb-2 text-white">89%</div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Challenge</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            Simplifying a traditionally complex process
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Property transactions involve multiple stakeholders, extensive documentation, and significant financial decisions. Our client wanted to reduce friction at every touchpoint—from initial listing to final transaction.
          </p>

          <div className="space-y-4 mb-8">
            {[
              'Sellers faced lengthy paperwork and unclear listing requirements',
              'Buyers lacked access to comprehensive neighborhood data',
              'Transaction timelines were unpredictable and stressful',
              'Communication between parties was fragmented'
            ].map((challenge, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#c4ff4d] flex-shrink-0 mt-1" />
                <span className="text-gray-700">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-surface-lime relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-600 uppercase mb-4 tracking-wider">Our Approach</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            Research-driven design with iterative development
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Discovery & Research</h3>
              <p className="text-gray-700 leading-relaxed">
                We began with extensive user research, conducting interviews with property buyers, sellers, and real estate professionals. This helped us understand pain points and opportunities that weren't immediately obvious. We mapped the entire user journey from initial search to completed transaction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-3">Design System Development</h3>
              <p className="text-gray-700 leading-relaxed">
                We built a comprehensive component library that ensured consistency across the platform. Starting with foundational elements—typography, color, spacing—we progressively created more complex interface components. This modular approach allowed for rapid iteration during development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-3">Iterative Prototyping</h3>
              <p className="text-gray-700 leading-relaxed">
                Before writing production code, we tested multiple interaction patterns through low-fidelity wireframes. Key flows like property search, bidding interfaces, and document management went through several rounds of user testing to validate our assumptions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-3">Full-Stack Development</h3>
              <p className="text-gray-700 leading-relaxed">
                We integrated with property data APIs to automate listing information, built real-time notification systems, and developed a secure document management workflow. The platform featured dynamic data visualization for neighborhood insights including demographics, amenities, and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Outcome</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            A platform that delivered measurable results
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The platform launched successfully and quickly gained traction in its target market. User feedback highlighted the intuitive interface and the value of consolidated property information. The streamlined listing process reduced time-to-market for sellers, while buyers appreciated the transparent data presentation.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed" data-testid="text-outcome-2">
            Following strong market performance and positive user metrics, the solution attracted acquisition interest from established property technology companies. In Q3 2023, the platform was acquired by a European proptech group, with our design system and technical architecture serving as the foundation for their expanded residential marketplace. The founding team transitioned to advisory roles during the integration period.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6" data-testid="testimonial-block">
            <p className="text-gray-600 italic" data-testid="text-testimonial">
              "The team delivered exactly what we envisioned—a clean, functional platform that our users actually enjoyed using. The acquisition validated our approach and their execution."
            </p>
            <p className="text-sm font-bold text-gray-800 mt-4" data-testid="text-testimonial-author">— Founding Team</p>
          </div>
        </div>
      </section>

      {/* Start Project Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Build Something Similar?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're launching a marketplace, optimizing an existing platform, or exploring digital transformation—we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="group btn-shimmer glow-lime" data-testid="button-contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-4 bg-surface-lime relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-gray-600 uppercase mb-2 tracking-wider text-center">More Work</p>
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12 text-black">
            Explore related projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedCases.map((caseStudy) => (
              <Link key={caseStudy.id} href={caseStudy.link}>
                <Card className="overflow-hidden hover-lift glass-lime cursor-pointer h-full" data-testid={`card-case-study-${caseStudy.id}`}>
                  <div className="relative h-48 overflow-hidden image-reveal">
                    <img
                      src={caseStudy.image}
                      alt={`${caseStudy.title} case study thumbnail - OARC Digital portfolio`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      data-testid={`img-case-study-${caseStudy.id}`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">Case Study</p>
                    <h3 className="text-lg font-black text-black mb-2">{caseStudy.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{caseStudy.subtitle}</p>
                    <div className="flex items-center text-[#4a7000] font-bold text-sm">
                      <span>View Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
