import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { partytownSnippet } from "@qwik.dev/partytown/integration";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./fonts/fallbacks.css";
import "./globals.css";
import { Providers } from "./providers";
import SpeculationRules from "@/components/SpeculationRules";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Analytics from "@/components/Analytics";
import { NAP, POSTAL_ADDRESS, GEO_COORDINATES } from "@/lib/seo/nap";
import { ORG_SAMEAS } from "@/lib/schema";

// Fonts are self-hosted from app/fonts (same latin files Google Fonts serves), so builds
// never depend on fonts.googleapis.com. Only the body font is preloaded on every page;
// the rest load on first use (display: swap + the same metric-matched fallbacks Google used: app/fonts/fallbacks.css).
const nunitoSans = localFont({
  src: [
    { path: "./fonts/nunito-sans.woff2", weight: "200", style: "normal" },
    { path: "./fonts/nunito-sans.woff2", weight: "300", style: "normal" },
    { path: "./fonts/nunito-sans.woff2", weight: "400", style: "normal" },
    { path: "./fonts/nunito-sans.woff2", weight: "600", style: "normal" },
    { path: "./fonts/nunito-sans.woff2", weight: "700", style: "normal" },
    { path: "./fonts/nunito-sans.woff2", weight: "800", style: "normal" },
    { path: "./fonts/nunito-sans.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["NunitoSansFallback"],
  declarations: [{ prop: "font-stretch", value: "100%" }],
  variable: "--font-nunito-sans",
});
const montserrat = localFont({
  src: [{ path: "./fonts/montserrat.woff2", weight: "100 900", style: "normal" }],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["MontserratFallback"],
  variable: "--font-montserrat",
  preload: false,
});
const inter = localFont({
  src: [{ path: "./fonts/inter.woff2", weight: "100 900", style: "normal" }],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["InterFallback"],
  variable: "--font-inter",
  preload: false,
});
const spaceGrotesk = localFont({
  src: [{ path: "./fonts/space-grotesk.woff2", weight: "300 700", style: "normal" }],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["SpaceGroteskFallback"],
  variable: "--font-space-grotesk",
  preload: false,
});
const ebGaramond = localFont({
  src: [{ path: "./fonts/eb-garamond.woff2", weight: "400 800", style: "normal" }],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["EBGaramondFallback"],
  variable: "--font-eb-garamond",
  preload: false,
});
const bricolage = localFont({
  src: [
    { path: "./fonts/bricolage-grotesque.woff2", weight: "500", style: "normal" },
    { path: "./fonts/bricolage-grotesque.woff2", weight: "700", style: "normal" },
    { path: "./fonts/bricolage-grotesque.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["BricolageGrotesqueFallback"],
  declarations: [{ prop: "font-stretch", value: "100%" }],
  variable: "--font-bricolage",
  preload: false,
});
const spaceMono = localFont({
  src: [
    { path: "./fonts/space-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/space-mono-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["SpaceMonoFallback"],
  variable: "--font-space-mono",
  preload: false,
});
// One "Instrument Serif" family holds both the italic and the upright face, exactly as the
// live Google setup did (both configs shared that family name, so their faces merged).
// --font-instrument-serif and --font-instrument-serif-roman both point at it.
const instrumentSerif = localFont({
  src: [
    { path: "./fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/instrument-serif.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["InstrumentSerifFallback"],
  variable: "--font-instrument-serif",
  preload: false,
});
const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces.woff2", weight: "400", style: "normal" },
    { path: "./fonts/fraunces.woff2", weight: "600", style: "normal" },
    { path: "./fonts/fraunces.woff2", weight: "900", style: "normal" },
    { path: "./fonts/fraunces-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/fraunces-italic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/fraunces-italic.woff2", weight: "900", style: "italic" },
  ],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["FrauncesFallback"],
  variable: "--font-fraunces",
  preload: false,
});
const jetbrainsMono = localFont({
  src: [
    { path: "./fonts/jetbrains-mono.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono.woff2", weight: "700", style: "normal" },
    { path: "./fonts/jetbrains-mono.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["JetBrainsMonoFallback"],
  variable: "--font-jetbrains-mono",
  preload: false,
});

// Design system v3 (Notion "OARC Design System (final)"): upright Instrument Serif for
// editorial lines (--font-instrument-serif-roman, set on <html> below), and Inter Tight as
// the web stand-in for Neue Haas Unica (sentences).
const interTight = localFont({
  src: [
    { path: "./fonts/inter-tight.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-tight.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["InterTightFallback"],
  variable: "--font-inter-tight",
  preload: false,
});

const fontVariables = [
  nunitoSans.variable,
  montserrat.variable,
  inter.variable,
  spaceGrotesk.variable,
  ebGaramond.variable,
  bricolage.variable,
  spaceMono.variable,
  instrumentSerif.variable,
  fraunces.variable,
  jetbrainsMono.variable,
  interTight.variable,
].join(" ");

const ORGANIZATION_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    name: NAP.name,
    alternateName: NAP.alternateName,
    description:
      "Malta's AI-native marketing agency. One in-house team for creative, growth and automation: a creative studio, AI workers and connected business systems.",
    url: "https://oarcdigital.com",
    telephone: NAP.phoneE164,
    email: NAP.email,
    address: POSTAL_ADDRESS,
    sameAs: ORG_SAMEAS,
    geo: GEO_COORDINATES,
    hasMap: NAP.mapUrl,
    areaServed: [{ "@type": "Country", name: "Malta" }],
    knowsAbout: [
      "Digital Marketing",
      "Creative Production",
      "Brand Strategy",
      "Social Media Marketing",
      "AI Workers",
      "Voice AI",
      "Marketing Automation",
      "WhatsApp Automation",
      "Hospitality Technology",
      "Restaurant Management Software",
      "Digital Menus",
      "Influencer Marketing",
      "Malta Marketing",
    ],
    slogan: "One AI-native team for creative, growth & automation.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "OARC Digital departments",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Creative",
            url: "https://oarcdigital.com/creative",
            description: "Creative direction, brand, social, video, web and campaign production.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Workers",
            url: "https://oarcdigital.com/ai-agents",
            description: "AI workers for sales, support, bookings, follow-up and operations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Systems",
            url: "https://oarcdigital.com/solutions",
            description: "H360, integrations, custom applications and business automation.",
          },
        },
      ],
    },
  },
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "OARC Digital | Malta's AI-Native Marketing Agency",
  description:
    "Malta's AI-native marketing agency. One in-house team for creative, growth and automation: creative studio, AI workers and business systems.",
  metadataBase: new URL("https://oarcdigital.com"),
  openGraph: {
    title: "OARC Digital — One AI-native team for creative, growth & automation",
    description:
      "Malta's AI-native marketing agency: an in-house creative studio, AI workers and business systems built around measurable growth.",
    type: "website",
    url: "https://oarcdigital.com/",
    images: [{ url: "https://oarcdigital.com/og-image.png", width: 1200, height: 630 }],
    locale: "en_MT",
    siteName: "OARC Digital",
  },
  verification: {
    google: "8I0VqGfWyLV9j7HwwmE3AJRWrLcpnAooe9IX952BLzw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "OARC Digital — One AI-native team for creative, growth & automation",
    description:
      "Malta's AI-native marketing agency: an in-house creative studio, AI workers and business systems built around measurable growth.",
    images: ["https://oarcdigital.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.png" }],
  },
  other: {
    "geo.region": NAP.regionCode,
    "geo.placename": `${NAP.addressLocality}, Malta`,
    "geo.position": `${NAP.geo.lat};${NAP.geo.lng}`,
    ICBM: `${NAP.geo.lat}, ${NAP.geo.lng}`,
  },
};

// ─── Performance budget ───────────────────────────────────────────────────────
// next/font    : all families self-hosted from app/fonts via next/font/local
//                (display:swap, metric-matched fallbacks, no Google fetch at build).
//                Only Nunito Sans (body) is preloaded site-wide.
// Partytown    : GTM / Google Ads (AW-17812517147) offloaded to web worker in
//                production — main thread free during first-paint window
// SpeedInsights: @vercel/speed-insights/next wired below — real-user data
// SpeculationRules: 8 high-conversion URLs prerendered on moderate eagerness
// Hero preload : fetchPriority="high" <link> in <head> for the LCP AVIF
// LazyMotion   : framer-motion features lazy-loaded via <LazyMotion> in Providers
// Motion stack: MotionConfig + LazyMotion strict + Lenis after idle — see app/providers.tsx, lib/motion/
// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={fontVariables}
      style={{ ["--font-instrument-serif-roman" as string]: instrumentSerif.style.fontFamily }}
    >
      <head>
        <link
          rel="preload"
          as="font"
          href="/fonts/heat-robox.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* LCP hero — preload must match HeroSection path (/attached_assets). */}
        <link
          rel="preload"
          as="image"
          href="/attached_assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif"
          type="image/avif"
          {...{ fetchPriority: "high" }}
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body suppressHydrationWarning>
        {/* Swallow the cross-origin SecurityError emitted by the Replit
            preview iframe wrapper. The wrapper script tries to call
            `dispatchEvent` on its parent window, which is cross-origin in
            the Replit preview pane, throwing an unhandled SecurityError on
            every page load. Replit's crash detector matches on any
            unhandled error and slaps a "Your application encountered an
            error" overlay over the working page, even though the site
            itself rendered correctly. We register an early `error` listener
            (capture phase) that calls `preventDefault()` only on this
            specific cross-origin SecurityError, leaving every other error
            to surface normally.

            Uses a raw <script dangerouslySetInnerHTML> placed in <body>
            (not <head>) — body inline scripts hydrate cleanly in Next 14
            App Router (proven by the JSON-LD <script> below). next/script
            with beforeInteractive was tried first but loads asynchronously
            in dev, missing the SecurityError that fires on first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{window.addEventListener('error',function(e){var m=(e&&e.message)||'';if(m.indexOf('Blocked a frame with origin')!==-1||m.indexOf("cross-origin frame")!==-1){e.preventDefault();e.stopImmediatePropagation();return false;}},true);}catch(_){}})();`,
          }}
        />
        {/* Organization JSON-LD — rendered in <body> rather than <head>
            because raw <script dangerouslySetInnerHTML> inside <head> of
            App Router root layout triggers a hydration type-mismatch
            (server renders type="null", client renders "application/ld+json").
            Googlebot reads JSON-LD from anywhere in the document, so body
            placement is SEO-equivalent and hydration-safe. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
        <SpeculationRules />
        <Providers>{children}</Providers>
        <MobileStickyCTA />
        <Analytics />

        {/* Partytown + Google Ads — production only.
            In dev, Partytown spawns a sandboxed iframe that calls
            dispatchEvent on its parent window; when the page is itself
            inside a cross-origin iframe (Replit preview) this throws an
            unhandled SecurityError that crashes the preview overlay even
            though the site rendered correctly. Analytics doesn't send in
            dev anyway, so we skip the whole block. */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              id="partytown-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `partytown = { forward: ["gtag", "dataLayer.push"] };`,
              }}
            />
            <Script
              id="partytown-snippet"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: partytownSnippet() }}
            />
            <script
              type="text/partytown"
              src="https://www.googletagmanager.com/gtag/js?id=AW-17812517147"
            />
            <script
              type="text/partytown"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-17812517147');
                `,
              }}
            />
          </>
        )}
        <Script id="gtag-conversion-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href]');
              if (!el) return;
              var href = el.getAttribute('href') || '';
              if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) {
                gtag('event', 'conversion', {send_to: 'AW-17812517147', event_category: 'engagement', event_label: 'whatsapp_click'});
                gtag('event', 'whatsapp_click', {event_category: 'engagement', event_label: href});
              }
              if (href.indexOf('tel:') === 0) {
                gtag('event', 'conversion', {send_to: 'AW-17812517147', event_category: 'engagement', event_label: 'phone_click'});
                gtag('event', 'phone_click', {event_category: 'engagement', event_label: href});
              }
            });
            document.addEventListener('submit', function(e) {
              gtag('event', 'conversion', {send_to: 'AW-17812517147', event_category: 'engagement', event_label: 'form_submit'});
              gtag('event', 'form_submit', {event_category: 'engagement', event_label: window.location.pathname});
            });
          `}
        </Script>
        <SpeedInsights />
      </body>
    </html>
  );
}
