import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Sun, ArrowRight, GraduationCap } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';
import { GurbaniWorldIcon } from '../components/GurbaniWorldLogo';
import GooglePlayButton from '../components/GooglePlayButton';
import AppPhoneMockup from '../components/AppPhoneMockup';

export default function Home() {
  const [activeHeroScreen, setActiveHeroScreen] = useState(0);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C120C] via-[#241710] to-[#110A06] text-[#FAF7F2] py-20 lg:py-28 border-b border-[#D4AF37]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <GurbaniWorldIcon
                size={76}
                className="rounded-2xl border-2 shadow-[0_8px_28px_rgba(212,175,55,0.28)]"
              />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E1D13] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Platform by {BRAND_CONFIG.organization}</span>
              </div>
            </div>

            <h1 className="font-hindi text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF7F2] tracking-tight leading-tight">
              {BRAND_CONFIG.hindiHeadline}
            </h1>

            <p className="font-hindi text-base sm:text-lg text-[#FAF7F2]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {BRAND_CONFIG.hindiSubheadline}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <GooglePlayButton variant="gold" />
              <Link
                to="/features"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D4AF37]/50 text-[#FAF7F2] font-semibold text-sm transition cursor-pointer"
              >
                <span>Explore Our Features</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </div>

            {/* Manually Editable Milestone */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#1C120C] flex items-center justify-center text-xs font-bold border border-[#1C120C]">
                  ੴ
                </div>
                <div className="w-8 h-8 rounded-full bg-[#2A1B12] text-[#D4AF37] flex items-center justify-center text-xs font-bold border border-[#D4AF37]/40">
                  ਸ
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">{BRAND_CONFIG.downloadMilestone}</p>
                <p className="text-xs text-[#FAF7F2]/70">Trusted by the global Sikh Sangat</p>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Android App Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <AppPhoneMockup activeScreen={activeHeroScreen} onScreenChange={setActiveHeroScreen} />
          </div>
        </div>
      </section>

      {/* Quick Introduction Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7D5F12]">
              Connecting With Guru
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C120C]">
              Your Digital Companion for Sikh Spirituality
            </h2>
            <p className="text-sm sm:text-base text-[#5C4938] leading-relaxed">
              Gurbani World brings daily Hukamnama Sahib, Nitnem Banis, Simran tools, and Sikh
              learning resources directly to your fingertips.
            </p>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-[#E6DEC8] shadow-2xs space-y-4 hover:border-[#D4AF37] transition">
              <div className="w-12 h-12 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C120C]">
                Daily Spiritual Connection
              </h3>
              <p className="text-sm text-[#5C4938] leading-relaxed">
                Stay updated with Daily Hukamnama Sahib, Aaj Ka Vichar, Sangrand & Gurpurab
                specials, and daily Seva path submissions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E6DEC8] shadow-2xs space-y-4 hover:border-[#D4AF37] transition">
              <div className="w-12 h-12 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C120C]">
                Nitnem & Gurbani Library
              </h3>
              <p className="text-sm text-[#5C4938] leading-relaxed">
                Access over 30 sacred Nitnem Banis, Sri Guru Granth Sahib Ji, Sri Dasam Granth Sahib
                Ji, and advanced Gurbani search tools.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E6DEC8] shadow-2xs space-y-4 hover:border-[#D4AF37] transition">
              <div className="w-12 h-12 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C120C]">
                Sikh Learning & History
              </h3>
              <p className="text-sm text-[#5C4938] leading-relaxed">
                Expand your understanding of Sikh Gurus, Sikh history, 52 Hukamas, Punjabi language,
                and Nanakshahi calendar dates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
