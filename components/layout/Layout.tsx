import MinimalNav from "../MinimalNav";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export default function Layout({ children, showNav = true, showFooter = true }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {showNav && <MinimalNav theme="dark" />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
