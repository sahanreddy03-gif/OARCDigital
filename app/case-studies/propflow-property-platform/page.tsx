import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital",
  description: "How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/propflow-property-platform" },
  openGraph: {
    title: "AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital",
    description: "How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates.",
    url: "https://oarcdigital.com/case-studies/propflow-property-platform",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital",
    description: "How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates.",
  },
};

export default function Page() {
  return <PageContent />;
}
