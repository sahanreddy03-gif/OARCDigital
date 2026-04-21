import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "iGaming Marketing Malta | OARC Digital",
  description: "Marketing agency for Malta's iGaming sector. Creative, AI automation, and performance marketing for operators, suppliers, and B2B iGaming businesses.",
  alternates: { canonical: "https://oarcdigital.com/aeo/igaming-marketing-malta" },
  openGraph: {
    title: "iGaming Marketing Malta | OARC Digital",
    description: "Marketing agency for Malta's iGaming sector. Creative, AI automation, and performance marketing for operators, suppliers, and B2B iGaming businesses.",
    url: "https://oarcdigital.com/aeo/igaming-marketing-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iGaming Marketing Malta | OARC Digital",
    description: "Marketing agency for Malta's iGaming sector. Creative, AI automation, and performance marketing for operators, suppliers, and B2B iGaming businesses.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/igaming-marketing-malta"
        title="iGaming Marketing Malta | OARC Digital"
        description="Marketing agency for Malta's iGaming sector. Creative, AI automation, and performance marketing for operators, suppliers, and B2B iGaming businesses."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
