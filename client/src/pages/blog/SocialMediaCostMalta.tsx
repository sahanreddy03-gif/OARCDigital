import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, ArrowRight, AlertTriangle, Star } from 'lucide-react';
import { Link } from 'wouter';

const pricingData = [
  { type: 'Student Freelancer', min: 150, max: 400 },
  { type: 'Mid-level Freelancer', min: 400, max: 900 },
  { type: 'Malta Agency (Basic)', min: 600, max: 1200 },
  { type: 'OARC Digital', min: 800, max: 2500 },
  { type: 'International Agency', min: 2500, max: 8000 },
];

const roiData = [
  { month: 'Month 1', reach: 1200, leads: 3 },
  { month: 'Month 2', reach: 3400, leads: 8 },
  { month: 'Month 3', reach: 6800, leads: 14 },
  { month: 'Month 4', reach: 11200, leads: 22 },
  { month: 'Month 5', reach: 16500, leads: 31 },
  { month: 'Month 6', reach: 23000, leads: 45 },
];

export default function SocialMediaCostMalta() {
  return (
    <Layout>
      <SEOHead
        title="How Much Does Social Media Management Cost in Malta? (2026 Guide)"
        description="Real pricing for social media management in Malta. Freelancers vs agencies, what you actually get, and how to know if you're being overcharged. Updated 2026."
        canonicalUrl="https://oarcdigital.com/blog/social-media-management-cost-malta"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How Much Does Social Media Management Cost in Malta? (2026 Guide)",
          "description": "Real pricing for social media management in Malta. What freelancers charge vs agencies, what you get for your money, and red flags to watch for.",
          "author": { "@type": "Organization", "name": "OARC Digital" },
          "publisher": { "@type": "Organization", "name": "OARC Digital", "url": "https://oarcdigital.com" },
          "datePublished": "2026-02-15",
          "dateModified": "2026-03-20",
        }}
      />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Social Media Management Cost Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Pricing Guide · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              How Much Does Social Media Management Cost in Malta?
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              The honest answer: anywhere from €150 to €8,000 a month. The bigger question is what you're actually getting — and whether it'll grow your business or just fill your feed with forgettable content.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span>By OARC Digital</span>
              <span>·</span>
              <span>Updated March 2026</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          {/* Quick answer box */}
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">Quick Answer</h2>
            <p className="text-foreground">
              Social media management in Malta typically costs <strong>€400–€2,500/month</strong> for a serious service. Below €400, expect minimal effort. Above €2,500, you're paying for scale or international positioning. For most Malta SMEs, the sweet spot is <strong>€800–€1,500/month</strong> for a full-service package.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Real Price Breakdown</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Before comparing numbers, understand what you're buying. "Social media management" means wildly different things depending on who you hire. Here's what the market in Malta actually looks like.
          </p>

          {/* Chart */}
          <div className="bg-card border rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-1">Monthly Cost Ranges by Provider Type</h3>
            <p className="text-sm text-muted-foreground mb-6">Malta market, 2026</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={pricingData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(v) => `€${v}`} />
                <YAxis type="category" dataKey="type" width={160} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(value) => `€${value}/mo`} />
                <Bar dataKey="min" fill="#ff914d" name="Min" />
                <Bar dataKey="max" fill="#c4ff4d" name="Max" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h2 className="text-2xl font-bold mb-4">What You Get at Each Price Point</h2>

          <div className="space-y-6 mb-12">
            {[
              {
                range: '€150–€400/month',
                label: 'Student freelancers / hobby-level work',
                gets: ['5–8 posts per month', 'Basic captions (often AI-generated)', 'No strategy, no analytics', 'No paid ad management'],
                warning: 'This level can hurt your brand. Generic content with no strategy signals to potential customers that your business doesn\'t take itself seriously.',
              },
              {
                range: '€400–€900/month',
                label: 'Mid-level freelancer or small agency',
                gets: ['10–15 posts per month', 'Basic strategy', 'Monthly reporting', 'Some industry research'],
                warning: 'Execution quality varies hugely. Always ask to see examples from their other clients in your industry before committing.',
              },
              {
                range: '€800–€2,500/month',
                label: 'Professional agency (OARC Digital tier)',
                gets: ['20+ posts across platforms', 'Full strategy and content calendar', 'Video content included', 'Paid ad management (optional add-on)', 'Competitor monitoring', 'Monthly performance review'],
                warning: null,
              },
              {
                range: '€2,500+/month',
                label: 'International agency or enterprise',
                gets: ['Dedicated team of 3–5 people', 'Full content production studio', 'Multi-market campaigns', 'PR integration'],
                warning: 'For most Malta businesses, this is overkill. You\'re paying for overhead and brand prestige, not proportionally better results.',
              },
            ].map((tier, i) => (
              <div key={i} className={`p-6 rounded-xl border ${i === 2 ? 'border-orange-500/40 bg-orange-500/5' : 'bg-card'}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xl font-bold">{tier.range}</span>
                    <p className="text-muted-foreground text-sm mt-1">{tier.label}</p>
                  </div>
                  {i === 2 && <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">Sweet Spot</span>}
                </div>
                <ul className="space-y-2 mb-4">
                  {tier.gets.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {tier.warning && (
                  <div className="flex items-start gap-2 mt-3 p-3 bg-amber-50 dark:bg-amber-500/10 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-700 dark:text-amber-400">{tier.warning}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">What Actually Drives ROI</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Price is the wrong metric. The right question is: will this investment bring in more than it costs? Here's what consistent, professional social media management looks like after 6 months for a typical Malta business.
          </p>

          <div className="bg-card border rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-1">Typical Growth Trajectory — Malta SME</h3>
            <p className="text-sm text-muted-foreground mb-6">Professional management starting from zero. Restaurant / hospitality example.</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="reach" fill="#ff914d" name="Monthly Reach" />
                <Bar yAxisId="right" dataKey="leads" fill="#c4ff4d" name="Qualified Leads" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-3 text-center">Based on OARC client data. Individual results vary.</p>
          </div>

          <h2 className="text-2xl font-bold mb-4">6 Red Flags When Hiring in Malta</h2>
          <div className="space-y-4 mb-12">
            {[
              'They quote without asking about your business, audience, or goals first',
              'No examples of results for businesses in your industry',
              'They manage 30+ clients with a team of 2 people — the maths doesn\'t work',
              'Pricing based on number of posts, not outcomes',
              'No mention of strategy — just "content creation and posting"',
              'They offer to grow your followers fast — follower count without engagement is worthless',
            ].map((flag, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{flag}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Questions to Ask Before Signing</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Can you show me results you\'ve achieved for a business similar to mine in Malta?', why: 'Malta market knowledge is non-negotiable. An agency that only has international case studies doesn\'t understand your audience.' },
              { q: 'Who specifically will be working on my account?', why: 'Many agencies sell with senior talent, deliver with juniors. Know who\'s actually writing your content.' },
              { q: 'What does "management" include — strategy, creation, scheduling, community management, reporting?', why: 'Some agencies charge €1,000 for 10 posts and nothing else. That\'s not management.' },
              { q: 'What happens to my accounts and content if I want to leave?', why: 'You own your social accounts and all content produced for you. Any agency that says otherwise is wrong.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <p className="font-bold mb-2">"{item.q}"</p>
                <p className="text-sm text-muted-foreground">{item.why}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">What OARC Digital Charges and Why</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We don't publish fixed pricing because every business is different. A restaurant in Sliema needs different content, frequency, and strategy than an iGaming operator in Birkirkara. What we can tell you:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Starting from', value: '€800/mo', desc: 'Core social media management — strategy, content, scheduling' },
              { label: 'Most popular', value: '€1,200/mo', desc: 'Full management + video content + monthly performance review' },
              { label: 'Full service', value: '€2,000+/mo', desc: 'Everything above + paid ads + influencer coordination' },
            ].map((tier, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border text-center">
                <p className="text-sm text-muted-foreground mb-1">{tier.label}</p>
                <p className="text-2xl font-bold mb-2" style={{ color: '#ff914d' }}>{tier.value}</p>
                <p className="text-sm text-muted-foreground">{tier.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Every client starts with a free strategy call where we understand your business, show you what we'd do differently, and only then quote. No generic packages — everything built around your specific situation.
          </p>

          {/* Internal links */}
          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related: Service-Specific Pricing</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/social-media-creative-management"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Social Media Management →</span></Link>
              <Link href="/services/video-production"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Video Production →</span></Link>
              <Link href="/services/paid-advertising"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Paid Advertising →</span></Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Is €500/month enough for social media management in Malta?', a: 'Barely. At €500 you can get competent execution but not strategic thinking. If you\'re in a competitive industry (restaurants, retail, iGaming), under-investing means you\'re handing share of voice to competitors who spend more.' },
              { q: 'Should I hire a freelancer or an agency?', a: 'Freelancers offer cost but lack backup, breadth, and consistency. Agencies offer systems, team depth, and accountability — especially important if social media is critical to your revenue.' },
              { q: 'How long before I see results?', a: 'Paid advertising can show results within days. Organic social media growth takes 60–90 days to gain meaningful momentum. Sustainable results — the kind that compound — take 6+ months of consistent work.' },
              { q: 'Do I need to sign a long-term contract?', a: 'OARC Digital operates on rolling monthly agreements. We earn your business every month, not through lock-in clauses.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Get a Quote for Your Business</h2>
            <p className="text-white/90 mb-6">Free 30-minute strategy call. We'll show you exactly what we'd do and what it would cost — no pressure, no generic packages.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="font-bold">
                  WhatsApp Us Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
