import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "StrategyPulse | AI Strategic Planning Platform Case Study | OARC Digital",
  description: "How OARC Digital built an AI-powered strategic planning platform that increased goal achievement by 340% for enterprise clients. Custom SaaS development case study.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/strategypulse-enterprise" },
  openGraph: {
    title: "StrategyPulse | AI Strategic Planning Platform Case Study | OARC Digital",
    description: "How OARC Digital built an AI-powered strategic planning platform that increased goal achievement by 340% for enterprise clients. Custom SaaS development case study.",
    url: "https://oarcdigital.com/case-studies/strategypulse-enterprise",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "StrategyPulse | AI Strategic Planning Platform Case Study | OARC Digital",
    description: "How OARC Digital built an AI-powered strategic planning platform that increased goal achievement by 340% for enterprise clients. Custom SaaS development case study.",
  },
};

export default function Page() {
  return <PageContent />;
}
