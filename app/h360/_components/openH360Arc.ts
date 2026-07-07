import { scrollToAnchor } from '@/lib/scrollToPageTop';

function auditPrompt(restaurantName?: string): string {
  const trimmed = restaurantName?.trim();
  return trimmed
    ? `My restaurant is "${trimmed}" in Malta. Give me a quick honest audit — what's likely broken on Google Maps, reviews, and margin (Wolt/Bolt vs direct orders)? Diagnosis first, no sales pitch.`
    : `I run a restaurant in Malta. Give me a quick honest audit — what's likely broken on Google Maps, reviews, and margin? Diagnosis first, not a sales pitch.`;
}

function scrollToAuditForm(): void {
  const section = document.getElementById('h360-audit');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      section.querySelector<HTMLInputElement>('input[type="text"]')?.focus();
    }, 400);
    return;
  }
  window.location.href = '/h360#h360-audit';
}

/** Open ARC from H360 with value-first restaurant audit framing. */
export function openH360Arc(restaurantName?: string) {
  if (typeof window === 'undefined') return;

  const trimmed = restaurantName?.trim();
  const onH360 = window.location.pathname.startsWith('/h360');

  /** No name yet — scroll to the real audit block (bottom of hub), don't no-op at hero. */
  if (!trimmed) {
    if (onH360) {
      scrollToAuditForm();
      return;
    }
    window.location.href = '/h360#h360-audit';
    return;
  }

  window.dispatchEvent(
    new CustomEvent('arc:open', {
      detail: {
        prompt: auditPrompt(trimmed),
        contextMode: 'h360' as const,
        openChat: true,
      },
    }),
  );
}

/** Scroll to in-page audit block (product pages). */
export function scrollToH360Audit(lenis?: import('lenis').default | null) {
  scrollToAnchor('h360-audit', lenis);
}
