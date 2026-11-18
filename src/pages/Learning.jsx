import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { SIKHI_LEARNING_MODULES } from '../data/learning';

export default function Learning() {
  const [activeLearningModule, setActiveLearningModule] = useState(null);
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7418]">
            Educational Resources
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C120C]">
            Sikhi Learning Hub
          </h1>
          <p className="text-sm sm:text-base text-[#5C4938] leading-relaxed">
            Explore organized educational resources on Sikh history, Sikh Gurus, fundamentals of
            Sikhi, Gurmukhi script, and 52 Hukamas.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIKHI_LEARNING_MODULES.map((module) => {
            const isExpanded = activeLearningModule === module.id;
            return (
              <div
                key={module.id}
                className="bg-white rounded-2xl p-6 border border-[#E6DEC8] hover:border-[#D4AF37] transition shadow-2xs flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 text-[#9A7418]">
                    {module.tag}
                  </span>
                  <h2 className="font-serif text-xl font-bold text-[#1C120C]">{module.title}</h2>
                  <p className="text-sm text-[#5C4938] leading-relaxed">{module.summary}</p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#E6DEC8]">
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1C120C]">
                      Key Study Topics:
                    </p>
                    <ul className="space-y-1 text-xs text-[#5C4938]">
                      {module.sampleTopics.map((topic) => (
                        <li key={topic} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveLearningModule(isExpanded ? null : module.id)}
                    className="w-full py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#E6DEC8] text-xs font-bold text-[#1C120C] flex items-center justify-center gap-1 transition cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Excerpt' : 'Read Sample Excerpt'}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs text-[#4A3B2C] leading-relaxed italic">
                      "{module.sampleExcerpt}"
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
