interface ProjectCardProps {
  name: string;
  description: string;
}

function ProjectCard({
  name,
  description,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <h2>{name}</h2>

      <p>{description}</p>
    </article>
  );
}

export default ProjectCard;