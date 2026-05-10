import type { Metadata } from "next";
import PageContent from "./PageContent";

const TITLE = "Who We Are | Our Founding Story | OARC Digital Malta";
const DESCRIPTION =
  "The founding story of OARC Digital — why Sahan Reddy started a Birkirkara studio that puts creative, AI engineering, and growth automation under one roof for Maltese businesses.";
const URL = "https://oarcdigital.com/why-us";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    siteName: "OARC Digital",
    images: [
      {
        url: "https://oarcdigital.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Our Founding Story — OARC Digital, founded 2023 in Birkirkara, Malta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://oarcdigital.com/og-image.png"],
  },
};

export default function Page() {
  return <PageContent />;
}
