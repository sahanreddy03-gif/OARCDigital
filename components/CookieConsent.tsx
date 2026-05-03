"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from "next/link";
import { X } from 'lucide-react';
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
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[2147483600] animate-in slide-in-from-bottom-4 fade-in duration-500"
      role="dialog"
      aria-label="Cookie consent"
      data-testid="cookie-consent-banner"
    >
      <div className="flex items-start gap-3 px-4 py-4 rounded-md bg-neutral-900 border border-neutral-700 shadow-2xl">
        <p className="text-sm text-white leading-relaxed flex-1">
          We use cookies to improve your experience.{' '}
          <Link
            href="/cookie-policy"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
            data-testid="link-cookie-policy"
          >
            Learn more
          </Link>
        </p>
        <Button
          onClick={accept}
          size="sm"
          className="flex-shrink-0 bg-orange-600 hover:bg-orange-700 text-white border-0"
          data-testid="button-cookie-accept"
        >
          Got it
        </Button>
        <Button
          onClick={accept}
          size="icon"
          variant="ghost"
          className="flex-shrink-0 text-white/70 hover:text-white -mr-1 -mt-1"
          aria-label="Dismiss cookie notice"
          data-testid="button-cookie-close"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}