"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-24">
        <section className="mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-20">

          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-[350px_150px_1fr] md:items-center">

            {/* Bild */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/me.jpeg" 
                alt="Aksaiya"
                className="h-[500px] w-full object-cover"
              />
            </div>

            {/* Kleine Navigation */}
            <nav className="flex flex-row gap-6 md:flex-col md:gap-8">
              <button
                onClick={() => setActiveTab("about")}
                className={`text-left text-lg font-medium transition-all duration-300 ${
                  activeTab === "about"
                    ? "text-[#7A1F35]"
                    : "text-[#3B2118] hover:text-[#7A1F35]"
                }`}
              >
                Über mich
              </button>

              <button
                onClick={() => setActiveTab("skills")}
                className={`text-left text-lg font-medium transition-all duration-300 ${
                  activeTab === "skills"
                    ? "text-[#7A1F35]"
                    : "text-[#3B2118] hover:text-[#7A1F35]"
                }`}
              >
                Skills
              </button>

              <button
                onClick={() => setActiveTab("certificates")}
                className={`text-left text-lg font-medium transition-all duration-300 ${
                  activeTab === "certificates"
                    ? "text-[#7A1F35]"
                    : "text-[#3B2118] hover:text-[#7A1F35]"
                }`}
              >
                Zertifikate
              </button>
            </nav>

            {/* Inhalt */}
            <div className="min-h-[350px]">

              {activeTab === "about" && (
                <div className="animate-fade-in">
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7A1F35]">
                    About Me
                  </p>

                  <h1 className="mb-6 text-5xl font-bold text-[#3B2118]">
                    Über mich
                  </h1>

                  <p className="max-w-2xl text-lg leading-8 text-[#3B2118]">
                    Ich bin Aksaiya Nanthakumaran und angehende Softwareentwicklerin.
                    Meine Leidenschaft liegt in der Entwicklung moderner
                    und benutzerfreundlicher Softwarelösungen.
                  </p>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3B2118]">
                    Ich habe 4 Semester an der technischen Hochschule George 
                    Simon Ohm Media Engineering studiert und dadurch mein Interesse 
                    an der Softwareentwicklung gefunden. Ich möchte weiterhin im Bereich
                    der Softwareentwickling arbeiten und dachte mir eine Ausbildung als
                    Anwendungsentwickelerin wäre die beste Option.
                  </p>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="animate-fade-in">
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7A1F35]">
                    My Skills
                  </p>

                  <h1 className="mb-8 text-5xl font-bold text-[#3B2118]">
                    Skills
                  </h1>

                  <div className="grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Tailwind CSS",
                      "Git",
                      "GitHub",
                      "Python",
                      "C++",
                      "Affinity",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="rounded-xl border border-[#3B2118]/10 bg-[#3B2118]/5 px-4 py-3 text-center text-[#3B2118] transition hover:bg-[#7A1F35] hover:text-white"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "certificates" && (
                <div className="animate-fade-in">
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7A1F35]">
                    My Certificates
                  </p>

                  <h1 className="mb-8 text-5xl font-bold text-[#3B2118]">
                    Zertifikate
                  </h1>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-[#3B2118]/10 p-5">
                      <h2 className="text-xl font-semibold text-[#3B2118]">
                        Zertifikat 1
                      </h2>

                      <p className="mt-2 text-[#3B2118]/70">
                        Beschreibung deines Zertifikats.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#3B2118]/10 p-5">
                      <h2 className="text-xl font-semibold text-[#3B2118]">
                        Zertifikat 2
                      </h2>

                      <p className="mt-2 text-[#3B2118]/70">
                        Beschreibung deines Zertifikats.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      </main>
    </>
  );
}