import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Info } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';
import GooglePlayButton from '../components/GooglePlayButton';
import AppPhoneMockup from '../components/AppPhoneMockup';

export default function AppShowcase() {
  const [activeShowcaseScreen, setActiveShowcaseScreen] = useState(0);
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Banner */}
        <div className="bg-gradient-to-br from-[#1C120C] via-[#241710] to-[#110A06] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E1D13] border border-[#D4AF37]/45 text-[#D4AF37] text-xs font-bold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Official Android Application</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Gurbani World App
            </h1>

            <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed max-w-xl">
              Bring Gurbani, Nitnem, daily Hukamnama Sahib, Simran Mala, and Sikh educational
              resources with you anywhere. Download the official app published by{' '}
              {BRAND_CONFIG.playStoreDeveloper} under {BRAND_CONFIG.organization}.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <GooglePlayButton variant="gold" />
              <Link
                to="/about-app"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#FAF7F2] text-sm font-semibold transition cursor-pointer"
              >
                <Info className="w-4 h-4 text-[#D4AF37]" />
                <span>About This App</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <AppPhoneMockup
              activeScreen={activeShowcaseScreen}
              onScreenChange={setActiveShowcaseScreen}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
