import Link from 'next/link';
import { H360_HOME, OARC_HOME } from '../h360Site';

/** SEO breadcrumb — sits inside dark cinema heroes, not on a white strip */
export default function H360CinemaBreadcrumb({ ctaName }: { ctaName: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        fontSize: 11,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        alignItems: 'center',
        marginBottom: 20,
        color: 'rgba(255,255,255,0.45)',
      }}
    >
      <Link href={OARC_HOME} style={{ color: 'rgba(134,239,172,0.95)', fontWeight: 600, textDecoration: 'none' }}>
        OARC Digital
      </Link>
      <span aria-hidden style={{ opacity: 0.5 }}>→</span>
      <Link href={H360_HOME} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
        H360
      </Link>
      <span aria-hidden style={{ opacity: 0.5 }}>→</span>
      <span style={{ color: 'rgba(255,255,255,0.85)' }}>{ctaName}</span>
    </nav>
  );
}
