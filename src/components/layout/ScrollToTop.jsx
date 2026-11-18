import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Matches the original behaviour: every navigation scrolls smoothly back to the top.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
