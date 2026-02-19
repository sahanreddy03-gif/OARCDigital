import { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'oarc-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  }, []);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') accept();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [visible, accept]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999] animate-in slide-in-from-bottom-4 fade-in duration-700"
      role="status"
      aria-label="Cookie consent"
      data-testid="cookie-consent-banner"
    >
      <div className="flex items-center gap-4 px-5 py-3.5 rounded-md border" style={{ background: 'rgba(10, 10, 12, 0.95)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
        <p className="text-[13px] leading-relaxed flex-1" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          We use cookies to improve your experience.{' '}
          <Link
            href="/cookie-policy"
            className="underline underline-offset-2"
            style={{ color: 'rgba(255, 255, 255, 0.85)', textDecorationColor: 'rgba(255, 255, 255, 0.3)' }}
            data-testid="link-cookie-policy"
          >
            Learn more
          </Link>
        </p>
        <Button
          onClick={accept}
          size="sm"
          className="flex-shrink-0 text-[13px] font-semibold text-white"
          style={{ background: '#ff914d', borderColor: '#e07a3a', color: 'white' }}
          data-testid="button-cookie-accept"
        >
          Got it
        </Button>
      </div>
    </div>
  );
}