import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { Nunito_Sans, Montserrat, Inter, Space_Grotesk, EB_Garamond, Orbitron, Anton } from "next/font/google";
import { partytownSnippet } from "@builder.io/partytown/integration";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";
import SpeculationRules from "@/components/SpeculationRules";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Analytics from "@/components/Analytics";

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

const fontVariables = [
  nunitoSans.variable,
  montserrat.variable,
  inter.variable,
  spaceGrotesk.variable,
  ebGaramond.variable,
  orbitron.variable,
  anton.variable,
].join(" ");

const ORGANIZATION_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "OARC Digital",
    alternateName: "OARC Digital Malta",
    description:
      "Malta's first Creative + AI Systems Agency. Brand strategy, social media, photo and video production, influencer marketing, AI solutions, and Hospitality 360 — all in one growth system. Strategy + Technology + Data + Analytics.",
    url: "https://oarcdigital.com",
    telephone: "+35679711799",
    email: "hello@oarcdigital.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road",
      addressLocality: "Birkirkara",
      addressRegion: "Birkirkara",
      postalCode: "CBD 2010",
      addressCountry: "MT",
    },
    sameAs: [
      "https://www.instagram.com/oarcdigital",
      "https://www.linkedin.com/company/oarc-digital",
      "https://www.facebook.com/oarcdigital",
    ],
    geo: { "@type": "GeoCoordinates", latitude: 35.8978, longitude: 14.4617 },
    hasMap: "https://maps.google.com/?q=Level+1+The+Brewhouse+Birkirkara+Malta",
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
    "geo.region": "MT-09",
    "geo.placename": "Birkirkara, Malta",
    "geo.position": "35.8978;14.4617",
    ICBM: "35.8978, 14.4617",
  },
};

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
        <link
          rel="preload"
          as="image"
          href="/assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif"
          type="image/avif"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Partytown — runs gtag in a Web Worker, off the main thread.
            App Router pattern: inline init snippet, no React component. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `partytown = { forward: ["gtag", "dataLayer.push"] };`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: partytownSnippet() }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <SpeculationRules />
        <Providers>{children}</Providers>
        <MobileStickyCTA />
        <Analytics />

        {/* Google Ads gtag.js — runs in a Web Worker via Partytown.
            We use the canonical Partytown attributes (`type="text/partytown"`)
            instead of next/script `strategy="worker"`, which is unstable in
            Next 14 App Router. Partytown's snippet (in <head>) rewrites these
            tags to load inside its worker. */}
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
