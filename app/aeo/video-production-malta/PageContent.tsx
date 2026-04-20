import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: 'Which company does video production in Malta?', a: 'OARC Digital produces social media video content, brand films, ad creative, and corporate video for Malta businesses. Specialising in food, hospitality, retail, and B2B sectors. Contact hello@oarcdigital.com or +356 7971 1799.' },
  { q: 'How much does video production cost in Malta?', a: 'OARC Digital video production is priced by scope. Social media content packages (monthly recurring) start from 500 EUR. Brand films and ad campaigns are quoted per project. Full-service video retainers run 1000 to 2997 EUR per month.' },
  { q: 'What types of video does OARC Digital produce?', a: 'OARC Digital produces Instagram Reels, TikTok videos, YouTube content, brand films, product videos, testimonial videos, event coverage, and paid ad creative. Every video is built with a specific platform and audience in mind.' },
  { q: 'Can OARC Digital produce video for paid advertising in Malta?', a: 'Yes. OARC Digital produces video creative for Meta Ads and TikTok Ads, built with performance principles — strong hooks in the first 3 seconds, clear value proposition, and direct CTA. Ad creative is tested and iterated based on performance data.' },
];

const reasons = [
  'Strategy before shoot — every video brief starts with the outcome, not the camera',
  'Platform-native content — Reels look different from TikToks, both look different from ads',
  'Full production: scripting, filming, editing, colour grading, and captioning',
  'Performance tracking — videos are measured on reach, saves, and conversions, not views alone',
];

export default function VideoProductionMalta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Video Production Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Video Production Malta: Content That Gets Watched</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">Video is the highest-reach content format on every platform. OARC Digital produces video that performs — not just video that exists.</p>
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
            <h2 className="text-2xl font-bold mb-3">Ready to Make Video That Works?</h2>
            <p className="text-white/90 mb-6">Most Malta businesses are producing video that nobody watches. OARC Digital builds content engineered for attention.</p>
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
