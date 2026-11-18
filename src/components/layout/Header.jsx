import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Smartphone, Menu, X, ChevronRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/brand';
import { GurbaniWorldLogo } from '../GurbaniWorldLogo';
import GooglePlayButton from '../GooglePlayButton';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/features', label: 'App Features' },
  { path: '/learning', label: 'Sikhi Learning' },
  { path: '/app', label: 'Gurbani World App' },
  { path: '/about-app', label: 'About This App' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#1C120C]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="focus:outline-none cursor-pointer">
          <GurbaniWorldLogo size={42} lightText={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `inline-block px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#D4AF37] bg-[#2D1E15] border border-[#D4AF37]/30'
                    : 'text-[#FAF7F2]/85 hover:text-[#D4AF37] hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Header CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={BRAND_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#1C120C] text-sm font-bold shadow hover:brightness-105 transition"
          >
            <Smartphone className="w-4 h-4" />
            <span>Get App</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#FAF7F2] hover:bg-white/10 border border-[#D4AF37]/30"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C120C] border-t border-[#D4AF37]/25 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-4 py-3 rounded-xl text-base font-medium transition flex items-center justify-between ${
                  isActive
                    ? 'bg-[#2C1D14] text-[#D4AF37] border border-[#D4AF37]/30'
                    : 'text-[#FAF7F2]/90 hover:bg-white/5'
                }`
              }
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </NavLink>
          ))}
          <div className="pt-3">
            <GooglePlayButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
