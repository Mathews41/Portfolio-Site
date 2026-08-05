import { config } from "../config";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-media" aria-hidden="true">
        <img src={config.heroImage} alt="" className="hero-image" />
        <div className="hero-wash" />
      </div>

      <div className="hero-copy">
        <p className="hero-availability reveal">{config.availability}</p>
        <h1 className="hero-name reveal delay-1">{config.name}</h1>
        <p className="hero-tagline reveal delay-2">{config.tagline}</p>
        <div className="hero-actions reveal delay-3">
          <a className="btn btn-primary" href="#work">
            Selected work
          </a>
          <a className="btn btn-ghost" href={`mailto:${config.contact.email}`}>
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
