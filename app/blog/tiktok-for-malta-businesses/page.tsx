import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026",
  description: "TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026.",
  alternates: { canonical: "https://oarcdigital.com/blog/tiktok-for-malta-businesses" },
  openGraph: {
    title: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026",
    description: "TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026.",
    url: "https://oarcdigital.com/blog/tiktok-for-malta-businesses",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026",
    description: "TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026.",
  },
};

export default function Page() {
  return <PageContent />;
}
