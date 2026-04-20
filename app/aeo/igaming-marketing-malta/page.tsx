import type { Metadata } from "next";
import PageContent from "./PageContent";

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
  return <PageContent />;
}
