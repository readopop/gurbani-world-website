import {
  Sparkles,
  Sun,
  Search,
  PlayCircle,
  Headphones,
  ChevronRight,
  Wifi,
  BatteryCharging,
  Volume2,
  Type,
  RotateCcw,
} from 'lucide-react';
import { useState } from 'react';

const AppPhoneMockup = ({ activeScreen = 0, onScreenChange }) => {
  const [malaCount, setMalaCount] = useState(27);
  const [baniLang, setBaniLang] = useState('gurmukhi');
  const [largeFont, setLargeFont] = useState(false);

  const screenTabs = ['Home', 'Nitnem', 'Simran', 'Kirtan'];

  const screens = [
    // Screen 0: Home Dashboard (Authentic Gurbani World Android UI)
    <div
      key="home-screen"
      className="p-3 space-y-2.5 bg-[#FAF7F2] h-full text-[#1C120C] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#1C120C] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-[10px]">
              GW
            </div>
            <div>
              <p className="text-[8.5px] uppercase tracking-widest text-[#9A7418] font-bold leading-none">
                ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ
              </p>
              <p className="font-serif font-bold text-xs text-[#1C120C] mt-0.5">Gurbani World</p>
            </div>
          </div>
          <span className="px-2 py-0.5 text-[9px] rounded-full bg-[#1C120C] text-[#D4AF37] font-bold">
            Nitnem
          </span>
        </div>

        {/* Daily Hukamnama Sahib Card (100% Authentic Mool Mantar Opening) */}
        <div className="mt-2.5 rounded-xl bg-gradient-to-br from-[#261810] to-[#140C08] p-2.5 text-[#FAF7F2] border border-[#D4AF37]/45 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1">
              <Sun className="w-2.5 h-2.5 text-[#E07A16]" /> Daily Hukamnama Sahib
            </span>
            <span className="text-[8.5px] px-1.5 py-0.2 rounded bg-white/10 text-[#FAF7F2]/85">
              Aaj Ka Vichar
            </span>
          </div>
          <p className="text-[11px] font-semibold text-[#FAF7F2] leading-snug">
            ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥
          </p>
          <p className="text-[9px] text-[#D4AF37] mt-1 flex items-center justify-between">
            <span>Sangrand & Gurpurab Specials</span>
            <span className="underline">Read →</span>
          </p>
        </div>

        {/* Quick Nitnem Grid */}
        <div className="mt-2.5">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[9.5px] font-bold uppercase tracking-wider text-[#5C4938]">
              Nitnem & Banis
            </p>
            <span className="text-[8.5px] text-[#9A7418] font-semibold">8 Banis</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {['Japji Sahib', 'Jaap Sahib', 'Rehras Sahib', 'Kirtan Sohila'].map((bani) => (
              <button
                key={bani}
                type="button"
                onClick={() => onScreenChange?.(1)}
                className="bg-white border border-[#E5DEC9] hover:border-[#D4AF37] rounded-lg px-2 py-1.5 flex items-center justify-between shadow-2xs text-left cursor-pointer"
              >
                <span className="text-[10.5px] font-bold text-[#1C120C]">{bani}</span>
                <ChevronRight className="w-3 h-3 text-[#C59B27]" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Modules & Seva Bar */}
      <div className="space-y-1.5">
        <div className="grid grid-cols-3 gap-1.5">
          <button
            type="button"
            onClick={() => onScreenChange?.(2)}
            className="bg-white border border-[#E5DEC9] rounded-lg p-1.5 text-center cursor-pointer hover:border-[#D4AF37]"
          >
            <Sparkles className="w-3 h-3 text-[#E07A16] mx-auto mb-0.5" />
            <p className="text-[8.5px] font-bold">Simran Mala</p>
          </button>
          <div className="bg-white border border-[#E5DEC9] rounded-lg p-1.5 text-center">
            <Search className="w-3 h-3 text-[#9A7418] mx-auto mb-0.5" />
            <p className="text-[8.5px] font-bold">Search Gurbani</p>
          </div>
          <button
            type="button"
            onClick={() => onScreenChange?.(3)}
            className="bg-white border border-[#E5DEC9] rounded-lg p-1.5 text-center cursor-pointer hover:border-[#D4AF37]"
          >
            <Headphones className="w-3 h-3 text-[#1C120C] mx-auto mb-0.5" />
            <p className="text-[8.5px] font-bold">Live Kirtan</p>
          </button>
        </div>

        <div className="rounded-lg bg-[#EFE7D6] border border-[#D4AF37]/35 px-2.5 py-1.5 flex items-center justify-between">
          <span className="text-[9px] font-bold text-[#1C120C]">Daily Path Count Seva</span>
          <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-[#1C120C] text-[#D4AF37] font-bold">
            Submit
          </span>
        </div>
      </div>
    </div>,

    // Screen 1: Multi-language Nitnem Reader (Verified Mool Mantar & Japji Sahib Pauri 1)
    <div
      key="reader-screen"
      className="p-3 space-y-2.5 bg-[#FAF7F2] h-full text-[#1C120C] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
          <div>
            <p className="font-serif font-bold text-xs">Japji Sahib</p>
            <p className="text-[9px] text-[#6E5A48]">Sri Guru Granth Sahib Ji • Ang 1</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setLargeFont(!largeFont)}
              className="p-1 rounded bg-[#EAE2D3] text-[#1C120C] cursor-pointer"
              title="Toggle text size"
            >
              <Type className="w-3 h-3" />
            </button>
            <div className="flex rounded-lg bg-[#EAE2D3] p-0.5 text-[8.5px] font-bold">
              {['gurmukhi', 'hindi', 'english'].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setBaniLang(lang)}
                  className={`px-1.5 py-0.5 rounded capitalize transition cursor-pointer ${
                    baniLang === lang ? 'bg-[#1C120C] text-[#D4AF37]' : 'text-[#5C4938]'
                  }`}
                >
                  {lang === 'gurmukhi' ? 'ਪੰ' : lang === 'hindi' ? 'हि' : 'EN'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2.5 bg-white rounded-xl p-3 border border-[#D4AF37]/35 shadow-2xs space-y-2 text-center">
          {baniLang === 'gurmukhi' && (
            <>
              <p
                className={`${largeFont ? 'text-sm' : 'text-xs'} font-bold text-[#1C120C] leading-relaxed`}
              >
                ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥
              </p>
              <div className="h-px bg-[#E6DEC8] w-16 mx-auto" />
              <p
                className={`${largeFont ? 'text-xs' : 'text-[10.5px]'} text-[#4A3B2C] font-medium leading-relaxed`}
              >
                ॥ ਜਪੁ ॥
                <br />
                ਆਦਿ ਸਚੁ ਜੁਗਾਦਿ ਸਚੁ ॥
                <br />
                ਹੈ ਭੀ ਸਚੁ ਨਾਨਕ ਹੋਸੀ ਭੀ ਸਚੁ ॥੧॥
              </p>
            </>
          )}
          {baniLang === 'hindi' && (
            <>
              <p
                className={`${largeFont ? 'text-sm' : 'text-xs'} font-bold text-[#1C120C] leading-relaxed font-hindi`}
              >
                ੴ सति नामु करता पुरखु निरभउ निरवैरु अकाल मूरति अजूनी सैभं गुर प्रसादि ॥
              </p>
              <div className="h-px bg-[#E6DEC8] w-16 mx-auto" />
              <p
                className={`${largeFont ? 'text-xs' : 'text-[10.5px]'} text-[#4A3B2C] font-medium leading-relaxed font-hindi`}
              >
                ॥ जपु ॥
                <br />
                आदि सचु जुगादि सचु ॥
                <br />
                है भी सचु नानक होसी भी सचु ॥१॥
              </p>
            </>
          )}
          {baniLang === 'english' && (
            <>
              <p
                className={`${largeFont ? 'text-xs' : 'text-[10.5px]'} font-bold text-[#1C120C] leading-relaxed`}
              >
                Ik Onkaar Sat Naam Kartaa Purakh Nirbhau Nirvair Akaal Moorat Ajoonee Saibhang Gur
                Prasaad.
              </p>
              <div className="h-px bg-[#E6DEC8] w-16 mx-auto" />
              <p
                className={`${largeFont ? 'text-[11px]' : 'text-[10px]'} text-[#4A3B2C] leading-relaxed`}
              >
                || Jap || True In The Primal Beginning. True Throughout The Ages. True Here And Now.
                O Nanak, Forever And Ever True. ||1||
              </p>
            </>
          )}
        </div>
      </div>

      <div className="rounded-lg bg-[#F2ECE1] p-2 text-[9.5px] text-[#4A3B2C] flex items-center justify-between border border-[#E5DEC9]">
        <span>Translations & Amrit Kirtan</span>
        <span className="font-bold text-[#9A7418]">Gurmukhi • Hindi • EN</span>
      </div>
    </div>,

    // Screen 2: Interactive 108-Bead Simran Mala
    <div
      key="mala-screen"
      className="p-3 flex flex-col justify-between bg-[#1C120C] h-full text-[#FAF7F2]"
    >
      <div className="flex items-center justify-between border-b border-[#D4AF37]/25 pb-2">
        <div>
          <p className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">
            Simran & Spirituality
          </p>
          <p className="font-serif font-bold text-xs">Waheguru Simran Mala</p>
        </div>
        <button
          type="button"
          onClick={() => setMalaCount(0)}
          className="p-1.5 rounded-lg bg-[#2B1C14] border border-[#D4AF37]/30 text-[#D4AF37] cursor-pointer"
          title="Reset Mala Counter"
        >
          <RotateCcw className="w-3 h-3" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center my-auto py-1">
        <button
          type="button"
          onClick={() => setMalaCount((c) => (c >= 108 ? 1 : c + 1))}
          className="relative w-32 h-32 rounded-full border-2 border-[#D4AF37] bg-gradient-to-b from-[#2E1E15] to-[#120A06] flex flex-col items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.2)] active:scale-95 transition cursor-pointer"
          title="Tap bead to increment Simran count"
        >
          <span className="text-xs font-bold text-[#E07A16] mb-0.5">ਵਾਹਿਗੁਰੂ</span>
          <span className="text-[9.5px] text-[#D4AF37] uppercase tracking-wider font-semibold">
            Waheguru
          </span>
          <span className="text-2xl font-serif font-extrabold text-white leading-tight">
            {malaCount}
          </span>
          <span className="text-[8.5px] text-[#FAF7F2]/65">/ 108 Beads</span>
        </button>
        <p className="text-[9.5px] text-[#D4AF37]/85 mt-2 font-medium">
          Tap Mala bead to count Simran
        </p>
      </div>

      <div className="bg-[#281A12] rounded-lg p-2 text-center border border-[#D4AF37]/30">
        <p className="text-[9.5px] text-[#FAF7F2]/90 font-medium">
          Daily Path Count Seva Submission
        </p>
      </div>
    </div>,

    // Screen 3: Sikhi Learning & Audio/Video
    <div
      key="learning-screen"
      className="p-3 space-y-2 bg-[#FAF7F2] h-full text-[#1C120C] flex flex-col justify-between"
    >
      <div>
        <div className="border-b border-[#D4AF37]/30 pb-1.5">
          <p className="text-[9px] uppercase tracking-widest text-[#9A7418] font-bold">
            Audio, Video & Learning
          </p>
          <p className="font-serif font-bold text-xs">Live Kirtan & Sikhi Hub</p>
        </div>

        {/* Live Kirtan Mini Player Card */}
        <div className="mt-2 rounded-xl bg-[#1C120C] text-[#FAF7F2] p-2.5 border border-[#D4AF37]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#D4AF37] text-[#1C120C] flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10.5px] font-bold text-white">Live Kirtan Stream</p>
              <p className="text-[8.5px] text-[#D4AF37]">Sikh Videos & Sikh Tube</p>
            </div>
          </div>
          <PlayCircle className="w-5 h-5 text-[#D4AF37]" />
        </div>

        <div className="mt-2 space-y-1">
          {[
            { title: 'Sikh Gurus & Sikh History', badge: 'Sikhi' },
            { title: '52 Hukamas & Sikh Calendar', badge: 'Hukams' },
            { title: 'Learn Punjabi & Sangrand', badge: 'Script' },
            { title: 'Maskeen Ji Vichar', badge: 'Vichar' },
            { title: 'Bachan Baba Nand Singh Ji', badge: 'Bachan' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E5DEC9] rounded-lg px-2 py-1.5 flex items-center justify-between"
            >
              <span className="text-[10px] font-bold text-[#1C120C]">{item.title}</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#FAF7F2] border border-[#D4AF37]/40 text-[#8A6614] font-bold">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[8.5px] text-center text-[#6E5A48]">
        Sri Guru Granth Sahib Ji • Sri Dasam Granth Sahib Ji
      </p>
    </div>,
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Realistic Android Hardware Frame */}
      <div className="relative mx-auto w-[276px] sm:w-[296px] rounded-[2.6rem] bg-gradient-to-b from-[#2B1D14] via-[#140D09] to-[#0E0906] p-[10px] border-[2.5px] border-[#D4AF37]/70 shadow-[0_28px_65px_-12px_rgba(0,0,0,0.75)]">
        {/* Hardware Side Buttons (Volume & Power) */}
        <div className="hidden sm:block absolute -right-[4px] top-24 w-[3px] h-10 bg-[#D4AF37]/60 rounded-r" />
        <div className="hidden sm:block absolute -right-[4px] top-38 w-[3px] h-14 bg-[#D4AF37]/60 rounded-r" />

        {/* Screen Inner Bezel */}
        <div className="w-full rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 bg-[#FAF7F2] flex flex-col">
          {/* Realistic Android Status Bar with Punch-Hole Camera */}
          <div className="bg-[#1C120C] text-[#FAF7F2]/85 px-4 py-1.5 flex items-center justify-between text-[9px] font-semibold">
            <span>9:41</span>
            {/* Center Punch-Hole Camera */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#090604] border border-[#3B2A1E]" />
            <div className="flex items-center gap-1">
              <Wifi className="w-2.5 h-2.5 text-[#D4AF37]" />
              <BatteryCharging className="w-3 h-3 text-[#D4AF37]" />
            </div>
          </div>

          {/* App Viewport */}
          <div className="w-full h-[365px] overflow-hidden">
            {screens[activeScreen] || screens[0]}
          </div>

          {/* Android Navigation Gesture Bar */}
          <div className="bg-[#1C120C] py-1.5 flex justify-center">
            <div className="w-20 h-1 bg-[#D4AF37]/55 rounded-full" />
          </div>
        </div>
      </div>

      {/* Interactive Screen Switcher Pills */}
      {onScreenChange && (
        <div className="mt-4 inline-flex items-center gap-1 p-1 rounded-xl bg-[#261810] border border-[#D4AF37]/35">
          {screenTabs.map((tab, idx) => (
            <button
              key={tab}
              type="button"
              onClick={() => onScreenChange(idx)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                activeScreen === idx
                  ? 'bg-[#D4AF37] text-[#1C120C] shadow-xs'
                  : 'text-[#FAF7F2]/75 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppPhoneMockup;
