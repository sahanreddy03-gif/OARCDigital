import { useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowLeft, Shield, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "December 2, 2025";

  return (
    <Layout>
      <SEOHead
        title="Privacy Policy | OARC Digital - Data Protection & GDPR Compliance"
        description="Learn how OARC Digital collects, uses, and protects your personal data in compliance with GDPR and Malta's Data Protection Act. Your privacy rights explained."
        canonicalUrl="https://oarcdigital.com/privacy-policy"
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
              <div className="w-12 h-12 bg-[#4ade80]/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#4ade80]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white">Privacy Policy</h1>
                <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
              </div>
            </div>
            
            <p className="text-lg text-white/80 max-w-2xl">
              This Privacy Policy explains how OARC Digital ("we", "us", or "our") collects, uses, 
              and protects your personal data in compliance with the General Data Protection Regulation 
              (GDPR) and Malta's Data Protection Act (Cap. 586).
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* 1. Data Controller */}
              <div className="mb-12 p-6 bg-white/5 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">1</span>
                  Data Controller
                </h2>
                <p className="text-white/80 mb-4">
                  The data controller responsible for your personal data is:
                </p>
                <div className="bg-black/50 p-4 rounded-lg space-y-2">
                  <p className="text-white font-bold">OARC Digital</p>
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="w-4 h-4" />
                    <span>Malta, European Union</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:hello@oarcdigital.com" className="hover:text-[#4ade80] transition-colors">hello@oarcdigital.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Phone className="w-4 h-4" />
                    <span>+356 9912 3456</span>
                  </div>
                </div>
              </div>

              {/* 2. Data We Collect */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">2</span>
                  Personal Data We Collect
                </h2>
                <p className="text-white/80 mb-4">
                  We collect personal data that you voluntarily provide to us when you:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Contact us</strong> via our contact form, email, or phone (name, email address, phone number, company name, message content)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Subscribe</strong> to our newsletter (email address)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Request services</strong> or quotes (business information, project requirements)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Browse our website</strong> (automatically collected data via cookies - see our <Link href="/cookie-policy" className="text-[#4ade80] hover:underline">Cookie Policy</Link>)</span>
                  </li>
                </ul>
              </div>

              {/* 3. Legal Basis */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">3</span>
                  Legal Basis for Processing (Article 6 GDPR)
                </h2>
                <p className="text-white/80 mb-4">
                  We process your personal data based on one or more of the following legal bases:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-2">Consent (Article 6(1)(a))</h4>
                    <p className="text-white/70 text-sm">For marketing communications and newsletter subscriptions. You can withdraw consent at any time.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-2">Contract Performance (Article 6(1)(b))</h4>
                    <p className="text-white/70 text-sm">To provide services you have requested and fulfill our contractual obligations.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-2">Legitimate Interest (Article 6(1)(f))</h4>
                    <p className="text-white/70 text-sm">To respond to inquiries, improve our services, and ensure website security.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-2">Legal Obligation (Article 6(1)(c))</h4>
                    <p className="text-white/70 text-sm">To comply with applicable laws and regulations in Malta and the EU.</p>
                  </div>
                </div>
              </div>

              {/* 4. How We Use Data */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">4</span>
                  How We Use Your Personal Data
                </h2>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>To respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>To deliver the services you have requested</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>To send marketing communications (only with your consent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>To improve our website and services through analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>To comply with legal obligations</span>
                  </li>
                </ul>
              </div>

              {/* 5. Data Sharing */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">5</span>
                  Data Sharing & Third Parties
                </h2>
                <p className="text-white/80 mb-4">
                  Your personal data will not be sold to third parties. We may share your data with:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Service providers</strong> who assist us in operating our website and business (hosting, email services, CRM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Analytics providers</strong> to help us understand website usage (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Legal authorities</strong> when required by law</span>
                  </li>
                </ul>
                <p className="text-white/70 text-sm mt-4">
                  All third-party processors are bound by data processing agreements ensuring GDPR compliance.
                </p>
              </div>

              {/* 6. International Transfers */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">6</span>
                  International Data Transfers
                </h2>
                <p className="text-white/80">
                  Some of our service providers may be located outside the European Economic Area (EEA). 
                  In such cases, we ensure appropriate safeguards are in place, including Standard 
                  Contractual Clauses (SCCs) approved by the European Commission, to protect your data 
                  in accordance with GDPR requirements.
                </p>
              </div>

              {/* 7. Data Retention */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">7</span>
                  Data Retention
                </h2>
                <p className="text-white/80 mb-4">
                  We retain your personal data only for as long as necessary to fulfill the purposes 
                  for which it was collected:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Contact inquiries:</strong> 2 years from last contact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Client data:</strong> Duration of contract + 7 years (legal requirements)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Marketing consent:</strong> Until consent is withdrawn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Analytics data:</strong> 26 months (anonymized)</span>
                  </li>
                </ul>
              </div>

              {/* 8. Your Rights */}
              <div className="mb-12 p-6 bg-[#4ade80]/10 rounded-xl border border-[#4ade80]/20">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">8</span>
                  Your Rights Under GDPR
                </h2>
                <p className="text-white/80 mb-4">
                  Under GDPR and Malta's Data Protection Act, you have the following rights:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-black/30 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-1">Right of Access</h4>
                    <p className="text-white/60 text-xs">Request a copy of your personal data</p>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-1">Right to Rectification</h4>
                    <p className="text-white/60 text-xs">Correct inaccurate or incomplete data</p>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-1">Right to Erasure</h4>
                    <p className="text-white/60 text-xs">Request deletion of your data ("right to be forgotten")</p>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-1">Right to Restriction</h4>
                    <p className="text-white/60 text-xs">Limit how we process your data</p>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-1">Right to Data Portability</h4>
                    <p className="text-white/60 text-xs">Receive your data in a structured format</p>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-1">Right to Object</h4>
                    <p className="text-white/60 text-xs">Object to processing based on legitimate interest</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:hello@oarcdigital.com" className="text-[#4ade80] hover:underline">hello@oarcdigital.com</a>.
                  We will respond within one month.
                </p>
              </div>

              {/* 9. Cookies */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">9</span>
                  Cookies
                </h2>
                <p className="text-white/80">
                  Our website uses cookies to enhance your browsing experience. For detailed information 
                  about the cookies we use and how to manage your preferences, please see our{' '}
                  <Link href="/cookie-policy" className="text-[#4ade80] hover:underline">Cookie Policy</Link>.
                </p>
              </div>

              {/* 10. Security */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">10</span>
                  Data Security
                </h2>
                <p className="text-white/80 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal 
                  data, including:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>SSL/TLS encryption for all data transmission (HTTPS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Secure access controls and authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Regular security assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Limited access on a need-to-know basis</span>
                  </li>
                </ul>
              </div>

              {/* 11. Complaints */}
              <div className="mb-12 p-6 bg-white/5 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">11</span>
                  Complaints
                </h2>
                <p className="text-white/80 mb-4">
                  If you believe your data protection rights have been violated, you have the right to 
                  lodge a complaint with the supervisory authority:
                </p>
                <div className="bg-black/50 p-4 rounded-lg space-y-2">
                  <p className="text-white font-bold">Information and Data Protection Commissioner (IDPC)</p>
                  <p className="text-white/70">Floor 2, Airways House, High Street</p>
                  <p className="text-white/70">Sliema, SLM 1549, Malta</p>
                  <div className="flex items-center gap-2 text-white/70">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:idpc.info@idpc.org.mt" className="hover:text-[#4ade80] transition-colors">idpc.info@idpc.org.mt</a>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Phone className="w-4 h-4" />
                    <span>+356 2328 7100</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <ExternalLink className="w-4 h-4" />
                    <a href="https://idpc.org.mt" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ade80] transition-colors">https://idpc.org.mt</a>
                  </div>
                </div>
              </div>

              {/* 12. Updates */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#4ade80]/20 rounded-lg flex items-center justify-center text-[#4ade80] text-sm font-bold">12</span>
                  Policy Updates
                </h2>
                <p className="text-white/80">
                  We may update this Privacy Policy from time to time. Any changes will be posted on 
                  this page with an updated "Last Updated" date. We encourage you to review this policy 
                  periodically. Continued use of our website after changes constitutes acceptance of 
                  the updated policy.
                </p>
              </div>

              {/* Contact */}
              <div className="p-6 bg-gradient-to-r from-[#4ade80]/10 to-[#23AACA]/10 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">Questions?</h2>
                <p className="text-white/80 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 bg-[#4ade80] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#5aff6d] transition-colors" data-testid="button-contact">
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
