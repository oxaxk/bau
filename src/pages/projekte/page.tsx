import PageShell from '../../components/feature/PageShell';
import { kiralProjects } from '../../lib/kiral-content';

export default function ProjektePage() {
  return (
    <PageShell
      title="Projekte"
      description="Ausgewählte Projekte von Kiral Bau in Berlin: Sanierung, WDVS, Fassaden, Entkernung und Innenausbau."
      path="/projekte"
      className="bg-white"
    >
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Referenzen</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Projekte, die zeigen, wie wir Bestand wieder ruhig und belastbar machen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Die Beispiele unten sind typische Projektkonstellationen aus unserem Alltag. 
            Sie zeigen, wie wir technische Aufgaben, Optik und saubere Übergaben zusammenführen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {kiralProjects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="flex aspect-[16/9] items-end bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_38%),linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] p-6 text-white">
                <div className="max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">{project.location}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">{project.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Leistungsumfang</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">{project.scope}</p>
                <p className="mt-4 text-base leading-7 text-slate-600">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
