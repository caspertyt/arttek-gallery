import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const defaultLocale = 'ru' // язык по умолчанию
const locales = ['ru', 'en', 'es'] // поддерживаемые языки

export function middleware(request: NextRequest) {
  // Получаем текущий путь
  const pathname = request.nextUrl.pathname

  // Пропускаем статические файлы и API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Если путь уже содержит языковой код, пропускаем
  if (locales.some(locale => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next()
  }

  // Редирект с корневого пути или путей без языка на версию с языком по умолчанию
  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Исключаем файлы
    '/((?!api|_next/static|_next/image|favicon.ico|images|files).*)',
  ],
} 