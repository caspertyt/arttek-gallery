import { getDictionary } from '@/i18n/dictionary';
import Image from 'next/image';

export default async function Projects({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  // Placeholder data for current and past events
  const currentEvents = [
    {
      title: 'Арт-пленэр в Барселоне',
      description: 'Творческая поездка и мастер-классы на открытом воздухе.',
      imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200',
      date: '10-15 июля 2024',
      location: 'Барселона, Испания',
      registrationUrl: '#',
    },
    {
      title: 'ARTTEK в Париже',
      description: 'Групповая выставка и экскурсии по галереям.',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200',
      date: '5-12 сентября 2024',
      location: 'Париж, Франция',
      registrationUrl: '#',
    },
  ];

  const pastEvents = [
    {
      title: 'Арт-фестиваль "Грани"',
      description: 'Международный фестиваль современного искусства.',
      imageUrl: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=1200',
      date: '15-30 июня 2023',
      location: 'Москва, парк Горького',
    },
    {
      title: 'Пленэр на побережье',
      description: 'Живопись на природе и выставка работ участников.',
      imageUrl: 'https://images.unsplash.com/photo-1582126892906-5ba118eaf46e?q=80&w=1200',
      date: '1-7 мая 2023',
      location: 'Коста-Брава, Испания',
    },
  ];

  const curator = {
    name: 'Anna Khora',
    title: 'Creative/Art Director в Arttek',
    whatsapp: '34640977144',
    avatar: '/images/anna.jpg',
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        <div className="relative mb-20">
          <h1 className="section-title text-5xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
            {dict.projects}
          </h1>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
        </div>

        {/* Current Offsite Art Events */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">
              Актуальные выездные арт-события
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEvents.map((event, idx) => (
              <div key={idx} className="bg-black rounded-xl shadow-lg overflow-hidden group flex flex-col">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  <Image src={event.imageUrl} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">{event.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{event.date} | {event.location}</p>
                  <p className="text-gray-300 mb-4 flex-1">{event.description}</p>
                  <a href={event.registrationUrl} className="inline-block mt-auto px-6 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition">Регистрация</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration for Participation */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">
              Регистрация на участие
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <form className="max-w-2xl mx-auto bg-black/60 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label className="block mb-2 text-white">ФИО</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" placeholder="Ваше имя" />
            </div>
            <div>
              <label className="block mb-2 text-white">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" placeholder="Ваш email" />
            </div>
            <div>
              <label className="block mb-2 text-white">Телефон</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" placeholder="Ваш телефон" />
            </div>
            <div>
              <label className="block mb-2 text-white">Выберите событие</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500">
                <option value="">Выберите из списка</option>
                {currentEvents.map((event, idx) => (
                  <option key={idx} value={event.title}>{event.title}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition">Отправить заявку</button>
          </form>
        </section>

        {/* Archive of Past Events */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">
              Архив прошедших мероприятий
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, idx) => (
              <div key={idx} className="bg-black/70 rounded-xl shadow-lg overflow-hidden group flex flex-col opacity-60">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  <Image src={event.imageUrl} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">{event.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{event.date} | {event.location}</p>
                  <p className="text-gray-300 mb-4 flex-1">{event.description}</p>
                  <span className="inline-block mt-auto px-4 py-1 bg-gray-700 text-white rounded-lg font-bold text-xs">Архив</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form for New Projects */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">
              Форма подачи проекта
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <form className="max-w-2xl mx-auto bg-black/60 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label className="block mb-2 text-white">Название проекта</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" />
            </div>
            <div>
              <label className="block mb-2 text-white">Описание</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 h-32" />
            </div>
            <div>
              <label className="block mb-2 text-white">Даты проведения</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" />
            </div>
            <div>
              <label className="block mb-2 text-white">Место проведения</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" />
            </div>
            <div>
              <label className="block mb-2 text-white">Контактное лицо</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" />
            </div>
            <div>
              <label className="block mb-2 text-white">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" />
            </div>
            <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition">Отправить заявку</button>
          </form>
        </section>

        {/* Curator Contact Block */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">
              Контакт с куратором
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <div className="max-w-md mx-auto bg-black/80 rounded-xl shadow-lg p-8 flex flex-col items-center">
            <div className="relative w-24 h-24 mb-4">
              <Image src={curator.avatar} alt={curator.name} fill className="object-cover rounded-full border-4 border-red-500" />
            </div>
            <div className="text-xl font-bold text-white mb-1">{curator.name}</div>
            <div className="text-base text-gray-300 mb-2">{curator.title}</div>
            <a href={`https://wa.me/${curator.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-semibold text-lg">WhatsApp: +{curator.whatsapp}</a>
          </div>
        </section>
      </div>
    </div>
  );
} 