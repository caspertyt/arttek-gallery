import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const defaultLocale = 'ru' // язык по умолчанию
const locales = ['ru', 'en', 'es'] // поддерживаемые языки

// Получаем локаль из URL
function getLocale(pathname: string) {
  if (!pathname) return null;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  return locales.includes(firstSegment) ? firstSegment : null;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Обработка корневого пути или undefined
  if (!pathname || pathname === '/' || pathname.includes('undefined')) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Пропускаем статические файлы и API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/files') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = getLocale(pathname);
  
  // Если путь уже содержит поддерживаемую локаль, пропускаем
  if (pathnameLocale) {
    return NextResponse.next();
  }

  // Удаляем 'undefined' из пути если он есть
  const cleanPathname = pathname.replace(/undefined/g, '').replace(/\/+/g, '/');

  // Редирект на версию с языком по умолчанию
  const newUrl = new URL(
    `/${defaultLocale}${cleanPathname}`,
    request.url
  );

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Исключаем файлы и API маршруты
    '/((?!api|_next/static|_next/image|favicon.ico|images|files).*)',
  ],
} 