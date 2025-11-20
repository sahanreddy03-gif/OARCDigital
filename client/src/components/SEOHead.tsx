import { useEffect } from 'react';

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
  ogImage = 'https://oarcdigital.com/og-image.jpg',
  ogType = 'website',
  structuredData,
  schemaId = 'primary'
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonicalUrl || window.location.href }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Structured Data (JSON-LD) - supports multiple schemas with unique IDs
    if (structuredData) {
      const dataAttribute = `data-schema-id`;
      let script = document.querySelector(`script[type="application/ld+json"][${dataAttribute}="${schemaId}"]`);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute(dataAttribute, schemaId);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to remove this schema when component unmounts
    return () => {
      if (structuredData) {
        const dataAttribute = `data-schema-id`;
        const script = document.querySelector(`script[type="application/ld+json"][${dataAttribute}="${schemaId}"]`);
        if (script) {
          script.remove();
        }
      }
    };
  }, [title, description, canonicalUrl, ogImage, ogType, structuredData, schemaId]);

  return null;
}
