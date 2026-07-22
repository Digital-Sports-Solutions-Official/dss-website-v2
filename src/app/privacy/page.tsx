import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-[#232323] min-h-screen pt-[160px] pb-40 text-[#FAF9F6] font-sans">
      <div className="max-w-[780px] mx-auto px-6 sm:px-8">
        
        {/* PAGE HEADING */}
        <h1 className="text-[32px] sm:text-[40px] font-extrabold tracking-tight leading-tight text-white mb-2">
          Privacy Policy
        </h1>
        
        {/* LAST UPDATED LINE */}
        <p className="text-xs text-[#A3A3A3] font-mono mb-12">
          Last updated: July 15, 2026
        </p>

        <div className="space-y-10">
          
          {/* SECTION: INTRODUCTION */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Introduction
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              Digital Sports Solutions LLC values your privacy and is committed to protecting your personal information. This Privacy Policy outlines our approach to user privacy and details the information we collect and how we handle it.
            </p>
          </section>

          {/* SECTION: INFORMATION WE COLLECT */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Information We Collect
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65] mb-4">
              We do not track, monitor, or record your browsing habits, location, or device. The only personal information we collect is what you voluntarily provide to us directly through our contact form (your name, email address, organization if provided, and message), which is used solely to respond to your inquiry.
            </p>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              We do not sell, rent, or share this information with third parties for marketing purposes.
            </p>
          </section>

          {/* SECTION: THIRD-PARTY SERVICE PROVIDERS */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Third-Party Service Providers
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              To deliver messages submitted through our contact form, we use Resend, a third-party email delivery service. Information submitted through the contact form is transmitted through Resend solely to route your message to us and is not used by Resend or Digital Sports Solutions LLC for any other purpose.
            </p>
          </section>

          {/* SECTION: COOKIES AND TRACKING */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Cookies and Tracking
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              Our website does not use cookies or any third-party tracking services to monitor user activity. We are dedicated to maintaining a browsing experience free from tracking or data collection tools.
            </p>
          </section>

          {/* SECTION: EXTERNAL LINKS */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              External Links
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              Our website may contain links to third-party websites. Please note that once you leave our website, we are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* SECTION: CHANGES TO THIS POLICY */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Changes to This Policy
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              We reserve the right to update or change this Privacy Policy at any time. Any changes will be reflected on this page, and we encourage you to review this policy periodically.
            </p>
          </section>

          {/* SECTION: CONTACT US */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65] mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
              <a href="mailto:contact@digitalsportssolutions.com" className="text-white underline hover:text-[#FD955D] transition-colors">
                contact@digitalsportssolutions.com
              </a>.
            </p>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              By using our website, you agree to the terms of this Privacy Policy.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}