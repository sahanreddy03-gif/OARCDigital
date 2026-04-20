import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Paid Advertising | Performance Marketing | OARC Digital",
  description: "Elite paid advertising management from OARC Digital. Drive ROI with data-driven campaigns across Google, Meta, LinkedIn, and programmatic platforms.",
  alternates: { canonical: "https://oarcdigital.com/services/paid-advertising" },
  openGraph: {
    title: "Paid Advertising | Performance Marketing | OARC Digital",
    description: "Elite paid advertising management from OARC Digital. Drive ROI with data-driven campaigns across Google, Meta, LinkedIn, and programmatic platforms.",
    url: "https://oarcdigital.com/services/paid-advertising",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Advertising | Performance Marketing | OARC Digital",
    description: "Elite paid advertising management from OARC Digital. Drive ROI with data-driven campaigns across Google, Meta, LinkedIn, and programmatic platforms.",
  },
};

export default function Page() {
  return <PageContent />;
}
