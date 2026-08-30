import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const WORK = [
  {
    href: "/new-work/tiffany",
    eyebrow: "NAMED PARTNERSHIP / HOSPITALITY",
    title: "Tiffany Champagne, Wine & Bar",
    description: "A social-first campaign system for a Portomaso hospitality venue.",
    image: "/attached_assets/premium-work/client-media/tiffany-hero.jpg",
    alt: "Tiffany Champagne, Wine & Bar hospitality setting",
  },
  {
    href: "/new-work/portomaso-casino",
    eyebrow: "NAMED PARTNERSHIP / VENUE",
    title: "Portomaso Casino",
    description: "Venue media shaped around atmosphere, events, and the public destination.",
    image: "/attached_assets/premium-work/client-media/portomaso-entrance.jpg",
    alt: "Portomaso Casino entrance",
  },
  {
    href: "/new-work/h360",
    eyebrow: "OARC-OWNED PRODUCT / HOSPITALITY",
    title: "H360",
    description: "A connected restaurant system for being found, booked, answered, served, and remembered.",
    image: "/attached_assets/premium-work/h360-public-product-hub_b339c106.webp",
    alt: "H360 restaurant product hub",
  },
] as const;

export default function HomepageWorkProof() {
  return (
    <section className="bg-[#f2efe9] py-16 md:py-24" aria-labelledby="homepage-work-proof-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
              Work with a source behind it
            </p>
            <h2 id="homepage-work-proof-title" className="text-3xl font-medium tracking-[-0.055em] text-zinc-950 md:text-5xl">
              Start with the work<br />we can show clearly.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
              Named partnerships and OARC-owned products, separated from illustrative concept studies and private systems.
            </p>
          </div>
          <Link href="/new-work" className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-950">
            Explore the full archive
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {WORK.map((item) => (
            <Link key={item.href} href={item.href} className="group overflow-hidden rounded-2xl bg-zinc-950 text-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              </div>
              <div className="flex min-h-[190px] flex-col p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">{item.eyebrow}</p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.045em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-white">
                  Read the record <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}