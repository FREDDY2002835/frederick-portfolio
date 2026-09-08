const projects = [
  {
    name: 'Majesty',
    description:
      "Plateforme de traduction vocale en temps réel propulsée par l'IA. Parlez dans une langue, obtenez une traduction instantanée avec sortie audio dans plus de 87 langues.",
    tags: ['React', 'JavaScript', 'IA'],
    url: 'https://github.com/FREDDY2002835/Majesty',
  },
  {
    name: 'Task Manager',
    description:
      'Gestionnaire de tâches rapide et efficace, construit avec React, Vite et Node.js, pensé pour rester concentré et productif.',
    tags: ['React', 'Vite', 'Node.js'],
    url: 'https://github.com/FREDDY2002835/Task-Manager',
  },
  {
    name: 'Sauiti Nyikani Church',
    description:
      'Site web moderne et responsive pour une église, construit avec React, Node.js et MongoDB, pour connecter la communauté et partager les informations.',
    tags: ['React', 'Node.js', 'MongoDB'],
    url: 'https://github.com/FREDDY2002835/sauiti-nyikani-church',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Projets</p>
          <h2>Une sélection de mon travail</h2>
          <p>
            Quelques projets récents, du prototype au produit fonctionnel. Le code complet est
            disponible sur mon GitHub.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card glass" key={project.name}>
              <span className="sheen" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                Voir le code sur GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}