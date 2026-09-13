import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertTriangle, Clock, Star } from "lucide-react";
import { NAP } from "@/lib/seo/nap";

/* -------------------------------------------------------------- page faqs --- */

const faqs = [
  {
    q: "What is the best marketing agency in Malta?",
    a: "There is no single best agency — there is the best agency for your scope. What can be measured is visibility: on 7 September 2026 we ran seven Malta commercial queries through Google and logged which agencies appeared. 9H Digital appeared on six of the seven; IB Results, Neural AI and Digital Consulting Pros on four each; Switch, 4Sight Group and Ballotra on three. Start there, then use the nine checks in this guide to remove the ones that cannot answer in writing.",
  },
  {
    q: "How do I choose a marketing agency in Malta?",
    a: "Nine checks, in order: a named owner on the account; a written scope of what is produced each month; you keep access to your ads, analytics and Google Business accounts; reporting on enquiries rather than impressions; a term you can live with; a written price; claims you can verify in one search; work shipped in the first 30 days; and a client of the same scope you can actually speak to.",
  },
  {
    q: "How much do marketing agencies in Malta charge?",
    a: "It depends on the structure more than the logo. Single-channel retainers are the cheapest entry, multi-channel operator retainers sit in the middle, full-service with media management at the top. OARC Digital publishes its own range: €297 to €2,997 per month depending on scope. Most agencies publish nothing — which is why the written-scope check exists.",
  },
  {
    q: "Should I hire a Malta agency or an international one?",
    a: "For local demand — Google Business Profile, Maps, local search, walk-ins — a Malta agency has a structural advantage: same market, same rooms, Maltese and English search behaviour. For narrow technical specialisms or media at large scale, an international team can compete on price. Most Malta SMEs do best with local for demand generation and international for a single specialist need.",
  },
  {
    q: "What are the red flags when hiring an agency in Malta?",
    a: "No named person on the account. No written scope. Ad and analytics accounts held in the agency name. Impressions-only reporting. A twelve-month lock-in offered as a discount. Ratings or client counts that do not match their live Google listing. Case studies with no client, no numbers and no dates.",
  },
  {
    q: "Do agencies in Malta guarantee results?",
    a: "Some publish guarantees, most do not. A guarantee is worth its wording: it must name a measurable number, the date it is measured by, and the exact remedy if it is missed. 'We grow your business' is not a guarantee. Ask for the sentence in writing and read the remedy clause before the promise.",
  },
  {
    q: "How long before an agency shows results in Malta?",
    a: "Paid media and Google Business Profile work can move within weeks when tracking is set up before launch. Local rankings in most Maltese towns move faster than in large European cities because competition is thin. Organic search on competitive commercial terms is a quarter-scale job. A page-one organic promise in 30 days tells you about the agency, not the market.",
  },
  {
    q: "Why is OARC Digital on this list?",
    a: "We publish the guide, and dropping ourselves out of it would make the list less useful, not more honest. We are listed first, with the same measured evidence everyone else gets and an explicit disclosure that we wrote this. If a guide like this hides its own author, assume the ranking is advertising.",
  },
];

/* ---------------------------------------------------------------- data ---- */

const methodSteps = [
  {
    step: "1. We measured visibility, not reputation",
    detail:
      "On 7 September 2026 we ran seven commercial Malta queries (marketing agency Malta, digital marketing Malta, digital agency Malta, SEO Malta, social media agency Malta, AI agency Malta, AI chatbot Malta) and recorded which agency domains appeared in the top 20 organic and local results, and at what position. Directories (Clutch, Sortlist, The Manifest, TechBehemoths, Yellow.com.mt) were excluded from the ranking because they are not agencies.",
  },
  {
    step: "2. We read what each agency says about itself",
    detail:
      "Every description below comes from the agency's own website — the title and description their own page serves to Google as of 13 September 2026. We did not write their positioning for them, and we did not credit anyone with a service they do not advertise.",
  },
  {
    step: "3. We published the criteria so you can disagree with us",
    detail:
      "Visibility is one signal, not the truth. An agency can be invisible on Google and still be excellent — referrals are how a lot of Malta work actually moves. That is why the nine checks below carry more weight than the list: they are the part you can run yourself, on any agency, in under an hour, including on us.",
  },
];

const field = [
  {
    name: "OARC Digital",
    site: "oarcdigital.com",
    theySay:
      "Malta's creative + AI systems agency: brand strategy, content production, influencer marketing, AI automation and hospitality technology as one growth system.",
    evidence:
      "Organic #7 on 'marketing agency Malta', local #5 + organic #12 on 'AI agency Malta', organic #7 + local #15 on 'social media agency Malta' (measured 7 Sep 2026).",
    bestFor: "Owner-run companies that need one team producing content, ads, Google Business and AI systems every week.",
    watch: "Hospitality and local services are our deepest sector knowledge; if you need enterprise procurement or iGaming-scale media buying, ask harder questions of us than of anyone else on this list.",
    us: true,
  },
  {
    name: "9H Digital",
    site: "9hdigital.com",
    theySay:
      "Malta's largest creative, tech, AI & digital marketing company — research and projects across complex online challenges.",
    evidence: "Appeared on 6 of the 7 measured Malta queries — the broadest visibility of any agency we measured (best position: #4 local).",
    bestFor: "Larger organisations that want one supplier across creative, technology and marketing, with the headcount to match.",
    watch: "Size is the trade-off: ask who your named owner is and how many accounts they carry.",
  },
  {
    name: "IB Results",
    site: "ibresults.com",
    theySay:
      "Malta digital marketing agency for local businesses — SEO, Google Ads and Meta Ads, fully tracked, with a published 'more clients or we work for free' pledge.",
    evidence: "Appeared on 4 of the 7 measured queries, including #1 local on 'marketing agency Malta'.",
    bestFor: "Local businesses that want tracked lead generation and a written risk-reversal offer.",
    watch: "Pledges live or die on the wording — get the remedy clause in the same email as the promise.",
  },
  {
    name: "Neural AI (neuralai.mt)",
    site: "neuralai.mt",
    theySay: "AI company in Malta — chatbots, machine learning and automation.",
    evidence: "Appeared on 4 of the 7 measured queries and is the only Malta specialist ranking across the AI cluster (#1 organic on AI agency Malta).",
    bestFor: "Companies buying a specific AI build: chatbot, automation or machine-learning work rather than full marketing.",
    watch: "AI without distribution is a cost centre — ask how the build ties to enquiries.",
  },
  {
    name: "Digital Consulting Pros",
    site: "thisisdcp.com",
    theySay: "A full-service digital marketing agency supporting your bottom line: sales.",
    evidence: "Appeared on 4 of the 7 measured queries (best position #2 local).",
    bestFor: "Companies that want a full-service agency relationship with a sales-first framing.",
    watch: "Confirm what is produced per month in numbers, not service categories.",
  },
  {
    name: "Switch",
    site: "switch.com.mt",
    theySay: "Boutique B2B marketing agency for SMBs, operating since 2004, for brands that believe in long-term thinking.",
    evidence: "Appeared on 3 of the 7 measured queries (#1 local on 'marketing agency Malta' in the local pack).",
    bestFor: "B2B companies that want a long-horizon brand and demand programme rather than short-cycle content.",
    watch: "Long-term thinking is a real strategy and a real excuse — insist on 30-day deliverables.",
  },
  {
    name: "4Sight Group",
    site: "4sight.group",
    theySay: "Digital transformation company based in Malta and Cyprus with an international network across marketing and technology.",
    evidence: "Appeared on 3 of the 7 measured queries (#8).",
    bestFor: "Mid-market and enterprise digital transformation work spanning marketing and technology.",
    watch: "Transformation programmes need a named owner inside your business, not only a partner-side lead.",
  },
  {
    name: "Ballotra",
    site: "ballotra.com",
    theySay: "Positioning not verifiable at the time of writing — the site returned a 403 to our check on 13 September 2026.",
    evidence: "Appeared on 3 of the 7 measured queries (#10).",
    bestFor: "Verify directly — we could not read their site, so we will not describe them.",
    watch: "A blocked homepage is a small signal; a blocked homepage plus an unverifiable client list is a bigger one.",
  },
  {
    name: "SEO Malta (seo-malta.com)",
    site: "seo-malta.com",
    theySay: "Full-service SEO agency in Malta — local, technical and content SEO, with a free no-obligation audit.",
    evidence: "Appeared on 2 of the 7 measured queries (#2).",
    bestFor: "Companies buying SEO as a standalone service with a defined technical scope.",
    watch: "Ask for the reporting you will actually see monthly, and who does the work.",
  },
  {
    name: "Brnd Wgn",
    site: "brndwgn.com",
    theySay: "A brand-led creative agency in Malta — 'for the love of brands'.",
    evidence: "Appeared on 2 of the 7 measured queries (#4).",
    bestFor: "Brand identity, naming and creative work where positioning is the deliverable.",
    watch: "Brand work and demand generation are different purchases; check which one you are buying.",
  },
  {
    name: "Ponder & Pitch",
    site: "ponderandpitch.com",
    theySay: "Creative marketing agency in Malta specialising in branding, content creation and digital strategy, including audiovisual production.",
    evidence: "Appeared on 2 of the 7 measured queries (#5).",
    bestFor: "Brands that want campaign creative and production with strategy attached.",
    watch: "Confirm the publishing cadence after the campaign ends — output usually drops off a cliff.",
  },
  {
    name: "GRO",
    site: "gro.com.mt",
    theySay: "A full-service boutique marketing agency helping quality businesses in Malta and Gozo reach their growth potential.",
    evidence: "Appeared on 2 of the 7 measured queries (#8).",
    bestFor: "Malta and Gozo SMEs that want a boutique relationship with senior attention.",
    watch: "Boutique capacity means prioritisation — agree the queue in writing.",
  },
  {
    name: "Steves&Co.",
    site: "stevesandco.com",
    theySay: "A global brand experience and UI agency — strategy, creativity and innovation.",
    evidence: "Appeared on 1 of the 7 measured queries (#3).",
    bestFor: "Product, UI and brand-experience projects with an international posture.",
    watch: "Marketing demand generation is not their stated service — buy what they actually sell.",
  },
  {
    name: "Maltaseo.pro",
    site: "maltaseo.pro",
    theySay: "Practical SEO services for Malta businesses — technical SEO, local search and content strategy, with a free website audit.",
    evidence: "Appeared on 1 of the 7 measured queries (#1 organic on SEO Malta).",
    bestFor: "Pure SEO engagements where ranking is the single deliverable.",
    watch: "SEO alone rarely fixes a demand problem — pair it with distribution.",
  },
  {
    name: "Digital Marketing Malta",
    site: "digitalmarketingmalta.eu",
    theySay: "Positioning not verifiable at the time of writing — the site served a bot-wall interstitial on 13 September 2026.",
    evidence: "Appeared on 2 of the 7 measured queries (#5).",
    bestFor: "Verify directly — we could not read their site.",
    watch: "If a bot wall blocks us, it may also affect how they are seen by crawlers; ask them directly.",
  },
];

const checks = [
  {
    check: "A named owner, introduced before you sign",
    why: "You are buying one person's attention and judgement. If the pitch is delivered by a director and the work by nobody in particular, that is the whole answer.",
  },
  {
    check: "A written scope with numbers in it",
    why: "Posts per month, videos per month, pages per month, ads built, campaigns launched. Categories (content, strategy, growth) are not a scope.",
  },
  {
    check: "You keep every account",
    why: "Google Ads, Analytics, Google Business Profile and the domain must sit in your name with you as owner. An agency that holds them is holding your leverage.",
  },
  {
    check: "Reporting on enquiries or revenue, not reach",
    why: "Impressions and reach can rise every month while the phone stays quiet. Ask which number they are comfortable being judged on, then judge them on it.",
  },
  {
    check: "A term you can leave",
    why: "Month-to-month is the strongest quality signal in the market: an agency that cannot keep you without a lock-in is telling you where its confidence sits.",
  },
  {
    check: "A price where the structure is stated",
    why: "What you pay, what is included, what sits outside the fee, and whether ad spend is managed for a percentage. Vague pricing hides scope disputes.",
  },
  {
    check: "Claims you can verify in one search",
    why: "Check their own Google Business Profile and their review count while you are on the call. If the numbers on the call do not match the live listing, end it kindly.",
  },
  {
    check: "Something shipped in the first 30 days",
    why: "One real artifact — a page fixed, a profile completed, a campaign live. Quality shown beats quality promised, and it is the only evidence of the next twelve months.",
  },
  {
    check: "One client you can speak to, same scope",
    why: "Not a logo wall. One person who bought what you are buying, who will tell you what the first 90 days were actually like.",
  },
];

const priceStructures = [
  { structure: "Single channel (e.g. Google Business Profile, or SEO only)", fits: "First purchase, measurable, easy to exit", ask: "What is produced each month, in numbers?" },
  { structure: "Multi-channel operator retainer", fits: "Most Malta SMEs — content, ads and local presence run together", ask: "Who owns the calendar, and who approves public work?" },
  { structure: "Full service with media management", fits: "Companies already spending meaningfully on ads", ask: "Is the percentage fee tied to a result or to spend?" },
  { structure: "Project / campaign fee", fits: "A launch, a rebrand, a single event or season", ask: "What happens after launch, and who maintains it?" },
  { structure: "Advisory only (consultant)", fits: "You already have someone in-house who executes", ask: "What is produced, versus recommended?" },
];

const related = [
  { href: "/blog/marketing-consultant-malta", label: "Consultant vs Agency: the 7-Question Test" },
  { href: "/blog/marketing-agency-malta", label: "How to Choose an Agency" },
  { href: "/blog/social-media-management-cost-malta", label: "Social Media Costs Malta" },
  { href: "/blog/local-seo-malta", label: "Local SEO Malta" },
];

/* -------------------------------------------------------------- component -- */

export default function BestMarketingAgenciesMalta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white">Best Marketing Agencies Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                Buyer’s Guide · Measured 7 Sep 2026 · Updated 13 Sep 2026
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Best Marketing Agencies in Malta (2026): The Shortlist, the Method and the 9 Checks
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Most “best agency” lists in Malta are sales documents with a ranking drawn from nothing. This one
              publishes how it was built, what we measured, when we measured it — and the nine checks that will remove
              an agency from your shortlist before you ever get on a call.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 12 min read
              </span>
              <span>·</span>
              <span>Rankings measured 7 September 2026 · descriptions read 13 September 2026</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          {/* Direct answer */}
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">The short answer</h2>
            <p className="text-foreground leading-relaxed">
              There is no single best marketing agency in Malta — there is the best agency for your scope. What can be
              measured is visibility: on 7 September 2026, across seven Malta commercial queries, 9H Digital appeared
              most often, with IB Results, Neural AI and Digital Consulting Pros next. OARC Digital publishes this
              guide, appears on the same measured queries, and is listed first with that disclosure. The nine checks
              below matter more than the order of this list, because you can run them on every name here — including
              us.
            </p>
          </div>

          {/* Method */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How this shortlist was built (read this before the list)</h2>
          <div className="space-y-4 mb-6">
            {methodSteps.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2 text-orange-600">{item.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20 mb-12">
            <h3 className="font-bold mb-2">What this list is not</h3>
            <p className="text-muted-foreground leading-relaxed">
              It is not a league table of quality, and nobody paid to be on it. An agency with no search visibility can
              still be the right choice for you — Malta runs on referrals and relationships. Use the list to build a
              shortlist of names worth a conversation, then let the nine checks decide.
            </p>
          </div>

          {/* The field */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The shortlist: 15 agencies, what each one says it does</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Descriptions are the agencies’ own positioning as served on their websites on 13 September 2026. Evidence
            lines are what we measured on 7 September 2026. We have not credited anyone with a service they do not
            advertise, and we have not written a single criticism of a competitor beyond a question worth asking.
          </p>

          <div className="space-y-6 mb-12">
            {field.map((agency, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border ${agency.us ? "border-orange-500/40 bg-orange-500/5" : "bg-card"}`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-muted-foreground">#{i + 1}</span>
                  <h3 className="text-xl font-bold">{agency.name}</h3>
                  {agency.us && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-600 text-xs font-semibold">
                      <Star className="w-3 h-3" /> We publish this guide
                    </span>
                  )}
                  <a
                    href={`https://${agency.site}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm text-orange-500 hover:underline"
                  >
                    {agency.site}
                  </a>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1 text-muted-foreground uppercase text-xs tracking-wider">Their own words</p>
                    <p className="text-muted-foreground leading-relaxed">{agency.theySay}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-muted-foreground uppercase text-xs tracking-wider">Measured evidence</p>
                    <p className="text-muted-foreground leading-relaxed">{agency.evidence}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-muted-foreground uppercase text-xs tracking-wider">Probably right for</p>
                    <p className="text-muted-foreground leading-relaxed">{agency.bestFor}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-muted-foreground uppercase text-xs tracking-wider">The question we would ask</p>
                    <p className="text-muted-foreground leading-relaxed">{agency.watch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checks */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The 9 checks that remove an agency before you call</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            This is the part of the guide you can use today, on any agency in Malta — and on us. Score one point for
            each check the agency passes. Nine is excellent, seven is workable, five or fewer is a decision you will
            regret in month four.
          </p>
          <div className="space-y-3 mb-6">
            {checks.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-card border">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">
                    {i + 1}. {item.check}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-xl bg-card border mb-12">
            <h3 className="font-bold mb-2">How we score on our own checklist</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Named owner before you sign: yes. Written scope with numbers: yes. You keep every account: yes, and ad
              spend is never debited without your approval. Enquiries, not reach: yes. Month-to-month availability:
              yes. Stated price structure: published range of €297–€2,997 per month. Verifiable claims: that is this
              page. Shipped work in 30 days: yes. A client of the same scope you can speak to: on request, with their
              permission.
            </p>
          </div>

          {/* Pricing */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How agencies in Malta price, by structure</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Almost nobody in this market publishes a number, which makes comparison nearly impossible. Judging the
            structure instead of the figure is the workaround — the same structure with two different prices is a
            negotiation, two different structures at the same price are two different products.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Structure</th>
                  <th className="text-left p-3 font-semibold border">Fits</th>
                  <th className="text-left p-3 font-semibold border">Ask this</th>
                </tr>
              </thead>
              <tbody>
                {priceStructures.map((row, i) => (
                  <tr key={i} className="align-top">
                    <td className="p-3 border font-semibold">{row.structure}</td>
                    <td className="p-3 border text-muted-foreground">{row.fits}</td>
                    <td className="p-3 border text-muted-foreground">{row.ask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            For the full breakdown — including the twelve questions to send every agency and the seven-question test
            that tells you whether you need an agency at all — read{" "}
            <Link href="/blog/marketing-consultant-malta" className="text-orange-500 hover:underline">
              Consultant vs Agency in Malta
            </Link>
            , the companion to this guide.
          </p>

          {/* Why us */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why we put ourselves first, and what we actually do differently</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We publish this guide, so hiding our own entry would be dishonest and less useful. Here is the honest
            version of the difference, in one paragraph, so you can test it against the nine checks:
          </p>
          <div className="p-6 rounded-2xl border-2 border-orange-500/30 bg-orange-500/5 mb-6">
            <p className="leading-relaxed mb-4">
              Most agencies in Malta sell a channel: SEO, or social, or ads, or brand. We run one team that owns the
              whole calendar — creative production, paid media, Google Business Profile and AI systems (front desk,
              WhatsApp, follow-up) inside a single retainer, with a human approving every public post and ad spend that
              is never debited without your explicit approval. One operator, three jobs: socials, systems, sales.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              {[
                "Creative, media, Google Business and AI in one retainer — no handoff between the planner and the producer.",
                "A human approves every public post. Nothing unsupervised goes out under your brand.",
                "Month-to-month availability, published range €297–€2,997, no setup fees.",
                "48-hour turnaround on requests, tracked in a shared calendar you can see.",
                "Google Business Profile and review operations run as a system, not as an afterthought.",
                "Reporting on enquiries and bookings, with tracking set up before launch.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            We are not the right answer for every business on this list’s audience. If you need enterprise procurement,
            a 40-person media desk, or pure brand consulting with no execution, one of the names above will serve you
            better — and we would rather you found that out here than three invoices in.
          </p>

          {/* Honesty block */}
          <div className="p-6 rounded-xl bg-card border mb-12">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" /> What we measured — and what we did not
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Visibility measured 7 September 2026, Google desktop, English, Malta, top 20 organic and local results, seven queries. One day is a snapshot, not a trend.</li>
              <li>Agency self-descriptions read from their own websites on 13 September 2026. Two sites blocked our check (Ballotra, Digital Marketing Malta) and one served a bot-wall — we say so instead of guessing.</li>
              <li>We did not test their client work, we did not speak to their clients, and we did not inspect their contracts. That is your job, with the nine checks.</li>
              <li>No agency paid for placement. No link on this page is sponsored, and external links are marked `nofollow`.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4 mb-12">
            {faqs.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related reading</h3>
            <div className="flex flex-wrap gap-3">
              {related.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Put us through the nine checks</h2>
            <p className="text-white/90 mb-6">
              Send us the twelve questions and we will answer all of them in writing — scope, named owner, price
              structure, notice period and what we would stop doing in your current marketing — before you spend a
              euro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`https://wa.me/${NAP.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="font-bold">
                  WhatsApp Us Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  See Published Pricing
                </Button>
              </Link>
            </div>
            <p className="text-white/80 text-sm mt-6">
              {NAP.streetAddressShort}, {NAP.addressLocality} · {NAP.phoneDisplay} · {NAP.email}
            </p>
          </div>
        </article>
      </main>
    </Layout>
  );
}
