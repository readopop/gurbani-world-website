import { ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';

const GooglePlayButton = ({ className = '', variant = 'gold' }) => (
  <a
    href={BRAND_CONFIG.playStoreUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:-translate-y-0.5 ${
      variant === 'gold'
        ? 'bg-gradient-to-r from-[#D4AF37] via-[#E2C04D] to-[#C59B27] text-[#1C120C] hover:shadow-[#D4AF37]/25'
        : 'bg-[#1C120C] text-[#FAF7F2] border border-[#D4AF37]/50 hover:bg-[#2A1B12]'
    } ${className}`}
  >
    {/* Clean Google Play Triangle Vector */}
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.78 1.78 0 0 1-.486-1.236V3.05c0-.482.185-.922.485-1.236zm11.246 11.247l2.796 2.796-11.494 6.556 8.698-9.352zm3.924-2.238l2.14 1.22c.61.348.61 1.566 0 1.914l-2.14 1.22-3.046-3.046 3.046-1.308zM6.157 1.587l11.494 6.556-2.796 2.796-8.698-9.352z" />
    </svg>
    <div className="flex flex-col text-left leading-tight">
      <span className="text-[10px] uppercase tracking-wider opacity-85 font-medium">Get it on</span>
      <span className="text-sm sm:text-base font-bold tracking-tight">Google Play</span>
    </div>
    <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform ml-1" />
  </a>
);

export default GooglePlayButton;
