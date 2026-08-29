/* OARC Design Reminder — New Work detail routes preserve the curated Premium Work record, source boundary, and evidence language. */
import type { Metadata } from "next";
import WorkCase from "@/components/premium-work/WorkCase";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_STUDIES } from "@/lib/data/premium-work/originalStudies";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const ANCHOR_METADATA: Record<string, { name: string; intro: string }> = {
  pjazza: { name: "PJAZZA", intro: "A live-shopping marketplace designed to move the useful question closer to a local buying decision." },
  h360: { name: "H360", intro: "A connected restaurant system designed to turn discovery, bookings, guest questions, orders, and operations into a clearer day." },
  "data-foundation": { name: "DATA FOUNDATION", intro: "A restricted story about moving fragmented records toward governed data." },
  "live-context": { name: "LIVE CONTEXT", intro: "A mobile reading-order redesign for a fast live-information environment." },
};

const ALL_NEW_WORK_SLUGS = Array.from(new Set([
  ...Object.keys(ANCHOR_METADATA),
  ...Object.keys(ORIGINAL_STUDIES),
  ...Object.keys(CLIENT_CASE_STUDIES),
]));

export function generateStaticParams() {
  return ALL_NEW_WORK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = CLIENT_CASE_STUDIES[slug] ?? ORIGINAL_STUDIES[slug] ?? ANCHOR_METADATA[slug];
  if (!story) return { title: "New Work record | OARC Digital" };
  const title = `${story.name} — New Work | OARC Digital`;
  const description = story.intro;
  return {
    title,
    description,
    alternates: getHreflangAlternates(`/new-work/${slug}`),
    openGraph: { title, description, url: `https://oarcdigital.com/new-work/${slug}`, type: "article", images: ogImageEntry({ title: story.name, subtitle: story.intro }) },
    twitter: { card: "summary_large_image", title, description, images: [ogImageUrl({ title: story.name, subtitle: story.intro })] },
  };
}

export default async function NewWorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <WorkCase slug={slug} />;
}
