import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital",
  description: "The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day.",
  alternates: { canonical: "https://oarcdigital.com/blog/local-seo-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital", subtitle: "The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day." }),
    title: "Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital",
    description: "The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day.",
    url: "https://oarcdigital.com/blog/local-seo-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital", subtitle: "The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day." })],
    card: "summary_large_image",
    title: "Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital",
    description: "The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/local-seo-malta"
        title="Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital"
        description="The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
