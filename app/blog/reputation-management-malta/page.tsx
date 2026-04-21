import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Reputation Management Malta: How to Manage Your Google Reviews | OARC Digital",
  description: "How Malta businesses build and protect their online reputation — responding to reviews, generating new ones, and managing what appears when customers search for them.",
  alternates: { canonical: "https://oarcdigital.com/blog/reputation-management-malta" },
  openGraph: {
    title: "Reputation Management Malta: How to Manage Your Google Reviews | OARC Digital",
    description: "How Malta businesses build and protect their online reputation — responding to reviews, generating new ones, and managing what appears when customers search for them.",
    url: "https://oarcdigital.com/blog/reputation-management-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputation Management Malta: How to Manage Your Google Reviews | OARC Digital",
    description: "How Malta businesses build and protect their online reputation — responding to reviews, generating new ones, and managing what appears when customers search for them.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/reputation-management-malta"
        title="Reputation Management Malta: How to Manage Your Google Reviews | OARC Digital"
        description="How Malta businesses build and protect their online reputation — responding to reviews, generating new ones, and managing what appears when customers search for them."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
