export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-eyebrow">développeur fullstack · Kampala</span>
          <h1>
            Je construis des produits web <span>propres, rapides et fiables</span>.
          </h1>
          <p className="hero-sub">
            Frederick Muhimuzi. Je conçois des applications de bout en bout — interfaces React
            soignées et API robustes derrière — avec un souci constant du détail et de la
            performance.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#projects">Voir mes projets</a>
            <a className="btn-ghost" href="https://github.com/FREDDY2002835" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>5+</strong>
              <span>dépôts publics</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>certifié CodeBlossom</span>
            </div>
            <div>
              <strong>Full&nbsp;stack</strong>
              <span>React · Node.js</span>
            </div>
          </div>
        </div>

        <div className="mirror-wrap">
          <div className="mirror-glow" />
          <div className="mirror-panel glass">
            <div className="code-card">
              <div className="code-card-bar">
                <span className="traffic" />
                <span className="traffic" />
                <span className="traffic" />
                <span className="filename">developer.js</span>
              </div>
              <pre>
                <div className="code-line"><span className="tok-key">const</span> <span className="tok-var">developer</span> <span className="tok-punct">=</span> {'{'}</div>
                <div className="code-line">&nbsp;&nbsp;<span className="tok-var">name</span><span className="tok-punct">:</span> <span className="tok-str">'Frederick Muhimuzi'</span><span className="tok-punct">,</span></div>
                <div className="code-line">&nbsp;&nbsp;<span className="tok-var">role</span><span className="tok-punct">:</span> <span className="tok-str">'Fullstack Developer'</span><span className="tok-punct">,</span></div>
                <div className="code-line">&nbsp;&nbsp;<span className="tok-var">stack</span><span className="tok-punct">:</span> [<span className="tok-str">'React'</span><span className="tok-punct">,</span> <span className="tok-str">'Node.js'</span><span className="tok-punct">,</span> <span className="tok-str">'MongoDB'</span>]<span className="tok-punct">,</span></div>
                <div className="code-line">{'}'}<span className="tok-punct">;</span></div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="tok-com">// toujours en train d'apprendre</span></div>
                <div className="code-line"><span className="tok-key">function</span> <span className="tok-fn">ship</span>() {'{'}</div>
                <div className="code-line">&nbsp;&nbsp;<span className="tok-key">return</span> <span className="tok-str">'clean, tested, shipped'</span><span className="tok-punct">;</span></div>
                <div className="code-line">{'}'}</div>
              </pre>
            </div>
          </div>
          <div className="mirror-reflection" />
        </div>
      </div>
    </section>
  )
}