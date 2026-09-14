import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const WORK = [
  {
    href: "/our-work/tiffany",
    title: "Tiffany Champagne Wine & Bar",
    description: "Social content and campaigns.",
    image: "/attached_assets/premium-work/client-media/tiffany-hero.jpg",
    alt: "Tiffany Champagne Wine & Bar hospitality setting",
  },
  {
    href: "/our-work/portomaso-casino",
    title: "Portomaso Casino",
    description: "Campaigns, events and venue content.",
    image: "/attached_assets/premium-work/client-media/portomaso-entrance.jpg",
    alt: "Portomaso Casino entrance",
  },
  {
    href: "/our-work/hearth-test-kitchen",
    title: "Hearth Test Kitchen",
    description: "Brand, content and paid creative.",
    image: "/attached_assets/premium-work/hearth-test-kitchen_bbfae260.jpg",
    alt: "Hearth Test Kitchen",
  },
] as const;

export default function HomepageWorkProof() {
  return (
    <section id="homepage-work" className="bg-[#f2efe9] px-5 py-20 md:px-10 md:py-32" aria-labelledby="homepage-work-proof-title">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-7 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 id="homepage-work-proof-title" className="max-w-2xl text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[.84] tracking-[-.08em] text-[#171614]">
            Our work.
          </h2>
          <Link href="/our-work" className="group inline-flex items-center gap-2 border-b border-[#171614]/30 pb-1 text-sm font-semibold text-[#171614] transition-colors hover:border-[#171614]">
            View all work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-[1.18fr_.82fr]">
          {WORK.map((item, index) => (
            <Link key={item.href} href={item.href} className={`group overflow-hidden bg-[#171614] text-[#f2efe9] ${index === 0 ? "md:row-span-2" : ""}`}>
              <div className={`${index === 0 ? "aspect-[4/3] md:aspect-auto md:h-[calc(100%-172px)]" : "aspect-[16/10]"} overflow-hidden`}>
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className={`flex flex-col p-6 ${index === 0 ? "min-h-[172px] md:p-8" : "min-h-[156px]"}`}>
                <h3 className={`${index === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"} font-medium leading-[.92] tracking-[-.06em]`}>{item.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#f2efe9]/70">{item.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm text-[#e6ff76]">
                  View project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}