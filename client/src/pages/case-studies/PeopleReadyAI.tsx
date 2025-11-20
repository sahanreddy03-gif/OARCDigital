import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/stock_images/ai_software_developm_725be51d.jpg';
import img1 from '@assets/stock_images/ai_software_developm_2652993c.jpg';
import img2 from '@assets/stock_images/ai_software_developm_58a580cd.jpg';
import img3 from '@assets/stock_images/ai_software_developm_aeb365ec.jpg';
import img4 from '@assets/stock_images/ai_software_developm_171781f0.jpg';
import img5 from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';
import img6 from '@assets/stock_images/team_collaboration_b_542d7c06.jpg';
import img7 from '@assets/stock_images/team_collaboration_b_30e61c8c.jpg';
import img8 from '@assets/stock_images/team_collaboration_b_d0b83af6.jpg';
import img9 from '@assets/stock_images/team_collaboration_b_e4204dcc.jpg';
import img10 from '@assets/stock_images/business_strategy_co_75cf4bec.jpg';

export default function PeopleReadyAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.peopleReadyAI.title}
        description={caseStudiesSEO.peopleReadyAI.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.peopleReadyAI.path}`}
        ogType={caseStudiesSEO.peopleReadyAI.ogType}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="AI engineering team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-case-study-title">
              How PeopleReady Scaled with 30+ AI Engineers
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Accelerating digital transformation with seamlessly integrated nearshore AI engineering teams
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
              <p className="text-lg font-bold text-black">On-Demand Staffing</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Partnership Duration</h3>
              </div>
              <p className="text-lg font-bold text-black">4+ Years</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Service</h3>
              </div>
              <p className="text-lg font-bold text-black">AI Engineering Teams</p>
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
            PeopleReady, a leading on-demand staffing firm, needed to rapidly accelerate their digital transformation to compete in an increasingly technology-driven market. They required specialized AI engineering talent to build sophisticated matching algorithms, predictive analytics, and automation systems—but faced challenges with traditional hiring timelines and costs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The company needed engineers who could seamlessly integrate with their existing teams, work in their timezone, and deliver high-quality code from day one. Most importantly, they needed a trusted partner who could scale their engineering capacity quickly without sacrificing quality.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img1} 
              alt="Engineering team collaboration"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src={img2} 
              alt="AI development"
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
            OARC Digital deployed a comprehensive nearshore AI engineering team that seamlessly integrated with PeopleReady's operations. Our approach focused on cultural alignment, technical excellence, and long-term partnership.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Talent Selection & Vetting</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We assembled a team of 30+ top-tier AI engineers and data scientists from across the Americas, all rigorously vetted for technical skills, communication abilities, and cultural fit. Each team member underwent extensive screening to ensure they could contribute from day one.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Seamless Integration</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Our nearshore delivery model ensured teams worked in overlapping timezones with PeopleReady's core team. We adopted their tools, processes, and communication patterns to create a truly integrated experience—not just outsourced development.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Agile Transformation</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We transformed PeopleReady's workflow by implementing agile methodologies, continuous integration, and modern development practices. Our teams brought not just coding skills, but a culture of innovation and best practices.
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
            alt="Digital transformation"
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
                30+
              </div>
              <p className="text-sm text-white">
                AI Engineers Integrated
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                4+
              </div>
              <p className="text-sm text-white">
                Years Partnership
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                100%
              </div>
              <p className="text-sm text-white">
                Team Integration Success
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 border-l-4 border-[#5FD4C4] p-8 rounded-r-2xl">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "OARC Digital's nearshore delivery model has transformed the way we work. Their engineering teams seamlessly integrated with ours. We've trusted them for over 4 years with 30+ nearshore engineers."
            </p>
            <p className="text-base font-bold text-black">
              Christopher Kapcar, VP of Technology at PeopleReady
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
              alt="Team collaboration"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img5} 
              alt="Engineering workflow"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img6} 
              alt="AI development"
              className="w-full h-56 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Long-Term Partnership Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Over 4+ years, OARC Digital's nearshore AI engineering teams have become an integral part of PeopleReady's technology organization. Our partnership has delivered sustained value:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                Built sophisticated AI-powered matching algorithms connecting workers with opportunities faster
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                Developed predictive analytics systems to forecast staffing needs and optimize operations
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                Enabled continuous delivery and rapid iteration through modern development practices
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                Reduced time-to-market for new features by leveraging agile AI engineering teams
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
              alt="Digital transformation success"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <img 
              src={img8} 
              alt="Team integration"
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img9} 
              alt="Engineering excellence"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src={img10} 
              alt="Partnership success"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Scale Your AI Capabilities
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Like PeopleReady, accelerate your digital transformation with dedicated AI engineering teams.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-build-team"
            >
              Build Your Team
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
            Ready to scale your engineering capabilities? Let's discuss how we can help.
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
