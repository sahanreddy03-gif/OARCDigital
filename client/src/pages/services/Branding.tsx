import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Palette, Target, Layout as LayoutIcon, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { creativeServicesSEO } from '@/data/seoMetadata';

export default function Branding() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Target,
      title: 'Brand Strategy',
      description: 'Build a strong foundation for your brand',
      items: [
        'Brand Positioning',
        'Messaging Platform',
        'Brand Architecture',
        'Competitive Analysis',
        'Target Audience Definition'
      ]
    },
    {
      icon: Palette,
      title: 'Visual Identity',
      description: 'Create distinctive visual brand systems',
      items: [
        'Logo Design',
        'Color Palettes',
        'Typography Systems',
        'Brand Guidelines',
        'Icon & Graphic Systems'
      ]
    },
    {
      icon: LayoutIcon,
      title: 'Brand Applications',
      description: 'Apply your brand across all touchpoints',
      items: [
        'Marketing Collateral',
        'Digital Assets',
        'Packaging Design',
        'Environmental Design',
        'Brand Templates'
      ]
    },
    {
      icon: Sparkles,
      title: 'Brand Experience',
      description: 'Craft memorable brand interactions',
      items: [
        'Brand Voice & Tone',
        'Customer Journey Mapping',
        'Brand Activation',
        'Employee Engagement',
        'Brand Evolution'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Strategic Brand Thinking',
      description: 'We start with strategy, ensuring your brand connects with your audience and stands out in the market.'
    },
    {
      title: 'End-to-End Execution',
      description: 'From initial concept to final delivery, we handle every aspect of your branding project.'
    },
    {
      title: 'Scalable Brand Systems',
      description: 'We create flexible brand systems that grow with your business and adapt across all channels.'
    },
    {
      title: 'Exceptional Visual Design',
      description: 'Our design team creates stand-out visual identities that make lasting impressions.'
    },
    {
      title: 'Brand Consistency',
      description: 'We ensure your brand looks and feels cohesive across every customer touchpoint.'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.branding.title}
        description={creativeServicesSEO.branding.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.branding.path}`}
        ogType={creativeServicesSEO.branding.ogType}
      />
      {/* Hero Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8" data-testid="heading-branding">
            Branding
          </h1>

          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            Reimagine your brand and create exceptional visual identities
          </h2>

          <p className="text-base text-gray-700 mb-4">
            We help businesses build powerful brands that resonate with their audiences and drive growth.
          </p>

          <p className="text-base text-gray-700 mb-6">
            From brand strategy to visual execution, we create comprehensive branding solutions that stand out in the market.
          </p>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-lets-chat-hero"
            >
              Let's Chat
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Our <span className="text-[#5FD4C4]">Branding</span> Services
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Comprehensive branding solutions tailored to your business needs
          </p>

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentService ? 'w-8 bg-[#5FD4C4]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-service-${idx}`}
              />
            ))}
          </div>

          {/* Grid of 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[0, 1, 2].map((offset) => {
              const actualIdx = (currentService + offset) % services.length;
              const service = services[actualIdx];
              const Icon = service.icon;
              
              return (
                <div key={actualIdx} className="bg-white border-2 border-gray-100 rounded-3xl p-8" data-testid={`card-service-${actualIdx}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    {offset === 2 && (
                      <button
                        onClick={nextService}
                        className="w-11 h-11 bg-black rounded-full flex items-center justify-center hover-elevate"
                        data-testid="button-next-service"
                      >
                        <ArrowRight className="h-4 w-4 text-white" />
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-black mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-700 mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Section - Antler */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            How we've used Branding to transform businesses
          </h2>

          <Link href="/our-work">
            <button className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2 mb-8" data-testid="button-view-all-case-studies">
              View All Case Studies
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>

          {/* Antler Case Study Featured Card */}
          <Link href="/case-studies/antler">
            <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-3xl overflow-hidden h-[500px] hover-elevate active-elevate-2 cursor-pointer" data-testid="card-case-study-antler">
              <img
                src="https://cdn.sanity.io/images/k0dlbavy/production/dda9d1a51593d1b1b3d410306649a91439b84a4b-3200x1800.png?auto=format&fit=max&q=100&w=1600"
                alt="Antler Brand Reimagining"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <div className="flex gap-3 mb-4 flex-wrap">
                  <span className="px-4 py-2 bg-[#5FD4C4] backdrop-blur-sm rounded-full text-sm font-semibold text-black">
                    Branding
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    Venture Capital
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    Visual Identity
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-2">Antler</h3>
                <p className="text-lg text-gray-200 mb-4">
                  Reimagining the brand for the investor backing the world's most driven founders.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div>
                    <div className="text-3xl font-black text-[#5FD4C4]">2022</div>
                    <div className="text-sm text-gray-300">Year</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-[#5FD4C4]">Complete Rebrand</div>
                    <div className="text-sm text-gray-300">Scope</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            Why Choose <span className="text-[#5FD4C4]">OARC Digital</span> for Branding?
          </h2>

          <div className="space-y-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="border-l-4 border-[#5FD4C4] pl-6" data-testid={`benefit-${idx}`}>
                <h3 className="text-xl font-black text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Ready to Transform Your Brand?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's create a brand identity that resonates with your audience and drives your business forward.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-3 bg-white text-black rounded-full pl-10 pr-4 py-4 text-lg font-semibold hover-elevate active-elevate-2" data-testid="button-get-started">
              Get Started
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
