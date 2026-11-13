import Link from "next/link";

/**
 * AI staff + custom AI builds, one section. Replaces HireAIEmployeesSection +
 * LetsTalkRevenueSection on the homepage (endless glow/particle loops and
 * 2–3 MB avatar PNGs made scrolling stutter).
 * Design system v3 (Notion): ink ground, paper words, ONE yellow (#F9FF84)
 * italic phrase; cobalt (#0035AD) = "AI, systems, the fix".
 * "Glass" is drawn with gradients and an inner highlight, not backdrop-blur,
 * so it costs nothing while scrolling. Reveal-on-scroll is pure CSS
 * (animation-timeline: view()), skipped where unsupported or reduced motion.
 */
const AI_STAFF = [
  { title: "Sales rep", text: "Tom calls back every lead and books the meeting.", href: "/services/ai-sdr-agent" },
  { title: "Customer support", text: "Tom answers calls, chat and WhatsApp, day and night.", href: "/services/ai-support-specialist" },
  { title: "Appointment booker", text: "Fills your calendar and sends reminders.", href: "/services/ai-appointment-booker" },
  { title: "Admin assistant", text: "Handles forms, emails and data entry.", href: "/services/ai-admin-agent" },
  { title: "Data analyst", text: "Turns your numbers into a weekly report.", href: "/services/ai-data-analyst" },
  { title: "Content strategist", text: "Plans and drafts posts and emails.", href: "/services/content-marketing" },
  { title: "Compliance checker", text: "Checks documents against your rules.", href: "/services/ai-compliance-auditor" },
  { title: "Business development", text: "Finds and qualifies new prospects.", href: "/services/lead-generation" },
] as const;

const CUSTOM = [
  { label: "Custom AI agents", href: "/services/custom-ai-agents" },
  { label: "Custom AI solutions", href: "/services/custom-software-development" },
  { label: "Mobile apps", href: "/services/mobile-apps-development" },
  { label: "Web apps", href: "/services/web-apps-development" },
  { label: "SaaS products", href: "/services/saas-development" },
  { label: "MVP in weeks", href: "/services/mvp-development" },
  { label: "E-commerce", href: "/services/ecommerce-development" },
  { label: "Shopify", href: "/services/shopify-development" },
  { label: "WordPress", href: "/services/wordpress-development" },
  { label: "API & integrations", href: "/services/api-integration-services" },
  { label: "Marketing automation", href: "/services/marketing-automation-suite" },
  { label: "Databases", href: "/services/database-design" },
  { label: "DevOps & hosting", href: "/services/devops-services" },
  { label: "AI consulting", href: "/services/ai-consulting" },
] as const;

const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

const GLASS =
  "relative rounded-2xl border border-white/[0.14] bg-[linear-gradient(145deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-[transform,background,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))]";

export default function HomepageAIStaff() {
  return (
    <section
      aria-labelledby="homepage-ai-staff-title"
      className="oarc-ai bg-[#0E0E0E] px-4 py-20 text-[#F5F3EE] md:px-10 md:py-28"
      data-testid="homepage-ai-staff"
    >
      <style>{`
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .oarc-ai .oarc-reveal { animation: oarc-rise linear both; animation-timeline: view(); animation-range: entry 0% entry 60%; }
          }
        }
        @keyframes oarc-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
      `}</style>
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 md:grid-cols-[1.15fr_.85fr] md:items-end">
          <h2
            id="homepage-ai-staff-title"
            className="text-[clamp(3rem,7vw,6rem)] font-normal leading-[.92] tracking-[-0.02em]"
            style={serif}
          >
            AI staff that
            <br />
            <em className="text-[#F9FF84]">never clock out.</em>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-[#F5F3EE]/70 md:text-lg">
            Ready-made AI employees for sales, support, bookings and admin. Trained on your business, checked by
            our team in Malta.
          </p>
        </div>

        {/* Featured: Tom */}
        <Link
          href="/voice-ai-worker"
          className={`oarc-reveal group mt-14 flex flex-col gap-6 p-7 md:mt-16 md:flex-row md:items-center md:justify-between md:p-10 ${GLASS}`}
        >
          <span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F3EE]/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F9FF84]" aria-hidden="true" /> Live in Malta businesses
            </span>
            <span className="mt-3 block text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none" style={serif}>
              Meet Tom, your Voice AI Worker.
            </span>
            <span className="mt-3 block max-w-xl text-base text-[#F5F3EE]/70">
              Answers every call, sells, supports customers and books them in. In English, Maltese and Italian.
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#F5F3EE] px-6 py-3.5 text-[15px] font-semibold text-[#0E0E0E] transition-transform group-hover:translate-x-1 md:self-center">
            Hear Tom answer →
          </span>
        </Link>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {AI_STAFF.map((item) => (
            <li key={item.title} className="oarc-reveal">
              <Link href={item.href} className={`group flex h-full flex-col p-5 ${GLASS}`}>
                <span className="flex items-start justify-between gap-3">
                  <span className="text-[26px] leading-none" style={serif}>
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 text-sm transition-colors group-hover:border-transparent group-hover:bg-[#F5F3EE] group-hover:text-[#0E0E0E]"
                  >
                    →
                  </span>
                </span>
                <span className="mt-3 text-[15px] leading-snug text-[#F5F3EE]/65">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="oarc-reveal mt-14 rounded-3xl bg-[#0035AD] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] md:mt-20 md:p-12">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <h3 className="text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.01em]" style={serif}>
                Need something custom?
              </h3>
              <p className="mt-3 max-w-sm text-base text-[#F5F3EE]/80">
                Apps, AI tools, websites and systems, designed and built by our team around how you already work.
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2.5">
              {CUSTOM.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/[0.08] px-4 py-2.5 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-colors hover:bg-[#F5F3EE] hover:text-[#0035AD]"
                  >
                    {item.label}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/ai-agents"
            className="inline-flex items-center rounded-full bg-[#F5F3EE] px-6 py-3.5 text-[15px] font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
          >
            Meet all the AI staff →
          </Link>
          <Link href="/ai" className="border-b border-white/30 pb-1 text-sm font-semibold hover:border-white" data-testid="link-home-ai-industry">
            AI systems by industry: real estate, law firms
          </Link>
          <Link href="/agent-economy" className="border-b border-white/30 pb-1 text-sm font-semibold hover:border-white">
            What is the agent economy?
          </Link>
        </div>
      </div>
    </section>
  );
}
