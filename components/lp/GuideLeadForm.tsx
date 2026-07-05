'use client';

import { useState } from 'react';

type Props = {
  leadName: string;
  ctaLabel: string;
};

export default function GuideLeadForm({ leadName, ctaLabel }: Props) {
  const [form, setForm] = useState({ name: '', email: '', company: '', size: '' });
  const [newsletter, setNewsletter] = useState(true);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xblnedyl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          company_size: form.size,
          service: leadName,
          source: 'OARC LP guide',
          page: typeof window !== 'undefined' ? window.location.pathname : '',
          newsletter,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p className="lp-form-success" data-speakable>
        Check your inbox—we sent the guide. If nothing arrives in five minutes, email hello@oarcdigital.com.
      </p>
    );
  }

  return (
    <form className="lp-form" onSubmit={onSubmit}>
      <label className="lp-label">
        Full name
        <input className="lp-input" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </label>
      <label className="lp-label">
        Email
        <input className="lp-input" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </label>
      <label className="lp-label">
        Company name
        <input className="lp-input" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
      </label>
      <label className="lp-label">
        Company size
        <select className="lp-input" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })}>
          <option value="">Select size</option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="200+">200+</option>
        </select>
      </label>
      <label className="lp-check">
        <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} />
        <span>Send OARC insights for Malta operators (optional)</span>
      </label>
      {status === 'error' && <p className="lp-form-error">Something failed—try again or email hello@oarcdigital.com.</p>}
      <button type="submit" className="lp-cta lp-cta-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : ctaLabel}
      </button>
    </form>
  );
}
