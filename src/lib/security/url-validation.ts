/**
 * URL validation utilities to prevent SSRF attacks
 */

/**
 * Check if a URL is safe (not pointing to private/internal IP addresses)
 */
export function isSafeUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    // Block localhost and local IPs
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '0.0.0.0' ||
      hostname === '::1' ||
      hostname.startsWith('127.')
    ) {
      return false;
    }

    // Block private IP ranges (RFC 1918)
    const privateIpRanges = [
      /^10\./, // 10.0.0.0/8
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./, // 172.16.0.0/12
      /^192\.168\./, // 192.168.0.0/16
    ];

    for (const range of privateIpRanges) {
      if (range.test(hostname)) {
        return false;
      }
    }

    // Block link-local addresses (169.254.0.0/16)
    if (/^169\.254\./.test(hostname)) {
      return false;
    }

    // Block multicast addresses (224.0.0.0/4)
    if (/^22[4-9]\./.test(hostname) || /^23[0-9]\./.test(hostname)) {
      return false;
    }

    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return false;
    }

    return true;
  } catch (error) {
    // Invalid URL
    return false;
  }
}

/**
 * Validate and sanitize a URL for safe use
 * @throws Error if URL is unsafe
 */
export function validateUrl(url: string): string {
  if (!isSafeUrl(url)) {
    throw new Error('URL is not safe: contains private or internal IP address');
  }
  return url;
}

/**
 * Check if hostname is in whitelist
 */
export function isWhitelistedHostname(
  hostname: string,
  whitelist: string[]
): boolean {
  return whitelist.some((allowed) => {
    // Exact match
    if (hostname === allowed) return true;
    // Wildcard match (e.g., *.example.com)
    if (allowed.startsWith('*.')) {
      const domain = allowed.slice(2);
      return hostname === domain || hostname.endsWith('.' + domain);
    }
    return false;
  });
}

