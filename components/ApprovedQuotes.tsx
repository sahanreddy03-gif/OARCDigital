import type { ApprovedQuote } from "@/lib/reviews/approvedQuotes";

type Tone = "light" | "dark";

export default function ApprovedQuotes({
  quotes,
  tone = "light",
}: {
  quotes: ApprovedQuote[];
  tone?: Tone;
}) {
  const light = tone === "light";
  return (
    <section
      aria-label="Straight from them"
      className={light ? "bg-[#F2EFE9] py-16 md:py-20" : "bg-black py-16 md:py-20"}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className={light ? "mb-8 text-3xl font-medium tracking-tight text-zinc-950 md:text-4xl" : "mb-8 text-3xl font-medium tracking-tight text-white md:text-4xl"}>
          Straight from them
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
        {quotes.map((item) => (
          <figure
            key={item.quote}
            className={
              light
                ? "rounded-2xl border border-zinc-300 bg-white p-6"
                : "rounded-2xl border border-white/10 bg-white/5 p-6"
            }
          >
            <blockquote
              className={
                light
                  ? "text-lg leading-relaxed text-zinc-950"
                  : "text-lg leading-relaxed text-white"
              }
            >
              “{item.quote}”
            </blockquote>
            <figcaption
              className={light ? "mt-4 text-sm text-zinc-600" : "mt-4 text-sm text-white/60"}
            >
              {item.credit}
            </figcaption>
          </figure>
        ))}
        </div>
      </div>
    </section>
  );
}
