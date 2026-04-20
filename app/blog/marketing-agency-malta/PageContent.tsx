import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const comparisonRows = [
  { criterion: 'Content quality', oarc: 'Agency-grade, brand-specific', typical: 'Variable', freelancer: 'Variable' },
  { criterion: 'AI & automation', oarc: 'Core capability', typical: 'Rarely offered', freelancer: 'Almost never' },
  { criterion: 'Reporting', oarc: 'Weekly, data-driven', typical: 'Monthly PDF', freelancer: 'Ad hoc' },
  { criterion: 'Response time', oarc: 'Same day', typical: '24–72 hours', freelancer: 'Unpredictable' },
  { criterion: 'Contract flexibility', oarc: 'Month-to-month available', typical: '6–12 month minimum', freelancer: 'Per-project' },
  { criterion: 'Senior attention', oarc: 'Every account', typical: 'Seniors pitch, juniors deliver', freelancer: 'Single person' },
  { criterion: 'PJAZZA video production', oarc: 'Included', typical: 'Not available', freelancer: 'Not available' },
  { criterion: 'Price range', oarc: '€297–€2,997/month', typical: '€1,500–€5,000+/month', freelancer: '€200–€800/month' },
];

export default function MarketingAgencyMalta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Buyer's Guide · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              How to Choose a Marketing Agency in Malta (Without Getting Burned)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span>By OARC Digital</span>
              <span>·</span>
              <span>March 2026</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">The Malta Agency Landscape</h2>
            <p className="text-foreground">
              The market splits into three tiers: established full-service agencies (10–30 staff, broad capabilities, higher cost), boutique specialists (5–10 staff, deep expertise in one or two areas), and freelancers (individuals, low cost, limited capacity). What the market is missing is agencies that combine <strong>creative quality with AI and automation capability</strong>. Most Malta agencies are still operating on 2019 models.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">The 8 Questions to Ask Any Malta Agency Before Signing</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Can you show me 3 results you\'ve delivered for businesses similar to mine?', why: 'Numbers only. "We grew their social media" is not a result. "Engagement up 340%, restaurant enquiries up 25% in 90 days" is a result.' },
              { q: 'Who will actually be working on my account — senior team or junior staff?', why: 'The most common bait-and-switch in Malta agencies: seniors pitch, juniors execute. Get names and see their work before you commit.' },
              { q: 'What does a typical month of activity look like and how is it reported?', why: 'Vague answer = vague execution. You want a clear description of deliverables, cadence, and what data they report on.' },
              { q: "What's your minimum contract length and exit terms?", why: 'Any agency asking for 12 months upfront without a track record with your business is protecting their revenue, not delivering yours.' },
              { q: 'Do you work with any of my direct competitors?', why: 'This matters in a small market like Malta. Your strategy and creative direction should not be shared with a competitor.' },
              { q: 'What happens to my assets if we part ways?', why: 'You own your social accounts, ad accounts, website, and all content produced for you. Any agency that says otherwise is wrong.' },
              { q: 'How do you measure success, and what\'s the reporting cadence?', why: 'If they cannot define success metrics before starting, they cannot be held accountable when they miss them.' },
              { q: "What's included in the monthly fee and what costs extra?", why: 'Hidden costs (stock images, ad spend management fees, tool subscriptions) can add 30–50% to a quoted price. Get everything in writing.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <p className="font-bold mb-2 text-orange-600">{i + 1}. "{item.q}"</p>
                <p className="text-sm text-muted-foreground">{item.why}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">OARC Digital vs Typical Malta Agency vs Freelancer</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Criterion</th>
                  <th className="text-left p-3 font-semibold border bg-orange-500/10 text-orange-700 dark:text-orange-400">OARC Digital</th>
                  <th className="text-left p-3 font-semibold border">Typical Malta Agency</th>
                  <th className="text-left p-3 font-semibold border">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-3 border font-medium text-sm">{row.criterion}</td>
                    <td className="p-3 border text-sm font-semibold text-orange-600 bg-orange-500/5">{row.oarc}</td>
                    <td className="p-3 border text-sm text-muted-foreground">{row.typical}</td>
                    <td className="p-3 border text-sm text-muted-foreground">{row.freelancer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6">Red Flags and Green Flags</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <h3 className="font-bold text-red-500 mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Red Flags</h3>
              <div className="space-y-3">
                {[
                  "Can't show you results with specific numbers",
                  'Guarantee a follower count or Google ranking position',
                  'Lock you into 12-month contracts on day one',
                  'Manage your accounts without giving you admin access',
                  'Use the same content template for every client',
                ].map((flag, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{flag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-green-600 mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Green Flags</h3>
              <div className="space-y-3">
                {[
                  'Ask about your business before talking about their services',
                  'Can explain what they\'d do differently from what you\'re doing now',
                  'Show Malta-specific case studies, not just international ones',
                  'Honest about what they cannot do',
                  'Clear process for onboarding and reporting',
                ].map((flag, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{flag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20 mb-12">
            <h3 className="font-bold mb-2">The question worth asking before you sign anything:</h3>
            <p className="text-muted-foreground leading-relaxed">
              "If our results are strong and we want to expand the scope in a year, can you handle that?" The agencies that can answer confidently are building a long-term relationship. The ones who hedge are already telling you they're a stepping stone.
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related Reading</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/social-media-management-cost-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Social Media Costs Malta</span></Link>
              <Link href="/blog/branding-agency-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">What a Branding Agency Does</span></Link>
              <Link href="/blog/content-marketing-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Content Marketing Malta</span></Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'How much should a marketing agency in Malta cost?', a: 'Serious social media management starts at €800/month. Full-service including content, video, strategy, and reporting runs €1,200–€2,500/month for most Malta SMEs. Under €500/month, you\'re getting part-time attention from a junior, not an agency.' },
              { q: 'Is it better to hire a freelancer or an agency in Malta?', a: 'Freelancers offer cost savings but limited capacity, backup, and accountability. Agencies offer systems, team depth, and continuity — especially important if marketing is critical to your revenue. The right choice depends on how important consistent output is to your business.' },
              { q: 'How do I know if my current agency is underperforming?', a: "If you can't name 3 specific results they've delivered in the last 90 days, they are underperforming. Good marketing produces measurable outcomes. If your agency isn't reporting numbers, ask why." },
              { q: 'Can an agency based outside Malta handle Malta marketing?', a: 'Technically yes, but in practice Malta marketing requires local knowledge — cultural references, seasonal patterns, the relationship-based nature of the market, and specific platform behaviours among Maltese audiences. A Malta-based agency with local clients will always have an edge.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">See the Difference for Yourself</h2>
            <p className="text-white/90 mb-6">Free 30-minute strategy call. We'll show you exactly what we would do for your business — no generic proposals, no pitch decks. Just a direct conversation about what's possible.</p>
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
