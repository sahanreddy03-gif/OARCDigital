import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Volta Home Product Launch Campaign Case Study | OARC Digital",
  description: "How OARC Digital sold out product lines for Volta Home through innovative social media campaigns and influencer partnerships across multiple platforms.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/volta-home" },
  openGraph: {
    images: ogImageEntry({ title: "Volta Home Product Launch Campaign Case Study | OARC Digital", subtitle: "How OARC Digital sold out product lines for Volta Home through innovative social media campaigns and influencer partnerships across multiple platforms." }),
    title: "Volta Home Product Launch Campaign Case Study | OARC Digital",
    description: "How OARC Digital sold out product lines for Volta Home through innovative social media campaigns and influencer partnerships across multiple platforms.",
    url: "https://oarcdigital.com/case-studies/volta-home",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Volta Home Product Launch Campaign Case Study | OARC Digital", subtitle: "How OARC Digital sold out product lines for Volta Home through innovative social media campaigns and influencer partnerships across multiple platforms." })],
    card: "summary_large_image",
    title: "Volta Home Product Launch Campaign Case Study | OARC Digital",
    description: "How OARC Digital sold out product lines for Volta Home through innovative social media campaigns and influencer partnerships across multiple platforms.",
  },
};

export default function Page() {
  return <PageContent />;
}
