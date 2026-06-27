import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360PainPageLayout } from '../_components/cluster/H360ClusterLayouts';
import { PAIN_MORE_CUSTOMERS } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(PAIN_MORE_CUSTOMERS.meta);

export default function HowToGetMoreCustomersPage() {
  return (
    <>
      <ClusterJsonLdScript config={PAIN_MORE_CUSTOMERS.meta} />
      <H360PainPageLayout config={PAIN_MORE_CUSTOMERS} />
    </>
  );
}
