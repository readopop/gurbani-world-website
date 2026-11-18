import { Link } from 'react-router-dom';
import { AlertCircle, Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="py-24 bg-[#FAF7F2] text-center px-4">
      <div className="max-w-lg mx-auto bg-white rounded-3xl p-10 border border-[#D4AF37]/50 shadow-sm space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7418]">
          Error 404 • Page Not Found
        </p>
        <h1 className="font-serif text-3xl font-bold text-[#1C120C]">
          This Page Could Not Be Located
        </h1>
        <p className="text-sm text-[#5C4938] leading-relaxed">
          The link you followed may have moved or is no longer available. Return to the Gurbani
          World home page to continue exploring Nitnem, Gurbani, and Sikhi Learning.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1C120C] text-[#D4AF37] font-bold text-sm cursor-pointer"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/features"
            className="inline-block text-center w-full sm:w-auto px-6 py-3 rounded-xl border border-[#E6DEC8] text-sm font-semibold text-[#1C120C] cursor-pointer"
          >
            Explore App Features
          </Link>
        </div>
      </div>
    </section>
  );
}
