export default function Certification() {
  return (
    <section id="certification">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Certification</p>
          <h2>Formation reconnue</h2>
        </div>
        <div className="cert-card glass">
          <div className="cert-info">
            <h3>Certification Fullstack — CodeBlossom Community</h3>
            <p>
              Programme complet de développement fullstack couvrant le frontend, le backend et
              les bonnes pratiques de production.
            </p>
            <div className="cert-meta">
              <span><strong>Délivrée :</strong> Juillet 2026</span>
              <span><strong>Organisme :</strong> CodeBlossom Community</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div className="cert-badge">CB</div>
            <a
              className="btn-ghost"
              href="https://drive.google.com/file/d/1PRpttDLl7yAxHuWW2SZmScrlkAmedesE/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Voir le certificat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}