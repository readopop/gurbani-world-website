import { Link } from 'react-router-dom';
import { BRAND_CONFIG } from '../data/brand';

export default function Privacy() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 sm:p-12 border border-[#E6DEC8] shadow-2xs space-y-6">
        <div className="border-b border-[#E6DEC8] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
              Legal & Trust Documentation
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#1C120C] mt-1">Privacy Policy</h1>
            <p className="text-xs text-[#6E5A48] mt-1">
              Gurbani World Website • Developed by {BRAND_CONFIG.organization} (Google Play:{' '}
              {BRAND_CONFIG.playStoreDeveloper})
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
            <strong>{BRAND_CONFIG.playStoreDeveloper}</strong>, values your privacy and is committed
            to maintaining a safe, transparent, and respectful digital environment for Sikh
            spiritual learning.
          </p>

          <div className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#1C120C]">
              1. Information We Collect
            </h2>
            <p>
              You can read Gurbani, Nitnem Banis, Daily Hukamnama Sahib, and Sikhi Learning
              resources without creating a mandatory user account. We only receive personal details
              when you voluntarily submit them, such as:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#5C4938]">
              <li>
                <strong>Contact Inquiries:</strong> Name, email address, and message details
                voluntarily sent through our contact channels.
              </li>
              <li>
                <strong>Daily Path Count Seva Submissions:</strong> Voluntary Path count entries
                submitted inside the Gurbani World mobile application for collective Sangat Seva
                tracking.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#1C120C]">
              2. How Information Is Used
            </h2>
            <p>
              Any voluntarily submitted information is used strictly to respond to your support or
              Seva inquiries, improve Gurbani World features, and maintain reliable spiritual
              services. We never sell, rent, or trade user personal data to third parties.
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
              ), Live Kirtan audio streams, and Sikh educational video channels. When you interact
              with third-party platforms, their respective privacy policies apply.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#1C120C]">
              4. Data Security & Children’s Privacy
            </h2>
            <p>
              Gurbani World is designed as a wholesome, family-friendly spiritual and educational
              resource suitable for learners of all ages. We apply industry-standard HTTPS
              encryption and minimal data practices across our web presence.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#1C120C]">
              5. Contact Us Regarding Privacy
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to request removal of a
              previously submitted inquiry, please reach out via our{' '}
              <Link to="/contact" className="font-bold text-[#9A7418] underline cursor-pointer">
                Contact Us
              </Link>{' '}
              page or directly email us at{' '}
              <a
                href="mailto:simranmalapro@gmail.com"
                className="font-bold text-[#9A7418] underline"
              >
                simranmalapro@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
