import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "GamingTech Elite Gaming Marketing Campaign | OARC Digital",
  description: "How OARC Digital created compelling gaming-focused marketing campaigns for GamingTech Elite, reaching gaming enthusiasts worldwide.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/gamingtech-elite" },
  openGraph: {
    title: "GamingTech Elite Gaming Marketing Campaign | OARC Digital",
    description: "How OARC Digital created compelling gaming-focused marketing campaigns for GamingTech Elite, reaching gaming enthusiasts worldwide.",
    url: "https://oarcdigital.com/case-studies/gamingtech-elite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GamingTech Elite Gaming Marketing Campaign | OARC Digital",
    description: "How OARC Digital created compelling gaming-focused marketing campaigns for GamingTech Elite, reaching gaming enthusiasts worldwide.",
  },
};

export default function Page() {
  return <PageContent />;
}
