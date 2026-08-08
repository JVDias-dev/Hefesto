import type { ReactNode } from "react";
import Navigation from "../components/Navigation";
import "../App.css";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1 className="app-brand">TaskForge</h1>

        <Navigation />
      </header>

      <main className="app-content">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;