'use client';

import { useState, useId } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

interface SearchFormProps {
  initialQuery?: string;
}

export function SearchForm({ initialQuery = '' }: SearchFormProps) {
  const t = useTranslations('search');
  const locale = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const searchId = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      role="search" 
      className="relative"
      aria-label={locale === 'cy' ? 'Chwilio\'r wefan' : 'Search the website'}
    >
      <label htmlFor={searchId} className="sr-only">
        {t('placeholder')}
      </label>
      <input
        type="search"
        id={searchId}
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t('placeholder')}
        className="w-full pl-12 pr-32 py-4 text-lg border-2 border-[#CBD5E1] rounded-lg focus:border-[#123F56] focus:ring-2 focus:ring-[#123F56]/20 focus:outline-none min-h-[56px]"
        autoComplete="off"
        aria-describedby={`${searchId}-hint`}
      />
      <p id={`${searchId}-hint`} className="sr-only">
        {locale === 'cy' 
          ? 'Teipiwch eich chwiliad a gwasgwch Enter neu cliciwch y botwm chwilio'
          : 'Type your search and press Enter or click the search button'
        }
      </p>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" aria-hidden="true">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary py-2 px-4 min-h-[44px]"
        aria-label={locale === 'cy' ? 'Cyflwyno chwiliad' : 'Submit search'}
      >
        {t('submit')}
      </button>
    </form>
  );
}

