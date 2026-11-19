import Link from "next/link";

/**
 * "What do you need?" — 16 plain cards (Ship sits inside Custom software), replacing the
 * Shift Happens headline and the 16-card department rail on the homepage.
 * Every department page keeps its internal link from the homepage.
 *
 * Italian copy. Links: `/ai` and `/h360` have an Italian twin (`/it/...`); every other
 * card goes to a page that exists only in English and carries hrefLang="en".
 */
const NEEDS = [
  {
    title: "Trova più clienti",
    tone: "ink",
    text: "Marketing digitale per le attività di Malta: pubblicità, SEO e contenuti.",
    href: "/services/growth",
    image: "/attached_assets/generated_images/oarc-growth-card-v2.jpg",
  },
  {
    title: "AI costruita per il tuo settore",
    tone: "cobalt",
    text: "Un sistema AI per il tuo tipo di attività: hotel, cliniche, studi legali, casinò e altro.",
    href: "/it/ai",
    image: "/attached_assets/generated_images/oarc-dept-ship.jpg",
  },
  {
    title: "Crea un brand per cui la gente paga di più",
    tone: "espresso",
    text: "Agenzia di branding: logo, identità e strategia di brand.",
    href: "/services/brand",
    image: "/attached_assets/generated_images/oarc-dept-brand.jpg",
  },
  {
    title: "Assumi un dipendente AI",
    tone: "cobalt",
    text: "Staff AI per vendite, assistenza e prenotazioni. Lavora 24/7.",
    href: "/services/ai-staff",
    image: "/attached_assets/generated_images/oarc-dept-ai-staff.jpg",
  },
  {
    title: "Chiudi più vendite",
    tone: "ink",
    text: "Sistemi di vendita e follow-up che trasformano i contatti in clienti.",
    href: "/services/sales",
    image: "/attached_assets/generated_images/oarc-dept-sales.jpg",
  },
  {
    title: "Rispondi a ogni richiesta in pochi secondi",
    tone: "cobalt",
    text: "Receptionist AI per WhatsApp, chiamate, DM ed email.",
    href: "/voice-ai-worker",
    image: "/attached_assets/generated_images/oarc-dept-enquiries.jpg",
  },
  {
    title: "Presentati come il brand più grande del tuo mercato",
    tone: "espresso",
    text: "Agenzia creativa: pubblicità, video, design e siti web.",
    href: "/services/creative",
    image: "/attached_assets/generated_images/oarc-dept-creative.jpg",
  },
  {
    title: "Lascia che la tua attività funzioni da sola",
    tone: "cobalt",
    text: "Automazione aziendale che collega tutti i tuoi strumenti.",
    href: "/services/automation",
    image: "/attached_assets/generated_images/oarc-dept-automation.jpg",
  },
  {
    title: "Vinci sui social media",
    tone: "ink",
    text: "Gestione dei social media: pianifichiamo, giriamo, montiamo e pubblichiamo.",
    href: "/services/social",
    image: "/attached_assets/generated_images/oarc-dept-social.jpg",
  },
  {
    title: "Scopri cosa funziona davvero",
    tone: "cobalt",
    text: "Report di marketing che ti dicono cosa fare dopo.",
    href: "/services/clarity",
    image: "/attached_assets/generated_images/oarc-dept-clarity.jpg",
  },
  {
    title: "Gestisci il tuo ristorante con un solo sistema",
    tone: "espresso",
    text: "H360: menu QR, schermo in cucina, pagamenti, fidelizzazione.",
    href: "/it/h360",
    image: "/attached_assets/generated_images/oarc-dept-products.jpg",
  },
  {
    title: "Software su misura, fatto per te",
    tone: "cobalt",
    text: "App e sistemi realizzati in poche settimane. Il codice è tuo.",
    href: "/services/transformation",
    image: "/attached_assets/generated_images/oarc-dept-transformation.jpg",
  },
  {
    title: "Pubblicità che si ripaga da sola",
    tone: "ink",
    text: "Annunci su Google, Meta e TikTok, gestiti a Malta.",
    href: "/services/media",
    image: "/attached_assets/generated_images/oarc-dept-media.jpg",
  },
  {
    title: "Recupera 10+ ore ogni settimana",
    tone: "cobalt",
    text: "Al lavoro amministrativo ripetitivo pensiamo noi.",
    href: "/services/operations",
    image: "/attached_assets/generated_images/oarc-dept-operations.jpg",
  },
  {
    title: "Perché OARC e non un'altra agenzia",
    tone: "espresso",
    text: "Costruiamo sistemi che funzionano, non report.",
    href: "/why-oarc",
    image: "/attached_assets/generated_images/oarc-dept-compare.jpg",
  },
  {
    title: "Fatti un nome a Malta",
    tone: "cobalt",
    text: "PR, stampa, creator e recensioni Google a 5 stelle.",
    href: "/services/reputation",
    image: "/attached_assets/generated_images/oarc-dept-reputation.jpg",
  },
] as const;

/**
 * Notion v3, three trios in one repeat: black, white, brown, white. White sits between
 * black and brown so the two dark cards never touch (in 3 columns, in any direction).
 * ink (yellow title, paper text), white = AI and systems (cobalt title, ink text),
 * espresso = brand, money, restaurants (yellow title, paper text).
 */
const TONES = {
  ink: { card: "bg-[#0E0E0E] text-[#F5F3EE]", title: "#F9FF84" },
  cobalt: { card: "bg-white text-[#0E0E0E] ring-1 ring-[#171614]/10", title: "#0035AD" },
  espresso: { card: "bg-[#3E2723] text-[#F5F3EE]", title: "#F9FF84" },
} as const;

export default function HomepageNeedsSection() {
  return (
    <section
      id="departments"
      aria-labelledby="homepage-needs-title"
      className="bg-[#F2EFE9] px-4 py-16 text-[#171614] md:px-10 md:py-24"
      data-testid="homepage-needs"
    >
      <div className="mx-auto max-w-[1180px]">
        <h2
          id="homepage-needs-title"
          className="text-[clamp(2.4rem,5vw,3.9rem)] font-semibold leading-none tracking-[-0.045em]"
        >
          Di cosa hai{" "}
          <em className="font-normal tracking-[-0.02em]" style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}>
            bisogno?
          </em>
        </h2>

        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {NEEDS.map((need, i) => {
            // 16 cards leave one alone on the last desktop row, so that one spans the row as a banner.
            const wide = NEEDS.length % 3 === 1 && i === NEEDS.length - 1;
            return (
            <Link
              key={need.title}
              href={need.href}
              hrefLang={need.href.startsWith("/it/") ? undefined : "en"}
              className={`group flex overflow-hidden rounded-[18px] ${TONES[need.tone].card} transition-transform duration-200 hover:-translate-y-1 sm:flex-col ${wide ? "lg:col-span-3 lg:h-[200px] lg:flex-row" : ""}`}
            >
              <span className={`block w-[38%] shrink-0 overflow-hidden sm:aspect-[16/10] sm:w-full ${wide ? "lg:aspect-auto lg:w-[calc((100%-28px)/3)]" : ""}`}>
                <img
                  src={need.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-1 flex-col p-5 sm:p-6">
                <h3
                  className="text-[32px] font-normal leading-[1] tracking-[-0.02em] sm:text-[38px]"
                  style={{ color: TONES[need.tone].title, fontFamily: "var(--font-instrument-serif-roman), Georgia, serif" }}
                >
                  {need.title}
                </h3>
                <p
                  className="mt-3 flex-1 text-[17px] leading-[1.45]"
                  style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
                >
                  {need.text}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 self-end text-[26px] leading-none transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
