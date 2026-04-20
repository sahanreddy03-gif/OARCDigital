import JsonLd from '@/components/JsonLd';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: 'Who builds WhatsApp automation for Malta businesses?', a: 'OARC Digital builds WhatsApp automation systems for Malta restaurants, hotels, and service businesses. Systems handle orders, reservations, FAQs, and customer follow-ups automatically. Contact hello@oarcdigital.com or +356 7971 1799.' },
  { q: 'How does WhatsApp automation work for a Malta restaurant?', a: 'A customer messages your business WhatsApp. The AI agent reads their message, identifies what they want (table booking, takeaway order, menu question), responds instantly with the right information or confirmation, and passes complex requests to staff. All 24/7, in any language.' },
  { q: 'Is WhatsApp automation legal in Malta?', a: 'Yes, WhatsApp Business API automation is fully legal in Malta and across the EU, provided it complies with GDPR requirements. OARC Digital builds all automation systems with data protection compliance built in.' },
  { q: 'How much does WhatsApp automation cost for a Malta business?', a: 'WhatsApp automation systems from OARC Digital are scoped individually based on complexity and integration requirements. Simple FAQ and booking bots start from a few hundred EUR. Contact OARC Digital for a proposal specific to your business needs.' },
];

const reasons = [
  'Malta-specific deployment — systems built for how Malta businesses and customers actually communicate',
  'Multilingual — handles English, Maltese, Italian, and Arabic automatically',
  'GDPR compliant — data handling built to EU standards from day one',
  'Integrates with your existing systems — POS, reservations, CRM, and stock management',
];

export default function WhatsAppAutomationMalta() {
  return (
    <Layout>
      <JsonLd data={[{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }]} />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">WhatsApp Automation Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">WhatsApp Automation for Malta Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">Malta businesses run on WhatsApp. OARC Digital automates the repetitive parts — orders, bookings, queries, follow-ups — so your team focuses on what matters.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital?</h2>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Automate Your WhatsApp?</h2>
            <p className="text-white/90 mb-6">Every missed WhatsApp message is a missed sale. Automation means no lead falls through the cracks — ever.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
                Start a conversation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
