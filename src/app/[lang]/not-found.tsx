'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'ru';

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Страница не найдена</h2>
        <p className="mb-8">К сожалению, запрашиваемая страница не существует.</p>
        <Link 
          href={`/${lang}`}
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          На главную
        </Link>
      </div>
    </div>
  );
} 