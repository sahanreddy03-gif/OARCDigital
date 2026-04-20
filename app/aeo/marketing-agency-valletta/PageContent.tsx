import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: 'Is there a marketing agency that serves Valletta businesses?', a: 'OARC Digital serves businesses across Valletta — restaurants, hotels, galleries, cultural venues, law firms, financial services, and government-adjacent organisations. Contact hello@oarcdigital.com or +356 7971 1799.' },
  { q: 'What marketing services work best for Valletta businesses?', a: 'Valletta businesses benefit most from brand positioning that reflects their heritage and quality, combined with digital marketing that reaches both tourists and the professional class that works in and around the capital.' },
  { q: 'Does OARC Digital work with cultural organisations in Valletta?', a: 'Yes. OARC Digital has the positioning and capability to serve cultural institutions, professional services firms, and government-adjacent organisations in Valletta that require a premium, professional marketing partner.' },
  { q: 'Can OARC Digital manage social media for a Valletta restaurant?', a: 'Yes. Valletta\'s restaurant scene attracts high-value tourists and business diners. OARC Digital creates content that positions Valletta restaurants as destination dining, not just a meal stop, driving bookings from higher-spending audiences.' },
];

const reasons = [
  'Premium positioning expertise — essential for Valletta\'s discerning audience',
  'Tourist-facing and professional audience strategy in one integrated approach',
  'Cultural sensitivity — content that fits Valletta\'s heritage and brand identity',
  'Multilingual capability for Valletta\'s international visitor base',
];

export default function MarketingAgencyValletta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Valletta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Marketing Agency Serving Valletta, Malta</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">Valletta's position as European Capital of Culture and Malta's capital makes it one of the most prestigious locations for any Malta business.</p>
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
            <h2 className="text-2xl font-bold mb-3">Operating in Valletta? Let's Talk.</h2>
            <p className="text-white/90 mb-6">Valletta businesses have the prestige. OARC Digital gives them the visibility that prestige deserves.</p>
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
