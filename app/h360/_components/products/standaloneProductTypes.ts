import type { ProductVisualId } from '../product-cards/productCardsData';
import type { PremiumCompareId } from './premiumCompareVisuals';

export type StackPreviewKind =
  | 'maps-rank'
  | 'aeo-answer'
  | 'ai-chat'
  | 'llm-file'
  | 'article'
  | 'gbp-post'
  | 'review-qr'
  | 'review-climb'
  | 'social-post'
  | 'reels'
  | 'ad-boost'
  | 'website-live'
  | 'schema'
  | 'menu-sync'
  | 'kitchen-ticket'
  | 'owner-dash'
  | 'connected'
  | 'booking-slot'
  | 'waitlist'
  | 'confirm'
  | 'order-qr'
  | 'kitchen-print'
  | 'margin'
  | 'pay-qr'
  | 'split-bill'
  | 'tips'
  | 'stamp-wallet'
  | 'auto-stamp'
  | 'reward'
  | 'pass-add'
  | 'visit-ping'
  | 'wa-segment'
  | 'wa-offer'
  | 'wa-reply'
  | 'sms-winback'
  | 'sms-open'
  | 'event-rsvp'
  | 'reminder'
  | 'soldout'
  | 'daily-num'
  | 'trend'
  | 'forecast'
  | 'dish-cost'
  | 'margin-bar'
  | 'stock-check'
  | 'order-list'
  | 'roster-wa'
  | 'shift-yes'
  | 'floor-green'
  | 'seat-tap'
  | 'voice-call'
  | 'voice-book'
  | 'voice-alert'
  | 'voice-dash'
  | 'voice-learn';

export type StandaloneProductConfig = {
  eyebrow: string;
  h1: string;
  ctaName: string;
  live?: boolean;
  visual: ProductVisualId;
  hero: {
    ownerPain: string;
    guestGain: string;
    wedge: string;
    hook?: string;
    doctrine: string;
    metric: { value: string; label: string };
  };
  stack: {
    title: string;
    subtitle: string;
    items: readonly {
      id: string;
      label: string;
      short: string;
      detail: string;
      preview: StackPreviewKind;
    }[];
  };
  signals: {
    title: string;
    subtitle: string;
    boardLabel: string;
    items: readonly { term: string; vol: number; trend: '↑' | '→' | '↓' }[];
    ctaLine: string;
  };
  progress: {
    title: string;
    subtitle: string;
    scoreLabel: string;
    rankLabel: string;
    weeks: readonly {
      week: number;
      score: number;
      rank: number;
      label: string;
      highlight?: string;
    }[];
  };
  flow: {
    title: string;
    subtitle: string;
    nodes: readonly { id: string; label: string; detail: string }[];
  };
  compare: {
    title: string;
    subtitle: string;
    brainLine: string;
    badLabel: string;
    goodLabel: string;
    badNote: string;
    goodNote: string;
    badMetric: string;
    goodMetric: string;
    goodExtra?: { left: string; leftLabel: string; right: string; rightLabel: string };
    premiumVisual?: PremiumCompareId;
    customCompare?: 'order-margin';
  };
  expert: {
    title: string;
    subtitle: string;
    fails: readonly { name: string; fail: string }[];
  };
  faqs: readonly { question: string; answer: string }[];
  related: readonly { label: string; href: string }[];
};
