"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import type { AiSystemContent, AskVisual, Spotlight } from "@/lib/ai-systems/types";
import s from "./ai-system.module.css";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* Swipe rail of job cards. Cards are rendered on the server and passed in. */
export function JobsRail({ label, title, hint, children }: { label: string; title: string; hint: string; children: ReactNode }) {
  const rail = useRef<HTMLOListElement>(null);
  const by = (dir: number) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 16 : 320;
    el.scrollBy({ left: dir * w * 2, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };
  return (
    <section className={s.sec} id="features">
      <div className={s.wrap}>
        <div className={s.sh}>
          <div>
            <p className={s.lab}>{label}</p>
            <h2>{title}</h2>
            <p className={s.swipe}>{hint}</p>
          </div>
          <div className={s.arrows}>
            <button className={s.arr} type="button" onClick={() => by(-1)} aria-label="Previous jobs"><ChevronLeft /></button>
            <button className={s.arr} type="button" onClick={() => by(1)} aria-label="Next jobs"><ChevronRight /></button>
          </div>
        </div>
      </div>
      <ol className={s.rail} ref={rail} tabIndex={0} aria-label={title}>{children}</ol>
    </section>
  );
}

/* "Ask it anything" spotlight: pick a question, the answer types in. */
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
export function Calc({ calc }: { calc: AiSystemContent["calc"] }) {
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
        <div><span>{calc.out1}</span><b className={s.tnum}>{out1.toLocaleString("en-GB")}</b></div>
        <div><span>{calc.out2}</span><b className={s.tnum}>€{out2.toLocaleString("en-GB")}</b></div>
        <p>{calc.footnote}</p>
      </div>
    </div>
  );
}
