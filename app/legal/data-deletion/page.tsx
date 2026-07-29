import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Data Deletion | OARC Digital - Meta App User Data Requests",
  description:
    "Request deletion of personal data associated with the OARC HERMES Meta app. Email hello@oarcdigital.com with subject Meta data deletion.",
  alternates: { canonical: "https://oarcdigital.com/legal/data-deletion" },
};

export default function Page() {
  return <PageContent />;
}
