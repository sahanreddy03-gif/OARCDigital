// Server component. Emits a single JSON-LD @graph for any route.
// Designed to be dropped into any page.tsx with one line:
//
//   <RouteSchema type="article" path="/blog/foo" title="…" description="…" datePublished="2026-01-01" />
//
// Includes BreadcrumbList automatically derived from `path`.

import Script from "next/script";
import {
  buildArticle,
  buildBreadcrumb,
  buildFAQ,
  buildService,
  combine,
  breadcrumbFromPath,
} from "@/lib/schema";

const BASE = "https://oarcdigital.com";

type CommonProps = {
  path: string;
  title: string;
  description: string;
  scriptId?: string;
};

type ArticleProps = CommonProps & {
  type: "article";
  datePublished: string;
  dateModified?: string;
  image?: string;
  faqs?: { question: string; answer: string }[];
};

type ServiceProps = CommonProps & {
  type: "service";
  features?: { name: string; description?: string }[];
  faqs?: { question: string; answer: string }[];
};

type GenericProps = CommonProps & {
  type?: "page";
};

export type RouteSchemaProps = ArticleProps | ServiceProps | GenericProps;

export default function RouteSchema(props: RouteSchemaProps) {
  const url = `${BASE}${props.path}`;
  const breadcrumb = breadcrumbFromPath(props.path);
  // Fix breadcrumb final node title to use the real page title rather than a
  // slug-derived string.
  if (Array.isArray((breadcrumb as { itemListElement?: unknown[] }).itemListElement)) {
    const items = (breadcrumb as { itemListElement: { name: string; item: string }[] })
      .itemListElement;
    if (items.length > 0) items[items.length - 1].name = props.title;
  }

  const nodes: object[] = [breadcrumb];

  if (props.type === "article") {
    nodes.push(
      buildArticle({
        headline: props.title,
        description: props.description,
        url,
        datePublished: props.datePublished,
        dateModified: props.dateModified,
        image: props.image,
        speakable: true,
      }),
    );
    if (props.faqs && props.faqs.length) nodes.push(buildFAQ(props.faqs, true));
  } else if (props.type === "service") {
    nodes.push(
      buildService({
        name: props.title,
        description: props.description,
        url,
        features: props.features,
      }),
    );
    if (props.faqs && props.faqs.length) nodes.push(buildFAQ(props.faqs, true));
  } else {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      url,
      name: props.title,
      description: props.description,
    });
  }

  const graph = combine(...nodes);
  const id =
    props.scriptId ?? `route-schema-${props.path.replace(/[^a-z0-9]+/gi, "-")}`;

  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
