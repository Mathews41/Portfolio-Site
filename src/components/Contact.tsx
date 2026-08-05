import { config } from "../config";

export default function Contact() {
  const { email, github, linkedin, phone, resumeUrl } = config.contact;

  return (
    <section id="contact" className="section contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let’s talk.</h2>
        <p className="section-lede">
          Open to Integration Engineer roles focused on API integrations,
          production support, and SaaS platforms.
        </p>
      </div>

      <div className="contact-panel">
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
        </a>
        <ul className="contact-links">
          <li>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          {linkedin ? (
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          ) : null}
          <li>
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
          </li>
          <li>
            <a href={resumeUrl} download>
              Download resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
