import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import LegacyHashRedirect from './LegacyHashRedirect';
import SeoBlueprintModal from '../SeoBlueprintModal';
import usePageMeta from '../../hooks/usePageMeta';

export default function Layout() {
  const [seoBlueprintOpen, setSeoBlueprintOpen] = useState(false);
  usePageMeta();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C120C] selection:bg-[#D4AF37]/30 selection:text-[#1C120C]">
      {/* Load Google Fonts for Regal Serif, Modern UI Sans, and Crisp Devanagari Hindi */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Plus Jakarta Sans', 'Noto Sans Devanagari', sans-serif;
        }
        .font-serif {
          font-family: 'Cinzel', Georgia, serif;
        }
        .font-hindi {
          font-family: 'Noto Sans Devanagari', 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <ScrollToTop />
      <LegacyHashRedirect />
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer onOpenSeoBlueprint={() => setSeoBlueprintOpen(true)} />

      {seoBlueprintOpen && <SeoBlueprintModal onClose={() => setSeoBlueprintOpen(false)} />}
    </div>
  );
}
