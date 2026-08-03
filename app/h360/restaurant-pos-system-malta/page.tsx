import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360PillarPageLayout } from '../_components/cluster/H360ClusterLayouts';
import { POS_PILLAR } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(POS_PILLAR.meta);

export default function RestaurantPosSystemPillarPage() {
  return (
    <>
      <ClusterJsonLdScript config={POS_PILLAR.meta} />
      <H360PillarPageLayout config={POS_PILLAR} />
    </>
  );
}
