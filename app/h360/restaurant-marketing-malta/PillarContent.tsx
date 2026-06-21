'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import H360Nav from '../_components/H360Nav';
import H360FinalCTA from '../_components/H360FinalCTA';
import { C, FONT_DARK, FONT_LIGHT, G } from '../_components/tokens';

const CSS = `
  @keyframes pillar-fade { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  .pillar-reveal { opacity:0; transform:translateY(24px);
    transition:opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
  .pillar-reveal.in { opacity:1; transform:translateY(0); }
`;

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in');
          ob.disconnect();
        }
      },
      { threshold },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return ref;
}

function useMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const fn = () => setM(window.innerWidth < 768);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return m;
}

/* ── Phone: diagnosis checklist mockup ── */
function DiagnosisPhone() {
  const items = [
    { label: 'Google Maps ranking', ok: false },
    { label: 'Review count vs rivals', ok: false },
    { label: 'Direct orders (not Wolt)', ok: false },
    { label: 'Repeat guest system', ok: false },
  ];
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 300,
        background: '#fff',
        borderRadius: 28,
        border: `1px solid ${G.border}`,
        boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '8px 14px 4px', fontSize: 12, fontWeight: 700, color: G.text, display: 'flex', justifyContent: 'space-between' }}>
        <span>9:41</span>
        <span style={{ fontSize: 10, color: G.textMuted }}>ARC AI Audit</span>
      </div>
      <div style={{ padding: '12px 14px 18px' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: G.text, marginBottom: 12 }}>What&apos;s broken at your venue</div>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 12px',
              marginBottom: 6,
              borderRadius: 10,
              background: item.ok ? '#f0fdf4' : '#fef2f2',
              border: `1px solid ${item.ok ? '#bbf7d0' : '#fecaca'}`,
            }}
          >
            <span style={{ fontSize: 14 }}>{item.ok ? '✓' : '✗'}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: G.text }}>{item.label}</span>
          </div>
        ))}
        <div style={{ marginTop: 12, padding: '10px 12px', background: G.green, borderRadius: 10, textAlign: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#f0f9f4' }}>Fix 3 issues → more covers</span>
        </div>
      </div>
    </div>
  );
}

/* ── Commission comparison mini card ── */
function CommissionCard() {
  return (
    <div style={{ width: '100%', maxWidth: 310, background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.09)' }}>
      <div style={{ padding: '12px 14px', borderBottom: `1px solid ${G.border}` }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>Tuesday delivery — €180 order</div>
      </div>
      <div style={{ padding: '12px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: G.textMuted, marginBottom: 6 }}>
          <span>Wolt takes 30%</span>
          <span style={{ color: G.red, fontWeight: 700 }}>−€54.00</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 800, color: G.green }}>
          <span>Direct via H360</span>
          <span>€180.00 kept</span>
        </div>
      </div>
    </div>
  );
}

/* ── Guest journey mini card ── */
function GuestJourneyCard() {
  return (
    <div style={{ width: '100%', maxWidth: 310, background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.09)' }}>
      {[
        ['Find you on Google Maps', '1 tap'],
        ['Scan QR → menu + allergens', '30 sec'],
        ['Pay at table — no wait', '9 sec'],
        ['Wallet pass → next visit', 'auto'],
      ].map(([step, time], i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 14px', borderBottom: i < 3 ? `1px solid ${G.border}` : 'none', fontSize: 13 }}>
          <span style={{ color: G.text }}>{step}</span>
          <span style={{ fontWeight: 700, color: G.green }}>{time}</span>
        </div>
      ))}
    </div>
  );
}

const DIAGNOSES = [
  {
    title: 'Invisible on Google Maps',
    body: 'Tourists search "restaurants near me" in Valletta or Sliema. If you are page two, you do not exist.',
    fix: 'Maps + profile + local SEO',
  },
  {
    title: 'Reviews stuck while rivals climb',
    body: 'A place with half your food quality but triple your reviews ranks above you every time.',
    fix: 'Review flow + profile replies',
  },
  {
    title: 'Margin leaking to Wolt and Bolt',
    body: 'Every delivery order sends 25–30% out the door. You paid for the kitchen. They took the guest.',
    fix: 'Direct QR orders — zero commission',
  },
  {
    title: 'No system for repeat guests',
    body: 'A guest loved the meal. You never got their name. They order from an app next time — not from you.',
    fix: 'Stamp card + WhatsApp follow-up',
  },
];

const CLUSTER_LINKS = [
  { href: '/h360/google-maps-restaurant-malta', label: 'Google Maps for restaurants', sub: 'Rank when tourists search' },
  { href: '/h360/restaurant-reviews-malta', label: 'Restaurant reviews Malta', sub: 'Reviews that move ranking' },
  { href: '/h360/losing-money-to-wolt-bolt-malta', label: 'Stop losing to Wolt & Bolt', sub: 'Keep margin + guest data' },
  { href: '/h360/why-is-my-restaurant-empty', label: 'Why is my restaurant empty?', sub: 'Diagnose dead nights' },
  { href: '/h360/restaurant-table-ordering-qr-malta', label: 'Table ordering by QR', sub: 'Live — zero commission' },
  { href: '/h360', label: 'H360 platform overview', sub: 'All tools in one place' },
];

const FAQ = [
  {
    q: 'Who does restaurant marketing in Malta?',
    a: 'H360 is restaurant marketing built by operators who run Maltese venues including Louisiana Mama and Palino. We diagnose why a restaurant is invisible on Google, losing margin to delivery apps, or failing to bring guests back — then fix each layer. Generic agencies sell posts and ads; we fix Maps ranking, reviews, direct orders, and repeat visits as one system.',
  },
  {
    q: 'How is H360 different from a marketing agency?',
    a: 'Most agencies sell activity — posts, ads, reports. H360 starts with diagnosis: why your tables are empty on a Tuesday while a worse place across the road is full. We operate restaurants in Malta, so the fix follows operations — Google visibility, review velocity, direct ordering without Wolt commission, and a repeat-guest system. You get a method tied to covers and margin, not vanity metrics.',
  },
  {
    q: 'Do I need a big budget for restaurant marketing in Malta?',
    a: 'You need the right sequence, not the biggest ad spend. Malta is a small market — ranking on Google Maps and collecting reviews often beats blasting Meta ads to cold traffic. H360 prioritises findability, direct orders, and guests who return. Paid ads can sit on top once the foundation is fixed.',
  },
  {
    q: 'What does restaurant marketing include with H360?',
    a: 'The core stack covers Google Business Profile, Maps and local SEO, review collection, QR table ordering (live), digital stamp loyalty (live), and WhatsApp follow-ups (live). Booking, analytics, and other modules roll out on roadmap where not yet shipped — we never claim tools are live when they are not.',
  },
];

export default function PillarContent() {
  const m = useMobile();
  const heroRef = useReveal();
  const diagRef = useReveal();
  const ownerRef = useReveal();
  const guestRef = useReveal();
  const methodRef = useReveal();
  const linksRef = useReveal();
  const faqRef = useReveal();

  return (
    <div style={{ fontFamily: FONT_LIGHT, background: G.bg, color: G.text }}>
      <style>{CSS}</style>
      <H360Nav />

      {/* ── PILLAR HERO ── */}
      <section
        style={{
          padding: m ? '32px 20px 48px' : '56px 40px 72px',
          background: G.bg,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: m ? '1fr' : '1fr 1fr',
            gap: m ? 32 : 56,
            alignItems: 'center',
          }}
        >
          <div ref={heroRef as React.RefObject<HTMLDivElement>} className="pillar-reveal">
            <p style={{ fontSize: 12, fontWeight: 600, color: G.green, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
              Restaurant marketing · Malta
            </p>
            <h1
              style={{
                fontSize: m ? 'clamp(28px,7.5vw,40px)' : 'clamp(36px,4.2vw,52px)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                margin: '0 0 20px',
              }}
            >
              Restaurant Marketing Malta — Diagnose Why You&apos;re Invisible, Then Fix It
            </h1>
            <p style={{ fontSize: m ? 16 : 17, lineHeight: 1.65, color: G.textMuted, marginBottom: 24, maxWidth: 520 }}>
              It is Tuesday. Your place is half-empty. The restaurant across the road — worse food, worse view — is packed.
              You are bleeding 25–30% to Wolt on every delivery order. You searched{' '}
              <strong style={{ color: G.text, fontWeight: 600 }}>restaurant marketing Malta</strong> and found agencies
              promising posts and ads. Nobody told you <em>why</em> Google skips you, why reviews stalled, or why guests
              never come back. H360 does. We run venues here — Louisiana Mama, Palino, Calli Bistro — so we diagnose first,
              then fix Maps, reviews, direct orders, and repeat guests as one system.
            </p>
            <Link
              href="/h360/demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 22px',
                background: G.green,
                color: '#f0f9f4',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
              }}
              data-testid="button-pillar-hero-cta"
            >
              Get your free diagnosis
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            {/* [IMAGE: Malta restaurant street at dusk — empty terrace vs full rival across road, Sliema/Valletta tone] */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 340,
                padding: m ? '24px 0' : '32px 0',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '-8%',
                  background: `linear-gradient(135deg, ${G.greenLt} 0%, ${G.green} 55%, #052610 100%)`,
                  borderRadius: 24,
                  zIndex: 0,
                }}
              />
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
                <DiagnosisPhone />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSIS GRID ── */}
      <section style={{ padding: m ? '48px 20px' : '72px 40px', background: G.beige }}>
        <div ref={diagRef as React.RefObject<HTMLDivElement>} className="pillar-reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: m ? 26 : 36, fontWeight: 800, letterSpacing: '-0.035em', marginBottom: 12, lineHeight: 1.12 }}>
            Four reasons Malta restaurants stay empty — and what fixes each one
          </h2>
          <p style={{ fontSize: 16, color: G.textMuted, marginBottom: 32, maxWidth: 640, lineHeight: 1.6 }}>
            Marketing without diagnosis is noise. These are the patterns we see in venues we operate and audit every week.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: 16 }}>
            {DIAGNOSES.map((d, i) => (
              <div
                key={i}
                style={{
                  background: G.bg,
                  borderRadius: 16,
                  padding: '22px 24px',
                  border: `1px solid ${G.border}`,
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>{d.title}</h3>
                <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.6, marginBottom: 12 }}>{d.body}</p>
                <span style={{ fontSize: 12, fontWeight: 700, color: G.green }}>Fix → {d.fix}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO 1: OWNER ── */}
      <section style={{ padding: m ? '56px 20px' : '80px 40px', background: G.bg }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: m ? '1fr' : '1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div ref={ownerRef as React.RefObject<HTMLDivElement>} className="pillar-reveal">
            <p style={{ fontSize: 11, fontWeight: 700, color: G.textMuted, letterSpacing: '0.1em', marginBottom: 10 }}>FOR YOU</p>
            <h2 style={{ fontSize: m ? 26 : 34, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.12, marginBottom: 16 }}>
              You keep the margin. You own the guest. You fill dead nights.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: G.textMuted, marginBottom: 16 }}>
              Restaurant marketing that works in Malta is not more Instagram posts — it is stopping the leak. Every direct
              order through H360 keeps 100% of the bill. Every review pushes you above the rival with worse food. Every
              wallet pass is a guest who comes back to <em>your</em> tables, not Wolt&apos;s app.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: G.textMuted }}>
              When we fixed this at our own venues, the maths was obvious: less commission out, more predictable covers,
              a list of regulars we could reach on WhatsApp without paying an aggregator again.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CommissionCard />
          </div>
        </div>
      </section>

      {/* ── HERO 2: GUEST ── */}
      <section style={{ padding: m ? '56px 20px' : '80px 40px', background: G.beige }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: m ? '1fr' : '1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div style={{ order: m ? 2 : 0, display: 'flex', justifyContent: 'center' }}>
            <GuestJourneyCard />
          </div>
          <div ref={guestRef as React.RefObject<HTMLDivElement>} className="pillar-reveal" style={{ order: m ? 1 : 0 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: G.textMuted, letterSpacing: '0.1em', marginBottom: 10 }}>FOR YOUR GUESTS</p>
            <h2 style={{ fontSize: m ? 26 : 34, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.12, marginBottom: 16 }}>
              They find you, order confidently, pay fast — and come back
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: G.textMuted, marginBottom: 16 }}>
              A tourist in Valletta does not want a maze. They want your restaurant on Maps, a menu with photos and
              allergen flags, and payment without waiting twenty minutes for the bill. When that flow is smooth, they
              leave a review, save your stamp card, and book again next trip — revenue back to your door.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: G.textMuted }}>
              When the guest path works, they return without you chasing them on ads — that is where margin compounds.
            </p>
          </div>
        </div>
      </section>

      {/* ── DARK: METHOD / MOAT ── */}
      <section style={{ background: C.bg, padding: m ? '64px 20px' : '96px 40px', fontFamily: FONT_DARK, borderTop: `1px solid ${C.border}` }}>
        <div ref={methodRef as React.RefObject<HTMLDivElement>} className="pillar-reveal" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: m ? 28 : 44, fontWeight: 800, color: C.white, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 20 }}>
            Operators who market — not marketers guessing at operations
          </h2>
          <p style={{ fontSize: m ? 16 : 18, color: C.muted, lineHeight: 1.7, marginBottom: 32 }}>
            We run Louisiana Mama, Palino, and Calli Bistro in Malta. When a venue is invisible, we know whether the
            blocker is Maps, reviews, aggregators, or no repeat system — because we have hit each one ourselves. That is
            the convert layer: diagnose the real break, fix it completely, then stack the tools that keep working after we
            leave the room.
          </p>
          {/* [IMAGE: approved venue photo — kitchen pass or busy service at Louisiana Mama or Palino] */}
          <Link
            href="/h360/demo"
            style={{
              display: 'inline-flex',
              padding: '14px 28px',
              background: C.white,
              color: '#000',
              borderRadius: 64,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Get your free diagnosis →
          </Link>
        </div>
      </section>

      {/* ── CLUSTER LINKS ── */}
      <section style={{ padding: m ? '56px 20px' : '80px 40px', background: G.bg }}>
        <div ref={linksRef as React.RefObject<HTMLDivElement>} className="pillar-reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: m ? 26 : 34, fontWeight: 800, letterSpacing: '-0.035em', marginBottom: 8 }}>
            Go deeper — one problem, one page
          </h2>
          <p style={{ fontSize: 16, color: G.textMuted, marginBottom: 28, maxWidth: 560 }}>
            H360 is a cluster, not one long brochure. Each link below is built for the exact query an owner types.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: 12 }}>
            {CLUSTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '18px 20px',
                  borderRadius: 14,
                  border: `1px solid ${G.border}`,
                  background: G.bg,
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, letterSpacing: '-0.02em' }}>{link.label}</div>
                <div style={{ fontSize: 13, color: G.textMuted }}>{link.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ / AEO ── */}
      <section style={{ padding: m ? '56px 20px 72px' : '80px 40px 96px', background: G.beige }}>
        <div ref={faqRef as React.RefObject<HTMLDivElement>} className="pillar-reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: m ? 26 : 34, fontWeight: 800, letterSpacing: '-0.035em', marginBottom: 28 }}>
            Questions owners ask — and the full answers
          </h2>
          {FAQ.map((item, i) => (
            <div key={i} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i < FAQ.length - 1 ? `1px solid ${G.border}` : 'none' }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 10, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{item.q}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: G.textMuted, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <H360FinalCTA
        headline="Get your free restaurant diagnosis"
        subline="ARC AI scans your Google presence, reviews, and direct-order gaps — then we show you what to fix first."
        buttonLabel="Start free audit"
      />
    </div>
  );
}
