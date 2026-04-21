import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { RESEARCH, RESEARCH_BY_SLUG } from "@/lib/research/data";
import {
  buildArticle,
  buildBreadcrumb,
  buildDataset,
  buildFAQ,
  combine,
} from "@/lib/schema";
import ResearchPageContent from "./PageContent";

const BASE = "https://oarcdigital.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return RESEARCH.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = RESEARCH_BY_SLUG[slug];
  if (!r) return {};
  const url = `${BASE}/research/${slug}`;
  return {
    title: `${r.title} | OARC Digital`,
    description: r.description,
    alternates: { canonical: url },
    openGraph: {
      title: r.title,
      description: r.description,
      url,
      type: "article",
      publishedTime: r.publishedAt,
      modifiedTime: r.updatedAt ?? r.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: r.title,
      description: r.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = RESEARCH_BY_SLUG[slug];
  if (!r) notFound();

  const url = `${BASE}/research/${slug}`;
  const graph = combine(
    buildBreadcrumb([
      { name: "Home", url: "/" },
      { name: "Research", url: "/research" },
      { name: r.title, url: `/research/${slug}` },
    ]),
    buildArticle({
      headline: r.title,
      description: r.description,
      url,
      datePublished: r.publishedAt,
      dateModified: r.updatedAt,
      speakable: true,
    }),
    buildDataset({
      name: r.title,
      description: r.description,
      url,
      datePublished: r.publishedAt,
      keywords: r.keywords,
      variableMeasured: r.keyStats.map((s) => s.label),
    }),
    buildFAQ(r.faqs, true),
  );

  return (
    <>
      <Script
        id={`research-${slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <ResearchPageContent entry={r} />
    </>
  );
}
