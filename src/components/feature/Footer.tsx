export default function Footer() {
  return (
    <footer className="py-14 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <a href="/" className="mb-4 flex items-center gap-2 justify-center md:justify-start">
              <img
                src="/images/logo.png"
                alt="Kiral Bau Logo"
                className="h-11 md:h-14 w-auto drop-shadow-[0_8px_24px_rgba(15,23,42,0.9)]"
              />
              <span className="text-2xl md:text-[2rem] font-light tracking-[0.24em] text-white/90 uppercase">
                Kiral Bau
              </span>
            </a>
            <p className="text-white/70 mb-6 max-w-md text-sm md:text-base">
              Berliner Bauunternehmen für Sanierung, WDVS, Putzarbeiten, Abbruch und Fassadengestaltung – mit Fokus auf Qualität und Nachhaltigkeit.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="tel:+4917630140780"
                aria-label="Telefon"
                className="w-11 h-11 rounded-2xl flex items-center justify-center bg-sky-500/10 border border-sky-400/40 shadow-[0_14px_40px_rgba(8,47,73,0.8)] hover:bg-sky-500/20 hover:border-sky-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-sky-100"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M6.6 3.2 8.8 3a1 1 0 0 1 1 .6l1.2 2.9a1 1 0 0 1-.2 1.1l-1.3 1.3a10.8 10.8 0 0 0 4.4 4.4l1.3-1.3a1 1 0 0 1 1.1-.2l2.9 1.2a1 1 0 0 1 .6 1l-.2 2.2a1.5 1.5 0 0 1-1.5 1.4A14.5 14.5 0 0 1 4.9 4.7 1.5 1.5 0 0 1 6.6 3.2z"
                  />
                </svg>
              </a>
              <a 
                href="mailto:kiralbau@hotmail.com"
                aria-label="E-Mail"
                className="w-11 h-11 rounded-2xl flex items-center justify-center bg-sky-500/10 border border-sky-400/40 shadow-[0_14px_40px_rgba(8,47,73,0.8)] hover:bg-sky-500/20 hover:border-sky-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-sky-100"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm.8 2 7.2 4.5L19.2 7H4.8zm.2 10h14a1 1 0 0 0 1-1V9.3l-7.2 4.5a1 1 0 0 1-1 0L4 9.3V16a1 1 0 0 0 1 1z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-xl md:text-2xl mb-4 text-white/90 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/#hero" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-white/70 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white/70 hover:text-white transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-white/70 hover:text-white transition-colors">
                  Projekte
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white/70 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
            © 2025 Kiral Bau. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-end">
            <a href="/impressum" className="text-white/60 hover:text-white text-xs md:text-sm transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-white/60 hover:text-white text-xs md:text-sm transition-colors">
              Datenschutz
            </a>
            <a href="https://slicker.agency/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-xs md:text-sm transition-colors">
              by Slicker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
