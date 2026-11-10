import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import DepartmentOnPage from "./DepartmentOnPage";
import { DeptBottom, DeptTop } from "./DepartmentSeo";
import { DEPARTMENTS } from "@/lib/departments/data";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

/** Ground per department: AI departments sit on cobalt, the loud ones on ink, the rest on paper. */
const AI = new Set(["AI Staff", "Automation", "Enquiries"]);
const DARK = new Set(["Media", "Social", "Clarity", "Creative", "Products", "Compare"]);
const BG = { ai: "#0035AD", dark: "#0E0E0E", light: "#F5F3EE" } as const;

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
  const tone = AI.has(d.dept) ? "ai" : DARK.has(d.dept) ? "dark" : "light";
  return (
    <Layout>
      {children}
      <article>
        <div style={{ background: BG[tone] }}>
          <DeptTop data={d} tone={tone} />
        </div>
        <DepartmentOnPage dept={d.dept} />
        <DeptBottom data={d} />
      </article>
    </Layout>
  );
}
