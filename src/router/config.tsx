import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const ProjectsPage = lazy(() => import('../pages/projects/page'));
const ProjectDetailPage = lazy(() => import('../pages/projects/[id]/page'));
const SustainabilityPage = lazy(() => import('../pages/sustainability/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const ArchitectsEngineersPage = lazy(() => import('../pages/services/architects-engineers/page'));
const BuildersDevelopersPage = lazy(() => import('../pages/services/builders-developers/page'));
const InteriorDesigningPage = lazy(() => import('../pages/services/interior-designing/page'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy/page'));
const LandingPage = lazy(() => import('../pages/landing-page/page'));
const LandingThankYou = lazy(() => import('../pages/landing-thank-you/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

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
    path: '/landing-page/thank-you',
    element: <LandingThankYou />,
  },
  {
    path: '/landing-page',
    element: <LandingPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;