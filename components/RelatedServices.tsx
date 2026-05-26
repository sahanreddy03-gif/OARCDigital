import RelatedLinks from "@/components/RelatedLinks";

interface RelatedServicesProps {
  slug: string;
  variant?: "light" | "dark";
}

export default function RelatedServices({ slug, variant = "light" }: RelatedServicesProps) {
  return (
    <RelatedLinks
      slug={slug}
      heading="Related OARC Digital services"
      intro="Other services that work well alongside this one."
      max={3}
      variant={variant}
    />
  );
}
