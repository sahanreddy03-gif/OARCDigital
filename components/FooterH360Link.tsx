'use client';

import Link from 'next/link';
import { useLenis } from 'lenis/react';
import { ArrowUpRight } from 'lucide-react';
import { scrollToPageTop } from '@/lib/scrollToPageTop';

export default function FooterH360Link() {
  const lenis = useLenis();

  return (
    <Link
      href="/h360"
      scroll
      onClick={() => scrollToPageTop(lenis)}
      className="group inline-flex items-center gap-1 text-[#4ade80] hover:text-white transition-colors text-sm font-semibold"
      data-testid="link-footer-h360"
    >
      <span>H360 — Restaurants</span>
      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  );
}
