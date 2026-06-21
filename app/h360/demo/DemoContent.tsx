'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import H360Nav from '../_components/H360Nav';
import { FONT_LIGHT, G } from '../_components/tokens';

export default function DemoContent() {
  const [m, setM] = useState(false);
  const [form, setForm] = useState({ restaurant: '', name: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fn = () => setM(window.innerWidth < 768);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.restaurant.trim() || !form.name.trim() || !form.email.trim()) {
      setError('Please add your restaurant name, your name, and email.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/xblnedyl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          service: 'H360 — Free ARC AI Restaurant Diagnosis',
          source: 'H360 Demo / Audit',
          page: '/h360/demo',
          timestamp: new Date().toISOString(),
        }),
      });
      if (res.ok) setDone(true);
      else setError('Something went wrong. Try again or email hello@oarcdigital.com.');
    } catch {
      setError('Connection error. Email hello@oarcdigital.com and we will respond today.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: FONT_LIGHT, background: G.bg, color: G.text, minHeight: '100vh' }}>
      <H360Nav />

      <section style={{ padding: m ? '40px 20px 80px' : '72px 40px 120px', maxWidth: 560, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              color: G.textMuted,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 15,
                height: 15,
                borderRadius: 4,
                background: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#fff', fontSize: 7.5, fontWeight: 800 }}>A</span>
            </div>
            Powered by ARC AI · Instant restaurant audit
          </div>
          <h1
            style={{
              fontSize: m ? 'clamp(28px,7vw,38px)' : 'clamp(36px,4vw,48px)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
              margin: '0 0 16px',
            }}
          >
            Get your free ARC AI restaurant diagnosis
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: G.textMuted, margin: 0 }}>
            Tell us your venue. We scan your Google presence, review gaps, and where margin is leaking to delivery apps —
            then reach out with what to fix first. No commitment.
          </p>
        </div>

        {done ? (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 28px',
              borderRadius: 16,
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Request received</h2>
            <p style={{ fontSize: 15, color: G.textMuted, lineHeight: 1.6, marginBottom: 20 }}>
              An H360 specialist will reach out today with your diagnosis outline.
            </p>
            <Link href="/h360" style={{ fontSize: 14, fontWeight: 600, color: G.green, textDecoration: 'none' }}>
              ← Back to H360
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: G.bg,
              border: `1.5px solid ${G.border}`,
              borderRadius: 16,
              padding: m ? '24px 20px' : '32px 28px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            {[
              { key: 'restaurant' as const, label: 'Restaurant name', placeholder: 'e.g. Ta\' Kris, Mdina' },
              { key: 'name' as const, label: 'Your name', placeholder: 'Owner or manager' },
              { key: 'email' as const, label: 'Email', placeholder: 'you@restaurant.com', type: 'email' },
              { key: 'phone' as const, label: 'Phone (optional)', placeholder: '+356 ...', type: 'tel' },
            ].map((field) => (
              <div key={field.key} style={{ marginBottom: 18 }}>
                <label
                  htmlFor={field.key}
                  style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: G.text }}
                >
                  {field.label}
                </label>
                <input
                  id={field.key}
                  type={field.type ?? 'text'}
                  value={form[field.key]}
                  onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                  placeholder={field.placeholder}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: 15,
                    border: `1.5px solid ${G.border}`,
                    borderRadius: 10,
                    outline: 'none',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                  data-testid={`input-demo-${field.key}`}
                />
              </div>
            ))}
            {error && (
              <p style={{ fontSize: 13, color: G.red, marginBottom: 14 }} role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              style={{
                width: '100%',
                padding: '14px 20px',
                background: submitting ? G.textMuted : G.green,
                color: '#f0f9f4',
                border: 'none',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: submitting ? 'wait' : 'pointer',
                fontFamily: 'inherit',
              }}
              data-testid="button-demo-submit"
            >
              {submitting ? 'Sending…' : 'Get my free diagnosis'}
            </button>
            <p style={{ fontSize: 12, color: G.textMuted, textAlign: 'center', marginTop: 14, marginBottom: 0 }}>
              By submitting you agree we may contact you about H360. See our{' '}
              <Link href="/legal/privacy-policy" style={{ color: G.green }}>
                privacy policy
              </Link>
              .
            </p>
          </form>
        )}

        {/* [IMAGE: ARC AI audit report preview on phone — Maps score, review gap, Wolt leak estimate] */}
      </section>
    </div>
  );
}
