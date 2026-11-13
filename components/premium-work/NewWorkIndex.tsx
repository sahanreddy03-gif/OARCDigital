import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WorkGrid, { type WorkCard } from "@/components/premium-work/WorkGrid";
import { getCaseFull } from "@/lib/data/premium-work/caseFull";
import mediaFiles from "@/lib/data/premium-work/caseMedia.json";
import { bookingUrl, whatsappUrl } from "@/lib/utm";

/**
 * The Our Work index: one title, industry filters, one big picture per brand.
 * Each card uses the same picture, headline, industry and place as its case page.
 */

const MEDIA = mediaFiles as Record<string, { src: string; alt: string }[]>;

const GROUPS = ["Restaurants & bars", "Events & venues", "Shops & brands", "Apps & AI"] as const;

/** Display order and filter group. Every case under /our-work/[slug] is listed here once. */
const ORDER: [slug: string, group: (typeof GROUPS)[number], brand: string][] = [
  ["tiffany", "Restaurants & bars", "Tiffany Lounge"],
  ["portomaso-casino", "Events & venues", "Portomaso Casino"],
  ["massive-fan-zone", "Events & venues", "Massive Promotions · Fan Zone"],
  ["mcw-cbd", "Shops & brands", "MCW CBD Relax Shop"],
  ["calle-bistro", "Restaurants & bars", "Calle Bistro"],
  ["kreta", "Restaurants & bars", "Kreta"],
  ["spinola-gin-fest", "Events & venues", "Massive Promotions · Spinola Gin Fest"],
  ["palino", "Restaurants & bars", "Palino"],
  ["louisiana-mama", "Restaurants & bars", "Louisiana Mama"],
  ["ricky-jr-burger", "Restaurants & bars", "Ricky Jr Burger"],
  ["drink-n-more", "Restaurants & bars", "Drink N More"],
  ["pjazza", "Apps & AI", "PJAZZA"],
  ["meridian-retail-response", "Apps & AI", "Meridian"],
  ["skyline-first-response", "Apps & AI", "Skyline"],
  ["ashford-in-real-life", "Shops & brands", "Ashford"],
  ["maison-verre-discovery", "Shops & brands", "Maison Verre"],
  ["cobalt-decision-thread", "Apps & AI", "Cobalt"],
  ["kinetic-member-energy", "Shops & brands", "Kinetic"],
  ["vela-signal-pipeline", "Apps & AI", "Vela"],
  ["arena-one-regional-signal", "Events & venues", "Arena One"],
  ["aurum-document-trail", "Apps & AI", "Aurum"],
  ["botanic-muse-field-notes", "Shops & brands", "Botanic Muse"],
  ["belgrave-client-time", "Apps & AI", "Belgrave"],
  ["fanline-live-ritual", "Events & venues", "Fanline"],
  ["bluebridge-candidate-welcome", "Apps & AI", "Bluebridge"],
  ["vertex-after-launch", "Shops & brands", "Vertex"],
  ["crownline-fresh-signal", "Apps & AI", "Crownline"],
  ["wellbridge-clear-path", "Apps & AI", "Wellbridge"],
  ["hearth-test-kitchen", "Apps & AI", "Hearth"],
  ["northforge-adoption-ladder", "Apps & AI", "Northforge"],
  ["data-foundation", "Apps & AI", "National distributor"],
  ["live-context", "Apps & AI", "Live sports app"],
];

const SERVICES = [
  { label: "Digital marketing", href: "/aeo/digital-marketing-agency-malta" },
  { label: "Social media management", href: "/aeo/social-media-agency-malta" },
  { label: "Social video & content", href: "/aeo/video-production-malta" },
  { label: "TikTok marketing", href: "/aeo/tiktok-marketing-malta" },
  { label: "Website design & development", href: "/aeo/web-design-malta" },
  { label: "AI chatbot implementation", href: "/aeo/ai-chatbot-malta" },
  { label: "Marketing automation", href: "/aeo/marketing-automation-malta" },
  { label: "Paid advertising", href: "/aeo/paid-advertising-malta" },
];

function buildCards(): WorkCard[] {
  const cards: WorkCard[] = [];
  for (const [slug, group, brand] of ORDER) {
    const full = getCaseFull(slug);
    if (!full) continue;
    const picture = full.afterSummary ?? MEDIA[slug]?.[0];
    const headline = (full.headline ?? []).filter(Boolean).join(" ");
    cards.push({
      slug,
      brand,
      headline,
      industry: full.industry,
      place: full.place,
      group,
      image: picture?.src,
      alt: picture?.alt ?? `${brand}: work by OARC Digital`,
    });
  }
  return cards;
}

export default function NewWorkIndex() {
  const cards = buildCards();

  return (
    <div className="wx" id="our-work-top">
      <header className="wx-hero">
        <h1>
          Our work<span aria-hidden="true">.</span>
        </h1>
        <p>
          {cards.length} brands in Malta. What we did for each one, and what it achieved.
        </p>
      </header>

      <section className="wx-work" aria-label="Projects">
        <WorkGrid cards={cards} groups={[...GROUPS]} />
      </section>

      <section className="wx-services" aria-labelledby="wx-services-title">
        <h2 id="wx-services-title">What we do</h2>
        <nav aria-label="OARC Digital services">
          {SERVICES.map((service) => (
            <Link href={service.href} key={service.href}>
              {service.label}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </section>

      <section className="wx-close" id="our-work-contact">
        <h2>Want results like these?</h2>
        <p>Tell us what you want to grow. A 20-minute call is enough to start.</p>
        <div>
          <a href={bookingUrl("/our-work")} target="_blank" rel="noopener noreferrer">
            Book a 20-minute call <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="wx-alt"
            href={whatsappUrl("/our-work", "Hi OARC Digital, I saw your work and want results like these.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
