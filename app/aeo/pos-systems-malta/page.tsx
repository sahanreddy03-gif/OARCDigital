import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "POS Systems Malta | Square, SumUp, Lightspeed, Toast Integration | OARC Digital";
const DESCRIPTION =
  "POS systems for Malta restaurants, bars, and retail from OARC Digital — Square, SumUp, Lightspeed, iZettle, Toast, and Celery integration plus Hospitality 360 sync. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/pos-systems-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Which POS systems does OARC Digital integrate in Malta?", answer: `OARC Digital integrates Square, SumUp, iZettle (Zettle by PayPal), Lightspeed, Toast, and Celery POS for Maltese restaurants, bars, beach clubs, and retail. Custom REST and webhook integrations cover legacy in-house systems too. Reach ${NAP.phoneDisplay} or ${NAP.email} from the Birkirkara office.` },
  { question: "Which POS is best for a small Maltese restaurant or cafe?", answer: "For a single-outlet Maltese cafe or small restaurant, OARC Digital usually recommends Square or SumUp — low hardware cost, fast onboarding, and clean APIs. For multi-outlet hospitality with more complex menus, Lightspeed or Toast tend to be better fits. We scope the recommendation against the venue&apos;s real volume and integration needs." },
  { question: "Can OARC Digital connect a Maltese POS to digital menus and online ordering?", answer: "Yes. OARC Digital connects Square, SumUp, iZettle, Lightspeed, Toast, and Celery to the Hospitality 360 menu engine, so a guest order placed via QR posts straight into the POS and the kitchen display without rekeying. Stock levels stay in sync, daily revenue close pulls clean, and reporting is one source." },
  { question: "Do you build self-order kiosks for Maltese venues?", answer: "Yes. OARC Digital builds branded self-order kiosk surfaces — counter kiosks for QSR, table tablets for casual dining, sunbed-side ordering for beach clubs — that integrate to Square, Lightspeed, Toast, or Celery POS. Orders flow into the kitchen display and the POS at the same time, with no double entry." },
  { question: "Can you integrate POS with hotel PMS in Malta?", answer: "Yes. POS-to-PMS integrations are a common OARC Digital project for Maltese hotels with multiple F&B outlets — outlet check posting from Lightspeed, Toast, or Celery directly to Mews, Cloudbeds, Opera, Protel, or Apaleo so guest charges roll into the right folio without manual rekeying. Scoped during the discovery week." },
  { question: "How much does POS integration cost in Malta?", answer: "OARC Digital scopes POS integrations on a fixed-project basis — typically €1,500 to €4,500 for a single-vendor integration (Square, SumUp, Lightspeed, Toast, or Celery to Hospitality 360 or to a hotel PMS), and €6,000 to €15,000 for a multi-outlet hotel deployment with PMS sync. Ongoing support retainers start at €350 per month." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta — central to every Maltese restaurant cluster from Valletta to Mellieha. Hours Monday to Friday 09:00 to 18:00 CET on ${NAP.phoneDisplay} and ${NAP.email}, with on-site installs across the islands.` },
];

const offers = [
  { name: "Single-vendor Integration", priceFrom: 1500, unitText: "PROJECT", description: "Square, SumUp, iZettle, Lightspeed, Toast, or Celery POS connected to Hospitality 360 or your booking engine." },
  { name: "Multi-outlet Hotel POS-to-PMS", priceFrom: 6000, unitText: "PROJECT", description: "Multi-outlet hotel POS sync with Mews, Cloudbeds, Opera, Protel, or Apaleo — outlet check posting and shared guest folio." },
  { name: "Support Retainer", priceFrom: 350, unitText: "MONTH", description: "Ongoing POS integration health monitoring, vendor-update fixes, and feature additions." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/pos-systems-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Square, SumUp, iZettle, Lightspeed, Toast, Celery integration" },
          { name: "POS-to-PMS sync (Mews, Cloudbeds, Opera, Protel, Apaleo)" },
          { name: "Hospitality 360 menu + payment engine" },
          { name: "Branded self-order kiosks" },
          { name: "On-site installs across Malta + Gozo" },
          { name: "Support retainers from €350 / month" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
