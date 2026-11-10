"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const entries = [
  {
    title: "Creative & Growth",
    copy: "Brand, content and campaigns.",
    theme: "growth",
    image: "/attached_assets/generated_images/oarc-growth-card-v2.jpg",
    alt: "A colourful OARC creative and growth campaign composition",
  },
  {
    title: "AI & Automation",
    copy: "AI workers and workflows.",
    theme: "ai",
    video: "/attached_assets/SnapInsta.to_AQMfI7sCSVLU8tLxyZLjxlyaGvnAjtYAkNpyBEIAox0m6TApwOZNnf5Y2rfuYUhoqYXMDubqUVXcJjUk8q57WHMBNJrUR_W4lUx94QM_1764630517873.mp4",
    alt: "OARC ARC campaign film",
  },
  {
    title: "H360",
    copy: "Bookings, calls, orders and guest relationships. Connected.",
    theme: "systems",
    image: "/attached_assets/premium-work/h360-public-product-hub_b339c106.webp",
    alt: "H360 connected hospitality system",
  },
] as const;

export default function Section2() {
  return (
    <section id="growth-blueprint" className="bg-[#f2efe9] px-5 py-20 md:px-10 md:py-32" data-testid="section-growth-blueprint">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[.75fr_1.25fr] md:items-end">
          <h2 className="max-w-md text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[.83] tracking-[-.08em] text-[#171614]">
            What we do.
          </h2>
          <div className="max-w-xl md:pb-2">
            <Link
              href="/services/ai-consulting#enquiry"
              className="inline-flex items-center gap-2 border-b border-[#171614]/35 pb-1 text-sm font-semibold text-[#171614] transition-colors hover:border-[#c8102e]"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-[1.15fr_.85fr] md:grid-rows-2">
          {entries.map((entry, index) => (
            <Link
              href={`/services/ai-consulting?theme=${entry.theme}#enquiry`}
              key={entry.title}
              className={`group relative overflow-hidden bg-[#171614] text-[#f2efe9] ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-[4/3] md:h-full" : "aspect-[16/9]"} relative overflow-hidden`}>
                {"video" in entry ? (
                  <video
                    src={entry.video}
                    aria-label={entry.alt}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <img
                    src={entry.image}
                    alt={entry.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,22,20,.92),transparent_65%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <h3 className={`${index === 0 ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"} font-medium leading-[.9] tracking-[-.065em]`}>
                        {entry.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#f2efe9]/75 md:text-base">{entry.copy}</p>
                    </div>
                    <ArrowUpRight className="mb-1 h-6 w-6 shrink-0 text-[#e6ff76] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}