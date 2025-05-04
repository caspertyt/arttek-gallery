import { getDictionary } from '@/i18n/dictionary';
import Image from 'next/image';
import JoinClubButton from '@/components/JoinClubButton';
import Link from 'next/link';
import GenerativeArtBackground from '@/components/GenerativeArtBackground';
import ArtisticAnimatedBackground from '@/components/ArtisticAnimatedBackground';
import BrushBackground from '@/components/BrushBackground';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  // Placeholder data for slider
  const sliderItems = [
    {
      title: 'Искусство без границ',
      description: 'Коллективная выставка в Барселоне',
      imageUrl: '/images/arte-sin-fronteras.jpg',
      date: '29 мая – 5 июня 2025',
      link: '/exhibitions',
    },
    {
      title: 'ARTTEK Night',
      description: 'Вечер современного искусства',
      imageUrl: '/images/exhibition1.jpg',
      date: '15 июня 2025',
      link: '/projects',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section (enlarged) */}
      <section className="relative h-[90vh] md:h-[95vh] flex items-center justify-center overflow-hidden bg-black">
        <BrushBackground />
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 60%, transparent 100%)'}} />
        <div className="container-custom relative z-20 text-center flex flex-col items-center px-4 md:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 tracking-tight drop-shadow-lg text-white relative">
            ARTTEK Gallery
            <span className="block mx-auto mt-2 md:mt-3 w-24 md:w-32 h-1 bg-red-500 rounded-full"></span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 max-w-2xl mx-auto text-gray-200 font-light drop-shadow px-4">
            Пространство современного искусства в Барселоне
          </p>
          {/* Hero buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-xl px-4">
            <Link 
              href={`/${lang}/club`}
              className="btn-primary w-full sm:w-1/2 text-base md:text-lg py-3"
            >
              {dict.joinClub}
            </Link>
            <Link 
              href={`/${lang}/exhibitions`} 
              className="btn-secondary w-full sm:w-1/2 text-base md:text-lg py-3"
            >
              Выставки
            </Link>
          </div>
        </div>
        {/* Декоративный переход к следующей секции */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-transparent via-black/70 to-black pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-radial from-red-500/20 to-transparent rounded-full blur-xl transform -translate-y-12 md:-translate-y-16"></div>
        </div>
      </section>

      {/* Slider Section with Title */}
      <section className="container-custom mb-12 md:mb-16 relative px-4 md:px-6 mt-16 md:mt-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white text-center drop-shadow-lg relative">
          Текущие выставки и события
          <span className="block mx-auto mt-2 md:mt-3 w-20 md:w-24 h-1 bg-red-500 rounded-full"></span>
        </h2>
        {/* Exhibition cards */}
        <div className="w-full overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 md:gap-8 pb-4">
            {sliderItems.map((item, idx) => (
              <Link key={idx} href={item.link} className="min-w-[280px] sm:min-w-[320px] max-w-xs bg-black/70 rounded-xl border border-white/10 shadow-lg hover:border-red-500 transition flex-shrink-0">
                <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors text-white relative">
                    {item.title}
                    <span className="block mt-2 w-12 h-1 bg-red-500 rounded-full"></span>
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                  <p className="text-sm md:text-base text-gray-300 mb-2">{item.description}</p>
                  <span className="btn-primary text-sm md:text-base py-2 px-4 inline-block">Подробнее</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-black/80 to-black/60">
        <div className="container-custom px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-white text-center drop-shadow-lg relative">
            Ключевые разделы
            <span className="block mx-auto mt-2 md:mt-3 w-20 md:w-24 h-1 bg-red-500 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <Link href={`/${lang}/exhibitions`} className="group block p-6 md:p-8 bg-black/60 rounded-xl border border-white/10 hover:border-red-500 transition shadow-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500 group-hover:scale-110 transition-transform mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
                  <path d="M3 9h18" stroke="currentColor" />
                </svg>
                <h3 className="text-lg md:text-xl font-bold group-hover:text-red-500 transition-colors">{dict.exhibitions}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-300">Актуальные и предстоящие выставки</p>
            </Link>
            <Link href={`/${lang}/projects`} className="group block p-6 md:p-8 bg-black/60 rounded-xl border border-white/10 hover:border-red-500 transition shadow-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500 group-hover:scale-110 transition-transform mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" /><path d="M8 4v16" stroke="currentColor" /><path d="M16 4v16" stroke="currentColor" /></svg>
                <h3 className="text-lg md:text-xl font-bold group-hover:text-red-500 transition-colors">{dict.projects}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-300">Специальные проекты и мероприятия</p>
            </Link>
            <Link href={`/${lang}/rent`} className="group block p-6 md:p-8 bg-black/60 rounded-xl border border-white/10 hover:border-red-500 transition shadow-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500 group-hover:scale-110 transition-transform mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" /><path d="M16 3v4" stroke="currentColor" /><path d="M8 3v4" stroke="currentColor" /></svg>
                <h3 className="text-lg md:text-xl font-bold group-hover:text-red-500 transition-colors">{dict.rent}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-300">Аренда пространства</p>
            </Link>
            <Link href={`/${lang}/artists`} className="group block p-6 md:p-8 bg-black/60 rounded-xl border border-white/10 hover:border-red-500 transition shadow-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500 group-hover:scale-110 transition-transform mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" stroke="currentColor" /><path d="M5.5 21a7.5 7.5 0 0 1 13 0" stroke="currentColor" /></svg>
                <h3 className="text-lg md:text-xl font-bold group-hover:text-red-500 transition-colors">{dict.artists}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-300">Художники ARTTEK</p>
            </Link>
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-12 md:py-16">
        <div className="container-custom px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-white text-center drop-shadow-lg relative">
            Новости и события
            <span className="block mx-auto mt-2 md:mt-3 w-20 md:w-24 h-1 bg-red-500 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Example News Card */}
            <div className="bg-black/70 rounded-xl p-4 md:p-6 border border-white/10 shadow-lg flex flex-col hover:border-red-500 transition">
              <div className="mb-4 h-32 md:h-40 bg-gradient-to-br from-red-500/40 to-black/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-white">29.05</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Открытие выставки «Искусство без границ»</h3>
              <p className="text-sm md:text-base text-gray-300 mb-4">Торжественная инаугурация в 19:00. Вход свободный.</p>
              <Link href={`/${lang}/exhibitions`} className="btn-primary text-sm md:text-base py-2 px-4 mt-auto">
                Подробнее
              </Link>
            </div>
            {/* Add more news cards here */}
          </div>
        </div>
      </section>

      {/* Promo Join Club Button */}
      <section className="py-12 md:py-16 flex flex-col items-center justify-center bg-gradient-to-b from-black via-red-500/40 to-black relative overflow-hidden animate-fadein px-4">
        <div className="absolute -z-10 left-1/2 top-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[200px] bg-red-500 opacity-30 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg relative text-center">
          Станьте частью ARTTEK Club
          <span className="block mx-auto mt-2 md:mt-3 w-16 md:w-20 h-1 bg-red-500 rounded-full"></span>
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-xl text-center px-4">Получайте эксклюзивные приглашения, скидки и новости первыми!</p>
        <Link href={`/${lang}/club`} className="btn-primary text-sm md:text-base py-3 px-6">
          Присоединиться к клубу
        </Link>
      </section>
    </div>
  );
} 