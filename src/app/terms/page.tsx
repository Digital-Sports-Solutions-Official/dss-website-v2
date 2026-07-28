import React from 'react';
import { ContentContainer } from '@/components/LayoutPrimitives';

export default function TermsOfServicePage() {
  return (
    <main className="w-full bg-[#232323] min-h-screen pt-28 sm:pt-40 pb-24 sm:pb-40 text-[#FAF9F6] font-sans">
      <ContentContainer size="prose">
        
        {/* PAGE HEADING */}
        <h1 className="text-[clamp(1.75rem,6vw,2.5rem)] font-extrabold tracking-tight leading-tight text-white mb-2">
          Terms of Service
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
              Welcome to the Digital Sports Solutions LLC website. By accessing or using our site, you agree to comply with and be bound by the following Terms of Service. Please review these terms carefully. If you do not agree to these terms, you should not use this website.
            </p>
          </section>

          {/* SECTION: USE OF WEBSITE */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Use of Website
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              This website is intended to provide information about Digital Sports Solutions LLC and our services. The content on this site is for general informational purposes only and should not be considered as professional advice. We reserve the right to modify the content on this site at any time without prior notice.
            </p>
          </section>

          {/* SECTION: USER CONDUCT */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              User Conduct
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              When using this website, you agree not to violate any applicable laws or regulations, use the website in any manner that could interfere with other users' access or enjoyment of the site, or attempt to gain unauthorized access to any portion of the site, its systems, or networks.
            </p>
          </section>

          {/* SECTION: CONTACT FORM */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Contact Form
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              Our website provides a contact form for inquiries. By submitting the form, you agree to provide accurate contact information and consent to Digital Sports Solutions LLC using that information solely to respond to your inquiry.
            </p>
          </section>

          {/* SECTION: PRIVACY */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Privacy
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              We are committed to protecting your privacy. Please refer to our Privacy Policy for information on how we handle user data. We only collect personal information that you voluntarily provide to us directly, such as through our contact form.
            </p>
          </section>

          {/* SECTION: THIRD-PARTY LINKS */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Third-Party Links
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              Our website may contain links to third-party websites. Digital Sports Solutions LLC is not responsible for the content or practices of any third-party sites. We encourage you to review the terms of service and privacy policies of any external websites you visit.
            </p>
          </section>

          {/* SECTION: CHANGES TO THESE TERMS */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Changes to These Terms
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              Digital Sports Solutions LLC reserves the right to update or modify these Terms of Service at any time without prior notice. By continuing to use the website after changes are posted, you agree to accept the updated terms.
            </p>
          </section>

          {/* SECTION: CONTACT US */}
          <section>
            <div className="w-8 h-[2px] bg-[#c85a28] mb-3" />
            <h2 className="text-[20px] font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65] mb-4">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:contact@digitalsportssolutions.com" className="text-white underline hover:text-[#FD955D] transition-colors">
                contact@digitalsportssolutions.com
              </a>.
            </p>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
              By using this website, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
            </p>
          </section>

        </div>
      </ContentContainer>
    </main>
  );
}