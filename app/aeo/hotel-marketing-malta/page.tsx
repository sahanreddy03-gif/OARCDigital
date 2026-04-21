import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Hotel Marketing Malta | OARC Digital",
  description: "Hotel and hospitality marketing in Malta. Social media, content, paid advertising, and Hospitality 360 — the all-in-one operating system for Malta hotels.",
  alternates: { canonical: "https://oarcdigital.com/aeo/hotel-marketing-malta" },
  openGraph: {
    title: "Hotel Marketing Malta | OARC Digital",
    description: "Hotel and hospitality marketing in Malta. Social media, content, paid advertising, and Hospitality 360 — the all-in-one operating system for Malta hotels.",
    url: "https://oarcdigital.com/aeo/hotel-marketing-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Marketing Malta | OARC Digital",
    description: "Hotel and hospitality marketing in Malta. Social media, content, paid advertising, and Hospitality 360 — the all-in-one operating system for Malta hotels.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/hotel-marketing-malta"
        title="Hotel Marketing Malta | OARC Digital"
        description="Hotel and hospitality marketing in Malta. Social media, content, paid advertising, and Hospitality 360 — the all-in-one operating system for Malta hotels."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
