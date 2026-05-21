import { useEffect } from 'react';
import { useCanonical } from '../../hooks/useCanonical';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ContactHero from './components/ContactHero';
import ContactFormSection from './components/ContactFormSection';
import MapSection from './components/MapSection';
import WhyContactUs from './components/WhyContactUs';
import ContactCTA from './components/ContactCTA';

export default function ContactPage() {
  useCanonical('/contact', {
    description:
      'Contact Casa Associates for architecture, construction, interior design, and liaisoning services in Hyderabad. Call +91 90009 75046 or WhatsApp us. Office at Banjara Hills.',
  });

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Casa Associates | Architects & Construction Hyderabad',
      description: 'Contact Casa Associates for architecture, construction, interior design, and liaisoning services in Hyderabad. Call +91 90009 75046 or WhatsApp us. Office at Banjara Hills.',
      url: `${siteUrl}/contact`,
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', url: siteUrl, name: 'Casa Associates' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Casa Associates',
        telephone: '+91-90009-75046',
        email: 'contact@casaassociates.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4th Floor, Bhooma Plaza, Road No. 01, Avenue 07, Street 04, Near GVK One Mall',
          addressLocality: 'Banjara Hills, Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500034',
          addressCountry: 'IN',
        },
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'contact-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Contact Casa Associates | Architects & Construction Hyderabad — Banjara Hills';
    return () => {
      const el = document.getElementById('contact-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactFormSection />
        <MapSection />
        <WhyContactUs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
