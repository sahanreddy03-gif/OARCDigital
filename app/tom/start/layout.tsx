import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const title = "Start the Voice AI Worker's First Mission | OARC Digital Malta";
const description =
  "Tell OARC what keeps falling through the cracks. We will identify the Voice AI Worker's first useful mission and show how he would handle it, in person, in Malta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: getHreflangAlternates("/tom/start"),
  robots: { index: false, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://oarcdigital.com/tom/start",
    images: ogImageEntry({ title, subtitle: description }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl({ title, subtitle: description })],
  },
};

export default function TomStartLayout({ children }: { children: ReactNode }) {
  return <div className="tom-page">{children}</div>;
}