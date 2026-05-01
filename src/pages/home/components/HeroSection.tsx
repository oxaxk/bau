import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#f7f4ee]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.08),transparent_45%),radial-gradient(circle_at_12%_18%,rgba(245,158,11,0.18),transparent_28%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="order-2 md:order-2">
            <div className="relative mx-auto max-w-[20rem] sm:max-w-[24rem] md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border-[10px] border-white bg-slate-200 shadow-[0_24px_65px_rgba(15,23,42,0.24)]">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/images/optimized/hero/1-480.avif 480w, /images/optimized/hero/1-820.avif 820w"
                    sizes="(min-width: 768px) 44vw, 92vw"
                  />
                  <img
                    src="/images/hero/1.png"
                    alt="Kiral Bau Fassadensanierung und WDVS an einem Berliner Wohngebäude"
                    className="h-full w-full object-cover object-center"
                    width={820}
                    height={1025}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 overflow-hidden rounded-xl bg-slate-950/92 text-white shadow-[0_16px_34px_rgba(15,23,42,0.3)] backdrop-blur">
                  <div className="border-r border-white/10 px-3 py-3">
                    <p className="text-base font-black leading-none text-amber-300">50+</p>
                    <p className="mt-1 text-[0.56rem] uppercase tracking-[0.08em] text-white/75">Projekte</p>
                  </div>
                  <div className="border-r border-white/10 px-3 py-3">
                    <p className="text-base font-black leading-none text-amber-300">24h</p>
                    <p className="mt-1 text-[0.56rem] uppercase tracking-[0.08em] text-white/75">Antwort</p>
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-base font-black leading-none text-amber-300">WDVS</p>
                    <p className="mt-1 text-[0.56rem] uppercase tracking-[0.08em] text-white/75">Standard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex max-w-full items-center gap-2 rounded-md border border-amber-300/60 bg-white/80 px-3 py-1.5 text-[0.68rem] sm:text-xs font-semibold tracking-[0.08em] uppercase text-slate-800 mb-4 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Bau · Sanierung · Modernisierung
            </div>

            <h1 id="hero-heading" className="max-w-[19rem] sm:max-w-2xl text-[2rem] sm:text-5xl lg:text-[3.45rem] font-semibold leading-[1.06] sm:leading-[1.02] mb-5 text-slate-950">
              Bauprojekte in Berlin sauber umgesetzt
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-slate-700 max-w-[20rem] sm:max-w-xl mx-auto md:mx-0">
              Kiral Bau übernimmt Sanierung, WDVS, Putz, Abbruch und Ausbau mit klaren Abläufen,
              festen Ansprechpartnern und dokumentierter Umsetzung.
            </p>

            <div className="mt-6 flex max-w-[20rem] flex-wrap justify-center gap-2 md:max-w-none md:justify-start">
              {['Termintreu', 'WDVS Standard', 'Saubere Abnahme'].map((item) => (
                <span key={item} className="rounded-full border border-slate-300 bg-white/75 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 w-full max-w-xl">
              <div className="flex w-full justify-center md:w-auto md:justify-start">
                <Button
                  href="#contact"
                  size="lg"
                  className="w-full max-w-[13rem] text-sm md:text-base px-5 sm:px-7 py-3 rounded-lg !bg-amber-500 !text-slate-950 !border-amber-500 shadow-[0_14px_30px_rgba(217,119,6,0.28)] tracking-[0.08em] uppercase hover:!bg-amber-400 hover:shadow-[0_18px_42px_rgba(217,119,6,0.36)] !whitespace-nowrap text-center leading-tight"
                >
                  <i className="ri-mail-line mr-2 text-xl" aria-hidden="true" />
                  Anfragen
                </Button>
              </div>

              <div className="flex w-full justify-center md:w-auto md:justify-start">
                <Button
                  href="#contact"
                  size="lg"
                  className="w-full max-w-[13rem] text-sm md:text-base px-5 sm:px-7 py-3 rounded-lg !bg-white !text-[#0f172a] !border-slate-900/10 shadow-[0_10px_24px_rgba(15,23,42,0.14)] tracking-[0.08em] uppercase hover:!bg-slate-100 !whitespace-nowrap text-center leading-tight"
                >
                  <i className="ri-phone-line mr-2 text-lg" aria-hidden="true" />
                  Rückruf
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
