import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifySession } from './lib/session';

export async function middleware(request: NextRequest) {
  const { isAuth } = await verifySession();
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isProtected = pathname.startsWith('/dashboard');

  if (isAuth && isAuthPage) {
    const dashboardUrl = new URL('/', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  if (!isAuth && isProtected) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
