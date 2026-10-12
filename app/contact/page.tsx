"use client";

import { FormEvent } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert("Vielen Dank für deine Nachricht!");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-24">
        <section className="mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-20">
          
          <div className="grid w-full gap-16 md:grid-cols-2">

            {/* Linke Seite */}
            <div className="flex flex-col justify-center">

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7A1F35]">
                Kontakt
              </p>

              <h1 className="text-5xl font-bold tracking-tight text-[#3B2118] md:text-6xl">
                Lass uns
                <br />
                miteinander sprechen.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#3B2118]/70">
                Du hast eine Frage, möchtest mehr über mich erfahren oder
                möchtest über ein Projekt sprechen? Schreib mir gerne eine
                Nachricht.
              </p>

              {/* Kontaktinformationen */}
              <div className="mt-10 space-y-6 text-[#3B2118]">

                {/* E-Mail */}
                <div>
                  <p className="text-sm font-medium text-[#7A1F35]">
                    E-Mail
                  </p>

                  <a
                    href="mailto:deine-email@example.com"
                    className="text-lg transition-colors hover:text-[#7A1F35]"
                  >
                    aksaiyan18@gmail.com
                  </a>
                </div>

                {/* Telefonnummer */}
                <div>
                  <p className="text-sm font-medium text-[#7A1F35]">
                    Telefon
                  </p>

                  <a
                    href="tel:+491234567890"
                    className="text-lg transition-colors hover:text-[#7A1F35]"
                  >
                    +49 157 394 565 58
                  </a>
                </div>

                {/* Standort */}
                <div>
                  <p className="text-sm font-medium text-[#7A1F35]">
                    Standort
                  </p>

                  <p className="text-lg">
                    Nürnberg, Deutschland
                  </p>
                </div>

                {/* GitHub */}
                <div className="pt-2">
                  <a
                    href="https://github.com/DEINUSERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl border border-[#3B2118]/20 px-5 py-3 font-medium text-[#3B2118] transition-all duration-300 hover:border-[#7A1F35] hover:bg-[#7A1F35] hover:text-white"
                  >
                    {/* GitHub Logo */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>

                    Mein GitHub
                  </a>
                </div>

              </div>
            </div>

            {/* Kontaktformular */}
            <div className="rounded-3xl bg-[#3B2118] p-8 shadow-xl md:p-10">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Dein Name"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-[#3B2118] outline-none transition focus:border-[#7A1F35] focus:ring-2 focus:ring-[#7A1F35]"
                  />
                </div>

                {/* E-Mail */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    E-Mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="deine@email.de"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-[#3B2118] outline-none transition focus:border-[#7A1F35] focus:ring-2 focus:ring-[#7A1F35]"
                  />
                </div>

                {/* Betreff */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Betreff
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Worum geht es?"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-[#3B2118] outline-none transition focus:border-[#7A1F35] focus:ring-2 focus:ring-[#7A1F35]"
                  />
                </div>

                {/* Nachricht */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Nachricht
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Schreib mir deine Nachricht..."
                    required
                    className="w-full resize-none rounded-xl border border-white/20 bg-white px-4 py-3 text-[#3B2118] outline-none transition focus:border-[#7A1F35] focus:ring-2 focus:ring-[#7A1F35]"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#7A1F35] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3B2118]"
                >
                  Nachricht senden
                </button>

              </form>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}