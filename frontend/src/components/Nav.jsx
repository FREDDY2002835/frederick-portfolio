export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark">
          <span className="dot" />
          Frederick Muhimuzi
        </a>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#certification">Certification</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Me contacter</a>
      </div>
    </header>
  )
}