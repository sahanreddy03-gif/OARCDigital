import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Maison Lumière TikTok Luxury Fragrance Campaign | OARC Digital",
  description: "How OARC Digital successfully introduced luxury fragrance brand Maison Lumière to the TikTok community, reaching millions through authentic influencer partnerships.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/maison-lumiere" },
  openGraph: {
    images: ogImageEntry({ title: "Maison Lumière TikTok Luxury Fragrance Campaign | OARC Digital", subtitle: "How OARC Digital successfully introduced luxury fragrance brand Maison Lumière to the TikTok community, reaching millions through authentic influencer partnerships." }),
    title: "Maison Lumière TikTok Luxury Fragrance Campaign | OARC Digital",
    description: "How OARC Digital successfully introduced luxury fragrance brand Maison Lumière to the TikTok community, reaching millions through authentic influencer partnerships.",
    url: "https://oarcdigital.com/case-studies/maison-lumiere",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Maison Lumière TikTok Luxury Fragrance Campaign | OARC Digital", subtitle: "How OARC Digital successfully introduced luxury fragrance brand Maison Lumière to the TikTok community, reaching millions through authentic influencer partnerships." })],
    card: "summary_large_image",
    title: "Maison Lumière TikTok Luxury Fragrance Campaign | OARC Digital",
    description: "How OARC Digital successfully introduced luxury fragrance brand Maison Lumière to the TikTok community, reaching millions through authentic influencer partnerships.",
  },
};

export default function Page() {
  return <PageContent />;
}
