'use client';

import { useEffect, useRef, useState } from 'react';
import { m, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

/* ─────────────────────────────────────────────────────────────
   THE INTELLIGENCE SHOWCASE
   Four acts, auto-playing like a film:
   01 TRAIN   — we record your best person, mirror knowledge + mannerism
   02 CONNECT — the model plugs into your live systems
   03 WORK    — it talks exactly like them, on every channel
   04 THINK   — it studies competitors, finds digital + physical moves
   ───────────────────────────────────────────────────────────── */

type Msg = {
  side: 'sys' | 'in' | 'out';
  text: string;
  sub?: string;
};

type Act = {
  id: string;
  index: string;
  label: string;
  head: string;
  headAccent: string;
  body: string;
  msgs: Msg[];
};

const ACTS: Act[] = [
  {
    id: 'train',
    index: '01',
    label: 'TRAIN',
    head: 'We record your best person.',
    headAccent: 'Then we mirror them.',
    body:
      'Our team comes to you. We film your top salesperson working — every phrase, every pause, every recovery. Knowledge and mannerism, both. The model is built from them, not from a template.',
    msgs: [
      { side: 'sys', text: 'SESSION · on-site recording — day 2 of 3', sub: 'video + transcript captured' },
      { side: 'in', text: '"When they hesitate on price, I never push. I ask what the budget was built around."', sub: 'Maria · your top closer, on camera' },
      { side: 'sys', text: 'MIRRORING · 214 phrases · 31 objection paths · tone map complete' },
      { side: 'out', text: 'Model speaks. Same rhythm. Same recovery lines. Your team can\'t tell which is which.', sub: 'blind test · passed' },
    ],
  },
  {
    id: 'connect',
    index: '02',
    label: 'CONNECT',
    head: 'Then it moves into your systems.',
    headAccent: 'All of them.',
    body:
      'CRM, calendar, phone line, WhatsApp, invoicing. The employee doesn\'t sit beside your business — it sits inside it, reading and writing to the same tools your team uses.',
    msgs: [
      { side: 'sys', text: 'CONNECTED · CRM ✓ · calendar ✓ · phone ✓ · WhatsApp ✓ · billing ✓' },
      { side: 'in', text: 'Inbound call · +356 79·· ··· — existing client, 2 open quotes', sub: 'context pulled in 0.3s' },
      { side: 'out', text: '"Sandra! Good timing — I was about to chase you on the terrace quote. Still deciding, or shall I book the install?"', sub: 'voice · your greeting, your history' },
      { side: 'sys', text: 'BOOKED · Thursday 10:00 · invoice drafted · CRM updated' },
    ],
  },
  {
    id: 'work',
    index: '03',
    label: 'WORK',
    head: 'It works every channel.',
    headAccent: 'In their exact voice.',
    body:
      'Voice support, sales calls, WhatsApp, DMs, email — one employee, one memory, every door. Customers hear your best person on their best day, at 3am on a Sunday.',
    msgs: [
      { side: 'in', text: 'Missed call 02:14 — returned in 19 seconds. Booking saved.', sub: 'phone · overnight' },
      { side: 'out', text: '"Table for 6 Friday — done. I\'ve noted the anniversary, we\'ll have something ready."', sub: 'WhatsApp · 02:15' },
      { side: 'in', text: 'New 5★ review — reply drafted in your voice. One tap to approve.', sub: 'reputation · queued' },
      { side: 'out', text: 'Quote #291 followed up third time — client signed. Deposit invoice sent.', sub: 'email · while you slept' },
    ],
  },
  {
    id: 'think',
    index: '04',
    label: 'THINK',
    head: 'And then it starts thinking.',
    headAccent: 'For the business itself.',
    body:
      'The creative model studies what your competitors publish, price and promise — then tells you where the gap is. Not just digital moves. Physical ones. It\'s not a team of a few people. It\'s the intelligence of the business itself.',
    msgs: [
      { side: 'sys', text: 'WATCHING · 6 competitors · pricing, menus, campaigns, reviews' },
      { side: 'in', text: 'Competitor dropped Sunday lunch. Their reviews mention "nowhere for families now" — 11 times this month.', sub: 'signal detected' },
      { side: 'out', text: 'Opportunity: launch a family Sunday set. Digital: geo-targeted campaign, €190 est. Physical: kids corner near terrace — staff already suggested it twice.', sub: 'strategy brief · ready for you' },
      { side: 'sys', text: 'REVENUE PATH · projected +€3.2k/mo · brief sent to your phone' },
    ],
  },
];

const ACT_DURATION = 9000;
const MSG_STAGGER = 1400;
const MSG_START = 500;
const TICK = 100;

export default function IntelligenceShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: false, margin: '-15% 0px' });
  const prefersReducedMotion = useReducedMotion();
  const [act, setAct] = useState(0);
  /** ms elapsed inside the current act — single source of truth */
  const [elapsed, setElapsed] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);

  const playing = inView && !userPaused && !hoverPaused && !prefersReducedMotion;

  /* master clock — elapsed drives messages, progress bar, and act advance */
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setElapsed((e) => {
        const next = e + TICK;
        if (next >= ACT_DURATION) {
          setAct((a) => (a + 1) % ACTS.length);
          return 0;
        }
        return next;
      });
    }, TICK);
    return () => clearInterval(id);
  }, [playing]);

  const goToAct = (i: number) => {
    setAct(i);
    setElapsed(0);
  };

  const current = ACTS[act];
  /* reduced motion: show everything at once */
  const visibleMsgs = prefersReducedMotion
    ? current.msgs.length
    : Math.min(
        current.msgs.length,
        Math.max(0, Math.floor((elapsed - MSG_START) / MSG_STAGGER) + (elapsed >= MSG_START ? 1 : 0)),
      );
  const progress = Math.min(100, (elapsed / ACT_DURATION) * 100);

  return (
    <div ref={rootRef}>
      {/* ── Section headline ── */}
      <div className="max-w-3xl mx-auto text-center mb-14 px-2">
        <p className="text-[10px] font-bold tracking-[0.28em] text-[#c4ff4d] uppercase mb-5"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
          How it actually works
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
          Watch an employee
          <br />
          <span
            className="italic font-normal text-[#c4ff4d]"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            being born.
          </span>
        </h2>
        <p className="mt-6 text-white/50 text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
          Recorded from your best people. Wired into your systems. Working your channels.
          Thinking about your market. This is the whole journey — live.
        </p>
      </div>

      {/* ── The stage ── */}
      <div
        className="max-w-5xl mx-auto rounded-3xl border border-white/[0.08] bg-[#070707] overflow-hidden"
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => setHoverPaused(false)}
        data-testid="intelligence-showcase"
      >
        {/* Act rail — accessible tabs */}
        <div className="flex items-stretch border-b border-white/[0.07]">
          <div role="tablist" aria-label="How your AI employee is built" className="grid grid-cols-4 flex-1">
            {ACTS.map((a, i) => (
              <button
                key={a.id}
                role="tab"
                id={`act-tab-${a.id}`}
                aria-selected={i === act}
                aria-controls={`act-panel-${a.id}`}
                tabIndex={i === act ? 0 : -1}
                onClick={() => goToAct(i)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') goToAct((act + 1) % ACTS.length);
                  if (e.key === 'ArrowLeft') goToAct((act + ACTS.length - 1) % ACTS.length);
                }}
                className={`relative px-2 sm:px-4 py-4 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4ff4d] focus-visible:-outline-offset-2 ${
                  i === act ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
                }`}
                data-testid={`act-tab-${a.id}`}
              >
                <span
                  className={`block text-[9px] sm:text-[10px] font-bold tracking-[0.2em] mb-0.5 transition-colors ${
                    i === act ? 'text-[#c4ff4d]' : 'text-white/25'
                  }`}
                  style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                >
                  {a.index}
                </span>
                <span
                  className={`block text-[10px] sm:text-xs font-bold tracking-[0.15em] transition-colors ${
                    i === act ? 'text-white' : 'text-white/30'
                  }`}
                >
                  {a.label}
                </span>
                {/* progress bar — width driven by the same clock as the content */}
                {i === act && !prefersReducedMotion && (
                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#c4ff4d]"
                    style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Play/Pause — keyboard accessible */}
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? 'Play the showcase' : 'Pause the showcase'}
            className="px-4 border-l border-white/[0.07] text-white/40 hover:text-[#c4ff4d] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4ff4d] focus-visible:-outline-offset-2"
            data-testid="button-showcase-playpause"
          >
            {userPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
        </div>

        <div className="grid lg:grid-cols-2">
          {/* Left — narrative */}
          <div
            role="tabpanel"
            id={`act-panel-${current.id}`}
            aria-labelledby={`act-tab-${current.id}`}
            className="p-7 sm:p-10 flex flex-col justify-center min-h-[300px] border-b lg:border-b-0 lg:border-r border-white/[0.07]"
          >
            <AnimatePresence mode="wait">
              <m.div
                key={current.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-[2.1rem] font-bold text-white leading-[1.12] tracking-tight mb-5">
                  {current.head}{' '}
                  <span
                    className="italic font-normal text-[#c4ff4d]"
                    style={{ fontFamily: 'var(--font-instrument-serif)' }}
                  >
                    {current.headAccent}
                  </span>
                </h3>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed font-light">
                  {current.body}
                </p>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Right — live feed */}
          <div className="p-6 sm:p-8 bg-black/40 min-h-[380px] flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <span
                className="text-[9px] font-bold tracking-[0.25em] text-white/30 uppercase"
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                Live · {current.label.toLowerCase()}
              </span>
              <span className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full bg-[#c4ff4d] ${playing ? 'animate-pulse' : ''}`} />
                <span
                  className="text-[9px] font-bold tracking-widest text-[#c4ff4d]"
                  style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                >
                  {playing ? 'REC' : 'PAUSED'}
                </span>
              </span>
            </div>

            <div className="space-y-3 flex-1">
              <AnimatePresence mode="popLayout">
                {current.msgs.slice(0, visibleMsgs).map((msg, i) => (
                  <m.div
                    key={`${current.id}-${i}`}
                    layout
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={
                      msg.side === 'sys'
                        ? ''
                        : `flex ${msg.side === 'out' ? 'justify-end' : 'justify-start'}`
                    }
                  >
                    {msg.side === 'sys' ? (
                      <p
                        className="text-[10px] sm:text-[11px] text-white/30 tracking-wide py-1 border-l-2 border-[#c4ff4d]/30 pl-3"
                        style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                      >
                        {msg.text}
                        {msg.sub && <span className="block text-white/20 mt-0.5">{msg.sub}</span>}
                      </p>
                    ) : (
                      <div
                        className={`max-w-[88%] px-4 py-3 rounded-2xl text-[13px] sm:text-sm leading-relaxed ${
                          msg.side === 'out'
                            ? 'bg-[#c4ff4d]/[0.09] border border-[#c4ff4d]/25 text-[#e5ffb0] rounded-tr-sm'
                            : 'bg-white/[0.05] border border-white/10 text-white/80 rounded-tl-sm'
                        }`}
                      >
                        {msg.text}
                        {msg.sub && (
                          <span
                            className="block mt-1.5 text-[9px] tracking-[0.15em] uppercase text-white/30"
                            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                          >
                            {msg.sub}
                          </span>
                        )}
                      </div>
                    )}
                  </m.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ── Conversion close ── */}
      <div className="max-w-3xl mx-auto text-center mt-16 px-2">
        <p className="text-xl sm:text-2xl md:text-3xl text-white leading-snug font-bold tracking-tight">
          Your best person, multiplied.
          <br />
          <span
            className="italic font-normal text-white/60"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            Working before you finish this sentence.
          </span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%20want%20to%20book%20a%20consultation%20about%20AI%20employees"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c4ff4d] text-black font-bold rounded-full text-base shadow-lg shadow-[#c4ff4d]/20 hover:shadow-[#c4ff4d]/40 hover:scale-[1.02] transition-all"
            data-testid="button-showcase-consultation"
          >
            <SiWhatsapp className="w-5 h-5" />
            Book a consultation
          </a>
          <span
            className="text-white/30 text-xs tracking-wide"
            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            30 min · we map your first employee · no obligation
          </span>
        </div>
      </div>
    </div>
  );
}
