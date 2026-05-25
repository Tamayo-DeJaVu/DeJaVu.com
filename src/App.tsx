import CustomCursor from './CustomCursor';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ArtistsSection from './ArtistsSection';
import ReleasesSection from './ReleasesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Navigation from './Navigation';
import { useScrollReveal } from './useScrollReveal';

export default function App() {
  useScrollReveal();
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <ArtistsSection />
        <ReleasesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
