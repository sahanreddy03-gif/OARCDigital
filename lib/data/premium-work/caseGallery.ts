/**
 * Real content OARC produced for a client, shown as a feed-style grid.
 *
 * Every entry must point at an approved client asset that already lives in
 * `public/attached_assets/premium-work/client-media/`. Never add a stock or
 * generated photograph here: this grid claims "we made this for them", so an
 * invented image would be a false claim. Clients with fewer than three
 * approved assets are left out until the owner supplies more.
 */

export type CaseGallery = {
  /** Shown above the grid, e.g. "Content we made for Tiffany Lounge". */
  heading: string;
  /** What the grid is, in one plain line. */
  note: string;
  items: { src: string; alt: string }[];
};

const MEDIA = "/attached_assets/premium-work/client-media";

export const CASE_GALLERY: Record<string, CaseGallery> = {
  tiffany: {
    heading: "Content we made for Tiffany Lounge",
    note: "Promo stills from the Portomaso Marina shoots, used across the venue's social posts and website.",
    items: [
      { src: `${MEDIA}/tiffany-hero.jpg`, alt: "Tiffany Lounge interior, shot for the venue's promo content" },
      { src: `${MEDIA}/tiffany-champagne-toast.jpg`, alt: "Champagne toast at Tiffany Lounge, from the OARC drinks shoot" },
      { src: `${MEDIA}/tiffany-performer.jpg`, alt: "Live performer at Tiffany Lounge, shot for event posts" },
      { src: `${MEDIA}/tiffany-atmosphere.jpg`, alt: "Evening atmosphere at Tiffany Lounge" },
      { src: `${MEDIA}/tiffany-party-atmosphere.jpg`, alt: "Guests at a Tiffany Lounge event night" },
      { src: `/attached_assets/premium-work/tiffany-mixology.jpeg`, alt: "Cocktail detail shot made for Tiffany Lounge" },
    ],
  },
  "portomaso-casino": {
    heading: "Content we made for Portomaso Casino",
    note: "Venue photography of the entrance, floor and lounge, shot on site at Portomaso Marina.",
    items: [
      { src: `${MEDIA}/portomaso-entrance-hero.jpg`, alt: "Portomaso Casino entrance, shot for the venue's content" },
      { src: `${MEDIA}/portomaso-casino-floor.jpg`, alt: "Portomaso Casino gaming floor" },
      { src: `${MEDIA}/portomaso-vip-lounge.jpg`, alt: "Portomaso Casino VIP lounge" },
      { src: `${MEDIA}/portomaso-casino-detail.jpg`, alt: "Interior detail at Portomaso Casino" },
      { src: `${MEDIA}/portomaso-entrance.jpg`, alt: "Portomaso Casino entrance from the marina side" },
    ],
  },
  "massive-fan-zone": {
    heading: "Content we made for the Spinola Bay Fan Zone",
    note: "Match-night photography and fixture posts from the World Cup Fan Zone campaign.",
    items: [
      { src: `${MEDIA}/spinola-fan-zone-crowd.jpg`, alt: "Crowd at the Spinola Bay Fan Zone on a match night" },
      { src: `${MEDIA}/spinola-fan-zone-waterfront.jpg`, alt: "The Spinola Bay Fan Zone waterfront setting" },
      { src: `${MEDIA}/spinola-fan-zone-signage.jpg`, alt: "Fan Zone signage produced for the campaign" },
      { src: `${MEDIA}/spinola-fan-zone-fixture-01.jpg`, alt: "Fixture post made for a Fan Zone match night" },
      { src: `${MEDIA}/spinola-fan-zone-fixture-02.jpg`, alt: "Fixture post made for a Fan Zone match night" },
      { src: `${MEDIA}/spinola-fan-zone-fixture-03.jpg`, alt: "Fixture post made for a Fan Zone match night" },
    ],
  },
  "spinola-gin-fest": {
    heading: "Content we made for Spinola Gin Fest",
    note: "Festival photography and the campaign poster from the two-night 2026 edition.",
    items: [
      { src: `${MEDIA}/spinola-gin-fest-crowd.jpg`, alt: "Crowd at Spinola Gin Fest" },
      { src: `${MEDIA}/spinola-gin-fest-bar.jpg`, alt: "Gin bar serve at Spinola Gin Fest" },
      { src: `${MEDIA}/spinola-gin-fest-poster.jpg`, alt: "Spinola Gin Fest campaign poster produced by OARC" },
    ],
  },
  "calle-bistro": {
    heading: "Content we made for Calle Bistro",
    note: "Dish photography used across Calle Bistro’s social posts, ads and website.",
    items: [
      { src: `${MEDIA}/calle-bistro-01.jpg`, alt: "A seafood dish at Calle Bistro (1)" },
      { src: `${MEDIA}/calle-bistro-02.jpg`, alt: "A seafood dish at Calle Bistro (2)" },
      { src: `${MEDIA}/calle-bistro-03.jpg`, alt: "A seafood dish at Calle Bistro (3)" },
      { src: `${MEDIA}/calle-bistro-04.jpg`, alt: "A seafood dish at Calle Bistro (4)" },
      { src: `${MEDIA}/calle-bistro-05.jpg`, alt: "A seafood dish at Calle Bistro (5)" },
      { src: `${MEDIA}/calle-bistro-06.jpg`, alt: "A seafood dish at Calle Bistro (6)" },
    ],
  },
  "kreta": {
    heading: "Content we made for Kreta",
    note: "Food photography used across Kreta’s Google listing, social posts and menu.",
    items: [
      { src: `${MEDIA}/kreta-01.jpg`, alt: "A dish at Kreta, Paceville (1)" },
      { src: `${MEDIA}/kreta-02.jpg`, alt: "A dish at Kreta, Paceville (2)" },
      { src: `${MEDIA}/kreta-03.jpg`, alt: "A dish at Kreta, Paceville (3)" },
      { src: `${MEDIA}/kreta-04.jpg`, alt: "A dish at Kreta, Paceville (4)" },
      { src: `${MEDIA}/kreta-05.jpg`, alt: "A dish at Kreta, Paceville (5)" },
    ],
  },
  "palino": {
    heading: "Content we made for Palino",
    note: "The shopfront design and food photography from the Palino shoot.",
    items: [
      { src: `${MEDIA}/palino-01.jpg`, alt: "Palino, from the brand and food shoot (1)" },
      { src: `${MEDIA}/palino-02.jpg`, alt: "Palino, from the brand and food shoot (2)" },
      { src: `${MEDIA}/palino-03.jpg`, alt: "Palino, from the brand and food shoot (3)" },
      { src: `${MEDIA}/palino-04.jpg`, alt: "Palino, from the brand and food shoot (4)" },
      { src: `${MEDIA}/palino-05.jpg`, alt: "Palino, from the brand and food shoot (5)" },
      { src: `${MEDIA}/palino-06.jpg`, alt: "Palino, from the brand and food shoot (6)" },
    ],
  },
  "mcw-cbd": {
    heading: "Content we made for MCW",
    note: "Product visuals made for MCW’s social posts.",
    items: [
      { src: `${MEDIA}/mcw-cbd-01.jpg`, alt: "A product visual made for MCW (1)" },
      { src: `${MEDIA}/mcw-cbd-02.jpg`, alt: "A product visual made for MCW (2)" },
      { src: `${MEDIA}/mcw-cbd-03.jpg`, alt: "A product visual made for MCW (3)" },
      { src: `${MEDIA}/mcw-cbd-04.jpg`, alt: "A product visual made for MCW (4)" },
    ],
  },
  "drink-n-more": {
    heading: "Campaign visuals for Drink N More",
    note: "Made by OARC Digital.",
    items: [
      { src: `${MEDIA}/drink-n-more-02.jpg`, alt: "Drink N More campaign visual (2)" },
      { src: `${MEDIA}/drink-n-more-03.jpg`, alt: "Drink N More campaign visual (3)" },
      { src: `${MEDIA}/drink-n-more-04.jpg`, alt: "Drink N More campaign visual (4)" },
      { src: `${MEDIA}/drink-n-more-05.jpg`, alt: "Drink N More campaign visual (5)" },
    ],
  },
  "ricky-jr-burger": {
    heading: "Campaign visuals for Ricky Jr",
    note: "Made by OARC Digital.",
    items: [
      { src: `${MEDIA}/ricky-jr-burger-01.jpg`, alt: "Ricky Jr campaign visual (1)" },
      { src: `${MEDIA}/ricky-jr-burger-02.jpg`, alt: "Ricky Jr campaign visual (2)" },
      { src: `${MEDIA}/ricky-jr-burger-03.jpg`, alt: "Ricky Jr campaign visual (3)" },
      { src: `${MEDIA}/ricky-jr-burger-04.jpg`, alt: "Ricky Jr campaign visual (4)" },
    ],
  },
  "louisiana-mama": {
    heading: "Campaign visuals for Louisiana Mama",
    note: "Made by OARC Digital.",
    items: [
      { src: `${MEDIA}/louisiana-mama-01.jpg`, alt: "Louisiana Mama campaign visual (1)" },
      { src: `${MEDIA}/louisiana-mama-02.jpg`, alt: "Louisiana Mama campaign visual (2)" },
      { src: `${MEDIA}/louisiana-mama-03.jpg`, alt: "Louisiana Mama campaign visual (3)" },
      { src: `${MEDIA}/louisiana-mama-04.jpg`, alt: "Louisiana Mama campaign visual (4)" },
    ],
  },
};

export function getCaseGallery(slug: string): CaseGallery | undefined {
  const gallery = CASE_GALLERY[slug];
  if (!gallery || gallery.items.length < 3) return undefined;
  return gallery;
}

/**
 * A designed graphic that draws the numbers standing directly above it.
 *
 * This is illustration, not evidence: it may only restate figures already
 * published in `caseProof.ts`. It must never imitate a screenshot of a real
 * interface, because a reader would take that as proof rather than drawing.
 */
export type CaseGraphic = { src: string; alt: string; caption: string };

export const CASE_GRAPHIC: Record<string, CaseGraphic> = {
};

export function getCaseGraphic(slug: string): CaseGraphic | undefined {
  return CASE_GRAPHIC[slug];
}
