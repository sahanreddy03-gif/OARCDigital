import Link from "next/link";
import {
  MessageCircle, Filter, CalendarDays, Clock, UserPlus, RefreshCw, Link2, PenLine, Image as ImageIcon, Euro, Repeat,
  Wrench, CreditCard, FileText, BarChart3, Sun, Network, Workflow, TrendingUp, ShieldCheck, Search, FolderOpen,
  Scale, Inbox, Languages, Users, Lock, Eye, BadgeCheck, Building2, BookOpen, Car, Plane, Receipt, Gavel, Phone, Check,
  CalendarClock, Gift,
  type LucideIcon,
} from "lucide-react";
import { NAP } from "@/lib/seo/nap";
import { bookingUrl } from "@/lib/utm";
import type { AiIcon, AiSystemContent } from "@/lib/ai-systems/types";
import { AskSpot, Calc, FloatBar, HeroFilm, JobsRail, PriceForm } from "./AiSystemClient";
import { SpotVisual } from "./AiVisuals";
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

/** WhatsApp link that claims the free first month. */
export function offerLink(business: string) {
  const text = `Hi OARC, I run a ${business} in Malta. I'd like to claim the free first month of the AI system.`;
  return `https://wa.me/${NAP.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function OfferButton({ href, label, variant, testid }: { href: string; label: string; variant?: "onDark"; testid: string }) {
  return (
    <a className={`${s.btn} ${variant ? s[variant] : ""}`} href={href} target="_blank" rel="noopener" data-testid={testid}>
      <Gift aria-hidden="true" strokeWidth={1.6} />{label}
    </a>
  );
}

function CallButton({ href, label, dark, testid }: { href: string; label: string; dark?: boolean; testid: string }) {
  return (
    <a className={`${s.btn} ${dark ? s.ghostDark : s.ghost}`} href={href} target="_blank" rel="noopener" data-testid={testid}>
      <CalendarClock aria-hidden="true" strokeWidth={1.6} />{label}
    </a>
  );
}

export default function AiSystemPage({ c }: { c: AiSystemContent }) {
  const offer = offerLink(c.business);
  const call = bookingUrl(`/ai/${c.slug}`);
  const d = c.dashboard;
  const top = c.jobs.items.slice(0, 3);
  const rest = c.jobs.items.slice(3);
  const light = `${s.band} ${s.light}`;

  return (
    <div className={s.root}>
      {/* HERO */}
      <section className={s.hero} id="top">
        <div className={s.wrap}>
          <span className={s.pill}><span className={s.ldot} />{c.hero.pill}</span>
          <p className={s.fin}>{c.hero.kicker}</p>
          <h1>{c.hero.h1Before} <span className={s.hl}>{c.hero.h1Highlight}</span></h1>
          <p className={s.sub}>{c.hero.sub}</p>
          <div className={s.acts}>
            <OfferButton href={offer} label={c.hero.primaryCta} testid="button-hero-offer" />
            <CallButton href={call} label={c.hero.secondaryCta} testid="button-hero-call" />
          </div>
          <p className={s.note}><span className={s.offerTag}>{c.offer.label}</span>{c.hero.note}</p>

          <HeroFilm film={c.film} />

          <div className={s.proof}>
            <p className={s.proofN}>{c.proof.line}.</p>
            <div className={s.with}><span className={s.withLab}>Works with</span>{c.worksWith.map((w) => <span key={w}>{w}</span>)}</div>
          </div>
        </div>
      </section>

      {/* 2. BUILT AROUND YOU */}
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

      {/* 3. EVERYTHING IT DOES: three big, the rest in the rail. On white. */}
      <JobsRail
        sectionClass={light}
        label={c.jobs.label}
        title={c.jobs.title}
        moreTitle={`And ${rest.length} more.`}
        hint="Swipe to see them all →"
        featured={top.map((j) => (
          <li className={`${s.featCard} ${s.reveal}`} key={j.title}>
            <Ico name={j.icon} />
            <h3>{j.title}</h3>
            <p>{j.body}</p>
            <span className={s.gain}>{j.gain}</span>
          </li>
        ))}
      >
        {rest.map((j) => (
          <li className={s.card} key={j.title}>
            <Ico name={j.icon} />
            <h3>{j.title}</h3>
            <p>{j.body}</p>
            <span className={s.gain}>{j.gain}</span>
          </li>
        ))}
      </JobsRail>

      {/* 4. THE AI AGENTS: chat and voice, trained on the client's own data */}
      <section className={s.sec} id="agents">
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.agents.label}</p><h2>{c.agents.title}</h2><p className={s.d}>{c.agents.intro}</p></div></div>
          <div className={s.agents}>
            {c.agents.items.map((a) => (
              <div className={`${s.agent} ${s.reveal}`} key={a.name}>
                <p className={s.agentName}>{a.name}</p>
                <h3>{a.title}</h3>
                <ul>{a.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <div className={s.agentCh}>{a.channels.map((ch) => <span key={ch}>{ch}</span>)}</div>
                <p className={s.agentRes}>{a.result}</p>
              </div>
            ))}
          </div>
          <p className={s.agentNote}>{c.agents.note}</p>
        </div>
      </section>

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
              <div className={`${s.vis} ${s.reveal}`}><SpotVisual visual={sp.visual} /></div>
            </div>
          )}
        </section>
      ))}

      {/* THE DASHBOARD */}
      <section className={s.sec} id="dashboard">
        <div className={s.wrap}>
          <div className={s.sh}><div><h2>{d.title}</h2><p className={s.d}>{d.body}</p></div></div>
          <div className={s.shot} role="img" aria-label={`The OARC ${c.name.toLowerCase()} dashboard: today's numbers, what needs you, and the week so far`}>
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
                          <div key={b.label} className={i === d.bars.length - 1 ? s.t : undefined} style={{ ["--h" as string]: `${b.h}%` }}><span>{b.label}</span></div>
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
          </div>
        </div>
      </section>

      {/* AREAS: on white where the page is long */}
      <section className={c.lightAreas ? light : s.sec} id="areas">
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

      {/* YOU STAY IN CHARGE: trust, then what the client's own clients feel. One section. */}
      <section className={s.sec} id="trust">
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.trust.label}</p><h2>{c.trust.title}</h2></div></div>
          <div className={s.trust}>
            {c.trust.items.map((t) => <div className={s.tr} key={t.title}><Ico name={t.icon} /><div><h3>{t.title}</h3><p>{t.body}</p></div></div>)}
          </div>
          <div className={`${s.wins} ${s.winsUnder}`}>
            {c.wins.items.map((w) => <div className={`${s.win} ${s.reveal}`} key={w.title}><b>{w.title}</b><p>{w.body}</p></div>)}
          </div>
        </div>
      </section>

      {/* YOUR NUMBERS: calculator and the sourced facts. One section. */}
      <section className={s.sec} id="worth">
        <div className={s.wrap}>
          <div className={s.sh}><div><p className={s.lab}>{c.calc.label}</p><h2>{c.calc.title}</h2></div></div>
          <Calc calc={c.calc} />
          <div className={`${s.facts} ${s.factsUnder}`}>
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

      {/* HOW IT STARTS: set up in 72 hours + the offer. One section. */}
      <section id="start">
        <div className={s.wrap}>
          <div className={s.live} id="live">
            <p className={s.lab}>{c.live.label}</p>
            <h2>{c.live.h2Before} <em>{c.live.h2Em}</em></h2>
            <p className={s.d}>{c.live.body}</p>
            <ol className={s.tl}>
              {c.live.steps.map((st) => <li key={st.title}><span className={s.when}>{st.when}</span><b>{st.title}</b><span>{st.body}</span></li>)}
            </ol>
          </div>
          <div className={`${s.offer} ${s.light}`}>
            <div className={s.offerL}>
              <span className={s.offerTag}><Gift aria-hidden="true" strokeWidth={1.8} />{c.offer.label}</span>
              <h3>{c.offer.title}</h3>
              <p className={s.d}>{c.offer.body}</p>
              <div className={s.acts}>
                <OfferButton href={offer} label={c.offer.cta} testid="button-offer-claim" />
                <CallButton href={call} label={c.offer.secondaryCta} testid="button-offer-call" />
              </div>
            </div>
            <div className={s.offerR}>
              <ul className={s.get}>
                {c.offer.items.map((it) => (
                  <li key={it.strong}><Check aria-hidden="true" strokeWidth={2.2} /><span><strong>{it.strong}</strong> {it.rest}</span></li>
                ))}
              </ul>
            </div>
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

          <div className={`${s.cta} ${s.ctaBlue}`} id="offer">
            <span className={s.offerTag}><Gift aria-hidden="true" strokeWidth={1.8} />{c.offer.label}</span>
            <h2>{c.cta.titleBefore} <em>{c.cta.titleEm}</em></h2>
            <p>{c.cta.body}</p>
            <div className={s.ctaActs}>
              <OfferButton href={offer} label={c.cta.button} variant="onDark" testid="button-cta-claim" />
              <CallButton href={call} label={c.cta.secondary} dark testid="button-cta-call" />
            </div>
            <p className={s.leadLab}>Or leave your number and we’ll message you.</p>
            <PriceForm service={`AI system: ${c.name}`} source={`/ai/${c.slug} free month`} />
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
              <div className={s.rel}>
                <Link href="/ai">All AI systems</Link>
                {c.related.map((r) => <Link key={r.href} href={r.href}>{r.label}</Link>)}
              </div>
            </div>
            <small>{c.disclaimer}</small>
          </div>
        </div>
      </section>

      <FloatBar line={c.proof.line} short={c.proof.short} href={offer} label="Claim your free month" shortLabel="Free month" />
    </div>
  );
}
