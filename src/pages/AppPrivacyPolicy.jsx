export default function AppPrivacyPolicy() {
  return (
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
              Gurbani World ("we", "our", or "us") is an ad-supported mobile application developed
              by Jasmeet Singh. The application provides Gurbani-related content, daily Hukamnama,
              Nitnem, spiritual resources, and other religious content.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and share information when
              you use the Gurbani World App. We respect your privacy and are committed to protecting
              the information you choose to share with us. By using Gurbani World, you acknowledge
              the practices described in this Privacy Policy.
            </p>
          </div>

          <hr className="border-[#EFE8D8]" />

          {/* 2. Information We Collect */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                02
              </span>
              <h2 className="font-serif text-xl font-bold text-[#1C120C]">
                Information We Collect
              </h2>
            </div>
            <p>
              Gurbani World does not require users to create an account or register to access its
              main features. However, certain optional features, including Daily Path Count
              submission, may require users to voluntarily provide information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-2">
                <h3 className="font-serif text-base font-bold text-[#1C120C]">
                  A. Personal Information
                </h3>
                <p className="text-xs text-[#6E5A48]">
                  Depending on the feature you use, we may collect:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-medium text-[#1C120C]">
                  <li>Name</li>
                  <li>Phone Number</li>
                  <li>City</li>
                </ul>
                <p className="text-xs text-[#5C4938] pt-1">
                  Providing this information is voluntary. It is collected only when you choose to
                  submit it through an applicable feature or form.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-2">
                <h3 className="font-serif text-base font-bold text-[#1C120C]">
                  B. Daily Path Count Information
                </h3>
                <p className="text-xs text-[#6E5A48]">
                  When you voluntarily submit your Daily Path Count, the information you provide may
                  be stored in Firebase Cloud Firestore to:
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
              <h3 className="font-serif text-base font-bold text-[#1C120C]">
                C. Automatically Collected Information
              </h3>
              <p>
                When you use Gurbani World, certain technical and usage information may be collected
                automatically by our third-party service providers. This may include:
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
                This information helps us maintain, secure, troubleshoot, and improve the
                application.
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
              Gurbani World uses third-party services to provide advertisements, notifications,
              analytics, and technical support. These providers may collect or process certain
              information in accordance with their own privacy policies.
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
                  We use Google AdMob to display Banner and Interstitial advertisements within the
                  application. AdMob may collect or process information such as Advertising ID and
                  other device identifiers, IP address, device information, advertising
                  interactions, and diagnostic/performance data used to provide, measure, and
                  improve advertisements.
                </p>
                <p>
                  Depending on the user's device settings, consent choices, and advertising
                  configuration, advertisements may be personalized or non-personalized. Google may
                  use collected information for advertising, measurement, fraud prevention, and
                  related purposes.
                </p>
                <div className="flex flex-wrap gap-4 pt-1 text-xs font-medium">
                  <a
                    href="https://support.google.com/admob/answer/6128543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E07A16] hover:underline"
                  >
                    Google AdMob Privacy Info ↗
                  </a>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E07A16] hover:underline"
                  >
                    Google Privacy Policy ↗
                  </a>
                </div>
              </div>

              {/* Firebase Analytics */}
              <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#1C120C]">
                    B. Firebase Analytics
                  </h3>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                    Usage Analytics
                  </span>
                </div>
                <p>
                  We use Firebase Analytics to understand how users interact with Gurbani World. It
                  may collect app usage events, screen views and interactions, app instance
                  identifiers, device information, general usage statistics, and approximate
                  location information derived from IP addresses, where applicable.
                </p>
                <div className="pt-1 text-xs font-medium">
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E07A16] hover:underline"
                  >
                    Firebase Privacy Information ↗
                  </a>
                </div>
              </div>

              {/* Firebase Crashlytics */}
              <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#1C120C]">
                    C. Firebase Crashlytics
                  </h3>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                    Stability & Diagnostics
                  </span>
                </div>
                <p>
                  We use Firebase Crashlytics to identify application crashes, technical errors, and
                  stability issues. Crashlytics may collect crash reports and stack traces, device
                  model and operating system information, app version, crash timestamps, Firebase
                  installation identifiers, and technical diagnostic information.
                </p>
                <div className="pt-1 text-xs font-medium">
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E07A16] hover:underline"
                  >
                    Firebase Privacy Information ↗
                  </a>
                </div>
              </div>

              {/* Firebase Cloud Messaging */}
              <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#1C120C]">
                    D. Firebase Cloud Messaging (FCM)
                  </h3>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                    Push Notifications
                  </span>
                </div>
                <p>
                  We use Firebase Cloud Messaging to deliver notifications related to Gurbani World,
                  including daily updates and other relevant app announcements. For notification
                  delivery, Firebase may process Firebase installation identifiers, device and
                  app-related technical information, and notification delivery information. You can
                  manage or disable notifications through your Android device settings.
                </p>
                <div className="pt-1 text-xs font-medium">
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E07A16] hover:underline"
                  >
                    Firebase Privacy Information ↗
                  </a>
                </div>
              </div>

              {/* Firebase Cloud Firestore */}
              <div className="p-5 rounded-2xl border border-[#E6DEC8] bg-white space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#1C120C]">
                    E. Firebase Cloud Firestore
                  </h3>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#E07A16] border border-[#D4AF37]/40">
                    Cloud Database
                  </span>
                </div>
                <p>
                  We use Firebase Cloud Firestore to securely store information voluntarily
                  submitted through certain app features, including Daily Path Count submissions.
                  Information stored may include the details you provide, such as your Name, Phone
                  Number, and City, where requested by the relevant feature. Firebase processes and
                  stores information according to its applicable privacy and security practices.
                </p>
                <div className="pt-1 text-xs font-medium">
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E07A16] hover:underline"
                  >
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
                <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                  How We Use Information
                </h2>
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
                <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                  Sharing of Information
                </h2>
              </div>
              <p>
                We do not sell or rent your personal information. Information may be processed or
                shared with the following service providers when necessary to operate the
                application:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Google AdMob for advertising services.</li>
                <li>Firebase Analytics for application analytics.</li>
                <li>Firebase Crashlytics for crash reporting.</li>
                <li>Firebase Cloud Messaging for notifications.</li>
                <li>Firebase Cloud Firestore for storing voluntary submissions.</li>
              </ul>
              <p className="text-xs text-[#6E5A48] pt-1">
                These providers process information subject to their applicable privacy terms and
                policies. Information may also be disclosed where required by applicable law or
                valid legal process.
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
              <h2 className="font-serif text-xl font-bold text-[#1C120C]">
                Data Storage and Security
              </h2>
            </div>
            <p>
              Information voluntarily submitted through supported features is stored using Firebase
              Cloud Firestore. We take reasonable technical and organizational measures to protect
              information against unauthorized access, alteration, disclosure, or destruction.
              Google Firebase provides security measures, including encryption in transit and other
              infrastructure security protections. However, no method of electronic storage or
              internet transmission can be guaranteed to be completely secure.
            </p>
          </div>

          <hr className="border-[#EFE8D8]" />

          {/* 7. Data Retention and Deletion (Highlighted Callout Card) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border-2 border-[#D4AF37]/50 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                07
              </span>
              <h2 className="font-serif text-xl font-bold text-[#1C120C]">
                Data Retention and Deletion
              </h2>
            </div>
            <p>
              We retain voluntarily submitted personal information only for as long as reasonably
              necessary to provide the relevant feature, fulfill its purpose, and meet applicable
              legal obligations. Since Gurbani World does not provide user account registration or
              login functionality, users do not have an app account that requires account deletion.
              However, users can request deletion of personal information submitted through the
              application.
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
              We will review the request and take appropriate steps to delete the identifiable
              information from our active records, subject to applicable legal requirements and
              legitimate retention obligations. Some technical information maintained independently
              by third-party service providers may be subject to their respective retention and
              deletion policies.
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
                Gurbani World may send notifications through Firebase Cloud Messaging to provide
                daily updates and relevant information. You can disable notifications at any time
                through your Android device's notification settings. Disabling notifications will
                not prevent you from accessing the main application features.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#1C120C] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                  Advertising and User Choices
                </h2>
              </div>
              <p>
                Gurbani World displays Banner and Interstitial advertisements through Google AdMob.
                Google and its advertising partners may use device identifiers and other information
                to provide and measure advertisements. You may manage advertising privacy
                preferences and advertising identifier settings through your Android device settings
                and any consent options presented within the application, where applicable. For
                additional information, please visit:{' '}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E07A16] underline"
                >
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
                Gurbani World is intended for users aged 13 years and above. We do not knowingly
                collect personal information from children under the age of 13. If we become aware
                that personal information has been collected from a child under 13 without
                appropriate authorization, we will take reasonable steps to review and delete that
                information. Parents or guardians who believe that a child has provided personal
                information may contact us at:{' '}
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
                <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                  Third-Party Websites and Services
                </h2>
              </div>
              <p>
                Our application may contain links to external websites or third-party services. We
                do not control the privacy practices or content of these external services. Users
                are encouraged to review the respective privacy policies before interacting with
                third-party websites or services.
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
                <h2 className="font-serif text-lg font-bold text-[#1C120C]">
                  Changes to This Privacy Policy
                </h2>
              </div>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                application, services, legal requirements, or data handling practices. Any updates
                will be published on this page with a revised Effective Date. We encourage users to
                review this page periodically.
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
              If you have questions, concerns, suggestions, or requests regarding this Privacy
              Policy or the handling of your personal information, please contact:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="sm:col-span-2 p-3 rounded-xl bg-white/5 border border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[#A89882] block">Official Privacy Support Email</span>
                  <a
                    href="mailto:simranmalapro@gmail.com"
                    className="font-semibold text-[#D4AF37] underline text-sm"
                  >
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
  );
}
