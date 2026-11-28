/**
 * Master email template. No dependencies: it returns one HTML string.
 *
 * One layout, swappable parts:
 *   - a Theme (logo, colours, fonts, company details) = the brand
 *   - a list of Blocks (hero, text, steps, cards, band, cta, signoff) = the content
 *
 * Built to email rules, not web rules: tables for layout, inline styles,
 * system fonts for body text, a web font only as an upgrade for headings,
 * Outlook fallbacks, and a dark-mode style block.
 */

export type Theme = {
  brandName: string;
  siteUrl: string;
  /** Short site label shown top right, e.g. "oarcdigital.com". */
  siteLabel: string;
  /** Absolute URL of a PNG logo mark (Outlook cannot show WebP or SVG). */
  logoUrl: string;
  logoSize: number;
  colors: {
    page: string;
    surface: string;
    ink: string;
    muted: string;
    line: string;
    /** Buttons, links and numerals. */
    accent: string;
    accentText: string;
    /** Hero panel. */
    dark: string;
    darkText: string;
    darkMuted: string;
    /** One italic word in a heading on a dark or band panel. */
    highlight: string;
    /** Coloured statement panel. */
    band: string;
    bandText: string;
    bandMuted: string;
  };
  fonts: {
    /** Big headings only. */
    heading: string;
    /** All reading text. Keep this a system sans stack. */
    body: string;
    /** Optional stylesheet for the heading web font (Apple Mail and a few others load it). */
    webFontUrl?: string;
  };
  footer: {
    social: { label: string; url: string }[];
    lines: string[];
    /** Why the reader got this email. */
    reason: string;
  };
};

export type Button = { label: string; url: string };

export type Block =
  | {
      type: "hero";
      heading: string;
      text?: string;
      button?: Button;
      image?: { src: string; alt: string; width: number; height: number };
    }
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "steps"; heading: string; steps: { title: string; text: string }[] }
  | {
      type: "cards";
      heading: string;
      intro?: string;
      cards: { image: string; alt: string; title: string; text: string; url: string }[];
      linkLabel: string;
    }
  | {
      /** Dark showcase panel: picture, heading, text, a row of small pill links, one main link. */
      type: "feature";
      image?: { src: string; alt: string };
      heading: string;
      text: string;
      chips?: Button[];
      note?: string;
      link?: Button;
    }
  | { type: "band"; heading: string; text: string; link?: Button }
  | { type: "cta"; heading: string; text?: string; button: Button; secondary?: Button }
  | { type: "signoff"; lines: string[] };

export type Email = {
  subject: string;
  /** Grey preview line shown next to the subject in the inbox. */
  preheader: string;
  blocks: Block[];
};

export type RenderOptions = {
  /** Values for {{tokens}} in the copy, e.g. { firstName: "Maria" }. */
  vars?: Record<string, string>;
  /** Preview only: apply the dark-mode colours always, to screenshot them. */
  forceDark?: boolean;
};

const WIDTH = 640;
const PAD = 40;
const RADIUS = 28;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Fill {{tokens}}. "{{firstName|there}}" falls back to "there" when the value is missing. */
function fill(value: string, vars: Record<string, string>): string {
  return value.replace(/\{\{(\w+)(?:\|([^}]*))?\}\}/g, (_m, key: string, fallback?: string) => {
    const found = vars[key]?.trim();
    return found ? found : (fallback ?? "");
  });
}

/** Tiny inline markup for copy: **bold**, *italic*, [label](url), and a line break for "\n". */
function inline(value: string, linkStyle: string, emStyle = "font-style:italic;", linkClass = "accent"): string {
  return esc(value)
    .replace(/\n/g, "<br>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a class="${linkClass}" href="$2" style="${linkStyle}">$1</a>`)
    .replace(/\*\*([^*]+)\*\*/g, `<strong style="font-weight:bold;">$1</strong>`)
    .replace(/\*([^*]+)\*/g, `<em style="${emStyle}">$1</em>`);
}

export function renderEmail(theme: Theme, email: Email, options: RenderOptions = {}): string {
  const c = theme.colors;
  const f = theme.fonts;
  const vars = options.vars ?? {};
  const t = (value: string) => fill(value, vars);

  const body = `font-family:${f.body};`;
  const head = `font-family:${f.heading};font-weight:normal;`;
  const link = `color:${c.accent};text-decoration:underline;`;

  /** Pill button that also holds its shape in Outlook (which ignores padding on links). */
  const button = (b: Button, bg: string, fg: string, cls: string) => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;">
  <tr>
    <td class="${cls}" bgcolor="${bg}" style="background-color:${bg};border-radius:999px;">
      <a href="${esc(t(b.url))}" target="_blank" style="${body}display:inline-block;padding:17px 34px;font-size:17px;line-height:20px;font-weight:bold;color:${fg};text-decoration:none;border-radius:999px;mso-padding-alt:0;">
        <!--[if mso]><i style="mso-font-width:240%;mso-text-raise:34px" hidden>&emsp;</i><span style="mso-text-raise:17px;"><![endif]-->${esc(t(b.label))}<!--[if mso]></span><i style="mso-font-width:240%;" hidden>&emsp;&#8203;</i><![endif]-->
      </a>
    </td>
  </tr>
</table>`;

  const section = (inner: string, padding = `44px ${PAD}px 8px`) => `
<tr>
  <td class="px" style="padding:${padding};">${inner}</td>
</tr>`;

  const h2 = (text: string, color = c.ink, cls = "ink") =>
    `<h2 class="h2 ${cls}" style="${head}margin:0 0 14px;font-size:38px;line-height:1.08;letter-spacing:-0.5px;color:${color};">${inline(t(text), link)}</h2>`;

  const p = (text: string, color = c.ink, cls = "ink", size = 17) =>
    `<p class="${cls}" style="${body}margin:0 0 16px;font-size:${size}px;line-height:1.6;color:${color};">${inline(t(text), link)}</p>`;

  const blocks = email.blocks.map((block): string => {
    switch (block.type) {
      case "hero": {
        const em = `font-style:italic;color:${c.highlight};`;
        const image = block.image
          ? `
      <tr>
        <td style="padding:0 12px 12px;">
          <img src="${esc(block.image.src)}" width="${WIDTH - 24}" alt="${esc(block.image.alt)}" style="display:block;width:100%;max-width:${WIDTH - 24}px;height:auto;border:0;border-radius:${RADIUS - 10}px;">
        </td>
      </tr>`
          : "";
        return `
<tr>
  <td class="edge" style="padding:0 12px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="panel-dark" bgcolor="${c.dark}" style="background-color:${c.dark};border-radius:${RADIUS}px;border-collapse:separate;">
      <tr>
        <td class="hero-pad" style="padding:52px 40px 40px;">
          <h1 class="h1" style="${head}margin:0 0 20px;font-size:56px;line-height:1.02;letter-spacing:-1px;color:${c.darkText};">${inline(t(block.heading), link, em)}</h1>
          ${block.text ? `<p style="${body}margin:0 0 28px;font-size:18px;line-height:1.6;color:${c.darkMuted};">${inline(t(block.text), `color:${c.darkText};text-decoration:underline;`, undefined, "")}</p>` : ""}
          ${block.button ? button(block.button, c.darkText, c.dark, "btn-light") : ""}
        </td>
      </tr>${image}
    </table>
  </td>
</tr>`;
      }

      case "text":
        return section(
          `${block.heading ? h2(block.heading) : ""}${block.paragraphs.map((x) => p(x)).join("")}`,
        );

      case "steps": {
        const rows = block.steps
          .map(
            (step, i) => `
    <tr>
      <td width="64" valign="top" class="accent serif" style="${head}width:64px;padding:${i ? 22 : 6}px 0 0;font-size:46px;line-height:1;color:${c.accent};">${i + 1}</td>
      <td valign="top" class="${i ? "rule" : ""}" style="padding:${i ? 22 : 6}px 0 22px;${i ? `border-top:1px solid ${c.line};` : ""}">
        <p class="ink" style="${body}margin:0 0 4px;font-size:18px;line-height:1.4;font-weight:bold;color:${c.ink};">${inline(t(step.title), link)}</p>
        <p class="muted" style="${body}margin:0;font-size:16px;line-height:1.6;color:${c.muted};">${inline(t(step.text), link)}</p>
      </td>
    </tr>`,
          )
          .join("");
        return section(`${h2(block.heading)}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}
  </table>`);
      }

      case "cards": {
        const colWidth = (WIDTH - PAD * 2 - 20) / 2;
        const card = (card: (typeof block.cards)[number]) => `
        <a href="${esc(card.url)}" target="_blank" style="text-decoration:none;display:block;">
          <img src="${esc(card.image)}" width="${colWidth}" alt="${esc(card.alt)}" style="display:block;width:100%;max-width:100%;height:auto;border:0;border-radius:18px;">
        </a>
        <p class="ink serif" style="${head}margin:14px 0 4px;font-size:26px;line-height:1.15;color:${c.ink};">${esc(t(card.title))}</p>
        <p class="muted" style="${body}margin:0 0 8px;font-size:16px;line-height:1.55;color:${c.muted};">${inline(t(card.text), link)}</p>
        <p style="${body}margin:0;font-size:16px;line-height:1.5;font-weight:bold;"><a class="accent" href="${esc(card.url)}" target="_blank" style="color:${c.accent};text-decoration:none;">${esc(block.linkLabel)} &rarr;</a></p>`;

        const rows: string[] = [];
        for (let i = 0; i < block.cards.length; i += 2) {
          const left = block.cards[i];
          const right = block.cards[i + 1];
          rows.push(`
    <tr>
      <td class="col" width="50%" valign="top" style="width:50%;padding:0 10px 30px 0;">${card(left)}
      </td>
      <td class="col" width="50%" valign="top" style="width:50%;padding:0 0 30px 10px;">${right ? card(right) : "&nbsp;"}
      </td>
    </tr>`);
        }
        return section(
          `${h2(block.heading)}${block.intro ? p(block.intro, c.muted, "muted") : ""}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;">${rows.join("")}
  </table>`,
          `44px ${PAD}px 0`,
        );
      }

      case "feature": {
        const em = "font-style:italic;";
        const chips = (block.chips ?? [])
          .map(
            (chip) =>
              `<a href="${esc(chip.url)}" target="_blank" style="${body}display:inline-block;margin:0 8px 10px 0;padding:9px 16px;border:1px solid ${c.darkMuted};border-radius:999px;font-size:15px;line-height:18px;color:${c.darkText};text-decoration:none;white-space:nowrap;">${esc(chip.label)}</a>`,
          )
          .join(" ");
        return `
<tr>
  <td class="edge" style="padding:26px 12px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="panel-dark" bgcolor="${c.dark}" style="background-color:${c.dark};border-radius:${RADIUS}px;border-collapse:separate;">${
      block.image
        ? `
      <tr>
        <td style="padding:12px 12px 0;">
          <img src="${esc(block.image.src)}" width="${WIDTH - 48}" alt="${esc(block.image.alt)}" style="display:block;width:100%;max-width:${WIDTH - 48}px;height:auto;border:0;border-radius:${RADIUS - 10}px;">
        </td>
      </tr>`
        : ""
    }
      <tr>
        <td class="hero-pad" style="padding:36px 40px 40px;">
          <h2 class="h2" style="${head}margin:0 0 14px;font-size:44px;line-height:1.05;letter-spacing:-0.5px;color:${c.darkText};">${inline(t(block.heading), link, em)}</h2>
          <p style="${body}margin:0 0 24px;font-size:17px;line-height:1.6;color:${c.darkMuted};">${inline(t(block.text), `color:${c.darkText};text-decoration:underline;`, undefined, "")}</p>
          ${chips ? `<div style="margin:0 0 14px;">${chips}</div>` : ""}
          ${block.note ? `<p style="${body}margin:0 0 4px;font-size:16px;line-height:1.6;color:${c.darkMuted};">${inline(t(block.note), `color:${c.darkText};text-decoration:underline;`, undefined, "")}</p>` : ""}
          ${block.link ? `<p style="${body}margin:18px 0 0;font-size:16px;line-height:1.5;font-weight:bold;"><a href="${esc(block.link.url)}" target="_blank" style="color:${c.darkText};text-decoration:none;">${esc(block.link.label)} &rarr;</a></p>` : ""}
        </td>
      </tr>
    </table>
  </td>
</tr>`;
      }

      case "band": {
        const em = "font-style:italic;";
        return `
<tr>
  <td class="edge" style="padding:20px 12px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${c.band}" style="background-color:${c.band};border-radius:${RADIUS}px;border-collapse:separate;">
      <tr>
        <td class="hero-pad" style="padding:44px 40px 40px;">
          <h2 class="h2" style="${head}margin:0 0 16px;font-size:40px;line-height:1.08;letter-spacing:-0.5px;color:${c.bandText};">${inline(t(block.heading), link, em)}</h2>
          <p style="${body}margin:0;font-size:17px;line-height:1.6;color:${c.bandMuted};">${inline(t(block.text), `color:${c.bandText};text-decoration:underline;`, undefined, "")}</p>
          ${block.link ? `<p style="${body}margin:20px 0 0;font-size:16px;line-height:1.5;font-weight:bold;"><a href="${esc(block.link.url)}" target="_blank" style="color:${c.bandText};text-decoration:none;">${esc(block.link.label)} &rarr;</a></p>` : ""}
        </td>
      </tr>
    </table>
  </td>
</tr>`;
      }

      case "cta":
        return `
<tr>
  <td class="px" align="center" style="padding:56px ${PAD}px 12px;text-align:center;">
    <h2 class="h2 ink" style="${head}margin:0 0 12px;font-size:44px;line-height:1.05;letter-spacing:-0.5px;color:${c.ink};">${inline(t(block.heading), link)}</h2>
    ${block.text ? `<p class="muted" style="${body}margin:0 auto 26px;max-width:440px;font-size:17px;line-height:1.6;color:${c.muted};">${inline(t(block.text), link)}</p>` : ""}
    <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr><td>${button(block.button, c.accent, c.accentText, "btn")}</td></tr></table>
    ${block.secondary ? `<p style="${body}margin:18px 0 0;font-size:16px;line-height:1.5;"><a class="accent" href="${esc(block.secondary.url)}" target="_blank" style="color:${c.accent};text-decoration:underline;">${esc(block.secondary.label)}</a></p>` : ""}
  </td>
</tr>`;

      case "signoff":
        return section(
          block.lines.map((x) => p(x)).join(""),
          `36px ${PAD}px 0`,
        );
    }
  });

  const social = theme.footer.social
    .map(
      (s) =>
        `<a class="ink" href="${esc(s.url)}" target="_blank" style="color:${c.ink};text-decoration:none;font-weight:bold;white-space:nowrap;">${esc(s.label)}</a>`,
    )
    .join(`<span class="muted" style="color:${c.muted};"> &nbsp;&middot;&nbsp; </span>`);

  const dark = `
      body, .page { background-color:#0B0B0B !important; }
      .ink { color:#F5F3EE !important; }
      .muted { color:#B4B1A9 !important; }
      .accent { color:#8FB0FF !important; }
      .rule { border-top-color:#2B2B2B !important; }
      .foot { border-top-color:#2B2B2B !important; }
      .panel-dark { background-color:#191919 !important; }
      .btn { background-color:#2F5FE0 !important; }
      .btn a { color:#FFFFFF !important; }`;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${esc(t(email.subject))}</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<style>td, p, a, span { font-family: Arial, Helvetica, sans-serif !important; } h1, h2, .serif { font-family: Georgia, serif !important; }</style>
<![endif]-->
${f.webFontUrl ? `<!--[if !mso]><!--><link href="${esc(f.webFontUrl)}" rel="stylesheet"><!--<![endif]-->` : ""}
<style>
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  body { margin:0; padding:0; width:100%; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
  img { -ms-interpolation-mode:bicubic; }
  a { color:${c.accent}; }
  @media only screen and (max-width:620px) {
    .wrap { width:100% !important; }
    .px { padding-left:22px !important; padding-right:22px !important; }
    .edge { padding-left:8px !important; padding-right:8px !important; }
    .hero-pad { padding:38px 24px 30px !important; }
    .h1 { font-size:40px !important; }
    .h2 { font-size:32px !important; }
    .col { display:block !important; width:100% !important; padding-left:0 !important; padding-right:0 !important; }
    .top-link { display:none !important; }
  }
  ${
    options.forceDark
      ? dark
      : `@media (prefers-color-scheme: dark) {${dark}
  }`
  }
</style>
</head>
<body class="page" style="margin:0;padding:0;background-color:${c.page};">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${c.page};opacity:0;">${esc(t(email.preheader))}${"&#847;&zwnj;&nbsp;".repeat(60)}</div>
<table role="presentation" class="page" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${c.page}" style="background-color:${c.page};">
<tr>
<td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="${WIDTH}" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" class="wrap" width="${WIDTH}" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:${WIDTH}px;margin:0 auto;">

<tr>
  <td class="px" style="padding:26px ${PAD}px 22px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="left" valign="middle">
          <a href="${esc(theme.siteUrl)}" target="_blank" style="text-decoration:none;">
            <img src="${esc(theme.logoUrl)}" width="${theme.logoSize}" height="${theme.logoSize}" alt="" style="display:inline-block;vertical-align:middle;border:0;">
            <span class="ink serif" style="${head}display:inline-block;vertical-align:middle;padding-left:8px;font-size:26px;line-height:1;color:${c.ink};">${esc(theme.brandName)}</span>
          </a>
        </td>
        <td class="top-link" align="right" valign="middle" style="${body}font-size:15px;line-height:1;">
          <a class="muted" href="${esc(theme.siteUrl)}" target="_blank" style="color:${c.muted};text-decoration:none;">${esc(theme.siteLabel)}</a>
        </td>
      </tr>
    </table>
  </td>
</tr>
${blocks.join("\n")}

<tr>
  <td class="px" style="padding:48px ${PAD}px 44px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td class="foot" align="center" style="border-top:1px solid ${c.line};padding-top:30px;text-align:center;">
          <p style="${body}margin:0 0 18px;font-size:15px;line-height:2;">${social}</p>
          ${theme.footer.lines.map((line) => `<p class="muted" style="${body}margin:0 0 4px;font-size:14px;line-height:1.6;color:${c.muted};">${inline(line, `color:${c.muted};text-decoration:underline;`, undefined, "muted")}</p>`).join("\n          ")}
          <p class="muted" style="${body}margin:14px 0 0;font-size:13px;line-height:1.6;color:${c.muted};">${inline(t(theme.footer.reason), `color:${c.muted};text-decoration:underline;`, undefined, "muted")}</p>
        </td>
      </tr>
    </table>
  </td>
</tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</body>
</html>
`;
}
