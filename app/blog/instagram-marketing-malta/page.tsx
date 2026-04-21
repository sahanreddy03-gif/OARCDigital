import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Instagram Marketing in Malta: How to Actually Get Results in 2026",
  description: "What works on Instagram in Malta in 2026 — the posting times, content formats, hashtag strategy, and growth tactics that Malta businesses are using to build real audiences.",
  alternates: { canonical: "https://oarcdigital.com/blog/instagram-marketing-malta" },
  openGraph: {
    title: "Instagram Marketing in Malta: How to Actually Get Results in 2026",
    description: "What works on Instagram in Malta in 2026 — the posting times, content formats, hashtag strategy, and growth tactics that Malta businesses are using to build real audiences.",
    url: "https://oarcdigital.com/blog/instagram-marketing-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Marketing in Malta: How to Actually Get Results in 2026",
    description: "What works on Instagram in Malta in 2026 — the posting times, content formats, hashtag strategy, and growth tactics that Malta businesses are using to build real audiences.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/instagram-marketing-malta"
        title="Instagram Marketing in Malta: How to Actually Get Results in 2026"
        description="What works on Instagram in Malta in 2026 — the posting times, content formats, hashtag strategy, and growth tactics that Malta businesses are using to build real audiences."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
