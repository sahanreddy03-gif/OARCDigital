import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Integration Services | OARC Digital",
  description: "This page has moved. See our API integration service.",
  alternates: { canonical: "https://oarcdigital.com/services/api-integration" },
  robots: { index: false, follow: true },
};

export default function Page() {
  permanentRedirect("/services/api-integration");
}
