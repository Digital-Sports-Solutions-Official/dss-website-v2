'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { ContentContainer, Rule } from '@/components/LayoutPrimitives';

interface FormData {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  howHeard: string;
  message: string;
  websiteUrl: string; // Honeypot anti-spam field
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

      // Safely handle non-JSON responses (404/500 HTML pages)
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Server returned an invalid response (${res.status}). Please try again.`);
      }

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
    <main className="flex min-h-screen w-full flex-col justify-between bg-[#181818] pb-24 pt-28 font-sans select-none text-white sm:pb-40 sm:pt-40">
      <ContentContainer className="flex flex-col items-center">
        
        {/* COMPACT CENTERED HEADER */}
        <div className="mb-10 flex max-w-3xl flex-col items-center text-center sm:mb-16">
          <Typography variant="caption" className="mb-4 block">
            CONTACT
          </Typography>
          
          <Typography variant="h1" className="mb-4">
            Solutions Built Around Your Needs
          </Typography>
          
          <p className="mx-auto max-w-lg font-sans text-[0.9375rem] leading-relaxed text-[#D4D4D4]">
            Interested in learning more, contact us and we&apos;ll be in touch.
          </p>
        </div>

        {/* ORANGE GRADIENT SECTION DIVIDER */}
        <div className="mx-auto mb-12 w-full max-w-[800px] sm:mb-20">
          <Rule />
        </div>

        {/* NARROW FORM COLUMN */}
        <div className="mx-auto w-full max-w-[620px]">
          {submitSuccess ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="animate-fade-in flex flex-col items-center gap-y-6 rounded-2xl border border-[#333333] bg-[#222222] p-8 text-center shadow-2xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FD955D]/30 bg-[#FD955D]/10 text-2xl text-[#FD955D]">
                ✓
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="max-w-md text-base leading-relaxed text-[#D4D4D4] sm:text-lg">
                  Thanks for your inquiry, we&apos;ll be in touch soon.
                </p>
              </div>
              <Link
                href="/"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-orange-500/30 active:scale-95 sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #d86835 0%, #ba4d1d 100%)',
                  boxShadow: '0 4px 20px rgba(216, 104, 53, 0.35)',
                }}
              >
                Return Home
              </Link>
            </div>
          ) : (
            /* CONTACT FORM */
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
                <div className="rounded-xl border border-red-500/50 bg-red-950/40 p-4 text-[0.9375rem] text-red-300">
                  {serverError}
                </div>
              )}

              {/* NAME & EMAIL ROW */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                
                {/* NAME FIELD */}
                <div className="flex flex-col gap-y-2.5">
                  <label htmlFor="name" className="flex items-center gap-x-1 text-xs font-semibold text-[#D4D4D4]">
                    Name <span className="text-[#FD955D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-[#333333]'
                    } bg-[#202020] px-5 py-3 text-base text-white placeholder-[#555555] transition-colors focus:border-[#FD955D] focus:outline-none sm:text-sm`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-[#FD955D]">{errors.name}</span>
                  )}
                </div>

                {/* EMAIL FIELD */}
                <div className="flex flex-col gap-y-2.5">
                  <label htmlFor="email" className="flex items-center gap-x-1 text-xs font-semibold text-[#D4D4D4]">
                    Email <span className="text-[#FD955D]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@organization.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-[#333333]'
                    } bg-[#202020] px-5 py-3 text-base text-white placeholder-[#555555] transition-colors focus:border-[#FD955D] focus:outline-none sm:text-sm`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-[#FD955D]">{errors.email}</span>
                  )}
                </div>

              </div>

              {/* ORGANIZATION FIELD */}
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="organization" className="text-xs font-semibold text-[#D4D4D4]">
                  Organization <span className="font-normal text-[#777777]">(optional)</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="League, club, or company"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#333333] bg-[#202020] px-5 py-3 text-base text-white placeholder-[#555555] transition-colors focus:border-[#FD955D] focus:outline-none sm:text-sm"
                />
              </div>

              {/* INQUIRY & HOW HEARD ROW */}
              <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-8">
                
                {/* INQUIRY TYPE DROPDOWN */}
                <div className="flex flex-col gap-y-2.5">
                  <label htmlFor="inquiryType" className="flex min-h-[18px] items-center gap-x-1 text-xs font-semibold text-[#D4D4D4]">
                    Inquiry Type <span className="text-[#FD955D]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`w-full cursor-pointer appearance-none rounded-xl border ${
                        errors.inquiryType ? 'border-red-500' : 'border-[#333333]'
                      } bg-[#202020] pl-5 pr-10 py-3 text-base sm:text-sm transition-colors focus:border-[#FD955D] focus:outline-none ${
                        !formData.inquiryType ? 'text-[#555555]' : 'text-white'
                      }`}
                    >
                      <option value="">Select an inquiry type...</option>
                      {INQUIRY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#202020] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[#FD955D]">
                      ▼
                    </div>
                  </div>
                  {errors.inquiryType && (
                    <span className="text-[11px] text-[#FD955D]">{errors.inquiryType}</span>
                  )}
                </div>

                {/* HOW HEARD DROPDOWN */}
                <div className="flex flex-col gap-y-2.5">
                  <label htmlFor="howHeard" className="min-h-[18px] text-xs font-semibold text-[#D4D4D4]">
                    How Did You Hear About Us <span className="font-normal text-[#777777]">(optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="howHeard"
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      className={`w-full cursor-pointer appearance-none rounded-xl border border-[#333333] bg-[#202020] pl-5 pr-10 py-3 text-base sm:text-sm transition-colors focus:border-[#FD955D] focus:outline-none ${
                        !formData.howHeard ? 'text-[#555555]' : 'text-white'
                      }`}
                    >
                      <option value="">Select an option...</option>
                      {HEARD_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#202020] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[#FD955D]">
                      ▼
                    </div>
                  </div>
                </div>

              </div>

              {/* MESSAGE TEXTAREA */}
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="message" className="flex items-center gap-x-1 text-xs font-semibold text-[#D4D4D4]">
                  Message <span className="text-[#FD955D]">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    placeholder="Tell us about your inquiry…"
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-[140px] w-full resize-y rounded-xl border ${
                      errors.message ? 'border-red-500' : 'border-[#333333]'
                    } bg-[#202020] px-5 py-3.5 text-base text-white placeholder-[#555555] transition-colors focus:border-[#FD955D] focus:outline-none sm:text-sm`}
                  />
                </div>
                <div className="mt-0.5 flex items-center justify-between">
                  <div>
                    {errors.message && (
                      <span className="text-[11px] text-[#FD955D]">{errors.message}</span>
                    )}
                  </div>
                  {/* LIVE CHARACTER COUNTER */}
                  <span className="ml-auto font-mono text-[11px] text-[#777777]">
                    {formData.message.length.toLocaleString()} / 2,000
                  </span>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-orange-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:brightness-100 sm:text-base"
                style={{
                  background: 'linear-gradient(135deg, #d86835 0%, #ba4d1d 100%)',
                  boxShadow: '0 4px 20px rgba(216, 104, 53, 0.35)',
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-x-2">
                    <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
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