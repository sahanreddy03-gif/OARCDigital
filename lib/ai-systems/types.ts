// Content model for the industry AI system pages (/ai/[industry]).
// One file per industry in this folder; the page design is shared
// (components/ai-systems/AiSystemPage.tsx).

export type AiIcon =
  | "chat" | "filter" | "calendar" | "clock" | "userPlus" | "refresh" | "link" | "pen"
  | "image" | "euro" | "repeat" | "wrench" | "card" | "file" | "chart" | "sun"
  | "network" | "workflow" | "trending" | "shield" | "search" | "folder" | "scale"
  | "inbox" | "languages" | "users" | "lock" | "eye" | "badge" | "building" | "book"
  | "car" | "plane" | "receipt" | "gavel" | "phone" | "check";

export interface SourceLink { label: string; href: string }

export interface ChatVisual {
  type: "chat";
  initials: string;
  name: string;
  origin: string;
  status: string;
  messages: { from: "in" | "out"; text: string; time: string }[];
  slots?: string[];
  done: { before: string; strong: string; after: string };
}
export interface RowsVisual {
  type: "rows";
  title: string;
  hint: string;
  /** "call" shows a phone button, "tag" shows the row's tag text. */
  action: "call" | "tag";
  rows: { badge: string; top?: boolean; title: string; detail: string; tag?: string }[];
}
export interface TimelineVisual {
  type: "timeline";
  title: string;
  subtitle: string;
  steps: { when: string; title: string; detail: string; key?: boolean; tag?: string }[];
}
export interface AskVisual {
  type: "ask";
  questions: { q: string; summary: string; rows: [string, string][] }[];
}
export type SpotVisual = ChatVisual | RowsVisual | TimelineVisual | AskVisual;

export interface Spotlight {
  label: string;
  title: string;
  points: string[];
  visual: SpotVisual;
}

/** One scene of the self-playing demo at the top of the page. */
export interface FilmScene {
  clock: string;
  caption: string;
  result: string;
  visual: ChatVisual | RowsVisual | TimelineVisual;
}

export interface CalcInput { label: string; value: number; max?: number }

export interface AiSystemContent {
  slug: string;
  /** Short name used in breadcrumbs, hub cards and schema. */
  name: string;
  /** Label next to OARC in the sticky page bar, e.g. "Real Estate AI". */
  barLabel: string;
  /** "real estate agency", "law firm" — used in the WhatsApp message. */
  business: string;
  metaTitle: string;
  metaDescription: string;
  updated: string; // ISO date
  serviceType: string;
  schemaDescription: string;
  hub: { title: string; body: string; gain: string };
  /** Deployment proof, supplied by the owner. line = full sentence, short = phone width. */
  proof: { line: string; short: string };
  /** Self-playing demo in the hero. */
  film: { title: string; scenes: FilmScene[] };
  /** Put the practice-area table on a white band (long pages). */
  lightAreas?: boolean;
  /** The AI agents that chat and call: the selling point after "everything it does". */
  agents: {
    label: string;
    title: string;
    intro: string;
    note: string;
    items: { name: string; title: string; points: string[]; channels: string[]; result: string }[];
  };

  hero: {
    pill: string;
    kicker: string;
    h1Before: string;
    h1Highlight: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  dashboard: {
    title: string;
    body: string;
    org: string;
    search: string;
    initials: string;
    nav: { label: string; badge?: string }[];
    greeting: string;
    status: string;
    kpis: { label: string; value: string; note: string; alert?: boolean }[];
    todoTitle: string;
    todos: { initials: string; title: string; detail: string; tag: string; on?: boolean }[];
    chartTitle: string;
    bars: { label: string; h: number }[];
    chartFoot: { label: string; value: string };
    chatFloat: { channel: string; time: string; incoming: string; reply: string; receipt: string };
    alertFloat: { label: string; title: string; detail: string; tag: string };
  };
  worksWith: string[];
  pillars: { label: string; title: string; items: { icon: AiIcon; title: string; body: string }[] };
  jobs: { label: string; title: string; items: { icon: AiIcon; title: string; body: string; gain: string }[] };
  spotlights: Spotlight[];
  areas: {
    label: string;
    title: string;
    intro: string;
    colA: string;
    colB: string;
    colC: string;
    items: { name: string; system: string; you: string }[];
  };
  wins: { label: string; title: string; items: { title: string; body: string }[] };
  live: {
    label: string;
    h2Before: string;
    h2Em: string;
    body: string;
    steps: { when: string; title: string; body: string }[];
  };
  ways: { label: string; title: string; items: { title: string; body: string; example: string }[] };
  offer: {
    label: string;
    title: string;
    body: string;
    cta: string;
    secondaryCta: string;
    listLabel: string;
    items: { strong: string; rest: string }[];
  };
  calc: {
    label: string;
    title: string;
    /** percent: out1 = a * b%.  times: out1 = a * b * factor. out2 = out1 * c. */
    mode: "percent" | "times";
    factor?: number;
    inputs: [CalcInput, CalcInput, CalcInput];
    out1: string;
    out2: string;
    footnote: string;
  };
  trust: { label: string; title: string; items: { icon: AiIcon; title: string; body: string }[] };
  facts: { label: string; title: string; items: { n: string; l: string; src: SourceLink }[] };
  faq: { q: string; a: string }[];
  cta: { titleBefore: string; titleEm: string; body: string; button: string; secondary: string };
  sources: SourceLink[];
  related: { label: string; href: string }[];
  disclaimer: string;
}
