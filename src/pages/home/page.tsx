import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import SustainabilitySection from './components/SustainabilitySection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import AchievementsStrip from './components/AchievementsStrip';
import CTASection from './components/CTASection';
import { useCanonical } from '../../hooks/useCanonical';

export default function Home() {
  useCanonical('/', {
    description:
      'Casa Associates — End-to-end architecture & construction services in Hyderabad. Architects in Hyderabad, interior design, building approvals & liaisoning. 15+ years, 120+ projects, 200+ happy clients. Banjara Hills.',
  });

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SustainabilitySection />
        <WhyChooseUs />
        <TestimonialsSection />
        <AchievementsStrip />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
