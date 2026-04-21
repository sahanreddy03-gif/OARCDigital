"use client";

import Link from "next/link";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import FAQSection from "@/components/FAQSection";
import type { ResearchEntry, ResearchSection } from "@/lib/research/data";

const DEFAULT_CITATIONS = [
  {
    label: "National Statistics Office Malta",
    href: "https://nso.gov.mt",
    description: "Official Maltese economic and demographic data.",
  },
  {
    label: "Malta Tourism Authority",
    href: "https://www.mta.com.mt",
    description: "Tourism and hospitality statistics for Malta.",
  },
  {
    label: "MFSA — Malta Financial Services Authority",
    href: "https://www.mfsa.mt",
    description: "Regulatory and financial sector data.",
  },
  {
    label: "Eurostat — Digital Economy and Society",
    href: "https://ec.europa.eu/eurostat",
    description: "EU-level digital readiness benchmarks for comparison.",
  },
  {
    label: "Google Keyword Planner & Ahrefs",
    href: "https://ads.google.com/intl/en_us/home/tools/keyword-planner/",
    description: "Search-volume and keyword-difficulty triangulation.",
  },
];

const DEFAULT_RELATED = [
  {
    title: "SEO services in Malta",
    href: "/services/seo-services",
    description:
      "Local SEO, technical SEO, and content programmes built specifically for the Maltese market.",
  },
  {
    title: "AI agents & automation",
    href: "/ai-agents",
    description:
      "Production AI workflows for sales, support, bookings and operations — built and run by OARC Digital.",
  },
  {
    title: "Marketing strategy",
    href: "/services/marketing-strategy",
    description:
      "Channel mix, positioning, and the operating model behind every benchmark in our reports.",
  },
  {
    title: "OARC Intelligence diagnostics",
    href: "/diagnostics",
    description:
      "Free 14-day pilot to size the revenue at risk in your business — anchored to data like this.",
  },
];

function ChartBlock({ chart }: { chart: NonNullable<ResearchSection["chart"]> }) {
  if (chart.type === "pie") {
    return (
      <div className="my-8 rounded-lg border border-[#1a2e29]/10 bg-white p-6">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1a2e29]/60 mb-4">
          {chart.title}
        </h4>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={chart.data}
              dataKey={chart.series[0].key}
              nameKey={chart.xKey}
              outerRadius={120}
              label
            >
              {chart.data.map((_, i) => (
                <Cell
                  key={i}
                  fill={chart.series[i % chart.series.length]?.color ?? "#ff914d"}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chart.type === "line") {
    return (
      <div className="my-8 rounded-lg border border-[#1a2e29]/10 bg-white p-6">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1a2e29]/60 mb-4">
          {chart.title}
        </h4>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={chart.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a2e29" strokeOpacity={0.1} />
            <XAxis dataKey={chart.xKey} stroke="#1a2e29" />
            <YAxis stroke="#1a2e29" />
            <Tooltip />
            <Legend />
            {chart.series.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="my-8 rounded-lg border border-[#1a2e29]/10 bg-white p-6">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1a2e29]/60 mb-4">
        {chart.title}
      </h4>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={chart.data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1a2e29" strokeOpacity={0.1} />
          <XAxis dataKey={chart.xKey} stroke="#1a2e29" />
          <YAxis stroke="#1a2e29" />
          <Tooltip />
          <Legend />
          {chart.series.map((s) => (
            <Bar key={s.key} dataKey={s.key} name={s.label} fill={s.color} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function ResearchPageContent({ entry }: { entry: ResearchEntry }) {
  return (
    <main className="bg-[#f5f0e6] min-h-screen" data-testid={`research-${entry.slug}`}>
      <header className="bg-[#1a2e29] text-white px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-white/60 mb-6 flex items-center gap-2 flex-wrap"
          >
            <Link href="/" className="hover:text-[#ff914d]">
              Home
            </Link>
            <span>/</span>
            <Link href="/research" className="hover:text-[#ff914d]">
              Research
            </Link>
            <span>/</span>
            <span className="text-white/80">{entry.category}</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-[#ff914d]/40 text-[#ff914d] text-xs uppercase tracking-wider">
            <span>OARC Digital Research</span>
            <span className="opacity-60">·</span>
            <span>{entry.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {entry.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8 voice-summary">
            {entry.voiceSummary}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <span>Published {entry.publishedAt}</span>
            {entry.updatedAt && entry.updatedAt !== entry.publishedAt && (
              <span>· Updated {entry.updatedAt}</span>
            )}
            <span>· {entry.readingTime}</span>
          </div>
        </div>
      </header>

      <section className="px-4 -mt-10 md:-mt-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {entry.keyStats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg bg-white shadow-sm p-5 border border-[#1a2e29]/5"
              data-testid={`stat-${s.label}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#1a2e29]">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-[#1a2e29]/60 mt-2">
                {s.label}
              </div>
              {s.sub && (
                <div className="text-xs text-[#1a2e29]/50 mt-1">{s.sub}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <article className="px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-[#1a2e29] mb-10 voice-summary">
            {entry.summary}
          </p>
          {entry.sections.map((sec) => (
            <section key={sec.heading} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e29] mb-4">
                {sec.heading}
              </h2>
              {sec.body.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg leading-relaxed text-[#1a2e29]/85 mb-4"
                >
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="list-disc pl-6 space-y-2 my-4 text-[#1a2e29]/85">
                  {sec.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {sec.chart && <ChartBlock chart={sec.chart} />}
            </section>
          ))}

          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e29] mb-4">
              Sources & methodology
            </h2>
            <p className="text-[#1a2e29]/85 mb-4 leading-relaxed">
              The numbers in this report combine OARC Digital's own primary
              research (surveys, anonymised client data, and SERP tracking)
              with the following public sources. Where ranges are reported,
              they reflect the inter-quartile range of the underlying sample
              rather than absolute extremes.
            </p>
            <ul className="space-y-3 text-[#1a2e29]/85">
              {(entry.citations ?? DEFAULT_CITATIONS).map((c) => (
                <li key={c.href} className="leading-relaxed">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold text-[#1a2e29] hover:text-[#ff914d] underline underline-offset-4"
                    data-testid={`link-citation-${c.label}`}
                  >
                    {c.label}
                  </a>
                  {c.description && (
                    <span className="text-[#1a2e29]/65"> — {c.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e29] mb-4">
              Related OARC Digital services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {(entry.relatedServices ?? DEFAULT_RELATED).map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block rounded-lg border border-[#1a2e29]/15 bg-white p-5 hover:border-[#ff914d] hover:shadow-md transition-all"
                  data-testid={`link-related-${s.href.replace(/\//g, "-")}`}
                >
                  <div className="font-semibold text-[#1a2e29] mb-2">{s.title}</div>
                  <div className="text-sm text-[#1a2e29]/70 leading-relaxed">
                    {s.description}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="rounded-lg bg-[#1a2e29] text-white p-8 mt-14">
            <h3 className="text-2xl font-bold mb-3">Want the underlying dataset?</h3>
            <p className="text-white/80 mb-5">
              We share the anonymised dataset behind every OARC Digital research report
              with Maltese operators and researchers on request.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#ff914d] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#ff914d]/90 transition-colors"
              data-testid="link-research-contact"
            >
              Request the dataset
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        faqs={entry.faqs}
        title="Frequently asked"
        subtitle="The questions Maltese operators ask us most about this report."
        schemaId={`faq-research-${entry.slug}`}
      />
    </main>
  );
}
