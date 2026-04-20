import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "ProGamer Network Social Media Campaign | OARC Digital",
  description: "How OARC Digital created engaging social media campaigns for ProGamer Network, connecting with gaming communities across multiple platforms.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/progamer-network" },
  openGraph: {
    title: "ProGamer Network Social Media Campaign | OARC Digital",
    description: "How OARC Digital created engaging social media campaigns for ProGamer Network, connecting with gaming communities across multiple platforms.",
    url: "https://oarcdigital.com/case-studies/progamer-network",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProGamer Network Social Media Campaign | OARC Digital",
    description: "How OARC Digital created engaging social media campaigns for ProGamer Network, connecting with gaming communities across multiple platforms.",
  },
};

export default function Page() {
  return <PageContent />;
}
