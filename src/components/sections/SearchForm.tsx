'use client';

import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} role="search" className="relative">
      <label htmlFor="search-input" className="sr-only">
        {t('placeholder')}
      </label>
      <input
        type="search"
        id="search-input"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t('placeholder')}
        className="w-full pl-12 pr-4 py-4 text-lg border-2 border-sw-gray-300 rounded-lg focus:border-sw-teal focus:ring-2 focus:ring-sw-teal/20"
        autoComplete="off"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sw-gray-400" aria-hidden="true">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary py-2 px-4"
      >
        {t('submit')}
      </button>
    </form>
  );
}

