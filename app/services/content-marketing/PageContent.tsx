import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["content-marketing"];

const phases = [
  { title: "Topical authority map (week 1)", detail: "We map the 8 to 12 content clusters that will earn your brand topical authority on Google, ChatGPT, Perplexity and Gemini for the searches your buyers actually run." },
  { title: "Editorial calendar and briefs (week 2)", detail: "12 to 24 SEO-led briefs covering pillar pages, supporting articles, and Maltese case-study pieces. Every brief specifies search intent, target word count, internal links, and the buyer it speaks to." },
  { title: "Production (weeks 3 onward)", detail: "Long-form articles, case studies, founder interviews, and downloadable guides written by senior editors with subject-matter input from your team. We do not publish AI-spun filler." },
  { title: "Distribution and refresh (ongoing)", detail: "Each piece is repurposed for LinkedIn, email, and short-form social. Existing pages are refreshed quarterly so rankings compound rather than decay." },
];

const formats = [
  { name: "Pillar pages", detail: "2,500–4,000 words, the cornerstone of each topical cluster. Internal-linked, schema-rich, refreshed yearly." },
  { name: "Supporting articles", detail: "800–1,500 words answering one specific buyer question with structured data and FAQs." },
  { name: "Malta case studies", detail: "Story-led pieces that show real local results — restaurants in St Julian's, iGaming brands in Sliema, fintechs in the CBD." },
  { name: "Lead magnets", detail: "Templates, calculators, downloadable PDFs gated behind a HubSpot or Mailchimp form to convert organic traffic into leads." },
];

export default function ContentMarketingContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
              <span className="text-white">Content Marketing</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Editorial &amp; Authority</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Content Marketing for Malta-Based Brands</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Editorial programmes that compound — pillar pages, supporting articles, and Malta case studies that earn rankings on Google and citations from ChatGPT, Perplexity, and Gemini.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a content audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Content Is the Only Marketing That Compounds</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Paid media stops the moment you turn off the budget. Social posts disappear from a feed in 48 hours. A well-written, well-structured article on the right topic ranks for years and earns leads while you sleep. That is why every serious Malta brand — hospitality groups, iGaming operators, fintechs, and professional-services firms — eventually invests in editorial as a long-term moat.
            </p>
            <p className="text-foreground leading-relaxed">
              The difference between content that compounds and content that gathers dust is research, voice, and distribution. OARC Digital&apos;s editorial team interviews your founders and operators, talks to real Malta buyers, and writes pieces that hold up under scrutiny — the kind a journalist or a procurement team would actually cite.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How a Content Programme Runs at OARC</h2>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2"><span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span><h3 className="font-bold">{p.title}</h3></div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Formats We Produce</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {formats.map((f) => (
                <div key={f.name} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-1">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.detail}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes In Every Retainer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SCHEMA.features.map((f) => (
                <div key={f.name} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{f.name}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">AEO: How Content Earns Citations from ChatGPT and Perplexity</h2>
            <p className="text-foreground leading-relaxed mb-4">
              In 2025 and 2026, the buyer journey shifted. Roughly one in three high-intent B2B queries now starts inside an AI assistant. Those assistants quote some sources by name and ignore others. The pieces that get quoted share three traits: a clear primary claim, a structured FAQ block, and named entities (people, places, prices, dates) the model can lift cleanly into a response.
            </p>
            <p className="text-foreground leading-relaxed">
              Every OARC content brief is written for both Google and the answer engines. We add Question and Answer schema, we name our Birkirkara office, we cite Maltese case studies with real numbers, and we keep our prices public. The result is content that ranks classically and gets cited by AI — which is the only way to be visible to a 2026 buyer.
            </p>
          </section>
          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Editorial Standards That Survive an AI-Saturated Web</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Generic AI-generated content has flooded the open web — and Google's helpful-content updates plus Perplexity's source-ranking model have already started penalising it. Our editorial standard is built around the opposite proposition: every long-form piece is anchored to a named expert, a primary source interview, and at least one data point that does not appear anywhere else online. Drafts go through a structural editor and a Malta-based copy editor before publish, and we refuse to ship articles that cannot survive a fact-check against the original transcript.
              </p>
              <p className="text-foreground leading-relaxed">
                We measure editorial quality with three internal gates before publish. The cite-ability score grades whether an LLM can extract a quotable claim with a clear attribution. The originality score compares the piece against the top 20 ranking results and flags overlap above 25%. The brand-voice score grades adherence to the client's documented voice guide. A piece that fails any of the three goes back into the editorial queue rather than into production.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Building a Topic Cluster, Not a Pile of Posts</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Random blog posts compound nothing. Topic clusters compound. We start every retainer with a quarterly content map: one pillar page on the buyer's primary problem, six to ten supporting cluster articles each owning a single buyer question, and an interlinking plan that funnels authority back to the pillar. The pillar links to the conversion page, the cluster links to the pillar, and a measurable share of organic traffic eventually lands on the conversion page rather than getting stuck on a blog.
              </p>
              <p className="text-foreground leading-relaxed">
                Performance is reviewed monthly. Articles that under-deliver after 90 days are either rewritten with new primary research, consolidated with a stronger sibling, or 301-redirected and removed from the index. The pruning discipline matters as much as the publishing discipline — bloated content libraries dilute topical authority just as fast as no content does.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Analytics and Iteration Inside Every Retainer</h2>
            <p className="text-foreground leading-relaxed">
              Each cluster article gets a 30-, 60-, and 90-day review tied to documented success criteria. Articles that cross their targets are doubled down on with a follow-up piece or a video adaptation. Articles that miss are diagnosed against three usual suspects — wrong intent, wrong depth, wrong distribution — and either rewritten with primary research, redirected to a stronger sibling, or accepted as a long-tail asset and left to compound. The discipline is published in the monthly report so the editorial calendar reflects what the data actually says rather than what the marketing team wished it said.
            </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent retainers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per {offer.unitText?.toLowerCase() ?? "month"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <MaltaContextBlock slug="content-marketing" />
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {SCHEMA.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock variant="visit" />
          </section>
          <section className="mb-12 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h2 className="text-xl font-bold mb-3">Content Marketing vs SEO vs Paid Advertising — how they work together</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Content marketing is the engine that <strong className="text-foreground">feeds both SEO and AI search</strong>. Without original editorial content, SEO has no topical authority to build on. Without SEO infrastructure — technical health, internal links, schema — content sits unranked. The two are symbiotic: the OARC content retainer is designed to run in parallel with the SEO retainer from month one.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">Paid advertising</strong> amplifies content to audiences that are not yet finding you organically — seeding articles, promoting lead magnets, and retargeting blog readers down the funnel. Content marketing is slower than paid but creates an asset that compounds for years. The typical OARC client splits budget 60% content + SEO, 40% paid — and shifts that split as organic positions fill in.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/services/seo-services" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                SEO Services — rank the content you create <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/paid-advertising" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                Paid Advertising — amplify content to cold audiences <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <RelatedLinks slug="/services/content-marketing" />
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want a Free Content Audit?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We will plot your topical authority gap against the top three Malta competitors and propose an editorial calendar.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Get the audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
