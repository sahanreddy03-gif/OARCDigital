import Link from "next/link";
import AutoplayVideo from "@/components/AutoplayVideo";
import {
  CAMPAIGN,
  CONTACT,
  CTA_CLAIM,
  CTA_URGENCY,
  CTA_WA,
  HOME,
  INSTAGRAM,
  MONEY_LINKS,
  OFFER,
  PHONE_DISPLAY,
  WA_DEFAULT,
  waUrl,
} from "@/components/campaign";

export {
  CAMPAIGN,
  CONTACT,
  CTA_CLAIM,
  CTA_URGENCY,
  CTA_WA,
  HOME,
  INSTAGRAM,
  MONEY_LINKS,
  OFFER,
  PHONE_DISPLAY,
  WA_DEFAULT,
  waUrl,
};

type Variant = "creative" | "editorial" | "automation";

const sectionLinks: Record<
  Variant,
  { href: string; label: string }[]
> = {
  creative: [
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ],
  editorial: [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#method", label: "Method" },
    { href: "#faq", label: "FAQ" },
  ],
  automation: [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#projects", label: "Projects" },
    { href: "#faq", label: "FAQs" },
  ],
};

const exitChrome = [
  { href: HOME, label: "Home", external: true },
  { href: CONTACT, label: "Contact", external: true },
  { href: INSTAGRAM, label: "Instagram", external: true },
];

export function TopNav({
  variant = "creative",
  waHref = WA_DEFAULT,
}: {
  variant?: Variant;
  waHref?: string;
}) {
  const isLight = variant === "automation";
  const links = sectionLinks[variant];

  if (variant === "automation") {
    return (
      <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
        <div className="flex max-w-[95vw] items-center gap-1 rounded-full bg-[#1a1a1a]/95 px-2 py-2 text-white shadow-lg backdrop-blur-md">
          <Link
            href={HOME}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 font-display text-xs tracking-wider"
            aria-label="OARC Digital home"
          >
            O
          </Link>
          <nav className="hidden items-center gap-0.5 px-1 text-sm text-white/80 lg:flex">
            {links.slice(0, 3).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-2.5 py-1.5 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            {exitChrome.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href === INSTAGRAM ? "_blank" : undefined}
                rel={l.href === INSTAGRAM ? "noopener noreferrer" : undefined}
                className="rounded-full px-2.5 py-1.5 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[color:var(--oarc-accent)] px-3 py-2 text-xs font-semibold text-black sm:text-sm"
          >
            {OFFER} · {CAMPAIGN}
          </a>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md ${
        isLight
          ? "border-black/10 bg-white/70"
          : "border-white/10 bg-black/50"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href={HOME}
          className="font-display text-sm tracking-[0.18em] uppercase"
        >
          OARC Digital
        </Link>
        <nav
          className={`flex flex-wrap items-center gap-3 text-sm md:gap-4 ${
            isLight ? "text-neutral-700" : "text-neutral-300"
          }`}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 hover:opacity-100">
              {l.label}
            </a>
          ))}
          {exitChrome.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href === INSTAGRAM ? "_blank" : undefined}
              rel={l.href === INSTAGRAM ? "noopener noreferrer" : undefined}
              className="opacity-80 hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[color:var(--oarc-accent)] px-3 py-1.5 font-medium text-black"
          >
            WhatsApp · {OFFER}
          </a>
        </nav>
      </div>
    </header>
  );
}

/** Sticky / recurring exit band — Shift Happens 50% off + WhatsApp. */
export function StickyExitBand({
  waHref = WA_DEFAULT,
  tone = "dark",
}: {
  waHref?: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`sticky bottom-0 z-30 border-t ${
        dark
          ? "border-white/10 bg-[#0a0a0a]/95 text-white"
          : "border-black/10 bg-white/95 text-black"
      } backdrop-blur-md`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-3 sm:flex-row sm:items-center md:px-8">
        <div>
          <p className="text-sm font-semibold">
            <span className="rounded-full bg-[color:var(--oarc-accent)] px-2 py-0.5 text-xs font-bold text-black">
              {CAMPAIGN}
            </span>{" "}
            · {OFFER} for the next clients who contact now
          </p>
          <p
            className={`mt-1 text-xs ${dark ? "text-neutral-400" : "text-neutral-600"}`}
          >
            Soft window — when seats fill, the offer closes. No fake countdown.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[color:var(--oarc-accent)] px-4 py-2 text-sm font-semibold text-black"
          >
            {CTA_WA}
          </a>
          <a
            href={CONTACT}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              dark
                ? "border-white/25 hover:bg-white/10"
                : "border-black/20 hover:bg-black/5"
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

/** Mid-page Shift Happens band. */
export function ShiftHappensBand({
  waHref = WA_DEFAULT,
  tone = "dark",
}: {
  waHref?: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`rounded-3xl border px-6 py-10 md:px-10 ${
        dark
          ? "border-white/10 bg-[#151515] text-white"
          : "border-black/10 bg-white text-black shadow-sm"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.28em] opacity-60">
        {CAMPAIGN} campaign
      </p>
      <h2 className="mt-3 font-display text-2xl md:text-4xl">
        {OFFER} for the next clients who contact now
      </h2>
      <p
        className={`mt-3 max-w-2xl text-sm md:text-base ${
          dark ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        {CTA_URGENCY} WhatsApp {PHONE_DISPLAY} or use the contact form — honest
        offer for owners ready to move.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[color:var(--oarc-accent)] px-5 py-3 text-sm font-semibold text-black"
        >
          {CTA_CLAIM}
        </a>
        <a
          href={CONTACT}
          className={`rounded-full border px-5 py-3 text-sm font-semibold ${
            dark
              ? "border-white/25 hover:bg-white/10"
              : "border-black/20 hover:bg-black/5"
          }`}
        >
          Contact form
        </a>
        <a
          href={HOME}
          className={`rounded-full border px-5 py-3 text-sm font-semibold ${
            dark
              ? "border-white/25 hover:bg-white/10"
              : "border-black/20 hover:bg-black/5"
          }`}
        >
          oarcdigital.com
        </a>
      </div>
    </div>
  );
}

/** Internal money links — live 200 paths only. */
export function MoneyLinks({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-wrap gap-2">
      {MONEY_LINKS.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
            dark
              ? "border-white/15 text-neutral-300 hover:bg-white/10"
              : "border-black/10 text-neutral-700 hover:bg-black/5"
          }`}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export function FooterCta({
  videoSrc,
  tone = "dark",
  title = "Let's talk",
  subtitle = "OARC Digital · Birkirkara, Malta · Creative + AI systems. Month to month.",
  waHref = WA_DEFAULT,
}: {
  videoSrc?: string;
  tone?: "dark" | "light";
  title?: string;
  subtitle?: string;
  waHref?: string;
}) {
  const dark = tone === "dark";
  return (
    <footer
      className={`relative overflow-hidden border-t ${
        dark
          ? "border-white/10 bg-[#0f0f0f] text-white"
          : "border-black/10 bg-[#0a0a0a] text-white"
      }`}
    >
      {videoSrc ? (
        <div className="pointer-events-none absolute inset-0">
          <AutoplayVideo src={videoSrc} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        </div>
      ) : null}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3">
              <span className="rounded-full bg-[color:var(--oarc-accent)] px-2.5 py-1 text-xs font-bold text-black">
                {CAMPAIGN} · {OFFER}
              </span>
            </p>
            <p className="font-display text-3xl md:text-4xl">{title}</p>
            <p className="mt-3 max-w-md text-neutral-400">{subtitle}</p>
            <p className="mt-2 text-sm text-neutral-500">
              Next clients who contact now get {OFFER}. Soft window — seats
              limited.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[color:var(--oarc-accent)] px-5 py-3 text-sm font-semibold text-black"
            >
              {CTA_WA}
            </a>
            <a
              href={CONTACT}
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Contact
            </a>
            <a
              href={HOME}
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Home
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <MoneyLinks tone="dark" />
          <p className="text-xs text-neutral-500">
            WhatsApp {PHONE_DISPLAY} · {HOME.replace("https://", "")}
          </p>
        </div>
      </div>
    </footer>
  );
}
