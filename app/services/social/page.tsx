import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Organic Social Media Management | Strategy & Community | OARC Digital",
  description: "Build engaged communities that drive real business results. Daily content, community management, and data-driven strategy to grow your organic presence.",
  alternates: { canonical: "https://oarcdigital.com/services/social" },
  openGraph: {
    title: "Organic Social Media Management | Strategy & Community | OARC Digital",
    description: "Build engaged communities that drive real business results. Daily content, community management, and data-driven strategy to grow your organic presence.",
    url: "https://oarcdigital.com/services/social",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Social Media Management | Strategy & Community | OARC Digital",
    description: "Build engaged communities that drive real business results. Daily content, community management, and data-driven strategy to grow your organic presence.",
  },
};

export default function Page() {
  return <PageContent />;
}
