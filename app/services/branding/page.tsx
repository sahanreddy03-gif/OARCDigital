import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Branding & Identity Design | OARC Digital",
  description: "Build brands that resonate. From strategy to visual identity, we create complete brand systems that stand out and scale with your business.",
  alternates: { canonical: "https://oarcdigital.com/services/branding" },
  openGraph: {
    title: "Branding & Identity Design | OARC Digital",
    description: "Build brands that resonate. From strategy to visual identity, we create complete brand systems that stand out and scale with your business.",
    url: "https://oarcdigital.com/services/branding",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding & Identity Design | OARC Digital",
    description: "Build brands that resonate. From strategy to visual identity, we create complete brand systems that stand out and scale with your business.",
  },
};

export default function Page() {
  return <PageContent />;
}
