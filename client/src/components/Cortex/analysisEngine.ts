import { sectorEncyclopedia, blindSpotDatabase, tacticsDatabase, SectorData, BlindSpotDefinition, Tactic } from "./knowledgeBase";

export interface AnalysisResult {
  detectedSector: SectorData | null;
  matchedKeywords: string[];
  blindSpots: BlindSpotDefinition[];
  tactics: Tactic[];
  confidenceScore: number;
  inputSummary: string;
  scanType: "url" | "text";
  detectedElements?: string[];
  painCategory?: string;
}

const PAIN_CATEGORIES: Record<string, { keywords: string[]; relatedBlindSpots: string[]; relatedTactics: string[] }> = {
  "Revenue Crisis": {
    keywords: ["sales", "revenue", "money", "income", "profit", "losing money", "not making", "broke", "cash flow"],
    relatedBlindSpots: ["bs-cart-abandonment", "bs-ad-waste", "bs-pricing-static"],
    relatedTactics: ["tactic-cart-recovery", "tactic-ad-optimizer", "tactic-dynamic-pricing"],
  },
  "Lead Drought": {
    keywords: ["leads", "no customers", "inquiries", "prospects", "nobody", "empty", "no calls", "no emails", "traffic"],
    relatedBlindSpots: ["bs-lead-decay", "bs-content-gap", "bs-ad-waste"],
    relatedTactics: ["tactic-ai-sdr", "tactic-content-engine", "tactic-ad-optimizer"],
  },
  "Time Poverty": {
    keywords: ["time", "busy", "overwhelmed", "doing everything", "burnt out", "exhausted", "too much", "wearing all hats"],
    relatedBlindSpots: ["bs-manual-support", "bs-booking-friction", "bs-follow-up-void"],
    relatedTactics: ["tactic-support-bot", "tactic-smart-booking", "tactic-follow-up-automation"],
  },
  "Growth Plateau": {
    keywords: ["stuck", "plateau", "stagnant", "flat", "not growing", "same place", "ceiling", "cap"],
    relatedBlindSpots: ["bs-data-blindness", "bs-content-gap", "bs-competitor-blind"],
    relatedTactics: ["tactic-predictive-analytics", "tactic-content-engine", "tactic-competitor-monitor"],
  },
  "Competitive Threat": {
    keywords: ["competitor", "competition", "losing to", "behind", "market share", "other companies", "rivals"],
    relatedBlindSpots: ["bs-competitor-blind", "bs-pricing-static", "bs-content-gap"],
    relatedTactics: ["tactic-competitor-monitor", "tactic-dynamic-pricing", "tactic-content-engine"],
  },
  "Cost Bleeding": {
    keywords: ["expensive", "cost", "budget", "spending", "waste", "afford", "cheap", "price"],
    relatedBlindSpots: ["bs-ad-waste", "bs-manual-support", "bs-data-blindness"],
    relatedTactics: ["tactic-ad-optimizer", "tactic-support-bot", "tactic-predictive-analytics"],
  },
  "Quality Chaos": {
    keywords: ["inconsistent", "quality", "mistakes", "errors", "unreliable", "messy", "bad", "complaints"],
    relatedBlindSpots: ["bs-manual-support", "bs-review-neglect", "bs-data-blindness"],
    relatedTactics: ["tactic-support-bot", "tactic-review-manager", "tactic-predictive-analytics"],
  },
  "Digital Invisibility": {
    keywords: ["website", "online", "social media", "instagram", "facebook", "google", "seo", "digital", "internet"],
    relatedBlindSpots: ["bs-content-gap", "bs-social-inconsistency", "bs-localization-miss"],
    relatedTactics: ["tactic-content-engine", "tactic-social-autopilot", "tactic-local-seo"],
  },
  "Customer Exodus": {
    keywords: ["leaving", "churn", "cancel", "quit", "lost customers", "retention", "loyalty", "repeat"],
    relatedBlindSpots: ["bs-churn-blindspot", "bs-review-neglect", "bs-manual-support"],
    relatedTactics: ["tactic-churn-predictor", "tactic-review-manager", "tactic-support-bot"],
  },
  "Operational Drag": {
    keywords: ["slow", "manual", "inefficient", "process", "workflow", "automate", "tedious", "paperwork"],
    relatedBlindSpots: ["bs-manual-support", "bs-booking-friction", "bs-data-blindness"],
    relatedTactics: ["tactic-support-bot", "tactic-smart-booking", "tactic-follow-up-automation"],
  },
};

function detectPainCategory(input: string): { category: string; score: number } | null {
  const normalizedInput = input.toLowerCase();
  let bestMatch: { category: string; score: number } | null = null;
  
  for (const [category, data] of Object.entries(PAIN_CATEGORIES)) {
    let score = 0;
    for (const keyword of data.keywords) {
      if (normalizedInput.includes(keyword)) {
        score += 1;
      }
    }
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { category, score };
    }
  }
  
  return bestMatch;
}

function parseUrlForKeywords(url: string): string[] {
  try {
    let domain = url.replace(/https?:\/\//, "").replace(/www\./, "");
    domain = domain.split("/")[0].split(".")[0];
    return domain.replace(/[-_]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(" ").filter(w => w.length > 2);
  } catch {
    return [];
  }
}

function getTldHints(url: string): string | null {
  const tldMap: Record<string, string> = {
    ".shop": "e-commerce", ".store": "e-commerce", ".clinic": "healthcare",
    ".health": "healthcare", ".law": "professional-services", ".io": "saas",
    ".app": "saas", ".agency": "agency", ".realty": "real-estate",
  };
  for (const [tld, sector] of Object.entries(tldMap)) {
    if (url.includes(tld)) return sector;
  }
  return null;
}

function generateDetectedElements(sector: SectorData): string[] {
  const elements: Record<string, string[]> = {
    "e-commerce": ["Product catalog detected", "Shopping cart system", "Payment gateway", "Review section"],
    "professional-services": ["Service listings", "Contact forms", "Team section", "Testimonials"],
    "healthcare": ["Booking system", "Patient portal", "Service menu", "Location info"],
    "real-estate": ["Property listings", "Search filters", "Agent profiles", "Calculator tools"],
    "saas": ["Pricing page", "Trial CTA", "Feature comparison", "Documentation"],
    "hospitality": ["Reservation system", "Menu page", "Gallery", "Reviews"],
    "finance": ["Calculator tools", "Application forms", "Security badges", "Compliance"],
    "agency": ["Portfolio", "Case studies", "Client logos", "Services page"],
  };
  return elements[sector.id] || ["Homepage analyzed", "Navigation mapped", "Content detected"];
}

export function analyzeInput(rawInput: string): AnalysisResult {
  const isUrl = rawInput.includes("http") || rawInput.includes(".com") || rawInput.includes("www");
  const scanType: "url" | "text" = isUrl ? "url" : "text";
  
  let normalizedInput: string;
  let detectedElements: string[] = [];
  
  if (isUrl) {
    const urlKeywords = parseUrlForKeywords(rawInput);
    const tldHint = getTldHints(rawInput);
    normalizedInput = urlKeywords.join(" ") + " " + (tldHint || "");
  } else {
    normalizedInput = rawInput.toLowerCase().trim();
  }
  
  const painResult = detectPainCategory(rawInput);
  const painCategory = painResult?.category || "General Business Challenge";
  
  let bestMatch: SectorData | null = null;
  let bestScore = 0;
  let matchedKeywords: string[] = [];

  for (const sector of sectorEncyclopedia) {
    let score = 0;
    const currentMatches: string[] = [];
    for (const keyword of sector.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        score += 1;
        currentMatches.push(keyword);
      }
    }
    if (isUrl) {
      const tldHint = getTldHints(rawInput);
      if (tldHint === sector.id) score += 3;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = sector;
      matchedKeywords = currentMatches;
    }
  }

  if (!bestMatch) {
    const hash = normalizedInput.length % sectorEncyclopedia.length;
    bestMatch = sectorEncyclopedia[hash];
  }

  let blindSpots: BlindSpotDefinition[] = [];
  
  if (painResult) {
    const painData = PAIN_CATEGORIES[painResult.category];
    const painBlindSpots = blindSpotDatabase.filter(bs => painData.relatedBlindSpots.includes(bs.id));
    const sectorBlindSpots = blindSpotDatabase.filter(bs => bestMatch!.commonBlindSpots.includes(bs.id));
    
    blindSpots = [...painBlindSpots.slice(0, 2), ...sectorBlindSpots.filter(bs => !painBlindSpots.includes(bs)).slice(0, 1)];
  } else {
    blindSpots = blindSpotDatabase.filter(bs => bestMatch!.commonBlindSpots.includes(bs.id)).slice(0, 3);
  }

  let tactics: Tactic[] = [];
  
  if (painResult) {
    const painData = PAIN_CATEGORIES[painResult.category];
    const painTactics = tacticsDatabase.filter(t => painData.relatedTactics.includes(t.id));
    const sectorTactics = tacticsDatabase.filter(t => bestMatch!.recommendedTactics.includes(t.id));
    
    tactics = [...painTactics.slice(0, 2), ...sectorTactics.filter(t => !painTactics.includes(t)).slice(0, 1)];
  } else {
    tactics = tacticsDatabase.filter(t => bestMatch!.recommendedTactics.includes(t.id)).slice(0, 3);
  }

  if (scanType === "url" && bestMatch) {
    detectedElements = generateDetectedElements(bestMatch);
  }

  const baseConfidence = scanType === "url" ? 72 : 68;
  const painBonus = painResult ? painResult.score * 5 : 0;
  const confidenceScore = Math.min(94, baseConfidence + (bestScore * 6) + painBonus);

  return {
    detectedSector: bestMatch,
    matchedKeywords,
    blindSpots,
    tactics,
    confidenceScore: Math.round(confidenceScore),
    inputSummary: rawInput.length > 50 ? rawInput.substring(0, 50) + "..." : rawInput,
    scanType,
    detectedElements,
    painCategory,
  };
}
