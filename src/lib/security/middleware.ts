/**
 * Security middleware utilities for Next.js API routes
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, RATE_LIMITS } from './rate-limit';
import { logRateLimitExceeded, logUnauthorizedAccess } from './logging';
import { isSafeUrl } from './url-validation';

/**
 * Get client IP address from request
 */
export function getClientIp(request: NextRequest): string {
  // Check various headers for IP (in case of proxies/load balancers)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback - no IP found in headers
  return 'unknown';
}

/**
 * Rate limiting middleware
 */
export function rateLimitMiddleware(
  request: NextRequest,
  config = RATE_LIMITS.API
): NextResponse | null {
  const ip = getClientIp(request);
  const path = request.nextUrl.pathname;

  if (checkRateLimit(ip, config)) {
    logRateLimitExceeded(ip, request.headers.get('user-agent') || undefined, path);
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  return null;
}

/**
 * IP whitelist middleware
 */
export function ipWhitelistMiddleware(
  request: NextRequest,
  allowedIps: string[]
): NextResponse | null {
  const ip = getClientIp(request);
  const path = request.nextUrl.pathname;

  // Support CIDR notation (basic implementation)
  const isAllowed = allowedIps.some((allowedIp) => {
    if (allowedIp === ip) return true;
    // Basic CIDR support (e.g., 192.168.1.0/24)
    if (allowedIp.includes('/')) {
      // For production, use a proper CIDR library
      const [network, prefix] = allowedIp.split('/');
      // Simplified check - in production use ipaddr.js or similar
      return ip.startsWith(network.split('.').slice(0, parseInt(prefix) / 8).join('.'));
    }
    return false;
  });

  if (!isAllowed) {
    logUnauthorizedAccess(ip, request.headers.get('user-agent') || undefined, path, 'IP not whitelisted');
    return NextResponse.json(
      { error: 'Access denied' },
      { status: 403 }
    );
  }

  return null;
}

/**
 * SSRF protection middleware for outbound requests
 */
export function ssrfProtectionMiddleware(url: string): void {
  if (!isSafeUrl(url)) {
    throw new Error('SSRF protection: URL contains private or internal IP address');
  }
}

/**
 * Authorization middleware (basic implementation)
 * Extend this based on your authentication system
 */
export function requireAuth(
  request: NextRequest,
  token?: string
): NextResponse | null {
  const authHeader = request.headers.get('authorization');
  const providedToken = authHeader?.replace('Bearer ', '') || token;

  // In production, validate against your auth system
  if (!providedToken) {
    const ip = getClientIp(request);
    const path = request.nextUrl.pathname;
    logUnauthorizedAccess(
      ip,
      request.headers.get('user-agent') || undefined,
      path,
      'Missing authentication token'
    );
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // TODO: Validate token against your auth system
  // For now, just check if token exists
  const validToken = process.env.API_AUTH_TOKEN;
  if (validToken && providedToken !== validToken) {
    const ip = getClientIp(request);
    const path = request.nextUrl.pathname;
    logUnauthorizedAccess(
      ip,
      request.headers.get('user-agent') || undefined,
      path,
      'Invalid authentication token'
    );
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return null;
}

