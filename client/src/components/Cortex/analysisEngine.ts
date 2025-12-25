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
}

function parseUrlForKeywords(url: string): string[] {
  try {
    let domain = url.replace(/https?:\/\//, "").replace(/www\./, "");
    domain = domain.split("/")[0];
    domain = domain.split(".")[0];
    
    const words = domain
      .replace(/[-_]/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .split(" ")
      .filter(w => w.length > 2);
    
    return words;
  } catch {
    return [];
  }
}

function getTldHints(url: string): string | null {
  const tldMap: Record<string, string> = {
    ".shop": "e-commerce",
    ".store": "e-commerce",
    ".clinic": "healthcare",
    ".health": "healthcare",
    ".dental": "healthcare",
    ".law": "professional-services",
    ".legal": "professional-services",
    ".consulting": "professional-services",
    ".realty": "real-estate",
    ".property": "real-estate",
    ".restaurant": "hospitality",
    ".hotel": "hospitality",
    ".io": "saas",
    ".app": "saas",
    ".agency": "agency",
    ".design": "agency",
  };
  
  for (const [tld, sector] of Object.entries(tldMap)) {
    if (url.includes(tld)) return sector;
  }
  return null;
}

function generateDetectedElements(sector: SectorData): string[] {
  const elements: Record<string, string[]> = {
    "e-commerce": ["Product catalog detected", "Shopping cart system found", "Payment gateway integration", "Customer review section"],
    "professional-services": ["Service listings detected", "Contact form found", "Team/About section", "Testimonials page"],
    "healthcare": ["Appointment booking system", "Patient portal detected", "Service menu found", "Location/Hours section"],
    "real-estate": ["Property listings detected", "Search filters found", "Agent profiles section", "Mortgage calculator"],
    "saas": ["Pricing page detected", "Free trial CTA found", "Feature comparison section", "Documentation/API"],
    "hospitality": ["Reservation system detected", "Menu/Services page", "Gallery section found", "Reviews integration"],
    "finance": ["Calculator tools detected", "Application forms found", "Security badges", "Compliance pages"],
    "agency": ["Portfolio section detected", "Case studies found", "Client logos section", "Services breakdown"],
  };
  
  return elements[sector.id] || ["Homepage analyzed", "Navigation structure mapped", "Content sections detected"];
}

export function analyzeInput(rawInput: string): AnalysisResult {
  const isUrl = rawInput.includes("http") || rawInput.includes(".com") || rawInput.includes(".co") || rawInput.includes("www");
  
  let normalizedInput: string;
  let scanType: "url" | "text" = "text";
  let detectedElements: string[] = [];
  
  if (isUrl) {
    scanType = "url";
    const urlKeywords = parseUrlForKeywords(rawInput);
    const tldHint = getTldHints(rawInput);
    
    normalizedInput = urlKeywords.join(" ") + " " + (tldHint || "");
  } else {
    normalizedInput = rawInput.toLowerCase().trim();
  }
  
  let bestMatch: SectorData | null = null;
  let bestScore = 0;
  let matchedKeywords: string[] = [];

  for (const sector of sectorEncyclopedia) {
    let score = 0;
    const currentMatches: string[] = [];
    
    for (const keyword of sector.keywords) {
      const keywordLower = keyword.toLowerCase();
      if (normalizedInput.includes(keywordLower)) {
        score += 1;
        currentMatches.push(keyword);
      }
    }
    
    if (isUrl) {
      const tldHint = getTldHints(rawInput);
      if (tldHint === sector.id) {
        score += 3;
        currentMatches.push("domain-indicator");
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = sector;
      matchedKeywords = currentMatches;
    }
  }

  if (!bestMatch || bestScore < 1) {
    if (isUrl) {
      const hash = rawInput.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
      bestMatch = sectorEncyclopedia[hash % sectorEncyclopedia.length];
      matchedKeywords = ["domain-analysis"];
    } else {
      if (normalizedInput.includes("sell") || normalizedInput.includes("revenue")) {
        bestMatch = sectorEncyclopedia.find(s => s.id === "e-commerce")!;
      } else if (normalizedInput.includes("client") || normalizedInput.includes("lead")) {
        bestMatch = sectorEncyclopedia.find(s => s.id === "professional-services")!;
      } else {
        const hash = normalizedInput.length % sectorEncyclopedia.length;
        bestMatch = sectorEncyclopedia[hash];
      }
      matchedKeywords = ["context-analysis"];
    }
  }

  if (scanType === "url" && bestMatch) {
    detectedElements = generateDetectedElements(bestMatch);
  }

  const blindSpots = blindSpotDatabase
    .filter(bs => bestMatch!.commonBlindSpots.includes(bs.id))
    .slice(0, 3);

  const tactics = tacticsDatabase
    .filter(t => bestMatch!.recommendedTactics.includes(t.id))
    .slice(0, 3);

  const baseConfidence = scanType === "url" ? 72 : 65;
  const confidenceScore = Math.min(94, baseConfidence + (bestScore * 8));

  return {
    detectedSector: bestMatch,
    matchedKeywords,
    blindSpots,
    tactics,
    confidenceScore: Math.round(confidenceScore),
    inputSummary: rawInput.length > 50 ? rawInput.substring(0, 50) + "..." : rawInput,
    scanType,
    detectedElements,
  };
}
