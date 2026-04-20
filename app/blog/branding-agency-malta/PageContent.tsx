import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, AlertTriangle, Star } from 'lucide-react';
import Link from 'next/link';

export default function BrandingMalta() {
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
              <span className="text-white">Branding Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Creative Services · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              What a Branding Agency in Malta Actually Does (And What to Expect)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Most Malta businesses think branding means getting a logo. It does not. A logo is the end point of a branding process — not the process itself. Here is what you are actually paying for.
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
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">Logo vs Brand: The Core Distinction</h2>
            <p className="text-foreground">
              A <strong>logo</strong> is a visual mark. A <strong>brand</strong> is the total impression your business creates — the feeling people have before, during, and after interacting with you. Your logo is one element of your brand. Your brand is your positioning, personality, values, visual language, tone of voice, and the promise you make to customers.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Branding Work Actually Involves</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            When a Malta business hires a proper branding agency — not a freelancer who makes logos — the process typically has six components. Each one informs the next. Skipping any of them is why most Malta businesses end up with a logo they like but a brand that does not work.
          </p>

          <div className="space-y-6 mb-12">
            {[
              {
                step: '01',
                title: 'Brand Strategy',
                what: 'Defining who you are, who you are for, and why you are different from every other option available to your customer. This involves competitor analysis, customer profiling, and articulating your unique positioning in language that is specific enough to be defensible.',
                output: 'A positioning statement. A value proposition. A clear answer to "why choose you over the alternative."',
              },
              {
                step: '02',
                title: 'Brand Personality and Voice',
                what: 'Deciding how your brand communicates. Formal or casual? Direct or warm? Expert or accessible? Serious or with humour? These choices determine how every caption, email, proposal, and customer interaction sounds. Without this, your communications are inconsistent.',
                output: 'A tone of voice guide. Example copy in brand voice vs out of brand voice. Rules for how to write as this brand.',
              },
              {
                step: '03',
                title: 'Visual Identity',
                what: 'The full visual system: logo, colour palette, typography, iconography, photography style, and the rules governing how all of these work together. Not just the logo — the full toolkit that makes everything you produce recognizably yours.',
                output: 'Logo in all formats (primary, secondary, icon). Colour palette with HEX/RGB/CMYK values. Font system. Usage guidelines.',
              },
              {
                step: '04',
                title: 'Brand Guidelines',
                what: 'The document that ensures everyone who touches your brand — staff, suppliers, designers, agencies — produces work that is consistent with it. Without brand guidelines, every designer you hire will interpret your brand differently.',
                output: 'A single document (PDF or interactive) covering all brand rules. This is what you hand to any new agency or designer.',
              },
              {
                step: '05',
                title: 'Brand Rollout',
                what: 'Applying the new brand across all touchpoints: social media profiles, website, menus, signage, packaging, uniforms, email templates. The quality of a brand strategy is only realised when it is consistently applied.',
                output: 'Updated assets across all customer-facing materials.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border bg-card">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-orange-500/30">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">{item.what}</p>
                    <p className="text-sm"><span className="font-semibold">Output:</span> <span className="text-muted-foreground">{item.output}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">What Branding Costs in Malta</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Scope</th>
                  <th className="text-left p-3 font-semibold border">Provider Type</th>
                  <th className="text-left p-3 font-semibold border">Price Range</th>
                  <th className="text-left p-3 font-semibold border">What You Get</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Logo only', 'Freelancer / Fiverr', '€50–€500', 'A logo. No strategy, no guidelines, no voice.'],
                  ['Logo + basic kit', 'Malta freelancer', '€500–€1,500', 'Logo, colour palette, 1–2 fonts. Limited revision.'],
                  ['Brand identity', 'Malta creative studio', '€1,500–€4,000', 'Logo, full visual identity, basic guidelines.'],
                  ['Full brand strategy + identity', 'Agency (OARC tier)', '€3,000–€8,000', 'Strategy, voice, visual identity, full guidelines, rollout support.'],
                  ['Enterprise rebrand', 'International agency', '€15,000+', 'Full process, research, multiple concepts, change management.'],
                ].map(([scope, provider, price, gets], i) => (
                  <tr key={i} className={i === 3 ? 'bg-orange-500/5 border border-orange-500/20' : i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-3 border font-medium text-sm">{scope}</td>
                    <td className="p-3 border text-sm">{provider}</td>
                    <td className="p-3 border text-sm font-semibold text-orange-600">{price}</td>
                    <td className="p-3 border text-sm text-muted-foreground">{gets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4">Do You Actually Need a Branding Agency?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Not every Malta business needs a full brand strategy engagement. The honest answer depends on your situation:
          </p>
          <div className="space-y-4 mb-12">
            {[
              { scenario: 'You are launching a new business and plan to invest seriously in marketing from day one', answer: 'Yes — get the brand foundation right before building marketing on top of it. Wrong positioning at launch is expensive to fix later.' },
              { scenario: 'You have been operating for several years and your visual identity feels inconsistent or dated', answer: 'Yes — a rebrand done properly will change how existing and new customers perceive you. Especially if you are raising prices or moving upmarket.' },
              { scenario: 'You have a logo you like and a clear sense of your customer', answer: 'Not necessarily — you might just need brand guidelines created from what you already have, which is a much smaller scope.' },
              { scenario: 'You are a one-person operation at early revenue stage', answer: 'Probably not yet. Get to €10K+ monthly revenue first. A strong brand amplifies an already-working business. It cannot substitute for a business that has not found product-market fit.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <p className="font-medium mb-2 text-sm text-muted-foreground">Scenario: <span className="text-foreground">{item.scenario}</span></p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Red Flags When Hiring a Branding Agency in Malta</h2>
          <div className="space-y-4 mb-12">
            {[
              'They show you logo options before asking about your business, customers, or competitors. A logo without strategy is decoration, not branding.',
              'Portfolio shows only visual work — no evidence of strategy thinking, no case studies showing business outcomes.',
              'They deliver a PDF you cannot edit or a logo in a file format your printer cannot use. Professional deliverables include editable source files.',
              'No discovery process. A branding engagement that does not start with deep questions about your positioning and customers will produce something generic.',
              'Unlimited revisions as a selling point. This signals they do not have a strategic rationale for their design decisions — they are just iterating until you stop complaining.',
            ].map((flag, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{flag}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/branding-services"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Branding Services</span></Link>
              <Link href="/services/social-media-creative-management"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Social Media Management</span></Link>
              <Link href="/blog"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">More Articles</span></Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'How long does a branding project take in Malta?', a: 'A full brand strategy and identity project takes 6–12 weeks with a professional agency. Logo-only projects take 1–3 weeks. Rushing branding to meet an arbitrary deadline is a false economy — you will be living with the result for years.' },
              { q: 'Can I get good branding done cheaply in Malta?', a: 'You can get an affordable logo. You cannot get cheap brand strategy — it requires time, experience, and research. The cost of poor branding (confused positioning, inconsistent communications, rebrand in 3 years) always exceeds the cost of doing it properly the first time.' },
              { q: 'Should my branding look like my competitors?', a: 'No. The entire purpose of branding is differentiation. If your brand looks similar to competitors, customers have no reason to prefer you. Good branding makes you identifiable, memorable, and distinct — not part of the category wallpaper.' },
              { q: 'What is brand voice and why does it matter?', a: 'Brand voice is the consistent personality that comes through in everything you write. A restaurant with a warm, irreverent voice and one with a formal, aspirational voice serve the same food but attract different customers. Inconsistent voice — switching between formal and casual randomly — signals a business that does not know itself.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Build a Brand That Actually Works?</h2>
            <p className="text-white/90 mb-6">We handle brand strategy and identity for Malta businesses that want to compete on positioning, not just price. Free discovery call.</p>
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
