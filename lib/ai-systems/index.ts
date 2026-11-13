import type { AiSystemContent } from "./types";
import { realEstate } from "./real-estate";
import { lawFirms } from "./law-firms";

// Order here is the order on the /ai hub page.
export const AI_SYSTEMS: AiSystemContent[] = [realEstate, lawFirms];

export const AI_SYSTEM_SLUGS = AI_SYSTEMS.map((x) => x.slug);

export function getAiSystem(slug: string): AiSystemContent | undefined {
  return AI_SYSTEMS.find((x) => x.slug === slug);
}
