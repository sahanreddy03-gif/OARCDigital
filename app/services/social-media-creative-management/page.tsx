import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Social Media Management Malta | Creative Content Agency | OARC Digital",
  description: "Social media management and creative content production for Malta businesses. OARC Digital manages Instagram, TikTok, and Facebook with strategy-first content that builds brands and drives customers.",
  alternates: { canonical: "https://oarcdigital.com/services/social-media-creative-management" },
  openGraph: {
    title: "Social Media Management Malta | Creative Content Agency | OARC Digital",
    description: "Social media management and creative content production for Malta businesses. OARC Digital manages Instagram, TikTok, and Facebook with strategy-first content that builds brands and drives customers.",
    url: "https://oarcdigital.com/services/social-media-creative-management",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Malta | Creative Content Agency | OARC Digital",
    description: "Social media management and creative content production for Malta businesses. OARC Digital manages Instagram, TikTok, and Facebook with strategy-first content that builds brands and drives customers.",
  },
};

export default function Page() {
  return <PageContent />;
}
