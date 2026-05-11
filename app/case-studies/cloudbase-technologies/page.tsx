import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "CloudBase Technologies AI Adoption Case Study | OARC Digital",
  description: "How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/cloudbase-technologies" },
  openGraph: {
    images: ogImageEntry({ title: "CloudBase Technologies AI Adoption Case Study | OARC Digital", subtitle: "How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams." }),
    title: "CloudBase Technologies AI Adoption Case Study | OARC Digital",
    description: "How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams.",
    url: "https://oarcdigital.com/case-studies/cloudbase-technologies",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "CloudBase Technologies AI Adoption Case Study | OARC Digital", subtitle: "How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams." })],
    card: "summary_large_image",
    title: "CloudBase Technologies AI Adoption Case Study | OARC Digital",
    description: "How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams.",
  },
};

export default function Page() {
  return <PageContent />;
}
