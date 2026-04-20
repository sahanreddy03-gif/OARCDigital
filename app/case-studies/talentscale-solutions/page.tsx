import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "TalentScale Solutions AI Team Case Study | OARC Digital",
  description: "How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/talentscale-solutions" },
  openGraph: {
    title: "TalentScale Solutions AI Team Case Study | OARC Digital",
    description: "How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers.",
    url: "https://oarcdigital.com/case-studies/talentscale-solutions",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentScale Solutions AI Team Case Study | OARC Digital",
    description: "How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers.",
  },
};

export default function Page() {
  return <PageContent />;
}
