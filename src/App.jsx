import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Learning from './pages/Learning';
import AppShowcase from './pages/AppShowcase';
import AboutApp from './pages/AboutApp';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import AppPrivacyPolicy from './pages/AppPrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="learning" element={<Learning />} />
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
