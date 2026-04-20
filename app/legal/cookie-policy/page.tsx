import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Cookie Policy | OARC Digital - Cookie Usage & Management",
  description: "Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations.",
  alternates: { canonical: "https://oarcdigital.com/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | OARC Digital - Cookie Usage & Management",
    description: "Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations.",
    url: "https://oarcdigital.com/cookie-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | OARC Digital - Cookie Usage & Management",
    description: "Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations.",
  },
};

export default function Page() {
  return <PageContent />;
}
