import { MapPin } from "lucide-react";
import { getMaltaContext } from "@/lib/seo/maltaContext";

type Props = {
  /** Service slug (matches a key in lib/seo/maltaContext.ts MALTA_CONTEXT). */
  slug: string;
};

/**
 * Compact Malta-specific context block, rendered just above the FAQ section
 * on every /services/<slug>/PageContent.tsx. Reads structured data from
 * lib/seo/maltaContext.ts. Renders nothing if the slug has no entry — the
 * audit (audit-framework.ts Layer-2 gate) is what enforces presence.
 */
export default function MaltaContextBlock({ slug }: Props) {
  const entry = getMaltaContext(slug);
  if (!entry) return null;
  return (
    <section
      className="mb-12 rounded-xl border bg-card p-6"
      data-testid={`section-malta-context-${slug}`}
      data-similarity-ignore
    >
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
        <div>
          <h2 className="text-xl font-bold mb-2">In Malta — local context</h2>
          <p
            className="text-foreground leading-relaxed"
            data-testid={`text-malta-context-${slug}`}
          >
            {entry.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
