import { getDictionary } from '@/i18n/dictionary';
import Image from 'next/image';

export default async function Contact({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container-custom px-4 md:px-6">
        <div className="relative mb-12 md:mb-20">
          <h1 className="section-title text-4xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
            {dict.contact}
          </h1>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <div className="relative mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Свяжитесь с нами</h2>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Email</h3>
                <a href="mailto:info@arttek.ru" className="text-gray-300 hover:text-red-500 transition-colors">
                  info@arttek.ru
                </a>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">WhatsApp</h3>
                <a href="https://wa.me/34640977144" className="text-gray-300 hover:text-red-500 transition-colors">
                  +34 640 977 144
                </a>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Instagram</h3>
                <a href="https://instagram.com/arttek" className="text-gray-300 hover:text-red-500 transition-colors">
                  @arttek
                </a>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Адрес</h3>
                <p className="text-gray-300">
                  Calle Balmes 151, 08008 Barcelona
                </p>
              </div>
            </div>

            {/* Anna's Contact Block */}
            <div className="mt-8 md:mt-12 p-4 md:p-6 border border-white/20 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 md:w-16 h-12 md:h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/anna.jpg"
                    alt="Анна"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold">Анна</h3>
                  <p className="text-sm md:text-base text-gray-300">Директор галереи</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                Для личного общения и обсуждения проектов
              </p>
              <a
                href="https://wa.me/34640977144"
                className="btn-secondary inline-block text-sm md:text-base"
              >
                Написать Анне
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="relative mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Форма обратной связи</h2>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
            </div>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm md:text-base">Имя</label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-3 md:px-4 py-2 text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm md:text-base">Email</label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-3 md:px-4 py-2 text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm md:text-base">Тема</label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-3 md:px-4 py-2 text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm md:text-base">Сообщение</label>
                <textarea
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-3 md:px-4 py-2 h-24 md:h-32 text-sm md:text-base"
                />
              </div>
              <button type="submit" className="btn-primary w-full text-sm md:text-base">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        {/* ARTTEK Club Section */}
        <section className="mt-12 md:mt-20">
          <div className="relative mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6 text-white">ARTTEK Club</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            <p className="text-lg md:text-xl text-center text-gray-300 mt-4 md:mt-6 px-4">
              Станьте частью эксклюзивного сообщества ценителей<br className="hidden md:block" />современного искусства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16 px-4">
            <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-900/50 flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V12L16 14M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Приоритетный доступ</h3>
              <p className="text-base md:text-lg text-gray-300">Ранний доступ к выставкам и мероприятиям, включая закрытые вернисажи</p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-900/50 flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Специальные цены</h3>
              <p className="text-base md:text-lg text-gray-300">Скидки на аренду пространства, участие в мастер-классах и покупку произведений искусства</p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-900/50 flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Эксклюзивные события</h3>
              <p className="text-base md:text-lg text-gray-300">Доступ к закрытым встречам с художниками, кураторами и коллекционерами</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-black/60 rounded-xl p-6 md:p-8 border border-white/10">
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Имя и фамилия</label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:border-red-500 focus:outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:border-red-500 focus:outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Телефон</label>
                <input
                  type="tel"
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:border-red-500 focus:outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Интересы в искусстве</label>
                <textarea
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 h-32 focus:border-red-500 focus:outline-none transition"
                  placeholder="Расскажите о ваших интересах в современном искусстве..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Отправить заявку
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
} 