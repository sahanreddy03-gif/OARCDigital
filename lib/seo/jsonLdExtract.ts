/**
 * JSON-LD extractor — shared by `scripts/audit-nap.ts` and
 * `scripts/audit-schema.ts`.
 *
 * Goals:
 * - NEVER eval / new Function the script body. Every block is parsed with
 *   `JSON.parse` inside a try/catch — parse failures become structured
 *   `ParseError` results (a separate severity tier from structural failures
 *   the audits later check for).
 * - Tolerant of:
 *     - HTML entity escaping inside `<script type="application/ld+json">`
 *       blocks (Next.js escapes `<` to `\u003c` in dangerouslySetInnerHTML
 *       output, and may escape `&` to `&amp;` when rendered through React's
 *       string renderer).
 *     - `@graph` arrays (one block, many entities).
 *     - Multiple JSON-LD blocks per page.
 * - Returns the raw parsed object so the audits can run their own assertions
 *   without re-parsing or guessing structure.
 */

export type JsonLdParseError = {
  ok: false;
  index: number;
  rawSnippet: string;
  error: string;
};

export type JsonLdParseSuccess = {
  ok: true;
  index: number;
  raw: string;
  data: unknown;
};

export type JsonLdResult = JsonLdParseSuccess | JsonLdParseError;

/**
 * Strip HTML entity / escaped-unicode noise that Next.js + React routinely
 * inject when serialising JSON-LD via `JSON.stringify(...)` inside
 * `dangerouslySetInnerHTML` or `<script type="application/ld+json">{...}`.
 *
 * Order matters: decode entities BEFORE unescaping unicode so the unicode
 * pass sees the cleartext output.
 */
function decodeJsonLdBody(body: string): string {
  return body
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
}

/**
 * Pull every JSON-LD block out of an HTML string. Returns an array of
 * results — successful parses keep the parsed data, failures keep the
 * error string + a snippet for the audit's failure report.
 */
export function extractJsonLd(html: string): JsonLdResult[] {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const out: JsonLdResult[] = [];
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = re.exec(html)) !== null) {
    const raw = match[1].trim();
    const decoded = decodeJsonLdBody(raw);
    try {
      const data = JSON.parse(decoded);
      out.push({ ok: true, index: i, raw: decoded, data });
    } catch (err) {
      out.push({
        ok: false,
        index: i,
        rawSnippet: decoded.slice(0, 200),
        error: err instanceof Error ? err.message : String(err),
      });
    }
    i += 1;
  }
  return out;
}

/**
 * Flatten `@graph` arrays so callers get a single list of schema entities.
 * Non-graph blocks pass through unchanged. Parse failures are dropped — the
 * caller is expected to inspect the raw `JsonLdResult[]` separately if it
 * cares about parse errors (the audits do — they fail on parse errors with
 * a distinct severity).
 */
export function flattenJsonLdEntities(results: JsonLdResult[]): unknown[] {
  const entities: unknown[] = [];
  for (const r of results) {
    if (!r.ok) continue;
    // Three legitimate top-level shapes for a JSON-LD block:
    //   1. A single entity object (most common)
    //   2. A wrapper object with `@graph: [ … ]` of entities
    //   3. A bare top-level array `[ {…}, {…} ]` (less common but valid)
    if (Array.isArray(r.data)) {
      entities.push(...r.data);
      continue;
    }
    const d = r.data as Record<string, unknown> | undefined;
    if (d && Array.isArray((d as { "@graph"?: unknown[] })["@graph"])) {
      entities.push(...((d as { "@graph": unknown[] })["@graph"]));
    } else {
      entities.push(r.data);
    }
  }
  return entities;
}

/**
 * Find every entity whose @type matches one of the given types (case-
 * sensitive — schema.org types are PascalCase). Handles both string and
 * array forms of @type.
 */
export function findEntitiesByType(
  entities: unknown[],
  types: readonly string[],
): Record<string, unknown>[] {
  const wanted = new Set(types);
  const out: Record<string, unknown>[] = [];
  for (const e of entities) {
    if (!e || typeof e !== "object") continue;
    const t = (e as Record<string, unknown>)["@type"];
    if (typeof t === "string" && wanted.has(t)) {
      out.push(e as Record<string, unknown>);
    } else if (Array.isArray(t) && t.some((x) => typeof x === "string" && wanted.has(x))) {
      out.push(e as Record<string, unknown>);
    }
  }
  return out;
}
