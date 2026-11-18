export const GurbaniWorldIcon = ({ size = 44, className = '' }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative flex items-center justify-center rounded-xl bg-gradient-to-b from-[#064A4D] to-[#032D30] border border-[#D4AF37]/75 shadow-[0_4px_16px_rgba(212,175,55,0.22)] shrink-0 overflow-hidden ${className}`}
    aria-label="Gurbani World Official App Logo"
  >
    <img src="/logo.png" alt="Gurbani World Logo" className="w-full h-full object-cover" />
  </div>
);

export const GurbaniWorldLogo = ({ size = 44, lightText = true }) => (
  <div className="inline-flex items-center gap-3 select-none">
    {/* Official Gurbani World App Icon */}
    <GurbaniWorldIcon size={size} />

    <div className="flex flex-col text-left">
      <span
        className={`font-serif font-extrabold tracking-[0.06em] text-base sm:text-xl leading-none ${
          lightText ? 'text-[#FAF7F2]' : 'text-[#1C120C]'
        }`}
      >
        GURBANI WORLD
      </span>
      <span
        className={`text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] mt-1 font-semibold ${
          lightText ? 'text-[#D4AF37]' : 'text-[#9A7418]'
        }`}
      >
        By Singh Tech
      </span>
    </div>
  </div>
);
