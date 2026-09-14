"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const entries = [
  ["01", "AI / automation", "Voice AI, agents and workflows that take work off the team's plate.", "ai", "/hero-cards/ai/ai-phone-agent.jpg", "Voice AI use cases, automation priorities and a first build sequence.", "Voice AI and automation visual"],
  ["02", "Digital / creative", "A sharper growth system across brand, content, paid and campaigns.", "growth", "/attached_assets/generated_images/oarc-growth-card-v2.jpg", "Channel priorities, creative direction and the next campaign decisions.", "Creative growth campaign visual"],
  ["03", "H360 / operating systems", "The connected layer from being found to being remembered.", "systems", "/attached_assets/premium-work/h360-public-product-hub_b339c106.webp", "System recommendations, workflow connections and practical next actions.", "H360 connected operating system visual"],
] as const;

export default function Section2() {
  return (
    <section id="growth-blueprint" className="bg-[#f2efe9] px-5 py-16 md:px-10 md:py-24" data-testid="section-growth-blueprint">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="kicker kicker-paper">The OARC Growth Blueprint</p>
            <h2 className="mt-6 text-4xl font-extrabold leading-[.92] tracking-[-.065em] md:text-6xl">Don&apos;t pick<br /><em className="font-normal">a service.</em></h2>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-base leading-relaxed text-[#0e0d0c]/65">Start with the pressure point in your business. OARC opens the blueprint, finds the leverage and helps you decide what deserves attention first.</p>
            <Link href="/services/ai-consulting#enquiry" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold underline decoration-[#0e0d0c]/20 underline-offset-8 transition-colors hover:decoration-[#0e0d0c]">Get the free blueprint <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {entries.map(([number, title, copy, theme, image, receive, alt]) => <Link href={`/services/ai-consulting?theme=${theme}#enquiry`} key={title} className="group overflow-hidden rounded-[10px] bg-[#0e0d0c] text-[#f2efe9] transition-transform duration-500 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8102e]"><div className="relative aspect-[16/9] overflow-hidden"><img src={image} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-[#0e0d0c]/10 to-transparent" /><span className="absolute left-6 top-5 font-mono text-xs text-[#f2efe9]/70">{number}</span></div><div className="min-h-[235px] p-6 md:p-8"><div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-bold tracking-[-.04em]">{title}</h3><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#c8102e] transition-transform group-hover:translate-x-1" /></div><p className="mt-3 max-w-xs text-sm leading-relaxed text-[#f2efe9]/55">{copy}</p><div className="mt-6 border-t border-[#f2efe9]/15 pt-4"><p className="font-mono text-[10px] uppercase tracking-[.12em] text-[#c8102e]">You receive</p><p className="mt-2 text-sm font-semibold text-[#f2efe9]/80">{receive}</p></div></div></Link>)}
        </div>
      </div>
    </section>
  );
}