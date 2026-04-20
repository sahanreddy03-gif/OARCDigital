import type { Metadata } from "next";
import PageContent from "./PageContent";

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
  return <PageContent />;
}
