import Link from "next/link";
import { homepageQuotes } from "@/lib/reviews/approvedQuotes";

/**
 * "Our work in Malta" — dark proof section: client logos, three real projects
 * and the approved client quotes. Replaces HomepageWorkProof + ApprovedQuotes
 * on the homepage. Keeps the film watch-page link (video indexing) and the
 * /our-work links.
 */
const LOGOS = [
  { name: "Kreta", src: "/brand-logos/recreated/kreta.svg" },
  { name: "BrewDog", src: "/brand-logos/normalized/brewdog.png" },
  { name: "32Red", src: "/brand-logos/normalized/32red.png" },
  { name: "The Alchemist", src: "/brand-logos/recreated/alchemist.svg" },
  { name: "Palino", src: "/brand-logos/normalized/palino.png" },
] as const;

const WORK = [
  {
    href: "/our-work/tiffany",
    title: "Tiffany Champagne Wine & Bar",
    image: "/attached_assets/premium-work/client-media/tiffany-hero.jpg",
    alt: "Tiffany Champagne Wine & Bar hospitality setting",
  },
  {
    href: "/our-work/portomaso-casino",
    title: "Portomaso Casino",
    image: "/attached_assets/premium-work/client-media/portomaso-entrance.jpg",
    alt: "Portomaso Casino entrance",
  },
  {
    href: "/our-work/spinola-gin-fest",
    title: "Spinola Gin Fest",
    image: "/attached_assets/premium-work/gin-fest-poster.jpg",
    alt: "Spinola Gin Fest festival stage and crowd",
  },
] as const;

const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

export default function HomepageOurWork() {
  return (
    <section
      id="homepage-work"
      aria-labelledby="homepage-work-title"
      className="bg-[#171614] px-4 py-16 text-[#F2EFE9] md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2
            id="homepage-work-title"
            className="text-[clamp(2.4rem,5vw,3.9rem)] font-semibold leading-none tracking-[-0.045em]"
          >
            Our work <em className="font-normal tracking-[-0.02em]" style={serif}>in Malta.</em>
          </h2>
          <div className="flex flex-wrap gap-6 text-sm font-semibold">
            <Link href="/videos/oarc-digital-malta-film" className="border-b border-[#F2EFE9]/30 pb-1 hover:border-[#F2EFE9]">
              ▶ Watch our film
            </Link>
            <Link href="/our-work" className="border-b border-[#F2EFE9]/30 pb-1 hover:border-[#F2EFE9]">
              View all work →
            </Link>
          </div>
        </div>

        <div className="my-10 flex flex-wrap items-center justify-center gap-6 border-y border-white/10 py-7 md:my-12 md:justify-between md:gap-10">
          {LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              decoding="async"
              className="h-[22px] w-auto opacity-75 brightness-0 invert md:h-[30px]"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-[1.3fr_1fr_1fr]">
          {WORK.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl bg-[#222] ${
                index === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[4/5]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-b from-transparent from-55% to-black/70" aria-hidden="true" />
              <span className="absolute inset-x-4 bottom-3.5 text-base font-semibold [text-shadow:0_2px_10px_rgba(0,0,0,.6)] md:text-lg">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-3.5 grid gap-3.5 md:grid-cols-2">
          {homepageQuotes.map((item) => (
            <figure key={item.quote} className="rounded-2xl bg-[#1F1D1A] p-6 md:p-7">
              <blockquote className="text-[22px] leading-[1.2] md:text-2xl" style={serif}>
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-3.5 text-sm text-[#F2EFE9]/60">{item.credit.replace(" — ", ", ")}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
