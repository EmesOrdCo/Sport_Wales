/**
 * Example API route demonstrating security middleware usage
 * This can be used as a template for other API routes
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  rateLimitMiddleware,
  requireAuth,
  getClientIp,
} from '@/lib/security/middleware';
import { RATE_LIMITS } from '@/lib/security/rate-limit';
import { logAuthAttempt } from '@/lib/security/logging';

export async function GET(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = rateLimitMiddleware(request, RATE_LIMITS.API);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  // Apply authentication (if required)
  // const authResponse = requireAuth(request);
  // if (authResponse) {
  //   return authResponse;
  // }

  // Your API logic here
  return NextResponse.json({ message: 'Success' });
}

export async function POST(request: NextRequest) {
  // Apply stricter rate limiting for POST requests
  const rateLimitResponse = rateLimitMiddleware(request, RATE_LIMITS.API);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  // Apply authentication for POST requests
  const authResponse = requireAuth(request);
  if (authResponse) {
    const ip = getClientIp(request);
    logAuthAttempt(false, ip, request.headers.get('user-agent') || undefined);
    return authResponse;
  }

  // Log successful authentication
  const ip = getClientIp(request);
  logAuthAttempt(true, ip, request.headers.get('user-agent') || undefined);

  // Your API logic here
  const body = await request.json();
  return NextResponse.json({ message: 'Success', data: body });
}

