// Build a fully-qualified URL to the dynamic brand-matched OG card route
// (app/og/route.tsx). Pages pass their human-readable title/subtitle/eyebrow
// and get back an absolute URL safe to drop into Next.js metadata
// `openGraph.images` and `twitter.images`.
//
// Used by the core 60 pages and beyond (Task #131 follow-up wiring).

const BASE = "https://oarcdigital.com";

export interface OgImageOptions {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export function ogImageUrl({ title, subtitle, eyebrow }: OgImageOptions): string {
  const params = new URLSearchParams();
  params.set("title", title);
  if (subtitle) params.set("subtitle", subtitle);
  if (eyebrow) params.set("eyebrow", eyebrow);
  return `${BASE}/og?${params.toString()}`;
}

export function ogImageEntry(opts: OgImageOptions) {
  return [{ url: ogImageUrl(opts), width: 1200, height: 630 }];
}
