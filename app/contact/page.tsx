
"use client";

import { FormEvent, useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setStatus("Deine Nachricht wird gesendet ...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Senden fehlgeschlagen.");
        return;
      }

      setStatus("Vielen Dank! Deine Nachricht wurde gespeichert.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Verbindungsfehler. Bitte versuche es erneut.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-24">
        <section className="mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-20">
          <div className="grid w-full gap-16 md:grid-cols-2">
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

              <div className="mt-10 space-y-6 text-[#3B2118]">
                <div>
                  <p className="text-sm font-medium text-[#7A1F35]">E-Mail</p>
                  <a
                    href="mailto:aksaiyan18@gmail.com"
                    className="text-lg transition-colors hover:text-[#7A1F35]"
                  >
                    aksaiyan18@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#7A1F35]">
                    Telefon
                  </p>
                  <a
                    href="tel:+4915739456558"
                    className="text-lg transition-colors hover:text-[#7A1F35]"
                  >
                    +49 157 394 565 58
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#7A1F35]">
                    Standort
                  </p>
                  <p className="text-lg">Nürnberg, Deutschland</p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://github.com/aksaiyan18-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl border border-[#3B2118]/20 px-5 py-3 font-medium text-[#3B2118] transition-all duration-300 hover:border-[#7A1F35] hover:bg-[#7A1F35] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-.29-2.55-1.28-5.23-5.69-5.23-1.26 0-2.29.45-3.1 1.18-.29-.12-1.47-.51-3.06.11 0 0-.31.96 1.18 3.15a10.9 10.9 0 0 1 0 5.74c-1.49 2.19-1.18 3.15-1.18 3.15 1.59.62 2.77.23 3.06.11.81.73 1.84 1.18 3.1 1.18 4.42 0 5.39-2.69 5.67-5.25.35.41 1.04.78 2.1.78h3.11c.31 0 .68.21.56.8A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                    Mein GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#3B2118] p-8 shadow-xl md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Dein Name"
                    maxLength={100}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-[#3B2118] outline-none transition focus:border-[#7A1F35] focus:ring-2 focus:ring-[#7A1F35]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="deine@email.de"
                    maxLength={254}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-[#3B2118] outline-none transition focus:border-[#7A1F35] focus:ring-2 focus:ring-[#7A1F35]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                    Betreff
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Worum geht es?"
                    maxLength={200}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-[#3B2118] outline-none transition focus:border-[#7A1F35] focus:ring-2 focus:ring-[#7A1F35]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Schreib mir deine Nachricht..."
                    maxLength={5000}
                    required
                    className="w-full resize-none rounded-xl border border-white/20 bg-white px-4 py-3 text-[#3B2118] outline-none transition focus:border-[#7A1F35] focus:ring-2 focus:ring-[#7A1F35]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-[#7A1F35] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3B2118] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Wird gesendet ..." : "Nachricht senden"}
                </button>

                {status && (
                  <p role="status" aria-live="polite" className="text-sm text-white">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
