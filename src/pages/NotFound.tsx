import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-white">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Diese Seite wurde nicht gefunden.</h1>
      <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">Bitte gehen Sie zurück zur Startseite oder wählen Sie eine andere Seite aus dem Menü.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold tracking-[0.16em] text-slate-950 uppercase hover:bg-amber-400">
        Zur Startseite
      </Link>
    </div>
  );
}
