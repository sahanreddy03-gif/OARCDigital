import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { NAP } from "@/lib/seo/nap";
import { CLIENTS, PEOPLE_BRANDS, BIG_NUMBERS, DEPARTMENTS, COMPARE, TESTS, RED_FLAGS, QUOTES, FAQS } from "./showcase";

// "Why OARC Digital" showcase (Nov 2026). Owner's brief: the page that wins any
// comparison, with all 32 real brands, proof in every department, and links to the
// homepage everywhere. Homepage design system v3: paper, ink, serif, one black box
// with yellow (the hero), cobalt for links.

const WA = "https://wa.me/35679711799?text=" + encodeURIComponent("Hi OARC. I read why you are different. My business is: ");
const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" } as const;

const css = `
.sx { background:#F5F3EE; color:#0E0E0E; }
.sx a.home { color:#0035AD; border-bottom:1px solid currentColor; }
.sx-hero { background:#0E0E0E; color:#F5F3EE; }
.sx-tag { display:inline-flex; align-items:center; gap:.6rem; border:1px solid rgba(249,255,132,.45); color:#F9FF84; border-radius:999px; padding:.45rem 1rem; font-size:.8rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; }
.sx-tag i { width:.5rem; height:.5rem; border-radius:999px; background:#F9FF84; display:block; }
.sx-marquee { overflow:hidden; mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); }
.sx-track { display:flex; width:max-content; gap:0; animation:sx-left 70s linear infinite; }
.sx-track.rev { animation-name:sx-right; animation-duration:80s; }
.sx-marquee:hover .sx-track { animation-play-state:paused; }
.sx-item { display:flex; align-items:center; white-space:nowrap; }
.sx-item::after { content:"✦"; margin:0 1.6rem; font-size:.7em; opacity:.35; }
@keyframes sx-left { from { transform:translateX(0); } to { transform:translateX(-50%); } }
@keyframes sx-right { from { transform:translateX(-50%); } to { transform:translateX(0); } }
@media (prefers-reduced-motion: reduce) { .sx-track { animation:none; flex-wrap:wrap; width:auto; } }
.sx-card { border-top:1px solid rgba(14,14,14,.18); }
.sx-proof { transition:background .2s; }
.sx-proof:hover { background:#fff; }
.sx table td, .sx table th { border-bottom:1px solid rgba(14,14,14,.12); }
@supports (animation-timeline: view()) { @media (prefers-reduced-motion: no-preference) {
  .sx .rv { animation: sx-rise linear both; animation-timeline: view(); animation-range: entry 0% entry 50%; }
}}
.sx .sx-f-hero { font-size:clamp(2.9rem,7.4vw,6.6rem); }
.sx .sx-f-close { font-size:clamp(2.6rem,6.4vw,5.4rem); }
.sx .sx-f-h2 { font-size:clamp(2.4rem,5.4vw,4.4rem); }
.sx .sx-f-h2b { font-size:clamp(2.2rem,5vw,4rem); }
.sx .sx-f-h2c { font-size:clamp(2.2rem,5vw,3.6rem); }
.sx .sx-f-num { font-size:clamp(2.6rem,4.6vw,3.8rem); }
.sx .sx-f-brand { font-size:clamp(2rem,4.4vw,3.6rem); }
.sx .sx-f-brand-s { font-size:clamp(1.1rem,2vw,1.5rem); }
.sx .sx-f-24 { font-size:2.4rem; }
.sx .sx-f-20 { font-size:2rem; }
.sx .sx-f-16 { font-size:1.6rem; }
.sx .sx-f-15 { font-size:1.5rem; }
.sx .sx-f-125 { font-size:1.25rem; }
.sx .sx-l92 { line-height:.92; } .sx .sx-l95 { line-height:.95; } .sx .sx-l12 { line-height:1.2; }
.sx .sx-dept { display:grid; gap:1.5rem; }
@media (min-width:768px) { .sx .sx-dept { grid-template-columns: .8fr 2fr; gap:2.5rem; } }
.sx .sx-nums { display:grid; column-gap:2rem; grid-template-columns:1fr; }
@media (min-width:640px) { .sx .sx-nums { grid-template-columns:repeat(2,1fr); } }
@media (min-width:1024px) { .sx .sx-nums { grid-template-columns:repeat(5,1fr); } }
.sx .sx-table { min-width:620px; }
.sx .sx-us { background:rgba(0,53,173,.06); }
.sx .sx-gridline { background:rgba(14,14,14,.1); }
@keyframes sx-rise { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
`;

function Marquee({ items, rev, big }: { items: { name: string; href?: string }[]; rev?: boolean; big?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="sx-marquee" aria-hidden={rev ? true : undefined}>
      <div className={`sx-track${rev ? " rev" : ""}`}>
        {row.map((b, i) =>
          b.href ? (
            <Link
              key={i}
              href={b.href}
              tabIndex={i >= items.length || rev ? -1 : undefined}
              className={`sx-item hover:opacity-60 ${big ? "sx-f-brand" : "sx-f-brand-s"}`}
              style={big ? serif : undefined}
            >
              {b.name}
            </Link>
          ) : (
            <span key={i} className={`sx-item ${big ? "sx-f-brand" : "sx-f-brand-s"}`} style={big ? serif : undefined}>
              {b.name}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

export default function PageContent() {
  const clientItems = CLIENTS.map((c) => ({ name: c.name, href: `/our-work/${c.slug}` }));
  const half = Math.ceil(clientItems.length / 2);
  return (
    <Layout>
      <style>{css}</style>
      <main className="sx">
        {/* HERO — the one black box with yellow */}
        <section className="sx-hero px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
          <div className="mx-auto max-w-[1180px]">
            <span className="sx-tag" data-testid="showcase-tag"><i />Malta&apos;s first Creative + AI Systems Agency</span>
            <h1 className="mt-8 max-w-5xl sx-f-hero font-normal sx-l92 tracking-[-0.02em]" style={serif}>
              Creativity and software.
              <br />
              <em className="text-[#F9FF84]">One house.</em> Every department.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#F5F3EE]/80 md:text-xl">
              <Link href="/" className="font-semibold text-white underline underline-offset-4">OARC Digital</Link> is the
              marketing agency in Malta that builds the whole engine: brand, film, social media, ads, Google, websites and
              AI staff. Experts run every department. 32 named brands. Millions of views every month.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/" className="inline-flex items-center rounded-full bg-[#F9FF84] px-7 py-4 text-[15px] font-semibold text-[#0E0E0E] hover:opacity-90" data-testid="showcase-watch-home">
                Watch our homepage →
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 text-[15px] font-semibold text-white hover:border-white">
                Get my free plan in 48 hours
              </a>
            </div>
          </div>
        </section>

        {/* FLOATING BRAND BAR — all 32 clients */}
        <section className="border-b border-[#0E0E0E]/15 py-10 md:py-14" aria-labelledby="sx-brands">
          <h2 id="sx-brands" className="mx-auto mb-6 max-w-[1180px] px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E0E0E]/55 md:px-10">
            32 brands we grow. Every one is real. Click any name for the case.
          </h2>
          <Marquee items={clientItems.slice(0, half)} big />
          <div className="mt-3">
            <Marquee items={clientItems.slice(half)} rev big />
          </div>
          <p className="mx-auto mt-8 max-w-[1180px] px-5 text-sm text-[#0E0E0E]/55 md:px-10">Brands our people have worked with:</p>
          <div className="mt-3 text-[#0E0E0E]/70">
            <Marquee items={PEOPLE_BRANDS.map((name) => ({ name }))} />
          </div>
        </section>

        {/* BIG NUMBERS */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="rv max-w-3xl sx-f-h2 font-normal sx-l95" style={serif}>
              We don&apos;t sell reports. <em>We grow reach and sales.</em>
            </h2>
            <div className="sx-nums mt-14">
              {BIG_NUMBERS.map((n) => (
                <div key={n.value} className="rv sx-card py-7 pr-6">
                  <div className="sx-f-num leading-none" style={serif}>{n.value}</div>
                  <p className="mt-3 text-[15px] leading-snug text-[#0E0E0E]/70">{n.label}</p>
                </div>
              ))}
            </div>
            <p className="rv mt-10 max-w-2xl text-lg text-[#0E0E0E]/75">
              See how it all fits together on the <Link href="/" className="home font-semibold">OARC Digital homepage</Link>.
            </p>
          </div>
        </section>

        {/* PROOF IN EVERY DEPARTMENT */}
        <section className="bg-white px-5 py-20 md:px-10 md:py-28" aria-labelledby="sx-dept">
          <div className="mx-auto max-w-[1180px]">
            <h2 id="sx-dept" className="rv sx-f-h2 font-normal sx-l95" style={serif}>
              Proof in <em>every</em> department.
            </h2>
            <p className="rv mt-5 max-w-2xl text-lg text-[#0E0E0E]/70">
              Other agencies are good at one thing. We show results for named brands in all ten.
            </p>
            <div className="mt-14 space-y-14">
              {DEPARTMENTS.map((d, i) => (
                <div key={d.name} className="rv sx-dept border-t border-[#0E0E0E]/15 pt-8">
                  <div>
                    <span className="text-sm font-semibold tabular-nums text-[#0E0E0E]/40">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 sx-f-20 leading-none" style={serif}>{d.name}</h3>
                    <p className="mt-3 text-[15px] text-[#0E0E0E]/65">{d.line}</p>
                  </div>
                  <div className="grid gap-px overflow-hidden rounded-2xl sx-gridline sm:grid-cols-2 lg:grid-cols-3">
                    {d.proof.map((p, j) => (
                      <Link key={j} href={`/our-work/${p.slug}`} className="sx-proof block bg-[#F5F3EE] p-6">
                        <div className="sx-f-24 leading-none" style={serif}>{p.value}</div>
                        <p className="mt-2 text-[15px] leading-snug text-[#0E0E0E]/75">{p.label}</p>
                        <p className="mt-4 text-sm font-semibold text-[#0035AD]">{p.client} →</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTES */}
        <section className="px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-3">
            {QUOTES.map((q) => (
              <figure key={q.credit} className="rv sx-card pt-6">
                <blockquote className="sx-f-16 sx-l12" style={serif}>&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-[#0E0E0E]/55">{q.credit}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* COMPARISON */}
        <section className="px-5 pb-20 md:px-10 md:pb-28" aria-labelledby="sx-compare">
          <div className="mx-auto max-w-[1180px]">
            <h2 id="sx-compare" className="rv sx-f-h2b font-normal sx-l95" style={serif}>
              OARC vs the rest.
            </h2>
            <div className="rv mt-10 overflow-x-auto rounded-2xl bg-white">
              <table className="sx-table w-full text-left text-[15px]">
                <thead>
                  <tr>
                    <th className="p-5 font-semibold text-[#0E0E0E]/50"> </th>
                    {COMPARE.cols.map((c, i) => (
                      <th key={c} className={`p-5 font-semibold ${i === 0 ? "bg-[#0035AD] text-white" : "text-[#0E0E0E]/55"}`}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.rows.map((r) => (
                    <tr key={r.what}>
                      <td className="p-5 font-medium">{r.what}</td>
                      {r.v.map((v, i) => (
                        <td key={i} className={`p-5 ${i === 0 ? "sx-us font-semibold text-[#0035AD]" : "text-[#0E0E0E]/55"}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* THE TESTS */}
        <section className="bg-white px-5 py-20 md:px-10 md:py-28" aria-labelledby="sx-tests">
          <div className="mx-auto max-w-[1180px]">
            <h2 id="sx-tests" className="rv sx-f-h2b font-normal sx-l95" style={serif}>
              How to choose a marketing agency in Malta. <em>7 questions to ask before you sign.</em>
            </h2>
            <p className="rv mt-5 max-w-2xl text-lg text-[#0E0E0E]/70">Ask every agency these. Then ask us. We answer all seven in writing.</p>
            <ol className="mt-12 grid gap-x-10 md:grid-cols-2">
              {TESTS.map((t, i) => (
                <li key={t.q} className="rv sx-card flex gap-5 py-7">
                  <span className="text-sm font-semibold tabular-nums text-[#0E0E0E]/40">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="sx-f-15 leading-tight" style={serif}>{t.q}</h3>
                    <p className="mt-2 text-[15px] text-[#0E0E0E]/70">{t.why}</p>
                    <p className="mt-2 text-[15px] text-[#0E0E0E]/70"><strong className="text-[#0035AD]">OARC: </strong>{t.a}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="rv mt-12 border-t border-[#0E0E0E]/15 pt-8">
              <h3 className="sx-f-15 leading-tight" style={serif}>Walk away if the agency:</h3>
              <ul className="mt-4 grid gap-x-10 gap-y-2 md:grid-cols-2">
                {RED_FLAGS.map((r) => (
                  <li key={r} className="text-[15px] text-[#0E0E0E]/70">✕ {r}</li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] text-[#0E0E0E]/70">
                Want to see how we answer them? Start on the{" "}
                <Link href="/" className="font-semibold text-[#0E0E0E] underline underline-offset-4">OARC Digital homepage</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-20 md:px-10 md:py-24" aria-labelledby="sx-faq">
          <div className="mx-auto max-w-[860px]">
            <h2 id="sx-faq" className="rv sx-f-h2c font-normal sx-l95" style={serif}>Questions owners ask.</h2>
            <div className="mt-10">
              {FAQS.map((f) => (
                <details key={f.q} className="sx-card group py-6">
                  <summary className="cursor-pointer list-none sx-f-125 font-semibold leading-snug">
                    {f.q} <span className="float-right text-[#0E0E0E]/40 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-[#0E0E0E]/75">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSE */}
        <section className="px-5 pb-24 md:px-10 md:pb-32">
          <div className="mx-auto max-w-[1180px] border-t border-[#0E0E0E]/20 pt-16 text-center">
            <h2 className="rv mx-auto max-w-4xl sx-f-close font-normal sx-l92" style={serif}>
              Seen enough? <em>See everything.</em>
            </h2>
            <p className="rv mx-auto mt-6 max-w-xl text-lg text-[#0E0E0E]/70">
              Start on our homepage: every department, every service, and the team in {NAP.addressLocality}.
            </p>
            <div className="rv mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/" className="inline-flex items-center rounded-full bg-[#0E0E0E] px-8 py-4 text-[15px] font-semibold text-[#F5F3EE] hover:opacity-85" data-testid="showcase-home-close">
                Go to the OARC Digital homepage →
              </Link>
              <Link href="/our-work" className="inline-flex items-center rounded-full border border-[#0E0E0E]/30 px-8 py-4 text-[15px] font-semibold hover:border-[#0E0E0E]">
                See all 32 cases
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
