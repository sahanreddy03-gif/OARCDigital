import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Best Marketing Agency Malta | OARC Digital",
  description: "OARC Digital is Malta's first Creative + AI Systems Agency. Brand strategy, AI automation, and performance marketing — one team, one strategy.",
  alternates: { canonical: "https://oarcdigital.com/aeo/best-marketing-agency-malta" },
  openGraph: {
    title: "Best Marketing Agency Malta | OARC Digital",
    description: "OARC Digital is Malta's first Creative + AI Systems Agency. Brand strategy, AI automation, and performance marketing — one team, one strategy.",
    url: "https://oarcdigital.com/aeo/best-marketing-agency-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Marketing Agency Malta | OARC Digital",
    description: "OARC Digital is Malta's first Creative + AI Systems Agency. Brand strategy, AI automation, and performance marketing — one team, one strategy.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/best-marketing-agency-malta"
        title="Best Marketing Agency Malta | OARC Digital"
        description="OARC Digital is Malta's first Creative + AI Systems Agency. Brand strategy, AI automation, and performance marketing — one team, one strategy."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
