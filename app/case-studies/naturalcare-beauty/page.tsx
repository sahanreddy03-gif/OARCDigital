import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "NaturalCare Beauty Middle East Awareness Campaign | OARC Digital",
  description: "How OARC Digital raised awareness of NaturalCare Beauty's brand activism across Middle Eastern markets through targeted social media campaigns.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/naturalcare-beauty" },
  openGraph: {
    images: ogImageEntry({ title: "NaturalCare Beauty Middle East Awareness Campaign | OARC Digital", subtitle: "How OARC Digital raised awareness of NaturalCare Beauty's brand activism across Middle Eastern markets through targeted social media campaigns." }),
    title: "NaturalCare Beauty Middle East Awareness Campaign | OARC Digital",
    description: "How OARC Digital raised awareness of NaturalCare Beauty's brand activism across Middle Eastern markets through targeted social media campaigns.",
    url: "https://oarcdigital.com/case-studies/naturalcare-beauty",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "NaturalCare Beauty Middle East Awareness Campaign | OARC Digital", subtitle: "How OARC Digital raised awareness of NaturalCare Beauty's brand activism across Middle Eastern markets through targeted social media campaigns." })],
    card: "summary_large_image",
    title: "NaturalCare Beauty Middle East Awareness Campaign | OARC Digital",
    description: "How OARC Digital raised awareness of NaturalCare Beauty's brand activism across Middle Eastern markets through targeted social media campaigns.",
  },
};

export default function Page() {
  return <PageContent />;
}
