import Link from 'next/link';
import Image from 'next/image';

const logo = '/attached_assets/fdfdfd_1762818183304.png';

export default function LpMinimalHeader() {
  return (
    <header className="lp-header">
      <div className="lp-container lp-header-inner">
        <Link href="/" className="lp-logo">
          <Image src={logo} alt="OARC Digital" width={120} height={32} style={{ height: 28, width: 'auto' }} />
        </Link>
        <Link href="/contact" className="lp-header-link">
          Talk to OARC →
        </Link>
      </div>
    </header>
  );
}
