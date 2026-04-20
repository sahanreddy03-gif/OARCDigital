import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Restaurant Marketing in Malta: What the Top Venues Do Differently",
  description: "Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them.",
  alternates: { canonical: "https://oarcdigital.com/blog/restaurant-marketing-malta" },
  openGraph: {
    title: "Restaurant Marketing in Malta: What the Top Venues Do Differently",
    description: "Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them.",
    url: "https://oarcdigital.com/blog/restaurant-marketing-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing in Malta: What the Top Venues Do Differently",
    description: "Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them.",
  },
};

export default function Page() {
  return <PageContent />;
}
