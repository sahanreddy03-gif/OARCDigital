import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "CricketPulse India | iGaming Platform Case Study | OARC Digital",
  description: "How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/cricketpulse-india" },
  openGraph: {
    images: ogImageEntry({ title: "CricketPulse India | iGaming Platform Case Study | OARC Digital", subtitle: "How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study." }),
    title: "CricketPulse India | iGaming Platform Case Study | OARC Digital",
    description: "How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study.",
    url: "https://oarcdigital.com/case-studies/cricketpulse-india",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "CricketPulse India | iGaming Platform Case Study | OARC Digital", subtitle: "How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study." })],
    card: "summary_large_image",
    title: "CricketPulse India | iGaming Platform Case Study | OARC Digital",
    description: "How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study.",
  },
};

export default function Page() {
  return <PageContent />;
}
