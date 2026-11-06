import Image from "next/image";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "Botanica",
    type: "Webentwicklung",
    year: "2026",
    description:
      "Im Rahmen meines Studiums habe ich die Webseite Botanica entwickelt, ein Webprojekt rund um das Thema Tee. Im weiteren Verlauf des Projekts habe ich sowohl die funktionale Logik als auch das visuelle Design überarbeitet. Dabei lag mein Fokus darauf, die Struktur und den Aufbau der Webseite sinnvoll zu gestalten, die Nutzerführung zu verbessern und das Design an das Gesamtkonzept anzupassen. Die Produktbilder habe ich mithilfe von ChatGPT erstellt. Aktuell arbeite ich weiterhin am Aufbau und an der funktionalen Umsetzung der Webseite. Dazu gehören unter anderem die Ausarbeitung detaillierter Produktinformationen, die Implementierung eines Anmeldesystems sowie die Festlegung der Versandbedingungen. Durch dieses Projekt konnte ich sowohl meine technischen als auch meine gestalterischen Fähigkeiten weiterentwickeln.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/image/botanica-preview.png",
    github: "https://github.com/aksaiyan18-design/Botanica"
  },
  {
    title: "Korrupte Polizei – Bangkok bei Nacht",
    type: "Webentwicklung",
    year: "2026",
    description:
      "Inspiriert durch das Strategiespiel Devil’s Plan, bei dem logisches Denken und das Durchschauen anderer Spieler entscheidend sind, entstand die Idee für mein eigenes Spielprojekt. Die Umsetzung hatte ich bereits länger geplant und begann damit während der Semesterferien. Das Spiel entwickelte ich mit HTML, CSS und JavaScript. Mein Schwerpunkt lag auf der Spiellogik und den unterschiedlichen Rollen: Ein Dieb versucht, unentdeckt zu bleiben, während zwei Polizisten gemeinsam Hinweise sammeln und ihn aufspüren müssen. Der korrupte Polizist verfolgt eigene Interessen und verfügt über zusätzliche Informationen, beispielsweise über den letzten bekannten Aufenthaltsort des Diebes. Die Rollen unterscheiden sich auch in ihrer Sichtweise auf das Spielfeld: Der Dieb kann die Positionen aller Spieler erkennen, während die beiden regulären Polizisten und der korrupte Polizist die Polizeipositionen sehen. Durch Ermittlungen können Hinweise über die Aufenthaltsorte des Diebes in vergangenen Runden gesammelt werden. Verhaftungen müssen gezielt ausgelöst werden und sind nur erfolgreich, wenn sich der Dieb am selben Ort befindet. Die Gestaltung hielt ich bewusst schlicht, da mein Fokus auf der technischen Umsetzung, den Spielregeln und der strategischen Interaktion zwischen den Rollen lag.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/image/korrupt-polizei-project-preview.png",
    github: "https://github.com/aksaiyan18-design/Korrupte-Polizei-Bangkok-bei-Nacht"
  },
  {
    title: "Inkly",
    type: "Appentwicklung",
    year: "2026",
    description:
      "Im Rahmen meines Studiums habe ich im vergangenen Semester an meinem Projekt Inkly gearbeitet. Dabei handelt es sich um eine Android-App, die das Konzept digitaler Brieffreundschaften aufgreift und die klassische Kommunikation per Brief in eine digitale Form überträgt. Nutzerinnen und Nutzer können persönliche Briefe an ihre Freunde verschicken und diese individuell gestalten. Dazu gehören beispielsweise das Hinzufügen von Bildern sowie die Auswahl verschiedener Schriftarten und Papierdesigns. Ein besonderes Element der App ist das Sammeln von Briefmarken: Für jeweils zehn versendete Briefe erhalten Nutzer eine Briefmarke, die sie ihrer Sammlung hinzufügen können. Ziel des Projekts war es, eine kreative und persönliche Möglichkeit zu schaffen, digitale Nachrichten auf eine besondere Weise zu gestalten und zu versenden.",
    technologies: ["Java", "Supabase", "Gemini"],
    image: "/image/inkly-preview.jpeg",
    github: "https://github.com/aksaiyan18-design/Inkly"
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
