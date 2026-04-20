import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Design Systems | Scalable UI Frameworks | OARC Digital",
  description: "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.",
  alternates: { canonical: "https://oarcdigital.com/services/design-systems" },
  openGraph: {
    title: "Design Systems | Scalable UI Frameworks | OARC Digital",
    description: "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.",
    url: "https://oarcdigital.com/services/design-systems",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Systems | Scalable UI Frameworks | OARC Digital",
    description: "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.",
  },
};

export default function Page() {
  return <PageContent />;
}
