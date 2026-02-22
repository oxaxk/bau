import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-8"
          >
            Impressum
          </h1>
          
          <div
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 DDG</h2>
            
            <div className="mb-8">
              <p className="mb-2">
                <strong>Kiral Bau</strong><br />
                Inhaber: Yavuz Polat<br />
                Utrechter Straße 26<br />
                13347 Berlin<br />
                Telefon:{' '}
                <a href="tel:+4917630140780" className="text-[#020617] hover:underline">
                  +49 176 30140780
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:kiralbau@outlook.com" className="text-[#020617] hover:underline">
                  kiralbau@outlook.com
                </a>
                <br />
                Website:{' '}
                <a href="https://kiralbau.de" className="text-[#020617] hover:underline">
                  https://kiralbau.de
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 mt-8">EU-Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mb-8">
              Unsere Kontaktdaten finden Sie im Abschnitt „Angaben gemäß § 5 DDG“.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="mb-8">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. 
              Eine permanente inhaltliche Kontrolle der verlinkten Inhalte ist nicht zumutbar.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Links</h2>
            <p className="mb-4">
              Diese Seite enthält Links zu externen Websites Dritter. Auf die Inhalte dieser Websites haben wir keinen Einfluss. 
              Für diese fremden Inhalte übernimmt Kiral Bau keine Haftung; verantwortlich ist stets der jeweilige Betreiber der Seiten.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Urheberrecht</h2>
            <p className="mb-4">
              Alle Fotos, Texte und Designs auf dieser Seite sind urheberrechtlich geschützt.  
              Eine Nutzung oder Vervielfältigung ist nur nach vorheriger schriftlicher Zustimmung erlaubt.
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