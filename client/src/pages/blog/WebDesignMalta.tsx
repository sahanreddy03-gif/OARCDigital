import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';

const costTable = [
  { type: 'Freelancer (local)', range: '€300–€1,500', bestFor: 'Simple brochure sites', note: null },
  { type: 'Agency (basic)', range: '€1,500–€4,000', bestFor: 'SMEs, restaurants, retail', note: null },
  { type: 'Agency (custom)', range: '€4,000–€12,000', bestFor: 'Hotels, eCommerce, SaaS', note: 'Sweet spot for serious businesses' },
  { type: 'Ongoing maintenance', range: '€100–€500/month', bestFor: 'Anyone who wants updates', note: null },
];

export default function WebDesignMalta() {
  return (
    <Layout>
      <SEOHead
        title="Web Design in Malta: What It Costs and What You Actually Need (2026)"
        description="Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026."
        canonicalUrl="https://oarcdigital.com/blog/web-design-malta"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Web Design in Malta: What It Costs and What You Actually Need (2026)",
          "description": "Real web design costs and advice for Malta businesses in 2026.",
          "author": { "@type": "Organization", "name": "OARC Digital" },
          "publisher": { "@type": "Organization", "name": "OARC Digital", "url": "https://oarcdigital.com" },
          "datePublished": "2026-03-01",
          "dateModified": "2026-04-01",
        }}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Web Design Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Guide · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Web Design in Malta: What It Costs and What You Actually Need
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Most Malta businesses overpay for websites they don't need, or underpay for websites that quietly kill their credibility. Here's how to navigate the market in 2026.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span>By OARC Digital</span>
              <span>·</span>
              <span>March 2026</span>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">The Key Truth</h2>
            <p className="text-foreground">
              Price alone tells you nothing. A €400 WordPress template from a freelancer can outperform a €6,000 agency build if the strategy behind it is better. And the reverse is equally true.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Web Design Actually Costs in Malta</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Type</th>
                  <th className="text-left p-3 font-semibold border">Price Range</th>
                  <th className="text-left p-3 font-semibold border">Best For</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={i} className={row.note ? 'bg-orange-500/5' : i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-3 border font-medium text-sm">
                      {row.type}
                      {row.note && <span className="ml-2 px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">{row.note}</span>}
                    </td>
                    <td className="p-3 border text-sm font-semibold text-orange-600">{row.range}</td>
                    <td className="p-3 border text-sm text-muted-foreground">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6">What You Actually Need (and What You Don't)</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <h3 className="font-bold text-green-600 mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> You need:</h3>
              <div className="space-y-3">
                {[
                  'Fast load times (under 2 seconds)',
                  'Mobile-first design — 70%+ of Malta traffic is mobile',
                  'Clear calls to action on every page',
                  'Google Business integration',
                  'Basic on-page SEO baked in from day one',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-red-500 mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> You don't need:</h3>
              <div className="space-y-3">
                {[
                  'A custom CMS that only your developer can edit',
                  'Animations that slow the page',
                  'Stock photos that look like every other Malta business',
                  'A 40-page site when 8 pages will do the job',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Malta-Specific Problems to Avoid</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Malta has a small pool of web developers, which means some freelancers are recycling the same templates across dozens of clients. Ask to see 5 recent sites they've built — if they all look the same, you're getting a template, not a custom build.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Hosting matters more than most businesses realise. A Malta business hosting on a cheap shared server in the US will rank lower in Google.mt search results than a competitor on a European server. Insist on EU-hosted infrastructure.
          </p>

          <h2 className="text-2xl font-bold mb-4">The Question Nobody Asks</h2>
          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20 mb-12">
            <p className="text-foreground leading-relaxed">
              What happens after launch? Most Malta web projects die 6 months after go-live because nobody is creating content, updating pages, or building links. The website is not the product — the ongoing strategy is. Budget for both.
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/web-design"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Web Design</span></Link>
              <Link href="/blog/content-marketing-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Content Marketing Malta</span></Link>
              <Link href="/blog/social-media-management-cost-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Social Media Costs Malta</span></Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'How long does a website take to build in Malta?', a: 'A basic 5-page site: 2–4 weeks. A full custom build: 6–12 weeks. Any agency promising a fully custom site in under 2 weeks is delivering a template.' },
              { q: 'Should I use WordPress or a custom build?', a: 'For most Malta SMEs: WordPress or a modern headless framework (like Next.js) is the right call. Custom builds make sense only when you have specific functionality that no platform can deliver.' },
              { q: "What's the biggest mistake Malta businesses make with their website?", a: "Treating it as a one-time project instead of an ongoing channel. A website that isn't regularly updated signals to Google — and to customers — that your business is stagnant." },
              { q: 'Do I need a website if I already have a strong Instagram?', a: 'Yes. Instagram is a rented platform — the algorithm can bury your content overnight. A website is the only digital asset you own outright. It is also the only place where you control the full customer journey from discovery to booking.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Need a Website That Actually Works?</h2>
            <p className="text-white/90 mb-6">We build fast, SEO-optimised websites for Malta businesses — strategy included, not bolted on. Free consultation to start.</p>
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
