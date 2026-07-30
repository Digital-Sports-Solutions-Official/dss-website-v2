// src/app/privacy/page.tsx
import React from 'react';
import { ContentContainer } from '@/components/LayoutPrimitives';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full bg-[#181818] pb-24 pt-28 font-sans text-[#FAF9F6] sm:pb-40 sm:pt-40">
      <ContentContainer size="prose">
        
        {/* PAGE HEADING */}
        <h1 className="mb-2 text-[clamp(1.75rem,6vw,2.5rem)] font-extrabold leading-tight tracking-tight text-white">
          Privacy Policy
        </h1>
        
        {/* LAST UPDATED LINE */}
        <p className="mb-12 font-mono text-xs text-[#A3A3A3]">
          Last updated: July 28, 2026
        </p>

        <div className="space-y-10">
          
          {/* SECTION: INTRODUCTION */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FF1900]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Introduction
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              Digital Sports Solutions LLC values your privacy and is committed to protecting your
              personal information. This Privacy Policy outlines our approach to user privacy and
              details the information we collect and how we handle it.
            </p>
          </section>

          {/* SECTION: INFORMATION WE COLLECT */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FF1900]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Information We Collect
            </h2>
            <p className="mb-3 text-[16px] leading-[1.65] text-[#D4D4D4]">
              We do not track, monitor, or record your browsing habits, location, or device. The
              only personal information we collect is what you voluntarily provide to us directly
              through our contact form:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-1.5 text-[16px] leading-[1.65] text-[#D4D4D4]">
              <li>Your name</li>
              <li>Email address</li>
              <li>Organization (if provided)</li>
              <li>Message details</li>
            </ul>
            <p className="mb-4 text-[16px] leading-[1.65] text-[#D4D4D4]">
              This information is used solely to respond to your inquiry.
            </p>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              We do not sell, rent, or share this information with third parties for marketing
              purposes.
            </p>
          </section>

          {/* SECTION: THIRD-PARTY SERVICE PROVIDERS */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FF1900]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Third-Party Service Providers
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              To deliver messages submitted through our contact form, we use Resend, a third-party
              email delivery service. Information submitted through the contact form is transmitted
              through Resend solely to route your message to us and is not used by Resend or Digital
              Sports Solutions LLC for any other purpose.
            </p>
          </section>

          {/* SECTION: COOKIES AND TRACKING */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FF1900]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Cookies and Tracking
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              Our website does not use cookies or any third-party tracking services to monitor user
              activity. We are dedicated to maintaining a browsing experience free from tracking or
              data collection tools.
            </p>
          </section>

          {/* SECTION: EXTERNAL LINKS */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FF1900]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              External Links
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              Our website may contain links to third-party websites. Please note that once you leave
              our website, we are not responsible for the privacy practices or content of those
              external sites. We encourage you to review the privacy policies of any third-party
              websites you visit.
            </p>
          </section>

          {/* SECTION: CHANGES TO THIS POLICY */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FF1900]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Changes to This Policy
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              We reserve the right to update or change this Privacy Policy at any time. Any changes
              will be reflected on this page, and we encourage you to review this policy
              periodically.
            </p>
          </section>

          {/* SECTION: CONTACT US */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FF1900]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Contact Us
            </h2>
            <p className="mb-4 text-[16px] leading-[1.65] text-[#D4D4D4]">
              If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
              <a
                href="mailto:contact@digitalsportssolutions.com"
                className="text-white underline transition-colors hover:text-[#FD955D]"
              >
                contact@digitalsportssolutions.com
              </a>
              .
            </p>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              By using our website, you agree to the terms of this Privacy Policy.
            </p>
          </section>

        </div>
      </ContentContainer>
    </main>
  );
}