import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)",
  description: "Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy.",
  alternates: { canonical: "https://oarcdigital.com/blog/hotel-marketing-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)", subtitle: "Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy." }),
    title: "Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)",
    description: "Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy.",
    url: "https://oarcdigital.com/blog/hotel-marketing-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)", subtitle: "Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy." })],
    card: "summary_large_image",
    title: "Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)",
    description: "Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/hotel-marketing-malta"
        title="Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)"
        description="Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
