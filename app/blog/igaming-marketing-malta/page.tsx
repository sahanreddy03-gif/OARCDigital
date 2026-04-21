import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "iGaming Marketing in Malta: What Works in 2026",
  description: "Malta is the iGaming capital of Europe. Over 300 licensed operators are based here, and the marketing landscape is unlike any other vertical — high budgets, strict regulation, and hyper-competitive acquisition.",
  alternates: { canonical: "https://oarcdigital.com/blog/igaming-marketing-malta" },
  openGraph: {
    title: "iGaming Marketing in Malta: What Works in 2026",
    description: "Malta is the iGaming capital of Europe. Over 300 licensed operators are based here, and the marketing landscape is unlike any other vertical — high budgets, strict regulation, and hyper-competitive acquisition.",
    url: "https://oarcdigital.com/blog/igaming-marketing-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "iGaming Marketing in Malta: What Works in 2026",
    description: "Malta is the iGaming capital of Europe. Over 300 licensed operators are based here, and the marketing landscape is unlike any other vertical — high budgets, strict regulation, and hyper-competitive acquisition.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/igaming-marketing-malta"
        title="iGaming Marketing in Malta: What Works in 2026"
        description="Malta is the iGaming capital of Europe. Over 300 licensed operators are based here, and the marketing landscape is unlike any other vertical — high budgets, strict regulation, and hyper-competitive acquisition."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
