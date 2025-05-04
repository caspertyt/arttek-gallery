import Link from 'next/link';

interface FooterProps {
  dict: {
    home: string;
    exhibitions: string;
    gallery: string;
    artists: string;
    projects: string;
    rent: string;
    about: string;
    contact: string;
    joinClub: string;
    currentExhibitions: string;
    upcomingExhibitions: string;
    rights: string;
    [key: string]: string;
  };
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-black/90 py-12 border-t border-white/10">
      <div className="container-custom px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Логотип */}
          <div className="text-center md:text-left">
            <Link href={`/${lang}`} className="text-4xl md:text-5xl font-extrabold text-white tracking-widest hover:text-red-500 transition-colors inline-block">
              <span className="text-red-500">ART</span>TEK
            </Link>
          </div>

          {/* Навигация */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Навигация</h3>
            <nav className="flex flex-col space-y-3">
              <Link href={`/${lang}/exhibitions`} className="text-gray-300 hover:text-red-500 transition-colors text-base font-normal">
                Выставки
              </Link>
              <Link href={`/${lang}/artists`} className="text-gray-300 hover:text-red-500 transition-colors text-base font-normal">
                Художники
              </Link>
              <Link href={`/${lang}/projects`} className="text-gray-300 hover:text-red-500 transition-colors text-base font-normal">
                Проекты
              </Link>
              <Link href={`/${lang}/rent`} className="text-gray-300 hover:text-red-500 transition-colors text-base font-normal">
                Аренда
              </Link>
            </nav>
          </div>

          {/* Социальные сети */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Мы в соцсетях</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://instagram.com/arttek" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://facebook.com/arttek" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://t.me/arttek" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.98 1.26-5.59 3.7-.53.37-1.01.55-1.44.54-.47-.01-1.38-.27-2.05-.49-.84-.28-1.51-.43-1.45-.91.03-.27.38-.55 1.05-.84 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.6 4.75-1.88 5.27-1.88.11 0 .36.03.52.18.14.13.18.31.2.45-.01.06-.01.14-.02.21z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Контакты</h3>
            <ul className="flex flex-col space-y-4 md:space-y-6">
              <li>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" />
                  </svg>
                  <div className="text-gray-300 text-sm md:text-base flex flex-col">
                    <span>Пн–Сб: 10:00–19:00</span>
                    <span>Вс: <span className='text-red-500'>выходной</span></span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 21 16.91z" stroke="currentColor" />
                  </svg>
                  <a href="tel:+34640977144" className="text-gray-300 text-sm md:text-base hover:text-red-400">+34 640 97 71 44</a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243a8 8 0 1 1 11.314 0z" stroke="currentColor" />
                    <circle cx="12" cy="9" r="3" stroke="currentColor" />
                  </svg>
                  <span className="text-gray-300 text-sm md:text-base">Carrer de Balmes, 151, L'Eixample, 08008 Barcelona</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center">
        <p className="text-sm md:text-base text-gray-400">© 2024 ARTTEK Gallery. Все права защищены.</p>
      </div>
    </footer>
  );
} 