import { useState, useRef, useEffect } from 'react';
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import Button from '../../../components/base/Button';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const services = [
    {
      icon: 'ri-building-2-line',
      title: 'Sanierung & Modernisierung',
      description:
        'Komplette Sanierung von Wohn- und Gewerbeimmobilien – von der Bestandsaufnahme bis zur fertigen Oberfläche, inkl. Koordination der Gewerke.',
      image: '/images/services/5.png'
    },
    {
      icon: 'ri-brush-line',
      title: 'Putz- & Fassadenarbeiten',
      description:
        'Innen- und Außenputz, Glatt- und Strukturputze sowie hochwertige Fassadenaufbauten – für langlebige Oberflächen und eine ruhige Optik.',
      image: '/images/services/6.png'
    },
    {
      icon: 'ri-temp-hot-line',
      title: 'WDVS & Dämmung',
      description:
        'Planung und Ausführung von Wärmedämmverbundsystemen zur Steigerung der Energieeffizienz und nachhaltigen Wertsteigerung von Gebäuden.',
      image: '/images/services/7.png'
    },
    {
      icon: 'ri-delete-bin-6-line',
      title: 'Abbruch & Entkernung',
      description:
        'Effiziente und umweltbewusste Abbruch- und Entkernungsarbeiten – staubarm, sicher und sauber dokumentiert als Grundlage für neue Bauabschnitte.',
      image: '/images/services/8.png'
    },
    {
      icon: 'ri-building-3-line',
      title: 'Klinkerriemchen & Fassade',
      description:
        'Stilvolle Fassadengestaltung mit Klinkerriemchen und weiteren Systemen – für zeitlose Eleganz und eine klare architektonische Aussage.',
      image: '/images/services/9.png'
    },
    {
      icon: 'ri-tools-line',
      title: 'Innenausbau & Begleitgewerke',
      description:
        'Innenausbauleistungen wie Trockenbau, Spachtelarbeiten und Detailausbildungen, die Ihre Fassade- und Putzprojekte sinnvoll ergänzen.',
      image: '/images/services/10.png'
    }
  ];

  const goToSlide = (index: number) => {
    const normalizedIndex = (index + services.length) % services.length;
    if (normalizedIndex === currentIndex) return;

    setCurrentIndex(normalizedIndex);

    const el = mobileScrollRef.current;
    if (el) {
      el.scrollTo({
        left: normalizedIndex * el.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goToSlide(currentIndex + 1);
    setTimeout(() => setIsTransitioning(false), 350);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goToSlide(currentIndex - 1);
    setTimeout(() => setIsTransitioning(false), 350);
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.round(el.scrollLeft / el.clientWidth);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: ReactMouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: ReactTouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      const el = mobileScrollRef.current;
      if (!sectionEl || !el) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // Nur reagieren, wenn Section im Viewport ist
      if (rect.bottom <= 0 || rect.top >= viewportHeight) return;

      const sectionHeight = rect.height || 1;
      const distanceFromTop = Math.min(Math.max(-rect.top, 0), sectionHeight);
      const progress = distanceFromTop / sectionHeight; // 0 = oben, 1 = unten

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const targetScrollLeft = progress * maxScrollLeft;

      el.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });

      const maxIndex = services.length - 1;
      const targetIndex = Math.round(progress * maxIndex);
      if (targetIndex !== currentIndex) {
        setCurrentIndex(targetIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex, services.length]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);


  return (
    <section
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="py-16 lg:py-24 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-xs tracking-[0.22em] uppercase mb-3 text-[#1e293b]/70">
            Leistungsspektrum
          </p>
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-semibold mb-4 text-[#0f172a]">
            Baufachliche Leistungen aus einer Hand
          </h2>
          <p className="text-base lg:text-lg opacity-90 max-w-3xl mx-auto text-[#1f2933]">
            Modernisierung von Wohn- und Gewerbeimmobilien mit Fokus auf Qualität und Nachhaltigkeit –
            von Sanierung und Putzarbeiten bis zu Wärmedämmverbundsystemen, Abbruch und Fassadengestaltung.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Card Container with proper spacing - jetzt für alle Viewports */}
          <div className="w-full px-4 lg:px-20">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4"
              onScroll={handleMobileScroll}
              style={{ WebkitOverflowScrolling: 'touch' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {services.map((svc) => (
                <div key={svc.title} className="shrink-0 w-[85%] md:w-[45%] lg:w-[38%] snap-center">
                  <div className="bg-white/95 rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.18)] border border-slate-200/80 transition-all duration-300 h-[480px] md:h-[460px] lg:h-[480px] flex flex-col hover:shadow-[0_22px_60px_rgba(15,23,42,0.24)] hover:-translate-y-1">
                    <div className="relative h-[55%] overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-500 hover:scale-105"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="w-10 h-10 rounded-2xl bg-white/90 shadow-md flex items-center justify-center">
                          <i className={`${svc.icon} text-xl text-[#1d4ed8]`} aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-6 md:pb-5 flex flex-col justify-start h-[38%]">
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold tracking-tight text-[#0f172a]">
                        {svc.title}
                      </h3>
                      <p className="mt-3 opacity-90 leading-relaxed text-sm md:text-base text-[#4b5563]">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Dots Navigation mit Pfeilen */}
          <div className="flex items-center justify-center mt-8 lg:mt-12 space-x-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 bg-white/95 hover:bg-slate-50 hover:border-[#1d4ed8] transition-all duration-200 cursor-pointer disabled:opacity-40 shadow-sm"
            >
              <i className="ri-arrow-left-s-line text-lg text-[#0f172a]" aria-hidden="true"></i>
            </button>

            <div className="flex space-x-3">
              {services.map((svc, index) => (
                <button
                  key={svc.title}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                    currentIndex === index
                      ? 'bg-[#1d4ed8] shadow-[0_0_0_4px_rgba(37,99,235,0.35)]'
                      : 'bg-slate-300/80 hover:bg-slate-400/90'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 bg-white/95 hover:bg-slate-50 hover:border-[#1d4ed8] transition-all duration-200 cursor-pointer disabled:opacity-40 shadow-sm"
            >
              <i className="ri-arrow-right-s-line text-lg text-[#0f172a]" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-16">
          <Button
            href="#contact"
            size="lg"
            className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full bg-[#1d4ed8] text-white border border-[#1d4ed8] shadow-[0_16px_35px_rgba(37,99,235,0.55)] tracking-[0.22em] uppercase hover:bg-[#1e40af] hover:border-[#1e40af] hover:shadow-[0_20px_45px_rgba(30,64,175,0.7)]"
          >
            Angebot anfragen
          </Button>
          <Button
            href="tel:+4917630140780"
            size="lg"
            className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full bg-[#020617] text-white border border-slate-600 shadow-[0_12px_28px_rgba(15,23,42,0.35)] tracking-[0.22em] uppercase hover:border-[#1d4ed8] hover:text-[#bfdbfe] hover:shadow-[0_16px_40px_rgba(15,23,42,0.5)]"
          >
            Direkt anrufen
          </Button>
        </div>
      </div>
    </section>
  );
}
