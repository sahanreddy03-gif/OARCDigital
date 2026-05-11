import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Lead Engine Case Study | 10x Pipeline Velocity | OARC Digital",
  description: "How OARC Digital deployed an AI-powered lead generation engine that qualified prospects automatically, increasing pipeline velocity by 10x and reducing cost per acquisition.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/fanstake-sports-platform" },
  openGraph: {
    images: ogImageEntry({ title: "AI Lead Engine Case Study | 10x Pipeline Velocity | OARC Digital", subtitle: "How OARC Digital deployed an AI-powered lead generation engine that qualified prospects automatically, increasing pipeline velocity by 10x and reducing cost per acquisition." }),
    title: "AI Lead Engine Case Study | 10x Pipeline Velocity | OARC Digital",
    description: "How OARC Digital deployed an AI-powered lead generation engine that qualified prospects automatically, increasing pipeline velocity by 10x and reducing cost per acquisition.",
    url: "https://oarcdigital.com/case-studies/fanstake-sports-platform",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Lead Engine Case Study | 10x Pipeline Velocity | OARC Digital", subtitle: "How OARC Digital deployed an AI-powered lead generation engine that qualified prospects automatically, increasing pipeline velocity by 10x and reducing cost per acquisition." })],
    card: "summary_large_image",
    title: "AI Lead Engine Case Study | 10x Pipeline Velocity | OARC Digital",
    description: "How OARC Digital deployed an AI-powered lead generation engine that qualified prospects automatically, increasing pipeline velocity by 10x and reducing cost per acquisition.",
  },
};

export default function Page() {
  return <PageContent />;
}
