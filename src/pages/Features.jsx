import { useState } from 'react';
import { Search, CheckCircle2 } from 'lucide-react';
import { APP_FEATURE_CATEGORIES } from '../data/features';

export default function Features() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [featureSearch, setFeatureSearch] = useState('');

  const filteredCategories = APP_FEATURE_CATEGORIES.filter(
    (cat) => selectedCategory === 'all' || cat.id === selectedCategory,
  )
    .map((cat) => ({
      ...cat,
      features: cat.features.filter(
        (f) =>
          f.name.toLowerCase().includes(featureSearch.toLowerCase()) ||
          f.desc.toLowerCase().includes(featureSearch.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.features.length > 0);
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header & Filter Controls */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7D5F12]">
            Complete Android App Capabilities
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C120C]">
            Explore Gurbani World Features
          </h1>
          <p className="text-sm sm:text-base text-[#5C4938] leading-relaxed">
            Discover all 7 structured modules of the Gurbani World App, designed to support your
            daily spiritual journey.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#7D5F12]" />
              <input
                type="text"
                aria-label="Search app features"
                value={featureSearch}
                onChange={(e) => setFeatureSearch(e.target.value)}
                placeholder="Search app features (e.g. Japji Sahib, Hukamnama, Simran)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#E6DEC8] focus:border-[#D4AF37] focus:outline-none text-sm shadow-2xs placeholder:text-[#6E5A48]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#1C120C] text-[#D4AF37]'
                  : 'bg-white border border-[#E6DEC8] text-[#5C4938] hover:border-[#D4AF37]'
              }`}
            >
              All Features (7 Categories)
            </button>
            {APP_FEATURE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1C120C] text-[#D4AF37]'
                    : 'bg-white border border-[#E6DEC8] text-[#5C4938] hover:border-[#D4AF37]'
                }`}
              >
                {cat.code}. {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Features Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.id}
                id={category.id}
                className="bg-white rounded-2xl p-6 sm:p-9 border border-[#E6DEC8] shadow-2xs space-y-6"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6DEC8] pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center shrink-0">
                      <CatIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#D4AF37]/40 text-[#7D5F12]">
                          Category {category.code}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C120C] mt-1">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#5C4938] leading-relaxed">{category.subtitle}</p>

                {/* Feature Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {category.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E6DEC8] hover:border-[#D4AF37] transition space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif font-bold text-base text-[#1C120C]">
                            {feature.name}
                          </h3>
                          <CheckCircle2 className="w-4 h-4 text-[#7D5F12] shrink-0 mt-0.5" />
                        </div>
                        <p className="text-xs text-[#5C4938] leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#E6DEC8]">
              <p className="text-sm font-semibold text-[#5C4938]">
                No features found matching "{featureSearch}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setFeatureSearch('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs font-bold text-[#7D5F12] underline cursor-pointer"
              >
                Clear search filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
