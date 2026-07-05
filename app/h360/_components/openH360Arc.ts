import { scrollToAnchor } from '@/lib/scrollToPageTop';

/** Open ARC from H360 with value-first restaurant audit framing. */
export function openH360Arc(restaurantName?: string) {
  if (typeof window === 'undefined') return;

  const path = window.location.pathname;

  /** On H360: scroll to audit CTA — never full-screen ARC overlay (feels like random page from bottom). */
  if (path.startsWith('/h360')) {
    const local =
      document.getElementById('h360-audit') ??
      document.getElementById('h360-try') ??
      document.getElementById('product-faq');
    if (local) {
      local.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.location.href = '/h360#h360-audit';
    return;
  }

  const trimmed = restaurantName?.trim();
  const prompt = trimmed
    ? `My restaurant is "${trimmed}" in Malta. Give me a quick honest audit — what's likely broken on Google Maps, reviews, and margin (Wolt/Bolt vs direct orders)? Diagnosis first, no sales pitch.`
    : `I run a restaurant in Malta. Give me a quick honest audit — what's likely broken on Google Maps, reviews, and margin? Diagnosis first, not a sales pitch.`;

  window.dispatchEvent(
    new CustomEvent('arc:open', {
      detail: { prompt, contextMode: 'h360' as const },
    }),
  );
}

/** Scroll to in-page audit block (product pages). */
export function scrollToH360Audit(lenis?: import('lenis').default | null) {
  scrollToAnchor('h360-audit', lenis);
}
