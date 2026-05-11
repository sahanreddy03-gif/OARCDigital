import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "VentureHub Co Brand Reimagination Case Study | OARC Digital",
  description: "How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/venturehub-co" },
  openGraph: {
    images: ogImageEntry({ title: "VentureHub Co Brand Reimagination Case Study | OARC Digital", subtitle: "How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders." }),
    title: "VentureHub Co Brand Reimagination Case Study | OARC Digital",
    description: "How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders.",
    url: "https://oarcdigital.com/case-studies/venturehub-co",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "VentureHub Co Brand Reimagination Case Study | OARC Digital", subtitle: "How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders." })],
    card: "summary_large_image",
    title: "VentureHub Co Brand Reimagination Case Study | OARC Digital",
    description: "How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders.",
  },
};

export default function Page() {
  return <PageContent />;
}
