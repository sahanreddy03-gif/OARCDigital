// Placeholder map for next/image blur-up. Run `npm run blur:gen` to populate.
// Empty map is safe — `blurFor()` returns undefined and consumers fall back
// to placeholder="empty" or no placeholder.

export const BLUR_MAP: Record<string, string> = {};

export function blurFor(src: string): string | undefined {
  return BLUR_MAP[src];
}
