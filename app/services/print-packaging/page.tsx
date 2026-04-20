import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Print & Packaging Design | Physical Product Design | OARC Digital",
  description: "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.",
  alternates: { canonical: "https://oarcdigital.com/services/print-packaging" },
  openGraph: {
    title: "Print & Packaging Design | Physical Product Design | OARC Digital",
    description: "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.",
    url: "https://oarcdigital.com/services/print-packaging",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Print & Packaging Design | Physical Product Design | OARC Digital",
    description: "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.",
  },
};

export default function Page() {
  return <PageContent />;
}
