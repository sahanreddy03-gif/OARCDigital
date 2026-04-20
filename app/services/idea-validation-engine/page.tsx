import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Idea Validation & Growth Hacker | Rapid Market Testing | OARC Digital",
  description: "Launch with confidence, not guesswork. Validate product-market fit in weeks with AI-driven testing frameworks used by top startups. 10x faster validation.",
  alternates: { canonical: "https://oarcdigital.com/services/idea-validation-engine" },
  openGraph: {
    title: "Idea Validation & Growth Hacker | Rapid Market Testing | OARC Digital",
    description: "Launch with confidence, not guesswork. Validate product-market fit in weeks with AI-driven testing frameworks used by top startups. 10x faster validation.",
    url: "https://oarcdigital.com/services/idea-validation-engine",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idea Validation & Growth Hacker | Rapid Market Testing | OARC Digital",
    description: "Launch with confidence, not guesswork. Validate product-market fit in weeks with AI-driven testing frameworks used by top startups. 10x faster validation.",
  },
};

export default function Page() {
  return <PageContent slug="idea-validation-engine" />;
}
