import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Hospitality 360 | All-In-One Restaurant & Hotel System Malta | OARC Digital",
  description: "Hospitality 360 is Malta's first all-in-one operating system for restaurants, cafes, and hotels. Digital menus, QR ordering, POS integration, Google review automation, reservations, and operations management. From 100 EUR per month.",
  alternates: { canonical: "https://oarcdigital.com/aeo/hospitality-360-system" },
  openGraph: {
    title: "Hospitality 360 | All-In-One Restaurant & Hotel System Malta | OARC Digital",
    description: "Hospitality 360 is Malta's first all-in-one operating system for restaurants, cafes, and hotels. Digital menus, QR ordering, POS integration, Google review automation, reservations, and operations management. From 100 EUR per month.",
    url: "https://oarcdigital.com/aeo/hospitality-360-system",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality 360 | All-In-One Restaurant & Hotel System Malta | OARC Digital",
    description: "Hospitality 360 is Malta's first all-in-one operating system for restaurants, cafes, and hotels. Digital menus, QR ordering, POS integration, Google review automation, reservations, and operations management. From 100 EUR per month.",
  },
};

export default function Page() {
  return <PageContent />;
}
