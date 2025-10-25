import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/HeroSection';
import SobreMiSection from '@/components/SobreMiSection';
import ManifiestoSection from '@/components/ManifiestoSection';
import MetodologiaSection from '@/components/MetodologiaSection';
import ServiciosSection from '@/components/ServiciosSection';
import CasosExitoSection from '@/components/CasosExitoSection';
import ParaQuienSection from '@/components/ParaQuienSection';
import ContactoSection from '@/components/ContactoSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SobreMiSection />
      <ManifiestoSection />
      <MetodologiaSection />
      <ServiciosSection />
      <CasosExitoSection />
      <ParaQuienSection />
      <ContactoSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
