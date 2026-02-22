import { useState } from 'react';
import type { FormEvent } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      date: formData.get('date')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr] items-start">
          {/* Linke Spalte: Text, Ablauf, Direktkontakte */}
          <div>
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-400 mb-3">
                ANFRAGE FÜR SANIERUNG &amp; FASSADE
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-50">
                Kontakt &amp; Projektanfrage
              </h2>
              <p className="text-base md:text-lg mb-8 text-slate-300">
                Beschreiben Sie kurz Ihr Vorhaben in den Bereichen Sanierung, Wärmedämmverbundsysteme,
                Putzarbeiten, Abbruch oder Fassadengestaltung. Wir melden uns mit Rückfragen oder einem
                Vorschlag für das weitere Vorgehen.
              </p>
            </div>

            {/* Ablauf als Timeline */}
            <div className="grid gap-6 md:grid-cols-3 mb-10">
              <div className="relative rounded-2xl bg-slate-900/70 border border-slate-700/60 px-4 py-5">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 text-sm font-semibold">
                  1
                </div>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">Projekt skizzieren</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Eckdaten zu Gebäude, Flächen und gewünschter Leistung im Formular eintragen.
                </p>
              </div>
              <div className="relative rounded-2xl bg-slate-900/70 border border-slate-700/60 px-4 py-5">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 text-sm font-semibold">
                  2
                </div>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">Prüfung &amp; Rückfrage</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Wir prüfen die Angaben und melden uns mit Rückfragen oder einem Terminvorschlag.
                </p>
              </div>
              <div className="relative rounded-2xl bg-slate-900/70 border border-slate-700/60 px-4 py-5">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 text-sm font-semibold">
                  3
                </div>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">Besichtigung &amp; Angebot</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Vor-Ort-Termin und im nächsten Schritt ein strukturiertes Angebot zum Projekt.
                </p>
              </div>
            </div>

            {/* Bullets + Direktkontakte */}
            <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
              <ul className="space-y-2 text-sm md:text-base text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Sanierung, WDVS, Putzarbeiten, Abbruch und Fassadengestaltung im Neu- und Bestandsbau.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Angaben zu Gebäude, Flächen, Plänen und Nutzung helfen bei der Einschätzung.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Wir melden uns zeitnah mit Rückfragen oder einem Vorschlag für das weitere Vorgehen.</span>
                </li>
              </ul>

              <div className="space-y-3 text-sm text-slate-200">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sky-400">
                  Direktkontakt
                </p>
                <p className="text-sm text-slate-300">
                  Für dringende Anfragen erreichen Sie uns auch direkt telefonisch oder per E-Mail.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+4917630140780"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.7rem] sm:text-xs md:text-sm font-semibold tracking-[0.16em] uppercase bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-[0_16px_40px_rgba(8,47,73,0.7)] transition-all duration-200"
                  >
                    <i className="ri-phone-line text-base" aria-hidden="true" />
                    Anrufen
                  </a>
                  <a
                    href="mailto:kiralbau@outlook.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.7rem] sm:text-xs md:text-sm font-semibold tracking-[0.16em] uppercase border border-sky-500/70 bg-transparent text-sky-100 hover:bg-sky-500/10 transition-all duration-200"
                  >
                    <i className="ri-mail-line text-base" aria-hidden="true" />
                    E-Mail schreiben
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Formular-Card */}
          <div className="lg:translate-y-3">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-[0_22px_70px_rgba(15,23,42,0.85)] px-6 py-7 md:px-7 md:py-8">
              <form className="grid gap-5 text-left" onSubmit={handleSubmit}>
                <div>
                  <p className="text-sm text-slate-200">
                    Über dieses Formular können Sie uns Projektdaten schicken. Wir prüfen die Angaben und melden
                    uns mit Rückfragen oder einem ersten Richtangebot.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-xs font-medium tracking-[0.18em] uppercase text-slate-200">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-slate-600 bg-slate-950/60 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      name="name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-xs font-medium tracking-[0.18em] uppercase text-slate-200">
                      E-Mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-slate-600 bg-slate-950/60 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      name="email"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-xs font-medium tracking-[0.18em] uppercase text-slate-200">
                      Leistungsbereich (optional)
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-2xl border border-slate-600 bg-slate-950/60 text-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      style={{ backgroundPosition: 'right 1rem center' }}
                      name="service"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="sanierung">Sanierung / Modernisierung</option>
                      <option value="wdvs">Wärmedämmverbundsystem (WDVS)</option>
                      <option value="putz">Putz- &amp; Fassadenarbeiten</option>
                      <option value="abbruch">Abbruch &amp; Entkernung</option>
                      <option value="fassade">Klinkerriemchen &amp; Fassadengestaltung</option>
                      <option value="innenausbau">Innenausbau &amp; Begleitgewerke</option>
                      <option value="beratung">Beratung / Vor-Ort-Termin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-medium tracking-[0.18em] uppercase text-slate-200">
                      Wunschtermin (optional)
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-600 bg-slate-950/60 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      name="date"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-xs font-medium tracking-[0.18em] uppercase text-slate-200">
                    Nachricht*
                  </label>
                  <textarea
                    rows={4}
                    minLength={10}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-600 bg-slate-950/60 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="z. B. Art des Projekts, Gebäudeart, Flächen, geplanter Zeitraum, besondere Anforderungen"
                    name="message"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-[0.7rem] text-slate-400 max-w-xs">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß <a href="/datenschutz" className="underline hover:text-slate-200">Datenschutzerklärung</a> zu.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center px-8 py-3 rounded-full font-semibold text-[0.75rem] sm:text-sm md:text-base tracking-[0.22em] uppercase bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-[0_16px_40px_rgba(8,47,73,0.7)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet…' : 'Anfrage senden'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div role="status" aria-live="polite" className="text-right text-xs text-emerald-300">
                    Ihre Anfrage wurde erfolgreich gesendet.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div role="alert" aria-live="assertive" className="text-right text-xs text-rose-300">
                    Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
