import Navigation from "./Navigation";
import Footer from "../Footer";
import FloatingDock from "./FloatingDock";

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export default function Layout({ children, showNav = true, showFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNav && <Navigation />}
      <main className="flex-1">
        {children}
        <FloatingDock />
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
