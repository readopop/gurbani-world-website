import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Compass,
  Smartphone,
  Sparkles,
  Sun,
  Moon,
  Search,
  Globe,
  PlayCircle,
  Video,
  Heart,
  Calendar,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Mail,
  Send,
  Shield,
  FileText,
  Info,
  Layers,
  Headphones,
  UserCheck,
  GraduationCap,
  ChevronRight,
  Copy,
  Check,
  Code2,
  AlertCircle,
  Home as HomeIcon,
  Share2,
  Bookmark,
  Download,
  Wifi,
  BatteryCharging,
  Volume2,
  Type,
  RotateCcw
} from 'lucide-react';

// ============================================================================
// BRAND & PLATFORM CONFIGURATION
// ============================================================================
const BRAND_CONFIG = {
  name: 'Gurbani World',
  organization: 'Singh Tech',
  playStoreDeveloper: 'SINGH TECH',
  tagline: 'Connect with Gurbani, Connect with Guru.',
  hindiHeadline: 'एक ही स्थान पर गुरबाणी, नितनेम और सिख आध्यात्मिक ज्ञान',
  hindiSubheadline:
    'गुरबाणी वर्ल्ड के साथ जुड़ें गुरबाणी, नितनेम, सिख इतिहास और आध्यात्मिक जीवन की अनमोल शिक्षाओं से।',
  hindiFooterDesc:
    'गुरबाणी, नितनेम, सिख इतिहास और आध्यात्मिक ज्ञान से जुड़ने का एक डिजिटल माध्यम।',
  downloadMilestone: '5,000+ Downloads',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.singhcreations.gurbaniworld',
  contactEmailPlaceholder: 'simranmalapro@gmail.com',
  socialLinks: {
    facebook: {
      url: '#facebook-placeholder',
      handle: '@gurbaniworldofficial',
      isPlaceholder: true,
    },
    instagram: {
      url: '#instagram-placeholder',
      handle: '@gurbaniworld.official',
      isPlaceholder: true,
    },
  },
};

// ============================================================================
// VERIFIED GURBANI WORLD FEATURE CATEGORIES (7 Exact App Modules)
// ============================================================================
const APP_FEATURE_CATEGORIES = [
  {
    id: 'daily-updates',
    code: 'A',
    title: 'Daily Spiritual Updates',
    subtitle: 'Stay connected with daily Gurbani updates, spiritual inspiration, upcoming Sikh occasions and collective Seva.',
    icon: Sun,
    features: [
      {
        name: 'Aaj Ka Vichar',
        desc: 'Daily uplifting spiritual thoughts and reflections to inspire positive thinking, mindfulness and Chardi Kala.',
      },
      {
        name: 'Daily Hukamnama Sahib',
        desc: 'Read the daily sacred Hukamnama Sahib from Sri Harmandir Sahib.',
      },
      {
        name: 'Sangrand Special Hukamnama',
        desc: 'Access special monthly Sangrand Hukamnama Sahib.',
      },
      {
        name: 'Gurpurab Special Updates',
        desc: 'Stay informed about special Gurbani updates and upcoming Gurpurab occasions.',
      },
      {
        name: 'Daily Path Count Seva Submission',
        desc: 'Submit your daily Japji Sahib, Mool Mantar and Chaupai Sahib Path counts. This initiative encourages Sangat participation in Samuhik Path and collective Ardas.',
      },
      {
        name: 'Maskeen Ji Vichar',
        desc: 'Read daily spiritual Bachans and Gurmat thoughts of Sant Singh Ji Maskeen as part of your daily spiritual inspiration.',
      },
      {
        name: 'Baba Nand Singh Ji Bachan',
        desc: 'Read daily devotional Bachans and spiritual teachings of Baba Nand Singh Ji featured in your daily spiritual updates.',
      },
    ],
  },
  {
    id: 'nitnem-banis',
    code: 'B',
    title: 'Nitnem & Banis',
    subtitle: 'A dedicated collection of more than 30 sacred Banis for daily Nitnem and spiritual reading.',
    icon: BookOpen,
    features: [
      {
        name: '30+ Sacred Banis Available',
        desc: 'Explore a comprehensive collection of over 30 sacred Banis organized for daily Nitnem and contemplative reading.',
      },
      {
        name: 'Japji Sahib',
        desc: 'Morning Bani composed by Sri Guru Nanak Dev Ji opening Sri Guru Granth Sahib Ji.',
      },
      {
        name: 'Jaap Sahib',
        desc: 'Morning Bani composed by Sri Guru Gobind Singh Ji celebrating the attributes of Akal Purakh.',
      },
      {
        name: 'Tav Prasad Savaiye',
        desc: 'Morning Nitnem composition emphasizing devotion and humility.',
      },
      {
        name: 'Chaupai Sahib',
        desc: 'Protective prayer composed by Sri Guru Gobind Singh Ji seeking spiritual strength.',
      },
      {
        name: 'Anand Sahib',
        desc: 'Song of spiritual bliss composed by Sri Guru Amar Das Ji.',
      },
      {
        name: 'Rehras Sahib',
        desc: 'Evening Nitnem prayer recited at sunset in gratitude.',
      },
      {
        name: 'Kirtan Sohila',
        desc: 'Nighttime bedtime Bani recited before rest for peace and spiritual protection.',
      },
      {
        name: 'Sukhmani Sahib',
        desc: 'Extended sacred Bani composed by Sri Guru Arjan Dev Ji for deep spiritual peace and tranquility.',
      },
      {
        name: 'Asa Di Vaar',
        desc: 'Morning congregational Bani composed by Sri Guru Nanak Dev Ji.',
      },
      {
        name: 'Other Additional Banis',
        desc: 'Access a rich repository of supplementary sacred compositions.',
      },
    ],
  },
  {
    id: 'gurbani-library',
    code: 'C',
    title: 'Gurbani Library',
    subtitle: 'Explore and read sacred Gurbani from Sri Guru Granth Sahib Ji and Sri Dasam Granth Sahib Ji, with dedicated reading and search facilities.',
    icon: Layers,
    features: [
      {
        name: 'Sri Guru Granth Sahib Ji',
        desc: 'Read Gurbani directly from the sacred scripture.',
      },
      {
        name: 'Sri Dasam Granth Sahib Ji',
        desc: 'Explore and read compositions from Sri Dasam Granth Sahib Ji.',
      },
      {
        name: 'More Banis',
        desc: 'Access additional compositions including Bhagat Ravidas Ji\'s Banis, Vaaran and other sacred compositions.',
      },
      {
        name: 'Amrit Kirtan',
        desc: 'Explore the Amrit Kirtan collection.',
      },
      {
        name: 'Search Gurbani',
        desc: 'Search Gurbani from both Sri Guru Granth Sahib Ji and Sri Dasam Granth Sahib Ji.',
      },
    ],
  },
  {
    id: 'simran-spirituality',
    code: 'D',
    title: 'Simran & Spirituality',
    subtitle: 'Digital tools to encourage daily Naam Simran and spiritual remembrance.',
    icon: Sparkles,
    features: [
      {
        name: 'Simran Mala',
        desc: 'A digital Mala counter to help users maintain their Naam Simran and keep track of their Jaap.',
      },
    ],
  },
  {
    id: 'sikh-learning',
    code: 'E',
    title: 'Sikh Learning',
    subtitle: 'Learn about Sikh history, Sikh Gurus, Sikh principles, Punjabi language and the Nanakshahi Calendar through organized educational content.',
    icon: GraduationCap,
    features: [
      {
        name: 'Sikh Gurus',
        desc: 'Learn about the Sikh Gurus through English biographies and structured table-style information designed for quick understanding.',
      },
      {
        name: 'Sikhism',
        desc: 'Explore important concepts, principles and teachings of Sikhi, including its fundamental values and philosophy.',
      },
      {
        name: 'Sikh History',
        desc: 'Learn about important events, historical personalities and significant milestones in Sikh history.',
      },
      {
        name: 'Learn Punjabi',
        desc: 'A Punjabi learning section featuring Gurmukhi alphabets, words, word counts and other learning material to help users understand and learn Punjabi.',
      },
      {
        name: '52 Hukamas',
        desc: 'Explore the collection of 52 Hukamas associated with Sri Guru Gobind Singh Ji at Sri Hazur Sahib.',
      },
      {
        name: 'Sikh Calendar',
        desc: 'Access the Nanakshahi Calendar and learn about important Sikh dates and observances.',
      },
      {
        name: 'FAQ',
        desc: 'Find answers to frequently asked questions related to Sikhism, Sikh history and important Sikh concepts.',
      },
    ],
  },
  {
    id: 'audio-video',
    code: 'F',
    title: 'Audio & Video',
    subtitle: 'Listen to live Gurbani Kirtan and explore available Sikh devotional and educational videos.',
    icon: Headphones,
    features: [
      {
        name: 'Live Kirtan',
        desc: 'Listen to live Gurbani Kirtan from different Gurdwaras and radio channels.',
      },
      {
        name: 'Sikh Videos / Sikh Tube',
        desc: 'Watch available Kirtan videos through organized video lists.',
      },
    ],
  },
  {
    id: 'spiritual-personalities',
    code: 'G',
    title: 'Spiritual Personalities',
    subtitle: 'Explore dedicated collections of spiritual teachings, Gurmat thoughts and devotional wisdom.',
    icon: UserCheck,
    features: [
      {
        name: 'Maskeen Ji Vichar',
        desc: 'Explore dedicated collections of spiritual discourses, Gurmat explanations and teachings of Giani Sant Singh Ji Maskeen.',
      },
      {
        name: 'Baba Nand Singh Ji Bachan',
        desc: 'Read dedicated collections of inspiring spiritual teachings, devotional Bachans and guidance of Baba Nand Singh Ji.',
      },
    ],
  },
];

// ============================================================================
// SIKHI LEARNING EDUCATIONAL MODULES (Page 4)
// ============================================================================
const SIKHI_LEARNING_MODULES = [
  {
    id: 'sikh-history',
    tag: 'Heritage & Chronicles',
    title: 'Sikh History',
    summary:
      'Explore authentic chronicles from the founding of Sikhi in 1469 through the Khalsa Panth and historic Sikh institutions.',
    sampleTopics: [
      'Origins of Sikhi & Guru Nanak Dev Ji’s Udasis',
      'Creation of the Khalsa at Sri Anandpur Sahib (1699)',
      'Sikh Courage, Martyrs & Historic Gurdwaras',
    ],
    sampleExcerpt:
      'Sikh history is rooted in truth, selfless service (Seva), fearlessness, and standing up for justice and human dignity across every era.',
  },
  {
    id: 'sikh-gurus',
    tag: 'Lives & Teachings',
    title: 'Sikh Gurus',
    summary:
      'Study the sacred lives, compositions, and contributions of all Ten Sikh Gurus and our eternal Guru, Sri Guru Granth Sahib Ji.',
    sampleTopics: [
      'Sri Guru Nanak Dev Ji to Sri Guru Gobind Singh Ji',
      'Compilation of Sri Guru Granth Sahib Ji',
      'Eternal Guruship of Shabad Guru',
    ],
    sampleExcerpt:
      'Each Guru illuminated the same divine light—nurturing humility, equality, fearless devotion, and spiritual sovereignty.',
  },
  {
    id: 'sikhism-basics',
    tag: 'Foundations',
    title: 'Sikhism Basics',
    summary:
      'Clear, welcoming introductions to foundational Sikh beliefs, daily practices, Gurdwara etiquette, and the Five Ks.',
    sampleTopics: [
      'Ik Onkar: Oneness of the Creator',
      'Mool Mantar & Core Pillars of Sikh Life',
      'Understanding Sangat, Pangat & Langar',
    ],
    sampleExcerpt:
      'Sikhi teaches that the Divine pervades all creation and is realized through truthful living, love, and remembrance of Naam.',
  },
  {
    id: 'sikh-teachings',
    tag: 'Gurmat Philosophy',
    title: 'Sikh Teachings',
    summary:
      'Practical Gurmat guidance on overcoming ego (Haumai), cultivating compassion, and living in Chardi Kala.',
    sampleTopics: [
      'Naam Japo, Kirat Karo, Vand Chhako',
      'Overcoming the Five Thieves with Virtues',
      'Hukam: Living in Harmony with Divine Will',
    ],
    sampleExcerpt:
      'True spirituality in Sikhi is lived amidst family and society—working honestly, sharing with those in need, and remembering Waheguru.',
  },
  {
    id: 'learn-punjabi',
    tag: 'Gurmukhi Script',
    title: 'Learn Punjabi',
    summary:
      'Step-by-step Gurmukhi script lessons designed to empower learners to read Gurbani directly in its original script.',
    sampleTopics: [
      '35 Akhar (Gurmukhi Consonants & Vowels)',
      'Laga Matra (Vowel Symbols) & Pronunciation',
      'Reading Common Gurbani Words',
    ],
    sampleExcerpt:
      'Learning Gurmukhi opens a direct window into the poetic beauty and phonetic precision of Gurbani.',
  },
  {
    id: '52-hukamas',
    tag: 'Khalsa Code',
    title: '52 Hukamas',
    summary:
      'Complete guide to the 52 sacred edicts issued by Sri Guru Gobind Singh Ji at Nanded (Sri Hazur Sahib) in 1708.',
    sampleTopics: [
      'Daily Nitnem, Simran & Sangat Discipline',
      'Ethical Conduct, Honest Living & Humility',
      'Loyalty to Sri Guru Granth Sahib Ji',
    ],
    sampleExcerpt:
      'The 52 Hukamas provide timeless practical guidance for spiritual discipline, moral integrity, and community service.',
  },
  {
    id: 'sikh-calendar',
    tag: 'Nanakshahi Dates',
    title: 'Sikh Calendar',
    summary:
      'Stay informed about Gurpurabs, Sangrand days, Parkash Purabs, and historic Sikh observances throughout the year.',
    sampleTopics: [
      'Twelve Months of the Nanakshahi Calendar',
      'Major Gurpurabs & Sangrand Observances',
      'Barah Maha Spiritual Reflections',
    ],
    sampleExcerpt:
      'Each month in the Sikh calendar invites reflection on the changing seasons of nature and the soul’s longing for the Divine.',
  },
];

// ============================================================================
// OFFICIAL GURBANI WORLD BRAND CREST & TYPOGRAPHY COMPONENT
// ============================================================================
const GurbaniWorldIcon = ({ size = 44, className = '' }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative flex items-center justify-center rounded-xl bg-gradient-to-b from-[#064A4D] to-[#032D30] border border-[#D4AF37]/75 shadow-[0_4px_16px_rgba(212,175,55,0.22)] shrink-0 overflow-hidden ${className}`}
    aria-label="Gurbani World Official App Logo"
  >
   <img src="/logo.png" alt="Gurbani World Logo" className="w-full h-full object-cover" />
  </div>
);

const GurbaniWorldLogo = ({ size = 44, lightText = true }) => (
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
      <span className="text-[10px] uppercase tracking-wider opacity-85 font-medium">
        Get it on
      </span>
      <span className="text-sm sm:text-base font-bold tracking-tight">
        Google Play
      </span>
    </div>
    <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform ml-1" />
  </a>
);

// ============================================================================
// REALISTIC ANDROID HARDWARE & AUTHENTIC APP UI PREVIEW MOCKUP
// ============================================================================
const AppPhoneMockup = ({ activeScreen = 0, onScreenChange }) => {
  const [malaCount, setMalaCount] = useState(27);
  const [baniLang, setBaniLang] = useState('gurmukhi');
  const [largeFont, setLargeFont] = useState(false);

  const screenTabs = ['Home', 'Nitnem', 'Simran', 'Kirtan'];

  const screens = [
    // Screen 0: Home Dashboard (Authentic Gurbani World Android UI)
    <div key="home-screen" className="p-3 space-y-2.5 bg-[#FAF7F2] h-full text-[#1C120C] flex flex-col justify-between">
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
              <p className="font-serif font-bold text-xs text-[#1C120C] mt-0.5">
                Gurbani World
              </p>
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
            {['Japji Sahib', 'Jaap Sahib', 'Rehras Sahib', 'Kirtan Sohila'].map(
              (bani) => (
                <button
                  key={bani}
                  type="button"
                  onClick={() => onScreenChange?.(1)}
                  className="bg-white border border-[#E5DEC9] hover:border-[#D4AF37] rounded-lg px-2 py-1.5 flex items-center justify-between shadow-2xs text-left cursor-pointer"
                >
                  <span className="text-[10.5px] font-bold text-[#1C120C]">
                    {bani}
                  </span>
                  <ChevronRight className="w-3 h-3 text-[#C59B27]" />
                </button>
              )
            )}
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
          <span className="text-[9px] font-bold text-[#1C120C]">
            Daily Path Count Seva
          </span>
          <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-[#1C120C] text-[#D4AF37] font-bold">
            Submit
          </span>
        </div>
      </div>
    </div>,

    // Screen 1: Multi-language Nitnem Reader (Verified Mool Mantar & Japji Sahib Pauri 1)
    <div key="reader-screen" className="p-3 space-y-2.5 bg-[#FAF7F2] h-full text-[#1C120C] flex flex-col justify-between">
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
                    baniLang === lang
                      ? 'bg-[#1C120C] text-[#D4AF37]'
                      : 'text-[#5C4938]'
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
              <p className={`${largeFont ? 'text-sm' : 'text-xs'} font-bold text-[#1C120C] leading-relaxed`}>
                ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥
              </p>
              <div className="h-px bg-[#E6DEC8] w-16 mx-auto" />
              <p className={`${largeFont ? 'text-xs' : 'text-[10.5px]'} text-[#4A3B2C] font-medium leading-relaxed`}>
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
              <p className={`${largeFont ? 'text-sm' : 'text-xs'} font-bold text-[#1C120C] leading-relaxed font-hindi`}>
                ੴ सति नामु करता पुरखु निरभउ निरवैरु अकाल मूरति अजूनी सैभं गुर प्रसादि ॥
              </p>
              <div className="h-px bg-[#E6DEC8] w-16 mx-auto" />
              <p className={`${largeFont ? 'text-xs' : 'text-[10.5px]'} text-[#4A3B2C] font-medium leading-relaxed font-hindi`}>
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
              <p className={`${largeFont ? 'text-xs' : 'text-[10.5px]'} font-bold text-[#1C120C] leading-relaxed`}>
                Ik Onkaar Sat Naam Kartaa Purakh Nirbhau Nirvair Akaal Moorat Ajoonee Saibhang Gur Prasaad.
              </p>
              <div className="h-px bg-[#E6DEC8] w-16 mx-auto" />
              <p className={`${largeFont ? 'text-[11px]' : 'text-[10px]'} text-[#4A3B2C] leading-relaxed`}>
                || Jap || True In The Primal Beginning. True Throughout The Ages. True Here And Now. O Nanak, Forever And Ever True. ||1||
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
    <div key="mala-screen" className="p-3 flex flex-col justify-between bg-[#1C120C] h-full text-[#FAF7F2]">
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
    <div key="learning-screen" className="p-3 space-y-2 bg-[#FAF7F2] h-full text-[#1C120C] flex flex-col justify-between">
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
              <span className="text-[10px] font-bold text-[#1C120C]">
                {item.title}
              </span>
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

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [featureSearch, setFeatureSearch] = useState('');
  const [activeLearningModule, setActiveLearningModule] = useState(null);
  const [activeHeroScreen, setActiveHeroScreen] = useState(0);
  const [activeShowcaseScreen, setActiveShowcaseScreen] = useState(0);
  const [seoBlueprintOpen, setSeoBlueprintOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState('');

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formNoticeVisible, setFormNoticeVisible] = useState(false);

  const navigateTo = (route) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.replaceState(null, '', `#${route}`);
    } catch {
      // Ignore if sandboxed history restricts push/replaceState
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validRoutes = [
      'home',
      'about',
      'features',
      'learning',
      'app',
      'about-app',
      'contact',
      'privacy',
      'app-privacy-policy',
      'terms',
      '404',
    ];
    if (hash && validRoutes.includes(hash)) {
      setCurrentRoute(hash);
    }
  }, []);

  useEffect(() => {
    const seoMap = {
      home: {
        title: 'Gurbani World | Official Sikh Spiritual, Nitnem & Gurbani Learning Platform',
        desc: 'Official website of Gurbani World by Singh Tech. Connect with Gurbani, daily Nitnem, Hukamnama Sahib, Sikh history, Waheguru Simran, and spiritual learning.',
      },
      about: {
        title: 'About Gurbani World | Vision, Mission & Singh Tech',
        desc: 'Discover the vision and mission behind Gurbani World—bridging traditional Sikh spirituality and modern digital technology to make Gurbani accessible globally.',
      },
      features: {
        title: 'App Features | Daily Hukamnama, Nitnem (30+ Banis), Gurbani Search & Simran Mala',
        desc: 'Explore all 7 modules of Gurbani World: Daily Spiritual Updates, Nitnem (30+ Banis), Gurbani Library, Simran Mala, Sikh Learning, Audio & Video, and Spiritual Personalities.',
      },
      learning: {
        title: 'Sikhi Learning Hub | Sikh History, Sikh Gurus, 52 Hukamas & FAQ',
        desc: 'Structured Sikh educational resources covering Sikh History, T@import "tailwindcss";en Sikh Gurus, 52 Hukamas, Nanakshahi Sikh Calendar, Learn Punjabi, and FAQ.',
      },
      app: {
        title: 'Gurbani World App | Download on Google Play by SINGH TECH',
        desc: 'Explore screenshots, features, and official Google Play Store download details for the Gurbani World App developed by SINGH TECH (Singh Tech).',
      },
      'about-app': {
        title: 'About This App | Gurbani World Android Platform',
        desc: 'Comprehensive overview of Gurbani World purpose, features, and development under Singh Tech.',
      },
      contact: {
        title: 'Contact Us | Gurbani World & Singh Tech',
        desc: 'Get in touch with the Gurbani World team at Singh Tech for feedback, Seva inquiries, and official social media channels.',
      },
      privacy: {
        title: 'Privacy Policy | Gurbani World Website',
        desc: 'Official Privacy Policy for the Gurbani World website and digital platform by Singh Tech.',
      },
      'app-privacy-policy': {
        title: 'App Privacy Policy | Gurbani World Google Play Submission',
        desc: 'Official standalone Android Application Privacy Policy for Gurbani World submitted to Google Play Console.',
      },
      terms: {
        title: 'Terms & Conditions | Gurbani World',
        desc: 'Official Terms and Conditions for using the Gurbani World website and educational resources.',
      },
      '404': {
        title: 'Page Not Found (404) | Gurbani World',
        desc: 'The requested page could not be found on Gurbani World.',
      },
    };

    const activeSeo = seoMap[currentRoute] || seoMap.home;
    document.title = activeSeo.title;

    const upsertMeta = (attrName, attrValue, content) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    upsertMeta('name', 'description', activeSeo.desc);
    upsertMeta(
      'name',
      'keywords',
      'Gurbani World, Gurbani World App, Gurbani App, Nitnem App, Sikh Spiritual App, Gurbani Search, Sikh Learning, Sikh History, Waheguru Simran, Daily Hukamnama, Singh Tech, SINGH TECH'
    );
    upsertMeta('property', 'og:title', activeSeo.title);
    upsertMeta('property', 'og:description', activeSeo.desc);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', 'Gurbani World');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', activeSeo.title);
    upsertMeta('name', 'twitter:description', activeSeo.desc);

    // Dynamic Brand Crest Favicon Data URI matching Official App Icon
    const faviconSvg = encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#053E41"/><rect x="40" y="13" width="2.5" height="22" fill="#F97316"/><polygon points="42.5,13.5 72,20 42.5,26.5" fill="#FF6B00"/><circle cx="51.5" cy="20" r="2.2" stroke="#1E1B4B" stroke-width="1.3" fill="none"/><text x="50" y="53" text-anchor="middle" fill="#FFFFFF" font-size="24" font-weight="800" font-family="sans-serif">ਗੁਰਬਾਣੀ</text><text x="21.5" y="83" text-anchor="middle" fill="#FACC15" font-size="22" font-weight="900" font-family="sans-serif">W</text><circle cx="42.5" cy="74.5" r="10" fill="#2563EB"/><path d="M36 70C39 68 44 68 47 70C48 72 46 75 43 75C40 75 39 79 37 80C35 78 35 73 36 70Z" fill="#84CC16"/><text x="73" y="83" text-anchor="middle" fill="#FACC15" font-size="22" font-weight="900" font-family="sans-serif">RLD</text></svg>`
    );
    let linkIcon = document.querySelector("link[rel~='icon']");
    if (!linkIcon) {
      linkIcon = document.createElement('link');
      linkIcon.rel = 'icon';
      document.head.appendChild(linkIcon);
    }
    linkIcon.href = `data:image/svg+xml,${faviconSvg}`;

    // Inject Organization & SoftwareApplication JSON-LD Schema for Google & AI Search Engines
    const schemaId = 'gurbani-world-jsonld';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Gurbani World',
          alternateName: 'Gurbani World by Singh Tech',
          founder: {
            '@type': 'Organization',
            name: 'Singh Tech',
          },
          slogan: 'Connect with Gurbani, Connect with Guru.',
          description:
            'An all-in-one Sikh spiritual and Gurbani learning digital platform providing daily Hukamnama Sahib, Nitnem Banis, Gurbani library, Simran tools, and Sikh educational resources.',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Gurbani World',
          operatingSystem: 'Android',
          applicationCategory: 'BooksAndReferenceApplication',
          author: {
            '@type': 'Organization',
            name: 'SINGH TECH',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Singh Tech',
          },
          downloadUrl: BRAND_CONFIG.playStoreUrl,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
      ],
    };
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [currentRoute]);

  const handleCopyText = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2000);
  };

  const handleDownloadFile = (content, filename, mimeType = 'text/plain') => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Filtered features for Page 3
  const filteredCategories = APP_FEATURE_CATEGORIES.filter(
    (cat) => selectedCategory === 'all' || cat.id === selectedCategory
  )
    .map((cat) => ({
      ...cat,
      features: cat.features.filter(
        (f) =>
          f.name.toLowerCase().includes(featureSearch.toLowerCase()) ||
          f.desc.toLowerCase().includes(featureSearch.toLowerCase())
      ),
    }))
    .filter((cat) => cat.features.length > 0);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'App Features' },
    { id: 'learning', label: 'Sikhi Learning' },
    { id: 'app', label: 'Gurbani World App' },
    { id: 'about-app', label: 'About This App' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Safely render phone screen content
  const heroScreenContent = (
    <AppPhoneMockup
      activeScreen={activeHeroScreen}
      onScreenChange={setActiveHeroScreen}
    />
  );

  const showcaseScreenContent = (
    <AppPhoneMockup
      activeScreen={activeShowcaseScreen}
      onScreenChange={setActiveShowcaseScreen}
    />
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C120C] selection:bg-[#D4AF37]/30 selection:text-[#1C120C]">
      {/* Load Google Fonts for Regal Serif, Modern UI Sans, and Crisp Devanagari Hindi */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Plus Jakarta Sans', 'Noto Sans Devanagari', sans-serif;
        }
        .font-serif {
          font-family: 'Cinzel', Georgia, serif;
        }
        .font-hindi {
          font-family: 'Noto Sans Devanagari', 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      {/* ====================================================================
          STICKY GLASSMORPHIC TOP NAVIGATION BAR
      ==================================================================== */}
      <header className="sticky top-0 z-50 bg-[#1C120C]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="focus:outline-none cursor-pointer"
          >
            <GurbaniWorldLogo size={42} lightText={true} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
            {navItems.map((item) => {
              const isActive = currentRoute === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#D4AF37] bg-[#2D1E15] border border-[#D4AF37]/30'
                      : 'text-[#FAF7F2]/85 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={BRAND_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#1C120C] text-sm font-bold shadow hover:brightness-105 transition"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get App</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#FAF7F2] hover:bg-white/10 border border-[#D4AF37]/30"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1C120C] border-t border-[#D4AF37]/25 px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateTo(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition flex items-center justify-between ${
                  currentRoute === item.id
                    ? 'bg-[#2C1D14] text-[#D4AF37] border border-[#D4AF37]/30'
                    : 'text-[#FAF7F2]/90 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
            <div className="pt-3">
              <GooglePlayButton className="w-full" />
            </div>
          </div>
        )}
      </header>

      {/* ====================================================================
          MAIN CONTENT ROUTER
      ==================================================================== */}
      <main className="flex-grow">
        {/* ==================================================================
            HOME PAGE
        ================================================================== */}
        {currentRoute === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#1C120C] via-[#241710] to-[#110A06] text-[#FAF7F2] py-20 lg:py-28 border-b border-[#D4AF37]/30">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Headlines & CTA */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  <div className="flex flex-col items-center lg:items-start gap-4">
                    <GurbaniWorldIcon size={76} className="rounded-2xl border-2 shadow-[0_8px_28px_rgba(212,175,55,0.28)]" />
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E1D13] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wide">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Official Platform by {BRAND_CONFIG.organization}</span>
                    </div>
                  </div>

                  <h1 className="font-hindi text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF7F2] tracking-tight leading-tight">
                    {BRAND_CONFIG.hindiHeadline}
                  </h1>

                  <p className="font-hindi text-base sm:text-lg text-[#FAF7F2]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    {BRAND_CONFIG.hindiSubheadline}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <GooglePlayButton variant="gold" />
                    <button
                      type="button"
                      onClick={() => navigateTo('features')}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D4AF37]/50 text-[#FAF7F2] font-semibold text-sm transition cursor-pointer"
                    >
                      <span>Explore Our Features</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  </div>

                  {/* Manually Editable Milestone */}
                  <div className="pt-6 flex items-center justify-center lg:justify-start gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#1C120C] flex items-center justify-center text-xs font-bold border border-[#1C120C]">
                        ੴ
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#2A1B12] text-[#D4AF37] flex items-center justify-center text-xs font-bold border border-[#D4AF37]/40">
                        ਸ
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-white">
                        {BRAND_CONFIG.downloadMilestone}
                      </p>
                      <p className="text-xs text-[#FAF7F2]/70">
                        Trusted by the global Sikh Sangat
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Realistic Android App Mockup */}
                <div className="lg:col-span-5 flex justify-center">
                  {heroScreenContent}
                </div>
              </div>
            </section>

            {/* Quick Introduction Section */}
            <section className="py-20 bg-[#FAF7F2]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7418]">
                    Connecting With Guru
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C120C]">
                    Your Digital Companion for Sikh Spirituality
                  </h2>
                  <p className="text-sm sm:text-base text-[#5C4938] leading-relaxed">
                    Gurbani World brings daily Hukamnama Sahib, Nitnem Banis, Simran tools, and Sikh learning resources directly to your fingertips.
                  </p>
                </div>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-7 border border-[#E6DEC8] shadow-2xs space-y-4 hover:border-[#D4AF37] transition">
                    <div className="w-12 h-12 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center">
                      <Sun className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1C120C]">
                      Daily Spiritual Connection
                    </h3>
                    <p className="text-sm text-[#5C4938] leading-relaxed">
                      Stay updated with Daily Hukamnama Sahib, Aaj Ka Vichar, Sangrand & Gurpurab specials, and daily Seva path submissions.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-7 border border-[#E6DEC8] shadow-2xs space-y-4 hover:border-[#D4AF37] transition">
                    <div className="w-12 h-12 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1C120C]">
                      Nitnem & Gurbani Library
                    </h3>
                    <p className="text-sm text-[#5C4938] leading-relaxed">
                      Access over 30 sacred Nitnem Banis, Sri Guru Granth Sahib Ji, Sri Dasam Granth Sahib Ji, and advanced Gurbani search tools.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-7 border border-[#E6DEC8] shadow-2xs space-y-4 hover:border-[#D4AF37] transition">
                    <div className="w-12 h-12 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1C120C]">
                      Sikh Learning & History
                    </h3>
                    <p className="text-sm text-[#5C4938] leading-relaxed">
                      Expand your understanding of Sikh Gurus, Sikh history, 52 Hukamas, Punjabi language, and Nanakshahi calendar dates.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================================================================
            ABOUT GURBANI WORLD PAGE (Page 2)
        ================================================================== */}
        {currentRoute === 'about' && (
          <section className="py-16 bg-[#FAF7F2]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 sm:p-12 border border-[#E6DEC8] shadow-2xs space-y-8">
              <div className="border-b border-[#E6DEC8] pb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
                  About The Platform
                </span>
                <h1 className="font-serif text-3xl font-bold text-[#1C120C] mt-1">
                  About Gurbani World
                </h1>
                <p className="text-xs text-[#6E5A48] mt-1">
                  Developed under Singh Tech • Tagline: {BRAND_CONFIG.tagline}
                </p>
              </div>

              <div className="space-y-6 text-sm text-[#4A3B2C] leading-relaxed">
                <div className="space-y-2">
                  <h2 className="font-serif text-xl font-bold text-[#1C120C]">
                    What is Gurbani World?
                  </h2>
                  <p>
                    Gurbani World is an all-in-one Sikh spiritual and Gurbani learning platform developed under <strong>Singh Tech</strong>. It is designed to make Gurbani, Nitnem, Sikh teachings, spiritual knowledge, and Sikh history accessible to everyone through digital technology.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-xl font-bold text-[#1C120C]">
                    Why Was Gurbani World Created?
                  </h2>
                  <p>
                    In today's fast-paced digital era, seekers need a reliable, reverent, and easily accessible digital sanctuary to connect with Gurbani and Sikh heritage. Gurbani World was created to bridge traditional Sikh spirituality with modern technology, ensuring that daily Nitnem, Hukamnama Sahib, and sacred scriptures are always within reach.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-2">
                    <h3 className="font-serif font-bold text-base text-[#1C120C]">Our Vision</h3>
                    <p className="text-xs sm:text-sm text-[#5C4938]">
                      To establish a recognizable, trusted global digital identity for Sikh spirituality, making Gurbani and Gurmat wisdom universally accessible.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-2">
                    <h3 className="font-serif font-bold text-base text-[#1C120C]">Our Mission</h3>
                    <p className="text-xs sm:text-sm text-[#5C4938]">
                      To empower seekers worldwide with daily Hukamnama updates, 30+ Nitnem Banis, Simran tools, and comprehensive Sikh educational resources.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-xl font-bold text-[#1C120C]">
                    Our Commitment to Accessibility & Devotion
                  </h2>
                  <p>
                    We are deeply committed to maintaining scriptural accuracy, a peaceful aesthetic free from clutter, and robust privacy practices. Gurbani World stands as your official companion for daily spiritual inspiration.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================================================================
            EXPLORE APP FEATURES PAGE (Page 3 - 7 Structured Categories)
        ================================================================== */}
        {currentRoute === 'features' && (
          <section className="py-16 bg-[#FAF7F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              {/* Header & Filter Controls */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7418]">
                  Complete Android App Capabilities
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C120C]">
                  Explore Gurbani World Features
                </h1>
                <p className="text-sm sm:text-base text-[#5C4938] leading-relaxed">
                  Discover all 7 structured modules of the Gurbani World App, designed to support your daily spiritual journey.
                </p>

                {/* Search Bar */}
                <div className="pt-2 max-w-md mx-auto">
                  <div className="relative">
                    <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#9A7418]" />
                    <input
                      type="text"
                      value={featureSearch}
                      onChange={(e) => setFeatureSearch(e.target.value)}
                      placeholder="Search app features (e.g. Japji Sahib, Hukamnama, Simran)..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#E6DEC8] focus:border-[#D4AF37] focus:outline-none text-sm shadow-2xs"
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
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#D4AF37]/40 text-[#9A7418]">
                                Category {category.code}
                              </span>
                            </div>
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C120C] mt-1">
                              {category.title}
                            </h2>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-[#5C4938] leading-relaxed">
                        {category.subtitle}
                      </p>

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
                                <CheckCircle2 className="w-4 h-4 text-[#9A7418] shrink-0 mt-0.5" />
                              </div>
                              <p className="text-xs text-[#5C4938] leading-relaxed">
                                {feature.desc}
                              </p>
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
                      className="mt-3 text-xs font-bold text-[#9A7418] underline cursor-pointer"
                    >
                      Clear search filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ==================================================================
            SIKHI LEARNING PAGE (Page 4)
        ================================================================== */}
        {currentRoute === 'learning' && (
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
                  Explore organized educational resources on Sikh history, Sikh Gurus, fundamentals of Sikhi, Gurmukhi script, and 52 Hukamas.
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
                        <h2 className="font-serif text-xl font-bold text-[#1C120C]">
                          {module.title}
                        </h2>
                        <p className="text-sm text-[#5C4938] leading-relaxed">
                          {module.summary}
                        </p>
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
                          onClick={() =>
                            setActiveLearningModule(isExpanded ? null : module.id)
                          }
                          className="w-full py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#E6DEC8] text-xs font-bold text-[#1C120C] flex items-center justify-center gap-1 transition cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Excerpt' : 'Read Sample Excerpt'}</span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              isExpanded ? 'rotate-90' : ''
                            }`}
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
        )}

        {/* ==================================================================
            GURBANI WORLD APP SHOWCASE PAGE (Page 5)
        ================================================================== */}
        {currentRoute === 'app' && (
          <section className="py-16 bg-[#FAF7F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              {/* Top Banner */}
              <div className="bg-gradient-to-br from-[#1C120C] via-[#241710] to-[#110A06] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E1D13] border border-[#D4AF37]/45 text-[#D4AF37] text-xs font-bold">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Official Android Application</span>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                    Gurbani World App
                  </h1>

                  <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed max-w-xl">
                    Bring Gurbani, Nitnem, daily Hukamnama Sahib, Simran Mala, and Sikh educational resources with you anywhere. Download the official app published by {BRAND_CONFIG.playStoreDeveloper} under {BRAND_CONFIG.organization}.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <GooglePlayButton variant="gold" />
                    <button
                      type="button"
                      onClick={() => navigateTo('about-app')}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#FAF7F2] text-sm font-semibold transition cursor-pointer"
                    >
                      <Info className="w-4 h-4 text-[#D4AF37]" />
                      <span>About This App</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  {showcaseScreenContent}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================================================================
            ABOUT THIS APP PAGE (Dedicated Informational View)
        ================================================================== */}
        {currentRoute === 'about-app' && (
          <section className="py-16 bg-[#FAF7F2]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 sm:p-12 border border-[#E6DEC8] shadow-2xs space-y-8">
              <div className="border-b border-[#E6DEC8] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
                    Application Overview
                  </span>
                  <h1 className="font-serif text-3xl font-bold text-[#1C120C] mt-1">
                    About This App
                  </h1>
                  <p className="text-xs text-[#6E5A48] mt-1">
                    Gurbani World App • Developed by {BRAND_CONFIG.organization} ({BRAND_CONFIG.playStoreDeveloper})
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
                    The <strong>Gurbani World</strong> Android application is built as an all-in-one Sikh spiritual companion designed to help the global Sangat stay connected with daily Gurbani, Nitnem Banis, Hukamnama Sahib, and Sikhi learning resources in a peaceful, structured mobile experience.
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
                    Developed with devotion under <strong>{BRAND_CONFIG.organization}</strong> and published on Google Play under developer account <strong>{BRAND_CONFIG.playStoreDeveloper}</strong>, Gurbani World focuses on authenticity, clean navigation, and accessibility for learners and devotees of all ages.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================================================================
            CONTACT US PAGE
        ================================================================== */}
        {currentRoute === 'contact' && (
          <div>
            <section className="bg-[#1C120C] text-[#FAF7F2] py-16 border-b border-[#D4AF37]/30">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Connect With {BRAND_CONFIG.organization}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                  Contact Gurbani World
                </h1>
                <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-2xl mx-auto">
                  We welcome your suggestions, feedback, Seva inquiries, and community collaboration
                  ideas for Gurbani World.
                </p>
              </div>
            </section>

            <section className="py-16 bg-[#FAF7F2]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Official Contact & Social Channels */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white rounded-2xl p-7 border border-[#E6DEC8] space-y-5">
                    <h2 className="font-serif text-2xl font-bold text-[#1C120C]">
                      Official Channels
                    </h2>
                    <p className="text-sm text-[#5C4938] leading-relaxed">
                      Reach out directly or connect through our official digital channels managed by{' '}
                      <strong>{BRAND_CONFIG.organization}</strong>.
                    </p>

                    {/* Contact Email Placeholder */}
                    <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <Mail className="w-5 h-5 text-[#9A7418] shrink-0" />
                        <div className="truncate">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#9A7418]">
                            Official Email (Editable Placeholder)
                          </p>
                          <p className="text-sm font-semibold text-[#1C120C] truncate">
                            {BRAND_CONFIG.contactEmailPlaceholder}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyText(BRAND_CONFIG.contactEmailPlaceholder, 'email')
                        }
                        className="p-2 rounded-lg bg-white border border-[#E6DEC8] hover:border-[#D4AF37] text-[#1C120C] shrink-0 cursor-pointer"
                        title="Copy email address"
                      >
                        {copiedKey === 'email' ? (
                          <Check className="w-4 h-4 text-emerald-700" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Social Media Links */}
                    <div className="space-y-3 pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#1C120C]">
                        Social Media & Store Links
                      </p>

                      <a
                        href={BRAND_CONFIG.socialLinks.facebook.url}
                        onClick={(e) => {
                          if (BRAND_CONFIG.socialLinks.facebook.isPlaceholder) {
                            e.preventDefault();
                          }
                        }}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] hover:border-[#D4AF37] transition"
                      >
                        <div>
                          <p className="text-sm font-bold text-[#1C120C]">Facebook</p>
                          <p className="text-xs text-[#6E5A48]">
                            {BRAND_CONFIG.socialLinks.facebook.handle} (URL Placeholder)
                          </p>
                        </div>
                        <Share2 className="w-4 h-4 text-[#9A7418]" />
                      </a>

                      <a
                        href={BRAND_CONFIG.socialLinks.instagram.url}
                        onClick={(e) => {
                          if (BRAND_CONFIG.socialLinks.instagram.isPlaceholder) {
                            e.preventDefault();
                          }
                        }}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] hover:border-[#D4AF37] transition"
                      >
                        <div>
                          <p className="text-sm font-bold text-[#1C120C]">Instagram</p>
                          <p className="text-xs text-[#6E5A48]">
                            {BRAND_CONFIG.socialLinks.instagram.handle} (URL Placeholder)
                          </p>
                        </div>
                        <Heart className="w-4 h-4 text-[#E07A16]" />
                      </a>

                      <a
                        href={BRAND_CONFIG.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3.5 rounded-xl bg-[#1C120C] text-[#FAF7F2] border border-[#D4AF37]/45"
                      >
                        <div>
                          <p className="text-sm font-bold text-[#D4AF37]">Google Play Store</p>
                          <p className="text-xs text-[#FAF7F2]/75">
                            Official Gurbani World App
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Transparent Contact Form */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#E6DEC8] shadow-2xs">
                    <h2 className="font-serif text-2xl font-bold text-[#1C120C]">
                      Send a Message
                    </h2>
                    <p className="text-sm text-[#5C4938] mt-1">
                      Fill in your details below to compose a message for the Gurbani World team.
                    </p>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormNoticeVisible(true);
                      }}
                      className="mt-6 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1C120C] mb-1.5">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, name: e.target.value })
                            }
                            placeholder="Your Full Name"
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] focus:border-[#D4AF37] focus:outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1C120C] mb-1.5">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] focus:border-[#D4AF37] focus:outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1C120C] mb-1.5">
                          Subject
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.subject}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, subject: e.target.value })
                          }
                          placeholder="Feedback, Feature Suggestion, or Seva Inquiry"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] focus:border-[#D4AF37] focus:outline-none text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1C120C] mb-1.5">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, message: e.target.value })
                          }
                          placeholder="Write your message here..."
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] focus:border-[#D4AF37] focus:outline-none text-sm"
                        />
                      </div>

                      {formNoticeVisible && (
                        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#D4AF37] text-xs text-[#3D2E22] space-y-2">
                          <p className="font-bold text-[#1C120C] flex items-center gap-1.5">
                            <Info className="w-4 h-4 text-[#9A7418]" />
                            <span>Frontend Form Ready (Backend Endpoint Placeholder)</span>
                          </p>
                          <p>
                            This static deployment does not yet have a live server email handler
                            attached. Connect Netlify Forms or open your default email client below:
                          </p>
                          <a
                            href={`mailto:${BRAND_CONFIG.contactEmailPlaceholder}?subject=${encodeURIComponent(
                              contactForm.subject || 'Gurbani World Inquiry'
                            )}&body=${encodeURIComponent(
                              `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`
                            )}`}
                            className="inline-flex items-center gap-1.5 font-bold text-[#9A7418] underline"
                          >
                            <span>Open in Default Email App</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1C120C] hover:bg-[#2C1D14] text-[#D4AF37] font-bold text-sm transition cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Prepare Message</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================================================================
            PRIVACY POLICY PAGE
        ================================================================== */}
        {currentRoute === 'privacy' && (
  <section className="py-16 bg-[#FAF7F2]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 sm:p-12 border border-[#E6DEC8] shadow-2xs space-y-6">
      <div className="border-b border-[#E6DEC8] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
            Legal & Trust Documentation
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#1C120C] mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6E5A48] mt-1">
            Gurbani World Website • Developed by {BRAND_CONFIG.organization} (Google Play: {BRAND_CONFIG.playStoreDeveloper})
          </p>
        </div>
        <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E6DEC8] text-[#5C4938] self-start">
          Effective Year: {new Date().getFullYear()}
        </span>
      </div>

      <div className="space-y-5 text-sm text-[#4A3B2C] leading-relaxed">
        <p>
          Gurbani World (“we,” “our,” or “us”), developed under{' '}
          <strong>{BRAND_CONFIG.organization}</strong> and published on Google Play under{' '}
          <strong>{BRAND_CONFIG.playStoreDeveloper}</strong>, values your privacy and is
          committed to maintaining a safe, transparent, and respectful digital environment
          for Sikh spiritual learning.
        </p>

        <div className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#1C120C]">
            1. Information We Collect
          </h2>
          <p>
            You can read Gurbani, Nitnem Banis, Daily Hukamnama Sahib, and Sikhi Learning
            resources without creating a mandatory user account. We only receive personal
            details when you voluntarily submit them, such as:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#5C4938]">
            <li>
              <strong>Contact Inquiries:</strong> Name, email address, and message details
              voluntarily sent through our contact channels.
            </li>
            <li>
              <strong>Daily Path Count Seva Submissions:</strong> Voluntary Path count
              entries submitted inside the Gurbani World mobile application for collective
              Sangat Seva tracking.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#1C120C]">
            2. How Information Is Used
          </h2>
          <p>
            Any voluntarily submitted information is used strictly to respond to your
            support or Seva inquiries, improve Gurbani World features, and maintain reliable
            spiritual services. We never sell, rent, or trade user personal data to third
            parties.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#1C120C]">
            3. Third-Party Services & External Media Links
          </h2>
          <p>
            Our platform provides links to our official Google Play Store listing (
            <code className="text-xs bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#E6DEC8]">
              com.singhcreations.gurbaniworld
            </code>
            ), Live Kirtan audio streams, and Sikh educational video channels. When you
            interact with third-party platforms, their respective privacy policies apply.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#1C120C]">
            4. Data Security & Children’s Privacy
          </h2>
          <p>
            Gurbani World is designed as a wholesome, family-friendly spiritual and
            educational resource suitable for learners of all ages. We apply industry-standard
            HTTPS encryption and minimal data practices across our web presence.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#1C120C]">
            5. Contact Us Regarding Privacy
          </h2>
          <p>
            If you have questions about this Privacy Policy or wish to request removal of a
            previously submitted inquiry, please reach out via our{' '}
            <button
              type="button"
              onClick={() => navigateTo('contact')}
              className="font-bold text-[#9A7418] underline cursor-pointer"
            >
              Contact Us
            </button>{' '}
            page or directly email us at{' '}
            <a href="mailto:simranmalapro@gmail.com" className="font-bold text-[#9A7418] underline">
              simranmalapro@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  </section>
)}

        {/* ==================================================================
            STANDALONE ANDROID APP PRIVACY POLICY PAGE
        ================================================================== */}
       {currentRoute === 'app-privacy-policy' && (
  <section className="py-12 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2] min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Hero Banner Card */}
      <div className="relative overflow-hidden bg-[#1C120C] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#D4AF37]/40">
        {/* Subtle Decorative Radial Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#E07A16]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Privacy Policy – Gurbani World
            </h1>
            <p className="text-sm text-[#D6C7B2] max-w-xl leading-relaxed">
              Transparent disclosure on how data is handled, protected & respected within App.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" />
        


      

      {/* Main Policy Document Body */}
      <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E6DEC8] shadow-md space-y-8 text-sm text-[#4A3B2C] leading-relaxed">
        
        {/* 1. Introduction */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
              01
            </span>
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">Introduction</h2>
          </div>
          <p>
            Gurbani World ("we", "our", or "us") is an ad-supported mobile application developed by Jasmeet Singh. The application provides Gurbani-related content, daily Hukamnama, Nitnem, spiritual resources, and other religious content.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, and share information when you use the Gurbani World App. We respect your privacy and are committed to protecting the information you choose to share with us. By using Gurbani World, you acknowledge the practices described in this Privacy Policy.
          </p>
        </div>

        <hr className="border-[#EFE8D8]" />

        {/* 2. Information We Collect */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
              02
            </span>
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">Information We Collect</h2>
          </div>
          <p>
            Gurbani World does not require users to create an account or register to access its main features. However, certain optional features, including Daily Path Count submission, may require users to voluntarily provide information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-2">
              <h3 className="font-serif text-base font-bold text-[#1C120C]">A. Personal Information</h3>
              <p className="text-xs text-[#6E5A48]">
                Depending on the feature you use, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 font-medium text-[#1C120C]">
                <li>Name</li>
                <li>Phone Number</li>
                <li>City</li>
              </ul>
              <p className="text-xs text-[#5C4938] pt-1">
                Providing this information is voluntary. It is collected only when you choose to submit it through an applicable feature or form.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-2">
              <h3 className="font-serif text-base font-bold text-[#1C120C]">B. Daily Path Count Information</h3>
              <p className="text-xs text-[#6E5A48]">
                When you voluntarily submit your Daily Path Count, the information you provide may be stored in Firebase Cloud Firestore to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Record user-submitted Path Count information.</li>
                <li>Operate and improve the Daily Path Count feature.</li>
                <li>Maintain relevant submission records.</li>
              </ul>
              <p className="text-xs text-[#8C6D46] italic pt-1">
                Please do not submit information that is not requested by the feature.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF7F2]/60 border border-[#E6DEC8] space-y-2">
            <h3 className="font-serif text-base font-bold text-[#1C120C]">C. Automatically Collected Information</h3>
            <p>
              When you use Gurbani World, certain technical and usage information may be collected automatically by our third-party service providers. This may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5">
              <li>Device model and manufacturer.</li>
              <li>Operating system and version.</li>
              <li>App version and configuration.</li>
              <li>IP address.</li>
              <li>App usage and interaction information.</li>
              <li>Device or app installation identifiers.</li>
              <li>Crash reports and diagnostic information.</li>
              <li>Advertising identifiers and interaction data.</li>
            </ul>
            <p className="text-xs text-[#6E5A48] pt-1">
              This information helps us maintain, secure, troubleshoot, and improve the application.
            </p>
          </div>
        </div>

        <hr className="border-[#EFE8D8]" />

        {/* 3. Third-Party Services */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
              03
            </span>
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">Third-Party Services</h2>
          </div>
          <p>
            Gurbani World uses third-party services to provide advertisements, notifications, analytics, and technical support. These providers may collect or process certain information in accordance with their own privacy policies.
          </p>

          <div className="space-y-4">
            {/* AdMob */}
            <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-base font-bold text-[#1C120C]">A. Google AdMob</h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                  Advertising
                </span>
              </div>
              <p>
                We use Google AdMob to display Banner and Interstitial advertisements within the application. AdMob may collect or process information such as Advertising ID and other device identifiers, IP address, device information, advertising interactions, and diagnostic/performance data used to provide, measure, and improve advertisements.
              </p>
              <p>
                Depending on the user's device settings, consent choices, and advertising configuration, advertisements may be personalized or non-personalized. Google may use collected information for advertising, measurement, fraud prevention, and related purposes.
              </p>
              <div className="flex flex-wrap gap-4 pt-1 text-xs font-medium">
                <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" className="text-[#E07A16] hover:underline">
                  Google AdMob Privacy Info ↗
                </a>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E07A16] hover:underline">
                  Google Privacy Policy ↗
                </a>
              </div>
            </div>

            {/* Firebase Analytics */}
            <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-base font-bold text-[#1C120C]">B. Firebase Analytics</h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                  Usage Analytics
                </span>
              </div>
              <p>
                We use Firebase Analytics to understand how users interact with Gurbani World. It may collect app usage events, screen views and interactions, app instance identifiers, device information, general usage statistics, and approximate location information derived from IP addresses, where applicable.
              </p>
              <div className="pt-1 text-xs font-medium">
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E07A16] hover:underline">
                  Firebase Privacy Information ↗
                </a>
              </div>
            </div>

            {/* Firebase Crashlytics */}
            <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-base font-bold text-[#1C120C]">C. Firebase Crashlytics</h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                  Stability & Diagnostics
                </span>
              </div>
              <p>
                We use Firebase Crashlytics to identify application crashes, technical errors, and stability issues. Crashlytics may collect crash reports and stack traces, device model and operating system information, app version, crash timestamps, Firebase installation identifiers, and technical diagnostic information.
              </p>
              <div className="pt-1 text-xs font-medium">
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E07A16] hover:underline">
                  Firebase Privacy Information ↗
                </a>
              </div>
            </div>

            {/* Firebase Cloud Messaging */}
            <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-base font-bold text-[#1C120C]">D. Firebase Cloud Messaging (FCM)</h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                  Push Notifications
                </span>
              </div>
              <p>
                We use Firebase Cloud Messaging to deliver notifications related to Gurbani World, including daily updates and other relevant app announcements. For notification delivery, Firebase may process Firebase installation identifiers, device and app-related technical information, and notification delivery information. You can manage or disable notifications through your Android device settings.
              </p>
              <div className="pt-1 text-xs font-medium">
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E07A16] hover:underline">
                  Firebase Privacy Information ↗
                </a>
              </div>
            </div>

            {/* Firebase Cloud Firestore */}
            <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-base font-bold text-[#1C120C]">E. Firebase Cloud Firestore</h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                  Cloud Database
                </span>
              </div>
              <p>
                We use Firebase Cloud Firestore to securely store information voluntarily submitted through certain app features, including Daily Path Count submissions. Information stored may include the details you provide, such as your Name, Phone Number, and City, where requested by the relevant feature. Firebase processes and stores information according to its applicable privacy and security practices.
              </p>
              <div className="pt-1 text-xs font-medium">
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E07A16] hover:underline">
                  Firebase Privacy Information ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#EFE8D8]" />

        {/* 4 & 5 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                04
              </span>
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">How We Use Information</h2>
            </div>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To provide and operate Gurbani World features.</li>
              <li>To process voluntary Daily Path Count submissions.</li>
              <li>To send relevant notifications.</li>
              <li>To display and measure advertisements.</li>
              <li>To understand application usage.</li>
              <li>To identify and resolve crashes and technical errors.</li>
              <li>To maintain application security.</li>
              <li>To improve application performance and user experience.</li>
              <li>To respond to user questions and privacy requests.</li>
            </ul>
            <p className="font-semibold text-[#1C120C] pt-1">
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                05
              </span>
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">Sharing of Information</h2>
            </div>
            <p>
              We do not sell or rent your personal information. Information may be processed or shared with the following service providers when necessary to operate the application:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Google AdMob for advertising services.</li>
              <li>Firebase Analytics for application analytics.</li>
              <li>Firebase Crashlytics for crash reporting.</li>
              <li>Firebase Cloud Messaging for notifications.</li>
              <li>Firebase Cloud Firestore for storing voluntary submissions.</li>
            </ul>
            <p className="text-xs text-[#6E5A48] pt-1">
              These providers process information subject to their applicable privacy terms and policies. Information may also be disclosed where required by applicable law or valid legal process.
            </p>
          </div>
        </div>

        <hr className="border-[#EFE8D8]" />

        {/* 6. Data Storage and Security */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
              06
            </span>
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">Data Storage and Security</h2>
          </div>
          <p>
            Information voluntarily submitted through supported features is stored using Firebase Cloud Firestore. We take reasonable technical and organizational measures to protect information against unauthorized access, alteration, disclosure, or destruction. Google Firebase provides security measures, including encryption in transit and other infrastructure security protections. However, no method of electronic storage or internet transmission can be guaranteed to be completely secure.
          </p>
        </div>

        <hr className="border-[#EFE8D8]" />

        {/* 7. Data Retention and Deletion (Highlighted Callout Card) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border-2 border-[#D4AF37]/50 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
              07
            </span>
            <h2 className="font-serif text-xl font-bold text-[#1C120C]">Data Retention and Deletion</h2>
          </div>
          <p>
            We retain voluntarily submitted personal information only for as long as reasonably necessary to provide the relevant feature, fulfill its purpose, and meet applicable legal obligations. Since Gurbani World does not provide user account registration or login functionality, users do not have an app account that requires account deletion. However, users can request deletion of personal information submitted through the application.
          </p>
          <div className="p-4 rounded-xl bg-white border border-[#E6DEC8] space-y-2">
            <p className="font-semibold text-[#1C120C]">
              To request deletion, contact us at:{' '}
              <a href="mailto:simranmalapro@gmail.com" className="text-[#E07A16] underline">
                simranmalapro@gmail.com
              </a>
            </p>
            <p className="text-xs text-[#6E5A48]">Please mention:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs font-medium text-[#1C120C]">
              <li>Gurbani World – Data Deletion Request.</li>
              <li>The information or submission you want deleted.</li>
              <li>Sufficient details to help us identify the relevant submission.</li>
            </ul>
          </div>
          <p className="text-xs text-[#5C4938]">
            We will review the request and take appropriate steps to delete the identifiable information from our active records, subject to applicable legal requirements and legitimate retention obligations. Some technical information maintained independently by third-party service providers may be subject to their respective retention and deletion policies.
          </p>
        </div>

        {/* 8 to 13 Sections */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                08
              </span>
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">Notifications</h2>
            </div>
            <p>
              Gurbani World may send notifications through Firebase Cloud Messaging to provide daily updates and relevant information. You can disable notifications at any time through your Android device's notification settings. Disabling notifications will not prevent you from accessing the main application features.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                09
              </span>
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">Advertising and User Choices</h2>
            </div>
            <p>
              Gurbani World displays Banner and Interstitial advertisements through Google AdMob. Google and its advertising partners may use device identifiers and other information to provide and measure advertisements. You may manage advertising privacy preferences and advertising identifier settings through your Android device settings and any consent options presented within the application, where applicable. For additional information, please visit:{' '}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-[#E07A16] underline">
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                10
              </span>
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">Children's Privacy</h2>
            </div>
            <p>
              Gurbani World is intended for users aged 13 years and above. We do not knowingly collect personal information from children under the age of 13. If we become aware that personal information has been collected from a child under 13 without appropriate authorization, we will take reasonable steps to review and delete that information. Parents or guardians who believe that a child has provided personal information may contact us at:{' '}
              <a href="mailto:simranmalapro@gmail.com" className="text-[#E07A16] underline">
                simranmalapro@gmail.com
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                11
              </span>
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">Third-Party Websites and Services</h2>
            </div>
            <p>
              Our application may contain links to external websites or third-party services. We do not control the privacy practices or content of these external services. Users are encouraged to review the respective privacy policies before interacting with third-party websites or services.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                12
              </span>
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">Your Privacy Rights</h2>
            </div>
            <p>Depending on applicable laws, you may have rights to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access to your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Raise questions or concerns about how your information is used.</li>
            </ul>
            <p>
              To exercise these rights, contact us at:{' '}
              <a href="mailto:simranmalapro@gmail.com" className="text-[#E07A16] underline">
                simranmalapro@gmail.com
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                13
              </span>
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">Changes to This Privacy Policy</h2>
            </div>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our application, services, legal requirements, or data handling practices. Any updates will be published on this page with a revised Effective Date. We encourage users to review this page periodically.
            </p>
          </div>
        </div>

        {/* 14. Contact Us Footer Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1C120C] text-[#FAF7F2] space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#D4AF37] text-[#1C120C] font-serif font-bold text-xs flex items-center justify-center shrink-0">
              14
            </span>
            <h2 className="font-serif text-xl font-bold text-white">Contact Us</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#D6C7B2]">
            If you have questions, concerns, suggestions, or requests regarding this Privacy Policy or the handling of your personal information, please contact:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="sm:col-span-2 p-3 rounded-xl bg-white/5 border border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[#A89882] block">Official Privacy Support Email</span>
                <a href="mailto:simranmalapro@gmail.com" className="font-semibold text-[#D4AF37] underline text-sm">
                  simranmalapro@gmail.com
                </a>
              </div>
              <a
                href="mailto:simranmalapro@gmail.com?subject=Gurbani%20World%20-%20Privacy%20Inquiry"
                className="px-4 py-2 rounded-lg bg-[#D4AF37] text-[#1C120C] font-bold text-xs hover:bg-[#E5C158] transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
          <p className="text-[11px] text-[#A89882]">
            We will make reasonable efforts to respond to privacy-related inquiries.
          </p>
        </div>

      </div>
    </div>
  </section>
)}

        {/* ==================================================================
            TERMS & CONDITIONS PAGE
        ================================================================== */}
        {currentRoute === 'terms' && (
          <section className="py-16 bg-[#FAF7F2]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 sm:p-12 border border-[#E6DEC8] shadow-2xs space-y-6">
              <div className="border-b border-[#E6DEC8] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
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
                  Welcome to the official website of <strong>Gurbani World</strong>, an all-in-one
                  Sikh spiritual and educational platform created by{' '}
                  <strong>{BRAND_CONFIG.organization}</strong>. By accessing or using this website
                  and our linked Android application, you agree to comply with these Terms &
                  Conditions.
                </p>

                <div className="space-y-2">
                  <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                    1. Reverent & Respectful Use of Sacred Content
                  </h2>
                  <p>
                    All Gurbani verses, Nitnem Banis, Daily Hukamnama Sahib updates, translations,
                    and Sikh historical articles are provided strictly for personal devotion,
                    spiritual reflection, and educational study. Users agree to treat all Gurbani
                    text and Sikh heritage resources with dignity and respect.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                    2. Intellectual Property & Brand Identity
                  </h2>
                  <p>
                    The <strong>Gurbani World</strong> name, official crest, website design,
                    custom graphics, and original software architecture belong to{' '}
                    <strong>{BRAND_CONFIG.organization}</strong>. You may share links to our
                    official website and Google Play Store listing freely, provided you do not
                    misrepresent affiliation or redistribute modified application packages.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                    3. Educational Purpose & Accuracy Disclaimer
                  </h2>
                  <p>
                    While we strive for complete scriptural and historical accuracy across Punjabi,
                    Hindi, and English content, translations and educational summaries are offered as
                    learning aids. Seekers are always encouraged to consult Sri Guru Granth Sahib Ji
                    and learned Gurmat scholars for deeper study.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                    4. Updates to Platform & Terms
                  </h2>
                  <p>
                    {BRAND_CONFIG.organization} may update features, educational modules, or these
                    Terms & Conditions periodically as Gurbani World continues to grow. Continued use
                    of the platform constitutes acceptance of the updated terms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================================================================
            CUSTOM 404 NOT FOUND PAGE
        ================================================================== */}
        {currentRoute === '404' && (
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
                The link you followed may have moved or is no longer available. Return to the
                Gurbani World home page to continue exploring Nitnem, Gurbani, and Sikhi Learning.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1C120C] text-[#D4AF37] font-bold text-sm cursor-pointer"
                >
                  <HomeIcon className="w-4 h-4" />
                  <span>Return to Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo('features')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#E6DEC8] text-sm font-semibold text-[#1C120C] cursor-pointer"
                >
                  Explore App Features
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ====================================================================
          FOOTER
      ==================================================================== */}
      <footer className="bg-[#1C120C] text-[#FAF7F2] border-t border-[#D4AF37]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#D4AF37]/20">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-4">
              <GurbaniWorldLogo size={44} lightText={true} />
              <p className="font-hindi text-sm sm:text-base text-[#FAF7F2]/85 leading-relaxed max-w-md pt-1">
                {BRAND_CONFIG.hindiFooterDesc}
              </p>
              <p className="text-xs text-[#D4AF37] font-serif">
                “{BRAND_CONFIG.tagline}”
              </p>
            </div>

            {/* Primary Navigation Links */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
                Explore Gurbani World
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-[#FAF7F2]/80">
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('home')}
                    className="hover:text-[#D4AF37] transition cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('about')}
                    className="hover:text-[#D4AF37] transition cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('features')}
                    className="hover:text-[#D4AF37] transition cursor-pointer"
                  >
                    App Features
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('learning')}
                    className="hover:text-[#D4AF37] transition cursor-pointer"
                  >
                    Sikhi Learning
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('app')}
                    className="hover:text-[#D4AF37] transition cursor-pointer"
                  >
                    Gurbani World App
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('contact')}
                    className="hover:text-[#D4AF37] transition cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal & App Download Column */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
                Official App & Legal
              </h3>
              <ul className="space-y-2 text-sm text-[#FAF7F2]/80">
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('privacy')}
                    className="hover:text-[#D4AF37] transition cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('app-privacy-policy')}
                    className="hover:text-[#D4AF37] transition text-xs text-[#D4AF37] cursor-pointer"
                  >
                    Android App Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo('terms')}
                    className="hover:text-[#D4AF37] transition cursor-pointer"
                  >
                    Terms and Conditions
                  </button>
                </li>
              </ul>
              <div className="pt-1">
                <a
                  href={BRAND_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2A1B12] hover:bg-[#362317] border border-[#D4AF37]/45 text-xs font-bold text-[#D4AF37] transition"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Google Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Developer Credit */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/70">
            <p>
              © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-[#D4AF37] font-medium">
                Developed with devotion by {BRAND_CONFIG.organization}.
              </p>
              <button
                type="button"
                onClick={() => setSeoBlueprintOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 text-[#FAF7F2]/85 transition cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>SEO & Netlify Config</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          NETLIFY DEPLOYMENT & SEO CONFIGURATION MODAL (With 1-Click Downloads)
      ==================================================================== */}
      {seoBlueprintOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-[#D4AF37] shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-[#E6DEC8] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
                  Production Deployment & SEO Export
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1C120C]">
                  Netlify Config, sitemap.xml & robots.txt
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSeoBlueprintOpen(false)}
                className="p-2 rounded-lg hover:bg-[#FAF7F2] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-[#3D2E22]">
              {/* 1. netlify.toml */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-bold text-[#1C120C]">1. netlify.toml (SPA Routing & Security Headers)</p>
                  <button
                    type="button"
                    onClick={() =>
                      handleDownloadFile(
                        `[build]\n  command = "npm run build"\n  publish = "dist"\n\n[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200\n\n[[headers]]\n  for = "/*"\n  [headers.values]\n    X-Frame-Options = "DENY"\n    X-Content-Type-Options = "nosniff"\n    Referrer-Policy = "strict-origin-when-cross-origin"`,
                        'netlify.toml'
                      )
                    }
                    className="inline-flex items-center gap-1 text-[#9A7418] hover:text-[#1C120C] font-bold cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-[#1C120C] text-[#FAF7F2] overflow-x-auto">
{`[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"`}
                </pre>
              </div>

              {/* 2. robots.txt */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-bold text-[#1C120C]">2. public/robots.txt</p>
                  <button
                    type="button"
                    onClick={() =>
                      handleDownloadFile(
                        `User-agent: *\nAllow: /\n\nSitemap: https://gurbaniworld.org/sitemap.xml`,
                        'robots.txt'
                      )
                    }
                    className="inline-flex items-center gap-1 text-[#9A7418] hover:text-[#1C120C] font-bold cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-[#1C120C] text-[#FAF7F2] overflow-x-auto">
{`User-agent: *
Allow: /

Sitemap: https://gurbaniworld.org/sitemap.xml`}
                </pre>
              </div>

              {/* 3. sitemap.xml */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-bold text-[#1C120C]">3. public/sitemap.xml</p>
                  <button
                    type="button"
                    onClick={() =>
                      handleDownloadFile(
                        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://gurbaniworld.org/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>\n  <url><loc>https://gurbaniworld.org/#about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n  <url><loc>https://gurbaniworld.org/#features</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>\n  <url><loc>https://gurbaniworld.org/#learning</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>\n  <url><loc>https://gurbaniworld.org/#app</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>\n  <url><loc>https://gurbaniworld.org/#contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>\n  <url><loc>https://gurbaniworld.org/#privacy</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>\n  <url><loc>https://gurbaniworld.org/#terms</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>\n</urlset>`,
                        'sitemap.xml',
                        'application/xml'
                      )
                    }
                    className="inline-flex items-center gap-1 text-[#9A7418] hover:text-[#1C120C] font-bold cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-[#1C120C] text-[#FAF7F2] overflow-x-auto">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://gurbaniworld.org/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://gurbaniworld.org/#about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://gurbaniworld.org/#features</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://gurbaniworld.org/#learning</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://gurbaniworld.org/#app</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://gurbaniworld.org/#contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://gurbaniworld.org/#privacy</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
  <url><loc>https://gurbaniworld.org/#terms</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
</urlset>`}
                </pre>
              </div>

              <p className="text-[#5C4938]">
                <strong>Active Runtime SEO:</strong> Dynamic page titles, meta descriptions, Open
                Graph / Twitter cards, SVG favicon, and JSON-LD{' '}
                <code className="font-mono">Organization</code> +{' '}
                <code className="font-mono">SoftwareApplication</code> schemas are automatically
                injected into <code className="font-mono">&lt;head&gt;</code> on every route change.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}