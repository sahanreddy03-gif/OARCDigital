import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone, BookOpen, TrendingUp, BarChart3, FileText } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";
import ScrollReveal from "@/components/ScrollReveal";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";

const SCHEMA = SERVICE_SCHEMAS["content-marketing"];

const heroImage = "/attached_assets/11_1763228440281.jpg";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Sticky notes and brainstorming materials representing content strategy planning for Malta brands",
  description: "A content strategy planning session with sticky notes and ideas arranged on a surface, representing the editorial planning and content marketing process for Malta businesses.",
  url: "https://oarcdigital.com/attached_assets/11_1763228440281.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/11_1763228440281.jpg",
};

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

const editorialStandards = [
  {
    icon: FileText,
    title: "Named expert, primary source, original data",
    desc: "Every long-form piece is anchored to a named expert, a primary source interview, and at least one data point that does not appear anywhere else online. Drafts go through a structural editor and a Malta-based copy editor before publish.",
  },
  {
    icon: BookOpen,
    title: "Three internal quality gates",
    desc: "The cite-ability score grades whether an LLM can extract a quotable claim. The originality score compares against the top 20 ranking results. The brand-voice score grades adherence to the client's documented voice guide. A piece that fails any of the three goes back.",
  },
  {
    icon: BarChart3,
    title: "90-day review against documented success criteria",
    desc: "Each cluster article gets a 30-, 60-, and 90-day review. Under-performers are diagnosed against wrong intent, wrong depth, or wrong distribution — and either rewritten, redirected, or accepted as long-tail. No article stays in the index if it dilutes topical authority.",
  },
  {
    icon: TrendingUp,
    title: "Topic clusters, not a pile of posts",
    desc: "One pillar page per buyer problem, six to ten supporting cluster articles each owning a single buyer question, and an interlinking plan that funnels authority back to the pillar. Random blog posts compound nothing. Topic clusters compound.",
  },
];

const proofPoints = [
  { metric: "3x", label: "average organic-attributed lead lift for Malta clients on full content retainers" },
  { metric: "6–10", label: "cluster articles per pillar, each owning a distinct buyer question" },
  { metric: "90 days", label: "from first publish to first measurable ranking lift (median across Malta clients)" },
];

export default function ContentMarketingContent() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* HERO with photo from user's 40 images */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sticky notes and brainstorming materials on a table — representing content strategy planning and editorial calendar development for Malta brands"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            data-testid="img-hero-content-marketing"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/75 to-zinc-900/50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 py-28 z-10">
          <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white">Content Marketing</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <BookOpen className="w-3 h-3 text-orange-400" />
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Editorial &amp; Authority</span>
          </div>
          <h1 data-speakable className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Become the Most Trusted<br />
            <span className="text-orange-400 italic">Voice in Your Industry.</span>
          </h1>
          <p data-speakable className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl">
            Editorial programmes that compound — pillar pages, supporting articles, and Malta case studies that earn rankings on Google and citations from ChatGPT, Perplexity, and Gemini.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold" data-testid="button-book-audit">Book a content audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
          </div>
          <p className="mt-6 text-xs text-zinc-500">Last updated: 10 May 2026</p>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="py-12 px-6 bg-zinc-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {proofPoints.map((p, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/10 text-center" data-testid={`proof-${i}`}>
                <div className="text-3xl font-bold text-orange-400 mb-2">{p.metric}</div>
                <p className="text-sm text-zinc-400">{p.label}</p>
              </div>
            ))}
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
              <ScrollReveal key={i}>
                <div className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2"><span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span><h3 className="font-bold">{p.title}</h3></div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Formats We Produce</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {formats.map((f) => (
              <div key={f.name} className="p-5 rounded-xl bg-card border" data-testid={`format-${f.name.toLowerCase().replace(/\s+/g, "-")}`}>
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

        {/* AEO */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">AEO: How Content Earns Citations from ChatGPT and Perplexity</h2>
          <p className="text-foreground leading-relaxed mb-4">
            In 2025 and 2026, the buyer journey shifted. Roughly one in three high-intent B2B queries now starts inside an AI assistant. Those assistants quote some sources by name and ignore others. The pieces that get quoted share three traits: a clear primary claim, a structured FAQ block, and named entities — people, places, prices, dates — the model can lift cleanly into a response.
          </p>
          <p className="text-foreground leading-relaxed">
            Every OARC content brief is written for both Google and the answer engines. We add Question and Answer schema, we name our Birkirkara office, we cite Maltese case studies with real numbers, and we keep our prices public. The result is content that ranks classically and gets cited by AI — which is the only way to be visible to a 2026 buyer.
          </p>
        </section>

        {/* EDITORIAL STANDARDS */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Editorial Standards That Survive an AI-Saturated Web</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Generic AI-generated content has flooded the open web — and Google&apos;s helpful-content updates plus Perplexity&apos;s source-ranking model have already started penalising it. Our editorial standard is built around the opposite proposition.
          </p>
          <div className="space-y-4">
            {editorialStandards.map((std, i) => (
              <ScrollReveal key={i}>
                <div className="p-6 rounded-xl bg-card border flex items-start gap-5" data-testid={`standard-${i}`}>
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <std.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{std.title}</h3>
                    <p className="text-sm text-muted-foreground">{std.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Analytics and Iteration Inside Every Retainer</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Each cluster article gets a 30-, 60-, and 90-day review tied to documented success criteria. Articles that cross their targets are doubled down on with a follow-up piece or a video adaptation. Articles that miss are diagnosed against three usual suspects — wrong intent, wrong depth, wrong distribution — and either rewritten with primary research, redirected to a stronger sibling, or accepted as a long-tail asset and left to compound.
          </p>
          <p className="text-foreground leading-relaxed">
            The discipline is published in the monthly report so the editorial calendar reflects what the data actually says rather than what the marketing team wished it said. We also share the raw topic cluster map, keyword tracker, and content audit so a future in-house marketer can pick up where we left off without rebuilding the measurement model.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
          <p className="text-muted-foreground mb-6">Three transparent retainers. No setup fees, no annual lock-in.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {SCHEMA.offers.map((offer) => (
              <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col" data-testid={`offer-${offer.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per {offer.unitText?.toLowerCase() ?? "month"}</p>
                <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW CONTENT WORKS WITH SEO AND EMAIL */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Content Marketing Works With SEO and Email</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Content marketing on its own is a library with no visitors. The distribution layer is what makes content compound — and OARC runs that layer in-house across three channels simultaneously.
          </p>
          <div className="space-y-4 mb-6">
            {[
              { channel: "SEO", role: "Organic search is the primary distribution channel. Every article is briefed against a keyword cluster, structured for featured snippets, and internally linked to distribute PageRank back to pillar pages. The SEO retainer and content retainer share one editorial calendar — content planned in week one ships against the technical roadmap confirmed in week two." },
              { channel: "Email", role: "New articles go to the subscriber list in a digest format with one editorial hook that earns the click. Long-form guides go behind a gate and feed a Klaviyo or HubSpot lead-nurture sequence. Readers who engage with three or more content pieces enter a higher-intent segment automatically." },
              { channel: "LinkedIn and social", role: "Every long-form article spawns three to five social-native formats — a carousel, a pull-quote post, a question designed to seed comments, and a repurposed clip if video was produced. We schedule against Malta business hours and algorithm peaks — not against a global generic best-practice tool that does not account for the island time zone." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`distribution-${i}`}>
                <h3 className="font-bold mb-2 text-orange-600">{item.channel}</h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* A/I-FIRST CONTENT */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How OARC Content Gets Cited by AI Answer Engines</h2>
          <p className="text-foreground leading-relaxed mb-4">
            A brief that is written only for Google will rank on Google. A brief that is also written for AI answer engines — ChatGPT, Perplexity, Gemini, Claude — will be cited in conversational responses to the high-intent queries your buyers run inside those tools. In 2026, that second audience is substantial: roughly one in three B2B buying journeys that start with AI assistance include a source citation by the time the buyer moves to a comparison page. Our content ends up in those citations because we write to the structural requirements of AI retrieval.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The requirements are specific and learnable. AI models prefer content with a clear primary claim stated in the first 100 words, a named expert or company, a date, at least one quantitative data point, and a structured FAQ section the model can lift cleanly. We build all five into every brief. Additionally, every OARC client with a full content retainer gets a maintained llms.txt file — the emerging standard that tells AI crawlers which pages to prioritise for citation.
          </p>
          <p className="text-foreground leading-relaxed">
            We also ensure every page carries Schema.org JSON-LD for Article, FAQPage, and Organization entities. Those machine-readable annotations are the signals an answer engine uses to confirm the source&apos;s identity and topical authority. A page that ranks in the top five on Google and carries correct entity markup is far more likely to be cited by an AI than a page that ranks the same but carries no schema at all.
          </p>
        </section>

        {/* MALTA CONTENT SPECIFICS */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Makes Malta Content Different from Generic Agency Work</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Malta has a population of half a million, a search market calibrated for small volume and high commercial intent, and a B2B buyer pool where most decision-makers know each other. That changes the content playbook significantly compared to a London, Berlin, or Amsterdam campaign.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Volume is small, intent is high", desc: "A piece targeting 40 monthly searches in Malta is worth more than a piece targeting 400 in Manchester if the Malta query carries higher commercial intent. We calibrate briefing targets accordingly." },
              { title: "Social proof is local and named", desc: "A Malta buyer reading a case study wants to recognise the client, the area, and the problem. Generic examples from outside the island carry no trust weight. Every content plan includes at least two Malta-specific case study slots." },
              { title: "Language switching requires editorial care", desc: "A Malta reader will switch between English, Maltese, and Italian in the same session. Our editors are native or near-native in English and review every piece for terms that do not translate cleanly into Malta business culture." },
              { title: "Industry clusters are tight", desc: "Malta&apos;s hospitality, iGaming, fintech, and professional-services communities are small and interconnected. Content about those industries has to be technically accurate because the readers often know the practitioners being discussed." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT TIMELINE */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Content Programme Ramp: Month by Month</h2>
          <div className="space-y-3">
            {[
              { period: "Month 1", output: "Topical authority map finalised. 12 briefs commissioned. First pillar page and 3 supporting articles in production. Distribution framework agreed — SEO, email, LinkedIn channels confirmed and scheduled." },
              { period: "Month 2", output: "First pillar page live, internally linked, and indexed. 6 supporting articles live. First email digest sent to subscriber list. First LinkedIn carousel scheduled. SEO retainer publishes baseline ranking report." },
              { period: "Month 3", output: "First ranking signals appearing in Search Console position 20–50 range. Second pillar page live. Email list growing from gated lead magnet. First Malta case study published." },
              { period: "Month 4–6", output: "Compounding: supporting articles start ranking in position 5–15 on long-tail cluster keywords. Pillar pages begin attracting backlinks from Malta directories and niche publications. Organic-attributed pipeline visible in GA4." },
            ].map((row, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border flex items-start gap-4" data-testid={`ramp-${i}`}>
                <span className="font-bold text-orange-500 text-sm w-20 flex-shrink-0 mt-0.5">{row.period}</span>
                <p className="text-muted-foreground text-sm">{row.output}</p>
              </div>
            ))}
          </div>
        </section>

        <MaltaContextBlock slug="content-marketing" />

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {SCHEMA.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`faq-${i}`}>
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Content Leadership in a Small Market: the Malta Advantage</h2>
          <p className="text-foreground leading-relaxed mb-4">
            In the UK or US, becoming the topical authority in a niche requires competing against hundreds of well-funded content teams. In Malta, the competition for topical authority in most B2B niches — legal tech, hospitality ops, fintech compliance, iGaming responsible gambling — is thin enough that a 6-month content programme can establish a brand as the go-to reference point. That is a structurally different return on investment than the same programme deployed in a saturated continental European market.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The Ghadira Bay resort corridor, the Three Cities maritime industry cluster, and the Cirkewwa ferry terminal area each have distinct B2B buyer communities that nobody is publishing for in English. A brand willing to publish first-party operational content about those industries — real costs, real regulatory considerations, real procurement timelines — can own the organic search result and the AI citation simultaneously with relatively modest editorial investment.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            OARC&apos;s content team is Birkirkara-based. Our editors are embedded in the Malta market, attend industry events, and know which practitioners are credible sources for a Malta hospitality or iGaming article. That local intelligence is not available to a London agency copying a UK content playbook and applying it to a .com.mt domain.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">On-Page SEO, Internal Linking, and Metadata Included</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Every article OARC produces ships with a complete on-page SEO deliverable alongside the copy. The deliverable includes a target keyword, a focus keyphrase density check, a meta title and description within character limits, a heading structure (H1 to H4) mapped to buyer intent hierarchy, an internal-link map connecting the article to its pillar page and three or more sibling articles, and Schema.org markup for Article and FAQPage entities where applicable.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            We also include an image brief — the dimensions, alt text, and file-naming conventions for every image in the article. Malta businesses frequently lose Google Image Search traffic and structured-data eligibility because image metadata is an afterthought. Our production process standardises it from day one.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Repurposing: One Article Becomes Six Assets</h2>
          <p className="text-foreground leading-relaxed mb-4">
            A 2,000-word pillar article is not the end of the content production process — it is the source material. Every OARC content retainer includes a systematic repurposing layer that extracts maximum distribution from each core article. The same research and expert input that goes into the article feeds a LinkedIn carousel, a 300-word email digest, a short-form video script, a downloadable PDF summary, and a social quote series.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { format: "LinkedIn carousel", desc: "5–8 slides converting the article&apos;s key points into a swipeable format. Posted by the founder or company page. Carousel posts consistently outperform link posts in Malta B2B LinkedIn reach." },
              { format: "Email digest", desc: "One-paragraph editorial hook in the weekly subscriber digest. Links to the full article. Drives the first 48-hour traffic spike and re-engages dormant subscribers." },
              { format: "Short-form video script", desc: "A 60–90 second script for a founder-on-camera or screen-recorded explainer. Posted to LinkedIn and Instagram Reels. Repurposes without re-researching." },
              { format: "Downloadable PDF summary", desc: "Gated behind a HubSpot or Mailchimp form. Converts organic article traffic into email subscribers. The PDF gets OARC branding and a one-page reference doc format." },
              { format: "Quote series", desc: "3–5 pull-quote graphics extracted from the article and posted across the week on social. Low effort, high reach, consistent brand presence." },
              { format: "Internal linking asset", desc: "Every new article is mapped to the internal-link graph and becomes a citation target for future articles in the same cluster. The compounding effect begins immediately." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border" data-testid={`repurpose-${i}`}>
                <h3 className="font-bold text-sm mb-2">{item.format}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            Repurposing is included in the Authority and Full Retainer tiers. The Sprint tier produces the core article only — the repurposing layer is optional at additional cost.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Thought Leadership and Founder Content</h2>
          <p className="text-foreground leading-relaxed mb-4">
            The highest-converting content in the Malta B2B market is the kind that carries a founder or senior practitioner&apos;s name. A case study signed by a named expert at a Birkirkara fintech converts trust faster than an unsigned brand article, because the buyer knows who they are potentially working with. OARC supports founders who want to build a personal LinkedIn or industry-publication presence alongside the core content programme.
          </p>
          <p className="text-foreground leading-relaxed">
            The process: a monthly 45-minute interview with the founder captures opinions, war stories, and insight that cannot be found anywhere else. The editorial team transforms that raw audio into a long-form founder perspective article, a LinkedIn native post series, and a contributed article pitched to Malta-relevant industry publications. The founder reviews and approves every piece before it publishes. The founder&apos;s voice is consistent because it is drawn from the founder&apos;s actual words — not invented by a copywriter trying to sound like a CEO.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Content Marketing Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long before content marketing produces measurable results?", a: "First articles typically index and appear in position 20–50 within 4–6 weeks. Ranking improvements into the top 10 for long-tail cluster articles typically appear between months 3 and 6. Organic-attributed pipeline measurable by month 6–9. Content marketing is a compounding investment, not a campaign." },
              { q: "Do you write the content or do we supply it?", a: "OARC produces the content using a senior editor and subject-matter input from your team. We interview your founder or product lead monthly to source the insight that cannot be found anywhere else. You review and approve every piece before publish — you are not handing over your voice, you are delegating the writing and research." },
              { q: "Can content marketing work in a niche Malta B2B market?", a: "Yes — and often better than in a larger market. If there are 300 potential buyers for a product in Malta and none of the competitors are publishing substantive content, the authority gap can be closed in 6 months. We have done this in iGaming compliance, hospitality operations, and fintech regulatory content." },
              { q: "What languages do you produce content in?", a: "English is the primary production language for Malta B2B content — it is the language of business across hospitality, fintech, and iGaming. Italian and Maltese content is available as an add-on for specific location-page sets or consumer-facing campaigns. Every language is reviewed by a native speaker." },
              { q: "What is the minimum content retainer commitment?", a: "The Content Sprint is a standalone 4-article project with no retainer commitment. The Authority and Full Retainer tiers are month-to-month with 30 days notice. There is no annual lock-in and no setup fee." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`faq-content-${i}`}>
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Measure Content Success Without Vanity Metrics</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Page views and social shares are not metrics we optimise for. They are reported for context, not for celebration. The metrics we manage and optimise against are: organic-attributed pipeline by content cluster (measured in euros of qualified pipeline generated), email-attributed revenue from content-gated lead magnets, cost per qualified lead by content format, and time-to-rank for each new article in its target keyword position band.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The monthly written report separates content performance by cluster — so a client can see that the iGaming compliance cluster generated three qualified leads this month while the hospitality ops cluster generated zero, and make a data-informed decision about where to invest the next four articles. This is the discipline that separates a content retainer that compounds from a content retainer that produces a library of posts nobody can attribute to revenue.
          </p>
          <p className="text-foreground leading-relaxed">
            We share the raw data with every report — the GA4 export, the Search Console ranking data, the email platform attribution report, and the keyword tracker. A future in-house marketer can pick up where we left off without rebuilding the measurement model from scratch.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Content Retainer Clients Typically Say</h2>
          <p className="text-foreground leading-relaxed mb-4">
            The most consistent observation from OARC content retainer clients after the first six months is that the content channel changed how they think about sales conversations. Prospects who have read three or more pieces before the first call arrive with a different level of trust and a different set of objections — the objections that content answered are gone, and the conversation can start at a more sophisticated level. That is the compound effect of content authority: it shifts the buyer&apos;s starting position before the first sales interaction.
          </p>
          <p className="text-foreground leading-relaxed">
            The second observation is that the content also works internally — new hires at client companies use the pillar pages and case studies as onboarding material because they represent the clearest articulation of the company&apos;s positioning and expertise. Content that started as an SEO asset becomes an institutional document. That is the durable value of editorial investment done right.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Content Marketing Pricing — Sprint, Authority, and Full Retainer</h2>
          <p className="text-foreground leading-relaxed mb-4">
            OARC content marketing retainers are structured at three engagement levels. The Content Sprint (€2,800 / 4 articles) is a standalone project — no retainer commitment, delivered in 4 weeks, includes keyword research, brief, drafts, revisions, SEO metadata, and internal-link mapping. The Authority Retainer (€3,900/month) runs 6 articles/month with a content strategy review at month 3, a topic cluster audit, and access to the repurposing layer. The Full Retainer (€5,800/month) adds 10 articles/month, founder thought-leadership content, a dedicated editor, and the full repurposing suite including LinkedIn carousel design.
          </p>
          <p className="text-foreground leading-relaxed">
            The Sprint is the recommended starting point for brands new to content marketing or new to OARC — it produces four substantive pieces and a content cluster map, and gives both sides the data to decide whether a retainer makes sense. No long-term commitment is required to start.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Content Governance: What Happens to Old Articles</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Most content retainers focus exclusively on new article production and ignore the existing library. At OARC, every retainer includes a quarterly content governance review — a pass through every article published in the past 12 months to identify pieces that have dropped in ranking, pieces that have gained ranking and should be expanded, and pieces that are cannibalising each other&apos;s keywords. The governance review prevents the library from becoming a liability.
          </p>
          <p className="text-foreground leading-relaxed">
            Articles that have dropped more than 20 positions in the past 90 days are added to the refresh queue. The refresh is treated as a new editorial project — new research, updated statistics, an expanded section addressing the question the article now ranks for, and a dateModified timestamp that signals to Google that the content is current. Refreshed articles typically recover rankings within 4–6 weeks of the update being indexed.
          </p>
        </section>

        <section className="mb-12 p-6 rounded-xl bg-card border">
          <h2 className="text-xl font-bold mb-3">How to start with content marketing at OARC</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Book a 30-minute discovery call. We review your current organic footprint, your top 5 competitors&apos; content volume, and the keyword opportunity in your niche. We then propose a topic cluster and a content calendar for the first three months. If the proposal looks right, the Content Sprint begins within 5 working days of the brief being approved. No retainer commitment is required to start with the Sprint. Most clients who start with a Sprint convert to the Authority Retainer after seeing the first four articles indexed and ranking — that first tangible evidence of compounding is the most effective conversion argument we have.
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            For existing content libraries — blogs or resource centres with 20+ articles — we offer a Content Audit (€900, standalone) that scores every existing article for SEO performance, identifies the highest-potential pieces to update first, and maps the gaps in the cluster architecture. The audit is the most efficient starting point for brands with existing content that is not converting.
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            The Content Audit is completed within 5 working days and delivered with a 30-minute debrief call. No obligation to proceed with a retainer after the audit.
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            To book a discovery call or a Content Audit, use the contact form on the Contact page or call the Birkirkara office directly. We respond within one working day. Discovery calls are available from Monday to Friday, 09:00 to 18:00 Malta time. Remote video calls are available at the same hours for international clients in compatible time zones.
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            If you are unsure whether your content challenge requires a full retainer or a standalone sprint, book the discovery call first. We will be direct about which engagement is the right fit — including telling you if the answer is &quot;not yet, fix the technical SEO first.&quot; We would rather lose a content retainer engagement than set up a client to fail because the infrastructure was not ready to distribute the content.
          </p>
          <p className="text-sm text-muted-foreground">
            OARC Digital is based in Birkirkara, Malta. All content is produced in-house by our editorial team. We do not offshore writing or use AI to generate client copy. Every article is written by a human editor and reviewed by the account lead before delivery.
          </p>
        </section>

        <section className="mb-12 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
          <h2 className="text-xl font-bold mb-3">Content Marketing vs SEO vs Paid Advertising — the authority play explained</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Content marketing is the engine that <strong className="text-foreground">feeds both SEO and AI search</strong>. Without original editorial content, SEO has no topical authority to build on. Without SEO infrastructure — technical health, internal links, schema — content sits unranked. The two are symbiotic: the OARC content retainer is designed to run in parallel with the SEO retainer from month one.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            <strong className="text-foreground">Paid advertising</strong> amplifies content to audiences that are not yet finding you organically — seeding articles, promoting lead magnets, and retargeting blog readers down the funnel. Content marketing is slower than paid but creates an asset that compounds for years. The typical OARC client splits budget 60% content and SEO, 40% paid — and shifts that split as organic positions fill in.
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

        <RelatedServices slug="/services/content-marketing" />

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Want a Free Content Audit?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">We will plot your topical authority gap against the top three Malta competitors and propose an editorial calendar.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold" data-testid="button-cta-footer">Get the audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
        </div>
      </article>
    </Layout>
  );
}
