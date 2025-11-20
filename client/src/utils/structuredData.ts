// Structured Data (JSON-LD) utilities for SEO

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OARC Digital",
  "description": "AI-powered creative services, AI employees, and revenue automation solutions. Elite marketing agency delivering premium digital experiences.",
  "url": "https://oarcdigital.com",
  "telephone": "+356-XXXX-XXXX",
  "email": "hello@oarcdigital.com",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Seaside Spirit, Triq ix-Xatt, Ta' Xbiex",
      "addressLocality": "Ta' Xbiex",
      "postalCode": "XBX 1020",
      "addressCountry": "MT"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Olympia Tech Park, SIDCO Industrial Estate, Guindy",
      "addressLocality": "Chennai",
      "postalCode": "600032",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Cluster F, Jumeirah Lake Towers",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.9047",
    "longitude": "14.4931"
  },
  "sameAs": [
    "https://www.linkedin.com/company/oarc-digital",
    "https://twitter.com/oarcdigital"
  ],
  "priceRange": "$$$$",
  "areaServed": ["Malta", "Europe", "Middle East", "Asia"]
};

export const createServiceSchema = (
  serviceName: string,
  serviceDescription: string,
  serviceType: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceType,
  "provider": {
    "@type": "Organization",
    "name": "OARC Digital",
    "url": "https://oarcdigital.com"
  },
  "name": serviceName,
  "description": serviceDescription,
  "areaServed": {
    "@type": "Country",
    "name": "Malta"
  }
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OARC Digital",
  "alternateName": "OARC",
  "url": "https://oarcdigital.com",
  "logo": "https://oarcdigital.com/logo.png",
  "description": "AI-powered marketing agency based in Malta, specializing in creative services, AI employees, and revenue automation.",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "OARC Digital Founders"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Seaside Spirit, Triq ix-Xatt, Ta' Xbiex",
    "addressLocality": "Ta' Xbiex",
    "postalCode": "XBX 1020",
    "addressCountry": "MT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+356-XXXX-XXXX",
    "contactType": "Customer Service",
    "email": "hello@oarcdigital.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["English"]
  }
};
