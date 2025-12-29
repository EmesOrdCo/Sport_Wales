/**
 * Rate limiting utilities
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// In-memory store (in production, use Redis or similar)
const store: RateLimitStore = {};

/**
 * Rate limit configuration
 */
export interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
}

/**
 * Default rate limit configurations
 */
export const RATE_LIMITS = {
  // Strict rate limit for authentication endpoints
  AUTH: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // 5 attempts per 15 minutes
  },
  // Standard rate limit for API endpoints
  API: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 60, // 60 requests per minute
  },
  // Lenient rate limit for general endpoints
  GENERAL: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 100, // 100 requests per minute
  },
} as const;

/**
 * Check if request should be rate limited
 * @returns true if rate limit exceeded, false otherwise
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): boolean {
  const now = Date.now();
  const key = `${identifier}:${config.windowMs}`;
  const record = store[key];

  // Clean up expired entries
  if (record && record.resetTime < now) {
    delete store[key];
  }

  // No record or expired - allow request
  if (!record || record.resetTime < now) {
    store[key] = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    return false;
  }

  // Increment count
  record.count++;

  // Check if limit exceeded
  if (record.count > config.maxRequests) {
    return true;
  }

  return false;
}

/**
 * Get remaining requests for an identifier
 */
export function getRemainingRequests(
  identifier: string,
  config: RateLimitConfig
): number {
  const now = Date.now();
  const key = `${identifier}:${config.windowMs}`;
  const record = store[key];

  if (!record || record.resetTime < now) {
    return config.maxRequests;
  }

  return Math.max(0, config.maxRequests - record.count);
}

/**
 * Get reset time for an identifier
 */
export function getResetTime(
  identifier: string,
  config: RateLimitConfig
): number {
  const now = Date.now();
  const key = `${identifier}:${config.windowMs}`;
  const record = store[key];

  if (!record || record.resetTime < now) {
    return now + config.windowMs;
  }

  return record.resetTime;
}

/**
 * Clear rate limit for an identifier (useful for testing or manual reset)
 */
export function clearRateLimit(identifier: string, config: RateLimitConfig): void {
  const key = `${identifier}:${config.windowMs}`;
  delete store[key];
}

