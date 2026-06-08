import PageShell from '../../components/feature/PageShell';
import { kiralAreas, kiralSite } from '../../lib/kiral-content';

const values = [
  {
    title: 'Klare Abläufe',
    text: 'Wir planen Leistungen so, dass Projekte nachvollziehbar bleiben und vor Ort nicht unnötig kompliziert werden.',
  },
  {
    title: 'Saubere Ausführung',
    text: 'Der Zustand der Fläche nach der Arbeit ist Teil des Ergebnisses. Genau darauf achten wir bei jedem Projekt.',
  },
  {
    title: 'Ehrlicher Umfang',
    text: 'Wir benennen offen, was sinnvoll ist und was nicht. Das ist für Kosten und Termine meistens die bessere Basis.',
  },
];

export default function UeberUnsPage() {
  return (
    <PageShell
      title="Über uns"
      description="Kiral Bau steht für Sanierung, WDVS, Fassadenarbeiten und Innenausbau in Berlin mit klarer, saubere Organisation."
      path="/ueber-uns"
      className="bg-white"
    >
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr,0.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Über {kiralSite.name}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Ein Berliner Bauunternehmen mit Fokus auf Bestand, Fassade und verlässliche Umsetzung.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {kiralSite.name} arbeitet an Projekten, bei denen technische Substanz und sichtbare Qualität zusammenkommen müssen. 
              Wir strukturieren Leistungen klar, damit Objekte nicht nur repariert, sondern sauber weiterentwickelt werden.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Kontakt</p>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div><span className="block text-slate-500">Telefon</span>{kiralSite.phone}</div>
              <div><span className="block text-slate-500">E-Mail</span>{kiralSite.email}</div>
              <div><span className="block text-slate-500">Adresse</span>{kiralSite.address}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{value.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">Arbeitsgebiet</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight lg:text-4xl">
              Wir arbeiten vor allem in Berlin und im nahen Umland.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {kiralAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
