import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Digital Transformation Malta | AI & Tech for Business | OARC Digital",
  description: "Digital transformation for Malta businesses. OARC Digital modernises operations with AI, automation, custom software, and connected digital systems.",
  alternates: { canonical: "https://oarcdigital.com/aeo/digital-transformation-malta" },
  openGraph: {
    title: "Digital Transformation Malta | AI & Tech for Business | OARC Digital",
    description: "Digital transformation for Malta businesses. OARC Digital modernises operations with AI, automation, custom software, and connected digital systems.",
    url: "https://oarcdigital.com/aeo/digital-transformation-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation Malta | AI & Tech for Business | OARC Digital",
    description: "Digital transformation for Malta businesses. OARC Digital modernises operations with AI, automation, custom software, and connected digital systems.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/digital-transformation-malta"
        title="Digital Transformation Malta | AI & Tech for Business | OARC Digital"
        description="Digital transformation for Malta businesses. OARC Digital modernises operations with AI, automation, custom software, and connected digital systems."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
