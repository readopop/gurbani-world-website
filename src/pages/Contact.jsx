import { useState } from 'react';
import { Heart, ExternalLink, Mail, Send, Info, Copy, Check, Share2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formNoticeVisible, setFormNoticeVisible] = useState(false);

  const handleCopyText = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2000);
  };
  return (
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
            We welcome your suggestions, feedback, Seva inquiries, and community collaboration ideas
            for Gurbani World.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Contact & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-[#E6DEC8] space-y-5">
              <h2 className="font-serif text-2xl font-bold text-[#1C120C]">Official Channels</h2>
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
                  onClick={() => handleCopyText(BRAND_CONFIG.contactEmailPlaceholder, 'email')}
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
                    <p className="text-xs text-[#FAF7F2]/75">Official Gurbani World App</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#E6DEC8] shadow-2xs">
              <h2 className="font-serif text-2xl font-bold text-[#1C120C]">Send a Message</h2>
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
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
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
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
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
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
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
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
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
                      This static deployment does not yet have a live server email handler attached.
                      Connect Netlify Forms or open your default email client below:
                    </p>
                    <a
                      href={`mailto:${BRAND_CONFIG.contactEmailPlaceholder}?subject=${encodeURIComponent(
                        contactForm.subject || 'Gurbani World Inquiry',
                      )}&body=${encodeURIComponent(
                        `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`,
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
  );
}
