import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Home, Layout and NotFound stay in the main bundle; every other page loads on demand.
const About = lazy(() => import('./pages/About'));
const Features = lazy(() => import('./pages/Features'));
const Learning = lazy(() => import('./pages/Learning'));
const GurbaniWorldAppGuide = lazy(() => import('./pages/GurbaniWorldAppGuide'));
const AppShowcase = lazy(() => import('./pages/AppShowcase'));
const AboutApp = lazy(() => import('./pages/AboutApp'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const AppPrivacyPolicy = lazy(() => import('./pages/AppPrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="learning" element={<Learning />} />
          <Route path="learning/gurbani-world-app-guide" element={<GurbaniWorldAppGuide />} />
          <Route path="app" element={<AppShowcase />} />
          <Route path="about-app" element={<AboutApp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="app-privacy-policy" element={<AppPrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
