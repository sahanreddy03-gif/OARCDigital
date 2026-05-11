import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep",
  description: "Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds.",
  alternates: { canonical: "https://oarcdigital.com/blog/content-marketing-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep", subtitle: "Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds." }),
    title: "Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep",
    description: "Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds.",
    url: "https://oarcdigital.com/blog/content-marketing-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep", subtitle: "Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds." })],
    card: "summary_large_image",
    title: "Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep",
    description: "Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/content-marketing-malta"
        title="Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep"
        description="Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
