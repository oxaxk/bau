import { useEffect, useRef, useState } from 'react';
import type { TouchEvent as ReactTouchEvent } from 'react';

type Testimonial = {
  name: string;
  rating: number;
  text: string;
  image: string | null;
};

const testimonials: Testimonial[] = [
  {
    name: 'M. Schneider, Bauherr',
    rating: 5,
    text: 'Kiral Bau hat unser Sanierungsprojekt mit höchster Präzision umgesetzt. Von der Planung bis zur Fertigstellung waren sie zuverlässig und professionell.',
    image: null
  },
  {
    name: 'T. Wagner, Immobilienentwickler',
    rating: 5,
    text: 'Die Wärmedämmung und Fassadengestaltung haben unsere Immobilie nicht nur optisch aufgewertet, sondern auch langfristig effizienter gemacht. Klare Empfehlung.',
    image: null
  },
  {
    name: 'L. Hoffmann, Architekt',
    rating: 5,
    text: 'Verlässliche Handwerkskunst, transparente Kommunikation und eine termingerechte Umsetzung – genau das, was wir gesucht haben.',
    image: null
  },
  {
    name: 'Eigentümergemeinschaft in Berlin',
    rating: 5,
    text: 'In unserem Mehrfamilienhaus wurden Fassadenarbeiten, Putz und Dämmung aus einer Hand koordiniert. Absprachen waren klar und der Ablauf transparent.',
    image: null
  },
  {
    name: 'Gewerbekunde, Praxisumbau',
    rating: 5,
    text: 'Beim Umbau unserer Praxis wurden Sanierung, Putzarbeiten und Dämmung sauber abgestimmt. Der Betrieb konnte weiterlaufen, weil strukturiert und staubarm gearbeitet wurde.',
    image: null
  },
  {
    name: 'Verwalter einer Wohnanlage',
    rating: 5,
    text: 'Wartungs- und Sanierungsarbeiten an Fassaden und Gemeinschaftsflächen wurden termingerecht umgesetzt. Rückfragen wurden schnell geklärt, die Zusammenarbeit war sehr angenehm.',
    image: null
  }
];

function TestimonialCard({
  testimonial,
  className = ''
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <article
      className={`flex flex-col h-full rounded-3xl bg-[#020617]/95 border border-white/20 shadow-[0_18px_50px_rgba(15,23,42,0.65)] px-6 py-6 md:px-7 md:py-7 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.9)] transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-white/10 border border-white/40 flex items-center justify-center text-sm font-semibold text-white">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{testimonial.name.charAt(0)}</span>
          )}
        </div>

        <div className="flex-1">
          <h4
            className="text-lg md:text-xl font-semibold leading-snug"
            style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
          >
            {testimonial.name}
          </h4>
        </div>
      </div>

      <p
        className="text-sm md:text-[0.95rem] leading-relaxed italic"
        style={{ fontFamily: 'Inter, sans-serif', color: '#E5E7EB' }}
      >
        “{testimonial.text}”
      </p>
    </article>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const lastScrollAtRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef<number | null>(null);
  const currentXRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 768) return;

      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        const container = mobileScrollRef.current;
        if (container) {
          const width = container.clientWidth;
          container.scrollTo({
            left: next * width,
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 768) return;

      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom <= 0 || rect.top >= viewportHeight) return;

      const currentY = window.scrollY || window.pageYOffset;
      const now = Date.now();

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
      const THRESHOLD = 120;

      if (Math.abs(diff) < THRESHOLD) {
        return;
      }

      if (diff > 0) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      } else {
        setActiveIndex((prev) => {
          const next = (prev - 1 + testimonials.length) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      }

      lastScrollYRef.current = currentY;
      lastScrollAtRef.current = now;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current || startXRef.current === null || currentXRef.current === null) {
      isDraggingRef.current = false;
      startXRef.current = null;
      currentXRef.current = null;
      return;
    }

    const diff = currentXRef.current - startXRef.current;
    const THRESHOLD = 50;

    if (Math.abs(diff) > THRESHOLD) {
      if (diff < 0) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      } else {
        setActiveIndex((prev) => {
          const next = (prev - 1 + testimonials.length) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      }
    }

    isDraggingRef.current = false;
    startXRef.current = null;
    currentXRef.current = null;
  };

  const handleHorizontalScroll = () => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const { scrollLeft, clientWidth } = container;
    if (!clientWidth) return;

    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#020617]/70"
          >
            Kundenstimmen
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-semibold mb-4 leading-tight text-[#020617]"
          >
            Was unsere Kunden über uns sagen
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#020617]/80"
          >
            Unsere Arbeit spricht für sich – noch wichtiger ist, was unsere Kunden sagen. Qualität,
            Verlässlichkeit und nachhaltiges Bauen stehen bei Kiral Bau an erster Stelle und das
            Vertrauen unserer Auftraggeber bestätigt diesen Anspruch jeden Tag aufs Neue.
          </p>
        </div>

        {/* Mobile: Scroll-/Auto-Carousel im Service-Style */}
        <div className="mt-10 md:hidden">
          <div className="relative overflow-hidden">
            <div
              ref={mobileScrollRef}
              className="flex w-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onScroll={handleHorizontalScroll}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 snap-center px-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2 md:hidden">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                aria-hidden="true"
                className={`h-2.5 w-2.5 rounded-full transition-colors border ${
                  idx === activeIndex
                    ? 'bg-[#020617] border-[#020617]'
                    : 'bg-[#020617]/20 border-[#020617]/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Horizontales Carousel mit drei Karten pro Reihe */}
        <div className="mt-10 hidden md:block">
          <div className="relative overflow-hidden">
            <div className="flex w-full overflow-x-auto no-scrollbar gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-full md:w-1/3 flex-shrink-0 px-1"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
