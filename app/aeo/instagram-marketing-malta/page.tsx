import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Instagram Marketing Malta | OARC Digital",
  description: "Instagram growth, content, and paid strategy for Malta businesses. OARC Digital manages Instagram accounts for restaurants, hotels, retail, and services.",
  alternates: { canonical: "https://oarcdigital.com/aeo/instagram-marketing-malta" },
  openGraph: {
    title: "Instagram Marketing Malta | OARC Digital",
    description: "Instagram growth, content, and paid strategy for Malta businesses. OARC Digital manages Instagram accounts for restaurants, hotels, retail, and services.",
    url: "https://oarcdigital.com/aeo/instagram-marketing-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Marketing Malta | OARC Digital",
    description: "Instagram growth, content, and paid strategy for Malta businesses. OARC Digital manages Instagram accounts for restaurants, hotels, retail, and services.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/instagram-marketing-malta"
        title="Instagram Marketing Malta | OARC Digital"
        description="Instagram growth, content, and paid strategy for Malta businesses. OARC Digital manages Instagram accounts for restaurants, hotels, retail, and services."
      />
      <PageContent />
    </>
  );
}
