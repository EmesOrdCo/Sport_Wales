/**
 * SSRF protection wrapper for fetch requests
 */

import { isSafeUrl, validateUrl } from './url-validation';
import { logSSRFAttempt } from './logging';

/**
 * Safe fetch wrapper that prevents SSRF attacks
 */
export async function safeFetch(
  url: string,
  options?: RequestInit
): Promise<Response> {
  // Validate URL before making request
  try {
    validateUrl(url);
  } catch (error) {
    // Log SSRF attempt
    logSSRFAttempt(url);
    throw new Error(`SSRF protection: ${error instanceof Error ? error.message : 'Unsafe URL'}`);
  }

  // Make the request
  return fetch(url, options);
}

/**
 * Safe fetch with hostname whitelist
 */
export async function safeFetchWhitelist(
  url: string,
  whitelist: string[],
  options?: RequestInit
): Promise<Response> {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    // Check if hostname is in whitelist
    const isAllowed = whitelist.some((allowed) => {
      if (hostname === allowed) return true;
      if (allowed.startsWith('*.')) {
        const domain = allowed.slice(2);
        return hostname === domain || hostname.endsWith('.' + domain);
      }
      return false;
    });

    if (!isAllowed) {
      logSSRFAttempt(url);
      throw new Error(`SSRF protection: Hostname ${hostname} is not in whitelist`);
    }

    // Also validate URL for private IPs
    validateUrl(url);

    return fetch(url, options);
  } catch (error) {
    if (error instanceof Error && error.message.includes('SSRF protection')) {
      throw error;
    }
    logSSRFAttempt(url);
    throw new Error(`SSRF protection: Invalid URL or hostname not whitelisted`);
  }
}

