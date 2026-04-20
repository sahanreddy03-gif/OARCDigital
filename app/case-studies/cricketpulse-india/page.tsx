import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "CricketPulse India | iGaming Platform Case Study | OARC Digital",
  description: "How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/cricketpulse-india" },
  openGraph: {
    title: "CricketPulse India | iGaming Platform Case Study | OARC Digital",
    description: "How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study.",
    url: "https://oarcdigital.com/case-studies/cricketpulse-india",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CricketPulse India | iGaming Platform Case Study | OARC Digital",
    description: "How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study.",
  },
};

export default function Page() {
  return <PageContent />;
}
