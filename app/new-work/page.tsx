/* OARC Design Reminder — Evidence in Motion: New Work is the single combined index; it must preserve the distinction between original OARC records and curated client records. */
import type { Metadata } from "next";
import NewWorkIndex from "@/components/premium-work/NewWorkIndex";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_STUDIES, ORIGINAL_STUDY_PUBLIC_NAMES } from "@/lib/data/premium-work/originalStudies";
import { FEATURED_WORK_RANK } from "@/lib/data/premium-work/portfolioOrder";

const title = "New Work — OARC Digital Client Portfolio | Malta";
const description = "Explore OARC Digital client work across digital marketing, social media management, social video, TikTok campaigns, content production, websites, paid advertising, automation, AI chatbots, digital products, and launch campaigns.";
const keywords = ["digital marketing agency Malta", "social media management Malta", "social media video", "TikTok marketing Malta", "video production Malta", "content creation Malta", "website design Malta", "AI chatbot implementation Malta", "marketing automation Malta", "paid advertising Malta", "digital agency Malta"];

const ANCHOR_ITEMS = [
  { name: "TIFFANY CHAMPAGNE, WINE & BAR", url: "/new-work/tiffany", description: "A social-first campaign system for a Portomaso hospitality venue.", image: "/attached_assets/premium-work/client-media/tiffany-hero.jpg" },
  { name: "PORTOMASO CASINO", url: "/new-work/portomaso-casino", description: "A venue-media showcase for events, atmosphere, and hospitality context.", image: "/attached_assets/premium-work/client-media/portomaso-entrance.jpg" },
  { name: "H360", url: "/new-work/h360", description: "A public OARC hospitality product for connected restaurant moments.", image: "/attached_assets/premium-work/h360-public-product-hub_b339c106.webp" },
  { name: "PJAZZA", url: "/new-work/pjazza", description: "A public live-shopping marketplace built around useful buyer context.", image: "/attached_assets/premium-work/pjazza-food_b3085783.jpg" },
  { name: "DATA FOUNDATION", url: "/new-work/data-foundation", description: "A private data-governance system story with client identity protected.", image: "/attached_assets/premium-work/oarc-confidential-data-foundation_61730536.jpg" },
  { name: "LIVE CONTEXT", url: "/new-work/live-context", description: "A private mobile information-experience engagement.", image: "/attached_assets/premium-work/live-context-sports_486d86c2.jpg" },
];

const COLLECTION_ITEMS = [
  ...ANCHOR_ITEMS,
  ...Object.entries(CLIENT_CASE_STUDIES).map(([slug, story]) => ({
    name: story.name,
    url: `/new-work/${slug}`,
    description: story.intro,
    image: story.image,
  })),
  ...Object.entries(ORIGINAL_STUDIES).map(([slug, story]) => ({
    name: ORIGINAL_STUDY_PUBLIC_NAMES[slug] ?? story.name,
    url: `/new-work/${slug}`,
    description: story.intro,
    image: story.image,
  })),
].filter((item, index, all) => all.findIndex((candidate) => candidate.url === item.url) === index)
  .sort((a, b) => {
    const aSlug = a.url.split("/").pop() ?? "";
    const bSlug = b.url.split("/").pop() ?? "";
    return (FEATURED_WORK_RANK.get(aSlug) ?? Number.MAX_SAFE_INTEGER) - (FEATURED_WORK_RANK.get(bSlug) ?? Number.MAX_SAFE_INTEGER);
  });

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: getHreflangAlternates("/new-work"),
  openGraph: {
    title,
    description,
    url: "https://oarcdigital.com/new-work",
    type: "website",
    images: ogImageEntry({ title: "New Work — OARC Digital Client Portfolio", subtitle: "Brand, content, digital products, systems, events, and launch campaigns." }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl({ title: "New Work — OARC Digital Client Portfolio", subtitle: "Brand, content, digital products, systems, events, and launch campaigns." })],
  },
  robots: { index: true, follow: true },
};

export default function NewWorkPage() {
  return <>
    <SpeakableJsonLd path="/new-work" />
    <RouteSchema type="collection" path="/new-work" title={title} description={description} faqs={SUPPORTING_PAGE_SCHEMAS["/new-work"].faqs} items={COLLECTION_ITEMS} />
    <NewWorkIndex />
  </>;
}
