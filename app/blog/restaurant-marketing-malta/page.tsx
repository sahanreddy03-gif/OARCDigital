import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Restaurant Marketing in Malta: What the Top Venues Do Differently",
  description: "Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them.",
  alternates: { canonical: "https://oarcdigital.com/blog/restaurant-marketing-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Restaurant Marketing in Malta: What the Top Venues Do Differently", subtitle: "Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them." }),
    title: "Restaurant Marketing in Malta: What the Top Venues Do Differently",
    description: "Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them.",
    url: "https://oarcdigital.com/blog/restaurant-marketing-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Restaurant Marketing in Malta: What the Top Venues Do Differently", subtitle: "Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them." })],
    card: "summary_large_image",
    title: "Restaurant Marketing in Malta: What the Top Venues Do Differently",
    description: "Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/restaurant-marketing-malta"
        title="Restaurant Marketing in Malta: What the Top Venues Do Differently"
        description="Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
