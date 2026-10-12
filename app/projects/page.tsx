import Image from "next/image";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "Mein erstes Projekt",
    type: "Webentwicklung",
    year: "2026",
    description:
      "Eine moderne Website, die ich im Rahmen meiner Ausbildung entwickelt habe. Dabei lag der Fokus auf einem übersichtlichen Design und einer benutzerfreundlichen Oberfläche.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/project1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Mein zweites Projekt",
    type: "Softwareentwicklung",
    year: "2025",
    description:
      "Eine Softwareanwendung, bei der ich verschiedene Funktionen umgesetzt und mich mit der Strukturierung von Code beschäftigt habe.",
    technologies: ["Python", "SQL"],
    image: "/images/projects/project2.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Mein drittes Projekt",
    type: "Webentwicklung",
    year: "2025",
    description:
      "Eine weitere Webanwendung mit einem modernen Aufbau. Hier konnte ich meine Kenntnisse in React und TypeScript vertiefen.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/project3.jpg",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-24">
        <section className="mx-auto max-w-7xl px-6 py-20">

          {/* Überschrift */}
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7A1F35]">
              My Work
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-[#3B2118] md:text-6xl">
              Meine Projekte
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#3B2118]/70">
              Hier findest du eine Auswahl meiner bisherigen Projekte,
              Arbeiten und Anwendungen.
            </p>
          </div>

          {/* Projektkarten */}
          <div className="grid gap-10 md:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-[#3B2118]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Projektbild */}
                <div className="relative h-[280px] overflow-hidden bg-[#3B2118]/5">
                  <Image
                    src={project.image}
                    alt={`Screenshot von ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Jahr */}
                  <div className="absolute right-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-[#3B2118] shadow-sm">
                    {project.year}
                  </div>
                </div>

                {/* Projektinformationen */}
                <div className="p-7 md:p-8">

                  {/* Kategorie */}
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7A1F35]">
                    {project.type}
                  </p>

                  {/* Titel */}
                  <h2 className="mt-2 text-3xl font-bold text-[#3B2118]">
                    {project.title}
                  </h2>

                  {/* Beschreibung */}
                  <p className="mt-5 leading-7 text-[#3B2118]/70">
                    {project.description}
                  </p>

                  {/* Technologien */}
                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-[#3B2118]">
                      Technologien
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-[#3B2118]/5 px-4 py-2 text-sm text-[#3B2118] transition-colors duration-300 group-hover:bg-[#7A1F35]/10"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-4">

                    <a
                      href={project.demo}
                      className="rounded-xl bg-[#7A1F35] px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-[#3B2118]"
                    >
                      Projekt ansehen
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-[#3B2118]/20 px-5 py-3 font-medium text-[#3B2118] transition-all duration-300 hover:border-[#7A1F35] hover:text-[#7A1F35]"
                    >
                      GitHub
                    </a>

                  </div>

                </div>
              </article>
            ))}

          </div>
        </section>
      </main>
    </>
  );
}