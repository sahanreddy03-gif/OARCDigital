import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360PainPageLayout } from '../_components/cluster/H360ClusterLayouts';
import { PAIN_WOLT } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(PAIN_WOLT.meta);

export default function LosingMoneyToWoltPage() {
  return (
    <>
      <ClusterJsonLdScript config={PAIN_WOLT.meta} />
      <H360PainPageLayout config={PAIN_WOLT} />
    </>
  );
}
