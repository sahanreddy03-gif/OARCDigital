"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Gift, Pause, Play, Search, X } from "lucide-react";
import type { AiSystemContent, AskVisual, Spotlight } from "@/lib/ai-systems/types";
import type { Locale } from "@/lib/i18n/twins";
import { SpotVisual } from "@/components/ai-systems/AiVisuals";
import s from "@/components/ai-systems/ai-system.module.css";
import { AI_STRINGS, fill, formatEuro, formatNumber } from "./strings";

/* Language copy of ../AiSystemClient.tsx. Same behaviour; the interface words come from
   strings.ts for the page's language. */

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* The demo at the top of the page. It plays itself like a short film:
   one scene at a time, a sentence saying what is happening, and the screen
   the system would show. The progress bar's animation is the clock, so
   pausing the bar pauses the story. */
export function HeroFilm({ film, locale }: { film: AiSystemContent["film"]; locale: Locale }) {
  const t = AI_STRINGS[locale];
  const [i, setI] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const n = film.scenes.length;

  useEffect(() => {
    const el = box.current;
    if (!el || typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const sc = film.scenes[i];
  const running = inView && !paused;
  return (
    <div className={`${s.film} ${running ? "" : s.filmPaused}`} ref={box} data-testid="hero-demo">
      <div className={s.filmTop}>
        <p className={s.filmTitle}>{film.title}</p>
        <div className={s.segs}>
          {film.scenes.map((x, k) => (
            <button
              key={x.caption}
              type="button"
              className={`${s.seg} ${k < i ? s.segDone : ""} ${k === i ? s.segOn : ""}`}
              aria-label={fill(t.filmStep, { k: k + 1, n, caption: x.caption })}
              aria-current={k === i ? "step" : undefined}
              onClick={() => setI(k)}
            >
              <i><b key={k === i ? `on-${i}` : "off"} onAnimationEnd={k === i ? () => setI((i + 1) % n) : undefined} /></i>
            </button>
          ))}
        </div>
        <button className={s.filmBtn} type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? t.filmPlay : t.filmPause}>
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        </button>
      </div>

      <div className={s.scene} key={i}>
        <div className={s.cap}>
          <span className={s.clock}>{sc.clock}</span>
          <p className={s.capText}>{sc.caption}</p>
          <span className={s.capRes}>{sc.result}</span>
        </div>
        <div className={s.stage} aria-hidden="true"><SpotVisual visual={sc.visual} /></div>
      </div>

      {/* Every step as plain text, for screen readers and search engines. */}
      <ol className={s.sr}>
        {film.scenes.map((x) => <li key={x.caption}>{x.clock}. {x.caption} {x.result}.</li>)}
      </ol>
    </div>
  );
}

/* The jobs: three big ones first, then the rest in a swipe rail. */
export function JobsRail({ sectionClass, label, title, featured, moreTitle, hint, locale, children }: { sectionClass?: string; label: string; title: string; featured: ReactNode; moreTitle: string; hint: string; locale: Locale; children: ReactNode }) {
  const t = AI_STRINGS[locale];
  const rail = useRef<HTMLOListElement>(null);
  const by = (dir: number) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 16 : 320;
    el.scrollBy({ left: dir * w * 2, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };
  return (
    <section className={sectionClass ?? s.sec} id="features">
      <div className={s.wrap}>
        <div className={s.sh}><div><p className={s.lab}>{label}</p><h2>{title}</h2></div></div>
        <ol className={s.feat}>{featured}</ol>
        <div className={s.more}>
          <div><h3>{moreTitle}</h3><p className={s.swipe}>{hint}</p></div>
          <div className={s.arrows}>
            <button className={s.arr} type="button" onClick={() => by(-1)} aria-label={t.jobsPrev}><ChevronLeft /></button>
            <button className={s.arr} type="button" onClick={() => by(1)} aria-label={t.jobsNext}><ChevronRight /></button>
          </div>
        </div>
      </div>
      <ol className={s.rail} ref={rail} tabIndex={0} aria-label={moreTitle}>{children}</ol>
    </section>
  );
}

/* "Ask it anything" spotlight: pick a question, the answer types in.
   No interface words of its own: everything shown comes from the page's content. */
export function AskSpot({ spot, rev }: { spot: Spotlight; rev: boolean }) {
  const visual = spot.visual as AskVisual;
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(visual.questions[0].q);
  const [shown, setShown] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  const show = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setActive(i);
    const q = visual.questions[i].q;
    if (prefersReducedMotion()) { setTyped(q); setShown(true); return; }
    setShown(false);
    setTyped("");
    let n = 0;
    timer.current = setInterval(() => {
      n += 1;
      setTyped(q.slice(0, n));
      if (n >= q.length) {
        if (timer.current) clearInterval(timer.current);
        setTimeout(() => setShown(true), 250);
      }
    }, 28);
  };

  const a = visual.questions[active];
  return (
    <div className={`${s.wrap} ${s.spot} ${rev ? s.rev : ""}`}>
      <div className={s.txt}>
        <p className={s.lab}>{spot.label}</p>
        <h2>{spot.title}</h2>
        <ul className={s.ticks}>{spot.points.map((p) => <li key={p}>{p}</li>)}</ul>
        <div className={s.chips}>
          {visual.questions.map((x, i) => (
            <button key={x.q} type="button" aria-pressed={i === active} onClick={() => show(i)}>{x.q}</button>
          ))}
        </div>
      </div>
      <div className={`${s.vis} ${s.reveal}`}>
        <div className={s.q}><Search aria-hidden="true" /><span>{typed}<span className={s.caret} /></span></div>
        <div className={s.ans} aria-live="polite">
          {shown && (
            <>
              <p className={s.sum}>{a.summary}</p>
              <ul>{a.rows.map((r) => <li key={r[0]}><b>{r[0]}</b><span>{r[1]}</span></li>)}</ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* Calculator: three numbers in, two numbers out. */
export function Calc({ calc, locale }: { calc: AiSystemContent["calc"]; locale: Locale }) {
  const id = useId();
  const [v, setV] = useState<[number, number, number]>([calc.inputs[0].value, calc.inputs[1].value, calc.inputs[2].value]);
  const set = (i: number, raw: string) => {
    const n = parseFloat(raw);
    const next = [...v] as [number, number, number];
    next[i] = Number.isNaN(n) || n < 0 ? 0 : n;
    setV(next);
  };
  const out1 = calc.mode === "percent"
    ? Math.round(v[0] * Math.min(v[1], 100) / 100)
    : Math.round(v[0] * v[1] * (calc.factor ?? 1));
  const out2 = Math.round(out1 * v[2]);
  return (
    <div className={s.calc}>
      <div>
        {calc.inputs.map((f, i) => (
          <label className={s.fld} key={f.label} htmlFor={`${id}-${i}`}>
            <span>{f.label}</span>
            <input id={`${id}-${i}`} type="number" min={0} max={f.max} value={v[i]} inputMode="numeric" onChange={(e) => set(i, e.target.value)} />
          </label>
        ))}
      </div>
      <div className={s.res}>
        <div><span>{calc.out1}</span><b className={s.tnum}>{formatNumber(out1, locale)}</b></div>
        <div><span>{calc.out2}</span><b className={s.tnum}>{formatEuro(out2, locale)}</b></div>
        <p>{calc.footnote}</p>
      </div>
    </div>
  );
}

/* Small bar that floats at the bottom once the reader scrolls: proof + one button. */
export function FloatBar({ line, short, href, label, shortLabel, locale }: { line: string; short: string; href: string; label: string; shortLabel: string; locale: Locale }) {
  const t = AI_STRINGS[locale];
  const [on, setOn] = useState(false);
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    const check = () => setOn(window.scrollY > 520);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
  if (closed) return null;
  return (
    <div className={`${s.bar} ${on ? s.barOn : ""}`} aria-hidden={!on} data-testid="float-bar">
      <p><i aria-hidden="true" /><span className={s.barLong}>{line}</span><span className={s.barShort}>{short}</span></p>
      <a className={s.barBtn} href={href} target="_blank" rel="noopener" tabIndex={on ? 0 : -1} data-testid="button-bar-price">
        <Gift aria-hidden="true" strokeWidth={1.8} /><span className={s.barLong}>{label}</span><span className={s.barShort}>{shortLabel}</span>
      </a>
      <button className={s.barX} type="button" onClick={() => setClosed(true)} tabIndex={on ? 0 : -1} aria-label={t.barClose}><X aria-hidden="true" /></button>
    </div>
  );
}

/* Two fields, one button: for people who would rather be messaged than message.
   Same endpoint and same fields as the English form. The error shown is always the
   translated one: the server only answers in English. */
export function PriceForm({ service, source, locale }: { service: string; source: string; locale: Locale }) {
  const t = AI_STRINGS[locale];
  const id = useId();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    if (!name || !contact) return;
    setState("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, service, source }),
      });
      if (!res.ok) {
        setState("error");
        return;
      }
      setState("sent");
    } catch {
      setState("error");
    }
  };
  if (state === "sent") return <p className={s.leadOk} role="status">{t.formSent}</p>;
  return (
    <form className={s.lead} onSubmit={submit} data-testid="form-price">
      <label className={s.sr} htmlFor={`${id}-n`}>{t.formName}</label>
      <input id={`${id}-n`} name="name" type="text" placeholder={t.formName} autoComplete="name" required maxLength={80} />
      <label className={s.sr} htmlFor={`${id}-c`}>{t.formContact}</label>
      <input id={`${id}-c`} name="contact" type="text" placeholder={t.formContact} autoComplete="tel" required maxLength={120} />
      <button type="submit" disabled={state === "sending"}>{state === "sending" ? t.formSending : t.formSubmit}</button>
      {state === "error" && <p className={s.leadErr} role="alert">{t.formError}</p>}
    </form>
  );
}
