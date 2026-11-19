import Link from "next/link";

/**
 * "What do you need?" — 16 plain cards (Ship sits inside Custom software), replacing the
 * Shift Happens headline and the 16-card department rail on the homepage.
 * Every department page keeps its internal link from the homepage.
 */
const NEEDS = [
  {
    title: "Ikseb aktar klijenti",
    tone: "ink",
    text: "Marketing diġitali għan-negozji f'Malta: reklami, SEO u kontenut.",
    href: "/services/growth",
    image: "/attached_assets/generated_images/oarc-growth-card-v2.jpg",
  },
  {
    title: "AI mibnija għall-industrija tiegħek",
    tone: "cobalt",
    text: "Sistema waħda tal-AI għat-tip ta' negozju tiegħek: lukandi, kliniċi, ditti legali, każinojiet u aktar.",
    href: "/mt/ai",
    image: "/attached_assets/generated_images/oarc-dept-ship.jpg",
  },
  {
    title: "Ibni brand li n-nies iħallsu aktar għalih",
    tone: "espresso",
    text: "Aġenzija tal-branding: logo, identità u strateġija tal-brand.",
    href: "/services/brand",
    image: "/attached_assets/generated_images/oarc-dept-brand.jpg",
  },
  {
    title: "Qabbad impjegat tal-AI",
    tone: "cobalt",
    text: "Staff tal-AI għall-bejgħ, l-appoġġ u l-bookings. Jaħdem 24/7.",
    href: "/services/ai-staff",
    image: "/attached_assets/generated_images/oarc-dept-ai-staff.jpg",
  },
  {
    title: "Biegħ aktar",
    tone: "ink",
    text: "Sistemi tal-bejgħ u follow-up li jibdlu l-leads fi klijenti.",
    href: "/services/sales",
    image: "/attached_assets/generated_images/oarc-dept-sales.jpg",
  },
  {
    title: "Wieġeb kull talba f'sekondi",
    tone: "cobalt",
    text: "Receptionist tal-AI għal WhatsApp, telefonati, DMs u email.",
    href: "/voice-ai-worker",
    image: "/attached_assets/generated_images/oarc-dept-enquiries.jpg",
  },
  {
    title: "Idher bħall-akbar brand fis-suq tiegħek",
    tone: "espresso",
    text: "Aġenzija kreattiva: reklami, vidjows, disinn u websajts.",
    href: "/services/creative",
    image: "/attached_assets/generated_images/oarc-dept-creative.jpg",
  },
  {
    title: "Ħalli n-negozju tiegħek jaħdem waħdu",
    tone: "cobalt",
    text: "Awtomazzjoni tan-negozju li tgħaqqad l-għodod kollha tiegħek.",
    href: "/services/automation",
    image: "/attached_assets/generated_images/oarc-dept-automation.jpg",
  },
  {
    title: "Irbaħ fuq is-social media",
    tone: "ink",
    text: "Ġestjoni tas-social media: nippjanaw, niffilmjaw, neditjaw u nippowstjaw.",
    href: "/services/social",
    image: "/attached_assets/generated_images/oarc-dept-social.jpg",
  },
  {
    title: "Kun af x'qed jaħdem tassew",
    tone: "cobalt",
    text: "Rapporti tal-marketing li jgħidulek x'għandek tagħmel wara.",
    href: "/services/clarity",
    image: "/attached_assets/generated_images/oarc-dept-clarity.jpg",
  },
  {
    title: "Mexxi r-ristorant tiegħek b'sistema waħda",
    tone: "espresso",
    text: "H360: menus bil-QR, skrin għall-kċina, ħlasijiet, lealtà.",
    href: "/mt/h360",
    image: "/attached_assets/generated_images/oarc-dept-products.jpg",
  },
  {
    title: "Software mibni apposta għalik",
    tone: "cobalt",
    text: "Apps u sistemi mibnija fi ftit ġimgħat. Il-kodiċi huwa tiegħek.",
    href: "/services/transformation",
    image: "/attached_assets/generated_images/oarc-dept-transformation.jpg",
  },
  {
    title: "Reklami li jħallsu għalihom infushom",
    tone: "ink",
    text: "Reklami fuq Google, Meta u TikTok, immaniġġjati f'Malta.",
    href: "/services/media",
    image: "/attached_assets/generated_images/oarc-dept-media.jpg",
  },
  {
    title: "Iffranka 10+ sigħat kull ġimgħa",
    tone: "cobalt",
    text: "Nieħdu ħsieb aħna x-xogħol amministrattiv ripetittiv.",
    href: "/services/operations",
    image: "/attached_assets/generated_images/oarc-dept-operations.jpg",
  },
  {
    title: "Għaliex OARC, u mhux aġenzija oħra",
    tone: "espresso",
    text: "Nibnu sistemi li jaħdmu, mhux rapporti.",
    href: "/why-oarc",
    image: "/attached_assets/generated_images/oarc-dept-compare.jpg",
  },
  {
    title: "Sir famuż f'Malta",
    tone: "cobalt",
    text: "PR, stampa, creators u reviews ta' 5 stilel fuq Google.",
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
          {"X'għandek"}{" "}
          <em className="font-normal tracking-[-0.02em]" style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}>
            bżonn?
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
              hrefLang={need.href.startsWith("/mt/") ? undefined : "en"}
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
