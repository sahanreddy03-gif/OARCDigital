import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImg from '@assets/stock_images/automation_technolog_5cf55af1.jpg';
import automationImg1 from '@assets/stock_images/business_revenue_gro_a5fe035c.jpg';
import automationImg2 from '@assets/stock_images/automation_technolog_fc043d68.jpg';
import dashboardImg from '@assets/stock_images/financial_dashboard__226af471.jpg';
import salesTeamImg from '@assets/stock_images/business_meeting_pre_11a921f2.jpg';
import financialOpsImg from '@assets/stock_images/financial_dashboard__7725b2d7.jpg';

export default function RevenueAutomation() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      title: 'Digital Finance Solutions: 1,300% ROI Through Banking Automation',
      industry: 'Banking & Finance',
      description: 'Saving 127,000+ branch hours and generating $7M in new revenue for 14 million customers.',
      image: automationImg1,
      slug: 'digital-finance-solutions'
    },
    {
      title: 'Global Supply Systems: $1M+ Annual Savings Through Supply Chain Automation',
      industry: 'Food & Agriculture',
      description: '210 intelligent automations saving 125,000 hours across global food operations.',
      image: automationImg2,
      slug: 'global-supply-systems'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.revenueAutomation.title}
        description={revenueServicesSEO.revenueAutomation.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.revenueAutomation.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Revenue Automation Services",
          revenueServicesSEO.revenueAutomation.description,
          "AI-Powered Revenue Operations"
        )}
        schemaId="service-revenue-automation"
      />
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
            <div className="mb-6"></div>
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

      {/* Section 1: Image Left + Text Right */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dashboardImg} 
                alt="Business automation dashboard with analytics"
                className="w-full rounded-3xl h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Automate everything from lead to cash
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Stop losing time and money to manual processes. We build intelligent automation systems that handle everything—from first contact to final payment. Imagine your CRM updating itself, proposals generating automatically, and invoices sending on schedule without human intervention.
              </p>
              <p className="text-base text-gray-700 mb-8">
                Our clients save tens of thousands annually while delivering work 10x faster. One accounting firm doubled their client load without hiring a single new accountant. That's the power of end-to-end revenue automation.
              </p>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-see-automation"
                >
                  See What's Possible
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>
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

      {/* Section 2: Text Left + Image Right */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Scale revenue without scaling headcount
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Every business hits a ceiling where more clients means more people. Not anymore. Our automation systems handle the repetitive work—data entry, follow-ups, document generation, invoicing—freeing your team to focus on strategic, revenue-generating activities.
              </p>
              <p className="text-base text-gray-700 mb-8">
                The result? Clients close faster, onboarding happens in seconds instead of hours, and your team celebrates wins instead of drowning in admin work. Scale your revenue 2x, 3x, even 5x without the overhead.
              </p>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-start-automating"
                >
                  Start Automating
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>
            <div>
              <img 
                src={salesTeamImg} 
                alt="Sales team celebrating success"
                className="w-full rounded-3xl h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Who <span className="text-[#5FD4C4]">Benefits Most</span>
          </h2>
          <p className="text-base text-gray-700 mb-8">
            Revenue automation transforms operations across industries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-accounting">
              <h3 className="text-xl font-bold text-black mb-4">Accounting & Bookkeeping Firms</h3>
              <p className="text-sm text-gray-600 mb-4">
                Handle more clients without hiring. Automate client onboarding, data collection, and reporting workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Automated client onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>QuickBooks integration & sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Report generation at scale</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-saas">
              <h3 className="text-xl font-bold text-black mb-4">SaaS & Software Companies</h3>
              <p className="text-sm text-gray-600 mb-4">
                Accelerate sales cycles with automated proposal generation, CRM updates, and customer onboarding.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Lead scoring & qualification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Proposal automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Contract & onboarding flows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-professional">
              <h3 className="text-xl font-bold text-black mb-4">Professional Services</h3>
              <p className="text-sm text-gray-600 mb-4">
                Legal, consulting, and advisory firms using automation to streamline billing, document generation, and client management.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Time tracking & invoicing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Document automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Client communication workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-agencies">
              <h3 className="text-xl font-bold text-black mb-4">Marketing & Creative Agencies</h3>
              <p className="text-sm text-gray-600 mb-4">
                Manage multiple clients efficiently with automated reporting, billing, and project workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Client reporting automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Recurring billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Project management integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold text-black mb-4">E-commerce & Retail</h3>
              <p className="text-sm text-gray-600 mb-4">
                Scale order processing, inventory management, and customer communications without adding staff.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Order processing automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Inventory sync & alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Customer email workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100" data-testid="use-case-realestate">
              <h3 className="text-xl font-bold text-black mb-4">Real Estate & Property Management</h3>
              <p className="text-sm text-gray-600 mb-4">
                Automate lead follow-up, tenant communications, and property management workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Lead nurturing sequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Lease generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
                  <span>Tenant communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-14 px-4 bg-white">
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

      {/* Section 3: Image Left + Text Right */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={financialOpsImg} 
                alt="Financial operations and business workflow"
                className="w-full rounded-3xl h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Eliminate costly errors and delays
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Manual processes create mistakes. Invoicing errors, missed follow-ups, data entry typos, delayed proposals—each one costs you money and credibility. Our automation systems remove human error from the equation with built-in validation and checks.
              </p>
              <p className="text-base text-gray-700 mb-8">
                From QuickBooks integration to CRM synchronization, we connect all your business systems so data flows perfectly. No more double-entry. No more version conflicts. Just clean, accurate data driving your revenue operations forward.
              </p>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-get-started"
                >
                  Get Started Today
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services / Internal CTAs */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Maximize Your <span className="text-[#5FD4C4]">Automation Impact</span>
          </h2>
          <p className="text-base text-gray-700 mb-8">
            Combine revenue automation with these complementary services for end-to-end business transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/ai-consulting">
              <div className="group bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-[#5FD4C4] transition-all hover-elevate cursor-pointer" data-testid="related-service-ai">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-[#ea580c] transition-colors">AI Consulting</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Layer AI capabilities on top of your automated workflows to make smarter decisions and predict customer needs.
                </p>
                <div className="text-sm text-[#ea580c] font-semibold">Explore AI Solutions →</div>
              </div>
            </Link>

            <Link href="/services/hire-ai-employees">
              <div className="group bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-[#5FD4C4] transition-all hover-elevate cursor-pointer" data-testid="related-service-hire">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-[#ea580c] transition-colors">Hire AI Employees</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Scale beyond automation with AI employees that handle customer service, data analysis, and complex workflows.
                </p>
                <div className="text-sm text-[#ea580c] font-semibold">Meet AI Employees →</div>
              </div>
            </Link>

            <Link href="/services/web-design">
              <div className="group bg-zinc-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-[#5FD4C4] transition-all hover-elevate cursor-pointer" data-testid="related-service-web">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-[#ea580c] transition-colors">Web Design</h3>
                  <ArrowRight className="h-5 w-5 text-[#5FD4C4] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Build automated workflows into high-converting websites that turn visitors into qualified leads automatically.
                </p>
                <div className="text-sm text-[#ea580c] font-semibold">View Web Design →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 px-4 bg-zinc-50">
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
