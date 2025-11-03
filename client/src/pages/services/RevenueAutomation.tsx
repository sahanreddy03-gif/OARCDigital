import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import heroImg from '@assets/stock_images/business_automation__26134094.jpg';
import automationImg1 from '@assets/stock_images/business_automation__3ddf701d.jpg';
import automationImg2 from '@assets/stock_images/revenue_growth_data__682db86c.jpg';

export default function RevenueAutomation() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    document.title = "Revenue Automation - Maximize Profitability with AI | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Automate revenue operations end-to-end. From lead generation to billing, we build custom automation systems that save tens of thousands while increasing delivery speed 10x.");
    }
  }, []);

  const services = [
    {
      icon: DollarSign,
      title: 'Sales Automation',
      description: 'Streamline your entire sales process',
      items: [
        'Automated Lead Outreach',
        'CRM Auto-Updates',
        'Multi-Channel Engagement',
        'Smart Lead Scoring',
        'Pipeline Management'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Operations',
      description: 'End-to-end revenue workflow automation',
      items: [
        'Proposal Generation',
        'Contract Automation',
        'Invoice Processing',
        'Payment Tracking',
        'Revenue Reporting'
      ]
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'Eliminate manual tasks across operations',
      items: [
        'Data Entry Automation',
        'Document Processing',
        'Workflow Orchestration',
        'Email & Communication',
        'Report Generation'
      ]
    },
    {
      icon: Clock,
      title: 'Integration & Sync',
      description: 'Connect all your business systems',
      items: [
        'QuickBooks Integration',
        'CRM Synchronization',
        'API Connections',
        'Database Management',
        'Real-Time Data Sync'
      ]
    }
  ];

  const benefits = [
    {
      title: '10x Faster Operations',
      description: 'Reduce process time from hours to minutes with intelligent automation that handles repetitive tasks at machine speed.'
    },
    {
      title: 'Massive Cost Savings',
      description: 'Save tens of thousands annually by eliminating manual labor and reducing errors that cost your business money.'
    },
    {
      title: 'Scale Without Hiring',
      description: 'Double your workload capacity without adding headcount. One client doubled their client work without hiring another accountant.'
    },
    {
      title: 'Eliminate Human Error',
      description: 'Remove costly mistakes from data entry, invoicing, and document processing with automated validation and checks.'
    },
    {
      title: 'Instant Client Onboarding',
      description: 'Reduce client onboarding from hours to seconds with automated workflows that collect information, generate documents, and set up systems.'
    }
  ];

  const caseStudies = [
    {
      title: 'How Cleverly Achieved 10x Delivery Speed',
      industry: 'Lead Generation',
      description: 'Saved tens of thousands with automated workflows enabling 200+ accounts per manager.',
      image: automationImg1,
      slug: 'cleverly-automation'
    },
    {
      title: 'Accounting Firm Doubles Revenue',
      industry: 'Professional Services',
      description: 'Doubled client work without hiring using automated proposal generation and billing.',
      image: automationImg2,
      slug: 'accounting-automation'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Business automation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-white" data-testid="decorative-line-1"></div>
              <div className="w-6 h-0.5 bg-white" data-testid="decorative-line-2"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-revenue-automation">
              Revenue Automation
            </h1>

            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
              Automate your revenue operations from lead to payment
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-3xl">
              Save tens of thousands annually while increasing delivery speed 10x. From sales outreach to invoicing, we build custom automation systems that eliminate manual work and scale your business without hiring.
            </p>

            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                data-testid="button-automate-revenue"
              >
                Automate Your Revenue
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Revenue Automation <span className="text-[#5FD4C4]">Services</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Comprehensive automation for every revenue-generating function
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
                        <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
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

      {/* Featured Case Studies Section */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Client <span className="text-[#5FD4C4]">Success Stories</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Real businesses saving tens of thousands with automation
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

      {/* Benefits Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Why Choose <span className="text-[#5FD4C4]">OARC Digital</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Proven results that transform business operations
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

      {/* ROI Highlight */}
      <section className="py-16 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            Typical Client Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black text-[#5FD4C4] mb-3">10x</div>
              <p className="text-base text-zinc-300">Faster Delivery Speed</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#5FD4C4] mb-3">$50K+</div>
              <p className="text-base text-zinc-300">Annual Cost Savings</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#5FD4C4] mb-3">90%</div>
              <p className="text-base text-zinc-300">Time Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready to Automate Your Revenue?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Save tens of thousands while increasing your operational efficiency 10x.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-start-automating"
            >
              Start Automating
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Let's discuss how revenue automation can transform your business operations.
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
