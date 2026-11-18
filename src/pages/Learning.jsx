import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { SIKHI_LEARNING_MODULES } from '../data/learning';

export default function Learning() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7D5F12]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIKHI_LEARNING_MODULES.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-2xl p-6 border border-[#E6DEC8] hover:border-[#D4AF37] transition shadow-2xs flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <span className="text-[12px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 text-[#7D5F12]">
                  {module.tag}
                </span>
                <h2 className="font-serif text-xl font-bold text-[#1C120C]">{module.title}</h2>
                <p className="text-sm text-[#5C4938] leading-relaxed">{module.summary}</p>
              </div>
              <div className="space-y-4 pt-2 border-t border-[#E6DEC8]">
                <div className="space-y-1.5">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#1C120C]">
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
              </div>
            </div>
          ))}
        </div>

        <section className="rounded-2xl border border-[#D4AF37]/50 bg-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7D5F12]">App walkthrough</span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C120C]">Explore the Gurbani World App Guide</h2>
            <p className="text-sm text-[#5C4938] leading-relaxed">
              Learn how to use Daily Hukamnama, Nitnem, Gurbani reading, Simran Mala, Live Kirtan,
              Daily Path Count and the app's Sikh learning resources.
            </p>
          </div>
          <Link
            to="/learning/gurbani-world-app-guide"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C120C] text-[#FAF7F2] px-5 py-3 text-sm font-semibold hover:bg-[#2A1B12] transition shrink-0"
          >
            Read the App Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </section>
  );
}
