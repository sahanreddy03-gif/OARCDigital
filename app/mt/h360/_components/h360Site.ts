/** H360 bil-Malti: biss dak li tuża l-paġna /mt/h360. Il-bqija jibqa' fil-fajl bl-Ingliż. */
import { localeHref } from '@/lib/i18n/twins';

export { H360_CARD_EVENT } from '@/app/h360/_components/h360Site';

/** Il-paġna ewlenija tas-sit bil-Malti. */
export const OARC_HOME = localeHref('mt', '/');

export const JOURNEY_STEPS = [
  { label: 'Isibuk', sub: 'Google', cardIndex: 0, glyph: '◎' },
  { label: 'Ibni l-fiduċja', sub: 'Reviews', cardIndex: 1, glyph: '★' },
  { label: 'Idher professjonali', sub: 'Social media', cardIndex: 2, glyph: '▶' },
  { label: 'Mexxi s-sala', sub: 'Menu u kċina', cardIndex: 4, glyph: '⌁' },
  { label: 'Żomm il-marġni', sub: 'Ordnijiet diretti', cardIndex: 6, glyph: '€' },
  { label: 'Ġibhom lura', sub: 'Lealtà', cardIndex: 8, glyph: '↻' },
] as const;
