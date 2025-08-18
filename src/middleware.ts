import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["ru", "uz", "en"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname.startsWith("/api") || pathname.includes(".") || pathname.startsWith("/_next")) return
  const miss = locales.every(l => !pathname.startsWith(`/${l}/`) && pathname !== `/${l}`)
  if (miss) return NextResponse.redirect(new URL(`/ru${pathname}`, request.url))
}
export const config = { matcher: ["/((?!_next|.*\\..*).*)"] }
