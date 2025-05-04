'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const lang = params?.lang as string || 'ru';

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Ошибка</h1>
        <h2 className="text-2xl mb-4">Что-то пошло не так</h2>
        <p className="mb-8">Произошла ошибка при загрузке страницы.</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Попробовать снова
          </button>
          <Link 
            href={`/${lang}`}
            className="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
} 