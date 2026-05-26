import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  "Hospitality",
  "Fintech",
  "Real Estate",
  "iGaming",
  "Retail",
  "Health & Wellness",
  "SaaS",
  "Education",
];

export default function Section2() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-16 lg:py-20 bg-white"
      data-testid="section-phone-brands"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 rounded-full bg-[#23AACA]/30" />
      <div className="absolute bottom-32 right-20 w-2 h-2 rounded-full bg-[#23AACA]/20" />
      <div className="absolute top-40 right-[15%] w-4 h-1 bg-[#23AACA]/40 rotate-45" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 lg:mb-16">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="text-sm font-medium text-zinc-500 mb-4 tracking-wide"
              data-testid="text-company-label"
            >
              OARC Digital
            </p>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.1] mb-6"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              data-testid="text-social-first"
            >
              The revenue-driven<br />
              <span className="text-[#65a30d]">Social first</span> partner<br />
              you&apos;ve been looking for
            </h2>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link href="/services">
                <Button
                  className="bg-black hover:bg-zinc-800 text-white rounded-full px-6 py-5 h-auto text-sm font-semibold flex items-center gap-2"
                  data-testid="button-browse-services"
                >
                  Browse Our Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/why-us">
                <span
                  className="text-sm font-medium text-zinc-700 hover:text-black flex items-center gap-1 transition-colors cursor-pointer"
                  data-testid="link-meet-team"
                >
                  Meet The Team
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Tilted Phone Mockup */}
          <div className="relative flex-shrink-0">
            <div
              className="relative w-[140px] md:w-[160px] lg:w-[180px]"
              style={{ transform: "rotate(6deg)", transformOrigin: "center center" }}
            >
              <div className="relative bg-zinc-900 rounded-[2rem] p-1.5 shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-900 rounded-b-xl z-20" />
                <div
                  className="relative bg-black rounded-[1.5rem] overflow-hidden"
                  style={{ aspectRatio: "9/19" }}
                >
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/phone-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="absolute -top-3 -right-3">
                <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                  <path d="M5 15 Q15 10 25 15" stroke="#23AACA" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div className="absolute -bottom-3 -left-3">
                <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                  <path d="M5 15 Q15 20 25 15" stroke="#23AACA" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry strip — replaces scrolling icon marquee */}
      <div className="relative z-10 px-6">
        <div className="text-center mb-7">
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-zinc-900"
            data-testid="ambitious-brands-heading"
          >
            We grow ambitious brands with{" "}
            <br className="hidden sm:block" />
            <span className="text-zinc-900">Social, Paid, Creative</span>{" "}
            <span className="text-zinc-400">and</span>{" "}
            <span className="text-zinc-900">Influencer</span>
          </h3>
        </div>

        {/* Industry chips — text-only, Google-readable entity names */}
        <div
          className="flex flex-wrap justify-center gap-2.5 md:gap-3 max-w-3xl mx-auto"
          data-testid="industry-chips"
          aria-label="Industries we serve"
        >
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="inline-block rounded-full px-5 py-2 text-sm font-medium text-zinc-600 transition-colors"
              style={{
                border: "1px solid #e4e4e7",
                backgroundColor: "#fafafa",
                letterSpacing: "0.01em",
              }}
              data-testid={`chip-industry-${industry.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              {industry}
            </span>
          ))}
        </div>

        {/* Subtle caption */}
        <p
          className="text-center text-xs mt-5 font-medium uppercase tracking-[0.18em]"
          style={{ color: "rgba(0,0,0,0.3)" }}
        >
          Across 8 key industries in Malta and beyond
        </p>
      </div>
    </section>
  );
}
