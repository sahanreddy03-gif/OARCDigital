import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep",
  description: "Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds.",
  alternates: { canonical: "https://oarcdigital.com/blog/content-marketing-malta" },
  openGraph: {
    title: "Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep",
    description: "Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds.",
    url: "https://oarcdigital.com/blog/content-marketing-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep",
    description: "Every Malta business owner has heard 'you need to post more content.' That's the wrong frame. You don't need more content — you need content that compounds.",
  },
};

export default function Page() {
  return <PageContent />;
}
