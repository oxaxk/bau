import { useEffect, useState } from 'react';

const socialImages = [
  {
    src: '/images/projects/11.png',
    alt: 'Kiral Bau Projekt 1 – Fassadensanierung und WDVS'
  },
  {
    src: '/images/projects/12.png',
    alt: 'Kiral Bau Projekt 2 – Putzarbeiten und Fassadengestaltung'
  },
  {
    src: '/images/projects/13.png',
    alt: 'Kiral Bau Projekt 3 – Sanierung einer Wohnimmobilie'
  }
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % socialImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#020617]/70"
          >
            Projekte
          </p>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-semibold mb-4 leading-tight text-[#020617]"
          >
            Ausgewählte Projekte von Kiral Bau
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-[#020617]/80 mb-2"
          >
            Sanierung, Wärmedämmverbundsysteme, Putzarbeiten, Abbruch und Fassadengestaltung – hier sehen Sie
            eine Auswahl realisierter Projekte. Weitere Referenzen stellen wir Ihnen auf Anfrage gern zur Verfügung.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center">
          {/* Large main project image with fade */}
          <div
            className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.35)] bg-slate-900"
            onMouseEnter={() => setActiveIndex(activeIndex)}
            onFocus={() => setActiveIndex(activeIndex)}
          >
            {socialImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-slate-900/80 px-5 py-3 backdrop-blur">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-300">
                Projekt {activeIndex + 1} / {socialImages.length}
              </p>
              <p className="mt-1 text-sm md:text-base font-medium text-white">
                {socialImages[activeIndex].alt}
              </p>
            </div>
          </div>

          {/* Right column: project list + CTA */}
          <div className="space-y-4">
            {socialImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                className={`group flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all ${
                  index === activeIndex
                    ? 'border-slate-900/80 bg-slate-900 text-white shadow-[0_18px_40px_rgba(15,23,42,0.45)]'
                    : 'border-slate-200 bg-white/70 text-slate-900 hover:border-slate-900/50 hover:bg-slate-50'
                }`}
              >
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
                    Referenz {index + 1}
                  </p>
                  <p className="text-sm md:text-[0.95rem] leading-snug">
                    {image.alt}
                  </p>
                </div>
              </button>
            ))}

            <div className="pt-4">
              <a
                href="mailto:kiralbau@outlook.com"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-slate-900 text-white shadow-[0_16px_40px_rgba(15,23,42,0.75)] hover:bg-slate-950 hover:shadow-[0_20px_50px_rgba(15,23,42,0.9)] transition-all duration-200"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" className="fill-current/0 stroke-current" strokeWidth="1.5" />
                  <path
                    d="M4.5 7.5L11.2 11.8c0.5 0.3 1.1 0.3 1.6 0L18.5 7.5"
                    className="stroke-current"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Referenzen anfordern
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
