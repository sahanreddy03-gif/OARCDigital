import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360PillarPageLayout } from '../_components/cluster/H360ClusterLayouts';
import { REVIEWS_PILLAR } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(REVIEWS_PILLAR.meta);

export default function RestaurantReviewsPillarPage() {
  return (
    <>
      <ClusterJsonLdScript config={REVIEWS_PILLAR.meta} />
      <H360PillarPageLayout config={REVIEWS_PILLAR} />
    </>
  );
}
