// Advanced Schema Markup for SEO Dominance
// Review, BreadcrumbList, HowTo, VideoObject schemas

export interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

// Aggregate Rating Schema - Shows stars in Google search results!
export function createAggregateRatingSchema(
  itemName: string,
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 5
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OARC Digital",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": bestRating,
      "worstRating": 1
    }
  };
}

// Review Schema - Individual testimonials
export function createReviewSchema(reviews: Review[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OARC Digital",
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished || new Date().toISOString().split('T')[0]
    }))
  };
}

// BreadcrumbList Schema - Better navigation in search results
export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://oarcdigital.com${item.url}`
    }))
  };
}

// HowTo Schema - Dominates voice search "How do I..."
export function createHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[],
  estimatedCost?: string,
  totalTime?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "estimatedCost": estimatedCost,
    "totalTime": totalTime,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    }))
  };
}

// VideoObject Schema - For video content
export function createVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration?: string,
  embedUrl?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    "embedUrl": embedUrl,
    "publisher": {
      "@type": "Organization",
      "name": "OARC Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://oarcdigital.com/logo.png"
      }
    }
  };
}

// Article Schema - For blog posts
export function createArticleSchema(
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string,
  authorName: string = "OARC Digital"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "OARC Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://oarcdigital.com/logo.png"
      }
    }
  };
}

// Product Schema - For service offerings
export function createProductSchema(
  name: string,
  description: string,
  image: string,
  offers: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  } = {}
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": "OARC Digital"
    },
    "offers": {
      "@type": "Offer",
      "price": offers.price,
      "priceCurrency": offers.priceCurrency || "EUR",
      "availability": offers.availability || "https://schema.org/InStock",
      "url": "https://oarcdigital.com/contact"
    }
  };
}

// Event Schema - For webinars, workshops
export function createEventSchema(
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  location: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate,
    "location": {
      "@type": "Place",
      "name": location,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MT"
      }
    },
    "image": image,
    "organizer": {
      "@type": "Organization",
      "name": "OARC Digital",
      "url": "https://oarcdigital.com"
    }
  };
}
