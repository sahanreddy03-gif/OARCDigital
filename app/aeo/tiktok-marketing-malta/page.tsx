import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "TikTok Marketing Malta | OARC Digital",
  description: "TikTok strategy, content production, and growth for Malta businesses. OARC Digital builds TikTok presence that reaches local and tourist audiences.",
  alternates: { canonical: "https://oarcdigital.com/aeo/tiktok-marketing-malta" },
  openGraph: {
    title: "TikTok Marketing Malta | OARC Digital",
    description: "TikTok strategy, content production, and growth for Malta businesses. OARC Digital builds TikTok presence that reaches local and tourist audiences.",
    url: "https://oarcdigital.com/aeo/tiktok-marketing-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Marketing Malta | OARC Digital",
    description: "TikTok strategy, content production, and growth for Malta businesses. OARC Digital builds TikTok presence that reaches local and tourist audiences.",
  },
};

export default function Page() {
  return <PageContent />;
}
