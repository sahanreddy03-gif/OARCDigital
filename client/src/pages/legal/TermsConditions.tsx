import { useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowLeft, FileText, Scale, Mail, MapPin, Phone } from "lucide-react";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "December 2, 2025";

  return (
    <Layout>
      <SEOHead
        title="Terms & Conditions | OARC Digital - Service Agreement"
        description="Read the Terms & Conditions governing the use of OARC Digital's website and services. Includes service scope, payments, intellectual property, and liability."
        canonicalUrl="https://oarcdigital.com/terms-conditions"
        ogType="website"
      />

      <div className="bg-black min-h-screen">
        {/* Header */}
        <section className="relative py-16 md:py-24 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/">
              <button className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors" data-testid="button-back">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Home</span>
              </button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white">Terms & Conditions</h1>
                <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
              </div>
            </div>
            
            <p className="text-lg text-white/80 max-w-2xl">
              Please read these Terms & Conditions carefully before using our website or engaging 
              our services. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* 1. Company Information */}
              <div className="mb-12 p-6 bg-white/5 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">1</span>
                  Company Information
                </h2>
                <div className="bg-black/50 p-4 rounded-lg space-y-2">
                  <p className="text-white font-bold">OARC Digital</p>
                  <p className="text-white/70 text-sm">AI-Powered Marketing & Creative Agency</p>
                  <div className="flex items-center gap-2 text-white/70 mt-3">
                    <MapPin className="w-4 h-4" />
                    <span>Malta, European Union</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:hello@oarcdigital.com" className="hover:text-orange-400 transition-colors">hello@oarcdigital.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Phone className="w-4 h-4" />
                    <span>+356 9912 3456</span>
                  </div>
                </div>
              </div>

              {/* 2. Definitions */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">2</span>
                  Definitions
                </h2>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>"Company," "we," "us," "our"</strong> refers to OARC Digital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>"Client," "you," "your"</strong> refers to the individual or entity using our website or services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>"Services"</strong> refers to all services provided by OARC Digital, including but not limited to AI solutions, creative services, marketing, and automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>"Deliverables"</strong> refers to all work product created as part of our Services</span>
                  </li>
                </ul>
              </div>

              {/* 3. Services */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">3</span>
                  Scope of Services
                </h2>
                <p className="text-white/80 mb-4">
                  OARC Digital provides AI-powered marketing, creative, and automation services including:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>AI Employee Solutions (support specialists, SDRs, admin agents)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Creative Media Production (social media, video, branding)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Revenue Automation (lead generation, CRM integration)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>MVP Development and Custom Software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Data Engineering and Analytics</span>
                  </li>
                </ul>
                <p className="text-white/70 text-sm mt-4">
                  Specific deliverables, timelines, and pricing will be outlined in individual service agreements 
                  or proposals.
                </p>
              </div>

              {/* 4. Payment Terms */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">4</span>
                  Payment Terms
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-2">Pricing</h4>
                    <p className="text-white/70 text-sm">All prices are quoted in Euros (€) unless otherwise specified. Prices exclude VAT where applicable.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-2">Payment Schedule</h4>
                    <p className="text-white/70 text-sm">Unless otherwise agreed: 50% deposit upon project commencement, 50% upon completion. For retainer services, payment is due monthly in advance.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-2">Late Payment</h4>
                    <p className="text-white/70 text-sm">Late payments may incur interest at 8% per annum above the European Central Bank base rate. We reserve the right to suspend services until payment is received.</p>
                  </div>
                </div>
              </div>

              {/* 5. Intellectual Property */}
              <div className="mb-12 p-6 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">5</span>
                  Intellectual Property
                </h2>
                
                <h3 className="text-lg font-bold text-white mb-3">5.1 Client Ownership</h3>
                <p className="text-white/80 mb-4">
                  Upon full payment, Client shall own all rights to:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Final delivered creative assets (videos, graphics, copy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Custom code and software developed specifically for the Client</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Campaign strategies and content created for Client's use</span>
                  </li>
                </ul>

                <h3 className="text-lg font-bold text-white mb-3">5.2 OARC Digital Retains</h3>
                <p className="text-white/80 mb-4">
                  We retain ownership of:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pre-existing tools, templates, and frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>AI models and proprietary automation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Methodologies and processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Raw/editable source files (unless specifically agreed otherwise)</span>
                  </li>
                </ul>

                <h3 className="text-lg font-bold text-white mb-3">5.3 Portfolio Rights</h3>
                <p className="text-white/70 text-sm">
                  We may use completed work in our portfolio and marketing materials unless Client 
                  requests confidentiality in writing before project commencement.
                </p>
              </div>

              {/* 6. Cancellation & Refunds */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">6</span>
                  Cancellation & Refunds
                </h2>
                
                <h3 className="text-lg font-bold text-white mb-3">Consumer Rights</h3>
                <p className="text-white/80 mb-4">
                  For consumers (private individuals) engaging our services online, you have the right 
                  to cancel within 14 days from the contract date under EU Distance Selling regulations, 
                  subject to the following exceptions:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>If service delivery has begun with your express consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>For bespoke or customized digital content</span>
                  </li>
                </ul>

                <h3 className="text-lg font-bold text-white mb-3">Business Clients</h3>
                <p className="text-white/80 mb-4">
                  Cancellation terms for business clients will be specified in individual service agreements. 
                  Generally:
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Work completed will be billed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Deposits are non-refundable unless otherwise agreed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>30 days written notice required to terminate retainer agreements</span>
                  </li>
                </ul>
              </div>

              {/* 7. Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">7</span>
                  Limitation of Liability
                </h2>
                <p className="text-white/80 mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Our total liability shall not exceed the fees paid for the relevant services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>We are not liable for indirect, consequential, or incidental damages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>We do not guarantee specific results from marketing or AI services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>We are not responsible for third-party platform changes or outages</span>
                  </li>
                </ul>
                <p className="text-white/70 text-sm mt-4">
                  Nothing in these terms excludes liability for fraud, death/personal injury caused by 
                  negligence, or any other liability that cannot be excluded by law.
                </p>
              </div>

              {/* 8. Confidentiality */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">8</span>
                  Confidentiality
                </h2>
                <p className="text-white/80">
                  Both parties agree to keep confidential any proprietary information shared during 
                  the course of the engagement. This obligation survives termination of the agreement 
                  and shall remain in effect for 3 years following completion of services.
                </p>
              </div>

              {/* 9. Website Use */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">9</span>
                  Website Use
                </h2>
                <p className="text-white/80 mb-4">
                  By using our website, you agree:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Not to use the website for any unlawful purpose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Not to attempt to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Not to reproduce, distribute, or commercially exploit website content without permission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>That website content is provided "as is" without warranties</span>
                  </li>
                </ul>
              </div>

              {/* 10. Governing Law */}
              <div className="mb-12 p-6 bg-white/5 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-orange-400" />
                  Governing Law & Jurisdiction
                </h2>
                <p className="text-white/80 mb-4">
                  These Terms & Conditions are governed by and construed in accordance with the 
                  <strong> Laws of Malta</strong>.
                </p>
                <p className="text-white/80">
                  Any disputes arising from these terms or our services shall be subject to the 
                  exclusive jurisdiction of the <strong>Courts of Malta</strong>.
                </p>
              </div>

              {/* 11. Amendments */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">11</span>
                  Amendments
                </h2>
                <p className="text-white/80">
                  We reserve the right to update these Terms & Conditions at any time. Changes will 
                  be effective immediately upon posting to this page. For ongoing service agreements, 
                  material changes will be communicated to affected clients.
                </p>
              </div>

              {/* 12. Severability */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">12</span>
                  Severability
                </h2>
                <p className="text-white/80">
                  If any provision of these terms is found to be invalid or unenforceable, the 
                  remaining provisions shall continue in full force and effect.
                </p>
              </div>

              {/* Contact */}
              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-[#4ade80]/10 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">Questions About These Terms?</h2>
                <p className="text-white/80 mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 bg-orange-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-orange-400 transition-colors" data-testid="button-contact">
                    Contact Us
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
