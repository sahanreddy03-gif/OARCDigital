import Link from "next/link";

/**
 * "What do you need?" — 15 plain cards (Ship sits inside Custom software), replacing the
 * Shift Happens headline and the 16-card department rail on the homepage.
 * Every department page keeps its internal link from the homepage.
 */
const NEEDS = [
  {
    title: "Get more customers",
    tone: "ink",
    text: "Digital marketing for Malta businesses: ads, SEO and content.",
    href: "/services/growth",
    image: "/attached_assets/generated_images/oarc-growth-card-v2.jpg",
  },
  {
    title: "Hire an AI employee",
    tone: "cobalt",
    text: "AI staff for sales, support and bookings. Works 24/7.",
    href: "/services/ai-staff",
    image: "/attached_assets/generated_images/oarc-dept-ai-staff.jpg",
  },
  {
    title: "Build a brand people pay more for",
    tone: "espresso",
    text: "Branding agency: logo, identity and brand strategy.",
    href: "/services/brand",
    image: "/attached_assets/generated_images/oarc-dept-brand.jpg",
  },
  {
    title: "Answer every enquiry in seconds",
    tone: "cobalt",
    text: "AI receptionist for WhatsApp, calls, DMs and email.",
    href: "/tom",
    image: "/attached_assets/generated_images/oarc-dept-enquiries.jpg",
  },
  {
    title: "Close more sales",
    tone: "ink",
    text: "Sales systems and follow-up that turn leads into customers.",
    href: "/services/sales",
    image: "/attached_assets/generated_images/oarc-dept-sales.jpg",
  },
  {
    title: "Let your business run itself",
    tone: "cobalt",
    text: "Business automation that connects all your tools.",
    href: "/services/automation",
    image: "/attached_assets/generated_images/oarc-dept-automation.jpg",
  },
  {
    title: "Look like the biggest brand in your market",
    tone: "espresso",
    text: "Creative agency: ads, video, design and websites.",
    href: "/services/creative",
    image: "/attached_assets/generated_images/oarc-dept-creative.jpg",
  },
  {
    title: "Know what's actually working",
    tone: "cobalt",
    text: "Marketing reports that tell you what to do next.",
    href: "/services/clarity",
    image: "/attached_assets/generated_images/oarc-dept-clarity.jpg",
  },
  {
    title: "Win on social media",
    tone: "ink",
    text: "Social media management: we plan, film, edit and post.",
    href: "/services/social",
    image: "/attached_assets/generated_images/oarc-dept-social.jpg",
  },
  {
    title: "Custom software, built for you",
    tone: "cobalt",
    text: "Apps and systems built in weeks. You own the code.",
    href: "/services/transformation",
    image: "/attached_assets/generated_images/oarc-dept-transformation.jpg",
  },
  {
    title: "Run your restaurant on one system",
    tone: "espresso",
    text: "H360: QR menus, kitchen display, payments, loyalty.",
    href: "/h360",
    image: "/attached_assets/generated_images/oarc-dept-products.jpg",
  },
  {
    title: "Get 10+ hours back every week",
    tone: "cobalt",
    text: "We take the repetitive admin off your plate.",
    href: "/services/operations",
    image: "/attached_assets/generated_images/oarc-dept-operations.jpg",
  },
  {
    title: "Ads that pay for themselves",
    tone: "ink",
    text: "Google, Meta and TikTok ads, managed in Malta.",
    href: "/services/media",
    image: "/attached_assets/generated_images/oarc-dept-media.jpg",
  },
  {
    title: "Get famous in Malta",
    tone: "cobalt",
    text: "PR, press, creators and 5-star Google reviews.",
    href: "/services/reputation",
    image: "/attached_assets/generated_images/oarc-dept-reputation.jpg",
  },
  {
    title: "Why OARC, not another agency",
    tone: "espresso",
    text: "We build working systems, not reports.",
    href: "/why-oarc",
    image: "/attached_assets/generated_images/oarc-dept-compare.jpg",
  },
] as const;

/**
 * Notion v3, three trios in one repeat: black, white, brown, white. White sits between
 * black and brown so the two dark cards never touch (in 3 columns, in any direction).
 * ink (yellow title, paper text), white = AI and systems (cobalt title, ink text),
 * espresso = brand, money, restaurants (yellow title, paper text).
 */
const TONES = {
  ink: { card: "bg-[#0E0E0E] text-[#F5F3EE]", title: "#F9FF84" },
  cobalt: { card: "bg-white text-[#0E0E0E] ring-1 ring-[#171614]/10", title: "#0035AD" },
  espresso: { card: "bg-[#3E2723] text-[#F5F3EE]", title: "#F9FF84" },
} as const;

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

        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {NEEDS.map((need) => (
            <Link
              key={need.title}
              href={need.href}
              className={`group flex overflow-hidden rounded-[18px] ${TONES[need.tone].card} transition-transform duration-200 hover:-translate-y-1 sm:flex-col`}
            >
              <span className="block w-[38%] shrink-0 overflow-hidden sm:aspect-[16/10] sm:w-full">
                <img
                  src={need.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-1 flex-col p-5 sm:p-6">
                <h3
                  className="text-[32px] font-normal leading-[1] tracking-[-0.02em] sm:text-[38px]"
                  style={{ color: TONES[need.tone].title, fontFamily: "var(--font-instrument-serif-roman), Georgia, serif" }}
                >
                  {need.title}
                </h3>
                <p
                  className="mt-3 flex-1 text-[17px] leading-[1.45]"
                  style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
                >
                  {need.text}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 self-end text-[26px] leading-none transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
