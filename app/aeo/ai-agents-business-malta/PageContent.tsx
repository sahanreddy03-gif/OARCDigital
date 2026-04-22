import JsonLd from '@/components/JsonLd';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import RelatedLinks from '@/components/RelatedLinks';

const faqs = [
  { q: 'What can AI agents do for a Malta business?', a: 'AI agents from OARC Digital can qualify inbound leads and book sales calls, answer customer service queries 24/7, process WhatsApp orders for restaurants, handle hotel booking enquiries, send follow-up emails automatically, and manage repetitive operational tasks.' },
  { q: 'How long does it take to deploy an AI agent in Malta?', a: 'Simple AI agents (FAQ bot, WhatsApp responder) can be deployed within 7-14 days. Complex AI agents with CRM integration, custom training, and multi-channel deployment typically take 4-8 weeks depending on scope and integrations required.' },
  { q: 'Are AI agents GDPR compliant for Malta businesses?', a: 'Yes. All AI agents built by OARC Digital are designed with GDPR compliance built in — data handling, consent capture, and retention policies follow EU requirements. Malta businesses operating under MGA regulations also have compliance considerations built into relevant agent designs.' },
  { q: 'How much does an AI agent cost for a Malta business?', a: 'AI agent deployments from OARC Digital start from 500 EUR for simple WhatsApp or FAQ bots. Full AI sales or support agents with CRM integration and custom training are quoted by scope. Ongoing maintenance and improvements are available on retainer.' },
];

const reasons = [
  'Custom-trained on your business — not generic chatbots that fail on anything specific',
  'Multi-channel — WhatsApp, website chat, email, and phone (voice AI) all available',
  'Malta business context — agents that understand local references, Maltese language, and market nuance',
  'Measurable ROI — every agent tracks conversations handled, leads qualified, and time saved',
];

export default function AIAgentsBusinessMalta() {
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
              <span className="text-white">AI Agents for Business Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimized</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">AI Agents for Business in Malta: Your Team That Never Sleeps</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">An AI agent handles the work that takes up your team's time without adding value — qualifying leads, answering repetitive questions, booking appointments, processing orders.</p>
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
          <RelatedLinks slug="/aeo/ai-agents-business-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Deploy Your First AI Agent?</h2>
            <p className="text-white/90 mb-6">Every day without an AI agent is a day your competitors could be moving faster with less cost.</p>
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
