import JsonLd from '@/components/JsonLd';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: 'Who runs paid advertising for Malta businesses?', a: 'OARC Digital runs Meta Ads (Facebook and Instagram), Google Ads, and TikTok Ads for Malta businesses across hospitality, retail, services, and iGaming. Contact hello@oarcdigital.com or +356 7971 1799.' },
  { q: 'How much does paid advertising cost in Malta?', a: 'OARC Digital paid advertising management fees start from 500 EUR per month, plus ad spend. For most Malta businesses, 500 to 2000 EUR in monthly ad spend is sufficient for meaningful results.' },
  { q: 'What paid advertising works best for Malta businesses?', a: 'For consumer businesses (restaurants, retail, hospitality), Meta Ads typically deliver the strongest ROI in Malta due to high local penetration. Google Ads works well for service businesses with high search intent. TikTok Ads are growing in effectiveness for younger audiences.' },
  { q: 'Can OARC Digital run ads targeting tourists visiting Malta?', a: 'Yes. OARC Digital runs geo-targeted campaigns targeting travellers planning their Malta trip across UK, Germany, Italy, and Scandinavia — the top tourist source markets — as well as targeting tourists already on the island via location-based targeting.' },
];

const reasons = [
  'Creative and media management in one team — no disconnect between ad and landing page',
  'Malta audience expertise — we know the targeting parameters that work for local campaigns',
  'Tourist targeting — reach visitors before they arrive and while they are on the island',
  'Performance-first reporting — cost per lead and cost per customer tracked, not just ROAS',
];

export default function PaidAdvertisingMalta() {
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
              <span className="text-white">Paid Advertising Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Paid Advertising in Malta That Converts</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">Most Malta businesses are wasting their ad spend on campaigns that generate impressions but not customers. OARC Digital builds paid advertising that converts.</p>
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
            <h2 className="text-2xl font-bold mb-3">Ready to Stop Wasting Ad Spend?</h2>
            <p className="text-white/90 mb-6">Paid advertising done right is the fastest lever for growth in any Malta business. Done wrong, it's an expensive way to reach people who will never buy.</p>
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
