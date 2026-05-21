import type { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/home/page';
import AboutPage from '../pages/about/page';
import ServicesPage from '../pages/services/page';
import ProjectsPage from '../pages/projects/page';
import ProjectDetailPage from '../pages/projects/[id]/page';
import SustainabilityPage from '../pages/sustainability/page';
import ContactPage from '../pages/contact/page';
import ArchitectsEngineersPage from '../pages/services/architects-engineers/page';
import BuildersDevelopersPage from '../pages/services/builders-developers/page';
import InteriorDesigningPage from '../pages/services/interior-designing/page';
import PrivacyPolicyPage from '../pages/privacy/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetailPage />,
  },
  {
    path: '/sustainability',
    element: <SustainabilityPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/services/architects-engineers',
    element: <ArchitectsEngineersPage />,
  },
  {
    path: '/services/builders-developers',
    element: <BuildersDevelopersPage />,
  },
  {
    path: '/services/interior-designing',
    element: <InteriorDesigningPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;