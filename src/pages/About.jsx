import { BRAND_CONFIG } from '../data/brand';

export default function About() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 sm:p-12 border border-[#E6DEC8] shadow-2xs space-y-8">
        <div className="border-b border-[#E6DEC8] pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
            About The Platform
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#1C120C] mt-1">About Gurbani World</h1>
          <p className="text-xs text-[#6E5A48] mt-1">
            Developed under Singh Tech • Tagline: {BRAND_CONFIG.tagline}
          </p>
        </div>

        <div className="space-y-6 text-sm text-[#4A3B2C] leading-relaxed">
          <div className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">What is Gurbani World?</h2>
            <p>
              Gurbani World is an all-in-one Sikh spiritual and Gurbani learning platform developed
              under <strong>Singh Tech</strong>. It is designed to make Gurbani, Nitnem, Sikh
              teachings, spiritual knowledge, and Sikh history accessible to everyone through
              digital technology.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">
              Why Was Gurbani World Created?
            </h2>
            <p>
              In today's fast-paced digital era, seekers need a reliable, reverent, and easily
              accessible digital sanctuary to connect with Gurbani and Sikh heritage. Gurbani World
              was created to bridge traditional Sikh spirituality with modern technology, ensuring
              that daily Nitnem, Hukamnama Sahib, and sacred scriptures are always within reach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-2">
              <h3 className="font-serif font-bold text-base text-[#1C120C]">Our Vision</h3>
              <p className="text-xs sm:text-sm text-[#5C4938]">
                To establish a recognizable, trusted global digital identity for Sikh spirituality,
                making Gurbani and Gurmat wisdom universally accessible.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-2">
              <h3 className="font-serif font-bold text-base text-[#1C120C]">Our Mission</h3>
              <p className="text-xs sm:text-sm text-[#5C4938]">
                To empower seekers worldwide with daily Hukamnama updates, 30+ Nitnem Banis, Simran
                tools, and comprehensive Sikh educational resources.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">
              Our Commitment to Accessibility & Devotion
            </h2>
            <p>
              We are deeply committed to maintaining scriptural accuracy, a peaceful aesthetic free
              from clutter, and robust privacy practices. Gurbani World stands as your official
              companion for daily spiritual inspiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
