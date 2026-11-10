/** Shared shape for the 15 department pages (/services/growth, …). */

export const INK = "#0E0E0E";
export const PAPER = "#F5F3EE";
export const YELLOW = "#F9FF84";
export const COBALT = "#0035AD";
export const RED = "#FF4B4B";

export type DeptStep = {
  title: string;
  short: string;
  text: string;
  who: string;
  stat: string;
  statText: string;
  viz: string;
  vizLabel: string;
  tom?: boolean;
};

export type DepartmentData = {
  path: string;
  title: string;
  description: string;
  hook: string;
  keywordLine: string;
  answer: string;
  bestFor: string;
  journey: { title: string; intro: string; from: string; to: string };
  steps: DeptStep[];
  compare: { title: string; rows: [string, string, string][] };
  guarantee: { title: string; text: string };
  faqs: { question: string; answer: string }[];
  cta: { title: string; text: string };
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
