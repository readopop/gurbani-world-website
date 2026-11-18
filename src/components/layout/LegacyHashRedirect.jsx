import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Old links such as /#about or /#features keep working: they are redirected to the clean URL.
const LEGACY_HASH_ROUTES = {
  home: '/',
  about: '/about',
  features: '/features',
  learning: '/learning',
  app: '/app',
  'about-app': '/about-app',
  contact: '/contact',
  privacy: '/privacy',
  'app-privacy-policy': '/app-privacy-policy',
  terms: '/terms',
};

export default function LegacyHashRedirect() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const target = LEGACY_HASH_ROUTES[hash.slice(1)];
    if (target) navigate(target, { replace: true });
  }, [pathname, hash, navigate]);

  return null;
}
