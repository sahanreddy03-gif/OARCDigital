import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Cpu, Target, Lightbulb, BarChart3 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import consultingImg1 from '@assets/stock_images/business_consulting__b093a06a.jpg';
import consultingImg2 from '@assets/stock_images/business_consulting__4b14a0ea.jpg';
import consultingImg3 from '@assets/stock_images/business_consulting__c7f465ad.jpg';
import aiConsultingBanner from '@assets/ai consulting_1763087215182.avif';

export default function AIConsulting() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Target,
      title: 'AI Strategy & Roadmap',
      description: 'Build a foundation for AI success',
      items: [
        'AI Readiness Assessment',
        'Strategic AI Roadmap',
        'Use Case Identification',
        'ROI Planning',
        'Change Management Strategy'
      ]
    },
    {
      icon: Cpu,
      title: 'AI Implementation',
      description: 'Deploy AI solutions that drive results',
      items: [
        'Custom AI Solutions',
        'Tool Selection & Integration',
        'Workflow Optimization',
        'Process Automation',
        'Quality Assurance'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Team Enablement',
      description: 'Empower your team with AI skills',
      items: [
        'AI Training Programs',
        'Hands-on Workshops',
        'Best Practice Guides',
        'Prompt Engineering',
        'Continuous Learning'
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance & Scale',
      description: 'Measure impact and optimize',
      items: [
        'KPI Development',
        'Impact Measurement',
        'Efficiency Tracking',
        'Continuous Improvement',
        'Scale Planning'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Hands-On Expertise',
      description: 'Our consultants deliver measurable business impact with deep AI experience across marketing and creative operations.'
    },
    {
      title: 'Real-World Results',
      description: 'We focus on capturing actual value, not just experimentation. Our clients see measurable efficiency gains and cost savings.'
    },
    {
      title: 'Organizational Readiness',
      description: 'We prepare your entire organization for AI adoption, from leadership alignment to team enablement.'
    },
    {
      title: 'Custom Solutions',
      description: 'Every business is unique. We design AI solutions tailored to your specific workflows and challenges.'
    },
    {
      title: 'Future-Proof Strategy',
      description: 'We enable your team for the AI-powered future with sustainable strategies and continuous innovation.'
    }
  ];

  const caseStudies = [
    {
      title: 'How CloudBase Technologies Scaled AI Adoption',
      industry: 'Software',
      description: 'Creating a solid foundation for responsible AI use in creative teams with measurable impact.',
      image: consultingImg1,
      slug: 'cloudbase-technologies'
    },
    {
      title: 'How a Fortune 500 Doubled AI Adoption',
      industry: 'SaaS',
      description: 'Strategic AI rollout and training program that doubled adoption rates across the organization.',
      image: consultingImg2,
      slug: 'fortune-500-ai-adoption'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.aiConsulting.title}
        description={revenueServicesSEO.aiConsulting.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.aiConsulting.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "AI Consulting Services",
          revenueServicesSEO.aiConsulting.description,
          "AI Strategy & Implementation"
        )}
        schemaId="service-ai-consulting"
      />
      {/* Hero Section - Subtle background with clean overlay */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aiConsultingBanner}
            alt="AI Consulting"
            className="w-full h-full object-cover"
          />
          {/* Light overlay to maintain clean aesthetic and readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-4"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8" data-testid="heading-ai-consulting">
            AI Consulting
          </h1>

          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            Bring your marketing creative operations into the age of <span className="text-[#5FD4C4]">AI</span>
          </h2>

          <p className="text-base text-gray-800 mb-4">
            Global brands trust OARC Digital as the hands-on expert to help scale and succeed with generative AI.
          </p>

          <p className="text-base text-gray-800 mb-6">
            Many experiment with AI, few capture real value. Our consultants deliver measurable business impact and enable organizational readiness for the future.
          </p>

          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-book-demo"
            >
              Book a Demo
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
            Our <span className="text-[#5FD4C4]">AI Consulting</span> Services
          </h2>

          <p className="text-base text-gray-700 mb-8">
            End-to-end AI transformation for marketing and creative teams
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
                        className="text-gray-400 hover:text-black transition-colors"
                        data-testid="button-next-service"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Who <span className="text-[#5FD4C4]">We Serve</span>
          </h2>
          <p className="text-base text-gray-700 mb-8">
            AI consulting designed for forward-thinking organizations ready to lead with AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-marketing">
              <h3 className="text-xl font-bold text-black mb-4">Marketing & Creative Teams</h3>
              <p className="text-sm text-gray-600 mb-4">
                Transform content production, campaign management, and creative workflows with AI-powered tools and processes.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>AI-powered content generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Campaign optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Creative workflow automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-saas">
              <h3 className="text-xl font-bold text-black mb-4">SaaS & Technology Companies</h3>
              <p className="text-sm text-gray-600 mb-4">
                Integrate AI into product development, customer success, and go-to-market operations for competitive advantage.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Product AI integration strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Customer success automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>GTM efficiency improvements</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-enterprise">
              <h3 className="text-xl font-bold text-black mb-4">Enterprise Organizations</h3>
              <p className="text-sm text-gray-600 mb-4">
                Scale AI adoption across departments with enterprise-ready strategies, governance, and change management.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Enterprise AI roadmaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Governance & compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Cross-department rollout</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-agencies">
              <h3 className="text-xl font-bold text-black mb-4">Agencies & Consultancies</h3>
              <p className="text-sm text-gray-600 mb-4">
                Deliver more value to clients with AI-enhanced services while improving internal efficiency and margins.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>AI-powered client deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Internal efficiency gains</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>New AI service offerings</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold text-black mb-4">E-commerce & Retail</h3>
              <p className="text-sm text-gray-600 mb-4">
                Personalize customer experiences, optimize inventory, and automate merchandising with AI.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Personalization engines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Inventory optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Automated merchandising</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-professional">
              <h3 className="text-xl font-bold text-black mb-4">Professional Services</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enhance client work quality, accelerate research, and improve knowledge management with AI tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Research & analysis automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Document intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Knowledge management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Making AI <span className="text-[#5FD4C4]">Work For You</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Real results from companies that partnered with OARC Digital
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <Link key={idx} href={`/case-studies/${study.slug}`}>
                <div className="group bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-[#5FD4C4] transition-all hover-elevate cursor-pointer" data-testid={`card-case-study-${study.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[#5FD4C4] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                      {study.industry}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#ea580c] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#ea580c] font-semibold text-sm">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services / Internal CTAs */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Complete Your <span className="text-[#5FD4C4]">AI Transformation</span>
          </h2>
          <p className="text-base text-gray-700 mb-8">
            Combine AI consulting with these services for end-to-end business transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/hire-ai-employees">
              <div className="group bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-[#5FD4C4] transition-all hover-elevate cursor-pointer" data-testid="related-service-hire">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-[#ea580c] transition-colors">Hire AI Employees</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  After establishing your AI strategy, deploy AI employees to handle customer service, sales, and operations at scale.
                </p>
                <div className="text-sm text-[#ea580c] font-semibold">Explore AI Employees →</div>
              </div>
            </Link>

            <Link href="/services/revenue-automation">
              <div className="group bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-[#5FD4C4] transition-all hover-elevate cursor-pointer" data-testid="related-service-automation">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-[#ea580c] transition-colors">Revenue Automation</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Implement AI-powered automation across your revenue operations from lead generation to invoicing.
                </p>
                <div className="text-sm text-[#ea580c] font-semibold">View Automation Services →</div>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="group bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-[#5FD4C4] transition-all hover-elevate cursor-pointer" data-testid="related-service-paid">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-[#ea580c] transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Use AI insights to optimize ad campaigns and drive targeted traffic with data-driven creative strategies.
                </p>
                <div className="text-sm text-[#ea580c] font-semibold">Explore Advertising →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Why <span className="text-[#5FD4C4]">OARC Digital</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Expertise that drives real business transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-2xl p-6" data-testid={`benefit-${idx}`}>
                <h3 className="text-lg font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready to Transform Your Creative Operations?
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can drive measurable impact in your organization.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-book-consultation"
            >
              Book a Consultation
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to accelerate your AI journey? Our team is here to help you unlock the full potential of AI in your creative operations.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-contact-us"
            >
              Contact Us
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
