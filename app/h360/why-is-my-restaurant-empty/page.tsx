import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360PainPageLayout } from '../_components/cluster/H360ClusterLayouts';
import { PAIN_EMPTY } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(PAIN_EMPTY.meta);

export default function WhyRestaurantEmptyPage() {
  return (
    <>
      <ClusterJsonLdScript config={PAIN_EMPTY.meta} />
      <H360PainPageLayout config={PAIN_EMPTY} />
    </>
  );
}
