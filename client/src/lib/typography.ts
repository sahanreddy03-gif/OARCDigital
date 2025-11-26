export const typography = {
  display: {
    fontSize: 'clamp(3.5rem, 6vw, 6.5rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    fontWeight: 700,
  },
  'heading-xl': {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    fontWeight: 700,
  },
  'heading-lg': {
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    fontWeight: 600,
  },
  'heading-md': {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    fontWeight: 600,
  },
  'heading-sm': {
    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    fontWeight: 600,
  },
  'body-lg': {
    fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
    lineHeight: 1.6,
    letterSpacing: '0em',
    fontWeight: 400,
  },
  body: {
    fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
    lineHeight: 1.7,
    letterSpacing: '0em',
    fontWeight: 400,
  },
  'body-sm': {
    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
    lineHeight: 1.6,
    letterSpacing: '0em',
    fontWeight: 400,
  },
  caption: {
    fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    fontWeight: 400,
  },
} as const;

export type TypographyKey = keyof typeof typography;

export const typographyCSSVariables = {
  '--font-size-display': typography.display.fontSize,
  '--font-size-heading-xl': typography['heading-xl'].fontSize,
  '--font-size-heading-lg': typography['heading-lg'].fontSize,
  '--font-size-heading-md': typography['heading-md'].fontSize,
  '--font-size-heading-sm': typography['heading-sm'].fontSize,
  '--font-size-body-lg': typography['body-lg'].fontSize,
  '--font-size-body': typography.body.fontSize,
  '--font-size-body-sm': typography['body-sm'].fontSize,
  '--font-size-caption': typography.caption.fontSize,
  '--line-height-display': String(typography.display.lineHeight),
  '--line-height-heading-xl': String(typography['heading-xl'].lineHeight),
  '--line-height-heading-lg': String(typography['heading-lg'].lineHeight),
  '--line-height-heading-md': String(typography['heading-md'].lineHeight),
  '--line-height-heading-sm': String(typography['heading-sm'].lineHeight),
  '--line-height-body-lg': String(typography['body-lg'].lineHeight),
  '--line-height-body': String(typography.body.lineHeight),
  '--line-height-body-sm': String(typography['body-sm'].lineHeight),
  '--line-height-caption': String(typography.caption.lineHeight),
  '--letter-spacing-display': typography.display.letterSpacing,
  '--letter-spacing-heading': '-0.02em',
  '--letter-spacing-body': '0em',
  '--letter-spacing-caption': typography.caption.letterSpacing,
} as const;

export function getTypographyStyles(key: TypographyKey): React.CSSProperties {
  const config = typography[key];
  return {
    fontSize: config.fontSize,
    lineHeight: config.lineHeight,
    letterSpacing: config.letterSpacing,
    fontWeight: config.fontWeight,
  };
}

export function applyTypography(key: TypographyKey): string {
  const config = typography[key];
  return `font-size: ${config.fontSize}; line-height: ${config.lineHeight}; letter-spacing: ${config.letterSpacing}; font-weight: ${config.fontWeight};`;
}
