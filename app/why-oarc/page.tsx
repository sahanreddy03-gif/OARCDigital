import type { Metadata } from "next";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Clock, Users, BarChart3, Banknote } from "lucide-react";
import Link from "next/link";
import { createBreadcrumbSchema } from "@/utils/advancedSchema";
import { createServiceSchema } from "@/utils/structuredData";
import { buildFAQ } from "@/lib/schema";

const TITLE = "Why Choose OARC Over Other Marketing Agencies in Malta";
const DESCRIPTION =
  "A side-by-side comparison of OARC Digital and the traditional Malta agency model. Speed, cost, AI integration, scalability, and reporting — see the difference before you book a call.";
const URL = "https://oarcdigital.com/why-oarc";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    siteName: "OARC Digital",
    images: [
      {
        url: "https://oarcdigital.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Why Choose OARC Over Other Marketing Agencies in Malta — comparison page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://oarcdigital.com/og-image.png"],
  },
};

const COMPARISON_ROWS: { feature: string; oarc: string; traditional: string }[] = [
  { feature: "Typical turnaround", oarc: "2–3 working days for a finished asset", traditional: "2–3 weeks per round" },
  { feature: "Working hours", oarc: "AI agents handle inbound 24/7", traditional: "Office hours, Mon–Fri" },
  { feature: "Scaling output", oarc: "Spin up extra capacity in hours", traditional: "Hire, train, retain — months" },
  { feature: "Monthly cost", oarc: "40–60% below the Malta agency average", traditional: "€4k–€12k retainers as standard" },
  { feature: "AI inside the workflow", oarc: "Built into every step, audited by humans", traditional: "Manual or bolted on after the fact" },
  { feature: "Revisions", oarc: "Unlimited within the brief", traditional: "Capped at 2–3 rounds" },
  { feature: "Reporting cadence", oarc: "Live dashboard, daily AI summaries", traditional: "Monthly PDF report" },
  { feature: "Strategy + execution", oarc: "Same team, one weekly review", traditional: "Strategy team hands off to delivery" },
  { feature: "Local Malta context", oarc: "Birkirkara HQ, MGA/MFSA familiar", traditional: "Often outsourced overseas" },
  { feature: "Lock-in", oarc: "Month-to-month, no minimum term", traditional: "6–12 month retainer minimum" },
];

const FAQS: { question: string; answer: string }[] = [
  {
    question: "How is OARC Digital different from a traditional Malta marketing agency?",
    answer:
      "Three concrete differences. First, AI agents handle the repeatable parts of the work (drafts, briefs, reporting, first-pass design) so the human team spends its time on strategy and quality control instead of admin. Second, we operate month-to-month with no minimum retainer. Third, the same small team owns both strategy and execution, which means one weekly review covers everything instead of three different account managers.",
  },
  {
    question: "Is the quality really the same as a full-service agency?",
    answer:
      "It is the same or better on the metrics that matter to a paying client: turnaround time, revision speed, and reporting transparency. Every asset still goes through a human creative director before it leaves the studio. The AI shortens the boring parts of the workflow; it does not replace the judgement.",
  },
  {
    question: "Why is OARC cheaper than other Malta agencies for the same scope?",
    answer:
      "Two reasons. We do not carry the overhead of a 20-person studio with a Sliema office and four account managers per client. And our AI agents do the work that a junior copywriter, a junior designer, and a reporting analyst would otherwise be billed for. The savings are real, not a discount on the same cost base.",
  },
  {
    question: "Can I keep my existing agency and use OARC for one piece of the puzzle?",
    answer:
      "Yes. About a third of OARC clients run us alongside an incumbent agency for a specific surface — usually paid social, AI lead-handling, or rapid creative production. We will sign an NDA, brief in writing, and deliver in their template if needed.",
  },
  {
    question: "How fast can OARC actually start?",
    answer:
      "First call within 48 hours, signed brief inside a week, first deliverable inside 14 days on a standard engagement. We do not ask for a six-month commitment to find out if we are a fit.",
  },
  {
    question: "Where are you based and who will I actually work with?",
    answer:
      "OARC Digital is based at Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010 — a short drive from Sliema, Mosta, Mriehel, and Valletta. You will work with a named pod of three people (strategist, creative lead, AI engineer) who stay with the account from kickoff through reporting.",
  },
  {
    question: "What kind of Malta businesses get the most value from OARC?",
    answer:
      "Businesses that need fast, high-volume output and are tired of paying agency rates for slow turnaround. iGaming, financial services, hospitality, real-estate, professional-services, and SaaS scale-ups have been the strongest fit. The common factor is wanting weekly output and weekly reporting instead of monthly.",
  },
  {
    question: "How do I see proof before signing anything?",
    answer:
      "Read the case studies for measured outcomes, then book a 30-minute audit call. We will pull live data on your current Google, Meta, and LinkedIn presence and show you exactly where the gap is — no slide deck needed.",
  },
];

export default function Page() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Why OARC", url: "/why-oarc" },
  ]);

  const serviceSchema = createServiceSchema(
    "AI-Powered Marketing — Comparison vs Traditional Malta Agencies",
    "Comparison of OARC Digital's AI-native delivery model against the traditional Malta marketing agency model: turnaround, cost, scalability, AI integration, reporting cadence, and lock-in terms.",
    "Marketing & Advertising"
  );

  const faqSchema = buildFAQ(FAQS, true);

  // Competitor-comparison schema: an ItemList of comparison rows so search
  // engines (and answer engines) can extract the head-to-head dimensions
  // without having to parse the rendered HTML table. Each row is a
  // PropertyValue with an "OARC Digital" value and a generic
  // "Traditional Malta marketing agency" baseline. We deliberately do NOT
  // name competitor brands — the comparison is against the operating
  // model, which is what the page itself argues.
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "OARC Digital vs Traditional Malta Marketing Agencies",
    description:
      "Side-by-side comparison of OARC Digital and the typical Malta marketing agency operating model across ten dimensions buyers ask about most often.",
    url: URL,
    numberOfItems: COMPARISON_ROWS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    about: [
      { "@type": "Organization", name: "OARC Digital", url: "https://oarcdigital.com" },
      { "@type": "Thing", name: "Traditional Malta marketing agency" },
    ],
    itemListElement: COMPARISON_ROWS.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "PropertyValue",
        name: row.feature,
        propertyID: row.feature.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        value: `OARC Digital: ${row.oarc}. Traditional Malta agency: ${row.traditional}.`,
        valueReference: [
          { "@type": "PropertyValue", name: "OARC Digital", value: row.oarc },
          { "@type": "PropertyValue", name: "Traditional Malta agency", value: row.traditional },
        ],
      },
    })),
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: URL,
    name: TITLE,
    description: DESCRIPTION,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
  };

  const combinedSchema = [breadcrumbSchema, serviceSchema, comparisonSchema, faqSchema, speakableSchema];

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-green-500 mb-6" data-testid="text-hero-eyebrow">
                The Comparison Page
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                data-speakable
                data-testid="heading-hero"
              >
                Why Choose <span className="text-green-500" style={{ fontFamily: "var(--font-heatrobox)" }}>OARC</span> Over Other Marketing Agencies in Malta
              </h1>
              <p className="text-xl text-zinc-300 mb-8" data-speakable data-testid="text-hero-description">
                Built for businesses that need weekly output, weekly reporting, and month-to-month flexibility — not a six-month retainer with a quarterly review.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/case-studies">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700" data-testid="button-hero-case-studies">
                    See proof in case studies <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-white/30 text-white" data-testid="button-hero-pricing">
                    Compare pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Headline metrics */}
        <section className="py-16 bg-background border-b">
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div data-testid="metric-speed">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold">2–3 days</div>
              <p className="text-sm text-muted-foreground mt-1">Typical asset turnaround</p>
            </div>
            <div data-testid="metric-cost">
              <Banknote className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold">40–60%</div>
              <p className="text-sm text-muted-foreground mt-1">Below Malta agency average</p>
            </div>
            <div data-testid="metric-team">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold">3-person</div>
              <p className="text-sm text-muted-foreground mt-1">Named pod per account</p>
            </div>
            <div data-testid="metric-reporting">
              <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold">Daily</div>
              <p className="text-sm text-muted-foreground mt-1">AI reporting summaries</p>
            </div>
          </div>
        </section>

        {/* Main comparison table */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-testid="heading-comparison-table">
              OARC Digital vs the typical Malta agency
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              The ten dimensions Maltese buyers ask about most often when they call to compare. No competitor names — just the operating model.
            </p>

            <div className="bg-card rounded-lg border overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 font-semibold border-b">
                <div>Dimension</div>
                <div className="text-center text-green-600">OARC Digital</div>
                <div className="text-center text-muted-foreground">Traditional Malta agency</div>
              </div>

              {COMPARISON_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 p-6 border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                  data-testid={`comparison-row-${index}`}
                >
                  <div className="font-medium">{row.feature}</div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{row.oarc}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{row.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Employees vs Traditional Hiring */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">AI Employees vs Traditional Hiring</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              When the comparison is "another agency" vs "hire someone in-house", the maths is different. Here is the side-by-side most Malta SMEs ask us to walk through.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 p-8 rounded-lg border-2 border-green-500">
                <div className="text-green-600 font-bold mb-2">OARC AI EMPLOYEES</div>
                <h3 className="text-2xl font-bold mb-6">Productive in days, not months</h3>
                <ul className="space-y-3">
                  {[
                    "Live and answering inbound the same week",
                    "Available outside Malta business hours",
                    "Handles peak volume without overtime",
                    "No onboarding, no notice period",
                    "Consistent tone of voice and SLA",
                    "Capacity scales the same day you need it",
                    "Month-to-month, cancel anytime",
                    "70–80% lower than a full-time hire",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2" data-testid={`oarc-bullet-${index}`}>
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border">
                <div className="text-muted-foreground font-bold mb-2">TRADITIONAL HIRING</div>
                <h3 className="text-2xl font-bold mb-6">Slow, expensive, and hard to scale</h3>
                <ul className="space-y-3">
                  {[
                    "2–3 months to recruit on the Malta market",
                    "Limited to 40 hours a week per head",
                    "Capacity caps when the team is at peak",
                    "2–4 weeks of paid onboarding before output",
                    "Variable performance week to week",
                    "Slow and costly to scale up or down",
                    "Notice periods, contracts, and HR admin",
                    "Salary, NI, benefits, equipment, training",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground" data-testid={`trad-bullet-${index}`}>
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What "Other Malta Agencies" usually means */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center" data-testid="heading-other-agencies">
              What "other Malta agencies" usually means
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Maltese buyers comparing agencies are usually choosing between three models. We will not name competitors here — every Malta marketing director already has the shortlist — but the operating differences are what actually shape the work.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card border rounded-lg p-6" data-testid="model-traditional">
                <h3 className="text-lg font-bold mb-2">The traditional studio</h3>
                <p className="text-sm text-muted-foreground">
                  20–40 staff, monthly retainer, account manager between you and the work. Strong on brand prestige; slow on iteration. Good fit if you need one polished campaign per quarter.
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6" data-testid="model-freelance">
                <h3 className="text-lg font-bold mb-2">The freelance stack</h3>
                <p className="text-sm text-muted-foreground">
                  A designer, a Meta ads buyer, and a developer stitched together by you. Cheapest on paper; most fragile in practice. Good fit while revenue is under €250k a year.
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6 border-green-500" data-testid="model-oarc">
                <h3 className="text-lg font-bold mb-2 text-green-600">The OARC model</h3>
                <p className="text-sm text-muted-foreground">
                  A small in-house pod backed by AI agents. Same speed as freelancers, same coherence as a studio, no retainer lock-in. Good fit when you need weekly output and weekly reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Headline savings */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-savings">See your potential savings</h2>
            <p className="text-xl text-muted-foreground mb-12">The three numbers most clients quote back to us after a month with OARC.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl font-bold text-green-600 mb-2">40–60%</div>
                <div className="text-sm text-muted-foreground">Cost vs the Malta agency average</div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl font-bold text-green-600 mb-2">10×</div>
                <div className="text-sm text-muted-foreground">Faster asset turnaround</div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI agent availability</div>
              </div>
            </div>

            <Link href="/pricing">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" data-testid="button-pricing-cta">
                See full pricing <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center" data-testid="heading-faq">Common questions buyers ask before switching</h2>
            <div className="space-y-6">
              {FAQS.map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border" data-testid={`faq-${index}`}>
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-background border-t">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Where buyers go next</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/case-studies" className="group bg-card border rounded-lg p-6 hover-elevate block" data-testid="link-related-case-studies">
                <div className="text-green-600 font-bold text-xs tracking-widest uppercase mb-2">Proof</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors">Case studies</h3>
                <p className="text-sm text-muted-foreground">Real Malta clients, real revenue numbers, real time-to-launch. Read the work before you book the call.</p>
              </Link>
              <Link href="/pricing" className="group bg-card border rounded-lg p-6 hover-elevate block" data-testid="link-related-pricing">
                <div className="text-green-600 font-bold text-xs tracking-widest uppercase mb-2">Pricing</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors">Transparent pricing</h3>
                <p className="text-sm text-muted-foreground">Every tier listed, every inclusion spelled out. No discovery-call paywall before you see a number.</p>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Link href="/services/hire-ai-employees" className="group bg-card border rounded-lg p-6 hover-elevate block">
                <div className="text-green-600 font-bold text-xs tracking-widest uppercase mb-2">AI employees</div>
                <h3 className="text-base font-bold mb-2 group-hover:text-green-600 transition-colors">Hire AI employees</h3>
                <p className="text-sm text-muted-foreground">SDR, support, admin, and analyst agents — live in days.</p>
              </Link>
              <Link href="/ai-agents" className="group bg-card border rounded-lg p-6 hover-elevate block">
                <div className="text-green-600 font-bold text-xs tracking-widest uppercase mb-2">AI agents</div>
                <h3 className="text-base font-bold mb-2 group-hover:text-green-600 transition-colors">AI agent suite</h3>
                <p className="text-sm text-muted-foreground">The full agent roster across sales, support, and ops.</p>
              </Link>
              <Link href="/why-us" className="group bg-card border rounded-lg p-6 hover-elevate block">
                <div className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-2">Our story</div>
                <h3 className="text-base font-bold mb-2 group-hover:text-orange-500 transition-colors">Who we are</h3>
                <p className="text-sm text-muted-foreground">The founder origin story — why OARC was built the way it was.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see the comparison on your own numbers?</h2>
            <p className="text-xl mb-8 text-white/90">Book a 30-minute audit and we will pull live data on your current presence — no slide deck, no pitch.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" data-testid="button-cta-contact">
                  Book the audit call
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-case-studies">
                  Read case studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
