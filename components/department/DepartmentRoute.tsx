import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import DepartmentOnPage from "./DepartmentOnPage";
import { DeptBottom } from "./DepartmentSeo";
import { DEPARTMENTS } from "@/lib/departments/data";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

export function departmentMetadata(key: keyof typeof DEPARTMENTS): Metadata {
  const d = DEPARTMENTS[key];
  const url = `https://oarcdigital.com${d.path}`;
  return {
    title: d.title,
    description: d.description,
    alternates: { canonical: url },
    openGraph: {
      title: d.title,
      description: d.description,
      url,
      type: "website",
      siteName: "OARC Digital",
      images: ogImageEntry({ title: d.title, subtitle: d.description }),
    },
    twitter: { card: "summary_large_image", title: d.title, description: d.description },
    other: { "geo.region": "MT", "geo.placename": "Malta" },
  };
}

/**
 * Page shell. Each app/services/<slug>/page.tsx mounts its own RouteSchema and
 * SpeakableJsonLd as children (scripts/validate-schema.ts reads them there).
 */
export default function DepartmentRoute({
  id,
  children,
}: {
  id: keyof typeof DEPARTMENTS;
  children?: React.ReactNode;
}) {
  const d = DEPARTMENTS[id];
  return (
    <Layout>
      {children}
      <article>
        {/* The owner built a different design and structure for each department. That design
            IS the page, on its own colours. Proof, the free check and the questions sit under it. */}
        <DepartmentOnPage dept={d.dept} crumb={`${d.keyword} in Malta`} />
        <DeptBottom data={d} />
      </article>
    </Layout>
  );
}
