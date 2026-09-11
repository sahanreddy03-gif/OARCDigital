import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Integration Malta | Connect Your Systems | OARC",
  description: "API integration services in Malta—connect CRM, booking, payments, and AI agents so data moves without copy-paste.",
  alternates: { canonical: "https://oarcdigital.com/services/api-integration" },
  robots: { index: false, follow: true },
};

export default function Page() {
  permanentRedirect("/services/api-integration");
}
