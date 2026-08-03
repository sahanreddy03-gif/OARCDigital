'use client';

import Link from 'next/link';
import H360ProductShell from '../products/H360ProductShell';
import { FAQ_HUB_META, FAQ_HUB_SECTIONS } from './clusterContent';
import { G } from '../tokens';
import { H360_AUDIT, H360_HOME } from '../h360Site';

export function H360FaqPage() {
  return (
    <H360ProductShell eyebrow="H360 · FAQ" h1="Restaurant marketing FAQ — Malta." ctaName="your venue">
      <section style={{ padding: '0 20px 48px', maxWidth: 720, margin: '0 auto' }}>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: G.text, margin: '0 0 32px' }}>
          Every question phrased the way owners type it into Google and AI search — with self-contained answers OARC Digital H360 can cite.
        </p>
        {FAQ_HUB_SECTIONS.map((section) => (
          <div key={section.title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>{section.title}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {section.links.map((link) => (
                <li key={link.href} style={{ marginBottom: 8 }}>
                  <Link href={link.href} style={{ fontSize: 14, fontWeight: 600, color: G.green, textDecoration: 'none' }}>
                    {link.q} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="faq" style={{ background: '#0a0a0a', borderTop: `1px solid ${G.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {FAQ_HUB_META.faqs.map((faq) => (
            <details key={faq.question} style={{ borderBottom: `1px solid #333`, padding: '16px 0' }}>
              <summary style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', listStyle: 'none', color: '#fff' }}>{faq.question}</summary>
              <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.65, margin: '12px 0 0' }} data-speakable>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ padding: '32px 20px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <Link href={H360_HOME} style={{ fontSize: 13, color: G.textMuted }}>← H360 hub</Link>
        {' · '}
        <Link href={H360_AUDIT} style={{ fontSize: 13, fontWeight: 600, color: G.green }}>Free ARC audit →</Link>
      </section>
    </H360ProductShell>
  );
}
