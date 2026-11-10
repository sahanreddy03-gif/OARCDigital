import Link from "next/link";

/**
 * AI staff + custom AI builds, one section. Replaces HireAIEmployeesSection +
 * LetsTalkRevenueSection on the homepage (endless glow/particle loops and
 * 2–3 MB avatar PNGs made scrolling stutter).
 * Design system v3 (Notion): ink ground, paper words, ONE yellow (#F9FF84)
 * italic word on its own line; cobalt (#0035AD) = "AI, systems, the fix".
 * No images, no animation: fast, and every link is plain text Google can read.
 */
const AI_STAFF = [
  { title: "Sales rep", text: "Follows up every lead and books the call.", href: "/services/ai-sdr-agent" },
  { title: "Customer support", text: "Answers on chat, email and WhatsApp.", href: "/services/ai-support-specialist" },
  { title: "Appointment booker", text: "Fills your calendar and sends reminders.", href: "/services/ai-appointment-booker" },
  { title: "Admin assistant", text: "Handles forms, emails and data entry.", href: "/services/ai-admin-agent" },
  { title: "Data analyst", text: "Turns your numbers into a weekly report.", href: "/services/ai-data-analyst" },
  { title: "Content strategist", text: "Plans and drafts posts and emails.", href: "/services/content-marketing" },
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
      className="bg-[#0E0E0E] px-4 py-20 text-[#F5F3EE] md:px-10 md:py-28"
      data-testid="homepage-ai-staff"
    >
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

        <ol className="mt-14 grid border-t border-white/15 md:mt-20 md:grid-cols-2 md:gap-x-12">
          {AI_STAFF.map((item, i) => (
            <li key={item.href} className="border-b border-white/15">
              <Link href={item.href} className="group flex items-baseline gap-5 py-5 md:py-6">
                <span className="w-7 shrink-0 text-xs font-semibold tabular-nums text-[#F5F3EE]/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-[26px] leading-none tracking-[-0.01em] md:text-[30px]" style={serif}>
                    {item.title}
                  </span>
                  <span className="mt-2 block text-[15px] text-[#F5F3EE]/60">{item.text}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-[#F5F3EE]/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#F5F3EE]"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 rounded-3xl bg-[#0035AD] p-7 md:mt-20 md:grid-cols-[.9fr_1.1fr] md:items-center md:p-12">
          <div>
            <h3 className="text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.01em]" style={serif}>
              Need something custom?
            </h3>
            <p className="mt-3 max-w-sm text-base text-[#F5F3EE]/80">
              We design and build AI tools, apps and automations around how you already work.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2.5 md:justify-end">
            {CUSTOM.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full border border-white/35 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#F5F3EE] hover:text-[#0035AD]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/ai-agents"
            className="inline-flex items-center rounded-full bg-[#F5F3EE] px-6 py-3.5 text-[15px] font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
          >
            Meet the AI staff →
          </Link>
          <Link href="/agent-economy" className="border-b border-white/30 pb-1 text-sm font-semibold hover:border-white">
            What is the agent economy?
          </Link>
        </div>
      </div>
    </section>
  );
}
