import Link from "next/link";

/**
 * AI staff + custom AI products in one calm section.
 * Replaces HireAIEmployeesSection + LetsTalkRevenueSection on the homepage,
 * which ran endless blurred-glow and particle animations and stuttered on scroll.
 * Design system v3 (Notion): cobalt ground = "AI, systems, the fix",
 * paper words, one yellow word. No animation; every old link is kept.
 */
const AI_STAFF = [
  { title: "Sales rep", text: "Follows up every lead and books the call.", href: "/services/ai-sdr-agent" },
  { title: "Customer support", text: "Answers questions on chat, email and WhatsApp.", href: "/services/ai-support-specialist" },
  { title: "Appointment booker", text: "Fills your calendar and sends the reminders.", href: "/services/ai-appointment-booker" },
  { title: "Admin assistant", text: "Handles forms, emails and data entry.", href: "/services/ai-admin-agent" },
  { title: "Data analyst", text: "Turns your numbers into a clear weekly report.", href: "/services/ai-data-analyst" },
  { title: "Content strategist", text: "Plans and drafts your posts and emails.", href: "/services/content-marketing" },
  { title: "Compliance checker", text: "Checks documents against your rules.", href: "/services/ai-compliance-auditor" },
  { title: "Business development", text: "Finds and qualifies new prospects.", href: "/services/lead-generation" },
] as const;

const CUSTOM = [
  { label: "AI consulting", href: "/services/ai-consulting" },
  { label: "Custom AI solutions", href: "/services/custom-software-development" },
  { label: "Mobile apps", href: "/services/mobile-apps-development" },
  { label: "Web apps", href: "/services/web-apps-development" },
  { label: "Marketing automation", href: "/services/marketing-automation-suite" },
] as const;

const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

export default function HomepageAIStaff() {
  return (
    <section
      aria-labelledby="homepage-ai-staff-title"
      className="bg-[#0035AD] px-4 py-16 text-[#F5F3EE] md:px-10 md:py-24"
      data-testid="homepage-ai-staff"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <h2
            id="homepage-ai-staff-title"
            className="text-[clamp(2.4rem,5.4vw,4.4rem)] font-semibold leading-[.95] tracking-[-0.045em]"
          >
            AI staff that work
            <br />
            <em className="font-normal tracking-[-0.02em] text-[#F9FF84]" style={serif}>
              for you.
            </em>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-[#F5F3EE]/80 md:text-lg">
            Ready-made AI employees for sales, support, bookings and admin. Or a custom AI product, built around
            your business.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
          {AI_STAFF.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition-colors hover:bg-white/[0.12]"
            >
              <h3 className="flex items-center justify-between gap-3 text-lg font-semibold tracking-[-0.02em]">
                {item.title}
                <span aria-hidden="true" className="opacity-60 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </h3>
              <p className="mt-1.5 text-[15px] leading-snug text-[#F5F3EE]/70">{item.text}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">Need something custom?</h3>
            <p className="mt-2 max-w-sm text-base text-[#F5F3EE]/75">
              We design and build AI tools, apps and automations that fit how you already work.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2.5">
            {CUSTOM.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full border border-white/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-[#0035AD]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/ai-agents"
            className="inline-flex items-center gap-2 rounded-full bg-[#F5F3EE] px-6 py-3.5 text-[15px] font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
          >
            Meet the AI staff →
          </Link>
          <Link href="/agent-economy" className="border-b border-white/35 pb-1 text-sm font-semibold hover:border-white">
            What is the agent economy?
          </Link>
        </div>
      </div>
    </section>
  );
}
