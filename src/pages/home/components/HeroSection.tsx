import { useEffect, useState } from 'react';
import Button from '../../../components/base/Button';

const heroImages = [
  {
    src: '/images/hero/1.png',
    alt: 'Kiral Bau – Fassadensanierung und WDVS an einem Wohngebäude'
  },
  {
    src: '/images/hero/2.png',
    alt: 'Kiral Bau – Putzarbeiten an einer Fassade in Berlin'
  },
  {
    src: '/images/hero/3.png',
    alt: 'Kiral Bau – modernisierte Wohnimmobilie mit neuer Fassadengestaltung'
  },
  {
    src: '/images/hero/4.png',
    alt: 'Kiral Bau – Detailaufnahme einer gedämmten und verputzten Fassade'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Visueller Bereich */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-sm">

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200/80 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                {heroImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}

              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Vorheriges Bild"
                  className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg border border-slate-900/40 hover:bg-slate-800 transition-colors"
                >
                  
                  ‹
                </button>

                <div className="flex items-center gap-2">
                  {heroImages.map((image, idx) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Bild ${idx + 1} anzeigen`}
                      className={`h-2 w-5 rounded-full transition-colors ${
                        idx === currentIndex
                          ? 'bg-slate-900'
                          : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Nächstes Bild"
                  className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg border border-slate-900/40 hover:bg-slate-800 transition-colors"
                >
                  
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Textbereich */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-[0.7rem] tracking-[0.22em] uppercase text-sky-800 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              Fassaden · WDVS · Sanierung
            </div>

            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold leading-tight mb-5 text-slate-950">
              Bauunternehmen
              für Fassaden & Sanierung in Berlin
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-slate-700 max-w-xl mx-auto md:mx-0">
              Kiral Bau begleitet Wohn- und Gewerbeimmobilien von der Bestandsaufnahme bis zur fertigen Fassade.
              Wärmedämmverbundsysteme, Putzarbeiten, Instandsetzung und Abbruch – sauber geplant, zuverlässig umgesetzt.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 w-full max-w-xl">
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <p className="text-sm text-slate-700">
                  Fachgerechte Ausführung nach aktueller Technik für WDVS & Putz.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <p className="text-sm text-slate-700">
                  Zuverlässige Abwicklung mit klaren Ansprechpartnern und Terminen.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 w-full max-w-xl">
              <div className="flex justify-center md:justify-start">
                <Button
                  href="#contact"
                  size="lg"
                  className="text-[0.75rem] sm:text-sm md:text-base px-8 sm:px-9 py-3.5 rounded-full !bg-[#0f172a] !text-white !border-sky-400/60 shadow-[0_18px_50px_rgba(15,23,42,0.65)] tracking-[0.22em] uppercase hover:!bg-slate-900 hover:shadow-[0_22px_60px_rgba(15,23,42,0.85)]"
                >
                  <i className="ri-mail-line mr-3 text-xl sm:text-2xl" aria-hidden="true" />
                  Kontakt aufnehmen
                </Button>
              </div>

              <div className="flex justify-center md:justify-start">
                <Button
                  href="#contact"
                  size="lg"
                  className="text-[0.75rem] sm:text-sm md:text-base px-6 sm:px-7 py-3 rounded-full !bg-white !text-[#0f172a] !border-slate-900/10 shadow-[0_12px_30px_rgba(15,23,42,0.18)] tracking-[0.22em] uppercase hover:!bg-slate-100"
                >
                  <i className="ri-phone-line mr-2 text-lg" aria-hidden="true" />
                  Rückruf vereinbaren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}