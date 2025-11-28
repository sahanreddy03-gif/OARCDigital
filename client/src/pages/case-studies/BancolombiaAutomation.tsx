import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/stock_images/banking_financial_se_82fcc7e7.jpg';
import img1 from '@assets/stock_images/banking_financial_se_fbe0cd32.jpg';
import img2 from '@assets/stock_images/banking_financial_se_4e680099.jpg';
import img3 from '@assets/stock_images/banking_financial_se_e77a0977.jpg';
import img4 from '@assets/stock_images/banking_financial_se_d814356b.jpg';
import img5 from '@assets/stock_images/banking_financial_se_a5eb865e.jpg';
import img6 from '@assets/stock_images/business_automation__3ddf701d.jpg';
import img7 from '@assets/stock_images/revenue_growth_data__682db86c.jpg';
import img8 from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';

export default function FinFlowBankAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.digitalFinanceSolutions.title}
        description={caseStudiesSEO.digitalFinanceSolutions.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.digitalFinanceSolutions.path}`}
        ogType={caseStudiesSEO.digitalFinanceSolutions.ogType}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Banking financial services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c4ff4d]/15 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-case-study-title">
              FinFlow Bank: 1,300% ROI Through Banking Automation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Saving 127,000+ branch hours and generating $7M in new revenue for 14 million customers
            </p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="relative py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Industry</h3>
              </div>
              <p className="text-lg font-bold text-black">Banking & Financial Services</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Scale</h3>
              </div>
              <p className="text-lg font-bold text-black">14M+ Clients, 210+ Processes</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Service</h3>
              </div>
              <p className="text-lg font-bold text-black">AI Automation at Scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            The Challenge
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            As one of Latin America's largest financial institutions serving over 14 million clients, FinFlow Bank faced mounting operational challenges. Their branch staff spent countless hours on repetitive manual tasks—account verifications, document processing, compliance checks, transaction validations—leaving less time for the personalized customer service that differentiates great banks.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Customer expectations were rising. Digital-native competitors offered faster service and 24/7 availability. Meanwhile, FinFlow Bank's traditional processes created bottlenecks: loan applications took days to process, account openings required multiple branch visits, and back-office teams were overwhelmed with data entry and reconciliation work.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The bank needed to transform operations across hundreds of branches without sacrificing the personal touch customers valued. They needed technology that could handle routine tasks at scale while improving—not replacing—the human customer experience.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="relative py-8 px-6 bg-surface-lime">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="image-reveal">
              <img 
                src={img1} 
                alt="Banking operations"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <div className="image-reveal">
              <img 
                src={img2} 
                alt="Financial technology"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            OARC Digital deployed enterprise-grade intelligent automation across 210+ banking processes, creating a digital workforce that operates alongside human teams. We focused on high-impact, high-volume processes that consumed the most staff time while delivering measurable customer experience improvements.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Customer Onboarding & KYC Automation</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We automated identity verification, document collection, compliance screening, and account setup workflows. New customers can now complete the entire onboarding process digitally while automated bots handle all backend verification and regulatory compliance checks in real-time.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Loan & Credit Processing</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Intelligent automation now handles credit checks, income verification, risk assessment data collection, and preliminary approval decisions. What previously took days of manual review now completes in hours—with more consistent risk evaluation and fewer human errors.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Transaction Monitoring & Compliance</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                AI-powered bots monitor millions of transactions daily for fraud patterns, AML red flags, and regulatory compliance. Suspicious activities are automatically flagged with supporting evidence, allowing compliance teams to focus on investigation rather than manual transaction review.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Back-Office Operations</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We automated reconciliation, report generation, data entry, account maintenance, and inter-departmental workflows. Back-office teams were freed from repetitive work to focus on exception handling, customer escalations, and process improvement.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Branch Support Automation</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Digital assistants now handle routine customer requests, account lookups, balance inquiries, and simple transactions—allowing branch staff to dedicate more time to advisory services, complex problem-solving, and building customer relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image */}
      <section className="relative py-8 px-6 bg-surface-lime">
        <div className="max-w-6xl mx-auto">
          <div className="image-reveal">
            <img 
              src={img3} 
              alt="Banking innovation"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            The Results
          </h2>

          <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
            <div className="text-center p-8 bg-black rounded-2xl stat-glow relative z-10">
              <div className="text-4xl md:text-5xl font-black text-[#4a7000] mb-3">
                1,300%
              </div>
              <p className="text-sm text-white">
                Return on Investment
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl stat-glow relative z-10">
              <div className="text-4xl md:text-5xl font-black text-[#4a7000] mb-3">
                127K+
              </div>
              <p className="text-sm text-white">
                Hours Saved in Branches
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl stat-glow relative z-10">
              <div className="text-4xl md:text-5xl font-black text-[#4a7000] mb-3">
                $7M
              </div>
              <p className="text-sm text-white">
                New Revenue Streams
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 border-l-4 border-[#5FD4C4] p-8 rounded-r-2xl mb-8">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "OARC Digital's automation platform transformed how we serve our 14 million clients. Our branch teams now spend their time on high-value advisory services instead of paperwork, and our customers experience faster service with fewer errors. The 1,300% ROI speaks for itself."
            </p>
            <p className="text-base font-bold text-black">
              Chief Operating Officer, FinFlow Bank
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <div className="text-2xl font-black text-black mb-2">210+</div>
              <p className="text-sm text-gray-700">Processes Automated Across Banking Operations</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <div className="text-2xl font-black text-black mb-2">14M+</div>
              <p className="text-sm text-gray-700">Clients Benefiting from Faster Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid 2 */}
      <section className="relative py-8 px-6 bg-surface-lime">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="image-reveal">
              <img 
                src={img4} 
                alt="Banking customer service"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
            <div className="image-reveal">
              <img 
                src={img5} 
                alt="Financial operations"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
            <div className="image-reveal">
              <img 
                src={img6} 
                alt="Business automation"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Business Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The transformation extended across every aspect of FinFlow Bank's operations:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Customer satisfaction improvement:</strong> Faster processing times and 24/7 service availability increased customer satisfaction scores
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Branch transformation:</strong> Staff redirected from manual processing to advisory services and relationship building
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>New revenue opportunities:</strong> Automation freed capacity to serve more customers and launch new digital products
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Competitive advantage:</strong> Service speed and accuracy now match or exceed digital-native challengers
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Compliance & risk management:</strong> Automated monitoring provides more consistent and comprehensive regulatory oversight
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Final Images */}
      <section className="relative py-8 px-6 bg-surface-lime">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="image-reveal">
              <img 
                src={img7} 
                alt="Revenue growth"
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>
            <div className="image-reveal">
              <img 
                src={img8} 
                alt="Team collaboration"
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Achieve Similar Results in Financial Services
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Like FinFlow Bank, transform your operations with intelligent automation that delivers measurable ROI.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 btn-shimmer glow-lime"
              data-testid="button-transform-banking"
            >
              Transform Your Operations
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="relative py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to automate your financial services operations? Let's discuss your vision.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 btn-shimmer"
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
