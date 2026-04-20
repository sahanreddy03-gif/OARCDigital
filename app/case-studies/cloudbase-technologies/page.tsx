import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "CloudBase Technologies AI Adoption Case Study | OARC Digital",
  description: "How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/cloudbase-technologies" },
  openGraph: {
    title: "CloudBase Technologies AI Adoption Case Study | OARC Digital",
    description: "How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams.",
    url: "https://oarcdigital.com/case-studies/cloudbase-technologies",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudBase Technologies AI Adoption Case Study | OARC Digital",
    description: "How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams.",
  },
};

export default function Page() {
  return <PageContent />;
}
