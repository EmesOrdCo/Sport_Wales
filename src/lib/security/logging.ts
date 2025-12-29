/**
 * Security event logging utilities
 */

export type SecurityEventType =
  | 'auth_success'
  | 'auth_failure'
  | 'auth_blocked'
  | 'unauthorized_access'
  | 'rate_limit_exceeded'
  | 'ssrf_attempt'
  | 'invalid_input'
  | 'suspicious_activity';

export interface SecurityEvent {
  type: SecurityEventType;
  message: string;
  ip?: string;
  userAgent?: string;
  userId?: string;
  path?: string;
  metadata?: Record<string, unknown>;
  timestamp: Date;
}

/**
 * Log a security event
 */
export function logSecurityEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
  const fullEvent: SecurityEvent = {
    ...event,
    timestamp: new Date(),
  };

  // In production, this should send to a logging service
  // For now, log to console and could be extended to send to external service
  if (process.env.NODE_ENV === 'production') {
    // TODO: Send to external logging service (e.g., Sentry, LogRocket, etc.)
    console.error('[SECURITY EVENT]', JSON.stringify(fullEvent));
  } else {
    console.warn('[SECURITY EVENT]', JSON.stringify(fullEvent, null, 2));
  }
}

/**
 * Log authentication attempt
 */
export function logAuthAttempt(
  success: boolean,
  ip?: string,
  userAgent?: string,
  userId?: string,
  path?: string
): void {
  logSecurityEvent({
    type: success ? 'auth_success' : 'auth_failure',
    message: success
      ? `Successful authentication for user ${userId || 'unknown'}`
      : `Failed authentication attempt from ${ip || 'unknown IP'}`,
    ip,
    userAgent,
    userId,
    path,
  });
}

/**
 * Log unauthorized access attempt
 */
export function logUnauthorizedAccess(
  ip?: string,
  userAgent?: string,
  path?: string,
  reason?: string
): void {
  logSecurityEvent({
    type: 'unauthorized_access',
    message: `Unauthorized access attempt to ${path || 'unknown path'}: ${reason || 'no reason provided'}`,
    ip,
    userAgent,
    path,
    metadata: { reason },
  });
}

/**
 * Log rate limit exceeded
 */
export function logRateLimitExceeded(
  ip?: string,
  userAgent?: string,
  path?: string
): void {
  logSecurityEvent({
    type: 'rate_limit_exceeded',
    message: `Rate limit exceeded for ${path || 'unknown path'}`,
    ip,
    userAgent,
    path,
  });
}

/**
 * Log SSRF attempt
 */
export function logSSRFAttempt(
  url: string,
  ip?: string,
  userAgent?: string,
  path?: string
): void {
  logSecurityEvent({
    type: 'ssrf_attempt',
    message: `SSRF attempt detected: ${url}`,
    ip,
    userAgent,
    path,
    metadata: { blockedUrl: url },
  });
}

