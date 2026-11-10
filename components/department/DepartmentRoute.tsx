import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import DepartmentOnPage from "./DepartmentOnPage";
import { DeptBottom, DeptTop } from "./DepartmentSeo";
import { DEPARTMENTS } from "@/lib/departments/data";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

/** Dark-ground departments (yellow signal); the rest are paper + cobalt. */
const DARK = new Set(["Media", "Social", "Clarity", "AI Staff", "Creative", "Automation", "Enquiries", "Products", "Compare"]);
const BG: Record<string, string> = { dark: "#0E0E0E", light: "#F5F3EE" };

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
  const dark = DARK.has(d.dept);
  return (
    <Layout>
      {children}
      <article>
        <div style={{ background: BG[dark ? "dark" : "light"] }}>
          <DeptTop data={d} dark={dark} />
        </div>
        <DepartmentOnPage dept={d.dept} />
        <DeptBottom data={d} />
      </article>
    </Layout>
  );
}
