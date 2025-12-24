import { sectorEncyclopedia, blindSpotDatabase, tacticsDatabase, SectorData, BlindSpotDefinition, Tactic } from "./knowledgeBase";

export interface AnalysisResult {
  detectedSector: SectorData | null;
  matchedKeywords: string[];
  blindSpots: BlindSpotDefinition[];
  tactics: Tactic[];
  confidenceScore: number;
  inputSummary: string;
}

export function analyzeInput(rawInput: string): AnalysisResult {
  const normalizedInput = rawInput.toLowerCase().trim();
  
  // Track all matches
  let bestMatch: SectorData | null = null;
  let bestScore = 0;
  let matchedKeywords: string[] = [];

  // Score each sector based on keyword matches
  for (const sector of sectorEncyclopedia) {
    let score = 0;
    const currentMatches: string[] = [];
    
    for (const keyword of sector.keywords) {
      const keywordLower = keyword.toLowerCase();
      // Check if input contains keyword (with word boundaries for better matching)
      if (normalizedInput.includes(keywordLower)) {
        score += 1;
        // Bonus points for exact word match
        if (new RegExp(`\\b${keywordLower}\\b`).test(normalizedInput)) {
          score += 0.5;
        }
        currentMatches.push(keyword);
      }
    }
    
    // Update best match
    if (score > bestScore) {
      bestScore = score;
      bestMatch = sector;
      matchedKeywords = currentMatches;
    }
  }

  // If no good match, try to detect from common patterns
  if (bestScore < 1) {
    if (normalizedInput.includes("sell") || normalizedInput.includes("revenue") || normalizedInput.includes("customer")) {
      bestMatch = sectorEncyclopedia.find(s => s.id === "e-commerce") || sectorEncyclopedia[0];
      matchedKeywords = ["sales-related"];
    } else if (normalizedInput.includes("lead") || normalizedInput.includes("client") || normalizedInput.includes("consult")) {
      bestMatch = sectorEncyclopedia.find(s => s.id === "professional-services") || sectorEncyclopedia[1];
      matchedKeywords = ["service-related"];
    } else if (normalizedInput.includes("patient") || normalizedInput.includes("health") || normalizedInput.includes("clinic")) {
      bestMatch = sectorEncyclopedia.find(s => s.id === "healthcare") || sectorEncyclopedia[2];
      matchedKeywords = ["healthcare-related"];
    } else if (normalizedInput.includes("property") || normalizedInput.includes("house") || normalizedInput.includes("rent")) {
      bestMatch = sectorEncyclopedia.find(s => s.id === "real-estate") || sectorEncyclopedia[3];
      matchedKeywords = ["real-estate-related"];
    } else {
      // Default based on input length and content
      const randomIndex = normalizedInput.length % sectorEncyclopedia.length;
      bestMatch = sectorEncyclopedia[randomIndex];
      matchedKeywords = ["general-business"];
    }
  }

  // Get blind spots - select based on input characteristics
  const allBlindSpots = blindSpotDatabase.filter(bs => 
    bestMatch!.commonBlindSpots.includes(bs.id)
  );
  
  // Shuffle and pick 2-3 blind spots based on input
  const shuffledBlindSpots = allBlindSpots.sort(() => 
    (normalizedInput.charCodeAt(0) % 2) - 0.5
  );
  const blindSpots = shuffledBlindSpots.slice(0, Math.min(3, shuffledBlindSpots.length));

  // Get tactics - vary based on input
  const allTactics = tacticsDatabase.filter(t => 
    bestMatch!.recommendedTactics.includes(t.id)
  );
  
  // Pick tactics based on input content
  let tactics = allTactics;
  if (normalizedInput.includes("sales") || normalizedInput.includes("lead")) {
    tactics = allTactics.filter(t => t.keywords.some(k => 
      k.includes("sales") || k.includes("lead") || k.includes("sdr")
    ));
    if (tactics.length === 0) tactics = allTactics;
  } else if (normalizedInput.includes("content") || normalizedInput.includes("marketing")) {
    tactics = allTactics.filter(t => t.keywords.some(k => 
      k.includes("content") || k.includes("marketing") || k.includes("seo")
    ));
    if (tactics.length === 0) tactics = allTactics;
  }

  // Calculate confidence - higher if more keywords matched
  const confidenceScore = Math.min(95, Math.max(60, 55 + (bestScore * 12) + (matchedKeywords.length * 5)));

  // Create a summary of what was detected
  const inputSummary = rawInput.length > 50 
    ? rawInput.substring(0, 50) + "..." 
    : rawInput;

  return {
    detectedSector: bestMatch,
    matchedKeywords,
    blindSpots,
    tactics: tactics.slice(0, 3), // Max 3 tactics
    confidenceScore: Math.round(confidenceScore),
    inputSummary,
  };
}
