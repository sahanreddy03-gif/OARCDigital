import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360PillarPageLayout } from '../_components/cluster/H360ClusterLayouts';
import { MAPS_PILLAR } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(MAPS_PILLAR.meta);

export default function GoogleMapsPillarPage() {
  return (
    <>
      <ClusterJsonLdScript config={MAPS_PILLAR.meta} />
      <H360PillarPageLayout config={MAPS_PILLAR} />
    </>
  );
}
