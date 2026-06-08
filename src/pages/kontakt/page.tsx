import PageShell from '../../components/feature/PageShell';
import ContactSection from '../home/components/ContactSection';

export default function KontaktPage() {
  return (
    <PageShell
      title="Kontakt"
      description="Kontakt zu Kiral Bau in Berlin: Telefon, E-Mail und Projektanfrage für Sanierung, WDVS, Fassade, Abbruch und Innenausbau."
      path="/kontakt"
      className="bg-white"
    >
      <ContactSection />
    </PageShell>
  );
}
