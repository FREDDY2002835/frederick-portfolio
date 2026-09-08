export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-text">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <p className="kicker">À propos</p>
            <h2>Du concept au déploiement</h2>
          </div>
          <p>
            Je suis un développeur fullstack passionné par la construction d'applications
            propres, efficaces et agréables à utiliser. J'aime autant soigner une interface
            que concevoir l'API et la base de données qui la font tourner.
          </p>
          <p>
            Formé au sein de la communauté CodeBlossom, où j'ai obtenu ma certification en
            juillet 2026, je travaille avec React, Node.js et les bases de données SQL et
            NoSQL pour livrer des produits complets, du prototype à la mise en production.
          </p>
        </div>

        <div className="about-facts glass">
          <div className="about-fact">
            <span className="idx">01</span>
            <div>
              <h4>Frontend</h4>
              <p>Interfaces React réactives, accessibles et pensées pour la performance.</p>
            </div>
          </div>
          <div className="about-fact">
            <span className="idx">02</span>
            <div>
              <h4>Backend</h4>
              <p>API Node.js structurées, bases de données SQL/NoSQL, logique métier fiable.</p>
            </div>
          </div>
          <div className="about-fact">
            <span className="idx">03</span>
            <div>
              <h4>Méthode</h4>
              <p>Code lisible, versionné avec Git, et attention portée aux détails jusqu'à la mise en ligne.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}