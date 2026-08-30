/* OARC Design Reminder — New Work detail routes preserve the curated Premium Work record, source boundary, and evidence language. */
import type { Metadata } from "next";
import WorkCase from "@/components/premium-work/WorkCase";
import RouteSchema from "@/components/RouteSchema";
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

const CASE_METADATA: Record<string, { title: string; keywords: string[] }> = {
  tiffany: {
    title: "Tiffany Champagne, Wine & Bar — Hospitality Campaign Case Study | OARC Digital",
    keywords: ["Tiffany Champagne Wine & Bar", "hospitality campaign Malta", "social media content Malta", "video production Malta", "restaurant reservations"],
  },
  "portomaso-casino": {
    title: "Portomaso Casino — Venue Content & Events Case Study | OARC Digital",
    keywords: ["Portomaso Casino", "venue content Malta", "event campaign Malta", "hospitality video production", "casino events"],
  },
  h360: {
    title: "H360 — Restaurant Marketing System & Product Story | OARC Digital",
    keywords: ["H360 restaurant system", "restaurant marketing Malta", "restaurant booking system", "hospitality product", "restaurant digital transformation"],
  },
  pjazza: {
    title: "PJAZZA — Live Shopping Marketplace Product Story | OARC Digital",
    keywords: ["PJAZZA", "live shopping marketplace Malta", "marketplace product design", "web app development Malta", "digital product build"],
  },
  "data-foundation": {
    title: "Data Foundation — Data Governance Systems Case Study | OARC Digital",
    keywords: ["data governance Malta", "data quality systems", "ERP CRM integration", "workflow automation Malta", "custom software development"],
  },
  "live-context": {
    title: "Live Context — Mobile Product Experience Case Study | OARC Digital",
    keywords: ["mobile product design Malta", "mobile app development", "live information UX", "information experience design"],
  },
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
  const title = CASE_METADATA[slug]?.title ?? `${publicName} — New Work Case Study | OARC Digital`;
  const description = story.intro;
  const keywords = CASE_METADATA[slug]?.keywords ?? [
    `${publicName} OARC Digital case study`,
    "digital marketing agency Malta",
    "social media management Malta",
    "video production Malta",
    "content production and campaigns",
    "website design Malta",
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
  const story = CLIENT_CASE_STUDIES[slug] ?? ORIGINAL_STUDIES[slug] ?? ANCHOR_METADATA[slug];
  const publicName = story ? ORIGINAL_STUDY_PUBLIC_NAMES[slug] ?? story.name : "New Work record";
  const title = CASE_METADATA[slug]?.title ?? `${publicName} — New Work Case Study | OARC Digital`;
  const keywords = CASE_METADATA[slug]?.keywords ?? [`${publicName} OARC Digital case study`, "digital marketing agency Malta", "social media management Malta", "video production Malta", "website design Malta", "marketing automation Malta"];
  const image = story && "image" in story ? story.image : undefined;
  const sourceUrl = story && "source" in story ? story.source : undefined;
  const sourceName = story && "sourceLabel" in story ? story.sourceLabel : undefined;
  return <>
    <RouteSchema type="caseStudy" path={`/new-work/${slug}`} title={title} description={story?.intro ?? "OARC Digital New Work case study."} image={image} keywords={keywords} sourceUrl={sourceUrl} sourceName={sourceName} />
    <WorkCase slug={slug} />
  </>;
}
