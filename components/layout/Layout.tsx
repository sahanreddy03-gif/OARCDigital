import MinimalNav from "../MinimalNav";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showMobileNav?: boolean;
  showFooter?: boolean;
  navTheme?: "dark" | "light";
  /** Hide the header logo on pages that draw their own. */
  showNavLogo?: boolean;
}

export default function Layout({
  children,
  showNav = true,
  showMobileNav = true,
  showFooter = true,
  navTheme = "dark",
  showNavLogo = true,
}: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {showNav && <MinimalNav theme={navTheme} showMobileTrigger={showMobileNav} showLogo={showNavLogo} />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
