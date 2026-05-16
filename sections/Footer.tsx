export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div>
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-yellow-400">Astro</span>Veda
          </h2>

          <p className="text-white/60 max-w-md">
            Spiritual guidance and personalized astrology insights.
          </p>
        </div>

        <div className="flex items-center gap-8 text-white/70 text-sm">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

      </div>

      <div className="text-center text-white/40 text-sm mt-12">
        © 2026 AstroVeda. All rights reserved.
      </div>
    </footer>
  );
}