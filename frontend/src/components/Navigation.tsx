import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="app-navigation">
      <NavLink to="/dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/projects">
        Projetos
      </NavLink>
    </nav>
  );
}

export default Navigation;