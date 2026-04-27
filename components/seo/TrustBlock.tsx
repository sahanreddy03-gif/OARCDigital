import { MapPin, Phone, Mail, Star, ShieldCheck, Award } from "lucide-react";
import { NAP } from "@/lib/seo/nap";

type Variant = "visit" | "badges" | "reviews";

type Props = {
  variant: Variant;
  className?: string;
};

const containerClasses = "rounded-xl border bg-card p-6";

function VisitBlock() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
      <a
        href={NAP.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 hover-elevate rounded-md p-2 -m-2"
        data-testid="trustblock-visit-address"
      >
        <MapPin className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
        <span className="text-foreground leading-relaxed">
          {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}, Malta
        </span>
      </a>
      <a
        href={`tel:${NAP.phoneE164}`}
        className="flex items-start gap-3 hover-elevate rounded-md p-2 -m-2"
        data-testid="trustblock-visit-phone"
      >
        <Phone className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
        <span className="text-foreground">{NAP.phoneDisplay}</span>
      </a>
      <a
        href={`mailto:${NAP.email}`}
        className="flex items-start gap-3 hover-elevate rounded-md p-2 -m-2"
        data-testid="trustblock-visit-email"
      >
        <Mail className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
        <span className="text-foreground break-all">{NAP.email}</span>
      </a>
    </div>
  );
}

function BadgesBlock() {
  return (
    <div
      className="flex flex-wrap items-center gap-4"
      data-testid="trustblock-badges"
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

function ReviewsBlock() {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center gap-4"
      data-testid="trustblock-reviews"
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
 * Centralised trust / NAP surface. Variant-only contract: pass
 * `variant="visit" | "badges" | "reviews"` and the component renders the
 * canonical NAP from `lib/seo/nap.ts`. The audit-nap.ts script locates
 * each block via the `data-trustblock-variant` attribute.
 */
export default function TrustBlock({ variant, className }: Props) {
  return (
    <section
      className={`${containerClasses}${className ? ` ${className}` : ""}`}
      data-testid={`trustblock-${variant}`}
      data-trustblock-variant={variant}
      data-similarity-ignore
    >
      {variant === "visit" && <VisitBlock />}
      {variant === "badges" && <BadgesBlock />}
      {variant === "reviews" && <ReviewsBlock />}
    </section>
  );
}
