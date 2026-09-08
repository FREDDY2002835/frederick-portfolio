const GROUPS = [
  {
    label: "Frontend",
    items: ["React", "Vite", "JavaScript (ES6+)", "HTML5 / CSS3", "Responsive UI"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT Auth", "bcrypt"],
  },
  {
    label: "Data",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas"],
  },
  {
    label: "Tooling",
    items: ["Git & GitHub", "npm", "Postman", "nodemon"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="wrap">
        <p className="section-kicker">Stack</p>
        <h2 className="section-title">What I build with</h2>

        <div className="stack__groups">
          {GROUPS.map((g) => (
            <div className="stack__group" key={g.label}>
              <h3>{g.label}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
