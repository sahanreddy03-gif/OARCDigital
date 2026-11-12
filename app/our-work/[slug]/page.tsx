import type { Metadata } from "next";
import WorkCase from "@/components/premium-work/WorkCase";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { getCaseFull } from "@/lib/data/premium-work/caseFull";
import { ORIGINAL_STUDIES, ORIGINAL_STUDY_PUBLIC_NAMES } from "@/lib/data/premium-work/originalStudies";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

function clip(text: string, max = 165) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const space = cut.lastIndexOf(" ");
  return cut.slice(0, space > 90 ? space : max).trim();
}

const ANCHOR_METADATA: Record<string, { name: string; intro: string }> = {
  pjazza: { name: "PJAZZA — OARC PRODUCT", intro: "PJAZZA is Malta’s live-shopping marketplace, built by OARC. You watch the product live, ask the seller a question, and pay safely. 100 new sellers joined and 500 buyers started a chat." },
  h360: { name: "H360", intro: "H360 is OARC’s restaurant system. It joins up being found, bookings, calls, orders and repeat guests, so the whole day runs as one." },
  "data-foundation": { name: "OPERATIONS DATA FOUNDATION", intro: "A national distributor had messy product data. We built a system that cleaned over 10,000 records into one clear view. Order errors fell 25% and delays fell 30%." },
  "live-context": { name: "LIVE INFORMATION EXPERIENCE", intro: "We redesigned a live sports app. The score now comes first, on any phone. Fans find live scores 35% faster." },
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
  const full = getCaseFull(slug);
  const headline = full?.headline?.filter(Boolean).join(" ");
  const title = headline ? `${publicName}: ${headline} | OARC Digital` : `${publicName} — Our Work | OARC Digital`;
  const description = clip(full?.summary[0] || ("intro" in story ? story.intro : ""));
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
    openGraph: { title, description, url: `https://oarcdigital.com/our-work/${slug}`, type: "article", images: ogImageEntry({ title: publicName, subtitle: headline || story.intro }) },
    twitter: { card: "summary_large_image", title, description, images: [ogImageUrl({ title: publicName, subtitle: headline || story.intro })] },
  };
}

export default async function OurWorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <WorkCase slug={slug} />;
}