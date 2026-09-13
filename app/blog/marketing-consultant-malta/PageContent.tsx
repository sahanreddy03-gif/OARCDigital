import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { NAP } from "@/lib/seo/nap";

/* -------------------------------------------------------------- page faqs --- */

const faqs = [
  {
    q: "What does a marketing consultant in Malta actually do?",
    a: "They sell judgement, not production. Typically: audit the channels you already pay for, decide what to stop and what to start, write the plan, then meet you monthly to keep it moving. They usually do not edit video, build ads or post daily. If nobody executes the plan, you have bought a document.",
  },
  {
    q: "How much does a marketing consultant in Malta cost?",
    a: "It depends on the buying model more than the title. Advisory is bought by the day or as a capped monthly retainer; execution retainers are priced monthly by scope. Our published range is €297 to €2,997 per month.",
  },
  {
    q: "Should I hire a consultant or an agency in Malta?",
    a: "Ask who executes. If a capable person in-house will do the work, a consultant is cheaper and faster — you are renting senior judgement. If nobody internal will produce posts, ads, video and pages, you need an operator retainer, because advice does not fill an empty calendar.",
  },
  {
    q: "How long before marketing in Malta shows results?",
    a: "Paid media can show measurable traffic and enquiries within the first month if tracking is set up first. Google Business Profile and review work often moves within weeks in most Maltese towns. Organic search on competitive commercial terms is a multi-month job. Anyone promising page-one organic results in 30 days is a warning sign.",
  },
  {
    q: "What is the cheapest way to get marketing done in Malta?",
    a: "Cheapest per hour is a freelancer or a student; cheapest per outcome is usually a single-channel scope with one owner and a published scope. The expensive option is paying a retainer and a freelancer and a consultant at once with nobody accountable for the calendar.",
  },
  {
    q: "Can I buy one channel only, like Google Business Profile management?",
    a: "Yes, and it is often the right first purchase. A single-channel scope is measurable, easy to judge and easy to exit. Prove it works for 60 to 90 days, then scale to a second channel rather than buying a full-service retainer on faith.",
  },
  {
    q: "What should I ask before signing with an agency in Malta?",
    a: "Who owns the account by name, what is produced each month counted in deliverables, what the notice period is, who holds the ad and analytics accounts, what is measured and from which tool, and what the handover looks like. Get all six in writing before you pay a setup fee.",
  },
  {
    q: "Do you take commission on ad spend?",
    a: "No. Ad spend is paid from your own account, with your payment method, and we do not debit spend without an explicit approval from you. Our fee covers the work: strategy, production, publishing and reporting.",
  },
];

/* ---------------------------------------------------------------- data ---- */

const models = [
  {
    model: "Consultant (advisory)",
    buy: "Judgement and a decision framework — audits, plans, monthly steering",
    commitment: "Day rate or monthly advisory retainer, hours capped",
    best: "You have a capable marketer in-house who will execute",
    breaks: "Nobody internally produces the work — you get a plan, not output",
  },
  {
    model: "In-house hire",
    buy: "Full-time capacity, one skill set, your payroll",
    commitment: "Salary + tools + management time",
    best: "Marketing is a permanent, daily function with real volume",
    breaks: "Hiring takes months, and one person is rarely creative + media + AI",
  },
  {
    model: "Agency operator",
    buy: "A team that plans, produces and publishes — same people, one fee",
    commitment: "Monthly retainer, months not years, published range",
    best: "You need output every week and nobody internal is producing it",
    breaks: "You buy the wrong operator — no named owner, no published scope",
  },
];

const test = [
  "Nobody internally has marketing execution in their job description.",
  "The last three months produced no new posts, pages or campaigns you can point at.",
  "You cannot name who approves public work, or it changes every week.",
  "Your Google Business Profile has not been posted to or reviewed in 30 days.",
  "You pay for ads but cannot say what a lead costs you this month.",
  "You have a strategy document dated more than six months ago that was never executed.",
  "You have already bought advice once and the situation has not moved.",
];

const first30 = [
  {
    week: "Week 1 — Audit with numbers, not adjectives",
    detail:
      "Named accounts, real figures: what the ads cost, what the profile did, which pages got impressions and which got clicks. The deliverable is a written list of what to stop, and two or three things that will move fastest. If the audit quotes only industry benchmarks and never your own numbers, the audit is a template.",
  },
  {
    week: "Week 2 — A plan with owners and dates",
    detail:
      "Every line has a name against it and a date it ships. Themes are not a plan. If the plan reads like a mood board — awareness, engagement, storytelling — send it back and ask what will be on the calendar in week three.",
  },
  {
    week: "Week 3 — The first shipment",
    detail:
      "One real piece live: a page fixed, a profile completed, a campaign launched, a video published. This is the quality gate. You are allowed to judge the whole engagement on this single artifact, because it is the only evidence of what the work will look like every month afterwards.",
  },
  {
    week: "Week 4 — The measurement decision",
    detail:
      "A number you both agreed to, taken from a tool you own. Next 30 days are judged on it. No vanity metric — impressions and reach can rise while enquiries fall, and that has to be visible to you, not buried in a monthly deck.",
  },
];

const costs = [
  {
    structure: "Day rate / one-off audit",
    what: "A single deliverable: channel audit, plan, or a working session",
    whoFits: "Owner-run business that will execute themselves",
    watch: "No follow-up. The plan ages the day the file is sent",
  },
  {
    structure: "Monthly advisory retainer",
    what: "A capped number of hours, meetings and a plan update",
    whoFits: "Company with an in-house marketer who needs senior direction",
    watch: "Hours are consumed by meetings; check what gets produced",
  },
  {
    structure: "Monthly execution retainer",
    what: "Produced work: content, video, ads, pages, profile management",
    whoFits: "Most Malta SMEs — the work is not happening without a team",
    watch: "Scope must state exact monthly output and turnaround time",
  },
  {
    structure: "Performance % on spend",
    what: "A management percentage of advertising budget",
    whoFits: "Businesses already spending at a level worth managing",
    watch: "Percentage rewards spend, not results — tie it to a target",
  },
];

const quoteLines = [
  "What is produced each month, counted explicitly (posts, videos, pages, campaigns).",
  "Who produces it — named people, not a department.",
  "Who approves public work, and how long approval takes.",
  "What the setup fee covers, or state that there is none.",
  "The minimum term and the notice period.",
  "Which accounts you own and keep access to on day one.",
  "What is reported, how often, and from which tool.",
  "What happens in a month where nothing performs.",
  "What the exit looks like: handover, assets, access.",
];

const redFlags = [
  "No named person on your account — you are sold by a director and served by nobody.",
  "A price with no stated scope: you cannot tell what you are buying per month.",
  "Ad, analytics and Google Business accounts held in the agency name, not yours.",
  "Reporting in impressions and reach only, never enquiries or revenue.",
  "A 12-month lock-in offered as a discount.",
  "Ratings, review counts or client numbers that do not match their live listing.",
  "A guarantee that cannot be written as a precise sentence with a number and a date.",
];

const greenFlags = [
  "A named owner on the account, introduced before you sign.",
  "Published pricing, or a written scope that lands within one working day.",
  "You keep, and are given, access to every account and asset.",
  "Reporting on enquiries and revenue, with the tracking set up before launch.",
  "Month-to-month availability, and a written exit path.",
  "Work shipped inside the first 30 days that you can judge with your own eyes.",
  "Claims you can verify in one search — including their own Google listing.",
];

const rfp = [
  "Which named person will own this account, and how many accounts do they own?",
  "What exactly is produced each month, counted in deliverables?",
  "What is your turnaround time on a request, in writing?",
  "What is your minimum term and notice period?",
  "Who holds the ad, analytics and Google Business accounts?",
  "What was the last result you delivered for a business like mine, and what did it move?",
  "What would you stop doing in my current marketing in the first two weeks?",
  "How is success measured, in one number, and where is it read from?",
  "What is your total fee, and what sits outside that fee?",
  "What happens if the work underperforms for two consecutive months?",
  "Can I speak to one client who bought this exact scope, not just a logo?",
  "What does the handover look like if I leave?",
];

const bundle = [
  "One team plans, produces and publishes — no handoff between strategist and executor.",
  "Creative, paid media, Google Business and AI systems inside the same retainer.",
  "A human approves every public post before it goes out — nothing unsupervised.",
  "Month-to-month availability, no lock-in, published range from €297 to €2,997 per month.",
  "48-hour turnaround on requests, tracked work in a shared calendar.",
  "Profit stays with you: we never debit ad spend without an explicit approval.",
];

const related = [
  { href: "/blog/best-marketing-agencies-malta", label: "Best Marketing Agencies in Malta" },
  { href: "/blog/marketing-agency-malta", label: "How to Choose an Agency" },
  { href: "/blog/social-media-management-cost-malta", label: "Social Media Costs Malta" },
  { href: "/blog/local-seo-malta", label: "Local SEO Malta" },
];

/* -------------------------------------------------------------- component -- */

export default function MarketingConsultantMalta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        {/* Hero */}
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
              <span className="text-white">Marketing Consultant Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                Buyer’s Guide · Updated 13 September 2026
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Hiring a Marketing Consultant in Malta: What It Costs, What They Do, and When an Agency Beats One
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Advisory is cheap and fast. Execution is slow and expensive. Most Malta businesses buy the wrong one,
              then blame the market. This guide gives you the decision test, the price structures, the copy-paste RFP
              and the four checks to run before you pay anyone.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 9 min read
              </span>
              <span>·</span>
              <span>Published by OARC Digital, Birkirkara</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          {/* Direct answer — snippet and answer-engine block */}
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
              The short answer
            </h2>
            <p className="text-foreground leading-relaxed">
              A marketing consultant in Malta sells judgement: audits, plans and monthly steering, priced by the day or
              as a capped advisory retainer. An agency operator sells output: the same team plans, produces and
              publishes for a monthly retainer. Choose the consultant when you have someone in-house who will execute;
              choose the operator when nobody internally produces the work. OARC Digital publishes a monthly retainer
              range of €297 to €2,997.
            </p>
          </div>

          {/* Quick picks */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The three ways to buy marketing in Malta</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Model</th>
                  <th className="text-left p-3 font-semibold border">What you actually buy</th>
                  <th className="text-left p-3 font-semibold border">Commitment</th>
                  <th className="text-left p-3 font-semibold border">Best when</th>
                  <th className="text-left p-3 font-semibold border">Where it breaks</th>
                </tr>
              </thead>
              <tbody>
                {models.map((row, i) => (
                  <tr key={i} className="align-top">
                    <td className="p-3 border font-semibold">{row.model}</td>
                    <td className="p-3 border text-muted-foreground">{row.buy}</td>
                    <td className="p-3 border text-muted-foreground">{row.commitment}</td>
                    <td className="p-3 border text-muted-foreground">{row.best}</td>
                    <td className="p-3 border text-muted-foreground">{row.breaks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Notice what separates them: not the job title, not the size of the invoice — <strong>who executes</strong>.
            Malta is a small market where a well-connected generalist can look like an expert for years. The question
            that protects you is never “do they know marketing”, it is “who is going to produce the work, and what is
            their name”.
          </p>

          {/* Decision test */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The 7-question test: consultant or operator?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Answer honestly. This is the whole decision — everything else is negotiating.
          </p>
          <div className="space-y-3 mb-6">
            {test.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                <span className="text-orange-500 font-bold">{i + 1}.</span>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20 mb-12">
            <h3 className="font-bold mb-2">How to read it</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>0–1 yes:</strong> you are executing, so buy judgement — a consultant is the cheaper, faster
              purchase and you will actually use the plan. <strong>2 yes:</strong> you are at the edge; buy advisory and
              prove you can execute one month of it before committing more. <strong>3 or more yes:</strong> stop
              shopping for advice. You have a production gap, and no consultant fixes a production gap. You are buying
              an operator, or you are buying another plan that ages in a drawer.
            </p>
          </div>

          {/* First 30 days */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What the first 30 days should look like</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Use this as the acceptance test for any consultant or operator you hire. The sequence is deliberately
            front-loaded: you should see shipped work before your second invoice, not after your third month.
          </p>
          <div className="space-y-4 mb-12">
            {first30.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2 text-orange-600">{item.week}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Cost structures */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What it costs: read the structure, not the number</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Four structures are sold in Malta. The same title can sit behind any of them — “consultant” has appeared on
            all four invoices — so identify the structure first, then judge whether the number is fair for it.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Structure</th>
                  <th className="text-left p-3 font-semibold border">What it covers</th>
                  <th className="text-left p-3 font-semibold border">Fits</th>
                  <th className="text-left p-3 font-semibold border">What to watch</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((row, i) => (
                  <tr key={i} className="align-top">
                    <td className="p-3 border font-semibold">{row.structure}</td>
                    <td className="p-3 border text-muted-foreground">{row.what}</td>
                    <td className="p-3 border text-muted-foreground">{row.whoFits}</td>
                    <td className="p-3 border text-muted-foreground">{row.watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 rounded-xl bg-card border mb-12">
            <h3 className="font-bold mb-3">Our published numbers, so you have something to compare against</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              OARC Digital publishes its retainer range instead of hiding behind “request a quote” theatre:{" "}
              <strong>€297 to €2,997 per month</strong>, moving with scope and how many channels run. A single-channel
              scope sits at the low end; creative plus paid media plus Google Business plus AI systems sits at the top.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That is not a claim that €297 buys a full agency department — it does not, and any operator telling you
              otherwise is selling you a report. What it does buy is produced work with a named owner and a published
              scope, which is more than most quotes in this market will put in writing.
            </p>
          </div>

          {/* Quote lines */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">9 lines that must be explicit in any quote</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Copy these into an email and send them back to whoever quoted you. The gaps you find are the answer.
          </p>
          <div className="grid md:grid-cols-1 gap-3 mb-12">
            {quoteLines.map((line, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border">
                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">{line}</p>
              </div>
            ))}
          </div>

          {/* Flags */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Red flags and green flags</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border">
              <h3 className="font-bold text-red-500 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Red flags
              </h3>
              <div className="space-y-3">
                {redFlags.map((flag, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{flag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border">
              <h3 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Green flags
              </h3>
              <div className="space-y-3">
                {greenFlags.map((flag, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{flag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* When an operator wins */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            When an agency operator beats a consultant — and why we built ours this way
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We are an operator, so read this section with that in mind. The reason we publish it anyway is that the
            alternative to us is usually not another operator — it is a consultant plus a freelancer plus a family
            member, stitched together with nobody accountable for the calendar.
          </p>
          <div className="p-6 rounded-2xl border-2 border-orange-500/30 bg-orange-500/5 mb-6">
            <h3 className="font-bold mb-4 text-lg">What is inside an OARC operator retainer</h3>
            <div className="space-y-3">
              {bundle.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-orange-500/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The blunt version: if you answer three or more of the seven questions above with a yes, the missing
                piece is production capacity. A consultant will describe that gap accurately and then bill you for
                describing it. An operator removes it. Those are different purchases and they should be priced
                differently.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            If you already have a marketer in-house, do not hire an operator — you will pay twice for the same
            capacity. Buy senior judgement by the month, keep approval in your own hands, and use the RFP below to make
            sure the execution actually lands.
          </p>

          {/* RFP */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The 12-question RFP — copy it, send it</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Send the same twelve questions to every consultant and agency you are considering, and compare the written
            answers side by side. Speed and specificity are the tell: a real operator answers in hours, in detail, and
            is comfortable naming people and numbers.
          </p>
          <div className="space-y-3 mb-12">
            {rfp.map((q, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                <span className="text-orange-500 font-bold w-6 flex-shrink-0">{i + 1}.</span>
                <p className="text-sm">{q}</p>
              </div>
            ))}
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

          {/* Provenance */}
          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-3">Where the numbers in this guide come from</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Written by OARC Digital, an operator based at {NAP.streetAddressShort}, {NAP.addressLocality}. Published
              figures are our own published retainer range and the terms we publish on our pricing page. The buyer-side
              checks, the 30-day sequence and the RFP are the questions we are asked in real sales conversations and
              the conditions clients hold us to. We have deliberately not published invented market averages: where we
              cannot source a number, we say so rather than filling the gap with a confident-sounding figure.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reviewed 13 September 2026. This page is maintained — prices, terms and the RFP are checked against our
              own published pages each quarter.
            </p>
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
            <h2 className="text-2xl font-bold mb-3">Send us the twelve questions</h2>
            <p className="text-white/90 mb-6">
              Email or WhatsApp the RFP above and we will answer all twelve in writing, with a named owner and a scope,
              before you spend a euro. If a consultant is the right buy for your situation we will say so.
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
