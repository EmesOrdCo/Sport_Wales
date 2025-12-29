# Security Implementation Guide

This document outlines the security features implemented to protect against OWASP Top 10 vulnerabilities.

## Implemented Security Features

### 1. Content Security Policy (CSP)
- **Location**: `next.config.ts`
- **Status**: ✅ Implemented
- **Details**: CSP header added to prevent XSS and injection attacks

### 2. URL Validation & SSRF Protection
- **Location**: `src/lib/security/url-validation.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Blocks private/internal IP addresses
  - Validates URLs before making requests
  - Prevents SSRF attacks
- **Usage**: Automatically applied to all Strapi API calls

### 3. Rate Limiting
- **Location**: `src/lib/security/rate-limit.ts`, `src/lib/security/middleware.ts`
- **Status**: ✅ Implemented
- **Features**:
  - In-memory rate limiting for API routes
  - Configurable limits (AUTH, API, GENERAL)
  - Strapi admin login rate limiting (5 attempts per 15 minutes)
- **Usage**: Apply `rateLimitMiddleware()` to API routes

### 4. Security Event Logging
- **Location**: `src/lib/security/logging.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Logs authentication attempts (success/failure)
  - Logs unauthorized access attempts
  - Logs rate limit violations
  - Logs SSRF attempts
- **Usage**: Import and use logging functions in your code

### 5. API Route Authorization
- **Location**: `src/lib/security/middleware.ts`
- **Status**: ✅ Implemented
- **Features**:
  - `requireAuth()` middleware for API routes
  - IP whitelisting support
  - Token-based authentication
- **Usage**: Apply `requireAuth()` to protected API routes

### 6. Strapi Authentication Logging
- **Location**: `strapi-cms/src/middlewares/auth-logging.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Logs all admin authentication attempts
  - Tracks successful and failed logins
  - Records IP addresses and user agents

### 7. Strapi Rate Limiting
- **Location**: `strapi-cms/config/middlewares.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Rate limiting for admin authentication endpoints
  - 5 requests per 15 minutes
  - Configurable intervals

## Configuration Required

### Strapi RBAC (Role-Based Access Control)
**Status**: ⚠️ Manual Configuration Required

RBAC must be configured in the Strapi admin panel:

1. **Access Strapi Admin Panel**
   - Navigate to `http://localhost:1337/admin` (or your Strapi URL)
   - Log in as super admin

2. **Configure Permissions**
   - Go to **Settings** → **Users & Permissions Plugin** → **Roles**
   - For each role (Authenticated, Public, etc.):
     - Set permissions for each content type (Article, Funding Opportunity, Page)
     - Configure create, read, update, delete permissions
     - Set admin panel access permissions

3. **Recommended Permissions**
   - **Public Role**: Read-only access to published content
   - **Authenticated Role**: Read access to all content
   - **Editor Role**: Create, read, update access (no delete)
   - **Admin Role**: Full access to all content types

4. **API Token Permissions**
   - Go to **Settings** → **API Tokens**
   - For each API token:
     - Set read-only permissions for public content
     - Restrict to specific content types as needed

### Environment Variables

Add these to your `.env.local`:

```env
# API Authentication Token (for protected API routes)
API_AUTH_TOKEN=your-secure-token-here

# IP Whitelist (comma-separated, optional)
# ADMIN_IP_WHITELIST=192.168.1.1,10.0.0.1
```

## Usage Examples

### Using Rate Limiting in API Routes

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { rateLimitMiddleware, RATE_LIMITS } from '@/lib/security/middleware';

export async function POST(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = rateLimitMiddleware(request, RATE_LIMITS.AUTH);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  // Your API logic here
  return NextResponse.json({ message: 'Success' });
}
```

### Using Authentication Middleware

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/security/middleware';

export async function POST(request: NextRequest) {
  // Require authentication
  const authResponse = requireAuth(request);
  if (authResponse) {
    return authResponse;
  }

  // Your protected API logic here
  return NextResponse.json({ message: 'Success' });
}
```

### Using IP Whitelisting

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { ipWhitelistMiddleware } from '@/lib/security/middleware';

const ALLOWED_IPS = process.env.ADMIN_IP_WHITELIST?.split(',') || [];

export async function POST(request: NextRequest) {
  // Apply IP whitelisting
  const ipResponse = ipWhitelistMiddleware(request, ALLOWED_IPS);
  if (ipResponse) {
    return ipResponse;
  }

  // Your API logic here
  return NextResponse.json({ message: 'Success' });
}
```

### Using SSRF Protection

```typescript
import { safeFetch, safeFetchWhitelist } from '@/lib/security/ssrf-protection';

// Basic SSRF protection
const response = await safeFetch('https://example.com/api');

// SSRF protection with hostname whitelist
const whitelist = ['api.example.com', '*.trusted-domain.com'];
const response = await safeFetchWhitelist('https://api.example.com/data', whitelist);
```

### Logging Security Events

```typescript
import { logAuthAttempt, logUnauthorizedAccess } from '@/lib/security/logging';

// Log authentication attempt
logAuthAttempt(true, ip, userAgent, userId, path);

// Log unauthorized access
logUnauthorizedAccess(ip, userAgent, path, 'Missing token');
```

## Testing Security Features

### Test Rate Limiting
1. Make multiple rapid requests to a rate-limited endpoint
2. Should receive 429 status after limit exceeded

### Test SSRF Protection
1. Try to fetch from `http://127.0.0.1` or `http://192.168.1.1`
2. Should throw error: "SSRF protection: URL contains private or internal IP address"

### Test Authentication
1. Make request without `Authorization` header
2. Should receive 401 Unauthorized

## Production Considerations

1. **Rate Limiting Store**: Replace in-memory store with Redis for production
2. **Logging Service**: Integrate with external logging service (Sentry, LogRocket, etc.)
3. **Monitoring**: Set up alerts for security events
4. **IP Whitelisting**: Configure at hosting platform level for better performance
5. **CSP Header**: Review and adjust CSP policy based on your needs

## Security Checklist

- [x] Content Security Policy header
- [x] SSRF protection
- [x] Rate limiting (Next.js and Strapi)
- [x] Security event logging
- [x] API route authorization
- [x] Authentication attempt logging
- [ ] Strapi RBAC configuration (manual)
- [ ] External logging service integration
- [ ] Redis for rate limiting (production)
- [ ] Security monitoring and alerts

