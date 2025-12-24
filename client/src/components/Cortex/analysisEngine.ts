import { sectorEncyclopedia, blindSpotDatabase, tacticsDatabase, SectorData, BlindSpotDefinition, Tactic } from "./knowledgeBase";

export interface AnalysisResult {
  detectedSector: SectorData | null;
  matchedKeywords: string[];
  blindSpots: BlindSpotDefinition[];
  tactics: Tactic[];
  confidenceScore: number;
}

export function analyzeInput(rawInput: string): AnalysisResult {
  const normalizedInput = rawInput.toLowerCase().trim();

  let bestMatch: SectorData | null = null;
  let bestScore = 0;
  let matchedKeywords: string[] = [];

  // Find best matching sector
  for (const sector of sectorEncyclopedia) {
    let score = 0;
    const currentMatches: string[] = [];
    for (const keyword of sector.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        score += 1;
        currentMatches.push(keyword);
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = sector;
      matchedKeywords = currentMatches;
    }
  }

  // Default to e-commerce if no match
  if (!bestMatch) {
    bestMatch = sectorEncyclopedia[0];
  }

  // Get blind spots and tactics for the sector
  const blindSpots = blindSpotDatabase.filter(bs => 
    bestMatch!.commonBlindSpots.includes(bs.id)
  );

  const tactics = tacticsDatabase.filter(t => 
    bestMatch!.recommendedTactics.includes(t.id)
  );

  const confidenceScore = Math.min(100, Math.max(65, 50 + bestScore * 15));

  return {
    detectedSector: bestMatch,
    matchedKeywords,
    blindSpots,
    tactics,
    confidenceScore,
  };
}
