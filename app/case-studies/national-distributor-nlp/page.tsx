import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Data Engine | NLP Data Transformation Case Study | OARC Digital",
  description: "How OARC deployed AI-powered data cleansing to transform 10,000+ chaotic stock cards into clean, intelligent data for a major UK food & beverage distributor. NLP and data engineering case study.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/national-distributor-nlp" },
  openGraph: {
    title: "AI Data Engine | NLP Data Transformation Case Study | OARC Digital",
    description: "How OARC deployed AI-powered data cleansing to transform 10,000+ chaotic stock cards into clean, intelligent data for a major UK food & beverage distributor. NLP and data engineering case study.",
    url: "https://oarcdigital.com/case-studies/national-distributor-nlp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Data Engine | NLP Data Transformation Case Study | OARC Digital",
    description: "How OARC deployed AI-powered data cleansing to transform 10,000+ chaotic stock cards into clean, intelligent data for a major UK food & beverage distributor. NLP and data engineering case study.",
  },
};

export default function Page() {
  return <PageContent />;
}
