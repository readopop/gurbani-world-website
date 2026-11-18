import { BRAND_CONFIG } from '../data/brand';

export default function Terms() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 sm:p-12 border border-[#E6DEC8] shadow-2xs space-y-6">
        <div className="border-b border-[#E6DEC8] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7D5F12]">
              Legal & Trust Documentation
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#1C120C] mt-1">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[#6E5A48] mt-1">
              Gurbani World • Developed by {BRAND_CONFIG.organization}
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E6DEC8] text-[#5C4938] self-start">
            Effective Year: {new Date().getFullYear()}
          </span>
        </div>

        <div className="space-y-5 text-sm text-[#4A3B2C] leading-relaxed">
          <p>
            Welcome to the official website of <strong>Gurbani World</strong>, an all-in-one Sikh
            spiritual and educational platform created by{' '}
            <strong>{BRAND_CONFIG.organization}</strong>. By accessing or using this website and our
            linked Android application, you agree to comply with these Terms & Conditions.
          </p>

          <div className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#1C120C]">
              1. Reverent & Respectful Use of Sacred Content
            </h2>
            <p>
              All Gurbani verses, Nitnem Banis, Daily Hukamnama Sahib updates, translations, and
              Sikh historical articles are provided strictly for personal devotion, spiritual
              reflection, and educational study. Users agree to treat all Gurbani text and Sikh
              heritage resources with dignity and respect.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#1C120C]">
              2. Intellectual Property & Brand Identity
            </h2>
            <p>
              The <strong>Gurbani World</strong> name, official crest, website design, custom
              graphics, and original software architecture belong to{' '}
              <strong>{BRAND_CONFIG.organization}</strong>. You may share links to our official
              website and Google Play Store listing freely, provided you do not misrepresent
              affiliation or redistribute modified application packages.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#1C120C]">
              3. Educational Purpose & Accuracy Disclaimer
            </h2>
            <p>
              While we strive for complete scriptural and historical accuracy across Punjabi, Hindi,
              and English content, translations and educational summaries are offered as learning
              aids. Seekers are always encouraged to consult Sri Guru Granth Sahib Ji and learned
              Gurmat scholars for deeper study.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#1C120C]">
              4. Updates to Platform & Terms
            </h2>
            <p>
              {BRAND_CONFIG.organization} may update features, educational modules, or these Terms &
              Conditions periodically as Gurbani World continues to grow. Continued use of the
              platform constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
