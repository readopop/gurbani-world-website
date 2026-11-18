import {
  BookOpen,
  Sparkles,
  Sun,
  Layers,
  Headphones,
  UserCheck,
  GraduationCap,
} from 'lucide-react';

export const APP_FEATURE_CATEGORIES = [
  {
    id: 'daily-updates',
    code: 'A',
    title: 'Daily Spiritual Updates',
    subtitle:
      'Stay connected with daily Gurbani updates, spiritual inspiration, upcoming Sikh occasions and collective Seva.',
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
    subtitle:
      'A dedicated collection of more than 30 sacred Banis for daily Nitnem and spiritual reading.',
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
    subtitle:
      'Explore and read sacred Gurbani from Sri Guru Granth Sahib Ji and Sri Dasam Granth Sahib Ji, with dedicated reading and search facilities.',
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
        desc: "Access additional compositions including Bhagat Ravidas Ji's Banis, Vaaran and other sacred compositions.",
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
    subtitle:
      'Learn about Sikh history, Sikh Gurus, Sikh principles, Punjabi language and the Nanakshahi Calendar through organized educational content.',
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
    subtitle:
      'Listen to live Gurbani Kirtan and explore available Sikh devotional and educational videos.',
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
    subtitle:
      'Explore dedicated collections of spiritual teachings, Gurmat thoughts and devotional wisdom.',
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
