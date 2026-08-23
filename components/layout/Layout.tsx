import MinimalNav from "../MinimalNav";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
  navTheme?: "dark" | "light";
}

export default function Layout({ children, showNav = true, showFooter = true, navTheme = "dark" }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {showNav && <MinimalNav theme={navTheme} />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
