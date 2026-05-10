import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026",
  description: "TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026.",
  alternates: { canonical: "https://oarcdigital.com/blog/tiktok-for-malta-businesses" },
  openGraph: {
    images: ogImageEntry({ title: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026", subtitle: "TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026." }),
    title: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026",
    description: "TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026.",
    url: "https://oarcdigital.com/blog/tiktok-for-malta-businesses",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026", subtitle: "TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026." })],
    card: "summary_large_image",
    title: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026",
    description: "TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/tiktok-for-malta-businesses"
        title="TikTok for Malta Businesses: The No-Nonsense Guide for 2026"
        description="TikTok isn't just for teenagers. Here's how Malta businesses are using it to get 50,000+ views and turn them into actual customers in 2026."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
