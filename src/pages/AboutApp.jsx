import { BRAND_CONFIG } from '../data/brand';
import { APP_FEATURE_CATEGORIES } from '../data/features';
import GooglePlayButton from '../components/GooglePlayButton';

export default function AboutApp() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 sm:p-12 border border-[#E6DEC8] shadow-2xs space-y-8">
        <div className="border-b border-[#E6DEC8] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7D5F12]">
              Application Overview
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#1C120C] mt-1">About This App</h1>
            <p className="text-xs text-[#6E5A48] mt-1">
              Gurbani World App • Developed by {BRAND_CONFIG.organization} (
              {BRAND_CONFIG.playStoreDeveloper})
            </p>
          </div>
          <GooglePlayButton variant="gold" />
        </div>

        <div className="space-y-6 text-sm text-[#4A3B2C] leading-relaxed">
          <div className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">
              Purpose of the Gurbani World App
            </h2>
            <p>
              The <strong>Gurbani World</strong> Android application is built as an all-in-one Sikh
              spiritual companion designed to help the global Sangat stay connected with daily
              Gurbani, Nitnem Banis, Hukamnama Sahib, and Sikhi learning resources in a peaceful,
              structured mobile experience.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">
              Core Modules Included in the App
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {APP_FEATURE_CATEGORIES.map((cat) => (
                <li
                  key={cat.id}
                  className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-1"
                >
                  <p className="font-serif font-bold text-[#1C120C]">
                    {cat.code}. {cat.title}
                  </p>
                  <p className="text-xs text-[#5C4938]">{cat.subtitle}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">
              Development Under Singh Tech
            </h2>
            <p>
              Developed with devotion under <strong>{BRAND_CONFIG.organization}</strong> and
              published on Google Play under developer account{' '}
              <strong>{BRAND_CONFIG.playStoreDeveloper}</strong>, Gurbani World focuses on
              authenticity, clean navigation, and accessibility for learners and devotees of all
              ages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
