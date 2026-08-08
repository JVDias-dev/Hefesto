import type { ReactNode } from "react";
import Navigation from "../components/Navigation";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <header>
        <h1>TaskForge</h1>

        <Navigation />
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}

export default AppLayout;