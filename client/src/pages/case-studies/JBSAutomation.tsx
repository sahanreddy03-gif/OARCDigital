import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/stock_images/food_supply_chain_au_9bb3c110.jpg';
import img1 from '@assets/stock_images/food_supply_chain_au_e3896516.jpg';
import img2 from '@assets/stock_images/food_supply_chain_au_88dc232a.jpg';
import img3 from '@assets/stock_images/food_supply_chain_au_c26dd390.jpg';
import img4 from '@assets/stock_images/food_supply_chain_au_16bda18b.jpg';
import img5 from '@assets/stock_images/food_supply_chain_au_7765b7e8.jpg';
import img6 from '@assets/stock_images/business_automation__26134094.jpg';
import img7 from '@assets/stock_images/revenue_growth_data__682db86c.jpg';
import img8 from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';

export default function FreshFarmFoodsAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.globalSupplySystems.title}
        description={caseStudiesSEO.globalSupplySystems.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.globalSupplySystems.path}`}
        ogType={caseStudiesSEO.globalSupplySystems.ogType}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Food supply chain operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-case-study-title">
              FreshFarm Foods: $1M+ Annual Savings Through Supply Chain Automation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              210 intelligent automations saving 125,000 hours across global food operations
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
              <p className="text-lg font-bold text-black">Food & Agriculture</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Achievement</h3>
              </div>
              <p className="text-lg font-bold text-black">3-Year Success Streak (2020-2022)</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Service</h3>
              </div>
              <p className="text-lg font-bold text-black">Supply Chain Automation</p>
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
            FreshFarm Foods, one of the world's largest food companies, operates a massive global supply chain spanning production facilities, distribution centers, and retail partners across continents. Managing this complexity required thousands of manual processes: inventory tracking, order processing, pricing updates, compliance documentation, quality control reporting, and supplier coordination.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The sheer volume of transactions was staggering. Teams spent entire days updating pricing across product catalogs, reconciling inventory discrepancies, processing vendor paperwork, and ensuring regulatory compliance across different markets. Human error in this high-volume environment led to costly mistakes—incorrect shipments, pricing errors, delayed orders, and compliance risks.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            FreshFarm Foods needed to maintain their aggressive growth trajectory without proportionally increasing headcount. They required automation that could handle massive transaction volumes while maintaining the quality, accuracy, and compliance standards critical to the food industry.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img1} 
              alt="Food supply chain logistics"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src={img2} 
              alt="Supply chain automation"
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
            OARC Digital implemented 210 intelligent automations across FreshFarm Foods's supply chain operations, targeting the highest-volume, most error-prone processes first. We deployed a citizen developer program that empowered FreshFarm Foods employees to build and maintain automations, ensuring long-term sustainability and continuous improvement.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Pricing & Catalog Automation</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We automated pricing updates across thousands of SKUs and multiple sales channels. What previously consumed 390 hours weekly now runs automatically—bots pull pricing data from source systems, apply business rules, validate changes, and push updates across all platforms with perfect accuracy.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Order Processing & Fulfillment</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Intelligent automation now handles order entry, inventory allocation, shipment scheduling, and tracking updates. The system automatically routes orders to optimal fulfillment centers, manages inventory availability in real-time, and sends automated customer updates—no human intervention required.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Supplier & Vendor Management</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We automated vendor onboarding, purchase order creation, invoice reconciliation, and payment processing. Bots validate supplier documents, check compliance requirements, match invoices to purchase orders, and flag exceptions—reducing payment cycle time by 60%.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Quality Control & Compliance Reporting</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Automated systems now collect quality data from production facilities, generate compliance reports for regulatory agencies, track certifications and expiration dates, and alert teams to potential issues—ensuring food safety standards are met consistently across all locations.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Citizen Developer Program</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We trained 30 FreshFarm Foods employees to build and maintain automations using low-code platforms. This internal team can now quickly automate new processes as the business evolves, creating a culture of continuous improvement and reducing dependency on external IT resources.
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
            alt="Supply chain operations"
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
                $1M+
              </div>
              <p className="text-sm text-white">
                Annual Savings (3 Years Running)
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#4a7000] mb-3">
                125K
              </div>
              <p className="text-sm text-white">
                Hours Saved to Date
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#4a7000] mb-3">
                210
              </div>
              <p className="text-sm text-white">
                Intelligent Automations
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 border-l-4 border-[#5FD4C4] p-8 rounded-r-2xl mb-8">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "OARC Digital didn't just automate our processes—they transformed how we operate. We've hit our $1M annual savings target three years in a row, and our citizen developer program means we can keep building on this success. Our teams now focus on strategic work instead of repetitive tasks."
            </p>
            <p className="text-base font-bold text-black">
              VP of Operations, FreshFarm Foods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <div className="text-2xl font-black text-black mb-2">220 hrs/week</div>
              <p className="text-sm text-gray-700">Saved Weekly ($250K CAD Annually)</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <div className="text-2xl font-black text-black mb-2">390 hrs</div>
              <p className="text-sm text-gray-700">Saved from Pricing Updates Alone</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <div className="text-2xl font-black text-black mb-2">30-Member</div>
              <p className="text-sm text-gray-700">Citizen Developer Program</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <div className="text-2xl font-black text-black mb-2">Zero-Touch</div>
              <p className="text-sm text-gray-700">Fully Automated Processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid 2 */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <img 
              src={img4} 
              alt="Food industry operations"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img5} 
              alt="Supply chain technology"
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
            The transformation created lasting competitive advantages across FreshFarm Foods's global operations:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Sustainable cost reduction:</strong> $1M+ savings target met three consecutive years (2020-2022) with improving efficiency each year
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Scalable growth:</strong> Massively increased transaction volume without proportional headcount growth
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Quality & compliance improvement:</strong> Automated controls reduced errors and ensured consistent regulatory compliance
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Internal capability building:</strong> 30-member citizen developer program enables continuous automation innovation
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Employee satisfaction:</strong> Teams freed from manual drudgery to focus on strategic, fulfilling work
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
              alt="Revenue growth"
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
            Automate Your Supply Chain Operations
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Like FreshFarm Foods, achieve $1M+ annual savings through intelligent automation that scales with your business.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-automate-supply-chain"
            >
              Automate Your Supply Chain
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
            Ready to automate your supply chain operations? Let's discuss your vision.
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
