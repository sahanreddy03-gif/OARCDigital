// The site's own font files (app/fonts) hold basic Latin only. They have no ċ ġ ħ ż, so on a
// Maltese page those four letters would be drawn in a system font (Arial, Times) in the
// middle of a word. This points the site's font variables, INSIDE Maltese content only, at
// the full versions of the same typefaces, which do include the Maltese letters.
//
// English and Italian pages never render this component and are not affected.
// Pages built on the flagship shell do not need it: they already load full fonts.

const HREF =
  "https://fonts.googleapis.com/css2" +
  "?family=Bricolage+Grotesque:opsz,wght@12..96,200..800" +
  "&family=EB+Garamond:wght@400..800" +
  "&family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900" +
  "&family=Instrument+Serif:ital@0;1" +
  "&family=Inter:wght@100..900" +
  "&family=Inter+Tight:wght@100..900" +
  "&family=JetBrains+Mono:wght@400;700;800" +
  "&family=Montserrat:wght@100..900" +
  "&family=Nunito+Sans:wght@200..900" +
  "&family=Space+Grotesk:wght@300..700" +
  "&family=Space+Mono:wght@400;700" +
  "&display=swap";

// The browser downloads a font file only when a page actually uses that typeface, so this
// list costs nothing for the typefaces a given page does not use.
const css = (base: string) => `
[lang="mt"]:not(a){
--font-bricolage:"Bricolage Grotesque";
--font-eb-garamond:"EB Garamond";
--font-fraunces:"Fraunces";
--font-instrument-serif:"Instrument Serif";
--font-instrument-serif-roman:"Instrument Serif";
--font-inter:"Inter";
--font-inter-tight:"Inter Tight";
--font-jetbrains-mono:"JetBrains Mono";
--font-montserrat:"Montserrat";
--font-nunito-sans:"Nunito Sans";
--font-space-grotesk:"Space Grotesk";
--font-space-mono:"Space Mono";
--font-sans:var(--font-nunito-sans),var(--font-inter),system-ui,-apple-system,sans-serif;
--font-heading:var(--font-montserrat),var(--font-inter),system-ui,-apple-system,sans-serif;
--font-serif:var(--font-eb-garamond),Georgia,serif;
font-family:${base};
}`;

/**
 * `base` is the font the page body uses. Most pages inherit the site default; a page with
 * its own base font (H360 uses Inter) passes it, so only the letters change, not the look.
 */
export default function MalteseFonts({ base = "var(--font-sans)" }: { base?: string }) {
  return (
    <>
      <link rel="stylesheet" href={HREF} />
      <style dangerouslySetInnerHTML={{ __html: css(base) }} />
    </>
  );
}
