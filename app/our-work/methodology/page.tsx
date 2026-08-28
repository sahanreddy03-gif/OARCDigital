/** OARC Design Reminder — the canonical Work methodology makes the collection’s evidence standard visible and search-readable. */
import type { Metadata } from "next";
import Methodology from "@/components/premium-work/Methodology";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

export const metadata: Metadata = {
  title: "How OARC Documents Its Work | OARC Digital Malta",
  description: "OARC Digital’s public documentation standard for products, client records, confidential engagements, and Original Studies.",
  alternates: getHreflangAlternates("/our-work/methodology"),
  openGraph: {
    title: "How OARC Documents Its Work | OARC Digital Malta",
    description: "The OARC standard for making work, sources, visuals, and evidence reviewable.",
    url: "https://oarcdigital.com/our-work/methodology",
    type: "article",
    images: ogImageEntry({
      title: "How OARC Documents Its Work",
      subtitle: "The public evidence standard behind OARC Work records.",
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: "How OARC Documents Its Work | OARC Digital Malta",
    description: "The OARC standard for making work, sources, visuals, and evidence reviewable.",
    images: [ogImageUrl({
      title: "How OARC Documents Its Work",
      subtitle: "The public evidence standard behind OARC Work records.",
    })],
  },
};

export default function OurWorkMethodologyPage() {
  return <>
    <SpeakableJsonLd path="/our-work/methodology" />
    <RouteSchema
      type="page"
      path="/our-work/methodology"
      title="How OARC Documents Its Work | OARC Digital Malta"
      description="OARC Digital’s public documentation standard for products, client records, confidential engagements, and Original Studies."
    />
    <Methodology />
  </>;
}
