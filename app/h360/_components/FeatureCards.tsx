'use client';

import { useState, useEffect, useRef } from 'react';
import { PRODUCT_CARDS } from './product-cards/productCardsData';
import ProductCardShell from './product-cards/ProductCardShell';

const WHITE = '#ffffff';
const DARK = '#111111';
const MUTED = '#777777';
const BORDER = '#e5e7eb';
const FONT = '"Inter",system-ui,-apple-system,Arial,sans-serif';
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
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const scrollTo = (idx: number) => {
    const el = scrollRef.current?.children[idx] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setActive(idx);
  };

  useEffect(() => {
    if (!isMobile) return;
    const container = scrollRef.current;
    if (!container) return;
    const obs = Array.from(container.children).map((card, i) => {
      const ob = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) setActive(i);
        },
        { root: container, threshold: 0.5 },
      );
      ob.observe(card as Element);
      return ob;
    });
    return () => obs.forEach((ob) => ob.disconnect());
  }, [isMobile]);

  const handleTab = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(i);
  };

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
        <h2 style={{ fontSize: isMobile ? 27 : 36, fontWeight: 800, color: DARK, letterSpacing: '-0.035em', lineHeight: 1.1, margin: 0 }}>
          Restaurant marketing Malta — 20 tools.
          <br />
          One platform. Every margin kept.
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 16, color: MUTED, marginTop: 12, maxWidth: 560, lineHeight: 1.55 }}>
          Swipe the full H360 stack — from Google visibility to direct orders, loyalty, and operations. Built by{' '}
          <a href="https://oarcdigital.com" style={{ color: DARK, fontWeight: 600 }}>OARC Digital</a> for Malta restaurants.
        </p>
      </div>

      {/* Tab row — scrollable for 20 */}
      <div
        className="fc-scroll"
        style={{
          display: 'flex',
          padding: isMobile ? '0 20px' : '0 64px',
          borderBottom: `1px solid ${BORDER}`,
          marginBottom: isMobile ? 20 : 36,
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {PRODUCT_CARDS.map((card, i) => (
          <button
            key={card.id}
            onClick={() => (isMobile ? scrollTo(i) : handleTab(i))}
            style={{
              padding: '12px 0',
              marginRight: isMobile ? 18 : 24,
              fontSize: isMobile ? 12 : 13,
              fontWeight: active === i ? 700 : 400,
              color: active === i ? DARK : MUTED,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: FONT,
              whiteSpace: 'nowrap',
              borderBottom: active === i ? `2px solid ${DARK}` : '2px solid transparent',
              position: 'relative',
              flexShrink: 0,
              transition: 'color 0.2s, border-color 0.2s',
            }}
            data-testid={`tab-feature-${i}`}
          >
            {card.tab}
            {!isMobile && active === i && (
              <div style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 2, background: '#e5e7eb', borderRadius: 1, overflow: 'hidden' }}>
                <div key={progKey} className="fc-prog" />
              </div>
            )}
          </button>
        ))}
      </div>

      {isMobile ? (
        <>
          <div
            ref={scrollRef}
            className="fc-scroll"
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
            <div style={{ flexShrink: 0, width: 4 }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 20, paddingBottom: 24 }}>
            <span style={{ fontSize: 12, color: MUTED, marginRight: 4 }}>
              {active + 1} / {COUNT}
            </span>
            <button onClick={() => scrollTo(Math.max(0, active - 1))} disabled={active === 0} style={arrowSt(active === 0)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button onClick={() => scrollTo(Math.min(COUNT - 1, active + 1))} disabled={active === COUNT - 1} style={arrowSt(active === COUNT - 1)}>
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
