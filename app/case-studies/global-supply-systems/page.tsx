import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Global Supply Systems Food Supply Chain Automation Case Study | OARC Digital",
  description: "How OARC Digital saved Global Supply Systems $1M+ annually, automated 125,000 hours of work, and deployed 210 intelligent automations across global food supply chain operations.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/global-supply-systems" },
  openGraph: {
    title: "Global Supply Systems Food Supply Chain Automation Case Study | OARC Digital",
    description: "How OARC Digital saved Global Supply Systems $1M+ annually, automated 125,000 hours of work, and deployed 210 intelligent automations across global food supply chain operations.",
    url: "https://oarcdigital.com/case-studies/global-supply-systems",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Supply Systems Food Supply Chain Automation Case Study | OARC Digital",
    description: "How OARC Digital saved Global Supply Systems $1M+ annually, automated 125,000 hours of work, and deployed 210 intelligent automations across global food supply chain operations.",
  },
};

export default function Page() {
  return <PageContent />;
}
