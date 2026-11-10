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
