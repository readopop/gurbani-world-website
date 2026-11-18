import { Link } from 'react-router-dom';
import { Smartphone, ExternalLink, Code2 } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/brand';
import { GurbaniWorldLogo } from '../GurbaniWorldLogo';

export default function Footer({ onOpenSeoBlueprint }) {
  return (
    <footer className="bg-[#1C120C] text-[#FAF7F2] border-t border-[#D4AF37]/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#D4AF37]/20">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <GurbaniWorldLogo size={44} lightText={true} />
            <p className="font-hindi text-sm sm:text-base text-[#FAF7F2]/85 leading-relaxed max-w-md pt-1">
              {BRAND_CONFIG.hindiFooterDesc}
            </p>
            <p className="text-xs text-[#D4AF37] font-serif">“{BRAND_CONFIG.tagline}”</p>
          </div>

          {/* Primary Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Explore Gurbani World
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#FAF7F2]/80">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-[#D4AF37] transition cursor-pointer">
                  App Features
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-[#D4AF37] transition cursor-pointer">
                  Sikhi Learning
                </Link>
              </li>
              <li>
                <Link to="/app" className="hover:text-[#D4AF37] transition cursor-pointer">
                  Gurbani World App
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & App Download Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Official App & Legal
            </h3>
            <ul className="space-y-2 text-sm text-[#FAF7F2]/80">
              <li>
                <Link to="/privacy" className="hover:text-[#D4AF37] transition cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/app-privacy-policy"
                  className="hover:text-[#D4AF37] transition text-xs text-[#D4AF37] cursor-pointer"
                >
                  Android App Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#D4AF37] transition cursor-pointer">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
            <div className="pt-1">
              <a
                href={BRAND_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2A1B12] hover:bg-[#362317] border border-[#D4AF37]/45 text-xs font-bold text-[#D4AF37] transition"
              >
                <Smartphone className="w-4 h-4" />
                <span>Google Play Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Developer Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/70">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-[#D4AF37] font-medium">
              Developed with devotion by {BRAND_CONFIG.organization}.
            </p>
            <button
              type="button"
              onClick={onOpenSeoBlueprint}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 text-[#FAF7F2]/85 transition cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>SEO & Netlify Config</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
