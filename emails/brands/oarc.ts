import type { Theme } from "../template";

/** Where the email pictures live once the site is deployed. */
export const OARC_ASSETS = "https://oarcdigital.com/email";

const SITE = "https://oarcdigital.com";

/** OARC Digital brand (design system v3: ink, paper, cobalt, one yellow). */
export function oarcTheme(assetBase: string = OARC_ASSETS): Theme {
  return {
    brandName: "OARC Digital",
    siteUrl: SITE,
    siteLabel: "oarcdigital.com",
    logoUrl: `${assetBase}/oarc-mark.png`,
    logoSize: 40,
    colors: {
      page: "#F5F3EE",
      surface: "#FFFFFF",
      ink: "#0E0E0E",
      muted: "#55524C",
      line: "#E3DFD6",
      accent: "#0035AD",
      accentText: "#FFFFFF",
      dark: "#0E0E0E",
      darkText: "#F5F3EE",
      darkMuted: "#C9C6BE",
      highlight: "#F9FF84",
      band: "#0035AD",
      bandText: "#FFFFFF",
      bandMuted: "#DCE5FF",
    },
    fonts: {
      heading: "'Instrument Serif', Georgia, 'Times New Roman', serif",
      body: "Arial, Helvetica, sans-serif",
      webFontUrl: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
    },
    footer: {
      social: [
        { label: "Instagram", url: "https://www.instagram.com/oarcdigital/" },
        { label: "LinkedIn", url: "https://www.linkedin.com/company/oarc-digital" },
        { label: "Facebook", url: "https://www.facebook.com/923192157540623" },
        { label: "TikTok", url: "https://www.tiktok.com/@oarc.digital" },
        { label: "YouTube", url: "https://www.youtube.com/@oarcdigital" },
      ],
      lines: [
        "OARC Digital, Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta",
        "[hello@oarcdigital.com](mailto:hello@oarcdigital.com) · [+356 7971 1799](tel:+35679711799)",
      ],
      reason:
        "You got this email because you sent us a message on oarcdigital.com. [Privacy policy](https://oarcdigital.com/legal/privacy-policy)",
    },
  };
}
