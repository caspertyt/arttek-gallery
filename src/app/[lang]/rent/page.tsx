import { getDictionary } from '@/i18n/dictionary';
import Image from 'next/image';

export default async function Rent({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        <div className="relative mb-20">
          <h1 className="section-title text-5xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
            {dict.rent}
          </h1>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
        </div>

        {/* Space Description */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Пространство ARTTEK</h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Пространство ARTTEK</h2>
              <p className="text-gray-300 mb-6">
                Наше пространство идеально подходит для проведения выставок, презентаций, 
                перформансов и других культурных мероприятий. Современное оборудование, 
                профессиональное освещение и удобное расположение в центре города.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>• Площадь: 200 кв.м</li>
                <li>• Высота потолков: 4.5 м</li>
                <li>• Естественное освещение</li>
                <li>• Профессиональная система освещения</li>
                <li>• Wi-Fi</li>
                <li>• Климат-контроль</li>
              </ul>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/arenda/3.jpg"
                alt="Пространство ARTTEK"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Gallery of Space Photos */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Галерея пространства</h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(num => (
              <div key={num} className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-lg">
                <Image
                  src={`/images/arenda/${num}.jpg`}
                  alt={`Фото помещения ${num}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Условия аренды</h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>

          {/* Дневные пакеты */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Аренда в рабочее время (до 19:00)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 border border-white/20 rounded-lg bg-black/40">
                <h3 className="text-xl font-bold mb-4">Пакет 1</h3>
                <p className="text-3xl font-bold mb-2">€56</p>
                <p className="text-gray-300 mb-4">в месяц</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 4 часа в месяц</li>
                  <li>• 14€/час</li>
                  <li className="text-sm text-gray-400">Рыночная цена: 30€/час</li>
                </ul>
              </div>

              <div className="p-6 border border-white/20 rounded-lg bg-black/40">
                <h3 className="text-xl font-bold mb-4">Пакет 2</h3>
                <p className="text-3xl font-bold mb-2">€120</p>
                <p className="text-gray-300 mb-4">в месяц</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 8 часов в месяц</li>
                  <li>• 15€/час</li>
                  <li className="text-sm text-gray-400">Рыночная цена: 30€/час</li>
                </ul>
              </div>

              <div className="p-6 border border-white/20 rounded-lg bg-black/40">
                <h3 className="text-xl font-bold mb-4">Пакет 3</h3>
                <p className="text-3xl font-bold mb-2">€190</p>
                <p className="text-gray-300 mb-4">в месяц</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 16 часов в месяц</li>
                  <li>• 12€/час</li>
                  <li>• 4 часа в неделю</li>
                  <li className="text-sm text-gray-400">Рыночная цена: 30€/час</li>
                </ul>
              </div>

              <div className="p-6 border border-white/20 rounded-lg bg-black/40">
                <h3 className="text-xl font-bold mb-4">Пакет 4</h3>
                <p className="text-3xl font-bold mb-2">€320</p>
                <p className="text-gray-300 mb-4">в месяц</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 32 часа в месяц</li>
                  <li>• 10€/час</li>
                  <li>• 8 часов в неделю</li>
                  <li className="text-sm text-gray-400">Рыночная цена: 30€/час</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Вечерний пакет */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Аренда в пятницу вечером и выходные дни (19:00 - 01:00)</h3>
            <div className="max-w-md mx-auto">
              <div className="p-6 border border-white/20 rounded-lg bg-black/40">
                <h3 className="text-xl font-bold mb-4">Пакет 5</h3>
                <p className="text-3xl font-bold mb-2">€400</p>
                <p className="text-gray-300 mb-4">в месяц</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 16 часов в месяц</li>
                  <li>• 25€/час</li>
                  <li>• 4 часа в неделю</li>
                  <li className="text-sm text-gray-400">Рыночная цена: 60€/час</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-red-500 font-bold mb-4">
              Скидка 50% для участников клуба ARTTEK
            </p>
            <a 
              href="/files/Club Social ARTTEK.docx.pdf" 
              target="_blank" 
              className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Скачать презентацию пространства (PDF)
            </a>
          </div>
        </section>

        {/* Booking Form */}
        <section>
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Забронировать пространство</h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block mb-2">Имя</label>
              <input
                type="text"
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2">Дата</label>
              <input
                type="date"
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2">Сообщение</label>
              <textarea
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 h-32"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Отправить заявку
            </button>
          </form>
        </section>
      </div>
    </div>
  );
} 