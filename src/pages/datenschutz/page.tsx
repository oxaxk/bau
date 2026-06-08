import PageShell from '../../components/feature/PageShell';
import { kiralSite } from '../../lib/kiral-content';

export default function Datenschutz() {
  return (
    <PageShell title="Datenschutz" path="/datenschutz" className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:p-12">
          <h1 className="mb-8 text-3xl font-semibold text-slate-950 md:text-4xl">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="mb-4 mt-8 text-2xl font-semibold">1. Verantwortliche Stelle</h2>
            <p className="mb-4">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mb-4">
              <strong>{kiralSite.name}</strong><br />
              {kiralSite.address}<br />
              Telefon: {kiralSite.phone}<br />
              E-Mail: {kiralSite.email}<br />
              Website: {kiralSite.website}
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">2. Allgemeine Hinweise</h2>
            <p className="mb-4">
              Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Wir verarbeiten diese Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie zur Bearbeitung von Anfragen erforderlich ist.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">3. Hosting und Server-Logfiles</h2>
            <p className="mb-4">
              Diese Website wird über den Hosting-Dienstleister Vercel Inc. betrieben. Der Quellcode der Website wird über die Plattform GitHub verwaltet und von dort automatisiert auf die Server von Vercel bereitgestellt.
            </p>
            <p className="mb-4">
              Beim Aufruf dieser Website werden durch die Server des Hosting-Anbieters technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite, verwendeter Browser) automatisch in sogenannten Server-Logfiles erfasst.
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung der Website haben.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">4. Cookies und Tracking</h2>
            <p className="mb-4">
              Auf dieser Website werden keine Cookies zu Analyse-, Marketing- oder Trackingzwecken eingesetzt. Es werden ausschließlich technisch notwendige Server-Logfiles durch den Hostinganbieter verarbeitet (siehe Abschnitt Hosting).
              Eine Einwilligung über ein Cookie-Banner ist daher nicht erforderlich.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">5. Kontaktaufnahme</h2>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben aus dem Formular bzw. der E-Mail inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Eine Weitergabe dieser Daten erfolgt nicht ohne Ihre Einwilligung.
            </p>
            <p className="mb-4">
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist,
              im Übrigen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">6. Speicherdauer</h2>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wird, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
              Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">7. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ggf. ein Recht auf Berichtigung, Einschränkung der Verarbeitung oder Löschung dieser Daten.
              Außerdem steht Ihnen ein Recht auf Datenübertragbarkeit sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
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
