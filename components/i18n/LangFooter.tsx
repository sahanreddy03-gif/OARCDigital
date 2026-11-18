import { NAP } from "@/lib/seo/nap";
import { TWINS, localeHref, type Locale } from "@/lib/i18n/twins";
import LanguageSwitch from "./LanguageSwitch";

const T = {
  it: {
    line: "Un'unica agenzia a Malta per marketing, creatività e sistemi AI. 8 reparti, un solo team.",
    pages: "Pagine in italiano",
    contact: "Contatti",
    whatsapp: "Scrivici su WhatsApp",
    english: "Il resto del sito è in inglese",
    englishLink: "Vai al sito in inglese",
    legal: "Le pagine legali sono in inglese",
    privacy: "Privacy",
    cookies: "Cookie",
    terms: "Termini",
    rights: "Tutti i diritti riservati.",
  },
  mt: {
    line: "Aġenzija waħda f'Malta għall-marketing, il-kreattività u s-sistemi tal-AI. 8 dipartimenti, tim wieħed.",
    pages: "Paġni bil-Malti",
    contact: "Kuntatt",
    whatsapp: "Iktbilna fuq WhatsApp",
    english: "Il-bqija tas-sit hija bl-Ingliż",
    englishLink: "Mur fis-sit bl-Ingliż",
    legal: "Il-paġni legali huma bl-Ingliż",
    privacy: "Privatezza",
    cookies: "Cookies",
    terms: "Termini",
    rights: "Id-drittijiet kollha riżervati.",
  },
} as const;

const link = { color: "#fff", textDecoration: "none" } as const;
const mute = { color: "rgba(255,255,255,.62)" } as const;
const head = { ...mute, font: '600 12px/1.3 "Instrument Sans", system-ui, sans-serif', letterSpacing: ".08em", textTransform: "uppercase", margin: "0 0 14px" } as const;

/**
 * The footer of every translated page. It replaces the English site footer there, so the
 * whole page below the menu is in one language. It links every translated page to every
 * other one, which is how visitors and search engines find them.
 */
export default function LangFooter({ locale, path }: { locale: Locale; path: string }) {
  const t = T[locale];
  return (
    <footer
      lang={locale}
      data-testid="footer-lang"
      style={{ background: "#0A0A0A", color: "#fff", padding: "64px 24px 40px", font: '400 16px/1.6 "Instrument Sans", "Inter Tight", system-ui, sans-serif' }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 64px", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 280px", maxWidth: 420 }}>
            <a href={localeHref(locale, "/")} style={{ ...link, font: '400 30px/1.1 "Instrument Serif", Georgia, serif' }} data-testid="link-footer-home">
              OARC Digital
            </a>
            <p style={{ ...mute, margin: "14px 0 0" }}>{t.line}</p>
          </div>

          <div style={{ flex: "1 1 220px" }}>
            <p style={head}>{t.pages}</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
              {TWINS.map((p) => (
                <li key={p.path}>
                  <a href={localeHref(locale, p.path)} style={link} aria-current={p.path === path ? "page" : undefined}>
                    {p[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: "1 1 220px" }}>
            <p style={head}>{t.contact}</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
              <li>
                <a href={`https://wa.me/${NAP.whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={link} data-testid="link-footer-whatsapp">
                  {t.whatsapp}: {NAP.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${NAP.email}`} style={link}>{NAP.email}</a>
              </li>
              <li style={mute} lang="en">
                {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}, Malta
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.12)", marginTop: 44, paddingTop: 24, display: "grid", gap: 14 }}>
          <LanguageSwitch current={locale} path={path} bare />
          <p style={{ ...mute, margin: 0, fontSize: 14 }}>
            {t.english}. <a href="/" hrefLang="en" style={{ color: "#fff" }} data-testid="link-footer-english">{t.englishLink}</a>.{" "}
            {t.legal}:{" "}
            <a href="/legal/privacy-policy" hrefLang="en" style={{ color: "#fff" }}>{t.privacy}</a>,{" "}
            <a href="/legal/cookie-policy" hrefLang="en" style={{ color: "#fff" }}>{t.cookies}</a>,{" "}
            <a href="/legal/terms-conditions" hrefLang="en" style={{ color: "#fff" }}>{t.terms}</a>.
          </p>
          <p style={{ ...mute, margin: 0, fontSize: 14 }}>© 2026 OARC Digital. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
