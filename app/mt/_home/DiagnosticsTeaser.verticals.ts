/**
 * Maltese labels for the industry chips in the homepage diagnostics teaser.
 * Same order and same ids as `verticals` in `@/data/diagnosticsData`; only the
 * fields the teaser shows (id, name, icon) are kept.
 */
export interface TeaserVertical {
  id: string;
  name: string;
  icon: string;
}

export const verticals: TeaserVertical[] = [
  { id: "restaurant", name: "Ristorant", icon: "🍽️" },
  { id: "clinic", name: "Klinika medika", icon: "🏥" },
  { id: "retail", name: "Bejgħ bl-imnut", icon: "🛒" },
  { id: "realestate", name: "Proprjetà", icon: "🏠" },
  { id: "igaming", name: "iGaming", icon: "🎰" },
  { id: "legal", name: "Legali", icon: "⚖️" },
  { id: "finance", name: "Finanzi", icon: "💼" },
  { id: "marketing", name: "Marketing", icon: "📊" },
];
