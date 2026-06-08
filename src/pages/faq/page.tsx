import PageShell from '../../components/feature/PageShell';
import { kiralFaq } from '../../lib/kiral-content';

export default function FaqPage() {
  return (
    <PageShell
      title="FAQ"
      description="Häufige Fragen zu Kiral Bau, Sanierung, WDVS, Fassade, Abbruch und Innenausbau in Berlin."
      path="/faq"
      className="bg-white"
    >
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Fragen & Antworten</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Die wichtigsten Antworten kurz und klar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Damit Anfragen schneller werden, haben wir die häufigsten Punkte hier gesammelt.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="space-y-4">
          {kiralFaq.map((item) => (
            <details key={item.q} className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
                <span className="flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-sky-700 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
