import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CalendarDays, Headphones, Search, Sparkles, Video, GraduationCap, ArrowUpRight } from 'lucide-react';
import GooglePlayButton from '../components/GooglePlayButton';
import { BRAND_CONFIG } from '../data/brand';

const sections = [
  { icon: CalendarDays, title: 'Daily spiritual updates', items: ['Daily Hukamnama Sahib from Sri Harmandir Sahib', 'Sangrand Special Hukamnama', 'Daily Aaj Ka Vichar', 'Daily Baba Nand Singh Ji Bachan', 'Sant Singh Ji Maskeen Vichar'] },
  { icon: BookOpen, title: 'Gurbani and Nitnem reading', items: ['Nitnem and a collection of 30+ Banis', 'Sri Guru Granth Sahib Ji reading', 'Sri Dasam Granth Sahib Ji reading', 'Search Gurbani', 'Random Shabad'] },
  { icon: Sparkles, title: 'Simran and collective Seva', items: ['Simran Mala digital counter', 'Daily Path Count submission for the Samuhik Path and Ardas initiative'] },
  { icon: Headphones, title: 'Audio and video', items: ['Live Kirtan from available Gurdwaras and radio channels', 'Sikh Videos / Sikh Tube'] },
  { icon: GraduationCap, title: 'Sikh learning resources', items: ['Sikh Gurus biographies and Sikh history', 'Sikhism learning resources and FAQs', 'Learn Punjabi / Gurmukhi', 'Nanakshahi Calendar', '52 Hukamas associated with Guru Gobind Singh Ji at Hazur Sahib'] },
];

function GuideSection({ icon: Icon, title, children, id }) {
  return (
    <section id={id} className="scroll-mt-28 space-y-3">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-xl bg-[#1C120C] text-[#D4AF37] flex items-center justify-center shrink-0"><Icon className="w-5 h-5" /></span>
        <h2 className="font-serif text-2xl font-bold text-[#1C120C]">{title}</h2>
      </div>
      <div className="space-y-3 text-sm sm:text-base text-[#4A3B2C] leading-7">{children}</div>
    </section>
  );
}

export default function GurbaniWorldAppGuide() {
  useEffect(() => {
    const canonicalUrl = 'https://gurbaniworld.netlify.app/guide';
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Gurbani World App: Complete Guide to Features and How to Use It',
      description: 'A practical guide to using Gurbani World for Daily Hukamnama, Nitnem, Gurbani reading, Simran, Kirtan and Sikh learning.',
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
      author: { '@type': 'Organization', name: 'Singh Tech' },
      publisher: { '@type': 'Organization', name: 'Gurbani World' },
      inLanguage: 'en',
      about: { '@type': 'SoftwareApplication', name: 'Gurbani World', operatingSystem: 'Android', applicationCategory: 'BooksAndReferenceApplication', url: BRAND_CONFIG.playStoreUrl },
    };
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gurbaniworld.netlify.app/' },
        { '@type': 'ListItem', position: 2, name: 'Sikhi Learning', item: 'https://gurbaniworld.netlify.app/learning' },
        { '@type': 'ListItem', position: 3, name: 'Gurbani World App Guide', item: canonicalUrl },
      ],
    };
    const scripts = [
      ['gurbani-world-guide-article-schema', articleSchema],
      ['gurbani-world-guide-breadcrumb-schema', breadcrumbSchema],
    ];
    scripts.forEach(([id, schema]) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });
    return () => scripts.forEach(([id]) => document.getElementById(id)?.remove());
  }, []);

  return (
    <article className="bg-[#FAF7F2] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-[#7D5F12] mb-7">
          <Link to="/" className="hover:underline">Home</Link><span className="mx-2">/</span>
          <Link to="/learning" className="hover:underline">Sikhi Learning</Link><span className="mx-2">/</span>
          <span className="text-[#6E5A48]">Gurbani World App Guide</span>
        </nav>

        <header className="bg-gradient-to-br from-[#1C120C] via-[#2A1B12] to-[#110A06] text-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-lg mb-9">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Sikhi Learning · App Guide</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.7rem] leading-tight font-bold mt-3">Gurbani World App: Complete Guide to Features and How to Use It</h1>
          <p className="mt-4 text-sm sm:text-base leading-7 text-[#FAF7F2]/85">A practical introduction to the Gurbani World Android app—what it offers, where to begin, and how to explore Gurbani, Nitnem, daily spiritual updates, Simran and Sikh learning resources.</p>
          <div className="mt-6"><GooglePlayButton /></div>
        </header>

        <div className="bg-white rounded-2xl border border-[#E6DEC8] p-5 sm:p-7 mb-10">
          <h2 className="font-serif text-xl font-bold text-[#1C120C] mb-3">In this guide</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-[#7D5F12]">
            <a className="hover:underline" href="#getting-started">Getting started</a>
            <a className="hover:underline" href="#daily-updates">Daily spiritual updates</a>
            <a className="hover:underline" href="#gurbani-reading">Gurbani and Nitnem</a>
            <a className="hover:underline" href="#simran-seva">Simran and Path Count</a>
            <a className="hover:underline" href="#audio-video">Live Kirtan and videos</a>
            <a className="hover:underline" href="#learning">Sikh learning resources</a>
            <a className="hover:underline" href="#faqs">Frequently asked questions</a>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E6DEC8] p-5 sm:p-8 space-y-8 text-sm sm:text-base text-[#4A3B2C] leading-7 mb-10">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1C120C]">What is Gurbani World?</h2>
            <p><strong>Gurbani World</strong> is an Android application by Singh Creations, published on Google Play under the developer display name <strong>SINGH TECH</strong>. It brings together daily Gurbani updates, Nitnem and Bani reading, Sikh scripture resources, Simran tools, Kirtan, videos and educational material in one app.</p>
            <p>The app is intended to make it easier for users to access these resources as part of their personal reading, listening, reflection and learning routines. It is a collection of digital resources; it does not replace guidance from knowledgeable Sikh teachers or the Maryada of the Sangat and Gurdwara.</p>
            <p><strong>App package:</strong> <code className="text-xs bg-[#FAF7F2] px-2 py-1 rounded">com.singhcreations.gurbaniworld</code></p>
          </section>

          <GuideSection id="getting-started" icon={BookOpen} title="Getting started with the app">
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Install the official app.</strong> Open the Google Play link in this guide and choose Install on your Android device.</li>
              <li><strong>Open Gurbani World.</strong> After installation, launch the app from your device.</li>
              <li><strong>Choose what you want to explore.</strong> Start with a daily update, open a Bani for reading, explore the scripture collections, or visit a learning or audio-video resource.</li>
              <li><strong>Return to the relevant feature when needed.</strong> The app contains several different collections and tools. Select the relevant section within the app rather than assuming every feature follows the same reading or playback flow.</li>
            </ol>
            <p>Feature names and availability are described below. The exact on-screen layout can change as the app is updated, so this guide avoids relying on unverified button names or screen positions.</p>
          </GuideSection>

          <GuideSection id="daily-updates" icon={CalendarDays} title="Daily spiritual updates">
            <h3 className="font-semibold text-[#1C120C]">Daily Hukamnama Sahib</h3>
            <p>Access the daily Hukamnama Sahib from Sri Harmandir Sahib. Open the Daily Hukamnama feature to read the day's Hukamnama as presented in the app. Many users make it part of a daily routine of reflection and Gurbani reading.</p>
            <h3 className="font-semibold text-[#1C120C]">Sangrand Special Hukamnama</h3>
            <p>On Sangrand, explore the dedicated Sangrand Special Hukamnama. It is a separate monthly spiritual update from the regular daily Hukamnama feature.</p>
            <h3 className="font-semibold text-[#1C120C]">Aaj Ka Vichar</h3>
            <p>Read the daily Aaj Ka Vichar for a short spiritual thought or reflection. It can be used as a prompt for contemplation during the day.</p>
            <h3 className="font-semibold text-[#1C120C]">Baba Nand Singh Ji Bachan</h3>
            <p>Explore the daily Baba Nand Singh Ji Bachan and the dedicated collection of Bachan available in the app. The collection brings devotional teachings together for reading and reflection.</p>
            <h3 className="font-semibold text-[#1C120C]">Sant Singh Ji Maskeen Vichar</h3>
            <p>Read Sant Singh Ji Maskeen Vichar in the daily updates and explore the dedicated collection of his Gurmat thoughts and spiritual explanations.</p>
          </GuideSection>

          <GuideSection id="gurbani-reading" icon={BookOpen} title="Gurbani reading, Nitnem and scripture">
            <h3 className="font-semibold text-[#1C120C]">Nitnem and 30+ Banis</h3>
            <p>Open the Nitnem and Bani collection to find daily prayers and other sacred compositions. The app includes more than 30 Banis. Select the Bani you intend to read and follow its text within the app. The collection includes familiar Nitnem compositions such as Japji Sahib, Jaap Sahib, Tav-Prasad Savaiye, Chaupai Sahib, Anand Sahib, Rehras Sahib and Kirtan Sohila, along with additional Banis.</p>
            <h3 className="font-semibold text-[#1C120C]">Sri Guru Granth Sahib Ji and Sri Dasam Granth Sahib Ji</h3>
            <p>The Gurbani library provides reading access to Sri Guru Granth Sahib Ji and Sri Dasam Granth Sahib Ji. Choose the scripture collection you wish to explore and continue with the available reading content.</p>
            <h3 className="font-semibold text-[#1C120C]">Search Gurbani</h3>
            <p>Use Search Gurbani when you want to look for Gurbani within the supported scripture collections, including Sri Guru Granth Sahib Ji and Sri Dasam Granth Sahib Ji. Enter the words or phrase you are looking for in the search feature and review the matching results provided by the app.</p>
            <h3 className="font-semibold text-[#1C120C]">Random Shabad</h3>
            <p>Explore Random Shabad when you want to discover a Shabad without choosing a specific passage first. It offers another way to encounter Gurbani during personal reading and reflection.</p>
          </GuideSection>

          <GuideSection id="simran-seva" icon={Sparkles} title="Simran Mala and Daily Path Count Seva">
            <h3 className="font-semibold text-[#1C120C]">Simran Mala digital counter</h3>
            <p>Use Simran Mala as a digital counter while doing Naam Simran. It provides a simple way to count repetitions during a Simran session. Keep your attention on remembrance; the counter is only a supporting tool.</p>
            <h3 className="font-semibold text-[#1C120C]">Daily Path Count submission</h3>
            <p>The Daily Path Count feature allows Sangat members to submit their daily Path counts for the Samuhik Path and Ardas initiative. The listed submissions include Japji Sahib, Mool Mantar and Chaupai Sahib counts.</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Open the Daily Path Count section in Gurbani World.</li>
              <li>Review the Path categories shown in the submission form.</li>
              <li>Enter the count you have completed in the relevant field or fields.</li>
              <li>Review your entries and submit them using the form provided in the app.</li>
            </ol>
            <p>Submit counts honestly and only for the Path you have actually completed. This feature is a Seva participation facility; it should not be confused with a personal user account or login system.</p>
          </GuideSection>

          <GuideSection id="audio-video" icon={Headphones} title="Live Kirtan and Sikh videos">
            <h3 className="font-semibold text-[#1C120C]">Live Kirtan</h3>
            <p>Open Live Kirtan to access the available live Gurbani Kirtan streams from Gurdwaras and radio channels listed in the app. Choose an available stream to listen. Stream availability can depend on the source and its connection.</p>
            <h3 className="font-semibold text-[#1C120C]">Sikh Videos / Sikh Tube</h3>
            <p>Visit Sikh Videos, also presented as Sikh Tube, to explore the available Sikh video content and Kirtan videos. Select a video from the listings to view it.</p>
          </GuideSection>

          <GuideSection id="learning" icon={GraduationCap} title="Sikh learning and reference resources">
            <p>Gurbani World also includes resources for people who want to learn about Sikh heritage, Sikh teachings and Gurmukhi. Depending on the topic you are studying, explore:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Sikh Gurus biographies:</strong> learn about the lives and contributions of the Sikh Gurus.</li>
              <li><strong>Sikh History:</strong> explore historical events, people and milestones in Sikh history.</li>
              <li><strong>Sikhism learning resources and FAQs:</strong> read introductory material and answers to common questions about Sikhi.</li>
              <li><strong>Learn Punjabi / Gurmukhi:</strong> explore learning material for the Punjabi language and Gurmukhi script.</li>
              <li><strong>Nanakshahi Calendar:</strong> refer to Sikh dates and observances through the calendar resource.</li>
              <li><strong>52 Hukamas:</strong> read the collection of 52 Hukamas associated with Sri Guru Gobind Singh Ji at Sri Hazur Sahib.</li>
            </ul>
            <p>For additional reading on the website, visit the <Link to="/learning" className="text-[#7D5F12] font-semibold underline underline-offset-2">Sikhi Learning Hub</Link>, the <Link to="/features" className="text-[#7D5F12] font-semibold underline underline-offset-2">complete app features page</Link>, and the <Link to="/about-app" className="text-[#7D5F12] font-semibold underline underline-offset-2">About This App page</Link>.</p>
          </GuideSection>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1C120C]">Quick feature reference</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {sections.map(({ icon: Icon, title, items }) => (
                <div key={title} className="rounded-xl bg-[#FAF7F2] border border-[#E6DEC8] p-4">
                  <div className="flex items-center gap-2 font-semibold text-[#1C120C] mb-2"><Icon className="w-4 h-4 text-[#7D5F12]" />{title}</div>
                  <ul className="text-xs sm:text-sm text-[#5C4938] space-y-1.5 list-disc pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          <section id="faqs" className="scroll-mt-28 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1C120C]">Frequently asked questions</h2>
            <div className="space-y-4">
              <div><h3 className="font-semibold text-[#1C120C]">Is Gurbani World available for Android?</h3><p>Yes. The official Gurbani World app is available on Google Play for Android devices.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">Who develops and publishes Gurbani World?</h3><p>The app is developed by Singh Tech and appears on Google Play under the developer display name SINGH TECH.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">Does the app include Daily Hukamnama Sahib?</h3><p>Yes. It includes Daily Hukamnama Sahib from Sri Harmandir Sahib and a separate Sangrand Special Hukamnama feature.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">How many Banis are available?</h3><p>The app includes a collection of more than 30 Banis for Nitnem and reading.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">Can I read Sri Guru Granth Sahib Ji and Dasam Granth Sahib Ji?</h3><p>Yes. The app includes reading resources for both Sri Guru Granth Sahib Ji and Sri Dasam Granth Sahib Ji.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">Can I submit my daily Path count?</h3><p>Yes. The Daily Path Count submission feature supports the Samuhik Path and Ardas initiative, including counts for Japji Sahib, Mool Mantar and Chaupai Sahib.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">Does Gurbani World require an account or login?</h3><p>No user login or account facility is offered in the app. The Daily Path Count submission is a feature for submitting Path counts, not an account-registration system.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">Can I listen to Kirtan in the app?</h3><p>Yes. Live Kirtan provides access to available streams from listed Gurdwaras and radio channels. Availability depends on the stream source.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">Is every feature available offline?</h3><p>This guide does not claim offline availability. Features that load daily updates, search results, streams or online content may require an internet connection.</p></div>
              <div><h3 className="font-semibold text-[#1C120C]">Where can I download the official app?</h3><p>Use the official Google Play listing linked below. Check the developer name SINGH TECH and the app package identifier when verifying the listing.</p></div>
            </div>
          </section>
        </div>

        <section className="rounded-3xl bg-[#1C120C] border border-[#D4AF37]/40 text-center text-[#FAF7F2] p-7 sm:p-10 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">Begin your Gurbani journey</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">Explore Gurbani World on Android</h2>
          <p className="max-w-2xl mx-auto text-sm leading-6 text-[#FAF7F2]/80">Access Daily Hukamnama Sahib, Nitnem, Gurbani reading, Simran Mala, Live Kirtan and Sikh learning resources in one place.</p>
          <div className="flex justify-center pt-2"><GooglePlayButton /></div>
          <p className="text-xs text-[#FAF7F2]/65">Google Play developer: SINGH TECH · Package: com.singhcreations.gurbaniworld</p>
          <a href={BRAND_CONFIG.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-[#E2C04D] underline underline-offset-4">Open official Google Play listing <ArrowUpRight className="w-4 h-4" /></a>
        </section>
      </div>
    </article>
  );
}
