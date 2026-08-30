import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Compatibility export for the former testimonial surface. We do not publish
 * attributed quotes or outcome figures without an approved source record.
 */
export default function Testimonials() {
  return (
    <section className="bg-[#f2efe9] py-16 md:py-24" aria-labelledby="evidence-led-work-title">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
          Evidence-led work
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 id="evidence-led-work-title" className="max-w-2xl text-3xl font-medium tracking-[-0.055em] text-zinc-950 md:text-5xl">
            A useful case study<br />should show its source.
          </h2>
          <Link href="/new-work" className="inline-flex items-center gap-2 text-sm text-zinc-950 underline underline-offset-4">
            Read the archive <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}