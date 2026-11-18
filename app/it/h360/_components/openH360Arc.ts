import { localeHref } from '@/lib/i18n/twins';

const H360_PATH = localeHref('it', '/h360');
const H360_AUDIT = `${H360_PATH}#h360-audit`;

function auditPrompt(restaurantName?: string): string {
  const trimmed = restaurantName?.trim();
  return trimmed
    ? `Il mio ristorante si chiama "${trimmed}" ed è a Malta. Fammi un audit rapido e onesto: cosa probabilmente non funziona su Google Maps, nelle recensioni e nei margini (Wolt/Bolt rispetto agli ordini diretti)? Prima la diagnosi, niente discorso di vendita.`
    : `Gestisco un ristorante a Malta. Fammi un audit rapido e onesto: cosa probabilmente non funziona su Google Maps, nelle recensioni e nei margini? Prima la diagnosi, non un discorso di vendita.`;
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
  window.location.href = H360_AUDIT;
}

/** Open ARC from H360 with value-first restaurant audit framing. */
export function openH360Arc(restaurantName?: string) {
  if (typeof window === 'undefined') return;

  const trimmed = restaurantName?.trim();
  const onH360 = window.location.pathname.startsWith(H360_PATH);

  /** No name yet — scroll to the real audit block (bottom of hub), don't no-op at hero. */
  if (!trimmed) {
    if (onH360) {
      scrollToAuditForm();
      return;
    }
    window.location.href = H360_AUDIT;
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
