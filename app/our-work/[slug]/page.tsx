import type { Metadata } from "next";
import WorkCase from "@/components/premium-work/WorkCase";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_STUDIES, ORIGINAL_STUDY_PUBLIC_NAMES } from "@/lib/data/premium-work/originalStudies";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const ANCHOR_METADATA: Record<string, { name: string; intro: string }> = {
  pjazza: { name: "PJAZZA — OARC PRODUCT", intro: "PJAZZA is Malta’s live-shopping marketplace, built by OARC. You watch the product live, ask the seller a question, and pay safely." },
  h360: { name: "H360", intro: "H360 is OARC’s restaurant system. It joins up being found, bookings, calls, orders and repeat guests, so the whole day runs as one." },
  "data-foundation": { name: "OPERATIONS DATA FOUNDATION", intro: "A national distributor had the same product saved ten different ways. Orders went wrong. We cleaned 10,000 records into one clear view." },
  "live-context": { name: "LIVE INFORMATION EXPERIENCE", intro: "A live sports app showed too much at once. Fans could not find the score. We redesigned the screen so the key thing comes first." },
};

const ALL_WORK_SLUGS = Array.from(new Set([
  ...Object.keys(ANCHOR_METADATA),
  ...Object.keys(ORIGINAL_STUDIES),
  ...Object.keys(CLIENT_CASE_STUDIES),
]));

export function generateStaticParams() {
  return ALL_WORK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = CLIENT_CASE_STUDIES[slug] ?? ORIGINAL_STUDIES[slug] ?? ANCHOR_METADATA[slug];
  if (!story) return { title: "Our Work record | OARC Digital" };
  const publicName = ORIGINAL_STUDY_PUBLIC_NAMES[slug] ?? story.name;
  const title = `${publicName} — Our Work | OARC Digital`;
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
    alternates: getHreflangAlternates(`/our-work/${slug}`),
    openGraph: { title, description, url: `https://oarcdigital.com/our-work/${slug}`, type: "article", images: ogImageEntry({ title: publicName, subtitle: story.intro }) },
    twitter: { card: "summary_large_image", title, description, images: [ogImageUrl({ title: publicName, subtitle: story.intro })] },
  };
}

export default async function OurWorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <WorkCase slug={slug} />;
}