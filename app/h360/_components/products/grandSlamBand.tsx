'use client';

import { m } from 'framer-motion';
import { G, FONT_DISPLAY } from '../tokens';
import type { StandaloneProductConfig } from './standaloneProductTypes';

function monthLabel(week: number): string {
  if (week <= 4) return 'Month 1';
  if (week <= 8) return 'Month 2';
  return 'Month 3';
}

/** Human craft + ARC automation + results timeline — packaged as one offer */
export default function GrandSlamBand({ config, accent }: { config: StandaloneProductConfig; accent: string }) {
  const humanItems = config.stack.items.filter((s) => /copy|article|photo|edit|reply/i.test(s.label + s.short)).slice(0, 4);
  const human = humanItems.length >= 2 ? humanItems : config.stack.items.slice(0, 3);
  const automation = config.flow.nodes;
  const milestones = config.progress.weeks;

  return (
    <section style={{ background: G.green, color: '#f0f9f4', padding: '64px 24px 72px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: G.greenLt, marginBottom: 10 }}>THE FULL PACKAGE</p>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.04em', margin: '0 0 36px', maxWidth: 720, lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>
          Traditional craft. Smart automation. Results you can read in month one.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          <m.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 18, padding: 22, border: '1px solid rgba(255,255,255,0.12)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: G.greenLt, marginBottom: 14 }}>HUMAN · CREATIVE</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {human.map((s) => (
                <li key={s.id} style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>
                  <span style={{ color: accent === G.green ? G.greenLt : accent, marginRight: 8 }}>✓</span>
                  {s.label} — {s.short}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 18, padding: 22, border: '1px solid rgba(255,255,255,0.12)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: G.greenLt, marginBottom: 14 }}>ARC · WEEKLY MOTION</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {automation.map((n, i) => (
                <li key={n.id} style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>
                  <span style={{ color: G.greenLt, marginRight: 8, fontWeight: 800 }}>0{i + 1}</span>
                  {n.label} — {n.detail}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }} style={{ background: '#fff', borderRadius: 18, padding: 22, color: G.text }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: G.green, marginBottom: 14 }}>RESULTS · MALTA OPERATORS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {milestones.map((wk) => (
                <div key={wk.week} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, padding: '6px 10px', borderRadius: 8, background: G.greenLt, fontSize: 11, fontWeight: 800, color: G.green }}>
                    {monthLabel(wk.week)}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: G.text }}>{wk.label}</div>
                    {wk.highlight && <div style={{ fontSize: 13, fontWeight: 700, color: G.green, marginTop: 4 }}>{wk.highlight}</div>}
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
