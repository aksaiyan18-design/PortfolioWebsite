import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="page-intro" />

      <Navbar />

      <main className="min-h-screen bg-white">
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="hero-content text-center">

            <h1 className="text-5xl font-bold tracking-tight text-[#3B2118] md:text-7xl">
              Willkommen
            </h1>

            <p className="mt-6 text-xl text-[#3B2118] md:text-2xl">
              Ich bin Aksaiya Nanthakumaran und bin angehende Softwareentwicklerin.
            </p>

            <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#7A1F35]" />

          </div>
        </section>
      </main>
    </>
  );
}