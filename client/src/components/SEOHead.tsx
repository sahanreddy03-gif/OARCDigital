import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  schemaId?: string;
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://www.oarcdigital.com/og-image.png',
  ogType = 'website',
  structuredData,
  schemaId = 'primary'
}: SEOHeadProps) {
  const siteUrl = 'https://www.oarcdigital.com';
  const fullCanonical = canonicalUrl
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`)
    : window.location.href;

  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Favicon - OARC Logo (all sizes) */}
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="256x256" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="128x128" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
