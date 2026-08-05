import { config } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {config.name}
      </p>
      <p className="muted">{config.location}</p>
    </footer>
  );
}
