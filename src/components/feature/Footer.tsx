import { Link } from 'react-router-dom';
import BrandLogo from '../base/BrandLogo';
import { kiralSite } from '../../lib/kiral-content';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/projekte', label: 'Projekte' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:col-span-2 md:items-start">
            <Link to="/" className="mb-5 inline-flex justify-center md:justify-start">
              <BrandLogo />
            </Link>
            <p className="mb-3 max-w-md text-sm text-white/70 md:text-base">
              {kiralSite.name} aus Berlin für Sanierung, WDVS, Putz- und Fassadenarbeiten, Abbruch und Innenausbau mit klaren Abläufen.
            </p>
            <div className="mb-6 text-sm text-white/55">
              {kiralSite.address}
            </div>
            <div className="flex justify-center space-x-4 md:justify-start">
              <a
                href={`tel:${kiralSite.phone.replace(/\s+/g, '')}`}
                aria-label="Telefon"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-500/10 shadow-[0_14px_40px_rgba(8,47,73,0.8)] transition-colors hover:border-sky-300 hover:bg-sky-500/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-sky-100" aria-hidden="true">
                  <path fill="currentColor" d="M6.6 3.2 8.8 3a1 1 0 0 1 1 .6l1.2 2.9a1 1 0 0 1-.2 1.1l-1.3 1.3a10.8 10.8 0 0 0 4.4 4.4l1.3-1.3a1 1 0 0 1 1.1-.2l2.9 1.2a1 1 0 0 1 .6 1l-.2 2.2a1.5 1.5 0 0 1-1.5 1.4A14.5 14.5 0 0 1 4.9 4.7 1.5 1.5 0 0 1 6.6 3.2z" />
                </svg>
              </a>
              <a
                href={`mailto:${kiralSite.email}`}
                aria-label="E-Mail"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-500/10 shadow-[0_14px_40px_rgba(8,47,73,0.8)] transition-colors hover:border-sky-300 hover:bg-sky-500/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-sky-100" aria-hidden="true">
                  <path fill="currentColor" d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm.8 2 7.2 4.5L19.2 7H4.8zm.2 10h14a1 1 0 0 0 1-1V9.3l-7.2 4.5a1 1 0 0 1-1 0L4 9.3V16a1 1 0 0 0 1 1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-4 text-xl font-semibold tracking-wide text-white/90 md:text-2xl">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-center text-xs text-white/60 md:text-left md:text-sm">
            © 2026 {kiralSite.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
            <Link to="/impressum" className="text-xs text-white/60 transition-colors hover:text-white md:text-sm">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-xs text-white/60 transition-colors hover:text-white md:text-sm">
              Datenschutz
            </Link>
            <a href="https://slicker.agency/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 transition-colors hover:text-white md:text-sm">
              by Slicker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
