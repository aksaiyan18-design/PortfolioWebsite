import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#3B2118] text-white">
      <div className="flex w-full items-center justify-between px-8 py-3 md:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide transition-colors duration-300 hover:text-[#B02A4A]"
        >
          AKSAIYA
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5 md:gap-7">
          <Link
            href="/"
            className="relative py-2 transition-colors duration-300 hover:text-[#B02A4A]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="relative py-2 transition-colors duration-300 hover:text-[#B02A4A]"
          >
            Über mich
          </Link>

          <Link
            href="/projects"
            className="relative py-2 transition-colors duration-300 hover:text-[#B02A4A]"
          >
            Projekte
          </Link>

          {/* Kontakt */}
          <Link
            href="/contact"
            className="rounded-full bg-[#7A1F35] px-5 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-[#3B2118]"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}