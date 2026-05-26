import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Applications Development | OARC Digital",
  description: "This page has moved. See our mobile apps development service.",
  alternates: { canonical: "https://oarcdigital.com/services/mobile-apps-development" },
  robots: { index: false, follow: true },
};

export default function Page() {
  permanentRedirect("/services/mobile-apps-development");
}
