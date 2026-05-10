import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "TalentScale Solutions AI Team Case Study | OARC Digital",
  description: "How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/talentscale-solutions" },
  openGraph: {
    images: ogImageEntry({ title: "TalentScale Solutions AI Team Case Study | OARC Digital", subtitle: "How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers." }),
    title: "TalentScale Solutions AI Team Case Study | OARC Digital",
    description: "How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers.",
    url: "https://oarcdigital.com/case-studies/talentscale-solutions",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "TalentScale Solutions AI Team Case Study | OARC Digital", subtitle: "How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers." })],
    card: "summary_large_image",
    title: "TalentScale Solutions AI Team Case Study | OARC Digital",
    description: "How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers.",
  },
};

export default function Page() {
  return <PageContent />;
}
