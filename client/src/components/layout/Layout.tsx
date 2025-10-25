import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export default function Layout({ children, showNav = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNav && <Navigation />}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
