'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ProductVisualId } from './productCardsData';
import VoiceHubCardVisual from './VoiceHubCardVisual';
import { getCardLayout } from '@/app/h360/_components/product-cards/cardLayout';

const WHITE = '#ffffff';
const DARK = '#111111';
const BORDER = '#e5e7eb';
const GREEN = '#094413';

type VisualProps = { playing: boolean; dark?: boolean };

function Sheet({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 310,
        background: dark ? 'rgba(255,255,255,0.07)' : WHITE,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: dark ? '0 16px 48px rgba(0,0,0,0.35)' : '0 8px 32px rgba(0,0,0,0.09)',
        border: dark ? '1px solid rgba(255,255,255,0.12)' : 'none',
      }}
    >
      {children}
    </div>
  );
}

/* ─── Maps rank ─── */
function MapsRankVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  const rows = [
    { r: '#1', name: 'Il tuo ristorante', sub: 'La Valletta · Aperto', hi: true },
    { r: '#2', name: 'Concorrente A', sub: "St. Julian's · 4.2 ★", hi: false },
    { r: '#3', name: 'Concorrente B', sub: 'Sliema · 4.0 ★', hi: false },
  ];
  return (
    <Sheet>
      <div style={{ padding: '10px 14px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <span style={{ fontSize: 12, color: '#aaa' }}>ristoranti vicino a me — Malta</span>
      </div>
      {rows.map((row, i) => (
        <m.div
          key={row.r}
          initial={{ opacity: 0, x: -12 }}
          animate={playing && !reduce ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ delay: i * 0.35, duration: 0.45 }}
          style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', borderBottom: i < 2 ? `1px solid ${BORDER}` : 'none', background: row.hi ? '#f0fdf4' : WHITE }}
        >
          <div style={{ width: 26, height: 26, borderRadius: 7, background: row.hi ? GREEN : '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: row.hi ? '#fff' : '#999' }}>{row.r}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: row.hi ? 700 : 500, color: row.hi ? DARK : '#777' }}>{row.name}</div>
            <div style={{ fontSize: 11, color: '#bbb', marginTop: 1 }}>{row.sub}</div>
          </div>
          {row.hi && (
            <m.svg initial={{ scale: 0 }} animate={playing ? { scale: 1 } : {}} transition={{ delay: 1.1, type: 'spring' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></m.svg>
          )}
        </m.div>
      ))}
    </Sheet>
  );
}

/* ─── Direct order ─── */
function DirectOrderVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  const items = [['Braġjoli ×2', '€28.00', false], ['Lampuki Pie', '€16.50', false], ["Ta' Arġentina", '€29.95', true]] as const;
  return (
    <Sheet>
      <div style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 22, height: 22, borderRadius: 6, background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ color: '#fff', fontSize: 8, fontWeight: 900 }}>H3</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: DARK }}>Ordine diretto — Tavolo 7</span>
      </div>
      {items.map(([item, price, sel], i) => (
        <m.div
          key={item}
          initial={{ opacity: 0, y: 8 }}
          animate={playing && !reduce ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 + i * 0.25 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: `1px solid ${BORDER}` }}
        >
          <div style={{ width: 34, height: 34, borderRadius: 8, background: sel ? '#dcfce7' : '#f3f4f6', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: DARK }}>{item}</div>
            <div style={{ fontSize: 11, color: '#aaa' }}>{price}</div>
          </div>
          {sel ? (
            <m.div animate={playing ? { scale: [1, 1.15, 1] } : {}} transition={{ delay: 1.2, duration: 0.4 }} style={{ width: 26, height: 26, borderRadius: 13, background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </m.div>
          ) : (
            <div style={{ width: 26, height: 26, borderRadius: 13, border: `1px solid ${BORDER}` }} />
          )}
        </m.div>
      ))}
      <m.div
        initial={{ opacity: 0 }}
        animate={playing && !reduce ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 14px 14px', padding: '10px 12px', background: DARK, borderRadius: 10 }}
      >
        <span style={{ fontSize: 12, color: '#fff' }}>€0 commissioni · Tieni tutto</span>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#4ade80' }}>€74.45</span>
      </m.div>
    </Sheet>
  );
}

/* ─── WhatsApp flow ─── */
function WhatsappFlowVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  const w = (o: number) => `rgba(255,255,255,${o})`;
  const steps = ['Inviato: benvenuto + offerta speciale', 'Inviato: piatti consigliati', 'Inviato: offerta speciale del weekend'];
  return (
    <div style={{ width: '100%', maxWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
      <m.div initial={{ opacity: 0, y: -8 }} animate={playing && !reduce ? { opacity: 1, y: 0 } : {}} style={{ background: w(0.92), borderRadius: 99, padding: '9px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: 'linear-gradient(135deg,#f97316,#ec4899)', flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 10, color: '#888' }}>Nuova cliente</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: DARK }}>Maria Borg</div>
        </div>
      </m.div>
      {steps.map((s, i) => (
        <m.div
          key={s}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={playing && !reduce ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 + i * 0.55 }}
          style={{ background: w(0.13), border: `1px solid ${w(0.35)}`, borderRadius: 99, padding: '8px 16px', fontSize: 12, color: '#fff', textAlign: 'center', width: '100%' }}
        >
          {s}
        </m.div>
      ))}
      <m.div initial={{ opacity: 0 }} animate={playing && !reduce ? { opacity: 1 } : {}} transition={{ delay: 2.2 }} style={{ fontSize: 12, color: '#fff', fontWeight: 700, marginTop: 4 }}>
        Maria diventa cliente fissa ✓
      </m.div>
    </div>
  );
}

/* ─── Loyalty stamps ─── */
function LoyaltyStampsVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  const w = (o: number) => `rgba(255,255,255,${o})`;
  const pct = playing && !reduce ? 68 : 68;
  return (
    <Sheet dark>
      <div style={{ padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#f97316,#ef4444)', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Il tuo ristorante</div>
            <div style={{ fontSize: 11, color: w(0.4) }}>6 timbri su 8</div>
          </div>
        </div>
        <m.div
          key={playing ? 'on' : 'off'}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ background: w(0.06), borderRadius: 12, padding: 14, marginBottom: 12, textAlign: 'center' }}
        >
          <div style={{ fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1 }}>6</div>
          <div style={{ fontSize: 11, color: w(0.4), marginTop: 3 }}>timbri raccolti</div>
        </m.div>
        <div style={{ height: 6, background: w(0.10), borderRadius: 3, overflow: 'hidden' }}>
          <m.div
            initial={{ width: '0%' }}
            animate={playing && !reduce ? { width: `${pct}%` } : { width: `${pct}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ height: '100%', background: 'linear-gradient(90deg,#f97316,#fbbf24)', borderRadius: 3 }}
          />
        </div>
        <div style={{ fontSize: 11, color: w(0.45), textAlign: 'center', marginTop: 10 }}>Ancora 2 visite → pasto gratis</div>
      </div>
    </Sheet>
  );
}

/* ─── Reviews stars ─── */
function ReviewsStarsVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  return (
    <Sheet>
      <div style={{ padding: 16, textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>Richiesta di recensione Google inviata</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 12 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <m.span
              key={n}
              initial={{ opacity: 0, scale: 0 }}
              animate={playing && !reduce ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 1 }}
              transition={{ delay: 0.3 + n * 0.15, type: 'spring' }}
              style={{ fontSize: 22, color: '#eab308' }}
            >
              ★
            </m.span>
          ))}
        </div>
        <m.div initial={{ opacity: 0 }} animate={playing && !reduce ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} style={{ fontSize: 28, fontWeight: 800, color: DARK }}>
          Recensioni
        </m.div>
        <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>Risposte con il tuo tono</div>
      </div>
    </Sheet>
  );
}

/* ─── Generic step flow (fallback + several products) ─── */
function StepFlowVisual({ playing, steps, icon }: { playing: boolean; steps: ReadonlyArray<readonly string[]>; icon?: string }) {
  const reduce = useReducedMotion();
  return (
    <Sheet>
      <div style={{ padding: '10px 12px' }}>
        {icon && <div style={{ fontSize: 10, fontWeight: 700, color: GREEN, marginBottom: 8, letterSpacing: '0.04em' }}>{icon}</div>}
        {steps.map(([label, detail], i) => (
          <m.div
            key={label}
            initial={{ opacity: 0, x: -10 }}
            animate={playing && !reduce ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 + i * 0.4 }}
            style={{ display: 'flex', gap: 8, padding: '7px 0', borderBottom: i < steps.length - 1 ? `1px solid ${BORDER}` : 'none' }}
          >
            <div style={{ width: 20, height: 20, borderRadius: 10, background: i === steps.length - 1 ? GREEN : '#f3f4f6', color: i === steps.length - 1 ? '#fff' : '#999', fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {i + 1}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: DARK, lineHeight: 1.25 }}>{label}</div>
              <div style={{ fontSize: 10, color: '#999', marginTop: 1, lineHeight: 1.3 }}>{detail}</div>
            </div>
          </m.div>
        ))}
      </div>
    </Sheet>
  );
}

/* ─── Counter / chart mini ─── */
function CounterVisual({ playing, label, from, to, suffix }: { playing: boolean; label: string; from: number; to: number; suffix?: string }) {
  const reduce = useReducedMotion();
  return (
    <Sheet>
      <div style={{ padding: 20, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#888', marginBottom: 8 }}>{label}</div>
        <m.div
          key={playing ? `c-${to}` : 'c-off'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <m.span
            initial={{ opacity: 0 }}
            animate={playing && !reduce ? { opacity: 1 } : {}}
            style={{ fontSize: 36, fontWeight: 800, color: DARK, letterSpacing: '-0.03em' }}
          >
            {playing && !reduce ? to : from}{suffix}
          </m.span>
        </m.div>
        <div style={{ marginTop: 12, height: 6, background: '#f0f0f0', borderRadius: 3, overflow: 'hidden' }}>
          <m.div
            initial={{ width: '20%' }}
            animate={playing && !reduce ? { width: '78%' } : { width: '20%' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{ height: '100%', background: `linear-gradient(90deg,${GREEN},#4ade80)`, borderRadius: 3 }}
          />
        </div>
      </div>
    </Sheet>
  );
}

const VISUAL_MAP: Record<ProductVisualId, (p: VisualProps) => React.ReactNode> = {
  'google-visibility': (p) => (
    <StepFlowVisual
      playing={p.playing}
      steps={[
        ['La scheda resta attiva', 'Post · foto · risposte'],
        ['Sali nelle ricerche', '«migliore pizza Malta» → top 3'],
        ['Arrivano le chiamate', '847 ricerche → 37 chiamate'],
      ]}
    />
  ),
  'voice-ai': (p) => <VoiceHubCardVisual playing={p.playing} />,
  'venue-360': (p) => (
    <StepFlowVisual
      playing={p.playing}
      steps={[
        ['Menu digitale', 'Inquadrano, sfogliano, ordinano dal telefono'],
        ['Cucina', 'Gli ordini arrivano sullo schermo, anche offline'],
        ['Titolare', 'Vendite, tavoli e report in tempo reale'],
      ]}
    />
  ),
  'maps-rank': (p) => <MapsRankVisual {...p} />,
  'seo-climb': (p) => <CounterVisual playing={p.playing} label="Posizione su Google" from={8} to={2} suffix="" />,
  'reviews-stars': (p) => <ReviewsStarsVisual {...p} />,
  'website-phone': (p) => <StepFlowVisual playing={p.playing} steps={[['Menu online', 'Foto + orari su mobile'], ['Google lo indicizza', 'Compare nelle ricerche'], ['Il cliente prenota', 'Arriva stasera']] as const} />,
  'booking-calendar': (p) => <StepFlowVisual playing={p.playing} steps={[["Il cliente sceglie l'ora", '19:30 · tavolo per 4'], ["L'orario si blocca", 'Niente doppie prenotazioni'], ['Tu vedi la lista', '4 coperti confermati']] as const} />,
  'direct-order': (p) => <DirectOrderVisual {...p} />,
  'qr-pay': (p) => <StepFlowVisual playing={p.playing} steps={[['Inquadra il QR del tavolo', 'Conto sul telefono'], ['Paga in 10 secondi', 'Senza aspettare il cameriere'], ['Margine pieno', '€0 di commissioni alla piattaforma']]} />,
  'loyalty-stamps': (p) => <LoyaltyStampsVisual {...p} />,
  'wallet-pass': (p) => <StepFlowVisual playing={p.playing} steps={[['Prima visita', 'Il pass si salva nel wallet'], ['Ogni ordine', 'Punti accreditati in automatico'], ['Il cliente torna', 'Nessuna app da scaricare']]} />,
  'whatsapp-flow': (p) => <WhatsappFlowVisual {...p} />,
  'sms-return': (p) => <StepFlowVisual playing={p.playing} steps={[['Il cliente sparisce', '45 giorni senza visite'], ["TEXT invia l'offerta", '94% di aperture'], ['Prenota', 'Tavolo occupato']]} />,
  'event-rsvp': (p) => <CounterVisual playing={p.playing} label="Conferme musica dal vivo di venerdì" from={12} to={48} suffix="" />,
  'daily-revenue': (p) => <CounterVisual playing={p.playing} label="Incasso di oggi" from={0} to={1200} suffix="€" />,
  'dish-margin': (p) => <StepFlowVisual playing={p.playing} steps={[['Inserisci la ricetta', 'Ingredienti dei braġjoli'], ['Food cost reale', '€4.20 a piatto'], ['Margine in chiaro', '62%, non il 70% che pensavi']]} />,
  'stock-alert': (p) => <StepFlowVisual playing={p.playing} steps={[['Controllo a chiusura', '3 domande · 30 sec'], ['Mozzarella in esaurimento', 'Ordina entro martedì'], ['Mai più «finito»', 'Il più venduto resta in menu']]} />,
  'staff-roster': (p) => <StepFlowVisual playing={p.playing} steps={[['Imposta domani', '4 persone · WhatsApp'], ['Confermano', 'Sì / No con 1 tocco'], ['Malattia', 'Sostituto in pochi minuti']]} />,
  'floor-map': (p) => <StepFlowVisual playing={p.playing} steps={[['Mappa dei tavoli', '15 tavoli in tempo reale'], ['T7 diventa rosso', 'Occupato da 48 min'], ['Fai accomodare', 'Prossimo libero: T3']]} />,
  'social-feed': (p) => <StepFlowVisual playing={p.playing} steps={[['Video + foto', 'Giriamo e montiamo noi'], ['Post social', 'Instagram e Facebook'], ['Annunci a pagamento', 'Più clienti prenotano un tavolo']]} />,
  'decision-hub': (p) => <StepFlowVisual playing={p.playing} steps={[['Tutti i segnali', 'Ordini · recensioni · scorte'], ['ARC li legge', 'Una sola dashboard'], ['Tu decidi', 'Cosa sistemare per primo']]} />,
  'local-search': (p) => <MapsRankVisual {...p} />,
};

export default function ProductCardVisual({ visual, playing, dark, mobile = false }: { visual: ProductVisualId; playing: boolean; dark?: boolean; mobile?: boolean }) {
  const Comp = VISUAL_MAP[visual];
  const layout = getCardLayout(visual, mobile);
  return (
    <div
      style={{
        height: layout.visualH,
        display: 'flex',
        alignItems: layout.tier === 'compact' ? 'flex-start' : 'center',
        justifyContent: 'center',
        padding: layout.visualPad,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {Comp({ playing, dark })}
    </div>
  );
}
