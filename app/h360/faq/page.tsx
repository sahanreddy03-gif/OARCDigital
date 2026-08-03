import { buildClusterMetadata, ClusterJsonLdScript } from '../_components/cluster/buildClusterMetadata';
import { H360FaqPage } from '../_components/cluster/H360FaqPage';
import { FAQ_HUB_META } from '../_components/cluster/clusterContent';

export const metadata = buildClusterMetadata(FAQ_HUB_META);

export default function H360FaqHubPage() {
  return (
    <>
      <ClusterJsonLdScript config={FAQ_HUB_META} />
      <H360FaqPage />
    </>
  );
}
