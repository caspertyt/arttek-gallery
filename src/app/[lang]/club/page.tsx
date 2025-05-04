import { getDictionary } from '@/i18n/dictionary';
import Image from 'next/image';
import Link from 'next/link';

export default async function Club({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="relative mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
            ARTTEK Club
            <span className="block mx-auto mt-3 w-24 h-1 bg-red-500 rounded-full"></span>
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Станьте частью эксклюзивного сообщества ценителей современного искусства
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/60 rounded-xl p-8 border border-white/10 hover:border-red-500 transition">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Приоритетный доступ</h3>
              <p className="text-gray-300">Ранний доступ к выставкам и мероприятиям, включая закрытые вернисажи</p>
            </div>

            <div className="bg-black/60 rounded-xl p-8 border border-white/10 hover:border-red-500 transition">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Специальные цены</h3>
              <p className="text-gray-300">Скидки на аренду пространства, участие в мастер-классах и покупку произведений искусства</p>
            </div>

            <div className="bg-black/60 rounded-xl p-8 border border-white/10 hover:border-red-500 transition">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Эксклюзивные события</h3>
              <p className="text-gray-300">Доступ к закрытым встречам с художниками, кураторами и коллекционерами</p>
            </div>
          </div>
        </section>

        {/* Membership Form */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-black/60 rounded-xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 text-center">Присоединиться к клубу</h2>
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

        {/* Additional Info */}
        <section className="mt-20 text-center">
          <p className="text-gray-300 mb-4">
            Есть вопросы? Свяжитесь с нами:
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:club@arttek.com" className="text-red-500 hover:text-red-400 transition">
              club@arttek.com
            </a>
            <span className="text-gray-500">|</span>
            <a href="tel:+34640977144" className="text-red-500 hover:text-red-400 transition">
              +34 640 977 144
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 