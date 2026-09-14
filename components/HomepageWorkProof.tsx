import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const WORK = [
  {
    href: "/our-work/tiffany",
    eyebrow: "NAMED PARTNERSHIP / HOSPITALITY",
    title: "Tiffany Champagne, Wine & Bar",
    description: "A social-first campaign system for a Portomaso hospitality venue.",
    image: "/attached_assets/premium-work/client-media/tiffany-hero.jpg",
    alt: "Tiffany Champagne, Wine & Bar hospitality setting",
  },
  {
    href: "/our-work/portomaso-casino",
    eyebrow: "NAMED PARTNERSHIP / VENUE",
    title: "Portomaso Casino",
    description: "Venue media shaped around atmosphere, events, and the public destination.",
    image: "/attached_assets/premium-work/client-media/portomaso-entrance.jpg",
    alt: "Portomaso Casino entrance",
  },
  {
    href: "/our-work/h360",
    eyebrow: "OARC-OWNED PRODUCT / HOSPITALITY",
    title: "H360",
    description: "A connected restaurant system for being found, booked, answered, served, and remembered.",
    image: "/attached_assets/premium-work/h360-public-product-hub_b339c106.webp",
    alt: "H360 restaurant product hub",
  },
] as const;

export default function HomepageWorkProof() {
  return (
    <section className="bg-[#f2efe9] py-20 md:py-32" aria-labelledby="homepage-work-proof-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-7 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
              Selected work
            </p>
            <h2 id="homepage-work-proof-title" className="max-w-xl text-4xl font-medium tracking-[-0.06em] text-zinc-950 md:text-6xl">
              Work.
              <span className="font-serif italic font-normal"> Out in the world.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">
              Hospitality, gaming and OARC-owned products, selected from the full record.
            </p>
          </div>
          <Link href="/our-work" className="group inline-flex items-center gap-3 text-sm font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-950">
            View all work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.18fr_0.82fr]">
          {WORK.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group overflow-hidden rounded-[1.25rem] bg-zinc-950 text-white ${index === 0 ? "md:row-span-2" : ""}`}
            >
              <div className={`${index === 0 ? "aspect-[4/3] md:aspect-auto md:h-[calc(100%-200px)]" : "aspect-[16/10]"} overflow-hidden`}>
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              </div>
              <div className={`flex flex-col p-6 ${index === 0 ? "min-h-[200px] md:p-8" : "min-h-[176px]"}`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">{item.eyebrow}</p>
                <h3 className={`${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"} mt-5 font-medium tracking-[-0.055em]`}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-white">
                  Open project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}