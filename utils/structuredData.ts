// Structured Data (JSON-LD) utilities for SEO

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "OARC Digital",
  "description": "Malta's first Creative + AI Systems Agency. Social media management, video production, branding, web design, AI agents, and marketing automation for Malta businesses.",
  "url": "https://oarcdigital.com",
  "telephone": "+35679711799",
  "email": "hello@oarcdigital.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road",
    "addressLocality": "Birkirkara",
    "postalCode": "CBD 2010",
    "addressCountry": "MT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.8978",
    "longitude": "14.4617"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/oarcdigital",
    "https://www.linkedin.com/company/oarcdigital",
    "https://www.facebook.com/oarcdigital"
  ],
  "priceRange": "€€€",
  "areaServed": {
    "@type": "Country",
    "name": "Malta"
  },
  "knowsAbout": [
    "Social media marketing Malta",
    "Instagram marketing",
    "TikTok for business",
    "AI marketing automation",
    "Restaurant marketing Malta",
    "iGaming marketing Malta",
    "Hotel marketing Malta",
    "Branding agency Malta",
    "Web design Malta",
    "Video production Malta",
    "AI SDR agents",
    "Content marketing Malta",
    "Paid advertising Malta"
  ]
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
    "streetAddress": "Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road",
    "addressLocality": "Birkirkara",
    "addressRegion": "Birkirkara",
    "postalCode": "CBD 2010",
    "addressCountry": "MT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+35679711799",
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
