import { Link, useParams } from 'react-router-dom';
import PageShell from '../../components/feature/PageShell';
import { getKiralServiceBySlug, kiralServices, kiralSite } from '../../lib/kiral-content';

export default function LeistungDetailPage() {
  const params = useParams<{ slug?: string }>();
  const service = getKiralServiceBySlug(params.slug);

  if (!service) {
    return (
      <PageShell title="Leistung nicht gefunden" path="/leistungen">
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Kiral Bau</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Diese Leistung gibt es hier nicht.</h1>
          <p className="mt-4 text-lg text-slate-600">Bitte wählen Sie eine Leistung aus der Übersicht.</p>
          <Link to="/leistungen" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase">
            Zur Leistungsübersicht
          </Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell
      title={service.title}
      description={service.detail}
      path={`/leistungen/${service.slug}`}
      className="bg-white"
    >
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr,0.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Leistung</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {service.detail}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Ideal für</p>
            <p className="mt-4 text-xl font-semibold text-slate-950">{service.idealFor}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={`tel:${kiralSite.phone.replace(/\s+/g, '')}`} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase hover:bg-slate-800">
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr,0.85fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Typische Arbeitsweise</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {['Bestand ansehen', 'Aufwand einschätzen', 'Leistungsumfang klären', 'Ausführung einplanen'].map((step, index) => (
                <div key={step} className="rounded-2xl bg-slate-50 p-4">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-800">
                    {index + 1}
                  </div>
                  <p className="font-medium text-slate-900">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">Weitere Leistungen</p>
            <div className="mt-6 space-y-3">
              {kiralServices
                .filter((entry) => entry.slug !== service.slug)
                .map((entry) => (
                  <Link key={entry.slug} to={`/leistungen/${entry.slug}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition-colors hover:bg-white/10">
                    <span>{entry.title}</span>
                    <span className="text-sky-300">→</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
