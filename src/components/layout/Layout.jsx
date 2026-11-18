import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import LegacyHashRedirect from './LegacyHashRedirect';
import usePageMeta from '../../hooks/usePageMeta';

export default function Layout() {
  usePageMeta();

  return (
    <div className="min-h-screen flex flex-col ...">
      {/* <style> block jaisa tha waisa hi */}
      <ScrollToTop />
      <LegacyHashRedirect />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}