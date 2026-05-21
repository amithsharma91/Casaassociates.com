import { useEffect } from 'react';
import { useCanonical } from '../../hooks/useCanonical';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SustainabilityHero from './components/SustainabilityHero';
import SustainabilityIntro from './components/SustainabilityIntro';
import CoreFeatures from './components/CoreFeatures';
import GreenBuilding from './components/GreenBuilding';
import MaterialsTechniques from './components/MaterialsTechniques';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import SustainabilityCTA from './components/SustainabilityCTA';

export default function SustainabilityPage() {
  useCanonical('/sustainability', {
    description:
      'Casa Associates leads sustainable construction and green building practices in Hyderabad. IGBC-aligned designs, eco-friendly materials, energy-efficient architecture across Telangana.',
  });

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Sustainable Construction & Green Building Hyderabad | Casa Associates',
      description: 'Casa Associates leads sustainable construction and green building practices in Hyderabad. IGBC-aligned designs, eco-friendly materials, energy-efficient architecture across Telangana.',
      url: `${siteUrl}/sustainability`,
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', url: siteUrl, name: 'Casa Associates' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Sustainability', item: `${siteUrl}/sustainability` },
        ],
      },
      keywords: 'green building Hyderabad, sustainable construction Telangana, IGBC certified architect, eco-friendly construction Hyderabad',
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'sustainability-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Sustainable Construction & Green Building Hyderabad | Casa Associates';
    return () => {
      const el = document.getElementById('sustainability-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <SustainabilityHero />
        <SustainabilityIntro />
        <CoreFeatures />
        <GreenBuilding />
        <MaterialsTechniques />
        <BenefitsSection />
        <ProcessSection />
        <SustainabilityCTA />
      </main>
      <Footer />
    </>
  );
}
