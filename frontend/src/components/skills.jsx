const groups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST API', 'SQL', 'MongoDB'],
  },
  {
    title: 'Outils',
    items: ['Git & GitHub', 'Python', 'Déploiement web', 'Débogage'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Compétences</p>
          <h2>Les outils avec lesquels je construis</h2>
        </div>
        <div className="skills-groups">
          {groups.map((group) => (
            <div className="skill-group glass" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
            // 
          ))}
        </div>
      </div>
    </section>
  )
}