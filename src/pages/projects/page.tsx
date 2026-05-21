import { useEffect } from 'react';
import { useCanonical } from '../../hooks/useCanonical';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGrid from './components/ProjectsGrid';
import BeforeAfter from './components/BeforeAfter';
import ProjectsCTA from './components/ProjectsCTA';

export default function ProjectsPage() {
  useCanonical('/projects', {
    description:
      'Explore 120+ completed residential, commercial, and interior projects by Casa Associates in Hyderabad. Premium construction and architecture portfolio across Telangana.',
  });

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Projects Portfolio | Casa Associates Hyderabad',
      description: 'Explore 120+ completed residential, commercial, and interior projects by Casa Associates in Hyderabad. Premium construction and architecture portfolio across Telangana.',
      url: `${siteUrl}/projects`,
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', url: siteUrl, name: 'Casa Associates' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${siteUrl}/projects` },
        ],
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'projects-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Projects Portfolio Hyderabad | Casa Associates — 120+ Completed Projects';
    return () => {
      const el = document.getElementById('projects-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <BeforeAfter />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  );
}
