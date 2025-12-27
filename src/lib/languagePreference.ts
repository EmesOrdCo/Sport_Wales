/**
 * Language Preference Management
 * 
 * This uses localStorage to remember the user's language preference.
 * This is considered a "Functionality Cookie" per our cookie policy.
 */

const LANGUAGE_KEY = 'preferred-language';

export function getLanguagePreference(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(LANGUAGE_KEY);
}

export function setLanguagePreference(locale: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LANGUAGE_KEY, locale);
}

export function clearLanguagePreference(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(LANGUAGE_KEY);
}

/**
 * Check if user has a stored language preference and redirect if needed
 * This should be called on the client side
 */
export function checkLanguagePreference(currentLocale: string): string | null {
  const preferred = getLanguagePreference();
  
  // If user has a preference different from current, return it
  if (preferred && preferred !== currentLocale) {
    return preferred;
  }
  
  return null;
}

