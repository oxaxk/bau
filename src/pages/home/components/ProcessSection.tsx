type StepIcon = 'chat' | 'ruler' | 'tools' | 'check';

export default function ProcessSection() {
  const steps: { number: string; title: string; description: string; icon: StepIcon }[] = [
    {
      number: '01',
      title: 'Anfrage & Erstgespräch',
      description:
        'Sie senden uns Ihre Anfrage mit Plänen oder einer Beschreibung des Projekts. Im Erstgespräch klären wir Ziele, Termine und groben Umfang.',
      icon: 'chat'
    },
    {
      number: '02',
      title: 'Vor-Ort-Termin & Planung',
      description:
        'Wir sehen uns die Baustelle an, messen auf, prüfen Untergründe und stimmen uns mit anderen Gewerken ab. Auf dieser Basis erstellen wir die Planung.',
      icon: 'ruler'
    },
    {
      number: '03',
      title: 'Angebot & Ausführung',
      description:
        'Sie erhalten ein transparentes Angebot mit klaren Positionen. Nach Freigabe setzen wir Sanierung, WDVS, Putzarbeiten, Abbruch und Fassadengestaltung nach Plan um.',
      icon: 'tools'
    },
    {
      number: '04',
      title: 'Abnahme & Nacharbeiten',
      description:
        'Gemeinsame Abnahme der Leistungen, Dokumentation offener Punkte und saubere Übergabe der Fläche – inklusive kleiner Nacharbeiten, falls nötig.',
      icon: 'check'
    }
  ];

  const renderIcon = (type: StepIcon) => {
    switch (type) {
      case 'chat':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 text-white"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M5 4h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-5.1L9 20.5V15H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 3v2h10V7H6zm0 4h6v2H6z"
            />
          </svg>
        );
      case 'ruler':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 text-white"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M4.2 15.8 15.8 4.2a1.5 1.5 0 0 1 2.1 0l1.9 1.9a1.5 1.5 0 0 1 0 2.1L8.2 19.8a1.5 1.5 0 0 1-2.1 0l-1.9-1.9a1.5 1.5 0 0 1 0-2.1zm3.1 1.1 2.1-2.1-1.1-1.1-2.1 2.1 1.1 1.1zm3.5-3.5 2.1-2.1-1.1-1.1-2.1 2.1 1.1 1.1zm3.5-3.5 2.1-2.1-1.1-1.1-2.1 2.1 1.1 1.1z"
            />
          </svg>
        );
      case 'tools':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 text-white"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M4 3h4l2 4-2 2v3.59l-3.29 3.3a1 1 0 0 1-1.42-1.42L6 14.59V11l2-2-1-2H4V3zm12.3 1.3 3.4 3.4a3 3 0 0 1-3.9 4.5L14 13.99 10 18l-2 1 1-2 4-4-1.79-1.79a3 3 0 0 1 4.5-3.9l3.4 3.4-1.4-1.4-2-2-1.4-1.4z"
            />
          </svg>
        );
      case 'check':
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 text-white"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm4.3 7.3-5 5a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4l1.3 1.29 4.3-4.29a1 1 0 0 1 1.4 1.4z"
            />
          </svg>
        );
    }
  };

  return (
    <section aria-labelledby="process-heading" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-semibold mb-4 leading-tight"
          >
            So läuft Ihr Bauprojekt mit Kiral Bau
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#020617]/80"
          >
            Von der ersten Anfrage bis zur Abnahme – in vier klaren Schritten begleiten wir Ihr Projekt
            in den Bereichen Sanierung, WDVS, Putzarbeiten, Abbruch und Fassadengestaltung.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Horizontale Linie hinter den Steps (nur Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[6%] right-[6%] h-px bg-[#020617]/15" />

          <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative mb-6 flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full bg-[#020617]/95 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-[0_18px_50px_rgba(15,23,42,0.65)] group-hover:scale-105 transition-transform duration-300"
                  >
                    {renderIcon(step.icon)}
                  </div>
                  <div className="absolute -bottom-5 flex items-center justify-center">
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#020617]/95 backdrop-blur-xl border border-white/40 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-white"
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Mobile: Vertikale Verbindungslinie */}
                {step.number !== steps[steps.length - 1].number && (
                  <div className="lg:hidden w-px h-10 bg-[#020617]/15 mb-4" />
                )}

                <h3
                  className="mt-4 text-sm md:text-base tracking-[0.18em] uppercase mb-3 text-[#020617]"
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed text-[#020617]/80"
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
