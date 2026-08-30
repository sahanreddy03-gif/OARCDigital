import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Kept as a compatibility export for older compositions. Quantified proof
 * belongs only where it can be tied to a visible, approved source.
 */
export function SuccessInNumbers() {
  return (
    <section className="bg-[#0A2818] py-20 text-white md:py-28" data-testid="section-success-numbers">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
          Evidence before assertion
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">
              See the work in its proper context.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/65">
              Public product records, named partnerships, protected systems, and clearly labelled concept studies—each with its evidence state in view.
            </p>
          </div>
          <Link href="/new-work" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
            Browse New Work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}