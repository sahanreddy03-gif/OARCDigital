import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Video Production | Full-Service Studio | OARC Digital",
  description: "Full-service video production studio. From concept to distribution. Explainer videos, brand films, social ads, testimonials. Watch our reel.",
  alternates: { canonical: "https://oarcdigital.com/services/video-production" },
  openGraph: {
    title: "Video Production | Full-Service Studio | OARC Digital",
    description: "Full-service video production studio. From concept to distribution. Explainer videos, brand films, social ads, testimonials. Watch our reel.",
    url: "https://oarcdigital.com/services/video-production",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production | Full-Service Studio | OARC Digital",
    description: "Full-service video production studio. From concept to distribution. Explainer videos, brand films, social ads, testimonials. Watch our reel.",
  },
};

export default function Page() {
  return <PageContent />;
}
