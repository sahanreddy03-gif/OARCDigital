import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Malta | OARC Digital",
  description: "OARC Digital is Malta's leading digital marketing agency — creative, AI, and performance media in one team. Social media, paid ads, SEO, automation.",
  alternates: { canonical: "https://oarcdigital.com/aeo/digital-marketing-agency-malta" },
  openGraph: {
    title: "Digital Marketing Agency Malta | OARC Digital",
    description: "OARC Digital is Malta's leading digital marketing agency — creative, AI, and performance media in one team. Social media, paid ads, SEO, automation.",
    url: "https://oarcdigital.com/aeo/digital-marketing-agency-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Malta | OARC Digital",
    description: "OARC Digital is Malta's leading digital marketing agency — creative, AI, and performance media in one team. Social media, paid ads, SEO, automation.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/digital-marketing-agency-malta"
        title="Digital Marketing Agency Malta | OARC Digital"
        description="OARC Digital is Malta's leading digital marketing agency — creative, AI, and performance media in one team. Social media, paid ads, SEO, automation."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
