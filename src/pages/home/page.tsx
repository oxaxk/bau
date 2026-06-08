import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Seo from '../../components/seo/Seo';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import { kiralSite } from '../../lib/kiral-content';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Seo title="Kiral Bau" description={kiralSite.metaDescription} path="/" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
