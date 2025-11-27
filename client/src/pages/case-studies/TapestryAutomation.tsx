import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/stock_images/luxury_fashion_retai_32a7703b.jpg';
import img1 from '@assets/stock_images/luxury_fashion_retai_7a69979f.jpg';
import img2 from '@assets/stock_images/luxury_fashion_retai_855070e4.jpg';
import img3 from '@assets/stock_images/luxury_fashion_retai_b96cd116.jpg';
import img4 from '@assets/stock_images/luxury_fashion_retai_a6eca040.jpg';
import img5 from '@assets/stock_images/luxury_fashion_retai_4c037440.jpg';
import img6 from '@assets/stock_images/business_automation__26134094.jpg';
import img7 from '@assets/stock_images/revenue_growth_data__682db86c.jpg';
import img8 from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';

export default function LuxuryRetailGroupAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.heritageLuxuryGroup.title}
        description={caseStudiesSEO.heritageLuxuryGroup.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.heritageLuxuryGroup.path}`}
        ogType={caseStudiesSEO.heritageLuxuryGroup.ogType}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Luxury fashion retail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-case-study-title">
              LuxuryRetail Group: Real-Time Fashion Operations with AI Automation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Transforming luxury retail operations for Coach, Kate Spade, and Stuart Weitzman with intelligent SAP automation
            </p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Industry</h3>
              </div>
              <p className="text-lg font-bold text-black">Luxury Fashion & Retail</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Brands</h3>
              </div>
              <p className="text-lg font-bold text-black">Coach, Kate Spade, Stuart Weitzman</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Service</h3>
              </div>
              <p className="text-lg font-bold text-black">AI Automation & SAP Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            The Challenge
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            LuxuryRetail Group, the global luxury fashion powerhouse behind iconic brands Coach, Kate Spade, and Stuart Weitzman, faced a critical operational challenge. Their SAP S/4HANA migration brought powerful capabilities, but manual processes were creating bottlenecks across financial planning, cost center management, lease administration, sales reconciliation, store space management, and invoicing.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The labor-intensive workflows meant data validations and approvals took hours or days, preventing leadership from making timely strategic decisions. In the fast-paced luxury retail market where trends shift rapidly and inventory decisions are critical, waiting for end-of-day or end-of-week reports wasn't acceptable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            LuxuryRetail Group needed to free their teams from repetitive manual tasks so they could focus on what truly matters: creative design, strategic planning, and exceptional customer service that luxury brands demand.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img1} 
              alt="Luxury fashion retail operations"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src={img2} 
              alt="Fashion retail technology"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            OARC Digital deployed an enterprise-grade AI automation platform specifically designed for SAP S/4HANA environments. We implemented intelligent automation across multiple departments and processes, creating a unified digital workforce that operates 24/7 alongside human teams.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Financial Planning & Analysis Automation</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We automated end-to-end financial planning workflows, including data consolidation from multiple sources, variance analysis, budget tracking, and automated report generation. Leadership now receives real-time financial insights without waiting for manual consolidation.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Cost Center & Lease Management</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Intelligent bots automatically create and manage cost centers based on business rules, track lease agreements across hundreds of retail locations, send automated renewal reminders, and maintain compliance documentation—all without human intervention.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Sales Reconciliation & Store Space Management</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We deployed AI-powered reconciliation that automatically matches sales data across systems, identifies discrepancies, and flags exceptions for review. Store space allocation decisions now happen based on real-time performance data rather than outdated reports.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Automated Invoicing & Approvals</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Invoice processing, data validation, approval routing, and exception handling now run automatically. What previously took hours of manual work and multi-day approval cycles now completes in minutes with near-perfect accuracy.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Future-Ready AI Integration</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                LuxuryRetail Group is now testing next-generation agentic AI capabilities for customer care automation through Salesforce integration, as well as generative AI for predictive analytics—positioning them at the forefront of retail innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <img 
            src={img3} 
            alt="Fashion retail innovation"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            The Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#4a7000] mb-3">
                Real-Time
              </div>
              <p className="text-sm text-white">
                Data Validations & Approvals
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#4a7000] mb-3">
                Multi-Brand
              </div>
              <p className="text-sm text-white">
                SAP Automation Platform
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#4a7000] mb-3">
                AI25 Award
              </div>
              <p className="text-sm text-white">
                2024 Winner Recognition
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 border-l-4 border-[#5FD4C4] p-8 rounded-r-2xl">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "OARC Digital transformed our operations across all three luxury brands. What used to take hours or days now happens close to real-time. Our teams are freed up to focus on creativity, strategy, and delivering the exceptional customer experiences our brands are known for."
            </p>
            <p className="text-base font-bold text-black">
              Operations Director, LuxuryRetail Group
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid 2 */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <img 
              src={img4} 
              alt="Luxury retail experience"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img5} 
              alt="Fashion technology"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img6} 
              alt="Business automation"
              className="w-full h-56 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Business Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The transformation extended far beyond time savings—it fundamentally changed how LuxuryRetail Group operates across its luxury portfolio:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Strategic agility:</strong> Leadership makes decisions based on real-time data instead of waiting for end-of-period reports
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Team transformation:</strong> Finance and operations staff redirected from manual data entry to strategic analysis and customer service
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Multi-brand scalability:</strong> Single automation platform serves Coach, Kate Spade, and Stuart Weitzman with brand-specific configurations
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Innovation pipeline:</strong> Foundation in place for advanced AI capabilities including agentic automation and generative AI
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Industry recognition:</strong> Won prestigious 2024 AI25 Award for automation excellence
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Final Images */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img7} 
              alt="Revenue growth analytics"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <img 
              src={img8} 
              alt="Team collaboration"
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Transform Your Operations with AI Automation
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Like LuxuryRetail Group, automate manual processes and empower your teams to focus on strategic work.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-automate-operations"
            >
              Automate Your Operations
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to automate your enterprise operations? Let's discuss your vision.
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
