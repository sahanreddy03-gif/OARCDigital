import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * "What we do." — plain text, three columns, real links to each service page.
 * Easy to scan for people and easy to read for Google (no images or video).
 */
const columns = [
  {
    title: "Creative & growth",
    copy: "We build your brand, make the content and run the ads that bring customers in.",
    links: [
      { label: "Branding", href: "/services/branding" },
      { label: "Social media", href: "/services/social-media-creative-management" },
      { label: "Video production", href: "/services/video-production" },
      { label: "Google & Meta ads", href: "/services/paid-advertising" },
      { label: "SEO", href: "/services/seo-services" },
      { label: "Website design", href: "/services/web-design" },
    ],
  },
  {
    title: "AI staff & automation",
    copy: "AI staff that sell, support and book for you, and systems built around how your business works.",
    links: [
      { label: "AI receptionist", href: "/services/ai-voice-receptionist" },
      { label: "AI sales agent", href: "/services/ai-sdr-agent" },
      { label: "AI support", href: "/services/ai-support-specialist" },
      { label: "Custom AI agents", href: "/services/custom-ai-agents" },
      { label: "Automation", href: "/services/automation" },
      { label: "Custom software", href: "/services/custom-software-development" },
    ],
  },
  {
    title: "H360 for hospitality",
    copy: "Bookings, calls, orders and guest relationships for restaurants and venues, in one connected system.",
    links: [{ label: "See H360", href: "/h360" }],
  },
] as const;

export default function Section2() {
  return (
    <section id="growth-blueprint" className="bg-[#f2efe9] px-5 py-20 md:px-10 md:py-28" data-testid="section-growth-blueprint">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[clamp(2.6rem,6vw,5.2rem)] font-semibold leading-[.88] tracking-[-.06em] text-[#171614]">
            What we do.
          </h2>
          <Link
            href="/services/ai-consulting#enquiry"
            className="inline-flex w-fit items-center gap-2 border-b border-[#171614]/35 pb-1 text-sm font-semibold text-[#171614] transition-colors hover:border-[#171614]"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-10 border-t border-[#171614]/15 pt-10 md:mt-16 md:grid-cols-3 md:gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-2xl font-semibold tracking-[-.03em] text-[#171614] md:text-3xl">{col.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-[#171614]/70">{col.copy}</p>
              <ul className="mt-6 grid gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-base font-medium text-[#171614] underline decoration-[#171614]/20 underline-offset-4 hover:decoration-[#171614]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
