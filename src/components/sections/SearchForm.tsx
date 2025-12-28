'use client';

import { useState, useId, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

interface SearchFormProps {
  initialQuery?: string;
  variant?: 'default' | 'hero';
  autoFocus?: boolean;
}

export function SearchForm({ initialQuery = '', variant = 'default', autoFocus = false }: SearchFormProps) {
  const t = useTranslations('search');
  const locale = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const searchId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const isWelsh = locale === 'cy';

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      setIsLoading(true);
      router.push(`/${locale}/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const isHero = variant === 'hero';

  return (
    <form 
      onSubmit={handleSubmit} 
      role="search" 
      className="w-full"
      aria-label={isWelsh ? 'Chwilio\'r wefan' : 'Search the website'}
    >
      <label htmlFor={searchId} className="sr-only">
        {t('placeholder')}
      </label>
      
      <div className={`relative flex items-center ${isHero ? 'max-w-3xl mx-auto' : ''}`}>
        {/* Search Icon */}
        <div className="absolute left-4 pointer-events-none" aria-hidden="true">
          <svg 
            className={`w-5 h-5 ${isHero ? 'text-[#64748B]' : 'text-[#94A3B8]'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="search"
          id={searchId}
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('placeholder')}
          className={`
            w-full pl-12 pr-28 py-4 text-base
            border rounded-full
            bg-white text-[#0F172A]
            placeholder-[#64748B]
            transition-all duration-200
            !outline-none focus:!outline-none focus-visible:!outline-none
            ${isHero 
              ? 'border-transparent shadow-lg' 
              : 'border-[#CBD5E1]'
            }
          `}
          style={{ outline: 'none', boxShadow: isHero ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' : undefined }}
          autoComplete="off"
          aria-describedby={`${searchId}-hint`}
        />

        {/* Clear Button (only shows when there's text) */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-24 p-1.5 text-[#94A3B8] hover:text-[#64748B] transition-colors"
            aria-label={isWelsh ? 'Clirio chwiliad' : 'Clear search'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className={`
            absolute right-1.5 
            px-5 py-2.5 rounded-full
            font-semibold text-sm
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#123F56]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${isLoading 
              ? 'bg-[#94A3B8] text-white' 
              : 'bg-[#E11D2E] text-white hover:bg-[#C41929]'
            }
          `}
          aria-label={isWelsh ? 'Chwilio' : 'Search'}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {isWelsh ? 'Chwilio...' : 'Searching...'}
            </span>
          ) : (
            isWelsh ? 'Chwilio' : 'Search'
          )}
        </button>
      </div>

      {/* Screen reader hint */}
      <p id={`${searchId}-hint`} className="sr-only">
        {isWelsh 
          ? 'Teipiwch eich chwiliad yn Gymraeg neu Saesneg a gwasgwch Enter neu cliciwch y botwm chwilio'
          : 'Type your search in Welsh or English and press Enter or click the search button'
        }
      </p>
    </form>
  );
}
