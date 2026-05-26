import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Generation Engine | OARC Digital",
  description: "This page has moved. See our lead generation service.",
  alternates: { canonical: "https://oarcdigital.com/services/lead-generation" },
  robots: { index: false, follow: true },
};

export default function Page() {
  permanentRedirect("/services/lead-generation");
}
