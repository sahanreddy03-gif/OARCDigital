/** H360 in italiano: solo ciò che la pagina /it/h360 usa. Il resto resta nel file inglese. */
import { localeHref } from '@/lib/i18n/twins';

export { H360_CARD_EVENT } from '@/app/h360/_components/h360Site';

/** La home del sito in italiano. */
export const OARC_HOME = localeHref('it', '/');

export const JOURNEY_STEPS = [
  { label: 'Fatti trovare', sub: 'Google', cardIndex: 0, glyph: '◎' },
  { label: 'Crea fiducia', sub: 'Recensioni', cardIndex: 1, glyph: '★' },
  { label: 'Fai bella figura', sub: 'Social', cardIndex: 2, glyph: '▶' },
  { label: 'Gestisci la sala', sub: 'Menu e cucina', cardIndex: 4, glyph: '⌁' },
  { label: 'Tieni il margine', sub: 'Ordini diretti', cardIndex: 6, glyph: '€' },
  { label: 'Falli tornare', sub: 'Fedeltà', cardIndex: 8, glyph: '↻' },
] as const;
