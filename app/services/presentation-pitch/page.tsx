import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Presentation Design | Pitch Decks | OARC Digital Malta",
  description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
  alternates: { canonical: "https://oarcdigital.com/services/presentation-pitch" },
  openGraph: {
    title: "Presentation Design | Pitch Decks | OARC Digital Malta",
    description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
    url: "https://oarcdigital.com/services/presentation-pitch",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presentation Design | Pitch Decks | OARC Digital Malta",
    description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
  },
};

export default function Page() {
  return <PageContent />;
}
