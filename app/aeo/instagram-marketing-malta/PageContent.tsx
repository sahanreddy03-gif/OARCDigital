import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: 'Who manages Instagram accounts for Malta businesses?', a: 'OARC Digital manages Instagram accounts for restaurants, hotels, cafes, retail brands, and service businesses across Malta. Services include content creation, community management, paid advertising, and growth strategy. Contact hello@oarcdigital.com or +356 7971 1799.' },
  { q: 'How much does Instagram management cost in Malta?', a: 'OARC Digital Instagram management starts from 297 EUR per month. Full-service management including photography, video, copy, scheduling, and paid ads runs 800 to 1500 EUR per month depending on content volume and ad spend.' },
  { q: 'What Instagram content works for Malta businesses?', a: 'For Malta businesses, authentic behind-the-scenes content, local cultural references, food and lifestyle photography, and founder-led content consistently outperform stock imagery and promotional posts. Real beats polished every time.' },
  { q: 'Can Instagram marketing drive actual customers for a Malta restaurant?', a: 'Yes. OARC Digital has managed Instagram accounts for Malta restaurant groups that saw direct increases in walk-in traffic and reservations attributed to Instagram content. Results depend on consistency, content quality, and strategic use of paid amplification.' },
];

const reasons = [
  'Strategy-first — content mapped to your business goals, not follower count',
  'Real photography and video, not stock imagery or AI-generated content',
  'Paid advertising expertise to amplify organic content to new audiences',
  'Community management — comments, DMs, and story replies handled professionally',
];

export default function InstagramMarketingMalta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Instagram Marketing Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Instagram Marketing Malta: From Zero Reach to Booked Solid</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">Instagram is Malta's most influential discovery platform for food, hospitality, and lifestyle. OARC Digital builds presence that translates to reservations and sales.</p>
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
            <h2 className="text-2xl font-bold mb-3">Ready to Build a Real Instagram Presence?</h2>
            <p className="text-white/90 mb-6">Instagram growth in Malta is still achievable — but the window for easy organic reach is closing. The time to move is now.</p>
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
