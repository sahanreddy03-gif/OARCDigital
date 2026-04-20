import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital",
  description: "The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters.",
  alternates: { canonical: "https://oarcdigital.com/blog/google-ads-malta" },
  openGraph: {
    title: "Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital",
    description: "The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters.",
    url: "https://oarcdigital.com/blog/google-ads-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital",
    description: "The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters.",
  },
};

export default function Page() {
  return <PageContent />;
}
