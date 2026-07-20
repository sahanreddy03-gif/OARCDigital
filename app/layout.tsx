import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { Nunito_Sans, Montserrat, Inter, Space_Grotesk, EB_Garamond, Orbitron, Anton, Instrument_Serif } from "next/font/google";
import { partytownSnippet } from "@qwik.dev/partytown/integration";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";
import SpeculationRules from "@/components/SpeculationRules";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import MotionEngine from "@/components/motion/MotionEngine";
import Analytics from "@/components/Analytics";
import { NAP, POSTAL_ADDRESS, GEO_COORDINATES } from "@/lib/seo/nap";
import { ORG_SAMEAS } from "@/lib/schema";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});
const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
  weight: "400",
});
// Editorial display serif for the hero headline (Instrument Serif only ships
// weight 400 in normal + italic — that is the whole family).
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const fontVariables = [
  nunitoSans.variable,
  montserrat.variable,
  inter.variable,
  spaceGrotesk.variable,
  ebGaramond.variable,
  orbitron.variable,
  anton.variable,
  instrumentSerif.variable,
].join(" ");

const ORGANIZATION_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: NAP.name,
    alternateName: NAP.alternateName,
    description:
      "Malta's first Creative + AI Systems Agency. Brand strategy, social media, photo and video production, influencer marketing, AI solutions, and Hospitality 360 — all in one growth system. Strategy + Technology + Data + Analytics.",
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
      "Brand Strategy",
      "Social Media Marketing",
      "AI Solutions",
      "Marketing Automation",
      "WhatsApp Automation",
      "Hospitality Technology",
      "Restaurant Management Software",
      "Digital Menus",
      "Influencer Marketing",
      "Malta Marketing",
    ],
    slogan: "Strategy + Technology + Data + Analytics",
  },
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title:
    "OARC Digital | Brand Strategy, AI Solutions & Growth Automation — Malta's First",
  description:
    "OARC Digital helps Maltese businesses grow revenue through brand strategy, AI-driven automation, performance marketing, and scalable growth systems. Malta's first AI-native creative, automation & intelligent agents agency.",
  metadataBase: new URL("https://oarcdigital.com"),
  openGraph: {
    title:
      "OARC Digital | Brand Strategy, AI Solutions & Growth Automation — Malta's First",
    description:
      "OARC Digital helps Maltese businesses grow revenue fast through brand strategy, AI-driven automation, and performance marketing. Malta's first AI-native agency.",
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
    title: "OARC Digital | Brand Strategy, AI Solutions & Growth Automation — Malta's First",
    description:
      "OARC Digital helps Maltese businesses grow revenue fast through brand strategy, AI-driven automation, and performance marketing.",
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
// next/font    : Nunito Sans, Montserrat, Inter, Space Grotesk, EB Garamond,
//                Orbitron, Anton — all loaded via next/font/google (display:swap,
//                self-hosted, zero FOUT, no external round-trip)
// Partytown    : GTM / Google Ads (AW-17812517147) offloaded to web worker in
//                production — main thread free during first-paint window
// SpeedInsights: @vercel/speed-insights/next wired below — real-user data
// SpeculationRules: 8 high-conversion URLs prerendered on moderate eagerness
// Hero LCP     : the H1 itself (real SSR text) — the old background AVIF was
//                retired with the Monolith hero, so no image preload is needed
// LazyMotion   : framer-motion features lazy-loaded via <LazyMotion> in Providers
// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <link
          rel="preload"
          as="font"
          href="/fonts/heat-robox.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
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
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <SpeculationRules />
        <Providers>{children}</Providers>
        <MotionEngine />
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
