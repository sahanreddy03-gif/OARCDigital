/**
 * Department pages (/services/growth, …). The page body is the owner's own
 * department content from components/DepartmentDetailModal.tsx (one source for
 * the pop-up and the page). This file holds only the search layer around it.
 */

export type DeptSeo = {
  /** Key in DepartmentDetailModal's content map, e.g. "Growth". */
  dept: string;
  path: string;
  title: string;
  description: string;
  /** Plain search phrase for the breadcrumb and summary, e.g. "Growth marketing". */
  keyword: string;
  /** Answer-first entity sentence (what AI assistants quote). */
  answer: string;
  bestFor: string;
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
  updated: string;
  /**
   * Plain-words top of the page: the search phrase, the promise, what we do, what you get.
   * Growth has its own full page body, so it has no intro.
   */
  intro?: { lead: string; punch: string; promise: string; weDo: string[]; youGet: string[] };
  /** The free check: one clear, low-risk reason to contact us, with its contents spelled out. */
  offer: { name: string; line: string; checks: string[] };
  /** Optional 30-second self-check (yes/no per step). The first "no" is the leak. */
  leak?: { question: string; step: string; fix: string }[];
};

/** The trust claims the owner confirmed (2026-11-10). One source, every page. */
export const TRUST = [
  { big: "Award-winning", small: "Best Marketing Agency & Best Growth Marketing Agency, Dubai and Europe" },
  { big: "5.0 ★", small: "Rated on Google" },
  { big: "20+", small: "Brands trust us, from BrewDog to Kreta" },
  { big: "Certified", small: "Certified talent in ads, content and AI" },
  { big: "AI-native", small: "Malta's first AI-native marketing agency" },
] as const;

export const LOGOS = [
  { name: "Kreta", src: "/brand-logos/recreated/kreta.svg" },
  { name: "BrewDog", src: "/brand-logos/normalized/brewdog.png" },
  { name: "32Red", src: "/brand-logos/normalized/32red.png" },
  { name: "The Alchemist", src: "/brand-logos/recreated/alchemist.svg" },
  { name: "Palino", src: "/brand-logos/normalized/palino.png" },
] as const;
