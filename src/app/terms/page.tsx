// src/app/terms/page.tsx
import React from 'react';
import { ContentContainer } from '@/components/LayoutPrimitives';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen w-full bg-[#181818] pb-24 pt-28 font-sans text-[#FAF9F6] sm:pb-40 sm:pt-40">
      <ContentContainer size="prose">
        
        {/* PAGE HEADING */}
        <h1 className="mb-2 text-[clamp(1.75rem,6vw,2.5rem)] font-extrabold leading-tight tracking-tight text-white">
          Terms of Service
        </h1>
        
        {/* LAST UPDATED LINE */}
        <p className="mb-12 font-mono text-xs text-[#A3A3A3]">
          Last updated: July 28, 2026
        </p>

        <div className="space-y-10">
          
          {/* SECTION: INTRODUCTION */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Introduction
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              Welcome to the Digital Sports Solutions LLC website. By accessing or using our site,
              you agree to comply with and be bound by the following Terms of Service. Please review
              these terms carefully. If you do not agree to these terms, you should not use this
              website.
            </p>
          </section>

          {/* SECTION: USE OF WEBSITE */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Use of Website
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              This website is intended to provide information about Digital Sports Solutions LLC and
              our services. The content on this site is for general informational purposes only and
              should not be considered as professional advice. We reserve the right to modify the
              content on this site at any time without prior notice.
            </p>
          </section>

          {/* SECTION: USER CONDUCT */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              User Conduct
            </h2>
            <p className="mb-3 text-[16px] leading-[1.65] text-[#D4D4D4]">
              When using this website, you agree not to:
            </p>
            <ul className="list-inside list-disc space-y-2 text-[16px] leading-[1.65] text-[#D4D4D4]">
              <li>Violate any applicable laws or regulations.</li>
              <li>
                Use the website in any manner that could interfere with other users&apos; access or
                enjoyment of the site.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the site, its systems, or
                networks.
              </li>
            </ul>
          </section>

          {/* SECTION: CONTACT FORM */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Contact Form
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              Our website provides a contact form for inquiries. By submitting the form, you agree to
              provide accurate contact information and consent to Digital Sports Solutions LLC using
              that information solely to respond to your inquiry.
            </p>
          </section>

          {/* SECTION: PRIVACY */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Privacy
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              We are committed to protecting your privacy. Please refer to our Privacy Policy for
              information on how we handle user data. We only collect personal information that you
              voluntarily provide to us directly, such as through our contact form.
            </p>
          </section>

          {/* SECTION: THIRD-PARTY LINKS */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Third-Party Links
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              Our website may contain links to third-party websites. Digital Sports Solutions LLC is
              not responsible for the content or practices of any third-party sites. We encourage you
              to review the terms of service and privacy policies of any external websites you visit.
            </p>
          </section>

          {/* SECTION: INTELLECTUAL PROPERTY & TRADEMARKS */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Intellectual Property &amp; Trademarks
            </h2>
            <p className="mb-4 text-[16px] leading-[1.65] text-[#D4D4D4]">
              All content on this website, including but not limited to text, graphics, logos,
              icons, images, and software, is the property of Digital Sports Solutions LLC and is
              protected by applicable intellectual property laws.
            </p>
            <p className="mb-4 text-[16px] leading-[1.65] text-[#D4D4D4]">
              The following are trademarks of Digital Sports Solutions, LLC, with trademark
              applications pending before the United States Patent and Trademark Office: DSS™,
              tinyLeague™, tinyLeague Logo™, and DSS Logo™. The DSS LogoMark™ is a trademark of
              Digital Sports Solutions, LLC with a trademark application accepted for registration,
              pending issuance of the registration certificate.
            </p>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              Unauthorized use, reproduction, or distribution of any DSS trademarks, logos, or
              brand names — in whole or in part — without the express written consent of Digital
              Sports Solutions LLC is strictly prohibited.
            </p>
          </section>

          {/* SECTION: CHANGES TO THESE TERMS */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Changes to These Terms
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              Digital Sports Solutions LLC reserves the right to update or modify these Terms of
              Service at any time without prior notice. By continuing to use the website after
              changes are posted, you agree to accept the updated terms.
            </p>
          </section>

          {/* SECTION: CONTACT US */}
          <section>
            <div className="mb-3 h-[2px] w-8 bg-[#FD955D]" />
            <h2 className="mb-3 text-[20px] font-semibold text-white">
              Contact Us
            </h2>
            <p className="mb-4 text-[16px] leading-[1.65] text-[#D4D4D4]">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a
                href="mailto:contact@digitalsportssolutions.com"
                className="text-white underline transition-colors hover:text-[#FD955D]"
              >
                contact@digitalsportssolutions.com
              </a>
              .
            </p>
            <p className="text-[16px] leading-[1.65] text-[#D4D4D4]">
              By using this website, you acknowledge that you have read and understood these Terms of
              Service and agree to be bound by them.
            </p>
          </section>

        </div>
      </ContentContainer>
    </main>
  );
}