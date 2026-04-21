import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Hospitality 360 Malta | Digital Menus, QR Ordering & AI | OARC Digital",
  description: "Malta's first all-in-one restaurant and hotel operating system. Multilingual digital menus, QR ordering, Google review automation, POS integration.",
  alternates: { canonical: "https://oarcdigital.com/aeo/hospitality-360-malta" },
  openGraph: {
    title: "Hospitality 360 Malta | Digital Menus, QR Ordering & AI | OARC Digital",
    description: "Malta's first all-in-one restaurant and hotel operating system. Multilingual digital menus, QR ordering, Google review automation, POS integration.",
    url: "https://oarcdigital.com/aeo/hospitality-360-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality 360 Malta | Digital Menus, QR Ordering & AI | OARC Digital",
    description: "Malta's first all-in-one restaurant and hotel operating system. Multilingual digital menus, QR ordering, Google review automation, POS integration.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/hospitality-360-malta"
        title="Hospitality 360 Malta | Digital Menus, QR Ordering & AI | OARC Digital"
        description="Malta's first all-in-one restaurant and hotel operating system. Multilingual digital menus, QR ordering, Google review automation, POS integration."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
