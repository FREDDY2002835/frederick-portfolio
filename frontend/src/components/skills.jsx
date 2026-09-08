const Skills = () => {
  const groups = [
    {
      title: "Frontend",
      items: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },
    {
      title: "Database",
      items: [
        "MongoDB",
        "MySQL",
      ],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "GitHub",
        "Vite",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest opacity-70 mb-2">
            My abilities
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Skills
          </h2>

          <p className="mt-4 max-w-2xl mx-auto opacity-70">
            Technologies and tools I use to build modern, responsive,
            and reliable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              className="glass rounded-2xl p-6"
              key={group.title}
            >
              <h3 className="text-xl font-semibold mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    className="px-4 py-2 rounded-full border border-current/20 text-sm"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
