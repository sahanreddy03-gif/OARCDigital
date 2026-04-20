import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Maison Lumière TikTok Luxury Fragrance Campaign | OARC Digital",
  description: "How OARC Digital successfully introduced luxury fragrance brand Maison Lumière to the TikTok community, reaching millions through authentic influencer partnerships.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/maison-lumiere" },
  openGraph: {
    title: "Maison Lumière TikTok Luxury Fragrance Campaign | OARC Digital",
    description: "How OARC Digital successfully introduced luxury fragrance brand Maison Lumière to the TikTok community, reaching millions through authentic influencer partnerships.",
    url: "https://oarcdigital.com/case-studies/maison-lumiere",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Lumière TikTok Luxury Fragrance Campaign | OARC Digital",
    description: "How OARC Digital successfully introduced luxury fragrance brand Maison Lumière to the TikTok community, reaching millions through authentic influencer partnerships.",
  },
};

export default function Page() {
  return <PageContent />;
}
