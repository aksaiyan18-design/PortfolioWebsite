
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#3B2118] text-white">
      <div className="flex w-full items-center justify-between px-5 py-3 sm:px-7 md:px-8 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 text-xl font-bold tracking-wide transition-colors duration-300 hover:text-[#B02A4A] sm:text-2xl"
        >
          AKSAIYA
        </Link>

        {/* Navigation für iPad und Laptop */}
        <div className="hidden items-center gap-4 md:flex lg:gap-7">
          <Link
            href="/"
            className="whitespace-nowrap py-2 transition-colors duration-300 hover:text-[#B02A4A]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="whitespace-nowrap py-2 transition-colors duration-300 hover:text-[#B02A4A]"
          >
            Über mich
          </Link>

          <Link
            href="/projects"
            className="whitespace-nowrap py-2 transition-colors duration-300 hover:text-[#B02A4A]"
          >
            Projekte
          </Link>

          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-[#7A1F35] px-5 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-[#3B2118]"
          >
            Kontakt
          </Link>
        </div>

        {/* Hamburger-Button für Handys */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-white/10 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobiles Dropdown-Menü */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-4 py-3 transition-colors hover:bg-white/10 hover:text-[#B02A4A]"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-4 py-3 transition-colors hover:bg-white/10 hover:text-[#B02A4A]"
          >
            Über mich
          </Link>

          <Link
            href="/projects"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-4 py-3 transition-colors hover:bg-white/10 hover:text-[#B02A4A]"
          >
            Projekte
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-full bg-[#7A1F35] px-5 py-3 text-center font-medium transition-all duration-300 hover:bg-white hover:text-[#3B2118]"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
