import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from './lib/session';

export async function middleware(request: NextRequest) {
  const { isAuth, role } = await verifySession();

  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isAdminRoute = pathname.startsWith('/dashboard');

  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isAuth && isAdminRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuth && isAdminRoute && role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
