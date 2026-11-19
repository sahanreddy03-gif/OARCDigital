/**
 * Italian labels for the industry chips in the homepage diagnostics teaser.
 * Same order, ids and icons as `verticals` in `@/data/diagnosticsData`; only the
 * fields the teaser shows (id, name, icon). The ids are used in the link
 * `/diagnostics?industry=<id>` and must not change.
 */
export const verticals = [
  { id: "restaurant", name: "Ristorante", icon: "🍽️" },
  { id: "clinic", name: "Clinica medica", icon: "🏥" },
  { id: "retail", name: "Negozio", icon: "🛒" },
  { id: "realestate", name: "Immobiliare", icon: "🏠" },
  { id: "igaming", name: "iGaming", icon: "🎰" },
  { id: "legal", name: "Legale", icon: "⚖️" },
  { id: "finance", name: "Finanza", icon: "💼" },
  { id: "marketing", name: "Marketing", icon: "📊" },
] as const;
