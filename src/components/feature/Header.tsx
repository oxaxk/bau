import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../base/Button';
import BrandLogo from '../base/BrandLogo';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/projekte', label: 'Projekte' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <div className="relative border-b border-white/10 bg-[#020617]/95 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-8 md:py-4">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <BrandLogo />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-5 lg:gap-7 text-[0.7rem] lg:text-xs font-medium tracking-[0.22em] uppercase">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="relative group text-[#e5e7eb]/80 transition-colors hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 right-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-[#38bdf8] via-[#a5f3fc] to-[#38bdf8] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <Button
              variant="secondary"
              href="/kontakt"
              className="!rounded-full !border-amber-500 !bg-amber-500 !px-6 !py-3 !text-slate-950 shadow-[0_14px_32px_rgba(217,119,6,0.34)] hover:!bg-amber-400 hover:!border-amber-400 hover:shadow-[0_18px_42px_rgba(217,119,6,0.44)]"
            >
              Anfrage starten
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="secondary"
              href="/kontakt"
              className="hidden rounded-full !border-white/20 !bg-white/5 !px-4 !py-2 !text-xs !tracking-[0.14em] sm:inline-flex"
            >
              Kontakt
            </Button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 transition-colors hover:border-[#38bdf8]/60 hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Menü"
              type="button"
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

        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            isMenuOpen ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-5 border-t border-white/10 bg-[#020617]/98 px-6 pb-5 pt-4">
            <nav className="flex flex-col gap-3 text-xs font-medium tracking-[0.22em] uppercase">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[#e5e7eb]/85 transition-colors hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              variant="secondary"
              href="/kontakt"
              onClick={() => setIsMenuOpen(false)}
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
