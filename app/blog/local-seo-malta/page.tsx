import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital",
  description: "The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day.",
  alternates: { canonical: "https://oarcdigital.com/blog/local-seo-malta" },
  openGraph: {
    title: "Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital",
    description: "The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day.",
    url: "https://oarcdigital.com/blog/local-seo-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Malta: Rank #1 on Google Maps in Your Area | OARC Digital",
    description: "The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day.",
  },
};

export default function Page() {
  return <PageContent />;
}
