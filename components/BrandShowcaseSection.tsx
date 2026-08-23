"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { featuredCaseStudies } from "@/data/caseStudies";
import { registerGSAP, gsap, EASE, DUR } from "@/lib/motion/gsap-system";

export default function BrandShowcaseSection() {
  const proofStudy = featuredCaseStudies[0];
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      if (!contentRef.current) return;
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: DUR.slow,
          ease: EASE.out,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        },
      );
    }, sectionRef.current ?? undefined);

    return () => ctx.revert();
  }, []);

  if (!proofStudy) return null;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f2efe9] py-16 md:py-24"
      data-testid="section-brand-showcase"
    >
      <div ref={contentRef} className="container mx-auto max-w-6xl px-5 md:px-8" style={{ opacity: 0 }}>
        <div className="mb-9 max-w-xl md:mb-12">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
            Selected work
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.055em] text-zinc-950 md:text-5xl">
            Work with a source behind it.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Our first published project story is an OARC-owned product with a direct public
            verification link.
          </p>
        </div>

        <Link href={`/case-studies/${proofStudy.slug}`} className="group block">
          <div className="grid overflow-hidden rounded-2xl bg-zinc-950 md:grid-cols-[1.1fr_0.9fr]">
            <div className="min-h-[310px] overflow-hidden md:min-h-[480px]">
              <img
                src={proofStudy.thumbnailImage}
                alt="PJAZZA marketplace interface shown on a mobile screen"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-between p-7 text-white md:p-10">
              <div>
                <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                  OARC-owned product
                </p>
                <h3 className="text-4xl font-medium tracking-[-0.06em] md:text-5xl">{proofStudy.brand}</h3>
                <p className="mt-3 max-w-sm text-xl leading-tight tracking-[-0.04em] text-white/72">
                  {proofStudy.description}
                </p>
              </div>
              <span className="mt-14 inline-flex items-center gap-3 text-sm text-white">
                Explore the case study
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}