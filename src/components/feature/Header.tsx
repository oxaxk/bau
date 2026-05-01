import { useState } from 'react';
import Button from '../base/Button';
import BrandLogo from '../base/BrandLogo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById('contact');
    if (!el) return;

    const offset = 80;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const targetY = rect.top + scrollTop - offset;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50"
    >
      <div className="relative bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <BrandLogo />
          </a>

          {/* DESKTOP NAV + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 lg:gap-8 text-[0.7rem] lg:text-xs font-medium tracking-[0.22em] uppercase">
              {[
                { href: '/#hero', label: 'Home' },
                { href: '/#about', label: 'Über uns' },
                { href: '/#services', label: 'Leistungen' },
                { href: '/#projects', label: 'Projekte' },
                { href: '/#contact', label: 'Kontakt' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative group text-[#e5e7eb]/80 hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 right-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-[#38bdf8] via-[#a5f3fc] to-[#38bdf8] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                onClick={handleContactClick}
                className="!rounded-full !border-amber-500 !bg-amber-500 !px-6 !py-3 !text-slate-950 shadow-[0_14px_32px_rgba(217,119,6,0.34)] hover:!bg-amber-400 hover:!border-amber-400 hover:shadow-[0_18px_42px_rgba(217,119,6,0.44)]"
              >
                Anfrage starten
              </Button>
            </div>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={handleContactClick}
              aria-label="Zum Kontaktformular"
              className="hidden h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/30 hover:bg-white/10 hover:border-[#38bdf8]/60 transition-colors sm:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-white"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0.8 2 7.2 4.5L19.2 7H4.8zm0.2 10h14a1 1 0 0 0 1-1V9.3l-7.2 4.5a1 1 0 0 1-1 0L4 9.3V16a1 1 0 0 0 1 1z"
                />
              </svg>
            </button>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-white/5 hover:bg-white/10 hover:border-[#38bdf8]/60 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Menü"
            >
              <span className="relative flex h-4 w-6 items-center justify-center">
                <span
                  className={`absolute h-[2px] w-6 rounded-full bg-white transition-transform duration-300 ${
                    isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5 rotate-0'
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-6 rounded-full bg-white transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-6 rounded-full bg-white transition-transform duration-300 ${
                    isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5 rotate-0'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-5 pt-1 flex flex-col gap-5 bg-[#020617]/95 border-t border-white/10">
            <nav className="flex flex-col gap-4 text-xs font-medium tracking-[0.22em] uppercase">
              {[
                { href: '/#hero', label: 'Home' },
                { href: '/#about', label: 'Über uns' },
                { href: '/#services', label: 'Leistungen' },
                { href: '/#projects', label: 'Projekte' },
                { href: '/#contact', label: 'Kontakt' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#e5e7eb]/85 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Button
              variant="secondary"
              onClick={() => {
                handleContactClick();
                setIsMenuOpen(false);
              }}
              className="!rounded-full !border-amber-500 !bg-amber-500 !text-slate-950 hover:!bg-amber-400 hover:!border-amber-400 text-xs tracking-[0.16em] uppercase"
            >
              Bewertung sichern
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
