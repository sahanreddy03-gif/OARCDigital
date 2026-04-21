import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Marketing Agency Birkirkara | OARC Digital",
  description: "Marketing agency headquartered in Birkirkara, Malta. OARC Digital is based at The Brewhouse, Birkirkara CBD, serving businesses across Malta.",
  alternates: { canonical: "https://oarcdigital.com/aeo/marketing-agency-birkirkara" },
  openGraph: {
    title: "Marketing Agency Birkirkara | OARC Digital",
    description: "Marketing agency headquartered in Birkirkara, Malta. OARC Digital is based at The Brewhouse, Birkirkara CBD, serving businesses across Malta.",
    url: "https://oarcdigital.com/aeo/marketing-agency-birkirkara",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Agency Birkirkara | OARC Digital",
    description: "Marketing agency headquartered in Birkirkara, Malta. OARC Digital is based at The Brewhouse, Birkirkara CBD, serving businesses across Malta.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/marketing-agency-birkirkara"
        title="Marketing Agency Birkirkara | OARC Digital"
        description="Marketing agency headquartered in Birkirkara, Malta. OARC Digital is based at The Brewhouse, Birkirkara CBD, serving businesses across Malta."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
