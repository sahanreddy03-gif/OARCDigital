import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360PainPageLayout } from '../_components/cluster/H360ClusterLayouts';
import { PAIN_NOT_ON_MAPS } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(PAIN_NOT_ON_MAPS.meta);

export default function WhyNotOnGoogleMapsPage() {
  return (
    <>
      <ClusterJsonLdScript config={PAIN_NOT_ON_MAPS.meta} />
      <H360PainPageLayout config={PAIN_NOT_ON_MAPS} />
    </>
  );
}
