import { localeHref } from '@/lib/i18n/twins';

const H360_PATH = localeHref('mt', '/h360');
const H360_AUDIT = `${H360_PATH}#h360-audit`;

function auditPrompt(restaurantName?: string): string {
  const trimmed = restaurantName?.trim();
  return trimmed
    ? `Ir-ristorant tiegħi jismu "${trimmed}" u qiegħed f'Malta. Agħtini awditu qasir u onest — x'aktarx mhux qed jaħdem fuq Google Maps, fir-reviews u fil-marġni (Wolt/Bolt kontra ordnijiet diretti)? L-ewwel id-dijanjosi, bla diskors ta' bejgħ.`
    : `Immexxi ristorant f'Malta. Agħtini awditu qasir u onest — x'aktarx mhux qed jaħdem fuq Google Maps, fir-reviews u fil-marġni? L-ewwel id-dijanjosi, mhux diskors ta' bejgħ.`;
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
