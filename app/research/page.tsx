import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { RESEARCH } from "@/lib/research/data";
import { buildBreadcrumb, combine } from "@/lib/schema";

const BASE = "https://oarcdigital.com";

export const metadata: Metadata = {
  title: "Malta Marketing & AI Research | OARC Digital",
  description:
    "Original benchmarks and reports on marketing, AI, and SEO in Malta — from restaurant booking sources to agency pricing to small business tech readiness.",
  alternates: { canonical: `${BASE}/research` },
  openGraph: {
    title: "Malta Marketing & AI Research | OARC Digital",
    description:
      "Original benchmarks and reports on marketing, AI, and SEO in Malta — from OARC Digital's research desk.",
    url: `${BASE}/research`,
    type: "website",
  },
};

export default function ResearchIndex() {
  const graph = combine(
    buildBreadcrumb([
      { name: "Home", url: "/" },
      { name: "Research", url: "/research" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "OARC Digital Research",
      url: `${BASE}/research`,
      description:
        "Original benchmarks on marketing, AI, and SEO in Malta from OARC Digital.",
      hasPart: RESEARCH.map((r) => ({
        "@type": "Article",
        headline: r.title,
        url: `${BASE}/research/${r.slug}`,
        datePublished: r.publishedAt,
      })),
    },
  );

  return (
    <>
      <Script
        id="research-index-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <main className="bg-[#f5f0e6] min-h-screen" data-testid="page-research-index">
        <header className="bg-[#1a2e29] text-white px-4 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-[#ff914d]/40 text-[#ff914d] text-xs uppercase tracking-wider">
              OARC Digital Research
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Original Malta marketing, AI &amp; SEO research
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              We publish original benchmarks and surveys on the Maltese market —
              hospitality AI adoption, agency pricing, SEO search volume, restaurant
              booking sources, and SME tech readiness. Free to read, free to cite,
              and updated quarterly.
            </p>
          </div>
        </header>

        <section className="px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH.map((r) => (
              <Link
                key={r.slug}
                href={`/research/${r.slug}`}
                className="block rounded-lg bg-white p-7 border border-[#1a2e29]/10 hover:border-[#ff914d] hover:shadow-md transition-all"
                data-testid={`card-research-${r.slug}`}
              >
                <div className="text-xs uppercase tracking-wider text-[#ff914d] mb-3">
                  {r.category} · {r.readingTime}
                </div>
                <h2 className="text-2xl font-bold text-[#1a2e29] mb-3 leading-tight">
                  {r.title}
                </h2>
                <p className="text-[#1a2e29]/75 mb-4 leading-relaxed">{r.summary}</p>
                <div className="text-sm font-semibold text-[#ff914d]">Read the report →</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
