import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital",
  description: "The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters.",
  alternates: { canonical: "https://oarcdigital.com/blog/google-ads-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital", subtitle: "The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters." }),
    title: "Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital",
    description: "The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters.",
    url: "https://oarcdigital.com/blog/google-ads-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital", subtitle: "The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters." })],
    card: "summary_large_image",
    title: "Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital",
    description: "The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/google-ads-malta"
        title="Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital"
        description="The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
