import type { Metadata } from "next";
import HospitalityExperience from "./HospitalityExperience";
import "./hospitality.css";
import { NAP, POSTAL_ADDRESS } from "@/lib/seo/nap";

export const metadata: Metadata = {
  title: "Voice AI for Hospitality in Malta | OARC Digital",
  description:
    "A voice receptionist for Malta hotels, restaurants and hospitality teams. Handle calls, reservations, FAQs, transfers and human handoff with OARC Digital.",
  alternates: { canonical: "https://oarcdigital.com/voice-ai-worker/hospitality" },
  openGraph: {
    title: "A calmer front desk, on every call.",
    description:
      "Voice AI for hospitality operators who want faster answers without losing the human welcome.",
    url: "https://oarcdigital.com/voice-ai-worker/hospitality",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Voice AI for Hospitality",
  serviceType: "Hospitality voice receptionist",
  description:
    "A configurable AI voice receptionist for calls, reservations, FAQs, transfers and human handoff.",
  provider: {
    "@type": "Organization",
    name: NAP.name,
    url: "https://oarcdigital.com",
    telephone: NAP.phoneE164,
    address: POSTAL_ADDRESS,
  },
  areaServed: { "@type": "Country", name: "Malta" },
  url: "https://oarcdigital.com/voice-ai-worker/hospitality",
};

export default function HospitalityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HospitalityExperience />
    </>
  );
}