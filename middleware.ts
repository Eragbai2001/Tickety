import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Protect these path prefixes. Add more if you have other admin routes.
const PROTECTED_PREFIXES = ['/dashboard', '/tickets', '/ticket'];

// TTL used for the demo token (ms). Keep in sync with client TTL.
const TOKEN_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow next internals, api routes, and public static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/public') ||
    pathname === '/' ||
    pathname.startsWith('/sign-in') ||
    pathname.startsWith('/create-account') ||
    pathname.startsWith('/forgot-password') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Only enforce protection on configured prefixes
  if (!PROTECTED_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const token = req.cookies.get('authToken')?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  try {
    // decode base64 token into 'userId:issuedAt'
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const parts = decoded.split(':');
    if (parts.length < 2) throw new Error('invalid');
    const issued = Number(parts[1]);
    if (Number.isNaN(issued)) throw new Error('invalid');
    if (Date.now() - issued > TOKEN_TTL_MS) {
      const url = req.nextUrl.clone();
      url.pathname = '/sign-in';
      return NextResponse.redirect(url);
    }
  } catch (e) {
    const url = req.nextUrl.clone();
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/tickets/:path*', '/ticket/:path*'],
};
