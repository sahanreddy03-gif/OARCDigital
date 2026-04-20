"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from "next/link";
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
      <div className="flex items-center gap-4 px-5 py-3.5 rounded-md bg-black/35 backdrop-blur-xl border border-white/[0.04]">
        <p className="text-[13px] text-white/40 leading-relaxed flex-1">
          We use cookies to improve your experience.{' '}
          <Link
            href="/cookie-policy"
            className="text-white/55 underline underline-offset-2 decoration-white/15"
            data-testid="link-cookie-policy"
          >
            Learn more
          </Link>
        </p>
        <Button
          onClick={accept}
          variant="outline"
          size="sm"
          className="flex-shrink-0 text-[13px] backdrop-blur-sm bg-white/10 border-white/10"
          data-testid="button-cookie-accept"
        >
          Got it
        </Button>
      </div>
    </div>
  );
}