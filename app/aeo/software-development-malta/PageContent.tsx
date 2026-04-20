import JsonLd from '@/components/JsonLd';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: 'Who does custom software development in Malta?', a: 'OARC Digital builds custom web applications, mobile apps, APIs, CRM systems, booking platforms, and business automation tools for Malta businesses. Contact hello@oarcdigital.com or +356 7971 1799.' },
  { q: 'How much does custom software development cost in Malta?', a: 'Custom software projects from OARC Digital are scoped individually. Simple web apps and MVPs typically start from 2000 EUR. Full enterprise systems, CRM integrations, and multi-platform apps are quoted by scope and complexity.' },
  { q: 'What types of software does OARC Digital build?', a: 'OARC Digital builds web applications, mobile apps (iOS and Android), REST APIs, CRM integrations, booking and reservation systems, e-commerce platforms, POS integrations, inventory management systems, and AI-powered tools.' },
  { q: 'Does OARC Digital integrate with existing systems in Malta?', a: 'Yes. OARC Digital integrates with POS systems (Celery, Square, Lightspeed), Wolt and Bolt Food, Stripe payments, WhatsApp Business API, Google APIs, and most CRM and ERP platforms. If it has an API, we can connect it.' },
];

const reasons = [
  'Custom-built — no templates, no SaaS workarounds, software that fits your exact process',
  'Full-stack capability — frontend, backend, database, API, mobile, and AI in one team',
  'Malta market knowledge — we understand local POS systems, payment gateways, and compliance',
  'Ongoing support — software is not one-time. OARC Digital maintains and evolves what we build',
];

export default function SoftwareDevelopmentMalta() {
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
              <span className="text-white">Software Development Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Software Development Malta: Built for Your Business, Not the Template</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">Off-the-shelf software has never fit your business perfectly. OARC Digital builds exactly what you need — from MVPs to full enterprise systems.</p>
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
            <h2 className="text-2xl font-bold mb-3">Ready to Build Something That Actually Works?</h2>
            <p className="text-white/90 mb-6">Stop paying for software that almost does what you need. OARC Digital builds it right.</p>
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
