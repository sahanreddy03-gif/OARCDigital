/**
 * Editorial treatment for the restored OARC Original Studies.
 * These are service lenses for an illustrative record, not claims of client delivery or performance.
 */
export type OriginalTreatment = {
  serviceTag: string;
  cardLine: string;
  mediaRole: string;
};

export const ORIGINAL_TREATMENTS: Record<string, OriginalTreatment> = {
  "meridian-retail-response": {
    serviceTag: "AI SUPPORT / HUMAN HANDOFF",
    cardLine: "A response-content and routing model for keeping the question, context, and accountable next step together.",
    mediaRole: "Workflow artefact / service logic",
  },
  "cobalt-decision-thread": {
    serviceTag: "STRATEGY / CONTENT SYSTEM",
    cardLine: "A strategy-to-execution content system that keeps the reason behind a decision visible after the workshop ends.",
    mediaRole: "Decision map / planning artefact",
  },
  "skyline-first-response": {
    serviceTag: "LEAD EXPERIENCE / CONVERSATION DESIGN",
    cardLine: "A first-response experience for turning an early property question into a better-prepared human conversation.",
    mediaRole: "Journey map / enquiry experience",
  },
  "vela-signal-pipeline": {
    serviceTag: "PAID CREATIVE / SALES ENABLEMENT",
    cardLine: "A signal-to-conversation model that separates curiosity from readiness before a sales message is written.",
    mediaRole: "Signal model / revenue-operations artefact",
  },
  "ashford-in-real-life": {
    serviceTag: "PRODUCT CONTENT / SHORT-FORM VIDEO",
    cardLine: "A real-life content direction that makes a product useful on camera before turning the moment into a repeatable campaign asset.",
    mediaRole: "Lifestyle still / proof-moment direction",
  },
  "kinetic-member-energy": {
    serviceTag: "SOCIAL CONTENT / COMMUNITY ENGAGEMENT",
    cardLine: "A consent-led member-content rhythm that treats participation as the story, not as background for a generic post.",
    mediaRole: "Community capture / participation cue",
  },
  "maison-verre-discovery": {
    serviceTag: "CAMPAIGN CONCEPT / SENSORY FILM",
    cardLine: "A discovery-led launch sequence built from sensory clues, cultural cues, and a visual reason to stop scrolling.",
    mediaRole: "Campaign still / sensory direction",
  },
  "botanic-muse-field-notes": {
    serviceTag: "EDITORIAL SOCIAL / COMMUNITY NOTES",
    cardLine: "A field-note content system that preserves the detail of a beauty experience without turning people into advertising props.",
    mediaRole: "Editorial still / field-note archive",
  },
  "vertex-after-launch": {
    serviceTag: "GAMING CONTENT / RETENTION MOMENT",
    cardLine: "A post-launch content rhythm built around challenge, recognition, and a reason for the player to return.",
    mediaRole: "Game-world still / return-loop direction",
  },
  "arena-one-regional-signal": {
    serviceTag: "EVENT CONTENT / REGIONAL ENGAGEMENT",
    cardLine: "An esports event-content system that lets regional language and local energy travel without sanding off the scene’s identity.",
    mediaRole: "Event still / audience-energy direction",
  },
  "wellbridge-clear-path": {
    serviceTag: "SERVICE DESIGN / EXPLAINER CONTENT",
    cardLine: "A plain-language service journey that makes the next administrative step clearer without making a consequential judgment for anyone.",
    mediaRole: "Service scene / orientation cue",
  },
  "aurum-document-trail": {
    serviceTag: "DOCUMENT AUTOMATION / EXPLAINER SYSTEM",
    cardLine: "A document workflow for extracting, checking, and escalating information while keeping the source trail visible.",
    mediaRole: "Document still / validation artefact",
  },
  "hearth-test-kitchen": {
    serviceTag: "CREATIVE TESTING / CAMPAIGN ITERATION",
    cardLine: "A creative-testing loop that turns subjective campaign feedback into a sharper next decision instead of another opinion pile.",
    mediaRole: "Creative board / concept-testing scene",
  },
  "fanline-live-ritual": {
    serviceTag: "LIVE CONTENT / AUDIENCE ENGAGEMENT",
    cardLine: "A live-audience content rhythm that helps a viewer find context, shared ritual, and a meaningful way back to the event.",
    mediaRole: "Event audience still / live-context direction",
  },
  "crownline-fresh-signal": {
    serviceTag: "OPERATIONS / DEMAND VISIBILITY",
    cardLine: "An operations visibility model for making demand shifts, perishable stock, and exceptions easier to discuss before they become surprises.",
    mediaRole: "Operations still / exception cue",
  },
  "bluebridge-candidate-welcome": {
    serviceTag: "TALENT EXPERIENCE / RESPONSE CONTENT",
    cardLine: "A candidate-response experience that treats the first message as part of the relationship, not as an automated status placeholder.",
    mediaRole: "Response scene / service-experience direction",
  },
  "northforge-adoption-ladder": {
    serviceTag: "AI ADOPTION / GOVERNANCE CONTENT",
    cardLine: "An AI adoption model for moving from scattered experiments to a reviewable practice with owners, limits, and a reason to continue.",
    mediaRole: "Governance artefact / adoption model",
  },
  "belgrave-client-time": {
    serviceTag: "PREMIUM SERVICE / WORKFLOW DESIGN",
    cardLine: "A discreet operations model that moves invisible back-office work away from the moments where client attention matters most.",
    mediaRole: "Premium-service still / quiet operations cue",
  },
  "live-context": {
    serviceTag: "MOBILE PRODUCT / LIVE EXPERIENCE",
    cardLine: "A mobile reading-order model for keeping live match context useful without making the interface raise its voice.",
    mediaRole: "Mobile product still / live-context direction",
  },
};
