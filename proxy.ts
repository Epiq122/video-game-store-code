import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_ROUTES = ['/favorites']
const ADMIN_ROUTES = ['/admin']
const AUTH_ROUTES = ['/auth/sign-in', '/auth/sign-up']
const SESSION_COOKIE_NAMES = [
  'better-auth.session_token',
  '__Secure-better-auth.session_token',
]

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Better Auth uses a secure-prefixed cookie name in secure environments.
  const isLoggedIn = SESSION_COOKIE_NAMES.some((name) => request.cookies.has(name))
  const callbackURL = searchParams.get('callbackURL')

  // Redirect logged-in users away from auth pages
  if (isLoggedIn && AUTH_ROUTES.some((route) => pathname.startsWith(route))) {
    const redirectURL =
      callbackURL && callbackURL.startsWith('/')
        ? new URL(callbackURL, request.url)
        : new URL('/', request.url)
    return NextResponse.redirect(redirectURL)
  }

  // Redirect logged-out users away from protected routes
  if (!isLoggedIn && PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    const signInURL = new URL('/auth/sign-in', request.url)
    signInURL.searchParams.set('callbackURL', pathname)
    return NextResponse.redirect(signInURL)
  }

  // Redirect non-admins away from admin routes
  // (The Server Action also checks role — this is just the UX layer)
  if (ADMIN_ROUTES.some((route) => pathname.startsWith(route))) {
    if (!isLoggedIn) {
      const signInURL = new URL('/auth/sign-in', request.url)
      signInURL.searchParams.set('callbackURL', pathname)
      return NextResponse.redirect(signInURL)
    }
    // Note: we can't easily check role in middleware without a DB call
    // The admin page's Server Component will redirect non-admins via requireAdmin()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
