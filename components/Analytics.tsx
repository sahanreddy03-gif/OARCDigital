// GA4 + Microsoft Clarity scaffolding. Both are env-var-gated — when the IDs
// are unset (current state, awaiting Sahan), nothing is rendered. Once
// NEXT_PUBLIC_GA4_ID and NEXT_PUBLIC_CLARITY_ID are populated, the scripts
// load on every route via the root layout.
//
// We intentionally use next/script with strategy="afterInteractive" so the
// tracking blocks main-thread work for as little time as possible (Lighthouse
// mobile gate per Rule 11).

import Script from "next/script";

export default function Analytics() {
  const ga4 = process.env.NEXT_PUBLIC_GA4_ID?.trim();
  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();

  return (
    <>
      {ga4 && (
        <>
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${ga4}', {
                  send_page_view: true,
                  anonymize_ip: true,
                });
              `,
            }}
          />
        </>
      )}
      {clarity && (
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarity}");
            `,
          }}
        />
      )}
    </>
  );
}
