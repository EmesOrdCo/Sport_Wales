'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export function ContactForm() {
  const t = useTranslations('forms');
  const locale = useLocale();
  const isWelsh = locale === 'cy';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#B91C3C]/10 border border-[#B91C3C]/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-[#B91C3C] mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
          {isWelsh ? 'Diolch!' : 'Thank You!'}
        </h3>
        <p className="text-[#64748B]">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label 
          htmlFor="name" 
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          {t('name')} <span className="text-[#B91C3C]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          aria-required="true"
          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#B91C3C] focus:border-transparent transition-all"
          placeholder={isWelsh ? 'Eich enw llawn' : 'Your full name'}
        />
      </div>

      {/* Email */}
      <div>
        <label 
          htmlFor="email" 
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          {t('email')} <span className="text-[#B91C3C]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          aria-required="true"
          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#B91C3C] focus:border-transparent transition-all"
          placeholder={isWelsh ? 'eich@ebost.com' : 'your@email.com'}
        />
      </div>

      {/* Phone */}
      <div>
        <label 
          htmlFor="phone" 
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          {t('phone')} <span className="text-[#94A3B8] font-normal text-xs">({t('optional')})</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#B91C3C] focus:border-transparent transition-all"
          placeholder={isWelsh ? '07xxx xxxxxx' : '07xxx xxxxxx'}
        />
      </div>

      {/* Organisation */}
      <div>
        <label 
          htmlFor="organisation" 
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          {t('organisation')} <span className="text-[#94A3B8] font-normal text-xs">({t('optional')})</span>
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          autoComplete="organization"
          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#B91C3C] focus:border-transparent transition-all"
          placeholder={isWelsh ? 'Enw eich sefydliad' : 'Your organisation name'}
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label 
          htmlFor="enquiry-type" 
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          {isWelsh ? 'Math o Ymholiad' : 'Enquiry Type'} <span className="text-[#B91C3C]">*</span>
        </label>
        <select
          id="enquiry-type"
          name="enquiry-type"
          required
          aria-required="true"
          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#B91C3C] focus:border-transparent transition-all appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
        >
          <option value="">{isWelsh ? 'Dewiswch opsiwn' : 'Select an option'}</option>
          <option value="general">{isWelsh ? 'Ymholiad Cyffredinol' : 'General Enquiry'}</option>
          <option value="funding">{isWelsh ? 'Ymholiad Cyllid' : 'Funding Enquiry'}</option>
          <option value="partnership">{isWelsh ? 'Partneriaeth' : 'Partnership'}</option>
          <option value="media">{isWelsh ? 'Y Cyfryngau' : 'Media'}</option>
          <option value="other">{isWelsh ? 'Arall' : 'Other'}</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label 
          htmlFor="message" 
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          {t('message')} <span className="text-[#B91C3C]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#B91C3C] focus:border-transparent transition-all resize-none"
          placeholder={isWelsh ? 'Sut gallwn ni eich helpu?' : 'How can we help you?'}
        />
      </div>

      {/* Privacy Notice */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          aria-required="true"
          className="w-5 h-5 mt-0.5 rounded border-[#E2E8F0] text-[#B91C3C] focus:ring-[#B91C3C] cursor-pointer"
        />
        <label htmlFor="privacy" className="text-sm text-[#64748B]">
          {isWelsh 
            ? 'Rwy\'n cytuno i\'r polisi preifatrwydd a\'r telerau ac amodau.'
            : 'I agree to the privacy policy and terms and conditions.'
          } <span className="text-[#B91C3C]">*</span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-8 rounded-xl bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] focus:outline-none focus:ring-2 focus:ring-[#B91C3C] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('sending')}
          </>
        ) : (
          <>
            {t('submit')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
