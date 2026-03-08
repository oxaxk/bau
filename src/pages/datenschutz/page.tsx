import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-8"
            style={{ fontFamily: 'Inter, sans-serif', color: '#020617' }}
          >
            Datenschutzerklärung
          </h1>
          
          <div
            className="prose prose-lg max-w-none"
            style={{ color: '#020617' }}
          >
            <h2 className="text-2xl font-semibold mb-4 mt-8">1. Verantwortliche Stelle</h2>
            <p className="mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-4">
              <strong>Kiral Bau</strong><br />
              Berlin, Deutschland<br />
Telefon: +49 176 30140780
              E-Mail: kiralbau@hotmail.com<br />
              Website: https://kiralbau.de
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">2. Allgemeine Hinweise</h2>
            <p className="mb-4">
              Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Personenbezogene Daten sind alle Daten, 
              mit denen Sie persönlich identifiziert werden können. Wir verarbeiten diese Daten nur, soweit dies zur 
              Bereitstellung einer funktionsfähigen Website sowie zur Bearbeitung von Anfragen erforderlich ist.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">3. Hosting und Server-Logfiles</h2>
            <p className="mb-4">
              Diese Website wird über den Hosting-Dienstleister Vercel Inc. betrieben. Der Quellcode der Website wird über die Plattform GitHub verwaltet und von dort automatisiert auf die Server von Vercel bereitgestellt.
            </p>
            <p className="mb-4">
              Beim Aufruf dieser Website werden durch die Server des Hosting-Anbieters technisch 
              notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite, verwendeter Browser) 
              automatisch in sogenannten Server-Logfiles erfasst. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, 
              da wir ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung der Website haben.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">4. Cookies und Tracking</h2>
            <p className="mb-4">
              Auf dieser Website werden keine Cookies zu Analyse-, Marketing- oder Trackingzwecken eingesetzt.
              Es werden ausschließlich technisch notwendige Server-Logfiles durch den Hostinganbieter
              verarbeitet (siehe Abschnitt Hosting). Eine Einwilligung über ein Cookie-Banner ist daher
              nicht erforderlich.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">5. Kontaktaufnahme</h2>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben aus dem Formular bzw. 
              der E-Mail inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert. Eine Weitergabe dieser Daten erfolgt nicht ohne Ihre Einwilligung.
            </p>
            <p className="mb-4">
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
              soweit Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
              erforderlich ist, im Übrigen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung
              von Anfragen).
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">6. Speicherdauer</h2>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wird, verbleiben Ihre 
              personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihrer Anfrage). Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">7. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft 
              über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ggf. ein Recht auf 
              Berichtigung, Einschränkung der Verarbeitung oder Löschung dieser Daten. Außerdem steht Ihnen ein Recht auf 
              Datenübertragbarkeit sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#020617' }}>
              <p className="text-sm opacity-70">
                Stand: 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
