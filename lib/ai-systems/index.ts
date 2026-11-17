import type { AiSystemContent } from "./types";
import { realEstate } from "./real-estate";
import { lawFirms } from "./law-firms";
import { clinics } from "./clinics";
import { hotels } from "./hotels";
import { restaurants } from "./restaurants";
import { tourism } from "./tourism";
import { education } from "./education";
import { igamingOperators } from "./igaming-operators";
import { igamingSuppliers } from "./igaming-suppliers";
import { igamingAffiliates } from "./igaming-affiliates";
import { businessAdmin } from "./business-admin";

// Order here is the order on the /ai hub page. "Any business" stays last.
export const AI_SYSTEMS: AiSystemContent[] = [
  realEstate, lawFirms, clinics, hotels, restaurants, tourism, education,
  igamingOperators, igamingSuppliers, igamingAffiliates, businessAdmin,
];

export const AI_SYSTEM_SLUGS = AI_SYSTEMS.map((x) => x.slug);

export function getAiSystem(slug: string): AiSystemContent | undefined {
  return AI_SYSTEMS.find((x) => x.slug === slug);
}

/** The industry name inside a sentence: "Law firms" -> "law firms", but "iGaming operators" stays as it is. */
export function nameInSentence(name: string): string {
  return /^[A-Z][a-z]/.test(name) ? name[0].toLowerCase() + name.slice(1) : name;
}
