/* OARC Design Reminder — New Work detail routes preserve the curated Premium Work record, source boundary, and evidence language. */
import type { Metadata } from "next";
import WorkCase from "@/components/premium-work/WorkCase";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_STUDIES, ORIGINAL_STUDY_PUBLIC_NAMES } from "@/lib/data/premium-work/originalStudies";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const ANCHOR_METADATA: Record<string, { name: string; intro: string }> = {
  pjazza: { name: "PJAZZA", intro: "A live-shopping marketplace designed to move the useful question closer to a local buying decision." },
  h360: { name: "H360", intro: "A connected restaurant system designed to turn discovery, bookings, guest questions, orders, and operations into a clearer day." },
  "data-foundation": { name: "DATA FOUNDATION", intro: "A private client engagement focused on moving fragmented records toward governed data." },
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
  const publicName = ORIGINAL_STUDY_PUBLIC_NAMES[slug] ?? story.name;
  const title = `${publicName} — New Work | OARC Digital`;
  const description = story.intro;
  const keywords = [
    `${publicName} OARC Digital case study`,
    "digital marketing agency Malta",
    "social media management Malta",
    "social video and TikTok marketing",
    "content production and campaigns",
    "website and AI chatbot implementation",
    "marketing automation Malta",
  ];
  return {
    title,
    description,
    keywords,
    alternates: getHreflangAlternates(`/new-work/${slug}`),
    openGraph: { title, description, url: `https://oarcdigital.com/new-work/${slug}`, type: "article", images: ogImageEntry({ title: publicName, subtitle: story.intro }) },
    twitter: { card: "summary_large_image", title, description, images: [ogImageUrl({ title: publicName, subtitle: story.intro })] },
  };
}

export default async function NewWorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <WorkCase slug={slug} />;
}
