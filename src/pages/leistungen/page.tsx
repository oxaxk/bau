import { Link } from 'react-router-dom';
import PageShell from '../../components/feature/PageShell';
import { kiralAreas, kiralServices, kiralSite } from '../../lib/kiral-content';

export default function LeistungenPage() {
  return (
    <PageShell
      title="Leistungen"
      description="Alle Leistungen von Kiral Bau: Sanierung, WDVS, Putz- und Fassadenarbeiten, Klinkerriemchen, Abbruch und Innenausbau in Berlin."
      path="/leistungen"
      className="bg-white"
    >
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr,0.85fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-sky-700 uppercase">
              Leistungen von Kiral Bau
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Bauleistungen mit klarer Struktur für Bestand, Fassade und Ausbau.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Wir decken die zentralen Bau- und Sanierungsbereiche ab, ohne die Projekte unnötig zu verkomplizieren. 
              Saubere Vorbereitung, realistische Abläufe und ein ehrlicher Blick auf den Bestand stehen im Mittelpunkt.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Arbeitsgebiet</p>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              {kiralAreas.map((area) => (
                <div key={area} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span>{area}</span>
                  <span className="text-sky-700">●</span>
                </div>
              ))}
            </div>
            <a
              href={`tel:${kiralSite.phone.replace(/\s+/g, '')}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-slate-800"
            >
              Direkt anrufen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {kiralServices.map((service) => (
            <article
              key={service.slug}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.1)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                {service.idealFor}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.short}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/leistungen/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-slate-950 uppercase transition-colors hover:text-sky-700"
              >
                Mehr erfahren
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">Wie wir arbeiten</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight lg:text-4xl">
                Vom ersten Eindruck bis zur fertigen Fläche sauber durchgezogen.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Wir prüfen den Bestand, stimmen den Umfang mit Ihnen ab und setzen die Maßnahmen so um,
                dass Folgegewerke nicht ausgebremst werden. Das spart Zeit und vermeidet unnötige Schleifen.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Typische Schritte</h3>
              <ol className="mt-5 space-y-4 text-sm text-slate-200">
                {['Bestand prüfen', 'Leistungsumfang klären', 'Ausführung organisieren', 'Sauber übergeben'].map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
                      {index + 1}
                    </span>
                    <span className="pt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
