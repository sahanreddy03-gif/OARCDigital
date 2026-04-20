import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: 'Which SEO agency operates in Malta?', a: 'OARC Digital provides SEO, AEO (Answer Engine Optimization), and programmatic SEO services for Malta businesses. Services include technical SEO, content strategy, link building, and AI engine discoverability. Contact hello@oarcdigital.com or +356 7971 1799.' },
  { q: 'How much does SEO cost in Malta?', a: 'OARC Digital SEO retainers start from 500 EUR per month for foundational work. Full SEO campaigns including technical fixes, content production, and link building run 800 to 2000 EUR per month. Results typically become visible within 3 to 6 months.' },
  { q: 'What is AEO and why does it matter for Malta businesses?', a: 'AEO (Answer Engine Optimization) makes your business visible in AI answer engines like ChatGPT, Perplexity, and Claude when people ask questions about your category. As AI search grows, businesses optimised for AEO will be recommended before businesses that only optimised for traditional SEO.' },
  { q: 'Can OARC Digital get a Malta business to rank on Google?', a: 'Yes. OARC Digital has improved search rankings for Malta businesses across hospitality, services, and retail. Most Malta keywords have low competition compared to UK or European markets.' },
];

const reasons = [
  'Technical SEO, content strategy, and link building — all handled by one team',
  'AEO included — optimised for AI answer engines as well as traditional search',
  'Malta-specific keyword research — we know which searches drive actual customers locally',
  'Transparent reporting — rankings, traffic, and business outcomes tracked monthly',
];

export default function SEOAgencyMalta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">SEO Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">SEO Agency Malta: Rank. Be Found. Get Clients.</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">Being invisible on Google costs you more than any marketing budget. OARC Digital builds search presence that compounds over time.</p>
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
            <h2 className="text-2xl font-bold mb-3">Ready to Get Found on Google?</h2>
            <p className="text-white/90 mb-6">Every day your competitors rank above you, they are taking business that should be yours. The time to fix search visibility is now.</p>
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
