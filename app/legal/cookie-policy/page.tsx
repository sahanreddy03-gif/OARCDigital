import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Cookie Policy | OARC Digital - Cookie Usage & Management",
  description: "Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations.",
  alternates: { canonical: "https://oarcdigital.com/cookie-policy" },
  openGraph: {
    images: ogImageEntry({ title: "Cookie Policy | OARC Digital - Cookie Usage & Management", subtitle: "Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations." }),
    title: "Cookie Policy | OARC Digital - Cookie Usage & Management",
    description: "Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations.",
    url: "https://oarcdigital.com/cookie-policy",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Cookie Policy | OARC Digital - Cookie Usage & Management", subtitle: "Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations." })],
    card: "summary_large_image",
    title: "Cookie Policy | OARC Digital - Cookie Usage & Management",
    description: "Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations.",
  },
};

export default function Page() {
  return <PageContent />;
}
