// Structured Data (JSON-LD) utilities for SEO

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OARC Digital",
  "description": "AI-powered creative services, AI employees, and revenue automation solutions. Elite marketing agency delivering premium digital experiences.",
  "url": "https://oarcdigital.com",
  "telephone": "+356 79711799",
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
  "logo": "https://oarcdigital.com/favicon.png",
  "description": "OARC Digital helps Maltese businesses grow revenue fast through brand strategy, AI-driven automation, and performance marketing. Malta's first AI-native creative, automation & intelligent agents agency.",
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
    "telephone": "+356 99263179",
    "contactType": "Customer Service",
    "email": "hello@oarcdigital.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/oarcdigital",
    "https://www.facebook.com/oarcdigital",
    "https://www.instagram.com/oarcdigital"
  ],
  "department": [
    {
      "@type": "Organization",
      "name": "Creative & Brand Strategy",
      "description": "Brand strategy, social media management, content creation, video production, web design, and graphic design for Malta businesses.",
      "url": "https://oarcdigital.com/creative"
    },
    {
      "@type": "Organization",
      "name": "AI Solutions & Intelligent Agents",
      "description": "AI workforce agents for sales, support, bookings, and operations. Deploy autonomous AI employees that work 24/7.",
      "url": "https://oarcdigital.com/ai-agents"
    },
    {
      "@type": "Organization",
      "name": "Growth Automation & Custom Software",
      "description": "Business automation, workflow optimization, CRM integration, and custom software development to scale revenue and reduce costs.",
      "url": "https://oarcdigital.com/automation"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "OARC Digital Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Brand Strategy & Positioning", "description": "Brand strategy and positioning to increase market value and recognition in Malta."}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Social Media Management", "description": "Performance-driven social media management and content creation for Malta businesses."}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Paid Advertising", "description": "Google Ads, Meta Ads, and paid social campaigns optimized for Malta market ROI."}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Workforce Agents", "description": "Deploy AI agents for sales, support, bookings, and operations that work 24/7."}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Business Automation", "description": "Workflow automation, CRM integration, and custom software to eliminate manual processes."}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Web Design & Development", "description": "Conversion-optimized websites and web applications for Malta businesses."}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Video Production", "description": "Professional video production, editing, and motion graphics for social and advertising."}}
    ]
  }
};
