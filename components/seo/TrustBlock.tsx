import { MapPin, Phone, Mail, Star, ShieldCheck, Award } from "lucide-react";
import { NAP } from "@/lib/seo/nap";

type Variant = "visit" | "badges" | "reviews";

type Props = {
  /**
   * Page slug (or any unique identifier) — used to namespace data-testid
   * attributes so audit-nap.ts can locate the rendered NAP block per page.
   */
  slug: string;
  variant?: Variant;
  className?: string;
};

const containerClasses = "rounded-xl border bg-card p-6";

/**
 * `visit` — replaces the 4-line MapPin/Phone/Mail trust block currently
 * duplicated across 13 service PageContent.tsx files. Renders the canonical
 * Birkirkara NAP from `lib/seo/nap.ts`. The `audit-nap.ts` script extracts
 * the rendered text via the data-testid attributes below and asserts it
 * matches the NAP record byte-for-byte.
 */
function VisitBlock({ slug }: { slug: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
      <a
        href={NAP.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 hover-elevate rounded-md p-2 -m-2"
        data-testid={`trustblock-visit-address-${slug}`}
      >
        <MapPin className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
        <span className="text-foreground leading-relaxed">
          {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}, Malta
        </span>
      </a>
      <a
        href={`tel:${NAP.phoneE164}`}
        className="flex items-start gap-3 hover-elevate rounded-md p-2 -m-2"
        data-testid={`trustblock-visit-phone-${slug}`}
      >
        <Phone className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
        <span className="text-foreground">{NAP.phoneDisplay}</span>
      </a>
      <a
        href={`mailto:${NAP.email}`}
        className="flex items-start gap-3 hover-elevate rounded-md p-2 -m-2"
        data-testid={`trustblock-visit-email-${slug}`}
      >
        <Mail className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
        <span className="text-foreground break-all">{NAP.email}</span>
      </a>
    </div>
  );
}

function BadgesBlock({ slug }: { slug: string }) {
  return (
    <div
      className="flex flex-wrap items-center gap-4"
      data-testid={`trustblock-badges-${slug}`}
    >
      <div className="flex items-center gap-2 text-sm text-foreground">
        <ShieldCheck className="w-4 h-4 text-brand-orange" />
        <span>Malta-registered (CBD 2010)</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-foreground">
        <Award className="w-4 h-4 text-brand-orange" />
        <span>EU GDPR-compliant delivery</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-foreground">
        <MapPin className="w-4 h-4 text-brand-orange" />
        <span>{NAP.addressLocality} CBD studio — walk-ins by appointment</span>
      </div>
    </div>
  );
}

function ReviewsBlock({ slug }: { slug: string }) {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center gap-4"
      data-testid={`trustblock-reviews-${slug}`}
    >
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
        ))}
      </div>
      <p className="text-sm text-foreground leading-relaxed">
        Trusted by Malta operators in hospitality, iGaming, professional
        services and retail — work shipped from our {NAP.addressLocality} CBD
        studio at {NAP.streetAddressShort}.
      </p>
    </div>
  );
}

/**
 * Centralised trust / NAP surface. Replaces ad-hoc MapPin/Phone/Mail rows
 * scattered across service pages. Every variant pulls from the canonical
 * `NAP` record so a single edit in `lib/seo/nap.ts` updates every surface
 * and the `audit-nap.ts` extractor can verify by reading data-testid blocks.
 *
 * Variants:
 * - `visit`   — full address + phone + email (default; service-page footer)
 * - `badges`  — compliance / locality pills (above-fold trust strip)
 * - `reviews` — rating row + locality attestation (testimonial sections)
 */
export default function TrustBlock({ slug, variant = "visit", className }: Props) {
  return (
    <section
      className={`${containerClasses}${className ? ` ${className}` : ""}`}
      data-testid={`trustblock-${variant}-${slug}`}
      data-trustblock-variant={variant}
      data-trustblock-slug={slug}
    >
      {variant === "visit" && <VisitBlock slug={slug} />}
      {variant === "badges" && <BadgesBlock slug={slug} />}
      {variant === "reviews" && <ReviewsBlock slug={slug} />}
    </section>
  );
}
