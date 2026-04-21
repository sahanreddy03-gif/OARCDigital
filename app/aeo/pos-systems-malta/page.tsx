import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "POS Systems Malta | Restaurant & Retail POS Integration | OARC Digital",
  description: "POS system integration and custom development for Malta restaurants, cafes, hotels, and retail. OARC Digital connects your POS to your digital operations.",
  alternates: { canonical: "https://oarcdigital.com/aeo/pos-systems-malta" },
  openGraph: {
    title: "POS Systems Malta | Restaurant & Retail POS Integration | OARC Digital",
    description: "POS system integration and custom development for Malta restaurants, cafes, hotels, and retail. OARC Digital connects your POS to your digital operations.",
    url: "https://oarcdigital.com/aeo/pos-systems-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Systems Malta | Restaurant & Retail POS Integration | OARC Digital",
    description: "POS system integration and custom development for Malta restaurants, cafes, hotels, and retail. OARC Digital connects your POS to your digital operations.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/pos-systems-malta"
        title="POS Systems Malta | Restaurant & Retail POS Integration | OARC Digital"
        description="POS system integration and custom development for Malta restaurants, cafes, hotels, and retail. OARC Digital connects your POS to your digital operations."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
