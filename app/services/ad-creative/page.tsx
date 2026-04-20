import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Ad Creative Design | Performance Marketing Creative | OARC Digital",
  description: "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.",
  alternates: { canonical: "https://oarcdigital.com/services/ad-creative" },
  openGraph: {
    title: "Ad Creative Design | Performance Marketing Creative | OARC Digital",
    description: "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.",
    url: "https://oarcdigital.com/services/ad-creative",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Creative Design | Performance Marketing Creative | OARC Digital",
    description: "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.",
  },
};

export default function Page() {
  return <PageContent />;
}
