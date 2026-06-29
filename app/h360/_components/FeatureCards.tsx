'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { PRODUCT_CARDS } from './product-cards/productCardsData';
import ProductCardShell from './product-cards/ProductCardShell';

import { FONT_DISPLAY } from './tokens';
import { H360_CARD_EVENT } from './h360Site';

const WHITE = '#ffffff';
const DARK = '#111111';
const MUTED = '#777777';
const BORDER = '#e5e7eb';
const GREEN = '#094413';
const ACTIVE_BG = 'rgba(9, 68, 19, 0.07)';
const FONT = FONT_DISPLAY;
const INTERVAL = 5200;
const COUNT = PRODUCT_CARDS.length;

const CSS = `
  @keyframes fc-prog { from{width:0%} to{width:100%} }
  .fc-prog { animation: fc-prog ${INTERVAL}ms linear forwards; height:100%; background:#111; border-radius:1px; }
  .fc-scroll::-webkit-scrollbar { display:none; }
`;

export default function H360FeatureCards() {
  const [active, setActive] = useState(0);
  const [progKey, setProgKey] = useState(0);
  const [isMobile, setMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabScrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const syncingRef = useRef(false);

  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    setProgKey((k) => k + 1);
    timerRef.current = setTimeout(() => setActive((a) => (a + 1) % COUNT), INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, isMobile]);

  const scrollCardTo = useCallback((idx: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[idx] as HTMLElement | undefined;
    if (!card) return;
    syncingRef.current = true;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setActive(idx);
    window.setTimeout(() => {
      syncingRef.current = false;
    }, 400);
  }, []);

  /** Mobile: keep tab row in sync when user swipes cards */
  useEffect(() => {
    if (!isMobile) return;
    const container = scrollRef.current;
    if (!container) return;

    const syncActiveFromScroll = () => {
      if (syncingRef.current) return;
      const cards = Array.from(container.children).slice(0, COUNT) as HTMLElement[];
      if (!cards.length) return;

      const center = container.scrollLeft + container.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;

      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(center - cardCenter);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActive((prev) => (prev === best ? prev : best));
    };

    container.addEventListener('scroll', syncActiveFromScroll, { passive: true });
    syncActiveFromScroll();
    return () => container.removeEventListener('scroll', syncActiveFromScroll);
  }, [isMobile]);

  /** Mobile: scroll active tab into view + highlight follows card swipe */
  useEffect(() => {
    if (!isMobile) return;
    const tabRow = tabScrollRef.current;
    if (!tabRow) return;
    const tab = tabRow.children[active] as HTMLElement | undefined;
    tab?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [active, isMobile]);

  const handleTab = useCallback((i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isMobile) scrollCardTo(i);
    else setActive(i);
  }, [isMobile, scrollCardTo]);

  /** Journey strip in OarcBridge can jump to a card */
  useEffect(() => {
    const onSelect = (e: Event) => {
      const idx = (e as CustomEvent<number>).detail;
      if (typeof idx !== 'number' || idx < 0 || idx >= COUNT) return;
      handleTab(idx);
    };
    window.addEventListener(H360_CARD_EVENT, onSelect);
    return () => window.removeEventListener(H360_CARD_EVENT, onSelect);
  }, [handleTab]);

  const activeCard = PRODUCT_CARDS[active];

  return (
    <section
      id="h360-products"
      style={{
        background: WHITE,
        fontFamily: FONT,
        padding: isMobile ? '12px 0 0' : '72px 0 88px',
        overflow: 'hidden',
        scrollMarginTop: 72,
      }}
    >
      <style>{CSS}</style>

      <div style={{ padding: isMobile ? '0 20px' : '0 64px', marginBottom: 28 }}>
        <h2
          style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 800,
            color: DARK,
            letterSpacing: '-0.04em',
            lineHeight: 1.08,
            margin: 0,
          }}
        >
          Restaurant marketing Malta.
          <br />
          {COUNT} tools. One journey.
        </h2>
      </div>

      {/* Tab row — scrollable product tabs (syncs with card swipe on mobile) */}
      <div
        ref={tabScrollRef}
        className="fc-scroll"
        data-lenis-prevent
        style={{
          display: 'flex',
          padding: isMobile ? '0 16px' : '0 64px',
          borderBottom: `1px solid ${BORDER}`,
          marginBottom: isMobile ? 20 : 36,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          gap: isMobile ? 6 : 0,
        }}
      >
        {PRODUCT_CARDS.map((card, i) => {
          const isActive = active === i;
          return (
            <button
              key={card.id}
              onClick={() => handleTab(i)}
              style={{
                padding: isMobile ? '10px 14px' : '12px 0',
                marginRight: isMobile ? 0 : 24,
                fontSize: isMobile ? 12 : 13,
                fontWeight: isActive ? 700 : 500,
                color: isActive ? DARK : MUTED,
                background: isMobile && isActive ? ACTIVE_BG : 'none',
                border: 'none',
                borderRadius: isMobile ? 8 : 0,
                cursor: 'pointer',
                fontFamily: FONT,
                whiteSpace: 'nowrap',
                borderBottom: !isMobile && isActive ? `2px solid ${DARK}` : !isMobile ? '2px solid transparent' : 'none',
                boxShadow: isMobile && isActive ? 'inset 0 -2px 0 #094413' : 'none',
                position: 'relative',
                flexShrink: 0,
                transition: 'color 0.2s, background 0.2s, box-shadow 0.2s',
              }}
              data-testid={`tab-feature-${i}`}
            >
              {card.tab}
              {!isMobile && isActive && (
                <div style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 2, background: '#e5e7eb', borderRadius: 1, overflow: 'hidden' }}>
                  <div key={progKey} className="fc-prog" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {isMobile ? (
        <>
          <div
            ref={scrollRef}
            className="fc-scroll"
            data-lenis-prevent
            style={{
              display: 'flex',
              gap: 12,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              padding: '0 20px',
            }}
          >
            {PRODUCT_CARDS.map((card, i) => (
              <ProductCardShell key={card.id} data={card} mobile playing={active === i} />
            ))}
            <div style={{ flexShrink: 0, width: 4 }} aria-hidden />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 20, paddingBottom: 24 }}>
            <span style={{ fontSize: 12, color: MUTED, marginRight: 4 }}>
              {active + 1} / {COUNT}
            </span>
            <button onClick={() => scrollCardTo(Math.max(0, active - 1))} disabled={active === 0} style={arrowSt(active === 0)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button onClick={() => scrollCardTo(Math.min(COUNT - 1, active + 1))} disabled={active === COUNT - 1} style={arrowSt(active === COUNT - 1)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </>
      ) : (
        <div style={{ padding: '0 64px', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 48, alignItems: 'start', maxWidth: 1140 }}>
          <div className="fc-scroll" style={{ maxHeight: 540, overflowY: 'auto', scrollbarWidth: 'none' }}>
            {PRODUCT_CARDS.map((card, i) => (
              <button
                key={card.id}
                onClick={() => handleTab(i)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  padding: '14px 0',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  borderBottom: `1px solid ${BORDER}`,
                  width: '100%',
                  textAlign: 'left',
                  fontFamily: FONT,
                }}
              >
                <span style={{ fontSize: 14, fontWeight: active === i ? 700 : 400, color: active === i ? DARK : MUTED, transition: 'color 0.2s' }}>
                  {card.tab}
                </span>
                {active === i && (
                  <div style={{ height: 2, background: '#e5e7eb', borderRadius: 1, overflow: 'hidden', width: '100%' }}>
                    <div key={progKey} className="fc-prog" />
                  </div>
                )}
              </button>
            ))}
          </div>
          <div>
            {activeCard && <ProductCardShell data={activeCard} mobile={false} playing />}
          </div>
        </div>
      )}
    </section>
  );
}

function arrowSt(disabled: boolean): React.CSSProperties {
  return {
    width: 40,
    height: 40,
    borderRadius: 20,
    border: `1.5px solid ${disabled ? '#e5e7eb' : '#ccc'}`,
    background: WHITE,
    cursor: disabled ? 'default' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: disabled ? '#d1d5db' : DARK,
    padding: 0,
  };
}
