import { LOCALE_INFO, hasTwins, localeHref, type AnyLocale } from "@/lib/i18n/twins";

const ORDER: readonly AnyLocale[] = ["en", "it", "mt"];

const LEAD: Record<AnyLocale, string> = {
  en: "This page in",
  it: "Questa pagina in",
  mt: "Agħżel il-lingwa",
};

/**
 * One quiet line that offers the same page in the other languages. It styles itself, so it
 * can sit on any page. Plain links (no JavaScript, no automatic redirect): the visitor chooses.
 * Renders nothing for a page that has no twins.
 */
export default function LanguageSwitch({
  current,
  path,
  bare = false,
}: {
  current: AnyLocale;
  /** The ENGLISH path of this page, for example "/ai/hotels". */
  path: string;
  /** No own background or padding, for use inside the translated footer. */
  bare?: boolean;
}) {
  if (!hasTwins(path)) return null;
  return (
    <nav
      aria-label="Language"
      data-testid="language-switch"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "6px 14px",
        alignItems: "center",
        justifyContent: bare ? "flex-start" : "center",
        font: '500 14px/1.4 "Instrument Sans", "Inter Tight", system-ui, sans-serif',
        color: "rgba(255,255,255,.62)",
        ...(bare ? {} : { background: "#0A0A0A", padding: "18px 20px", borderBottom: "1px solid rgba(255,255,255,.1)" }),
      }}
    >
      <span>{LEAD[current]}</span>
      {ORDER.map((l) =>
        l === current ? (
          <span key={l} aria-current="true" style={{ color: "#fff", fontWeight: 700 }}>
            {LOCALE_INFO[l].label}
          </span>
        ) : (
          <a
            key={l}
            href={localeHref(l, path)}
            hrefLang={l}
            lang={l}
            data-testid={`link-lang-${l}`}
            style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            {LOCALE_INFO[l].label}
          </a>
        ),
      )}
    </nav>
  );
}
