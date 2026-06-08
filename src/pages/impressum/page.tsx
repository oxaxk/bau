import PageShell from '../../components/feature/PageShell';
import { kiralSite } from '../../lib/kiral-content';

export default function Impressum() {
  return (
    <PageShell title="Impressum" path="/impressum" className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:p-12">
          <h1 className="mb-8 text-3xl font-semibold text-slate-950 md:text-4xl">Impressum</h1>

          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="mb-4 text-2xl font-semibold">Angaben gemäß § 5 DDG</h2>
            <p className="mb-8">
              <strong>{kiralSite.name}</strong><br />
              Inhaber: {kiralSite.owner}<br />
              {kiralSite.address}<br />
              Telefon: <a href={`tel:${kiralSite.phone.replace(/\s+/g, '')}`} className="text-slate-950 hover:underline">{kiralSite.phone}</a><br />
              E-Mail: <a href={`mailto:${kiralSite.email}`} className="text-slate-950 hover:underline">{kiralSite.email}</a><br />
              Website: <a href={kiralSite.website} className="text-slate-950 hover:underline">{kiralSite.website}</a>
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">EU-Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mb-8">Unsere Kontaktdaten finden Sie im Abschnitt „Angaben gemäß § 5 DDG“.</p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="mb-8">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Eine permanente inhaltliche Kontrolle der verlinkten Inhalte ist nicht zumutbar.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Haftung für Links</h2>
            <p className="mb-4">
              Diese Seite enthält Links zu externen Websites Dritter. Auf die Inhalte dieser Websites haben wir keinen Einfluss. Für diese fremden Inhalte übernimmt {kiralSite.name} keine Haftung; verantwortlich ist stets der jeweilige Betreiber der Seiten.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Urheberrecht</h2>
            <p className="mb-4">
              Alle Fotos, Texte und Designs auf dieser Seite sind urheberrechtlich geschützt. Eine Nutzung oder Vervielfältigung ist nur nach vorheriger schriftlicher Zustimmung erlaubt.
            </p>

            <div className="mt-12 border-t-2 pt-8" style={{ borderColor: '#020617' }}>
              <p className="text-sm opacity-70">Stand: 2026</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
