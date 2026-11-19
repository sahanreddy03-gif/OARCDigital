// Content model for the blog articles rendered by components/blog/ArticlePage.tsx.
//
// Text may use two small marks:
//   [label](/path)   an internal or external link
//   **words**        bold
// Internal links are written with their ENGLISH path. On a Maltese article the renderer
// sends a link to the Maltese version of that page when one exists.

export type ArticleBlock =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  /** A highlighted line for the one thing a skimmer must not miss. */
  | { note: string }
  /**
   * Result cards: a big number, what it measured, and the client. Only ACHIEVED results
   * from lib/data/premium-work/caseProof.ts (`results`), never a target. `href` is the
   * client's case page, written with its English path.
   */
  | { stats: { value: string; label: string; client: string; href?: string }[] }
  /** A client's own words, from lib/reviews/approvedQuotes.ts. */
  | { quote: { text: string; credit: string; /** set "en" when a translated article keeps the client's English words */ lang?: "en" } }
  /** A wall of client and brand names. */
  | { brands: string[] };

export interface BlogArticle {
  /** The ENGLISH path, for example "/blog/ai-for-business-malta". */
  path: string;
  locale: "en" | "mt";
  /** <title> and meta description. */
  title: string;
  description: string;
  /** Small line above the headline. */
  kicker: string;
  h1: string;
  /** First paragraph: the short answer, written so a voice assistant can read it out. */
  intro: string;
  /** Words before and after the linked brand name in the byline. */
  byline: { before: string; after: string };
  image: { src: string; alt: string; width: number; height: number };
  published: string;
  updated: string;
  /** Label of the link to the same article in the other language. */
  otherLanguageLabel: string;
  cta: { label: string; whatsapp: string };
  blocks: ArticleBlock[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  closing: { title: string; text: string; contactLabel: string };
}
