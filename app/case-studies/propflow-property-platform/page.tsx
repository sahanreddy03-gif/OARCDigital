import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital",
  description: "How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/propflow-property-platform" },
  openGraph: {
    images: ogImageEntry({ title: "AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital", subtitle: "How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates." }),
    title: "AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital",
    description: "How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates.",
    url: "https://oarcdigital.com/case-studies/propflow-property-platform",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital", subtitle: "How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates." })],
    card: "summary_large_image",
    title: "AI Real Estate Agent Case Study | 24/7 Lead Qualification | OARC Digital",
    description: "How OARC Digital deployed an AI real estate agent that qualified property leads around the clock, reducing response time by 94% and increasing conversion rates.",
  },
};

export default function Page() {
  return <PageContent />;
}
