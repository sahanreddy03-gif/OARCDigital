import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital",
  description: "Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats.",
  alternates: { canonical: "https://oarcdigital.com/blog/hospitality-marketing-malta" },
  openGraph: {
    title: "Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital",
    description: "Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats.",
    url: "https://oarcdigital.com/blog/hospitality-marketing-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital",
    description: "Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats.",
  },
};

export default function Page() {
  return <PageContent />;
}
