import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital",
  description: "Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats.",
  alternates: { canonical: "https://oarcdigital.com/blog/hospitality-marketing-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital", subtitle: "Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats." }),
    title: "Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital",
    description: "Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats.",
    url: "https://oarcdigital.com/blog/hospitality-marketing-malta",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital", subtitle: "Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats." })],
    card: "summary_large_image",
    title: "Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital",
    description: "Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/hospitality-marketing-malta"
        title="Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital"
        description="Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
