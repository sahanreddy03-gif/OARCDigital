import Link from "next/link";

/**
 * "What do you need?" — five plain choices that replace the Shift Happens
 * headline and the 16-card department rail on the homepage.
 * The smaller departments keep a homepage link in the text row underneath,
 * so no page loses its internal link from the homepage.
 */
const NEEDS = [
  {
    title: "More customers",
    text: "Google, ads and SEO that bring people who buy.",
    href: "/services/growth",
    image: "/attached_assets/generated_images/oarc-growth-card-v2.jpg",
  },
  {
    title: "Content & social",
    text: "We film, edit and post. You stay in your business.",
    href: "/services/social",
    image: "/attached_assets/generated_images/oarc-dept-creative.jpg",
  },
  {
    title: "AI staff",
    text: "A receptionist that answers every call and books it.",
    href: "/services/ai-staff",
    image: "/attached_assets/generated_images/oarc-dept-ai-staff.jpg",
  },
  {
    title: "Reputation",
    text: "More Google reviews. A name people trust.",
    href: "/services/reputation",
    image: "/attached_assets/generated_images/oarc-dept-reputation.jpg",
  },
  {
    title: "Automation",
    text: "Follow-ups, quotes and admin that run themselves.",
    href: "/services/automation",
    image: "/attached_assets/generated_images/oarc-dept-automation.jpg",
  },
] as const;

const MORE = [
  { label: "Creative", href: "/services/creative" },
  { label: "Sales", href: "/services/sales" },
  { label: "Media", href: "/services/media" },
  { label: "Brand", href: "/services/brand" },
  { label: "Operations", href: "/services/operations" },
  { label: "Clarity", href: "/services/clarity" },
  { label: "Transformation", href: "/services/transformation" },
  { label: "Products", href: "/h360" },
  { label: "Why OARC", href: "/why-oarc" },
] as const;

export default function HomepageNeedsSection() {
  return (
    <section
      id="departments"
      aria-labelledby="homepage-needs-title"
      className="bg-[#F2EFE9] px-4 py-16 text-[#171614] md:px-10 md:py-24"
      data-testid="homepage-needs"
    >
      <div className="mx-auto max-w-[1180px]">
        <h2
          id="homepage-needs-title"
          className="text-[clamp(2.4rem,5vw,3.9rem)] font-semibold leading-none tracking-[-0.045em]"
        >
          What do you{" "}
          <em className="font-normal tracking-[-0.02em]" style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}>
            need?
          </em>
        </h2>

        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5 md:mt-12">
          {NEEDS.map((need) => (
            <Link
              key={need.href}
              href={need.href}
              className="group flex overflow-hidden rounded-[18px] border border-[#171614]/10 bg-[#FAF9F6] transition-transform duration-200 hover:-translate-y-1 sm:flex-col"
            >
              <span className="block w-[38%] shrink-0 overflow-hidden sm:aspect-[4/3] sm:w-full">
                <img
                  src={need.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-1 flex-col gap-2 p-[18px] pb-5">
                <h3 className="text-[22px] font-semibold leading-[1.05] tracking-[-0.03em]">{need.title}</h3>
                <p className="flex-1 text-[15px] leading-snug text-[#6B655C]">{need.text}</p>
                <span className="text-sm font-semibold">See how →</span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#6B655C]">
          <span>Also:</span>
          {MORE.map((item) => (
            <Link key={item.href} href={item.href} className="underline decoration-[#171614]/20 underline-offset-4 hover:text-[#171614]">
              {item.label}
            </Link>
          ))}
        </p>
      </div>
    </section>
  );
}
