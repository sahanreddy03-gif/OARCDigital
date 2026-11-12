/**
 * Full case-study body. Only brands listed here use the long page.
 * Numbers come from caseProof. Tiffany's 55% and 50% were given by the owner.
 */

import { CASE_PROOF } from "@/lib/data/premium-work/caseProof";
import { CASE_FULL_OTHERS } from "@/lib/data/premium-work/caseFullOthers";
import { CASE_FULL_SYSTEMS } from "@/lib/data/premium-work/caseFullSystems";

export type FullPicture = {
  src: string;
  alt: string;
  /** poster = show the whole vertical artwork, not a wide crop */
  frame?: "photo" | "poster" | "feed" | "banner";
};

export type FullBlock = {
  title: string;
  body: string[];
  picture?: FullPicture;
  pair?: FullPicture;
  film?: { src: string; poster: string; label: string };
};

export type FullCase = {
  headline?: string[];
  year: string;
  industry: string;
  place: string;
  services: string[];
  summary: string[];
  briefTitle: string;
  brief: string[];
  afterSummary?: FullPicture;
  afterBrief?: FullPicture;
  blocks: FullBlock[];
  grewTitle: string;
  grew: string[];
  afterGrew?: FullPicture;
  faq?: { q: string; a: string }[];
  resultTitle: string;
  resultBody?: string;
  closeTitle: string;
  close: string[];
  moreSlugs: string[];
  groups: { label: string; lines: string[] }[];
};

const tiffany = CASE_PROOF.tiffany;
const line = tiffany.results;

export const CASE_FULL: Record<string, FullCase> = {
  ...CASE_FULL_OTHERS,
  ...CASE_FULL_SYSTEMS,
  tiffany: {
    headline: ["ENGAGEMENT AT 55%.", "SALES UP 50%."],
    year: "2026",
    industry: "Champagne and wine bar",
    place: "Portomaso Marina",
    services: [
      "Social media",
      "Event promotion",
      "Paid campaigns",
      "Promo videos",
      "Website and tracking",
      "Table bookings",
      "Private hire",
    ],
    summary: [
      "Tiffany Lounge is the champagne and wine bar at Portomaso Marina. The account is the social feed, the event calendar, the paid campaigns, and the website. Paid campaigns took engagement to 55%. Tracking on the website came with a 50% increase in sales.",
    ],
    briefTitle: "The whole week. Not one poster.",
    brief: [
      "Social had to stay on. Every night had to be named, designed, and pushed. Paid spend had to sit on those same nights. The website had to take the booking and show which visits became sales.",
    ],
    afterSummary: {
      src: "/attached_assets/premium-work/client-media/tiffany-party-atmosphere.jpg",
      alt: "Guests with champagne at a Tiffany Lounge night.",
    },
    afterBrief: {
      src: "/attached_assets/premium-work/client-media/tiffany-champagne-toast.jpg",
      alt: "A champagne toast at Tiffany Lounge.",
    },
    blocks: [
      {
        title: "The feed, every week.",
        body: [
          "The social is the room, posted. The performer, the pour, the crowd. Every week the next event goes up, and the post goes straight to the reservation page. Those posts brought 180 more people there. Table bookings from Instagram grew 24%.",
        ],
        picture: {
          src: "/attached_assets/premium-work/client-media/tiffany-performer.jpg",
          alt: "A live performer at Tiffany Lounge, used in the social posts.",
        },
        film: {
          src: "/attached_assets/premium-work/client-media/tiffany-film.mp4",
          poster: "/attached_assets/premium-work/client-media/tiffany-performer.jpg",
          label: "Promo film for Tiffany Lounge social.",
        },
      },
      {
        title: "The nights, named and pushed.",
        body: [
          "Friday Noir. House of Saturday. The Wednesday DJ. Each night is a poster, a post, and a listing on the site. Private hire sits beside the calendar. Private-event enquiries grew 30%.",
        ],
        picture: {
          src: "/attached_assets/premium-work/client-media/tiffany-friday-noir.jpg",
          alt: "Friday Noir poster for Tiffany Lounge.",
          frame: "poster",
        },
        pair: {
          src: "/attached_assets/premium-work/client-media/tiffany-saturday.jpg",
          alt: "House of Saturday poster for Tiffany Lounge, 22 August.",
          frame: "poster",
        },
      },
      {
        title: "Paid, on those nights.",
        body: [
          "The campaigns use the films and the posters already in the feed. Engagement from that spend is 55%. Local event ads grew midweek bookings 28%.",
        ],
        picture: {
          src: "/attached_assets/premium-work/client-media/tiffany-atmosphere.jpg",
          alt: "A guest on the floor at Tiffany Lounge, from the night the ads promote.",
        },
      },
      {
        title: "From the visit to the sale.",
        body: [
          "Table bookings, events, and private hire live on the website. Tracking on that site came with a 50% increase in sales.",
        ],
        picture: {
          src: "/attached_assets/premium-work/client-media/tiffany-hero.jpg",
          alt: "A guest with a cocktail at Tiffany Lounge.",
        },
      },
    ],
    grewTitle: "One account. Start to finish.",
    grew: [
      "The films feed the posts. The posts feed the ads. The ads and the site feed the booking. Social, posters, paid, and the website stayed on one account.",
    ],
    afterGrew: {
      src: "/attached_assets/premium-work/client-media/tiffany-wednesday.jpg",
      alt: "Wednesday DJ poster for Tiffany Lounge, Don Petrisky from 11pm.",
      frame: "poster",
    },
    faq: [
      { q: "What does OARC Digital do for Tiffany Lounge?", a: "OARC Digital runs the social media, promotes the events, runs the paid campaigns, and built the website with tracking. Table bookings, events and private hire sit on that site." },
      { q: "What engagement did the Tiffany Lounge paid campaigns reach?", a: "Paid campaigns took engagement to 55%. Local event ads grew midweek bookings by 28%. Table bookings from Instagram grew 24%." },
      { q: "What happened to sales after the Tiffany Lounge website tracking?", a: "Tracking on the website came with a 50% increase in sales. Weekly event posts brought 180 more people to the reservation page." },
    ],
    resultTitle: "Engagement at 55%. Sales up 50%.",
    resultBody: "Paid campaigns took engagement to 55%. Tracking on the website came with a 50% increase in sales. Table bookings from Instagram grew 24%.",
    closeTitle: "Four jobs. One account.",
    close: [
      "Social, the events, the paid campaigns, and the website. Tiffany Lounge is a client of OARC Digital. The numbers on this page come from the work on this account.",
    ],
    moreSlugs: ["portomaso-casino", "massive-fan-zone", "spinola-gin-fest"],
    groups: [
      { label: "Social media", lines: [line[0], line[2]] },
      { label: "Visits", lines: [line[3]] },
      { label: "Bookings and sales", lines: [line[1], line[4], line[5]] },
    ],
  },
};

export function getCaseFull(slug: string): FullCase | undefined {
  return CASE_FULL[slug];
}
