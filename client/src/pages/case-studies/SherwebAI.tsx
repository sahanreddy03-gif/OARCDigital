import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';
import img1 from '@assets/stock_images/team_collaboration_b_542d7c06.jpg';
import img2 from '@assets/stock_images/business_strategy_co_75cf4bec.jpg';
import img3 from '@assets/stock_images/team_collaboration_b_30e61c8c.jpg';
import img4 from '@assets/stock_images/digital_transformati_8ce03e9d.jpg';
import img5 from '@assets/stock_images/technology_innovatio_488c6366.jpg';
import img6 from '@assets/stock_images/team_collaboration_b_d0b83af6.jpg';
import img7 from '@assets/stock_images/business_strategy_co_e5cc7de1.jpg';
import img8 from '@assets/stock_images/technology_innovatio_2126c110.jpg';
import img9 from '@assets/stock_images/digital_transformati_db8f74f7.jpg';
import img10 from '@assets/stock_images/team_collaboration_b_e4204dcc.jpg';

export default function CloudPartnerSolutionsAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.sherwebAI.title}
        description={caseStudiesSEO.sherwebAI.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.sherwebAI.path}`}
        ogType={caseStudiesSEO.sherwebAI.ogType}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="CloudPartner Solutions team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-case-study-title">
              How CloudPartner Solutions Scaled AI Adoption with OARC Digital
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Creating a solid foundation for responsible AI use in creative teams
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
              <p className="text-lg font-bold text-black">Software</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Year</h3>
              </div>
              <p className="text-lg font-bold text-black">2024</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Service</h3>
              </div>
              <p className="text-lg font-bold text-black">AI Consulting</p>
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
            CloudPartner Solutions, a leading software company, recognized the transformative potential of AI for their creative team but faced challenges in creating a structured adoption framework. Their marketing director needed a comprehensive strategy to ensure responsible AI use while driving measurable impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The team needed more than just AI tools—they required organizational readiness, leadership alignment, and a clear roadmap to avoid slowing down their AI journey.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img1} 
              alt="AI strategy session"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src={img2} 
              alt="Team workshop"
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
            OARC Digital implemented a comprehensive AI diagnostic and enablement program designed to create a solid foundation for AI adoption at CloudPartner Solutions.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">AI Readiness Diagnostic</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We conducted a thorough assessment of CloudPartner Solutions's creative operations, identifying opportunities, challenges, and readiness levels across the organization. This diagnostic provided the ammunition needed to drive adoption internally and align leadership.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Strategic Roadmap Development</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Based on diagnostic findings, we developed a phased implementation plan with clear milestones, KPIs, and resource requirements. The roadmap balanced quick wins with long-term transformation goals.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Team Enablement & Training</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We delivered hands-on workshops and training sessions to empower the creative team with AI skills. Our focus was on practical application and responsible AI use, ensuring the team could confidently leverage AI tools.
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
            alt="AI implementation workshop"
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
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                85%
              </div>
              <p className="text-sm text-white">
                Team AI Adoption Rate
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                40%
              </div>
              <p className="text-sm text-white">
                Efficiency Gain in Creative Production
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                100%
              </div>
              <p className="text-sm text-white">
                Leadership Alignment
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 border-l-4 border-[#5FD4C4] p-8 rounded-r-2xl">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "OARC Digital helped us create a solid foundation for responsible AI use in our creative team. The diagnostic gave me the ammunition to drive adoption internally and align leadership."
            </p>
            <p className="text-base font-bold text-black">
              Marketing Director, CloudPartner Solutions
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
              alt="Digital transformation"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img5} 
              alt="Technology innovation"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img6} 
              alt="Team collaboration"
              className="w-full h-56 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Building Momentum
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The success of the AI diagnostic and enablement program created lasting momentum at CloudPartner Solutions. Without this structured approach, the team might have slowed down their AI journey. Instead, they're building on that momentum with:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                Expanded AI use cases across marketing and creative operations
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                Continuous learning programs to keep the team at the forefront of AI innovation
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                Measurable cost savings through AI-powered workflow optimization
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                Strong governance framework ensuring responsible AI use
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Final Images */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img 
              src={img7} 
              alt="Strategy session"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <img 
              src={img8} 
              alt="Innovation"
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img9} 
              alt="Digital transformation"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src={img10} 
              alt="Team success"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Transform Your AI Journey
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Like CloudPartner Solutions, unlock the full potential of AI in your creative operations with expert guidance.
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

      {/* Get In Touch */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to scale your AI adoption? Let's discuss how we can help your team succeed with AI.
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
