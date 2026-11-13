import Link from "next/link";
import {
  MessageCircle, Filter, CalendarDays, Clock, UserPlus, RefreshCw, Link2, PenLine, Image as ImageIcon, Euro, Repeat,
  Wrench, CreditCard, FileText, BarChart3, Sun, Network, Workflow, TrendingUp, ShieldCheck, Search, FolderOpen,
  Scale, Inbox, Languages, Users, Lock, Eye, BadgeCheck, Building2, BookOpen, Car, Plane, Receipt, Gavel, Phone, Check,
  type LucideIcon,
} from "lucide-react";
import { NAP } from "@/lib/seo/nap";
import type { AiIcon, AiSystemContent, Spotlight } from "@/lib/ai-systems/types";
import { AskSpot, Calc, JobsRail } from "./AiSystemClient";
import s from "./ai-system.module.css";

const ICONS: Record<AiIcon, LucideIcon> = {
  chat: MessageCircle, filter: Filter, calendar: CalendarDays, clock: Clock, userPlus: UserPlus, refresh: RefreshCw,
  link: Link2, pen: PenLine, image: ImageIcon, euro: Euro, repeat: Repeat, wrench: Wrench, card: CreditCard,
  file: FileText, chart: BarChart3, sun: Sun, network: Network, workflow: Workflow, trending: TrendingUp,
  shield: ShieldCheck, search: Search, folder: FolderOpen, scale: Scale, inbox: Inbox, languages: Languages,
  users: Users, lock: Lock, eye: Eye, badge: BadgeCheck, building: Building2, book: BookOpen, car: Car, plane: Plane,
  receipt: Receipt, gavel: Gavel, phone: Phone, check: Check,
};

function Ico({ name }: { name: AiIcon }) {
  const I = ICONS[name];
  return <span className={s.ico}><I strokeWidth={1.7} aria-hidden="true" /></span>;
}

export function whatsappLink(business: string) {
  const text = `Hi OARC, I run a ${business}. I'd like to book a demo call.`;
  return `https://wa.me/${NAP.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function DemoButton({ href, label, variant }: { href: string; label: string; variant?: "onDark" | "onCobalt" }) {
  return (
    <a className={`${s.btn} ${variant ? s[variant] : ""}`} href={href} target="_blank" rel="noopener" data-testid="button-book-demo">
      <MessageCircle aria-hidden="true" strokeWidth={1.6} />{label}
    </a>
  );
}

function SpotVisual({ spot }: { spot: Spotlight }) {
  const v = spot.visual;
  if (v.type === "chat") {
    return (
      <div className={s.chat}>
        <div className={s.chead}><i>{v.initials}</i><div>{v.name}<small>{v.origin}</small></div><span className={s.ch}>{v.status}</span></div>
        {v.messages.map((m, i) => (
          <div key={i} className={`${s.msg} ${m.from === "in" ? s.msgIn : s.msgOut}`}>{m.text}<small>{m.time}</small></div>
        ))}
        {v.slots && <div className={s.slot}>{v.slots.map((x) => <span key={x}>{x}</span>)}</div>}
        <div className={s.done}><span>{v.done.before}<b>{v.done.strong}</b>{v.done.after}</span></div>
      </div>
    );
  }
  if (v.type === "rows") {
    return (
      <div className={s.clist}>
        <h4>{v.title} <small>{v.hint}</small></h4>
        {v.rows.map((r) => (
          <div className={s.crow} key={r.title}>
            <span className={`${s.score} ${r.top ? s.scoreTop : ""}`}>{r.badge}</span>
            <div><b>{r.title}</b><span>{r.detail}</span></div>
            {v.action === "call"
              ? <span className={s.call}><Phone aria-hidden="true" strokeWidth={1.8} /></span>
              : <span className={`${s.tag} ${r.top ? s.tagOn : ""}`}>{r.tag}</span>}
          </div>
        ))}
      </div>
    );
  }
  if (v.type === "timeline") {
    return (
      <div className={s.lt}>
        <h4>{v.title}</h4>
        <p>{v.subtitle}</p>
        {v.steps.map((st) => (
          <div className={`${s.step} ${st.key ? s.stepKey : ""}`} key={st.title}>
            <span className={s.dd}>{st.when}</span><span className={s.pin} />
            <div><b>{st.title}</b><span>{st.detail}</span>{st.tag && <span className={`${s.tag} ${s.tagOn}`}>{st.tag}</span>}</div>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function AiSystemPage({ c }: { c: AiSystemContent }) {
  const wa = whatsappLink(c.business);
  const d = c.dashboard;
  return (
    <div className={s.root}>
      {/* PAGE BAR */}
      <div className={s.top}>
        <div className={`${s.wrap} ${s.topIn}`}>
          <a className={s.brand} href="#top"><b>OARC</b><span>{c.barLabel}</span></a>
          <nav className={s.topNav} aria-label="On this page">
            <a className={s.nl} href="#features">Features</a>
            <a className={s.nl} href="#live">48 hours</a>
            <a className={s.nl} href="#start">The offer</a>
            <a className={s.nl} href="#faq">Questions</a>
            <a className={`${s.btn} ${s.sm}`} href={wa} target="_blank" rel="noopener" data-testid="button-bar-demo">Book a demo</a>
          </nav>
        </div>
      </div>
      {/* HERO */}
      <section className={s.hero} id="top">
        <div className={s.wrap}>
          <nav className={s.crumbs} aria-label="Breadcrumb">
            <Link href="/">OARC Digital</Link><span>/</span><Link href="/ai">AI systems</Link><span>/</span><span>{c.name}</span>
          </nav>
          <span className={s.pill}><span className={s.ldot} />{c.hero.pill}</span>
          <p className={s.fin}>{c.hero.kicker}</p>
          <h1>{c.hero.h1Before} <span className={s.hl}>{c.hero.h1Highlight}</span></h1>
          <p className={s.sub}>{c.hero.sub}</p>
          <div className={s.acts}>
            <DemoButton href={wa} label={c.hero.primaryCta} />
            <a className={`${s.btn} ${s.ghost}`} href="#features">{c.hero.secondaryCta}</a>
          </div>
          <p className={s.note}>{c.hero.note}</p>

          <div className={s.shot} role="img" aria-label={`Example of the OARC ${c.name.toLowerCase()} dashboard, with example data`}>
            <div className={s.app} aria-hidden="true">
              <div className={s.abar}>
                <span className={s.logo}>OARC<small>{d.org}</small></span>
                <div className={s.search}><Search strokeWidth={1.8} /><span>{d.search}</span></div>
                <span className={s.me}>{d.initials}</span>
              </div>
              <div className={s.abody}>
                <div className={s.side}>
                  {d.nav.map((n, i) => <span key={n.label} className={i === 0 ? s.on : undefined}>{n.label}{n.badge && <em>{n.badge}</em>}</span>)}
                </div>
                <div className={s.main}>
                  <div className={s.hi}><h3>{d.greeting}</h3><span><b />{d.status}</span></div>
                  <div className={s.kgrid}>
                    {d.kpis.map((k) => (
                      <div className={s.kc} key={k.label}><p>{k.label}</p><b className={s.tnum}>{k.value}</b><small className={k.alert ? s.bad : undefined}>{k.note}</small></div>
                    ))}
                  </div>
                  <div className={s.split}>
                    <div className={s.panel}>
                      <h4>{d.todoTitle}</h4>
                      <ul className={s.todo}>
                        {d.todos.map((t) => (
                          <li key={t.title}><span className={s.av}>{t.initials}</span><div><b>{t.title}</b><span>{t.detail}</span></div><span className={`${s.tag} ${t.on ? s.tagOn : ""}`}>{t.tag}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${s.panel} ${s.chartp}`}>
                      <h4>{d.chartTitle}</h4>
                      <div className={s.bars}>
                        {d.bars.map((b, i) => (
                          <div key={b.label} className={i === d.bars.length - 1 ? s.t : undefined} style={{ ["--h" as string]: `${b.h}%`, animationDelay: `${0.4 + i * 0.09}s` }}><span>{b.label}</span></div>
                        ))}
                      </div>
                      <div className={s.avg}><span>{d.chartFoot.label}</span><b className={s.tnum}>{d.chartFoot.value}</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.floats} aria-hidden="true">
              <div className={`${s.float} ${s.f1}`}>
                <div className={s.who}><i />{d.chatFloat.channel}<small>{d.chatFloat.time}</small></div>
                <div className={`${s.bub} ${s.bubIn}`}>{d.chatFloat.incoming}</div>
                <div className={`${s.bub} ${s.bubOut}`}>{d.chatFloat.reply}</div>
                <span className={s.rcpt}>{d.chatFloat.receipt}</span>
              </div>
              <div className={`${s.float} ${s.f2}`}>
                <p>{d.alertFloat.label}</p>
                <b>{d.alertFloat.title}</b>
                <span>{d.alertFloat.detail}</span>
                <span className={`${s.tag} ${s.tagOn}`}>{d.alertFloat.tag}</span>
              </div>
            </div>
            <span className={s.exl}>Example data</span>
          </div>

          <div className={s.with}><p className={s.lab}>Works with</p>{c.worksWith.map((w) => <span key={w}>{w}</span>)}</div>
        </div>
      </section>

      {/* PILLARS */}
      <section className={s.sec}>
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.pillars.label}</p><h2>{c.pillars.title}</h2></div></div>
          <div className={s.pillars}>
            {c.pillars.items.map((p) => (
              <div className={`${s.pl} ${s.reveal}`} key={p.title}><Ico name={p.icon} /><h3>{p.title}</h3><p>{p.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <JobsRail label={c.jobs.label} title={c.jobs.title} hint="Swipe to see them all →">
        {c.jobs.items.map((j, i) => (
          <li className={s.card} key={j.title}>
            <div className={s.top2}><Ico name={j.icon} /><span className={s.no}>{String(i + 1).padStart(2, "0")}</span></div>
            <h3>{j.title}</h3>
            <p>{j.body}</p>
            <span className={s.gain}>{j.gain}</span>
          </li>
        ))}
      </JobsRail>

      {/* SPOTLIGHTS */}
      {c.spotlights.map((sp, i) => (
        <section className={s.sec} key={sp.title}>
          {sp.visual.type === "ask" ? (
            <AskSpot spot={sp} rev={i % 2 === 1} />
          ) : (
            <div className={`${s.wrap} ${s.spot} ${i % 2 === 1 ? s.rev : ""}`}>
              <div className={s.txt}>
                <p className={s.lab}>{sp.label}</p>
                <h2>{sp.title}</h2>
                <ul className={s.ticks}>{sp.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className={`${s.vis} ${s.reveal}`}><SpotVisual spot={sp} /></div>
            </div>
          )}
        </section>
      ))}

      {/* AREAS */}
      <section className={s.sec} id="areas">
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.areas.label}</p><h2>{c.areas.title}</h2><p className={s.d}>{c.areas.intro}</p></div></div>
          <div className={s.areaHead} aria-hidden="true"><span>{c.areas.colA}</span><span>{c.areas.colB}</span><span>{c.areas.colC}</span></div>
          <div className={s.areas}>
            {c.areas.items.map((a) => (
              <div className={s.area} key={a.name}>
                <h3>{a.name}</h3>
                <p>{a.system}</p>
                <p className={s.you}><span>{c.areas.colC}</span>{a.you}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT WINS */}
      <section className={s.sec}>
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.wins.label}</p><h2>{c.wins.title}</h2></div></div>
          <div className={s.wins}>
            {c.wins.items.map((w) => <div className={`${s.win} ${s.reveal}`} key={w.title}><b>{w.title}</b><p>{w.body}</p></div>)}
          </div>
        </div>
      </section>

      {/* LIVE */}
      <section id="live">
        <div className={s.wrap}>
          <div className={s.live}>
            <p className={s.lab}>{c.live.label}</p>
            <h2>{c.live.h2Before} <em>{c.live.h2Em}</em></h2>
            <p className={s.d}>{c.live.body}</p>
            <ol className={s.tl}>
              {c.live.steps.map((st) => <li key={st.title}><span className={s.when}>{st.when}</span><b>{st.title}</b><span>{st.body}</span></li>)}
            </ol>
          </div>
        </div>
      </section>

      {/* WAYS TO START + OFFER */}
      <section className={s.sec} id="start">
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.ways.label}</p><h2>{c.ways.title}</h2></div></div>
          <div className={s.ways}>
            {c.ways.items.map((w, i) => (
              <div className={s.way} key={w.title}>
                <span className={s.no}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <span className={s.eg}>{w.example}</span>
              </div>
            ))}
          </div>
          <div className={s.offer}>
            <div className={s.offerL}>
              <p className={s.lab}>{c.offer.label}</p>
              <h3>{c.offer.title}</h3>
              <p className={s.d}>{c.offer.body}</p>
              <div className={s.acts}><DemoButton href={wa} label={c.offer.cta} /></div>
            </div>
            <div className={s.offerR}>
              <p className={s.lab}>{c.offer.listLabel}</p>
              <ul className={s.get}>
                {c.offer.items.map((it, i) => (
                  <li key={it.strong}><b>{String(i + 1).padStart(2, "0")}</b><span><strong>{it.strong}</strong> {it.rest}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className={s.sec} id="worth">
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.calc.label}</p><h2>{c.calc.title}</h2></div></div>
          <Calc calc={c.calc} />
        </div>
      </section>

      {/* TRUST */}
      <section className={s.sec} id="trust">
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.trust.label}</p><h2>{c.trust.title}</h2></div></div>
          <div className={s.trust}>
            {c.trust.items.map((t) => <div className={s.tr} key={t.title}><Ico name={t.icon} /><div><h3>{t.title}</h3><p>{t.body}</p></div></div>)}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className={s.sec}>
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.facts.label}</p><h2>{c.facts.title}</h2></div></div>
          <div className={s.facts}>
            {c.facts.items.map((f) => (
              <div className={s.fact} key={f.l}>
                <span className={`${s.n} ${s.tnum}`}>{f.n}</span>
                <span className={s.l}>{f.l}</span>
                <a className={s.src} href={f.src.href} target="_blank" rel="noopener nofollow">{f.src.label}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className={s.sec} id="faq">
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>Questions</p><h2>Straight answers.</h2></div></div>
          <div className={s.faq}>
            {c.faq.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
          </div>

          <div className={s.cta}>
            <h2>{c.cta.titleBefore} <em>{c.cta.titleEm}</em></h2>
            <p>{c.cta.body}</p>
            <DemoButton href={wa} label={c.cta.button} variant="onDark" />
          </div>

          <div className={s.foot}>
            <div className={s.footBlock}>
              <p className={s.lab}>Sources</p>
              <div className={s.srcs}>
                {c.sources.map((x) => <a className={s.src} key={x.href} href={x.href} target="_blank" rel="noopener nofollow">{x.label}</a>)}
              </div>
            </div>
            <div className={s.footBlock}>
              <p className={s.lab}>Also from OARC</p>
              <div className={s.rel}>{c.related.map((r) => <Link key={r.href} href={r.href}>{r.label}</Link>)}</div>
            </div>
            <small>{c.disclaimer}</small>
          </div>
        </div>
      </section>
    </div>
  );
}
