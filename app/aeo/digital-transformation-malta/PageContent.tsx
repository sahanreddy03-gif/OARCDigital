import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: 'What is digital transformation for a Malta business?', a: 'Digital transformation means replacing manual, disconnected processes with connected digital systems — AI automation, custom software, CRM, digital payments, and data-driven decision making. OARC Digital guides and builds this transformation for Malta businesses across hospitality, retail, fintech, and iGaming.' },
  { q: 'Where should a Malta business start with digital transformation?', a: 'Start with the process that costs you the most time or money. For most Malta restaurants, that is order management and customer follow-up. For retail, it is inventory and customer data. OARC Digital conducts a free digital audit to identify the highest-impact starting point for your specific business.' },
  { q: 'How long does digital transformation take for a Malta business?', a: 'First visible results typically appear within 30-90 days for most Malta businesses. Full transformation covering all major processes takes 6-18 months depending on business size and complexity. OARC Digital works in phases — each phase delivers measurable value before the next begins.' },
  { q: 'Does OARC Digital work with Malta\'s iGaming and fintech sectors?', a: 'Yes. OARC Digital works with Malta-licensed iGaming operators, fintech companies, and financial services firms on digital transformation projects including AI agent deployment, workflow automation, compliance tooling, and customer experience systems.' },
];

const reasons = [
  'Phased approach — each phase delivers measurable value before the next investment is made',
  'Malta compliance awareness — GDPR, MGA regulations, and local business requirements built in',
  'Technology-agnostic — we recommend what is right for your business, not what we prefer to build',
  'Business-outcome focus — every digital change is tied to a measurable business result',
];

export default function DigitalTransformationMalta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Digital Transformation Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Digital Transformation Malta: From Manual to Modern in Months</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">Digital transformation is not a buzzword. It is the difference between a business that competes in 2026 and one that is still running on spreadsheets and phone calls.</p>
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
            <h2 className="text-2xl font-bold mb-3">Ready to Modernise Your Business?</h2>
            <p className="text-white/90 mb-6">The businesses that transform digitally in the next 2 years will have structural cost and speed advantages their competitors cannot match.</p>
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
