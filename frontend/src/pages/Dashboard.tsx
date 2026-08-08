import ProjectCard from "../components/ProjectCard";

function Dashboard() {
  return (
    <section>
      <h1>Dashboard</h1>

      <p>
        Bem-vindo ao TaskForge.
      </p>

      <ProjectCard
        name="TaskForge AI"
        description="Sistema de gerenciamento e planejamento de projetos utilizando inteligência artificial."
      />
    </section>
  );
}

export default Dashboard;