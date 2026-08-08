import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
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