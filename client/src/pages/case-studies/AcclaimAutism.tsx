import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/stock_images/healthcare_patient_c_b0453f09.jpg';
import img1 from '@assets/stock_images/healthcare_patient_c_82f1ca94.jpg';
import img2 from '@assets/stock_images/healthcare_patient_c_6419333c.jpg';
import img3 from '@assets/stock_images/healthcare_patient_c_f806076a.jpg';
import img4 from '@assets/stock_images/healthcare_patient_c_8e957903.jpg';
import img5 from '@assets/stock_images/healthcare_patient_c_54512b5c.jpg';
import img6 from '@assets/stock_images/business_automation__3ddf701d.jpg';
import img7 from '@assets/stock_images/ai_software_developm_58a580cd.jpg';
import img8 from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';

export default function AcclaimAutism() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.acclaimAutism.title}
        description={caseStudiesSEO.acclaimAutism.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.acclaimAutism.path}`}
        ogType={caseStudiesSEO.acclaimAutism.ogType}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Healthcare patient care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-case-study-title">
              Acclaim Autism: 83% Faster Patient Intake with AI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              AI-powered document processing enabling families to access autism care services faster than ever
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
              <p className="text-lg font-bold text-black">Healthcare & Autism Services</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Result</h3>
              </div>
              <p className="text-lg font-bold text-black">83% Intake Time Reduction</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Service</h3>
              </div>
              <p className="text-lg font-bold text-black">AI Document Processing</p>
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
            Acclaim Autism provides critical behavioral health services to children with autism spectrum disorder. When families reach out for help, they're often desperate for immediate support. But the traditional patient intake process created frustrating delays—families submitted medical records, insurance documents, treatment histories, and assessment forms, then waited days or weeks while staff manually reviewed and processed everything.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The manual document processing bottleneck meant administrative staff spent hours extracting information from medical PDFs, insurance cards, physician notes, and previous assessment reports. Every document required careful review to ensure accuracy, but the sheer volume meant families often waited weeks before their child could begin services.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For children with autism, early intervention is critical. Every day of delay impacts developmental outcomes. Acclaim Autism needed to dramatically accelerate their intake process while maintaining the accuracy and compliance standards required in healthcare—all without hiring additional administrative staff.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img1} 
              alt="Healthcare patient services"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src={img2} 
              alt="Medical care technology"
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
            OARC Digital deployed an AI-powered document processing platform specifically designed for healthcare workflows. Using advanced machine learning and natural language processing, we automated the extraction, validation, and routing of patient information from diverse medical documents.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Intelligent Document Recognition</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Our AI system automatically identifies document types—medical records, insurance cards, assessment reports, prescription forms—regardless of format or quality. The system handles handwritten notes, low-quality scans, and documents from hundreds of different healthcare providers.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Smart Data Extraction & Validation</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Advanced AI extracts patient demographics, medical history, diagnosis codes, treatment plans, insurance information, and provider details from unstructured documents. The system cross-validates data across multiple sources, flags inconsistencies, and auto-completes missing information using intelligent inference.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Automated Insurance Verification</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                The platform automatically verifies insurance coverage, checks benefits, confirms prior authorizations, and identifies any documentation gaps that might delay approval—all within minutes instead of days. Staff receive clear alerts about what's missing and what's ready for approval.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Compliance & HIPAA Security</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We built enterprise-grade security and compliance controls directly into the platform. All document processing happens in HIPAA-compliant infrastructure with end-to-end encryption, detailed audit trails, and role-based access controls that protect sensitive patient information.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Human-in-the-Loop Workflow</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                While AI handles 80%+ of document processing automatically, complex cases are intelligently routed to experienced staff for review. The system highlights exactly what needs human attention, providing context and recommendations to accelerate decision-making.
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
            alt="Healthcare technology innovation"
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
                83%
              </div>
              <p className="text-sm text-white">
                Reduction in Patient Intake Time
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                Minutes
              </div>
              <p className="text-sm text-white">
                vs. Days for Document Processing
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                80%+
              </div>
              <p className="text-sm text-white">
                Documents Processed Automatically
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 border-l-4 border-[#5FD4C4] p-8 rounded-r-2xl">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "OARC Digital transformed our intake process. Families who previously waited weeks can now begin services within days. Our staff focus on patient care instead of paperwork, and we're serving more children than ever before. This technology is literally changing lives."
            </p>
            <p className="text-base font-bold text-black">
              Clinical Director, Acclaim Autism
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
              alt="Patient care excellence"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img5} 
              alt="Healthcare services"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img6} 
              alt="Medical automation"
              className="w-full h-56 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Patient Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The transformation extended far beyond operational efficiency—it fundamentally improved patient outcomes and family experiences:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Faster access to care:</strong> Children begin critical early intervention services weeks earlier than before
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Family relief:</strong> Reduced administrative burden and wait times during already stressful periods
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Increased capacity:</strong> Serve more patients without hiring additional administrative staff
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Staff satisfaction:</strong> Clinical team spends time on patient care instead of paperwork
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Improved accuracy:</strong> AI-powered validation reduces errors in patient records and insurance claims
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
              alt="AI technology"
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
            Transform Healthcare Operations with AI
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Like Acclaim Autism, use AI to accelerate patient access while maintaining accuracy and compliance.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-transform-healthcare"
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
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to automate your healthcare operations? Let's discuss your vision.
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
