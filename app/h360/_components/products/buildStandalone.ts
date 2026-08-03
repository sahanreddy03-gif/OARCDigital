import type { StandaloneProductConfig } from './standaloneProductTypes';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

export type StandaloneExtras = Pick<
  StandaloneProductConfig,
  'stack' | 'signals' | 'progress' | 'compare'
> & {
  doctrine: string;
  metric: { value: string; label: string };
};

export function buildStandalone(
  page: Omit<H360ProductPageConfig, 'flowFooter'>,
  extras: StandaloneExtras,
  live = true,
): StandaloneProductConfig {
  const cmp = page.compare;
  return {
    eyebrow: page.eyebrow,
    h1: page.h1,
    ctaName: page.ctaName,
    live,
    visual: page.visual,
    hero: {
      ownerPain: page.hero.ownerPain,
      guestGain: page.hero.guestGain,
      wedge: page.hero.wedge,
      hook: page.hero.hook,
      doctrine: extras.doctrine,
      metric: extras.metric,
    },
    stack: extras.stack,
    signals: extras.signals,
    progress: extras.progress,
    flow: page.flow,
    compare: {
      title: cmp?.title ?? extras.compare.title,
      subtitle: cmp?.subtitle ?? extras.compare.subtitle,
      brainLine: cmp?.brainLine ?? extras.compare.brainLine,
      badLabel: extras.compare.badLabel,
      goodLabel: extras.compare.goodLabel,
      badNote: extras.compare.badNote,
      goodNote: extras.compare.goodNote,
      badMetric: extras.compare.badMetric,
      goodMetric: extras.compare.goodMetric,
      goodExtra: extras.compare.goodExtra,
      premiumVisual: cmp?.visual ?? extras.compare.premiumVisual,
      customCompare: extras.compare.customCompare,
    },
    expert: {
      title: page.expertTitle,
      subtitle: page.expertSubtitle,
      fails: page.expertFails,
    },
    faqs: page.faqs,
    related: page.related,
  };
}
