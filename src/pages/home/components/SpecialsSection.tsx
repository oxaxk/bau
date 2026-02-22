import { useState, useRef, useEffect } from 'react';
import type { TouchEvent as ReactTouchEvent, WheelEvent as ReactWheelEvent } from 'react';
import Button from '../../../components/base/Button';

  type PriceSubGroup = { label: string; price: string };
  type PriceItem = {
    title: string;
    badge: string;
    badgeColor: string;
    groups: { label: string; price: string }[];
    subTitle?: string;
    subGroups?: PriceSubGroup[];
  };

export default function SpecialsSection() {
  const prices: PriceItem[] = [
    {
      title: 'Trockenbau Wände & Trennwände',
      badge: 'TROCKENBAU',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Leichtbau-Innenwand (einlagig, beidseitig)', price: 'ab 39 €/m²' },
        { label: 'Leichtbau-Innenwand (zweilagig, beidseitig)', price: 'ab 49 €/m²' },
        { label: 'Vorsatzschale zur Wandbegradigung', price: 'ab 35 €/m²' }
      ]
    },

    {
      title: 'Decken & Abkofferungen',
      badge: 'DECKEN',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Abgehängte Gipskartondecke (einlagig)', price: 'ab 42 €/m²' },
        { label: 'Abkofferung für Leitungen/Technik', price: 'ab 55 €/lfm' },
        { label: 'Akustikdecke inkl. Einlegeraster', price: 'ab 65 €/m²' }
      ]
    },

    {
      title: 'Bad & Dusche – Fliesen',
      badge: 'BAD',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Wandfliesen Bad (Standardformat)', price: 'ab 55 €/m²' },
        { label: 'Bodenfliesen Bad', price: 'ab 60 €/m²' },
        { label: 'Bodengleiche Dusche inkl. Gefälleestrich', price: 'ab 1.200 €' }
      ]
    },

    {
      title: 'Wohnräume & Großformat',
      badge: 'BÖDEN',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Feinsteinzeug-Boden (Standardformat)', price: 'ab 58 €/m²' },
        { label: 'Großformatfliesen bis 120×120 cm', price: 'ab 75 €/m²' },
        { label: 'Sockelleisten passend zum Boden', price: 'ab 9 €/lfm' }
      ]
    },

    {
      title: 'Sanierung & Umbau-Pakete',
      badge: 'SANIERUNG',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Trockenbau & Spachtelarbeiten im Bestand', price: 'auf Anfrage' },
        { label: 'Komplettes Bad (Trockenbau & Fliesen)', price: 'ab 8.900 €' },
        { label: 'Wohnraumumbau inkl. Decken & Böden', price: 'auf Anfrage' }
      ]
    },

    {
      title: 'Beratung & Aufmaß',
      badge: 'BERATUNG',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Vor-Ort-Termin inkl. Aufmaß', price: 'ab 120 €' },
        { label: 'Beratung auf der Baustelle (Stundensatz)', price: 'ab 85 €/h' },
        { label: 'Ausarbeitung eines Angebots mit Positionsliste', price: 'inklusive' }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const lastScrollAtRef = useRef<number>(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + prices.length) % prices.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % prices.length);
  };

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 50) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const handleWheel = (e: ReactWheelEvent<HTMLDivElement>) => {
    const absDeltaX = Math.abs(e.deltaX);
    const absDeltaY = Math.abs(e.deltaY);

    if (absDeltaX > absDeltaY && absDeltaX > 10) {
      e.preventDefault();
      if (e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % prices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [prices.length]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // Nur reagieren, wenn Section im Viewport ist
      if (rect.bottom <= 0 || rect.top >= viewportHeight) return;

      const currentY = window.scrollY || window.pageYOffset;
      const now = Date.now();

      // Cooldown: max. ein Kartenwechsel alle 400ms
      const COOLDOWN = 400;
      if (now - lastScrollAtRef.current < COOLDOWN) {
        lastScrollYRef.current = currentY;
        return;
      }

      if (lastScrollYRef.current === null) {
        lastScrollYRef.current = currentY;
        return;
      }

      const diff = currentY - lastScrollYRef.current;

      // Distanz-Schwelle: erst ab ~120px Scrollbewegung eine Karte weiter
      const THRESHOLD = 120;

      if (Math.abs(diff) < THRESHOLD) {
        return;
      }

      if (diff > 0) {
        // nach unten gescrollt → nächste Karte
        setActiveIndex((prev) => (prev + 1) % prices.length);
      } else {
        // nach oben gescrollt → vorige Karte
        setActiveIndex((prev) => (prev - 1 + prices.length) % prices.length);
      }

      lastScrollYRef.current = currentY;
      lastScrollAtRef.current = now;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prices.length]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
          >
            Projektbeispiele &amp; Richtpreise
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
          >
            Beispiele für typische Leistungen im Trockenbau, Innenausbau und Fliesenbereich. Die
            aufgeführten Richtpreise dienen als Orientierung und werden im Angebot projektbezogen
            kalkuliert.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {prices.map((item) => (
                <div key={item.title} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-none hover:shadow-none hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <div className="px-6 py-5 flex flex-col flex-1">

                      <h3
                        className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase mb-3 leading-snug break-words"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}
                      >
                        {item.title}
                      </h3>

                      <div className="mb-4">
                        {item.groups.map((g, i) => (
                          <div
                            key={i}
                            className={`py-1.5 ${i > 0 ? 'border-t border-white/10' : ''}`}
                          >
                            {g.price ? (
                              <div
                                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 text-base md:text-lg"
                                style={{ fontFamily: 'Inter, sans-serif', color: '#E9DFD8' }}
                              >
                                <span>{g.label}</span>
                                <span className="whitespace-nowrap text-right">{g.price}</span>
                              </div>
                            ) : (
                              <p
                                className="text-sm leading-snug md:text-base md:leading-snug pr-4"
                                style={{ fontFamily: 'Inter, sans-serif', color: '#D7CDC5' }}
                              >
                                {g.label}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {item.subGroups && (
                        <div className="pt-4 mt-2 border-t border-white/15">
                          <p
                            className="uppercase text-sm font-bold opacity-70 mb-2"
                            style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}
                          >
                            {item.subTitle}
                          </p>

                          {item.subGroups.map((s, i) => (
                            <div
                              key={i}
                              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 text-base md:text-lg mb-1"
                              style={{ fontFamily: 'Inter, sans-serif', color: '#E9DFD8' }}
                            >
                              <span>{s.label}</span>
                              <span className="whitespace-nowrap text-right">{s.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={handlePrev}
              className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {prices.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    idx === activeIndex ? 'bg-[#2A1F1F]' : 'bg-gray-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              ›
            </button>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
            <Button
              href="#contact"
              size="lg"
              className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full bg-black/60 backdrop-blur-xl text-[#FDF7F2] border border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.45)] tracking-[0.22em] uppercase hover:bg-black/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <i className="ri-file-text-line mr-3 text-2xl" aria-hidden="true"></i>
              Angebot anfragen
            </Button>
            <Button
              href="tel:+4917630140780"
              size="lg"
              className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full bg-black/60 backdrop-blur-xl text-[#FDF7F2] border border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.45)] tracking-[0.22em] uppercase hover:bg-black/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <i className="ri-phone-line mr-3 text-2xl" aria-hidden="true"></i>
              Direkt anrufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
