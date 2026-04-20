import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Why OARC? | Born in the AI Era",
  description: "OARC Digital bridges the gap between human creativity and AI efficiency. Discover our origin story.",
  alternates: { canonical: `https://oarcdigital.com/why-us` },
  openGraph: {
    title: "Why OARC? | Born in the AI Era",
    description: "OARC Digital bridges the gap between human creativity and AI efficiency. Discover our origin story.",
    url: `https://oarcdigital.com/why-us`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why OARC? | Born in the AI Era",
    description: "OARC Digital bridges the gap between human creativity and AI efficiency. Discover our origin story.",
  },
};

export default function Page() {
  return <PageContent />;
}
