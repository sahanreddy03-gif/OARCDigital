import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360PainPageLayout } from '../_components/cluster/H360ClusterLayouts';
import { PAIN_WALK_INS } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(PAIN_WALK_INS.meta);

export default function RestaurantNotGettingWalkInsPage() {
  return (
    <>
      <ClusterJsonLdScript config={PAIN_WALK_INS.meta} />
      <H360PainPageLayout config={PAIN_WALK_INS} />
    </>
  );
}
