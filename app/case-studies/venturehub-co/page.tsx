import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "VentureHub Co Brand Reimagination Case Study | OARC Digital",
  description: "How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/venturehub-co" },
  openGraph: {
    title: "VentureHub Co Brand Reimagination Case Study | OARC Digital",
    description: "How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders.",
    url: "https://oarcdigital.com/case-studies/venturehub-co",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "VentureHub Co Brand Reimagination Case Study | OARC Digital",
    description: "How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders.",
  },
};

export default function Page() {
  return <PageContent />;
}
