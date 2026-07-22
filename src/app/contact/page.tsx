'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { ContentContainer } from '@/components/LayoutPrimitives';

interface FormData {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  howHeard: string;
  message: string;
  websiteUrl: string; // Honeypot field
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

const INQUIRY_OPTIONS = [
  'General Inquiry',
  'Custom Smart Devices',
  'Websites & Mobile Apps',
  'Data & Insights',
  'tinyLeague',
  'Other',
];

const HEARD_OPTIONS = [
  'Word of Mouth',
  'Event or Tournament',
  'Search',
  'Social Media',
  'Referral',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    howHeard: '',
    message: '',
    websiteUrl: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please choose an inquiry type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message cannot exceed 2,000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Failed to submit the form.');
      }

      setSubmitSuccess(true);
    } catch (err: any) {
      setServerError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#181818] min-h-screen pt-36 sm:pt-44 pb-36 sm:pb-48 text-white font-sans select-none flex flex-col justify-between">
      <ContentContainer className="flex flex-col items-center">
        
        {/* COMPACT CENTERED HEADER */}
        <div className="text-center max-w-3xl mb-16 sm:mb-20 flex flex-col items-center">
          <Typography
            variant="caption"
            className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-4"
          >
            CONTACT
          </Typography>
          
          <h1 
            style={{ 
              fontSize: 'clamp(28px, 4.5vw, 48px)', 
              fontWeight: '800', 
              letterSpacing: '-0.02em', 
              color: '#FAF9F6', 
              margin: '0 0 18px 0',
              lineHeight: '1.15'
            }}
            className="font-sans text-balance text-center"
          >
            Solutions Built Around Your Needs
          </h1>
          
          <p className="text-[#D4D4D4] font-sans text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Interested in learning more, contact us and we'll be in touch within 1–2 business days.
          </p>
        </div>

        {/* ORANGE GRADIENT SECTION DIVIDER (Increased bottom margin for extra separation) */}
        <div className="w-full max-w-[800px] mx-auto px-6 mb-20 sm:mb-24">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />
        </div>

        {/* NARROW FORM COLUMN */}
        <div className="w-full max-w-[620px] mx-auto">
          {submitSuccess ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="bg-[#222222] border border-[#333333] rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-y-6 shadow-2xl animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#FD955D]/10 border border-[#FD955D]/30 flex items-center justify-center text-[#FD955D] text-2xl">
                ✓
              </div>
              <div className="flex flex-col gap-y-2">
                <h3 className="text-2xl font-bold text-[#FAF9F6]">Thank You!</h3>
                <p className="text-[#D4D4D4] text-sm leading-relaxed max-w-md">
                  Thanks for your inquiry, we'll be in touch soon.
                </p>
              </div>
              <Link
                href="/"
                className="mt-2 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 active:scale-95 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #d86835 0%, #ba4d1d 100%)',
                  boxShadow: '0 4px 20px rgba(216, 104, 53, 0.35)',
                }}
              >
                Return Home
              </Link>
            </div>
          ) : (
            /* CONTACT FORM (Increased vertical gap between rows) */
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
              
              {/* HONEYPOT ANTI-SPAM FIELD */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="websiteUrl">Do not fill this out</label>
                <input
                  type="text"
                  id="websiteUrl"
                  name="websiteUrl"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                />
              </div>

              {/* SERVER ERROR ALERT */}
              {serverError && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs sm:text-sm">
                  {serverError}
                </div>
              )}

              {/* NAME & EMAIL ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                
                {/* NAME FIELD */}
                <div className="flex flex-col gap-y-2.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[#D4D4D4] flex items-center gap-x-1">
                    Name <span className="text-[#FD955D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-[#202020] border ${
                      errors.name ? 'border-red-500' : 'border-[#333333]'
                    } rounded-xl px-5 py-3 text-xs sm:text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#FD955D] transition-colors`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-[#FD955D]">{errors.name}</span>
                  )}
                </div>

                {/* EMAIL FIELD */}
                <div className="flex flex-col gap-y-2.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[#D4D4D4] flex items-center gap-x-1">
                    Email <span className="text-[#FD955D]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@organization.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-[#202020] border ${
                      errors.email ? 'border-red-500' : 'border-[#333333]'
                    } rounded-xl px-5 py-3 text-xs sm:text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#FD955D] transition-colors`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-[#FD955D]">{errors.email}</span>
                  )}
                </div>

              </div>

              {/* ORGANIZATION FIELD */}
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="organization" className="text-xs font-semibold text-[#D4D4D4]">
                  Organization <span className="text-[#777777] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="League, club, or company"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full bg-[#202020] border border-[#333333] rounded-xl px-5 py-3 text-xs sm:text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#FD955D] transition-colors"
                />
              </div>

              {/* INQUIRY & HOW HEARD ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
                
                {/* INQUIRY TYPE DROPDOWN */}
                <div className="flex flex-col gap-y-2.5">
                  <label htmlFor="inquiryType" className="text-xs font-semibold text-[#D4D4D4] flex items-center gap-x-1 min-h-[18px]">
                    Inquiry Type <span className="text-[#FD955D]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`w-full bg-[#202020] border ${
                        errors.inquiryType ? 'border-red-500' : 'border-[#333333]'
                      } rounded-xl pl-5 pr-10 py-3 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#FD955D] transition-colors cursor-pointer ${
                        !formData.inquiryType ? 'text-[#555555]' : 'text-white'
                      }`}
                    >
                      <option value="" disabled hidden>
                        Select an inquiry type...
                      </option>
                      {INQUIRY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#202020] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FD955D] text-[10px]">
                      ▼
                    </div>
                  </div>
                  {errors.inquiryType && (
                    <span className="text-[11px] text-[#FD955D]">{errors.inquiryType}</span>
                  )}
                </div>

                {/* HOW HEARD DROPDOWN */}
                <div className="flex flex-col gap-y-2.5">
                  <label htmlFor="howHeard" className="text-xs font-semibold text-[#D4D4D4] min-h-[18px]">
                    How Did You Hear About Us <span className="text-[#777777] font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="howHeard"
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      className={`w-full bg-[#202020] border border-[#333333] rounded-xl pl-5 pr-10 py-3 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#FD955D] transition-colors cursor-pointer ${
                        !formData.howHeard ? 'text-[#555555]' : 'text-white'
                      }`}
                    >
                      <option value="" disabled hidden>
                        Select an option...
                      </option>
                      {HEARD_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#202020] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FD955D] text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>

              </div>

              {/* MESSAGE TEXTAREA */}
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="message" className="text-xs font-semibold text-[#D4D4D4] flex items-center gap-x-1">
                  Message <span className="text-[#FD955D]">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    placeholder="Tell us about your league, event, or project..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-[#202020] border ${
                      errors.message ? 'border-red-500' : 'border-[#333333]'
                    } rounded-xl px-5 py-3.5 text-xs sm:text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#FD955D] transition-colors resize-y min-h-[140px]`}
                  />
                </div>
                <div className="flex items-center justify-between mt-0.5">
                  <div>
                    {errors.message && (
                      <span className="text-[11px] text-[#FD955D]">{errors.message}</span>
                    )}
                  </div>
                  {/* LIVE CHARACTER COUNTER */}
                  <span className="text-[11px] text-[#777777] font-mono ml-auto">
                    {formData.message.length.toLocaleString()} / 2,000
                  </span>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base transition-all duration-200 active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #d86835 0%, #ba4d1d 100%)',
                  boxShadow: '0 4px 20px rgba(216, 104, 53, 0.35)',
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

            </form>
          )}
        </div>

      </ContentContainer>
    </main>
  );
}