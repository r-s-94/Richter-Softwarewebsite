import "./nav.scss";

export default function Nav() {
  return (
    <section className="nav-section">
      <nav className="nav-section__nav">
        <a href="#projects" className="nav-section__link link">
          Projekte
        </a>
        <a href="#technologies" className="nav-section__link link">
          Technologien
        </a>
        <a href="#contact" className="nav-section__link link">
          Kontakte
        </a>
      </nav>
    </section>
  );
}
