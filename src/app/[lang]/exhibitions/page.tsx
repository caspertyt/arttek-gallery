import { getDictionary } from '@/i18n/dictionary';
import ExhibitionCard from '@/components/ExhibitionCard';
import Image from 'next/image';
import Link from 'next/link';
import Calendar from '@/components/Calendar';

export default async function Exhibitions({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  // This would be replaced with actual data from your CMS or API
  const exhibitions = [
    {
      title: 'Современное искусство',
      description: 'Выставка современных художников',
      imageUrl: '/images/exhibition1.jpg',
      date: '1 мая - 30 июня 2024',
      slug: 'contemporary-art',
    },
    // Новая выставка, которая будет скоро
    {
      title: 'Весенний вернисаж',
      description: 'Открытие новой выставки современных художников. Не пропустите! Уникальные работы и живое общение с авторами.',
      imageUrl: '/images/exhibition2.jpg',
      date: '10 апреля - 25 апреля 2025',
      slug: 'spring-vernisage',
      soon: true,
    },
    // Add more exhibitions here
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        {/* Main Title with Decorative Elements */}
        <div className="relative mb-20">
          <h1 className="section-title text-5xl md:text-6xl font-bold text-center mb-4">
            {dict.exhibitions}
          </h1>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500"></div>
        </div>
        
        {/* Current Exhibition: Искусство без границ */}
        <section className="bg-black rounded-xl shadow-lg p-8 mb-20 flex flex-col md:flex-row items-center gap-8">
          {/* Exhibition Poster */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/arte-sin-fronteras.jpg"
              alt="Arte sin fronteras"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          {/* Exhibition Description */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">
              Искусство без границ
            </h2>
            <p className="text-lg text-gray-300 mb-2">
              <span className="font-semibold">Где:</span> Галерея ARTTEK, Барселона<br />
              <span className="font-semibold">Когда:</span> 29 мая – 5 июня 2025<br />
              <span className="font-semibold">Вход:</span> Свободный
            </p>
            <p className="text-gray-300 mb-4">
              Галерея ARTTEK приглашает вас на коллективную выставку «Искусство без границ» — праздник творчества, эмоций и свободы самовыражения. Вас ждут произведения живописи, арт-объекты и инсталляции от современных художников разных направлений.
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Инаугурация:</span> 29 мая в 19:00<br />
              <span className="font-semibold">Адрес:</span> Calle Balmes 151, 08008 Барселона
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Специальный гость:</span> один из победителей конкурса RestArt (итоги — 6 мая).
            </p>
            <div className="mb-4">
              <span className="font-semibold text-white">Приглашение для художников:</span>
              <p className="text-gray-300">
                Галерея ARTTEK открывает набор участников на выставку. Принимаются: картины, арт-объекты, инсталляции любых форм и размеров.
              </p>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Link
                href="https://forms.gle/your-form-link"
                target="_blank"
                className="inline-block px-6 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition"
              >
                Заполнить анкету
              </Link>
              <span className="text-gray-300">Email: <a href="mailto:arttekbcn@gmail.com" className="hover:text-red-400">arttekbcn@gmail.com</a></span>
              <span className="text-gray-300">Телефон: <a href="tel:+34640977144" className="hover:text-red-400">+34 640 977 144</a></span>
            </div>
          </div>
        </section>

        {/* Current Exhibitions Section */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4">
              Актуальные выставки и мероприятия
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 bg-red-500"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exhibition 1 */}
            <div className="bg-black rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1579546929518-9e396a3c25a3?q=80&w=1000&auto=format&fit=crop"
                  alt="Современный абстракционизм"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Современный абстракционизм</h3>
                <p className="text-gray-300 mb-4">Исследование форм и цветов в современном искусстве</p>
                <p className="text-red-500 font-semibold">15 марта - 15 апреля 2024</p>
              </div>
            </div>

            {/* Exhibition 2 */}
            <div className="bg-black rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop"
                  alt="Урбан-арт: Городские истории"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Урбан-арт: Городские истории</h3>
                <p className="text-gray-300 mb-4">Современное уличное искусство в галерейном пространстве</p>
                <p className="text-red-500 font-semibold">20 марта - 10 апреля 2024</p>
              </div>
            </div>

            {/* Exhibition 3 */}
            <div className="bg-black rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
                  alt="Цифровые горизонты"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Цифровые горизонты</h3>
                <p className="text-gray-300 mb-4">Новые технологии в современном искусстве</p>
                <p className="text-red-500 font-semibold">25 марта - 15 апреля 2024</p>
              </div>
            </div>

            {/* Exhibition 4 */}
            <div className="bg-black rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Лица эпохи"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Лица эпохи</h3>
                <p className="text-gray-300 mb-4">Современный портрет в различных техниках</p>
                <p className="text-red-500 font-semibold">1 апреля - 20 апреля 2024</p>
              </div>
            </div>

            {/* Exhibition 5 */}
            <div className="bg-black rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581368135153-a506cf13531c?q=80&w=1000&auto=format&fit=crop"
                  alt="Пространство формы"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Пространство формы</h3>
                <p className="text-gray-300 mb-4">Современная скульптура и инсталляции</p>
                <p className="text-red-500 font-semibold">5 апреля - 25 апреля 2024</p>
              </div>
            </div>

            {/* Exhibition 6 */}
            <div className="bg-black rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop"
                  alt="Экспериментальные грани"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Экспериментальные грани</h3>
                <p className="text-gray-300 mb-4">Смешанные техники и нестандартные подходы</p>
                <p className="text-red-500 font-semibold">10 апреля - 30 апреля 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Exhibitions Section */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4">
              Будущие выставки
              <span className="block text-lg text-red-500 mt-2">(Запишитесь заранее)</span>
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 bg-red-500"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Искусство без границ */}
            <div className="bg-black rounded-xl shadow-lg p-6 flex flex-col items-center">
              <Image
                src="/images/arte-sin-fronteras.jpg"
                alt="Искусство без границ"
                width={400}
                height={300}
                className="rounded-lg shadow-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-red-500 mb-2">Искусство без границ</h3>
              <p className="text-gray-300 mb-2 text-center">
                <span className="font-semibold">29 мая – 5 июня 2025</span><br />
                Calle Balmes 151, Barcelona
              </p>
              <p className="text-gray-400 text-center mb-2 italic">
                Коллективная выставка — праздник творчества, эмоций и свободы самовыражения. Живопись, арт-объекты и инсталляции современных художников.
              </p>
              <a
                href="https://forms.gle/your-form-link"
                target="_blank"
                className="inline-block px-6 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition mt-2"
              >
                Записаться
              </a>
            </div>
            {/* Add more upcoming exhibitions here */}
          </div>
        </section>

        {/* Past Exhibitions Section */}
        <section>
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4">
              Прошедшие выставки
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 bg-red-500"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amor Amor Exhibition Card */}
            <div className="bg-black rounded-xl shadow-lg p-6 flex flex-col items-center">
              <Image
                src="/images/amor-amor.jpg"
                alt="Amor Amor"
                width={400}
                height={300}
                className="rounded-lg shadow-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-red-500 mb-2">Amor Amor</h3>
              <p className="text-gray-300 mb-2 text-center">
                <span className="font-semibold">13.02.2025 — 20.02.2025</span><br />
                Calle Balmes 151, Barcelona
              </p>
              <p className="text-gray-400 text-center mb-2 italic">
                Страсть рисуется в каждой линии, любовь сияет в каждом цвете...
              </p>
              <p className="text-gray-300 text-center mb-2">
                <span className="font-semibold">Открытие:</span> 13 февраля 2025, 19:00<br />
                <span className="font-semibold">Вход:</span> свободный
              </p>
              <p className="text-gray-300 text-center mb-2">
                Выставка картин, вдохновлённых любовью и страстью.<br />
                Музыкальный сюрприз и бокал кавы для гостей.<br />
                Художники: GALIA CAREN, ANNA RESTRUDIS, GEMMA PAHISSA, IRYNA ZINGAROVA, OLGA GUROVA, ANNA KHORA
              </p>
            </div>
            {/* Add more past exhibitions here */}
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Календарь мероприятий
            </h2>
            <Calendar />
          </div>
        </section>

        {/* Artist Registration Section */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4">
              Форма участия для художников
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 bg-red-500"></div>
          </div>
          <div className="bg-black rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Имя и фамилия</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                    placeholder="Введите ваш email"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                    placeholder="Введите ваш телефон"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Специализация</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500">
                    <option value="">Выберите специализацию</option>
                    <option value="painting">Живопись</option>
                    <option value="sculpture">Скульптура</option>
                    <option value="digital">Цифровое искусство</option>
                    <option value="mixed">Смешанная техника</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">Портфолио (ссылка)</label>
                <input
                  type="url"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  placeholder="Ссылка на ваше портфолио"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Сообщение</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 h-32"
                  placeholder="Расскажите о себе и вашем творчестве"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </section>

        {/* Notification Signup Section */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4">
              Регистрация на уведомления
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 bg-red-500"></div>
          </div>
          <div className="bg-black rounded-xl shadow-lg p-8">
            <div className="max-w-md mx-auto text-center">
              <p className="text-gray-300 mb-6">
                Подпишитесь на уведомления о новых проектах и будущих выставках
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  placeholder="Введите ваш email"
                />
                <div className="flex items-center justify-center space-x-4">
                  <label className="flex items-center space-x-2 text-gray-300">
                    <input type="checkbox" className="form-checkbox text-red-500" />
                    <span>Новые проекты</span>
                  </label>
                  <label className="flex items-center space-x-2 text-gray-300">
                    <input type="checkbox" className="form-checkbox text-red-500" />
                    <span>Будущие выставки</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition"
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 