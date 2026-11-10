import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import DepartmentRoute, { departmentMetadata } from "@/components/department/DepartmentRoute";
import { DEPARTMENTS } from "@/lib/departments/data";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

// Owner-approved department page: the homepage pop-up content as a real page.
const D = DEPARTMENTS.automation;

export const metadata: Metadata = {
  ...departmentMetadata("automation"),
  alternates: getHreflangAlternates("/services/automation"),
};

export default function Page() {
  return (
    <DepartmentRoute id="automation">
      <SpeakableJsonLd path={D.path} />
      <RouteSchema type="service" path={D.path} title={D.title} description={D.description} faqs={D.faqs} />
    </DepartmentRoute>
  );
}
