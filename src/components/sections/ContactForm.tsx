'use client';

import { useState, useId } from 'react';
import { useTranslations, useLocale } from 'next-intl';

interface FormErrors {
  name?: string;
  email?: string;
  'enquiry-type'?: string;
  message?: string;
  privacy?: string;
}

export function ContactForm() {
  const t = useTranslations('forms');
  const locale = useLocale();
  const isWelsh = locale === 'cy';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  // Generate unique IDs for accessibility
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const phoneId = `${formId}-phone`;
  const orgId = `${formId}-organisation`;
  const enquiryId = `${formId}-enquiry-type`;
  const messageId = `${formId}-message`;
  const privacyId = `${formId}-privacy`;

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return isWelsh ? 'Mae angen enw' : 'Name is required';
        if (value.trim().length < 2) return isWelsh ? 'Rhaid i\'r enw fod yn 2 nod o leiaf' : 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return isWelsh ? 'Mae angen e-bost' : 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return isWelsh ? 'Rhowch e-bost dilys' : 'Please enter a valid email';
        break;
      case 'enquiry-type':
        if (!value) return isWelsh ? 'Dewiswch fath o ymholiad' : 'Please select an enquiry type';
        break;
      case 'message':
        if (!value.trim()) return isWelsh ? 'Mae angen neges' : 'Message is required';
        if (value.trim().length < 10) return isWelsh ? 'Rhaid i\'r neges fod yn 10 nod o leiaf' : 'Message must be at least 10 characters';
        break;
    }
    return undefined;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Validate all fields
    const newErrors: FormErrors = {};
    const fieldsToValidate = ['name', 'email', 'enquiry-type', 'message'];
    let hasErrors = false;

    fieldsToValidate.forEach(field => {
      const value = formData.get(field) as string;
      const error = validateField(field, value);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    // Check privacy checkbox
    const privacyChecked = formData.get('privacy');
    if (!privacyChecked) {
      newErrors.privacy = isWelsh ? 'Rhaid cytuno i\'r polisi preifatrwydd' : 'You must agree to the privacy policy';
      hasErrors = true;
    }

    setErrors(newErrors);
    setTouched({ name: true, email: true, 'enquiry-type': true, message: true, privacy: true });

    if (hasErrors) {
      // Focus first error field for accessibility
      const firstErrorField = document.querySelector('[aria-invalid="true"]') as HTMLElement;
      firstErrorField?.focus();
      
      // Announce errors to screen readers
      const errorCount = Object.keys(newErrors).length;
      const announcement = document.getElementById('form-status');
      if (announcement) {
        announcement.textContent = isWelsh 
          ? `Mae ${errorCount} gwall yn y ffurflen. Cywirwch y camgymeriadau cyn cyflwyno.`
          : `There are ${errorCount} errors in the form. Please correct them before submitting.`;
      }
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 rounded-xl border bg-white text-[#123F56] 
    placeholder-[#6B7280] transition-all min-h-[48px]
    ${errors[fieldName as keyof FormErrors] && touched[fieldName]
      ? 'border-[#E11D2E] focus:ring-[#E11D2E] focus:border-[#E11D2E]'
      : 'border-[#E2E8F0] focus:ring-[#123F56] focus:border-[#123F56]'
    }
    focus:outline-none focus:ring-2 focus:ring-offset-0
  `;

  if (isSubmitted) {
    return (
      <div 
        className="bg-[#123F56]/10 border border-[#123F56]/20 rounded-2xl p-8 text-center"
        role="alert"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-[#123F56] mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-display font-bold text-[#123F56] mb-2">
          {isWelsh ? 'Diolch!' : 'Thank You!'}
        </h3>
        <p className="text-[#64748B]">{t('success')}</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-5"
      noValidate
      aria-describedby="form-instructions"
    >
      {/* Form instructions for screen readers */}
      <p id="form-instructions" className="sr-only">
        {isWelsh 
          ? 'Mae meysydd wedi\'u marcio ag seren yn orfodol.'
          : 'Fields marked with an asterisk are required.'
        }
      </p>
      
      {/* Live region for form status announcements */}
      <div id="form-status" className="sr-only" aria-live="assertive" aria-atomic="true"></div>

      {/* Name */}
      <div>
        <label 
          htmlFor={nameId} 
          className="block text-sm font-semibold text-[#123F56] mb-2"
        >
          {t('name')} <span className="text-[#E11D2E]" aria-hidden="true">*</span>
          <span className="sr-only">({isWelsh ? 'gofynnol' : 'required'})</span>
        </label>
        <input
          type="text"
          id={nameId}
          name="name"
          required
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!(errors.name && touched.name)}
          aria-describedby={errors.name && touched.name ? `${nameId}-error` : undefined}
          className={inputClasses('name')}
          placeholder={isWelsh ? 'Eich enw llawn' : 'Your full name'}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <p id={`${nameId}-error`} className="error-message" role="alert">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label 
          htmlFor={emailId} 
          className="block text-sm font-semibold text-[#123F56] mb-2"
        >
          {t('email')} <span className="text-[#E11D2E]" aria-hidden="true">*</span>
          <span className="sr-only">({isWelsh ? 'gofynnol' : 'required'})</span>
        </label>
        <input
          type="email"
          id={emailId}
          name="email"
          required
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!(errors.email && touched.email)}
          aria-describedby={errors.email && touched.email ? `${emailId}-error` : undefined}
          className={inputClasses('email')}
          placeholder={isWelsh ? 'eich@ebost.com' : 'your@email.com'}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p id={`${emailId}-error`} className="error-message" role="alert">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label 
          htmlFor={phoneId} 
          className="block text-sm font-semibold text-[#123F56] mb-2"
        >
          {t('phone')} <span className="text-[#64748B] font-normal text-xs">({t('optional')})</span>
        </label>
        <input
          type="tel"
          id={phoneId}
          name="phone"
          autoComplete="tel"
          aria-required="false"
          className={inputClasses('phone')}
          placeholder={isWelsh ? '07xxx xxxxxx' : '07xxx xxxxxx'}
        />
      </div>

      {/* Organisation */}
      <div>
        <label 
          htmlFor={orgId} 
          className="block text-sm font-semibold text-[#123F56] mb-2"
        >
          {t('organisation')} <span className="text-[#64748B] font-normal text-xs">({t('optional')})</span>
        </label>
        <input
          type="text"
          id={orgId}
          name="organisation"
          autoComplete="organization"
          aria-required="false"
          className={inputClasses('organisation')}
          placeholder={isWelsh ? 'Enw eich sefydliad' : 'Your organisation name'}
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label 
          htmlFor={enquiryId} 
          className="block text-sm font-semibold text-[#123F56] mb-2"
        >
          {isWelsh ? 'Math o Ymholiad' : 'Enquiry Type'} <span className="text-[#E11D2E]" aria-hidden="true">*</span>
          <span className="sr-only">({isWelsh ? 'gofynnol' : 'required'})</span>
        </label>
        <select
          id={enquiryId}
          name="enquiry-type"
          required
          aria-required="true"
          aria-invalid={!!(errors['enquiry-type'] && touched['enquiry-type'])}
          aria-describedby={errors['enquiry-type'] && touched['enquiry-type'] ? `${enquiryId}-error` : undefined}
          className={`${inputClasses('enquiry-type')} appearance-none cursor-pointer`}
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23123F56'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'right 1rem center', 
            backgroundSize: '1.5rem' 
          }}
          onBlur={handleBlur}
        >
          <option value="">{isWelsh ? 'Dewiswch opsiwn' : 'Select an option'}</option>
          <option value="general">{isWelsh ? 'Ymholiad Cyffredinol' : 'General Enquiry'}</option>
          <option value="funding">{isWelsh ? 'Ymholiad Cyllid' : 'Funding Enquiry'}</option>
          <option value="partnership">{isWelsh ? 'Partneriaeth' : 'Partnership'}</option>
          <option value="media">{isWelsh ? 'Y Cyfryngau' : 'Media'}</option>
          <option value="other">{isWelsh ? 'Arall' : 'Other'}</option>
        </select>
        {errors['enquiry-type'] && touched['enquiry-type'] && (
          <p id={`${enquiryId}-error`} className="error-message" role="alert">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors['enquiry-type']}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label 
          htmlFor={messageId} 
          className="block text-sm font-semibold text-[#123F56] mb-2"
        >
          {t('message')} <span className="text-[#E11D2E]" aria-hidden="true">*</span>
          <span className="sr-only">({isWelsh ? 'gofynnol' : 'required'})</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={!!(errors.message && touched.message)}
          aria-describedby={errors.message && touched.message ? `${messageId}-error` : undefined}
          className={`${inputClasses('message')} resize-none`}
          placeholder={isWelsh ? 'Sut gallwn ni eich helpu?' : 'How can we help you?'}
          onBlur={handleBlur}
        />
        {errors.message && touched.message && (
          <p id={`${messageId}-error`} className="error-message" role="alert">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Notice */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id={privacyId}
          name="privacy"
          required
          aria-required="true"
          aria-invalid={!!(errors.privacy && touched.privacy)}
          aria-describedby={errors.privacy && touched.privacy ? `${privacyId}-error` : `${privacyId}-desc`}
          className="w-5 h-5 mt-0.5 rounded border-[#E2E8F0] text-[#E11D2E] focus:ring-[#123F56] focus:ring-2 focus:ring-offset-2 cursor-pointer min-w-[20px]"
        />
        <div>
          <label htmlFor={privacyId} className="text-sm text-[#475569]">
            {isWelsh 
              ? 'Rwy\'n cytuno i\'r polisi preifatrwydd a\'r telerau ac amodau.'
              : 'I agree to the privacy policy and terms and conditions.'
            } <span className="text-[#E11D2E]" aria-hidden="true">*</span>
            <span className="sr-only">({isWelsh ? 'gofynnol' : 'required'})</span>
          </label>
          <p id={`${privacyId}-desc`} className="sr-only">
            {isWelsh 
              ? 'Rhaid derbyn y polisi preifatrwydd i gyflwyno\'r ffurflen.'
              : 'You must accept the privacy policy to submit this form.'
            }
          </p>
          {errors.privacy && touched.privacy && (
            <p id={`${privacyId}-error`} className="error-message" role="alert">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.privacy}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="w-full py-4 px-8 rounded-xl bg-[#E11D2E] text-white font-semibold hover:bg-[#C41929] focus:outline-none focus:ring-2 focus:ring-[#123F56] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
      >
        {isSubmitting ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{t('sending')}</span>
            <span className="sr-only">{isWelsh ? 'Mae\'r ffurflen yn cael ei chyflwyno' : 'Form is being submitted'}</span>
          </>
        ) : (
          <>
            {t('submit')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
