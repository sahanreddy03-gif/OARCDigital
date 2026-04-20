"use client";

import JsonLd from '@/components/JsonLd';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, ArrowRight, AlertTriangle, Zap } from 'lucide-react';
import Link from 'next/link';

const roiData = [
  { method: 'Human SDR (Malta)', outreachPerWeek: 45, costPerLead: 120 },
  { method: 'AI SDR Agent', outreachPerWeek: 380, costPerLead: 22 },
];

const comparisonData = [
  { metric: 'Outreach capacity (per week)', human: '30–50', ai: '200–500' },
  { metric: 'Working hours', human: '9am–6pm', ai: '24/7' },
  { metric: 'Personalisation', human: 'High (limited by time)', ai: 'High (scalable)' },
  { metric: 'Follow-up consistency', human: 'Variable', ai: '100% — never misses' },
  { metric: 'Cost per month', human: '€2,000–€3,500 (salary)', ai: '€200–€800 (service)' },
  { metric: 'CRM integration', human: 'Manual logging', ai: 'Automatic' },
  { metric: 'Response time to inbound leads', human: '2–24 hours', ai: 'Under 5 minutes' },
  { metric: 'Scales instantly', human: 'No — hire more people', ai: 'Yes' },
];

export default function AISalesAutomationMalta() {
  return (
    <Layout>
      <JsonLd data={[{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "AI Sales Automation in Malta: How Businesses Are Replacing SDRs With AI Agents",
          "description": "How Malta businesses are using AI SDR agents to automate B2B outreach and lead generation.",
          "author": { "@type": "Organization", "name": "OARC Digital" },
          "publisher": { "@type": "Organization", "name": "OARC Digital", "url": "https://oarcdigital.com" },
          "datePublished": "2026-03-01",
          "dateModified": "2026-04-01",
        }, { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long does it take to deploy an AI SDR agent?", "acceptedAnswer": { "@type": "Answer", "text": "OARC builds and deploys AI SDR agents in 2–4 weeks. Setup includes ICP definition, sequence building, data source connection, and supervised testing before going live." } }, { "@type": "Question", "name": "Is AI outreach compliant with GDPR in Malta?", "acceptedAnswer": { "@type": "Answer", "text": "B2B cold outreach to business email addresses has legitimate interest basis under GDPR, provided recipients can opt out. We build opt-out handling into every sequence." } }, { "@type": "Question", "name": "How much does an AI SDR agent cost in Malta?", "acceptedAnswer": { "@type": "Answer", "text": "Setup runs €500–€1,500. Monthly management costs €300–€800. One closed deal typically covers 6 months of cost." } }] }]} />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">AI Sales Automation Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">AI · Sales · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              AI Sales Automation in Malta: How Businesses Are Replacing SDRs With AI Agents
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              A human SDR in Malta costs €2,000–€3,500 per month and makes 30–50 outreach attempts per week. An AI SDR agent costs €200–€800 per month and makes 200–500. The economics are not close.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span>By OARC Digital</span>
              <span>·</span>
              <span>March 2026</span>
              <span>·</span>
              <span>11 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">What an AI SDR Agent Actually Does</h2>
            <p className="text-foreground">
              An AI SDR (Sales Development Representative) agent identifies target prospects, researches them, drafts personalised outreach messages, sends them, follows up automatically, and hands off warm leads to a human closer. It does this continuously, without breaks, across email, LinkedIn, and WhatsApp — <strong>at a volume no human team could match.</strong>
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Numbers: AI SDR vs Human SDR in Malta</h2>
          <div className="bg-card border rounded-xl p-6 mb-8">
            <h3 className="font-bold mb-1">Weekly Outreach Capacity</h3>
            <p className="text-sm text-muted-foreground mb-6">Human SDR vs AI SDR agent — Malta B2B context</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={roiData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="method" width={180} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="outreachPerWeek" fill="#ff914d" name="Outreach per week" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Metric</th>
                  <th className="text-left p-3 font-semibold border">Human SDR</th>
                  <th className="text-left p-3 font-semibold border bg-orange-500/10 text-orange-700 dark:text-orange-400">AI SDR Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-3 border font-medium text-sm">{row.metric}</td>
                    <td className="p-3 border text-sm text-muted-foreground">{row.human}</td>
                    <td className="p-3 border text-sm font-semibold text-orange-600 bg-orange-500/5">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6">Which Malta Businesses Benefit Most</h2>
          <div className="space-y-4 mb-12">
            {[
              {
                sector: 'iGaming and fintech B2B',
                why: 'Dense ecosystem of suppliers, operators, and service providers — all potential customers for each other. AI SDR agents targeting specific job titles (CMO, Head of Payments, Compliance Officer) at specific company types can build pipeline that would take a human team months to replicate.',
              },
              {
                sector: 'Professional services (accountants, lawyers, consultants)',
                why: 'High-value clients, long sales cycles, relationship-driven. AI SDR handles the top-of-funnel volume — identifying and warming prospects — while human relationship builders focus on the qualified conversations.',
              },
              {
                sector: 'Agencies and service businesses',
                why: 'OARC uses an AI SDR for its own outreach. The playbook: identify Malta businesses with weak social media, personalise a message referencing their specific situation, follow up with a case study. The conversion rate on personalised outreach significantly exceeds cold email blasts.',
              },
              {
                sector: 'SaaS and software companies targeting Malta market',
                why: 'Trial-to-paid conversion requires consistent follow-up sequences. AI SDR manages the nurture sequence automatically — no leads fall through the cracks because a human forgot to follow up.',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2 text-orange-600">{item.sector}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.why}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">How OARC Builds AI SDR Agents</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The process is not plug-and-play. A poorly configured AI SDR produces spam at scale — which is worse than no outreach at all. OARC's build process has four stages:
          </p>
          <div className="space-y-4 mb-12">
            {[
              { step: '01', title: 'Ideal Customer Profile Definition', detail: 'Before writing a single message, we define exactly who the agent should target: industry, company size, job title, location, and trigger events (recent funding, new hire, competitor switch). Precision targeting is what separates a working AI SDR from a spam machine.' },
              { step: '02', title: 'Personalisation Data Sources', detail: 'We connect the agent to data sources that enable genuine personalisation: LinkedIn profiles, company news, job postings, website content, Google reviews. The agent references something specific about each prospect — not generic flattery.' },
              { step: '03', title: 'Message Sequence Build', detail: 'A 4–6 message sequence: initial outreach, value-add follow-up, case study send, last-attempt, then a 90-day re-approach. Each message is different in angle and length. The agent selects the appropriate next step based on whether the prospect opened, clicked, or replied.' },
              { step: '04', title: 'Human Handoff Protocol', detail: 'When a prospect replies positively or requests more information, the AI flags the lead and drafts the response for a human to review and send. The human closes; the AI qualifies. This is non-negotiable — AI closing conversations without human review damages trust.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border flex gap-4">
                <span className="text-3xl font-black text-orange-500/30 flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">What AI SDR Cannot Replace</h2>
          <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-12">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">
                Malta is a relationship market. An AI SDR can get a prospect to raise their hand — it cannot build the trust required to close a €2,000/month retainer. The human element at the closing stage is not optional. The businesses that try to automate the entire sales process in Malta will find that reply rates drop and reputational damage accumulates. AI handles volume and consistency; humans handle relationships and judgment.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related Services and Reading</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/ai-sdr-agent"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">AI SDR Agent Service</span></Link>
              <Link href="/services/ai-consulting"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">AI Consulting</span></Link>
              <Link href="/blog/ai-marketing-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">AI Marketing Malta</span></Link>
              <Link href="/blog/igaming-marketing-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">iGaming Marketing Malta</span></Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'How long does it take to deploy an AI SDR agent?', a: 'OARC builds and deploys AI SDR agents in 2–4 weeks. The setup involves defining your ideal customer profile, building the outreach sequence, connecting data sources for personalisation, and running supervised tests before going live.' },
              { q: 'Is AI outreach compliant with GDPR in Malta?', a: 'B2B cold outreach to business email addresses has a legitimate interest basis under GDPR, provided recipients can opt out and the data was obtained legitimately. We build opt-out handling into every sequence. B2C cold outreach requires explicit consent — the AI SDR model is designed for B2B.' },
              { q: 'What response rates can I expect?', a: 'Personalised AI SDR outreach targeting a well-defined ICP achieves 8–15% reply rates in B2B contexts. Generic mass email achieves 1–3%. The difference is entirely in the quality of targeting and personalisation, not the volume.' },
              { q: 'Can an AI SDR work for a small Malta business?', a: 'Yes — the ROI case is stronger for smaller businesses where the cost of a full-time SDR is prohibitive. A €400/month AI SDR delivering 15–20 qualified conversations per month replaces a function that would otherwise cost €2,500/month minimum.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Deploy an AI SDR Agent for Your Business</h2>
            <p className="text-white/90 mb-6">We build, configure, and manage AI SDR agents for Malta B2B businesses. From ICP definition to first qualified lead — handled. Free discovery call.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="font-bold">WhatsApp Us Now <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">Book a Call</Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
}
