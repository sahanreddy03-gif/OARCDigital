import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Digital Finance Solutions Banking Automation Case Study | OARC Digital",
  description: "How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/digital-finance-solutions" },
  openGraph: {
    title: "Digital Finance Solutions Banking Automation Case Study | OARC Digital",
    description: "How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients.",
    url: "https://oarcdigital.com/case-studies/digital-finance-solutions",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Finance Solutions Banking Automation Case Study | OARC Digital",
    description: "How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients.",
  },
};

export default function Page() {
  return <PageContent />;
}
