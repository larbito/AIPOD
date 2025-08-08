import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const getSecret = () => new TextEncoder().encode(process.env.JWT_SECRET || 'dev_secret_change_me')

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const protectedRoutes = ['/dashboard', '/studio']
  const isProtected = protectedRoutes.some((p) => pathname === p || pathname.startsWith(p + '/'))
  if (!isProtected) return NextResponse.next()

  const token = req.cookies.get('token')?.value
  if (!token) {
    const url = new URL('/login', req.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
  try {
    const { payload } = await jwtVerify(token, getSecret())
    // For studio routes we allow free users but they will get watermark client-side
    // So just continue.
    return NextResponse.next()
  } catch {
    const url = new URL('/login', req.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/dashboard', '/studio/:path*']
}
