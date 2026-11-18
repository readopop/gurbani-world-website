import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import LegacyHashRedirect from './LegacyHashRedirect';
import usePageMeta from '../../hooks/usePageMeta';

export default function Layout() {
  usePageMeta();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C120C] selection:bg-[#D4AF37]/30 selection:text-[#1C120C]">
      <ScrollToTop />
      <LegacyHashRedirect />
      <Header />

      <main className="flex-grow">
        {/* Secondary pages are code-split (see App.jsx); keep the layout stable while one loads. */}
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
