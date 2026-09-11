/**
 * Curated discovery edges for money hubs + Malta hub (brief items 7–8).
 * Source: Sahan ranked CSV malta-priority-1000 location aggregation (best overall_rank).
 * Keep lists short — not thousands of links — so crawl equity concentrates.
 */

export type HubDiscoveryLink = {
  href: string;
  label: string;
};

/** Top Malta locality hubs by CSV priority (not deep industry/service URLs). */
export const MALTA_PRIORITY_LOCATION_LINKS: readonly HubDiscoveryLink[] = [
  { href: "/malta/valletta", label: "Valletta" },
  { href: "/malta/sliema", label: "Sliema" },
  { href: "/malta/st-julians", label: "St Julian's" },
  { href: "/malta/mosta", label: "Mosta" },
  { href: "/malta/birkirkara", label: "Birkirkara" },
  { href: "/malta/qormi", label: "Qormi" },
  { href: "/malta/hamrun", label: "Ħamrun" },
  { href: "/malta/naxxar", label: "Naxxar" },
  { href: "/malta/zabbar", label: "Żabbar" },
  { href: "/malta/attard", label: "Attard" },
] as const;

/** Money + agent hubs that should cross-link for ≤3–4 click discovery. */
export const MONEY_AGENT_HUB_LINKS: readonly HubDiscoveryLink[] = [
  { href: "/ai-agents", label: "AI agents" },
  { href: "/agent-economy", label: "Agent economy" },
  { href: "/services/ai-staff", label: "AI staff" },
  { href: "/services/automation", label: "Automation" },
  { href: "/solutions", label: "Solutions" },
  { href: "/creative", label: "Creative" },
  { href: "/services/seo-services", label: "SEO services" },
  { href: "/malta", label: "Malta hubs" },
] as const;

/** Slugs used when building ItemList schema for priority localities. */
export const MALTA_PRIORITY_LOCATION_SLUGS: readonly string[] =
  MALTA_PRIORITY_LOCATION_LINKS.map((l) => l.href.replace("/malta/", ""));