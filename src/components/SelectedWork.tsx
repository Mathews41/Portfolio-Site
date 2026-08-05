import { config, ProjectStatus } from "../config";

const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  wip: "In progress",
  demo: "Frontend demo",
};

export default function SelectedWork() {
  return (
    <section id="work" className="section work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects shaped by product sense and careful engineering.</h2>
        <p className="section-lede">
          A focused set — ranked by relevance. Public links where available;
          private work described without exposing proprietary detail.
        </p>
      </div>

      <ol className="project-list">
        {config.projects.map((project, index) => {
          const size = project.imageSize ?? "standard";
          const flip = project.imageFlip ? "is-flip" : "";
          const isBanner = size === "banner";

          const visual = project.image ? (
            <div className={`project-visual size-${size}`}>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-visual-link"
                  aria-label={`Open ${project.title} live site`}
                >
                  <img src={project.image} alt={`${project.title} preview`} />
                </a>
              ) : (
                <img src={project.image} alt={`${project.title} preview`} />
              )}
            </div>
          ) : null;

          return (
            <li
              key={project.id}
              className={`project-row layout-${isBanner ? "banner" : "split"} ${flip}`}
            >
              <div className="project-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-body">
                <div className="project-title-row">
                  <h3>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-title-link"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className={`status status-${project.status}`}>
                    {statusLabel[project.status]}
                  </span>
                </div>
                <p className="project-summary">{project.summary}</p>
                <p className="project-role">{project.role}</p>
                <ul className="tech-list">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.liveUrl ? (
                    <a
                      className="link-live"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit live site
                    </a>
                  ) : (
                    <span className="link-muted">No public demo yet</span>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {visual}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
