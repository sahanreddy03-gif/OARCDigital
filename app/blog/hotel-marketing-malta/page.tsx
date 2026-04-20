import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)",
  description: "Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy.",
  alternates: { canonical: "https://oarcdigital.com/blog/hotel-marketing-malta" },
  openGraph: {
    title: "Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)",
    description: "Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy.",
    url: "https://oarcdigital.com/blog/hotel-marketing-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Marketing in Malta: How to Fill Rooms Year-Round (2026)",
    description: "Malta welcomes 2.3 million tourists annually. The hotels that fill rooms year-round aren't the ones with the biggest budgets — they're the ones with the smartest distribution strategy.",
  },
};

export default function Page() {
  return <PageContent />;
}
