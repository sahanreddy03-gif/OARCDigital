import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/stock_images/business_automation__26134094.jpg';
import img1 from '@assets/stock_images/business_automation__3ddf701d.jpg';
import img2 from '@assets/stock_images/business_automation__eedc4fcc.jpg';
import img3 from '@assets/stock_images/business_automation__e9dfb94b.jpg';
import img4 from '@assets/stock_images/business_automation__2e598039.jpg';
import img5 from '@assets/stock_images/revenue_growth_data__682db86c.jpg';
import img6 from '@assets/stock_images/revenue_growth_data__9805a25d.jpg';
import img7 from '@assets/stock_images/revenue_growth_data__21757e1f.jpg';
import img8 from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';
import img9 from '@assets/stock_images/business_strategy_co_75cf4bec.jpg';

export default function LeadGenSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.streamFlowAutomation.title}
        description={caseStudiesSEO.streamFlowAutomation.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.streamFlowAutomation.path}`}
        ogType={caseStudiesSEO.streamFlowAutomation.ogType}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Business automation workflow"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
                
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-case-study-title">
              How LeadGen Solutions Achieved 10x Delivery Speed
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Saving tens of thousands with automated workflows enabling 200+ accounts per manager
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
              <p className="text-lg font-bold text-black">Lead Generation</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Timeline</h3>
              </div>
              <p className="text-lg font-bold text-black">8 Weeks</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Service</h3>
              </div>
              <p className="text-lg font-bold text-black">Revenue Automation</p>
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
            LeadGen Solutions, a fast-growing lead generation agency, was facing a critical scalability problem. Their account managers were drowning in hundreds of man-hours spent on simple, mundane tasks like data entry, account management, and client onboarding.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Manual processes meant each account manager could only handle 20-30 accounts effectively. With ambitious growth targets, LeadGen Solutions needed to either hire extensively or find a way to dramatically increase productivity per person. The cost of hiring at scale would eat into margins, while maintaining manual processes would bottleneck growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Most critically, their onboarding process was slow and error-prone, leading to delayed client launches and inconsistent data quality across their systems.
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
                alt="Workflow automation"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <div className="image-reveal">
              <img 
                src={img2} 
                alt="Process efficiency"
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
            OARC Digital implemented a comprehensive automation system that transformed every aspect of LeadGen Solutions's operations—from data entry to account management to client onboarding. Our solution focused on three key areas:
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Automated Data Entry Workflows</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We eliminated hundreds of hours of manual data entry by building intelligent workflows that automatically captured, validated, and synchronized data across all systems. This included CRM updates, spreadsheet management, and database synchronization—all happening in real-time without human intervention.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Scaled Account Management</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We built automated account management workflows that enabled managers to effectively handle 200+ accounts each—a 10x increase in capacity. The system handled routine tasks, flagged issues requiring attention, and provided real-time dashboards for oversight across all accounts simultaneously.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Instant Client Onboarding</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We revolutionized their onboarding process by automating information collection, account setup, and system linking. What previously took days of back-and-forth now happened automatically, with new clients fully onboarded and ready to launch in a fraction of the time.
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
              alt="Automated workflow dashboard"
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
                        <div className="text-center p-8 bg-black rounded-2xl  relative z-10">
              <div className="text-4xl md:text-5xl font-black text-white mb-3">
                10x
              </div>
              <p className="text-sm text-white">
                Increase in Delivery Speed
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl  relative z-10">
              <div className="text-4xl md:text-5xl font-black text-white mb-3">
                200+
              </div>
              <p className="text-sm text-white">
                Accounts Per Manager
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl  relative z-10">
              <div className="text-4xl md:text-5xl font-black text-white mb-3">
                $10K+
              </div>
              <p className="text-sm text-white">
                In Cost Savings
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 border-l-4 border-[#5FD4C4] p-8 rounded-r-2xl">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "OARC Digital's automation systems transformed our entire business. We went from drowning in manual work to effortlessly managing 10x more accounts. The cost savings and efficiency gains have been game-changing for our growth trajectory."
            </p>
            <p className="text-base font-bold text-black">
              Operations Director, LeadGen Solutions
            </p>
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
                alt="Efficiency improvement"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
            <div className="image-reveal">
              <img 
                src={img5} 
                alt="Revenue growth"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
            <div className="image-reveal">
              <img 
                src={img6} 
                alt="Data analytics"
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
            The automation systems OARC Digital implemented didn't just improve efficiency—they fundamentally transformed LeadGen Solutions's business model and growth trajectory:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Eliminated hiring bottlenecks:</strong> Instead of hiring 10 new account managers to scale, they increased capacity 10x with existing team
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Reduced onboarding timeline:</strong> New clients went from multi-day onboarding process to same-day launches
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Improved data quality:</strong> Automated validation eliminated errors that plagued manual data entry
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Saved tens of thousands annually:</strong> Costs that would have gone to new hires stayed as pure profit
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Enabled rapid scaling:</strong> With automation in place, LeadGen Solutions can now scale to any size without proportional headcount growth
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
                alt="Business transformation"
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>
            <div className="image-reveal">
              <img 
                src={img8} 
                alt="Team success"
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="image-reveal">
              <img 
                src={img9} 
                alt="Strategic growth"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Automate Your Revenue Operations
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Like LeadGen Solutions, achieve 10x delivery speed and massive cost savings with custom automation.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2 btn-shimmer glow-lime"
              data-testid="button-automate-revenue"
            >
              Automate Your Revenue
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
            Ready to scale your operations without hiring? Let's discuss your automation needs.
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
