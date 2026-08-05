import { config } from "../config";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-brand">
        {config.name}
      </a>
      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="nav-resume" href={config.contact.resumeUrl} download>
          Resume
        </a>
      </nav>
    </header>
  );
}
