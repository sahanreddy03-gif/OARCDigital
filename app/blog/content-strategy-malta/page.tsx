import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Content Strategy Malta: Build Authority and Drive Traffic in 2025 | OARC Digital",
  description: "How Malta businesses build content strategies that generate organic traffic, establish authority, and create compounding returns long after the initial investment.",
  alternates: { canonical: "https://oarcdigital.com/blog/content-strategy-malta" },
  openGraph: {
    title: "Content Strategy Malta: Build Authority and Drive Traffic in 2025 | OARC Digital",
    description: "How Malta businesses build content strategies that generate organic traffic, establish authority, and create compounding returns long after the initial investment.",
    url: "https://oarcdigital.com/blog/content-strategy-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Strategy Malta: Build Authority and Drive Traffic in 2025 | OARC Digital",
    description: "How Malta businesses build content strategies that generate organic traffic, establish authority, and create compounding returns long after the initial investment.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/content-strategy-malta"
        title="Content Strategy Malta: Build Authority and Drive Traffic in 2025 | OARC Digital"
        description="How Malta businesses build content strategies that generate organic traffic, establish authority, and create compounding returns long after the initial investment."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
