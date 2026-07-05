import Link from 'next/link';

export default function LpMinimalFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-container lp-footer-inner">
        <p>© {new Date().getFullYear()} OARC Digital · Malta</p>
        <div className="lp-footer-links">
          <Link href="/">Home</Link>
          <Link href="/lp">Guides</Link>
          <Link href="/legal/privacy-policy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
