import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Digital Finance Solutions Banking Automation Case Study | OARC Digital",
  description: "How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/digital-finance-solutions" },
  openGraph: {
    images: ogImageEntry({ title: "Digital Finance Solutions Banking Automation Case Study | OARC Digital", subtitle: "How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients." }),
    title: "Digital Finance Solutions Banking Automation Case Study | OARC Digital",
    description: "How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients.",
    url: "https://oarcdigital.com/case-studies/digital-finance-solutions",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Digital Finance Solutions Banking Automation Case Study | OARC Digital", subtitle: "How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients." })],
    card: "summary_large_image",
    title: "Digital Finance Solutions Banking Automation Case Study | OARC Digital",
    description: "How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients.",
  },
};

export default function Page() {
  return <PageContent />;
}
