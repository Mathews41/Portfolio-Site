import { config } from "../config";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Background</h2>
        <p className="section-lede">{config.bio}</p>
      </div>

      <div className="experience-grid">
        <div className="experience-list">
          {config.experience.map((job) => (
            <article key={job.company} className="experience-item">
              <div className="experience-meta">
                <h3>
                  {job.title}
                  <span className="experience-company"> · {job.company}</span>
                </h3>
                <p className="experience-period">{job.period}</p>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="aside-panel">
          <div>
            <h3>Skills</h3>
            <ul className="skill-list">
              {config.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          {config.languages.length > 0 ? (
            <div>
              <h3>Languages</h3>
              <ul className="plain-list">
                {config.languages.map((lang) => (
                  <li key={lang.name}>
                    <strong>{lang.name}</strong> — {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <h3>Education</h3>
            <p className="plain-list">
              <strong>{config.education.school}</strong>
              <br />
              {config.education.focus}
              <br />
              <span className="muted">{config.education.period}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
