
export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs tracking-[0.22em] uppercase mb-3 text-slate-500">
            Über uns
          </p>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">
            Kiral Bau – Qualität, Beständigkeit und nachhaltiges Bauen
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-700">
            Wir modernisieren Wohn- und Gewerbeimmobilien mit Sanierung, Wärmedämmverbundsystemen,
            Putzarbeiten, Abbruch und Fassadengestaltung. Unser Anspruch: technisch saubere Lösungen,
            klare Abläufe und Ergebnisse, die langfristig tragen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative rounded-3xl border border-slate-200 bg-white/90 px-6 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300">
            <p className="text-[11px] tracking-[0.2em] uppercase text-sky-700 mb-2">Qualität</p>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Saubere Ausführung</h3>
            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              Präzise Ausführung, moderne Technik und ein klares Auge für Details – von der Untergrundvorbereitung
              bis zur fertigen Oberfläche.
            </p>
          </div>

          <div className="relative rounded-3xl border border-slate-200 bg-white/90 px-6 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300">
            <p className="text-[11px] tracking-[0.2em] uppercase text-sky-700 mb-2">Nachhaltigkeit</p>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Zukunftssichere Lösungen</h3>
            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              Energieeffiziente Fassadensysteme, umweltbewusste Abbruchlösungen und ressourcenschonende Bauweisen,
              die Immobilien zukunftssicher machen.
            </p>
          </div>

          <div className="relative rounded-3xl border border-slate-200 bg-white/90 px-6 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300">
            <p className="text-[11px] tracking-[0.2em] uppercase text-sky-700 mb-2">Verlässlichkeit</p>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Planbare Abläufe</h3>
            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              Transparente Kommunikation, termingerechte Fertigstellung und enge Abstimmung mit Auftraggebern
              und Gewerken – für planbare Projekte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
