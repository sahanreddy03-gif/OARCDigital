import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Content Creation | Video, Photo & Graphics | OARC Digital",
  description: "Professional content production for social media. From video reels and photography to graphics and animations—scroll-stopping content that converts.",
  alternates: { canonical: "https://oarcdigital.com/services/creative" },
  openGraph: {
    title: "Content Creation | Video, Photo & Graphics | OARC Digital",
    description: "Professional content production for social media. From video reels and photography to graphics and animations—scroll-stopping content that converts.",
    url: "https://oarcdigital.com/services/creative",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creation | Video, Photo & Graphics | OARC Digital",
    description: "Professional content production for social media. From video reels and photography to graphics and animations—scroll-stopping content that converts.",
  },
};

export default function Page() {
  return <PageContent />;
}
