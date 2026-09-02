const PRERENDER_URLS = [
  "/",
  "/services",
  "/our-work",
  "/contact",
  "/pricing",
  "/ai-agents",
  "/automation",
  "/blog",
];

export default function SpeculationRules() {
  const rules = JSON.stringify({
    prerender: [
      {
        source: "list",
        urls: PRERENDER_URLS,
        eagerness: "moderate",
      },
    ],
  });

  return <script id="oarc-speculation-rules" type="speculationrules" dangerouslySetInnerHTML={{ __html: rules }} />;
}
